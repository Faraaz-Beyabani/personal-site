import { Box, Container, Typography, Stack, IconButton, Link } from '@mui/material'
import GitHubIcon from '@mui/icons-material/GitHub'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import EmailIcon from '@mui/icons-material/Email'

function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: 'grey.900',
        color: 'white',
        py: 4,
        mt: 'auto',
      }}
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: 2,
          }}
        >
          <Typography variant="body2">
            &copy; {currentYear} Faraaz Beyabani. All rights reserved.
          </Typography>
          <Stack direction="row" spacing={2}>
            <IconButton
              component={Link}
              href="https://github.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              sx={{
                color: 'white',
                '&:hover': {
                  color: 'primary.main',
                  transform: 'translateY(-2px)',
                },
                transition: 'all 0.3s ease',
              }}
            >
              <GitHubIcon />
            </IconButton>
            <IconButton
              component={Link}
              href="https://linkedin.com/in/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              sx={{
                color: 'white',
                '&:hover': {
                  color: 'primary.main',
                  transform: 'translateY(-2px)',
                },
                transition: 'all 0.3s ease',
              }}
            >
              <LinkedInIcon />
            </IconButton>
            <IconButton
              component={Link}
              href="mailto:your.email@example.com"
              aria-label="Email"
              sx={{
                color: 'white',
                '&:hover': {
                  color: 'primary.main',
                  transform: 'translateY(-2px)',
                },
                transition: 'all 0.3s ease',
              }}
            >
              <EmailIcon />
            </IconButton>
          </Stack>
        </Box>
      </Container>
    </Box>
  )
}

export default Footer
