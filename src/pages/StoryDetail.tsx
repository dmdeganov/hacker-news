import React from 'react';
import {useStory} from '@/hooks/useStory';
import {useNavigate, useParams} from 'react-router-dom';
import {useComments} from '@/hooks/useComments';
import Comment from '@/components/Comment';
import {Button, CircularProgress, Link} from '@mui/material';
import BackIcon from '@/components/icons/BackIcon';

const StoryDetail = () => {
  const {storyId} = useParams();
  const {data: story, isLoading: isStoryLoading, refetch: refetchStory} = useStory(Number(storyId));
  const commentIds = story?.kids || [];
  const {data: comments, isLoading: areCommentsLoading, refetch: refetchRootComments} = useComments(commentIds);

  const onUpdateComments = async () => {
    await refetchStory();
    await refetchRootComments();
  };

  const navigate = useNavigate();
  const onBack = () => navigate('/');

  if (isStoryLoading) return <CircularProgress />;
  if (!story) return <p>Story not found</p>;

  const {url, title, score, time, descendants, by} = story;

  return (
    <>
      <Button variant="outlined" size="small" startIcon={<BackIcon />} onClick={onBack}>
        Back to stories list
      </Button>
      <section className="story-details">
        <Link href={url}>{url}</Link>
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
          <Button variant="outlined" onClick={onUpdateComments} size="small">
            Update comments
          </Button>
        </div>
      </section>
      <section className="story-comments">
        <h2>Comments:</h2>
        {areCommentsLoading ? (
          <div>
            <CircularProgress />
          </div>
        ) : (
          comments?.map(comment => <Comment key={comment.id} comment={comment} nested={false} />)
        )}
      </section>
    </>
  );
};

export default StoryDetail;
