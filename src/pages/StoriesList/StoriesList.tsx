import React, {useState} from 'react';
import {useStoriesList} from '@/hooks/useStoriesList';
import StoryInList from '@/pages/StoriesList/components/StoryInList';
import {Button, CircularProgress} from '@mui/material';

const StoriesList = () => {
  const {data: stories, isLoading: isStoriesLoading, refetch, isSuccess} = useStoriesList();
  const [isForcedRefetching, setIsForcedRefetching] = useState(false);
  const isLoading = isStoriesLoading || isForcedRefetching

  const forceRefetchHandler = () => {
    setIsForcedRefetching(true);
    refetch().then(() => setIsForcedRefetching(false));
  };

  return (
    <div className="stories-list">
      <div className="stories-list__heading">
        <h1>Latest Stories</h1>
        <Button
          variant="text"
          onClick={forceRefetchHandler}
          disabled={isLoading}
          size="small"
          className="stories-list__refresh-button">
          Update list
        </Button>
      </div>
      {isLoading ? (
        <div className="stories-list__progress">
          <CircularProgress size={70} />
        </div>
      ) : (
        <div className="stories-list__items">
          {isSuccess && stories.map(story => <StoryInList key={story.id} {...story} />)}
        </div>
      )}
    </div>
  );
};

export default StoriesList;
