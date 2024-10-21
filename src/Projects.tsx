import React from 'react';
import { FaLink } from "react-icons/fa";
import Typography from '@mui/joy/Typography';
import Box from '@mui/joy/Box';
import Card from '@mui/joy/Card';
import Grid from '@mui/joy/Grid';
import Link from '@mui/joy/Link';

// Sample project data
const projects = [
  {
    title: "Project 1",
    description: "A brief description of project 1.",
    technologies: ["React", "Node.js", "MongoDB"],
    link: "https://github.com/yourusername/project1"
  },
  {
    title: "Project 2",
    description: "A brief description of project 2.",
    technologies: ["Vue.js", "Express", "PostgreSQL"],
    link: "https://github.com/yourusername/project2"
  },
  // Add more projects as needed
];

function Projects() {
  return (
    <Box sx={{ maxWidth: '800px', margin: '0 auto', paddingBottom: 5 }}>
      <Typography level="h2" sx={{ mb: 2, display: 'flex', alignItems: 'center' }}>

        Projects
      </Typography>
      <Grid container spacing={2}>
        {projects.map((project, index) => (
          <Grid key={index} xs={12} sm={6} md={4}>
            <Card 
              variant="plain" 
              sx={{ 
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                p: 2,
                boxShadow: 'none',
                border: 'none',
                bgcolor: 'background.body',
              }}
            >
              <Typography level="h3">{project.title}</Typography>
              <Typography sx={{ mb: 1, flexGrow: 1 }}>{project.description}</Typography>
              <Typography level="body-sm" sx={{ mb: 1 }}>
                Technologies: {project.technologies.join(', ')}
              </Typography>
              <Link href={project.link} target="_blank" rel="noopener noreferrer">
                View Project
              </Link>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default Projects;
