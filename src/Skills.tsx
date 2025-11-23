import React from 'react';
import Typography from '@mui/joy/Typography';
import Box from '@mui/joy/Box';
import Chip from '@mui/joy/Chip';
import Card from '@mui/joy/Card';
import Grid from '@mui/joy/Grid';

const skillCategories = [
    {
        title: "Languages",
        skills: ["Java", "Python", "TypeScript", "JavaScript", "SQL", "HTML/CSS", "Bash"]
    },
    {
        title: "Frameworks & Libraries",
        skills: ["React", "Spring Boot", "Spring JPA", "GraphQL", "Jinja", "Node.js", "Express", "Next.js", "Material UI", "Joy UI"]
    },
    {
        title: "Tools & Platforms",
        skills: ["Apache Airflow", "dbt", "Git", "Docker", "Kubernetes", "GCP", "Kafka", "PostgreSQL", "Cursor", "Claude Code", "Codex", "MongoDB"]
    }
];

function Skills() {
    return (
        <Box sx={{ maxWidth: '800px', margin: '0 auto', paddingBottom: 5 }}>
            <Typography level="h2" sx={{ mb: 3, display: 'flex', alignItems: 'center' }}>
                Skills
            </Typography>
            <Grid container spacing={2}>
                {skillCategories.map((category, index) => (
                    <Grid key={index} xs={12} md={12}>
                        <Card variant="outlined" sx={{ bgcolor: 'background.surface', border: 'none', boxShadow: 'sm' }}>
                            <Typography level="h4" sx={{ mb: 2 }}>{category.title}</Typography>
                            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                                {category.skills.map((skill, skillIndex) => (
                                    <Chip
                                        key={skillIndex}
                                        variant="soft"
                                        color="primary"
                                        sx={{ fontWeight: '500' }}
                                    >
                                        {skill}
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

export default Skills;
