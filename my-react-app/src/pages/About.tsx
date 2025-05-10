import React from 'react';
import { 
  Typography, 
  Box, 
  Grid, 
  Stack
} from '@mui/material';
import { 
  People as PeopleIcon, 
  Work as WorkIcon, 
  EmojiObjects as EmojiObjectsIcon 
} from '@mui/icons-material';
import styled from '@emotion/styled';
import PageLayout from '../components/PageLayout';

const IconBox = styled(Box)`
  display: flex;
  justify-content: center;
  margin-bottom: 16px;
  color: #1976d2;
`;

const About: React.FC = () => {
  const companyValues = [
    {
      icon: <PeopleIcon fontSize="large" />,
      title: 'Our Team',
      description: 'A diverse group of passionate professionals dedicated to innovation.'
    },
    {
      icon: <WorkIcon fontSize="large" />,
      title: 'Our Mission',
      description: 'Empowering developers to build amazing applications with cutting-edge technology.'
    },
    {
      icon: <EmojiObjectsIcon fontSize="large" />,
      title: 'Our Vision',
      description: 'Creating solutions that transform the way people interact with technology.'
    }
  ];

  return (
    <PageLayout 
      title="About Our Company" 
      alignItems="center" 
      textAlign="center"
    >
      <Typography variant="h6" component="p" color="textSecondary" paragraph>
        We are a technology company committed to pushing the boundaries of innovation and creating meaningful solutions.
      </Typography>

      <Box sx={{ 
        display: 'grid', 
        gridTemplateColumns: { xs: '1fr', md: 'repeat(3, 1fr)' }, 
        gap: 4, 
        mt: 4 
      }}>
        {companyValues.map((value, index) => (
          <Box key={index}>
            <Box textAlign="center" p={3}>
              <IconBox>
                {value.icon}
              </IconBox>
              <Typography variant="h6" component="h3" gutterBottom>
                {value.title}
              </Typography>
              <Typography variant="body2" color="textSecondary">
                {value.description}
              </Typography>
            </Box>
          </Box>
        ))}
      </Box>

      <Stack 
        spacing={3} 
        alignItems="center" 
        textAlign="center" 
        width="100%" 
        mt={4}
        sx={{ 
          backgroundColor: '#f4f4f4', 
          py: 4, 
          borderRadius: 2 
        }}
      >
        <Typography variant="h4" component="h2" gutterBottom>
          Our Story
        </Typography>
        <Typography variant="body1" paragraph color="textSecondary" sx={{ maxWidth: 600 }}>
          Founded in 2020, our company started with a simple mission: to make technology more accessible and powerful for developers worldwide. 
          We believe in the power of innovation and continuous learning.
        </Typography>
      </Stack>
    </PageLayout>
  );
};

export default About;
