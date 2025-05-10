import React, { useState } from 'react';
import { 
  Typography, 
  Box, 
  TextField, 
  Button, 
  Stack 
} from '@mui/material';
import { 
  Email as EmailIcon, 
  Phone as PhoneIcon, 
  LocationOn as LocationIcon 
} from '@mui/icons-material';
import { styled } from '@mui/material/styles';
import PageLayout from '../components/PageLayout';

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
    <PageLayout 
      title="Contact Us" 
      alignItems="center" 
      textAlign="center"
    >
      <Typography 
        variant="h6" 
        component="p" 
        color="textSecondary" 
        paragraph
      >
        Have a question or want to collaborate? Reach out to us!
      </Typography>

      <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' }, gap: 4, mt: 4 }}>
        <Box>
          <form onSubmit={handleSubmit}>
            <Stack spacing={3}>
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
                sx={{ minWidth: 200 }}
              >
                Send Message
              </Button>
            </Stack>
          </form>
        </Box>
        
        <Box>
          <Stack spacing={2}>
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
          </Stack>
        </Box>
      </Box>
    </PageLayout>
  );
};

export default Contact;
