import React, { useState } from 'react';
import IconButton from '@mui/joy/IconButton';
import InfoIcon from '@mui/icons-material/Info';
import Typography from '@mui/joy/Typography';
import Modal from '@mui/joy/Modal';
import ModalClose from '@mui/joy/ModalClose';
import Sheet from '@mui/joy/Sheet';

const InfoButton: React.FC = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <IconButton
        variant="outlined"
        color="neutral"
        size="sm"
        onClick={() => setOpen(true)}
        sx={{
          position: 'fixed',
          bottom: '1rem',
          left: '1rem',
          zIndex: 1000,
        }}
      >
        <InfoIcon />
      </IconButton>
      <Modal
        aria-labelledby="modal-title"
        aria-describedby="modal-desc"
        open={open}
        onClose={() => setOpen(false)}
        sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
      >
        <Sheet
          variant="outlined"
          sx={{
            maxWidth: 500,
            borderRadius: 'md',
            p: 3,
            boxShadow: 'lg',
          }}
        >
          <ModalClose variant="plain" sx={{ m: 1 }} />
          <Typography
            component="h2"
            id="modal-title"
            level="h4"
            textColor="inherit"
            fontWeight="lg"
            mb={1}
          >
            About This Website
          </Typography>
          <Typography id="modal-desc" textColor="text.tertiary">
            This portfolio website was created using React and Material-UI. 
            Being a backend focused engineer, I wanted to create a website that was simple, clean, and easy to navigate.
            Having little experience with frontend development, I used this as a project to learn and
            to practice my prompt engineering skills. This helped me learn and deliver a result much faster.
          </Typography>
        </Sheet>
      </Modal>
    </>
  );
};

export default InfoButton;
