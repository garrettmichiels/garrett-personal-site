import React from 'react';
import Typography from '@mui/joy/Typography';
import Box from '@mui/joy/Box';
import Card from '@mui/joy/Card';
import CardOverflow from '@mui/joy/CardOverflow';
import Grid from '@mui/joy/Grid';
import Link from '@mui/joy/Link';
import AspectRatio from '@mui/joy/AspectRatio';
import Chip from '@mui/joy/Chip';
import OpenInNewRoundedIcon from '@mui/icons-material/OpenInNewRounded';

// Sample project data
const projects = [
  {
    title: "Personal Website",
    description: "A modern, responsive personal portfolio website built with React and Joy UI. Features a clean design, dark mode support, and smooth animations.",
    technologies: ["React", "Joy UI", "TypeScript"],
    link: "https://github.com/garrettmichiels/garrett-personal-site",
    date: "November 2024",
    image: "/images/project-placeholder.png" // You'll need to add this image or use a placeholder service
  },
  {
    title: "AI Experimentation Hub",
    description: "A platform for experimenting with various LLM APIs and MCP servers. Focuses on providing a seamless environment for testing and iteration.",
    technologies: ["Next.js", "Python", "LangChain"],
    link: "#",
    date: "In Progress",
    image: "/images/project-placeholder.png"
  },
  // Add more projects as needed
];

function Projects() {
  return (
    <Box sx={{ maxWidth: '800px', margin: '0 auto', paddingBottom: 5 }}>
      <Typography level="h2" sx={{ mb: 3, display: 'flex', alignItems: 'center' }}>
        Projects
      </Typography>
      <Grid container spacing={3}>
        {projects.map((project, index) => (
          <Grid key={index} xs={12} md={6}>
            <Card
              variant="outlined"
              sx={{
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                transition: 'transform 0.3s, box-shadow 0.3s',
                '&:hover': {
                  transform: 'translateY(-4px)',
                  boxShadow: 'md',
                  borderColor: 'primary.500',
                },
                bgcolor: 'background.surface',
              }}
            >
              {/* <CardOverflow>
                <AspectRatio ratio="2">
                  <img
                    src={project.image}
                    alt={project.title}
                    loading="lazy"
                  />
                </AspectRatio>
              </CardOverflow> */}
              <Box sx={{ p: 0, flexGrow: 1 }}>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 1 }}>
                  <Typography level="h3" fontSize="lg" fontWeight="lg">
                    {project.title}
                  </Typography>
                  {project.link !== '#' && (
                    <Link
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      textColor="neutral.500"
                      sx={{ '&:hover': { color: 'primary.500' } }}
                    >
                      <OpenInNewRoundedIcon />
                    </Link>
                  )}
                </Box>
                <Typography level="body-sm" textColor="text.tertiary" sx={{ mb: 2 }}>
                  {project.date}
                </Typography>
                <Typography level="body-md" sx={{ mb: 2 }}>
                  {project.description}
                </Typography>
              </Box>
              <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mt: 'auto' }}>
                {project.technologies.map((tech, i) => (
                  <Chip key={i} size="sm" variant="soft" color="neutral">
                    {tech}
                  </Chip>
                ))}
              </Box>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default Projects;
