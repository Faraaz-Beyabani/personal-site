import {
  Container,
  Box,
  Typography,
  Grid,
  Card,
  CardContent,
  CardActions,
  Chip,
  Stack,
  IconButton,
} from '@mui/material'
import LaunchIcon from '@mui/icons-material/Launch'
import GitHubIcon from '@mui/icons-material/GitHub'

function Projects() {
  const projects = [
    {
      id: 1,
      title: 'Project One',
      description:
        'A modern web application built with React and Vite. Features responsive design and smooth animations.',
      technologies: ['React', 'Vite', 'CSS'],
      link: '#',
      github: '#',
    },
    {
      id: 2,
      title: 'Project Two',
      description:
        'An interactive dashboard with real-time data visualization and user authentication.',
      technologies: ['React', 'Node.js', 'MongoDB'],
      link: '#',
      github: '#',
    },
    {
      id: 3,
      title: 'Project Three',
      description:
        'A mobile-first e-commerce platform with payment integration and inventory management.',
      technologies: ['React', 'Express', 'PostgreSQL'],
      link: '#',
      github: '#',
    },
  ]

  return (
    <Box
      id="projects"
      sx={{
        py: { xs: 8, md: 12 },
        backgroundColor: 'background.paper',
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
          Projects
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
          Here are some of my recent projects. Each one represents a unique challenge and
          learning experience.
        </Typography>
        <Grid container spacing={4}>
          {projects.map((project) => (
            <Grid item xs={12} sm={6} lg={4} key={project.id}>
              <Card
                sx={{
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-5px)',
                    boxShadow: 6,
                  },
                }}
              >
                <CardContent sx={{ flexGrow: 1 }}>
                  <Box
                    sx={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'flex-start',
                      mb: 2,
                    }}
                  >
                    <Typography variant="h5" component="h3" sx={{ fontWeight: 700 }}>
                      {project.title}
                    </Typography>
                    <Box>
                      <IconButton
                        size="small"
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="View project"
                      >
                        <LaunchIcon />
                      </IconButton>
                      <IconButton
                        size="small"
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="View on GitHub"
                      >
                        <GitHubIcon />
                      </IconButton>
                    </Box>
                  </Box>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{ mb: 2, lineHeight: 1.7 }}
                  >
                    {project.description}
                  </Typography>
                  <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap>
                    {project.technologies.map((tech, index) => (
                      <Chip
                        key={index}
                        label={tech}
                        size="small"
                        variant="outlined"
                        sx={{
                          borderColor: 'divider',
                          '&:hover': {
                            borderColor: 'primary.main',
                            backgroundColor: 'action.hover',
                          },
                        }}
                      />
                    ))}
                  </Stack>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  )
}

export default Projects
