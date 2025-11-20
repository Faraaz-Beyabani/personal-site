import {
  Container,
  Box,
  Typography,
  Grid,
  Chip,
  Button,
  Avatar,
  Stack,
} from '@mui/material'
import { Gradient } from '@mui/icons-material'

function About() {
  const skills = [
    'React',
    'JavaScript',
    'TypeScript',
    'Node.js',
    'CSS',
    'HTML',
    'Git',
    'Vite',
  ]

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <Box
      id="about"
      sx={{
        pt: { xs: 12, md: 16 },
        pb: { xs: 8, md: 12 },
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4} alignItems="center">
          <Grid item xs={12} md={6}>
            <Typography
              variant="h1"
              component="h1"
              sx={{
                fontSize: { xs: '2.5rem', md: '3.5rem', lg: '4rem' },
                fontWeight: 800,
                mb: 2,
                lineHeight: 1.2,
              }}
            >
              Hi, I'm{' '}
              <Box
                component="span"
                sx={{
                  background: 'linear-gradient(135deg, #6366f1, #8b5cf6)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                Faraaz Beyabani
              </Box>
            </Typography>
            <Typography
              variant="h5"
              sx={{
                color: 'text.secondary',
                mb: 3,
                fontWeight: 500,
              }}
            >
              Full Stack Developer
            </Typography>
            <Typography
              variant="body1"
              sx={{
                color: 'text.secondary',
                mb: 4,
                fontSize: '1.125rem',
                lineHeight: 1.8,
                maxWidth: 600,
              }}
            >
              I'm a passionate developer who loves building beautiful and functional web
              applications. With expertise in modern JavaScript frameworks and a keen eye
              for design, I create digital experiences that make a difference.
            </Typography>
            <Box sx={{ mb: 4 }}>
              <Typography variant="h6" sx={{ mb: 2, fontWeight: 600 }}>
                Skills & Technologies
              </Typography>
              <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap>
                {skills.map((skill) => (
                  <Chip
                    key={skill}
                    label={skill}
                    sx={{
                      background: 'linear-gradient(135deg, #6366f1, #8b5cf6)',
                      color: 'white',
                      fontWeight: 500,
                      '&:hover': {
                        transform: 'translateY(-2px)',
                        boxShadow: 3,
                      },
                      transition: 'all 0.2s ease',
                    }}
                  />
                ))}
              </Stack>
            </Box>
            <Stack direction="row" spacing={2} flexWrap="wrap">
              <Button
                variant="contained"
                size="large"
                onClick={() => scrollToSection('contact')}
                sx={{
                  background: 'linear-gradient(135deg, #6366f1, #8b5cf6)',
                  '&:hover': {
                    background: 'linear-gradient(135deg, #6366f1, #8b5cf6)',
                    transform: 'translateY(-2px)',
                    boxShadow: 6,
                  },
                }}
              >
                Get In Touch
              </Button>
              <Button
                variant="outlined"
                size="large"
                onClick={() => scrollToSection('projects')}
                sx={{
                  borderColor: 'primary.main',
                  color: 'primary.main',
                  '&:hover': {
                    borderColor: 'primary.main',
                    backgroundColor: 'primary.main',
                    color: 'white',
                    transform: 'translateY(-2px)',
                  },
                }}
              >
                View Projects
              </Button>
            </Stack>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <Avatar
                sx={{
                  width: { xs: 250, md: 350 },
                  height: { xs: 250, md: 350 },
                  background: 'linear-gradient(135deg, #6366f1, #8b5cf6)',
                  animation: 'float 6s ease-in-out infinite',
                  '@keyframes float': {
                    '0%, 100%': {
                      transform: 'translateY(0px)',
                    },
                    '50%': {
                      transform: 'translateY(-20px)',
                    },
                  },
                }}
              >
                <Gradient sx={{ fontSize: { xs: 120, md: 180 } }} />
              </Avatar>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}

export default About
