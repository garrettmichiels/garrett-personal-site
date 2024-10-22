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
    awards: ["2024 Khoury College of Computer Science Co-Op Award"],
    details: [
      "During my time at Northeastern, I built a strong foundation in computer science through a combination of coursework and hands-on experience.",
      "Courses included Algorithms and Data Structures, Software Development, Networks and Distributed Systems, Theory of Computation, Computer Systems,Database Design, Web Development, and Mobile Development.",
      "I was awarded the 2024 Khoury College of Computer Science Co-Op Award in recognition of my achievements during my two co-ops.",
    ],
    image: "/images/northeastern-ring.png"
  },
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
            bgcolor: 'background.body',
            flexDirection: { xs: 'column', sm: 'row' }, 
            alignItems: { xs: 'center', sm: 'flex-start' },
            gap: 2 
          }}>
          <AspectRatio ratio="1" sx={{
            bgcolor: 'transparent !important',
            backgroundColor: 'transparent !important',
            '--AspectRatio-radius': '0px',
            objectFit: 'contain', 
            width: { xs: '100%', sm: 150 }, 
            flexShrink: 0 
          }}>
            <img
              src={edu.image}
              alt={`${edu.institution}`}
              style={{ objectFit: 'cover'}}
            />
          </AspectRatio>
          <Box sx={{ flexGrow: 1 }}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 1 }}>
              <Box>
                <Typography level="h3">{edu.degree}</Typography>
                <Typography level="body-sm">{edu.institution}</Typography>
              </Box>
              <Typography level="body-md" sx={{ textAlign: 'right' }}>{edu.year}</Typography>
            </Box>
            <List>
              {edu.details.map((detail, detailIndex) => (
                <ListItem key={detailIndex}>
                  <ListItemContent>{detail}</ListItemContent>
                </ListItem>
              ))}
            </List>
            {edu.awards && edu.awards.length > 0 && (
              <Box sx={{ mt: 2 }}>
                <Typography level="body-sm" fontWeight="bold">Awards:</Typography>
                <List>
                  {edu.awards.map((award, awardIndex) => (
                    <ListItem key={awardIndex}>
                      <ListItemContent>{award}</ListItemContent>
                    </ListItem>
                  ))}
                </List>
              </Box>
            )}
          </Box>
        </Card>
      ))}
    </Box>
  );
}

export default Education;