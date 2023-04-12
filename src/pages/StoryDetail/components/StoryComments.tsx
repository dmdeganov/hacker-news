import React from 'react';
import {CircularProgress} from '@mui/material';
import {CommentType} from '@/types';
import Comment from './Comment';

interface Props {
  comments: CommentType[] | undefined;
  areCommentsLoading: boolean;
  isForceUpdatingComments: boolean;
  isCommentsFetchSuccess: boolean;
  hasComments: boolean;
}

const StoryComments = ({
  comments,
  areCommentsLoading,
  isForceUpdatingComments,
  isCommentsFetchSuccess,
  hasComments,
}: Props) => {
  const shouldShowEmptyCommentsMessage =
    !isForceUpdatingComments && (!hasComments || (isCommentsFetchSuccess && !comments?.length));

  return (
    <section className="story-comments">
      <h2>Comments:</h2>
      {areCommentsLoading || isForceUpdatingComments ? (
        <div className="story-page__comments-loading">
          <CircularProgress />
        </div>
      ) : (
        isCommentsFetchSuccess &&
        (comments as CommentType[]).map(comment => <Comment key={comment.id} comment={comment} nested={false} />)
      )}
      {shouldShowEmptyCommentsMessage && (
        <div className="story-page__empty-comments">
          <p>Wow, such empty</p>
        </div>
      )}
    </section>
  );
};

export default StoryComments;
