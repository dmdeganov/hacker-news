import React from 'react';
import {StoryType} from '@/types';
import {Link} from 'react-router-dom';

const StoryInList = ({id, by, title, descendants, time, score}: StoryType) => {
  const link = `story/${id}`;
  return (
    <div className="story">
      <Link to={link} title={title} className="story-title">
        {title}
      </Link>
      <div className="story-info">
        <span>{`${score} ${score === 1 ? 'point' : 'points'}`}</span>
        <span>{`by ${by}`}</span>
        <span>
          {new Date(time * 1000).toLocaleDateString('en-US', {
            hour: 'numeric',
            minute: 'numeric',
          })}
        </span>
        <span>
          <Link to={link}>{`${descendants} ${descendants === 1 ? 'comment' : 'comments'}`}</Link>
        </span>
      </div>
    </div>
  );
};

export default StoryInList;
