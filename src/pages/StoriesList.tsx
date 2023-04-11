import React, {useState} from 'react';
import {useStoriesList} from '@/hooks/useStoriesList';
import StoryInList from '@/components/StoryInList';
import {Button, CircularProgress} from '@mui/material';

const StoriesList = () => {
  const {data: stories, isLoading, refetch} = useStoriesList();
  const [isForcedRefetching, setIsForcedRefetching] = useState(false);

  const forceRefetchHandler = () => {
    setIsForcedRefetching(true);
    refetch().then(() => setIsForcedRefetching(false));
  };

  return (
    <div className="stories-list">
      <div className="stories-list__heading">
        <h1>Latest Stories</h1>
        <Button variant="text" onClick={forceRefetchHandler} size="small" className="stories-list__refresh-button">
          Update list
        </Button>
      </div>
      {14 || isLoading || isForcedRefetching ? (
        <div className="stories-list__progress">
          <CircularProgress />
        </div>
      ) : (
        <div className="stories-list__items">
          {stories?.map(story => (
            <StoryInList key={story.id} {...story} />
          ))}
        </div>
      )}
    </div>
  );
};

export default StoriesList;
