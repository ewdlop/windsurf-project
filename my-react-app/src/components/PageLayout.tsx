import React from 'react';
import { 
  Container, 
  Typography, 
  Paper, 
  Stack, 
  type StackProps 
} from '@mui/material';

interface PageLayoutProps extends StackProps {
  title: string;
  children: React.ReactNode;
}

const PageLayout: React.FC<PageLayoutProps> = ({ 
  title, 
  children, 
  ...stackProps 
}) => {
  return (
    <Container maxWidth="sm" sx={{ py: 4 }}>
      <Paper elevation={3} sx={{ p: 4, borderRadius: 2 }}>
        <Stack spacing={3} {...stackProps}>
          <Typography 
            variant="h4" 
            component="h1" 
            align="center" 
            gutterBottom
          >
            {title}
          </Typography>
          {children}
        </Stack>
      </Paper>
    </Container>
  );
};

export default PageLayout;
