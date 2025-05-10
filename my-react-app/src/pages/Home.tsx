import React from 'react';
import { 
  Button, 
  Typography, 
  Stack, 
  Box 
} from '@mui/material';
import RocketIcon from '@mui/icons-material/RocketOutlined';
import CloudDoneIcon from '@mui/icons-material/CloudDone';
import PageLayout from '../components/PageLayout';
import { styled } from '@mui/material/styles';

// Styled Feature Card
const FeatureCard = styled('div')`
  background: white;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0,0,0,0.1);
  padding: 20px;
  text-align: center;
  transition: transform 0.3s ease;
  
  &:hover {
    transform: scale(1.05);
  }
`;

const Home: React.FC = () => {
  return (
    <PageLayout 
      title="Welcome to Your Next Great App" 
      alignItems="center" 
      textAlign="center"
    >
      <Typography variant="h2" component="h1" gutterBottom>
        Welcome to Your Next Great App
      </Typography>
      <Typography variant="h6" component="p" color="textSecondary" gutterBottom>
        Powerful. Elegant. Innovative.
      </Typography>
      
      <Button 
        variant="contained" 
        color="primary" 
        size="large"
        sx={{ minWidth: 200, mb: 4 }}
      >
        Get Started
      </Button>

      {/* Features Section */}
      <Stack 
        direction="row" 
        spacing={3} 
        justifyContent="center" 
        width="100%"
        flexWrap="wrap"
      >
        {[
          { 
            icon: <RocketIcon fontSize="large" color="primary" />, 
            title: 'Fast Performance', 
            description: 'Lightning-quick operations' 
          },
          { 
            icon: <CloudDoneIcon fontSize="large" color="primary" />, 
            title: 'Cloud Ready', 
            description: 'Seamless integration with cloud services.' 
          }
        ].map((feature, index) => (
          <FeatureCard key={index} style={{ flex: '1', margin: '0 15px', maxWidth: '300px' }}>
            <Box display="flex" justifyContent="center" mb={2}>
              {feature.icon}
            </Box>
            <Typography variant="h6" component="h3" gutterBottom>
              {feature.title}
            </Typography>
            <Typography variant="body2" color="textSecondary">
              {feature.description}
            </Typography>
          </FeatureCard>
        ))}
      </Stack>

      {/* Call to Action */}
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
        <Typography variant="h4" gutterBottom>
          Ready to Transform Your Ideas?
        </Typography>
        <Typography variant="subtitle1" paragraph color="textSecondary">
          Join thousands of developers who trust our platform.
        </Typography>
        <Button 
          variant="contained" 
          color="primary" 
          size="large"
          sx={{ minWidth: 200 }}
        >
          Start Your Journey
        </Button>
      </Stack>
    </PageLayout>
  );
};

export default Home;
