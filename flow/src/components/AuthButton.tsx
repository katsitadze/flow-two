import React from 'react';
import { Box, Button,Typography} from '@mui/material';
import { useNavigate } from 'react-router-dom';

const AuthButton: React.FC = () => {
  const navigate= useNavigate()
  return (
    <Box display="flex" gap={2}>
      <Button 
      onClick={() => navigate('/login')}
      style={{background:'white' ,color :'blue'}} 
      sx={{ flex: 1 }}>
        <Typography> LOGIN</Typography>
      </Button>
      <Button 
      onClick={() => navigate('/register')}
      style={{background:'white' ,color :'blue'}}  sx={{ flex: 1 }}>
        <Typography> REGISTER</Typography>
      </Button>
    </Box>
  );
};

export default AuthButton;