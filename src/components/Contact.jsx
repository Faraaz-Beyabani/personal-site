import { useState } from 'react'
import {
  Container,
  Box,
  Typography,
  Grid,
  TextField,
  Button,
  Card,
  CardContent,
  Stack,
  Avatar,
  Link,
} from '@mui/material'
import EmailIcon from '@mui/icons-material/Email'
import GitHubIcon from '@mui/icons-material/GitHub'
import LinkedInIcon from '@mui/icons-material/LinkedIn'

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    alert("Thank you for your message! I'll get back to you soon.")
    setFormData({ name: '', email: '', message: '' })
  }

  const contactInfo = [
    {
      icon: <EmailIcon />,
      title: 'Email',
      content: 'beyabanifaraaz@gmail.com',
      href: 'mailto:beyabanifaraaz@gmail.com',
    },
    {
      icon: <GitHubIcon />,
      title: 'GitHub',
      content: 'github.com/Faraaz-Beyabani',
      href: 'https://github.com/Faraaz-Beyabani',
    },
    {
      icon: <LinkedInIcon />,
      title: 'LinkedIn',
      content: 'linkedin.com/in/faraaz-beyabani/',
      href: 'https://linkedin.com/in/faraaz-beyabani/',
    },
  ]

  return (
    <Box
      id="contact"
      sx={{
        py: { xs: 8, md: 12 },
        backgroundColor: 'background.default',
      }}
    >
      <Container maxWidth="lg">
        <Typography
          variant="h2"
          component="h2"
          sx={{
            textAlign: 'center',
            mb: 2,
            fontWeight: 800,
            background: 'linear-gradient(135deg, #6366f1, #8b5cf6)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            fontSize: { xs: '2rem', md: '3rem' },
          }}
        >
          Get In Touch
        </Typography>
        <Typography
          variant="body1"
          sx={{
            textAlign: 'center',
            color: 'text.secondary',
            mb: 6,
            fontSize: '1.125rem',
            maxWidth: 600,
            mx: 'auto',
          }}
        >
          Have a question or want to work together? I'd love to hear from you!
        </Typography>
        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <Stack spacing={3}>
              {contactInfo.map((info, index) => (
                <Box key={index} sx={{ display: 'flex', gap: 2, alignItems: 'flex-start' }}>
                  <Avatar
                    sx={{
                      background: 'linear-gradient(135deg, #6366f1, #8b5cf6)',
                      width: 56,
                      height: 56,
                    }}
                  >
                    {info.icon}
                  </Avatar>
                  <Box>
                    <Typography variant="h6" sx={{ mb: 0.5, fontWeight: 600 }}>
                      {info.title}
                    </Typography>
                    <Link
                      href={info.href}
                      target={info.href.startsWith('http') ? '_blank' : undefined}
                      rel={info.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                      color="text.secondary"
                      sx={{
                        textDecoration: 'none',
                        '&:hover': {
                          color: 'primary.main',
                        },
                      }}
                    >
                      {info.content}
                    </Link>
                  </Box>
                </Box>
              ))}
            </Stack>
          </Grid>
          <Grid item xs={12} md={8}>
            <Card sx={{ boxShadow: 3 }}>
              <CardContent sx={{ p: 4 }}>
                <form onSubmit={handleSubmit}>
                  <Stack spacing={3}>
                    <TextField
                      fullWidth
                      label="Name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      variant="outlined"
                    />
                    <TextField
                      fullWidth
                      label="Email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      variant="outlined"
                    />
                    <TextField
                      fullWidth
                      label="Message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      multiline
                      rows={5}
                      variant="outlined"
                    />
                    <Button
                      type="submit"
                      variant="contained"
                      size="large"
                      sx={{
                        background: 'linear-gradient(135deg, #6366f1, #8b5cf6)',
                        '&:hover': {
                          background: 'linear-gradient(135deg, #6366f1, #8b5cf6)',
                          transform: 'translateY(-2px)',
                          boxShadow: 6,
                        },
                      }}
                    >
                      Send Message
                    </Button>
                  </Stack>
                </form>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}

export default Contact
