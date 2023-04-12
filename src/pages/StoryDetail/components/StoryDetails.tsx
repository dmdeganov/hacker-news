import React from 'react';
import {Button, CircularProgress, Link} from '@mui/material';
import {StoryType} from '@/types';

interface Props {
  story: StoryType | undefined;
  onUpdateComments: () => void;
  isStoryLoading: boolean;
  isStoryFetchSuccess: boolean;
  isForceUpdatingComments: boolean;
}
const StoryDetails = ({story, onUpdateComments, isStoryLoading, isStoryFetchSuccess, isForceUpdatingComments}: Props) => {
  if (isStoryLoading)
    return (
      <div className="story-page__loading">
        <CircularProgress />
      </div>
    );

  if (!isStoryFetchSuccess) return <p>Something went wrong</p>;

  const {url, title, score, time, descendants, by} = story as StoryType;

  return (
    <section className="story-details">
      <Link className="story-details__link" href={url} target="_blank">
        {url}
      </Link>
      <h1>{title}</h1>
      <div className="story-details__info">
        <span>{`${score} ${score === 1 ? 'point' : 'points'}`}</span>
        <span>{`by ${by}`}</span>
        <span>
          {new Date(time * 1000).toLocaleDateString('en-US', {
            hour: 'numeric',
            minute: 'numeric',
          })}
        </span>
        <span>{`${descendants} ${descendants === 1 ? 'comment' : 'comments'}`}</span>
        <Button
          variant="outlined"
          onClick={onUpdateComments}
          size="small"
          disabled={isForceUpdatingComments}
        >
          Update comments
        </Button>
      </div>
    </section>
  );
};

export default StoryDetails;
