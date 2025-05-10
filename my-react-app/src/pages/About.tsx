import React from 'react';
import { Typography, Container, Box, Grid } from '@mui/material';
import { People as PeopleIcon, Work as WorkIcon, EmojiObjects as EmojiObjectsIcon } from '@mui/icons-material';
import styled from '@emotion/styled';

const SectionBox = styled(Box)`
  background-color: ${props => props.bgcolor || 'transparent'};
  padding: 64px 0;
  text-align: center;
`;

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
    <>
      <SectionBox bgcolor="#f4f4f4">
        <Container maxWidth="md">
          <Typography variant="h2" component="h1" gutterBottom>
            About Our Company
          </Typography>
          <Typography variant="h5" component="p" color="textSecondary" paragraph>
            We are a technology company committed to pushing the boundaries of innovation and creating meaningful solutions.
          </Typography>
        </Container>
      </SectionBox>

      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Grid container spacing={4}>
          {companyValues.map((value, index) => (
            <Grid item xs={12} md={4} key={index}>
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
            </Grid>
          ))}
        </Grid>
      </Container>

      <SectionBox bgcolor="#e0e0e0">
        <Container maxWidth="md">
          <Typography variant="h4" component="h2" gutterBottom>
            Our Story
          </Typography>
          <Typography variant="body1" paragraph>
            Founded in 2020, our company started with a simple mission: to make technology more accessible and powerful for developers worldwide. 
            We believe in the power of innovation and continuous learning.
          </Typography>
        </Container>
      </SectionBox>
    </>
  );
};

export default About;
