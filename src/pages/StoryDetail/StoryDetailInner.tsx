import React, {useState} from 'react';
import {useStory} from '@/hooks/useStory';
import {useParams} from 'react-router-dom';
import {useComments} from '@/hooks/useComments';
import {StoryDetails, StoryComments} from './components';


const StoryDetailInner = () => {
  const {storyId} = useParams();

  const {
    data: story,
    isLoading: isStoryLoading,
    isSuccess: isStoryFetchSuccess,
    refetch: refetchStory,
  } = useStory(Number(storyId));

  const hasComments = !!story?.kids;
  const commentIds = story?.kids || [];

  const {
    data: comments,
    isLoading: areCommentsLoading,
    refetch: refetchRootComments,
    isSuccess: isCommentsFetchSuccess,
  } = useComments(commentIds, hasComments);

  const [isForceUpdatingComments, setIsForceUpdatingComments] = useState(false);
  const onUpdateComments = async () => {
    setIsForceUpdatingComments(true);
    try {
      await refetchStory();
      await refetchRootComments();
    } catch (err) {
      console.log(err);
    } finally {
      setIsForceUpdatingComments(false);
    }
  };

  return (
    <>
      <StoryDetails
        story={story}
        onUpdateComments={onUpdateComments}
        isStoryLoading={isStoryLoading}
        isStoryFetchSuccess={isStoryFetchSuccess}
        isForceUpdatingComments={isForceUpdatingComments}
      />
      <StoryComments
        comments={comments}
        areCommentsLoading={areCommentsLoading}
        isForceUpdatingComments={isForceUpdatingComments}
        isCommentsFetchSuccess={isCommentsFetchSuccess}
        hasComments={hasComments}
      />
    </>
  );
};

export default StoryDetailInner;
