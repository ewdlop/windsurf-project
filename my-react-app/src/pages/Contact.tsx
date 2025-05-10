import React, { useState } from 'react';
import { 
  Typography, 
  Container, 
  Box, 
  TextField, 
  Button, 
  Grid 
} from '@mui/material';
import { 
  Email as EmailIcon, 
  Phone as PhoneIcon, 
  LocationOn as LocationIcon 
} from '@mui/icons-material';
import styled from '@emotion/styled';

const ContactSection = styled(Box)`
  background-color: #f4f4f4;
  padding: 64px 0;
`;

const ContactInfoBox = styled(Box)`
  display: flex;
  align-items: center;
  margin-bottom: 16px;
  
  svg {
    margin-right: 16px;
    color: #1976d2;
  }
`;

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement form submission logic
    console.log('Form submitted:', formData);
    alert('Message sent! We will get back to you soon.');
  };

  return (
    <>
      <ContactSection>
        <Container maxWidth="lg">
          <Typography 
            variant="h3" 
            component="h1" 
            align="center" 
            gutterBottom
          >
            Contact Us
          </Typography>
          <Typography 
            variant="h6" 
            component="p" 
            align="center" 
            color="textSecondary" 
            paragraph
          >
            Have a question or want to collaborate? Reach out to us!
          </Typography>
        </Container>
      </ContactSection>

      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <form onSubmit={handleSubmit}>
              <Box display="flex" flexDirection="column" gap={3}>
                <TextField
                  fullWidth
                  label="Name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  variant="outlined"
                  required
                />
                <TextField
                  fullWidth
                  label="Email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  variant="outlined"
                  required
                />
                <TextField
                  fullWidth
                  label="Message"
                  name="message"
                  multiline
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  variant="outlined"
                  required
                />
                <Button 
                  type="submit" 
                  variant="contained" 
                  color="primary" 
                  size="large"
                >
                  Send Message
                </Button>
              </Box>
            </form>
          </Grid>
          
          <Grid item xs={12} md={6}>
            <Box>
              <Typography variant="h5" gutterBottom>
                Contact Information
              </Typography>
              
              <ContactInfoBox>
                <EmailIcon />
                <Typography variant="body1">
                  support@example.com
                </Typography>
              </ContactInfoBox>
              
              <ContactInfoBox>
                <PhoneIcon />
                <Typography variant="body1">
                  +1 (555) 123-4567
                </Typography>
              </ContactInfoBox>
              
              <ContactInfoBox>
                <LocationIcon />
                <Typography variant="body1">
                  123 Tech Lane, Silicon Valley, CA 94000
                </Typography>
              </ContactInfoBox>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default Contact;
