import * as React from 'react';
import AspectRatio from '@mui/joy/AspectRatio';
import Card from '@mui/joy/Card';
import Typography from '@mui/joy/Typography';
import List from '@mui/joy/List';
import ListItem from '@mui/joy/ListItem';
import ListItemContent from '@mui/joy/ListItemContent';
import Box from '@mui/joy/Box';



const experiences = [
  {
    title: "Software Engineer Co-Op/Intern",
    company: "BlackBerry",
    date: "May 2023 - August 2023",
    logo: "../images/blackberry.png",
    details: [
      "Collaborated with 10+ member team, communicating with QA and other teams to effectively output features, peer review code, and troubleshoot issues for two high-priority company products.",
      "Implemented high-performance API bulk update and delete features using Spring JPA database interactions and Amazon Simple Storage Service (S3) operations resulting in improved query processing time compared to singular API calls.",
      "Resolved a critical issue related to query filtering functionality. Troubleshot and developed a solution that accurately filtered data using API inputs and specification based base64url encoding, while ensuring data integrity and security.",
      "Integrated extensive audit logging system for API calls within a new Java microservice and utilized existing Apache Kafka services to transfer data to legacy audit system."
    ]
  },

  {
    title: "DevOps Engineer Co-Op",
    company: "Wellframe",
    date: "September 2022 - July 2022",
    logo: "/../images/wellframe.jpg",
    details: [
      "Developed solutions in tight-knit 6-person SCRUM team to streamline operations for engineering and QA teams.",
      "Leveraged Kubernetes to expedite and automate database operations. This reduced create and delete operation times from 20 minutes to 1 minute and enabled concurrent SQL database instance operations. This allowed for many engineers to use a frequently used process at once and bring their environments back to their desired states.",
      "Developed an automated mechanism to populate environments with data which replaced existing backup and restore Postgres process, decreasing backup restoration from 40 minutes to 10 minutes using bash. This allowed for faster processes for both QA and newly onboarded engineers.",
      "Created script for cleaning services from personal environments/namespaces using the Helm CLI in a GitLab job.",
      "Implemented commands in custom CLI to perform Google Kubernetes Engine (GKE), CloudSQL, and other operations utilizing Python and various libraries."
    ]
  }
];


function Experience() {
  return (
    <Box sx={{ maxWidth: '800px', margin: '0 auto', paddingBottom: 0, position: 'relative' }}>
      <Typography level="h2" sx={{ mb: 2, display: 'flex', alignItems: 'center' }}>
        Experience
      </Typography>
      
      {/* Timeline line */}
      {/* <Box
        sx={{
          position: 'absolute',
          left: '40px',
          top: '80px',
          bottom: 0,
          width: '2px',
          bgcolor: 'text.tertiary',
          zIndex: 0, // Set a low z-index
        }}
      /> */}
      
      {experiences.map((exp, index) => (
        <Box key={index} sx={{ display: 'flex', mb: 4, position: 'relative' }}>
          {/* Timeline dot */}
          {/* <Box
            sx={{
              width: '16px',
              height: '16px',
              borderRadius: '50%',
              bgcolor: 'white',
              position: 'absolute',
              left: '33px',
              top: '32px',
              zIndex: 1, // Set z-index higher than the line but lower than the card
            }}
          /> */}
          
          <Card 
            sx={{ 
              // ml: '50px', // Space between card and the timeline
              flex: 1,
              boxShadow: 'none',
              display: 'flex',
              flexDirection: 'column',
              border: 'none',
              '--Card-padding': '0px',
              zIndex: 0, // Set z-index higher than the dot and line
              bgcolor: 'background.body', // Ensure the card has a background color
            }}
            variant="plain"
          >
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
              <AspectRatio ratio="1" sx={{ width: 80, mr: 2, borderRadius: '50%', overflow: 'hidden' }}>
                <img src={exp.logo} alt={`${exp.company} logo`} />
              </AspectRatio>
              <Box>
                <Typography level="h3">{exp.title}</Typography>
                <Typography level="body-sm">{exp.company}</Typography>
                <Typography level="body-sm">{exp.date}</Typography>
              </Box>
            </Box>
            <List sx={{ '--List-gap': '0px' }}>  {/* Remove gap between list items */}
              {exp.details.map((detail, detailIndex) => (
                <ListItem key={detailIndex} sx={{ py: 0.5 }}>  {/* Adjust vertical padding */}
                  <ListItemContent>{detail}</ListItemContent>
                </ListItem>
              ))}
            </List>
          </Card>
        </Box>
      ))}
    </Box>
  );
}

export default Experience;
