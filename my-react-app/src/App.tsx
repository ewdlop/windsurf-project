import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { AppBar, Toolbar, Button, Typography } from '@mui/material';
import { store } from './store';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Todos from './pages/Todos';

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

function App() {
  return (
    <Provider store={store}>
      <Router>
        <ThemeProvider theme={theme}>
          {/* Navigation */}
          <AppBar position="static" color="primary">
            <Toolbar>
              <Typography variant="h6" style={{ flexGrow: 1 }}>
                My App
              </Typography>
              <Button color="inherit" component={Link} to="/">Home</Button>
              <Button color="inherit" component={Link} to="/about">About</Button>
              <Button color="inherit" component={Link} to="/contact">Contact</Button>
              <Button color="inherit" component={Link} to="/todos">Todos</Button>
            </Toolbar>
          </AppBar>

          {/* Routes */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/todos" element={<Todos />} />
          </Routes>
        </ThemeProvider>
      </Router>
    </Provider>
  );
}

export default App;
