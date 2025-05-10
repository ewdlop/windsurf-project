import React, { useState } from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { Button, Typography, Container, Box } from '@mui/material';
import styled from '@emotion/styled';

// Create a custom theme
const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2',
    },
  },
});

// Styled component example
const StyledBox = styled(Box)`
  background-color: #f0f0f0;
  padding: 20px;
  border-radius: 8px;
  margin-top: 20px;
`;

function App() {
  const [count, setCount] = useState(0);

  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth="sm">
        <Box textAlign="center" my={4}>
          <Typography variant="h4" component="h1" gutterBottom>
            React + TypeScript + Material-UI
          </Typography>
          
          <StyledBox>
            <Typography variant="body1" gutterBottom>
              Count: {count}
            </Typography>
            
            <Button 
              variant="contained" 
              color="primary" 
              onClick={() => setCount(count + 1)}
            >
              Increment
            </Button>
          </StyledBox>
        </Box>
      </Container>
    </ThemeProvider>
  );
}

export default App;
