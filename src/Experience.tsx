import * as React from 'react';
import AspectRatio from '@mui/joy/AspectRatio';
import Card from '@mui/joy/Card';
import Typography from '@mui/joy/Typography';
import List from '@mui/joy/List';
import ListItem from '@mui/joy/ListItem';
import ListItemContent from '@mui/joy/ListItemContent';
import Box from '@mui/joy/Box';
import Chip from '@mui/joy/Chip';
import theme from './theme';

const experiences = [
  {
    title: "Software Engineer Co-Op/Intern",
    company: "BlackBerry",
    date: "May 2023 - August 2023",
    location: "Austin, TX",
    logo: "../images/blackberry.png",
    details: [
      "Implemented high-performance API bulk update and delete features using Spring JPA database interactions and Amazon Simple Storage Service (S3) operations resulting in improved query processing time compared to singular API calls.",
      "Resolved a critical issue related to query filtering functionality. Troubleshot and developed a solution that accurately filtered data using API inputs and specification based base64url encoding, while ensuring data integrity and security.",
      "Integrated extensive audit logging system for API calls within a new Java microservice and utilized existing Apache Kafka services to transfer data to legacy audit system."
    ],
    skills: ["Java", "Spring Boot", "Spring JPA", "Kafka", "REST APIs", "Database Design"]
  },

  {
    title: "DevOps Engineer Co-Op",
    company: "Wellframe",
    date: "September 2022 - July 2022",
    location: "Boston, MA",
    logo: "/../images/wellframe.jpg",
    details: [
      "Discovered a bottleneck in the database provisioning process and implemented a solution using Kubernetes to expedite and automate database operations. This reduced create and delete operation times from 20 minutes to 1 minute and enabled concurrent SQL database instance operations. This allowed for many engineers to use a frequently used process at once and bring their environments back to their desired states.",
      "Developed an automated mechanism to populate environments with data which replaced existing backup and restore Postgres process, decreasing backup restoration from 40 minutes to 10 minutes using bash. This allowed for faster processes for both QA and newly onboarded engineers.",
      "Created script for cleaning services from personal environments/namespaces using the Helm CLI in a GitLab job.",
    ],
    skills: ["Kubernetes", "Docker", "Python", "Bash", "SQL", "GitLab CICD", "GKE", "GCP"]
  }
];
function Experience() {
  return (
    <Box sx={{ maxWidth: '800px', margin: '0 auto', paddingBottom: 0, position: 'relative' }}>
      <Typography level="h2" sx={{ mb: 2, display: 'flex', alignItems: 'center' }}>
        Experience
      </Typography>
      {experiences.map((exp, index) => (
        <Box key={index} sx={{ display: 'flex', mb: 4, position: 'relative' }}>
          <Card 
            sx={{ 
              flex: 1,
              boxShadow: 'none',
              display: 'flex',
              flexDirection: 'column',
              border: 'none',
              '--Card-padding': '0px',
              zIndex: 0,
              bgcolor: 'background.body',
            }}
            variant="plain">
            <Box sx={{ display: 'flex'}}>
              <AspectRatio ratio="1" sx={{ width: 80, flexShrink: 0, mr: 2, borderRadius: '50%', overflow: 'hidden' }}>
                <img src={exp.logo} alt={`${exp.company} logo`} />
              </AspectRatio>
              <Box sx={{ flex: 1, minWidth: 0 }}>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                  <Box sx={{ minWidth: 0 }}>
                    <Typography level="h3" sx={{ mb: 0.5 }}>{exp.title}</Typography>
                    <Typography level="body-md">{exp.company}</Typography>
                    <Typography level="body-sm">{exp.location}</Typography>
                  </Box>
                  <Typography level="body-md" sx={{ flexShrink: 0, ml: 2 }}>{exp.date}</Typography>
                </Box>
              </Box>
            </Box>
            <List sx={{ '--List-gap': '0px', pl: '96px'}}>
              {exp.details.map((detail, detailIndex) => (
            <ListItem key={detailIndex} sx={{ py: 0.5, pl: 0 }}>
                  <ListItemContent>{detail}</ListItemContent>
                </ListItem>
              ))}
            </List>
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, pl: '96px' }}>
              {exp.skills.map((skill, skillIndex) => (
                <Chip
                  key={skillIndex}
                  size="md"
                  variant="soft"
                  color="primary">
                  {skill}
                </Chip>
              ))}
            </Box>
          </Card>
        </Box>
      ))}
    </Box>
  );
}

export default Experience;