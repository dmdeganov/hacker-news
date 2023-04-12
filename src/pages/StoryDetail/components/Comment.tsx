import React, {useRef, useState} from 'react';
import {CommentType} from '@/types';
import {CircularProgress} from '@mui/material';
import {useComments} from '@/hooks/useComments';
import ArrowRightIcon from '@/components/icons/ArrowRightIcon';

interface CommentProps {
  comment: CommentType;
  nested?: boolean;
}

const Comment = ({comment, nested = true}: CommentProps) => {
  const [nestedCommentsShown, setNestedCommentsShown] = useState(false);
  const hasNestedComments = !!comment?.kids;
  const nestedCommentIds = comment?.kids || [];
  const nestedCommentsWereRequestedRef = useRef(false);

  const toggle = () => {
    if (!nestedCommentsWereRequestedRef.current) {
      nestedCommentsWereRequestedRef.current = true;
    }
    setNestedCommentsShown(prev => !prev);
  };

  const {data: nestedComments, isLoading: isNestedCommentsLoading} = useComments(
    nestedCommentIds,
    nestedCommentsWereRequestedRef.current,
  );

  if (!comment) return null;

  const nestedCommentsJSX =
    hasNestedComments &&
    (isNestedCommentsLoading ? (
      <div>
        <CircularProgress size={24} />
      </div>
    ) : (
      nestedComments?.map(comment => <Comment key={comment.id} comment={comment} />)
    ));

  return (
    <div className={`comment${nested ? ' comment--nested' : ''}`}>
      <div  className="comment__text" dangerouslySetInnerHTML={{__html: comment.text || ''}} />
      <div className="comment__info">
        <div onClick={toggle} role="button" tabIndex={0} className={`comment__show-comments-btn${!hasNestedComments ? ' disabled' : ''}`}>
          {hasNestedComments && <ArrowRightIcon className={`comment__arrow${nestedCommentsShown ? ' comment__arrow--expanded' : ''}`}/>}
          <span>{`${nestedCommentIds.length || 0} ${nestedCommentIds.length === 1 ? 'reply' : 'replies'}`}</span>
        </div>
        <span>
          {new Date(comment.time * 1000).toLocaleDateString('en-US', {
            hour: 'numeric',
            minute: 'numeric',
          })}
        </span>
        <span>{`by ${comment.by}`}</span>
      </div>
      {nestedCommentsShown && nestedCommentsJSX}
    </div>
  );
};
export default Comment;
