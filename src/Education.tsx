import React from 'react';
import Typography from '@mui/joy/Typography';
import Box from '@mui/joy/Box';
import Card from '@mui/joy/Card';
import List from '@mui/joy/List';
import ListItem from '@mui/joy/ListItem';
import ListItemContent from '@mui/joy/ListItemContent';
import AspectRatio from '@mui/joy/AspectRatio';

const educationData = [
  {
    degree: "Bachelor of Science in Computer Science",
    institution: "Northeastern University | Khoury College of Computer Science",
    year: "2020 - 2024",
    details: [
      "Award: 2024 Khoury College of Computer Science Co-Op Award",
    //   "Relevant coursework: Data Structures, Algorithms, Database Systems, Web Development",
    ],
    image: "/images/northeastern-ring.png"
  },
  // Add more education entries if needed
];

function Education() {
  return (
    <Box sx={{ width: '100%', mb: 4 }}>
      <Typography level="h2" sx={{ mb: 2, display: 'flex', alignItems: 'center' }}>
        Education
      </Typography>
      {educationData.map((edu, index) => (
        <Card key={index} variant="outlined"
        sx={{ 
            mb: 2, 
            p: 2, 
            display: 'flex', 
            boxShadow: 'none',
            border: 'none',
            bgcolor: 'background.body', // Ensure the card has a background color
            flexDirection: { xs: 'column', sm: 'row' }, 
            alignItems: { xs: 'center', sm: 'flex-start' },
            gap: 2 
          }}>
             <AspectRatio  variant="plain" ratio="1" sx={{
                bgcolor: 'transparent !important', // Override the default background
                backgroundColor: 'transparent !important', // Override the default background
                '--AspectRatio-radius': '0px', // Remove border radius if any
                objectFit: 'contain', width: { xs: '100%', sm: 150 }, flexShrink: 0 }}>
             <img
              src={edu.image}
              alt={`${edu.institution}`}
              style={{ objectFit: 'cover'}}/>
          </AspectRatio>
          <Box>
            <Typography level="h3">{edu.degree}</Typography>
            <Typography level="body-sm">{edu.institution}</Typography>
            <Typography level="body-sm" sx={{ mb: 2 }}>{edu.year}</Typography>
            <List>
              {edu.details.map((detail, detailIndex) => (
                <ListItem key={detailIndex}>
                  <ListItemContent>{detail}</ListItemContent>
                </ListItem>
              ))}
            </List>
          </Box>
        </Card>
      ))}
    </Box>
  );
}

export default Education;
