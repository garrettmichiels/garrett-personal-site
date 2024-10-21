import * as React from 'react';
import AspectRatio from '@mui/joy/AspectRatio';
import Typography from '@mui/joy/Typography';
import Card from '@mui/joy/Card';
import List from '@mui/joy/List';
import ListDivider from '@mui/joy/ListDivider';
import ListItem from '@mui/joy/ListItem';
import ListItemContent from '@mui/joy/ListItemContent';
import ListItemButton from '@mui/joy/ListItemButton';

const data = [
  {
    src: 'https://images.unsplash.com/photo-1502657877623-f66bf489d236',
    title: 'Night view',
    description: '4.21M views',
  },
  {
    src: 'https://images.unsplash.com/photo-1527549993586-dff825b37782',
    title: 'Lake view',
    description: '4.74M views',
  },
  {
    src: 'https://images.unsplash.com/photo-1532614338840-ab30cf10ed36',
    title: 'Mountain view',
    description: '3.98M views',
  },
];

export default function ListStackRatio() {
  return (
    <Card variant="soft" sx={{ width: 625, p: 0 }}>
      <List sx={{ py: 'var(--ListDivider-gap)' }}>
        {data.map((item, index) => (
          <React.Fragment key={item.title}>
            <ListItem>
              <ListItemButton sx={{ gap: 2 }}>
                <AspectRatio sx={{ flexBasis: 700 }}>
                  <img
                    srcSet={`${item.src}?w=120&fit=crop&auto=format&dpr=2 2x`}
                    src={`${item.src}?w=120&fit=crop&auto=format`}
                    alt={item.title}
                  />
                </AspectRatio>
                <ListItemContent>
                  <Typography fontWeight="sm">

                  <ul>
                <li>Collaborated with 10+ member team, communicating with QA and other teams to effectively output features,
                    peer review code, and troubleshoot issues for two high-priority company products.</li>
                <li>Implemented high-performance API bulk update and delete features using Spring JPA database interactions and
                    Amazon Simple Storage Service (S3) operations resulting in improved query processing time compared to
                    singular API calls.</li>
                <li>Resolved a critical issue related to query filtering functionality. Troubleshot and developed a solution that
                    accurately filtered data using API inputs and specification based base64url encoding, while ensuring data
                    integrity and security. This was a key functionality for SOC analysts to properly sort and analyze security events.</li>
                <li>Integrated extensive audit logging system for API calls within a new Java microservice and utilized existing
                    Apache Kafka services to transfer data to legacy audit system. This implementation enhanced system
                    transparency and facilitated tracking and auditing of admin use within the product’s system.</li>
            </ul>

                  </Typography>
                  <Typography level="body-sm">{item.description}</Typography>
                </ListItemContent>
              </ListItemButton>
            </ListItem>
            {index !== data.length - 1 && <ListDivider />}
          </React.Fragment>
        ))}
      </List>
    </Card>
  );
}