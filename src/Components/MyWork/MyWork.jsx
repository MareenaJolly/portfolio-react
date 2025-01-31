import React from 'react';
import './MyWork.css';
import theme_pattern from '../../assets/theme_pattern.svg';
import mywork_data from '../../assets/mywork_data';
import arrow_icon from '../../assets/arrow_icon.svg';

const MyWork = () => {
  return (
    <div id='work' className='mywork'>
      <div className="mywork-title">
        <h1>My latest works</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="mywork-container">
        {mywork_data.map((work, index) => {
          return (
            <div key={index} className="mywork-item">
              <img src={work.w_img} alt={work.w_name} />
              <div className="overlay">
                <h2>{work.w_name}</h2>
                <a href={work.github_link} target="_blank" rel="noopener noreferrer">
                  <button>View on GitHub</button>
                </a>
              </div>
            </div>
          );
        })}
      </div>
      <div className="mywork-showmore">
      <a
          href="https://github.com/MareenaJolly?tab=repositories" 
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2"
        >
        <p>Show More</p>
        <img src={arrow_icon} alt="" />
        </a>
      </div>
    </div>
  );
}

export default MyWork;