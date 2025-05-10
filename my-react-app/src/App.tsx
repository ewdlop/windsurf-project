import React from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { Button, Typography, Container, Box, Card, CardContent } from '@mui/material';
import { Rocket as RocketIcon, Build as BuildIcon, CloudDone as CloudDoneIcon } from '@mui/icons-material';
import styled from '@emotion/styled';

// Create a custom theme
const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2',
    },
    secondary: {
      main: '#dc004e',
    },
  },
  typography: {
    fontFamily: 'Roboto, Arial, sans-serif',
  },
});

// Styled Hero Section
const HeroSection = styled(Box)`
  background: linear-gradient(135deg, #1976d2 0%, #0d47a1 100%);
  color: white;
  padding: 100px 0;
  text-align: center;
`;

// Styled Feature Card
const FeatureCard = styled(Card)`
  height: 100%;
  display: flex;
  flex-direction: column;
  text-align: center;
  transition: transform 0.3s ease;
  
  &:hover {
    transform: scale(1.05);
  }
`;

function App() {
  return (
    <ThemeProvider theme={theme}>
      {/* Hero Section */}
      <HeroSection>
        <Container maxWidth="lg">
          <Typography variant="h2" component="h1" gutterBottom>
            Welcome to Your Next Great App
          </Typography>
          <Typography variant="h5" component="p" gutterBottom>
            Powerful. Elegant. Innovative.
          </Typography>
          <Box mt={4}>
            <Button 
              variant="contained" 
              color="secondary" 
              size="large"
            >
              Get Started
            </Button>
          </Box>
        </Container>
      </HeroSection>

      {/* Features Section */}
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Typography 
          variant="h4" 
          component="h2" 
          align="center" 
          gutterBottom
        >
          Our Key Features
        </Typography>
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          {[
            { 
              icon: <RocketIcon fontSize="large" color="primary" />, 
              title: 'Fast Performance', 
              description: 'Blazing fast application with modern tech stack.' 
            },
            { 
              icon: <BuildIcon fontSize="large" color="primary" />, 
              title: 'Customizable', 
              description: 'Easily extend and customize to fit your needs.' 
            },
            { 
              icon: <CloudDoneIcon fontSize="large" color="primary" />, 
              title: 'Cloud Ready', 
              description: 'Seamless integration with cloud services.' 
            }
          ].map((feature, index) => (
            <div key={index} style={{ flex: '1', margin: '0 15px', maxWidth: '300px' }}>
              <FeatureCard elevation={3}>
                <CardContent>
                  <Box display="flex" justifyContent="center" mb={2}>
                    {feature.icon}
                  </Box>
                  <Typography variant="h6" component="h3" gutterBottom>
                    {feature.title}
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    {feature.description}
                  </Typography>
                </CardContent>
              </FeatureCard>
            </div>
          ))}
        </div>
      </Container>

      {/* Call to Action */}
      <Box 
        bgcolor="#f4f4f4" 
        py={8} 
        textAlign="center"
      >
        <Container maxWidth="md">
          <Typography variant="h4" gutterBottom>
            Ready to Transform Your Ideas?
          </Typography>
          <Typography variant="subtitle1" paragraph>
            Join thousands of developers who trust our platform.
          </Typography>
          <Button 
            variant="contained" 
            color="primary" 
            size="large"
          >
            Start Your Journey
          </Button>
        </Container>
      </Box>
    </ThemeProvider>
  );
}

export default App;
