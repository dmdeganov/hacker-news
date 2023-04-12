import React from 'react';
import {Button} from '@mui/material';
import BackIcon from '@/components/icons/BackIcon';
import {useNavigate} from 'react-router-dom';

interface Props {
  children?: React.ReactNode;
}

const StoryPageLayout: React.FC<Props> = ({children}) => {
  const navigate = useNavigate();
  const onBack = () => navigate('/');

  return (
    <div className="story-page">
      <Button variant="outlined" size="small" startIcon={<BackIcon />} onClick={onBack}>
        Back to stories list
      </Button>
      {children}
    </div>
  );
};

export default StoryPageLayout;
