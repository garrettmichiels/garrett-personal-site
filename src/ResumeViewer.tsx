import React, { useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import Box from '@mui/joy/Box';

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

const ResumeViewer: React.FC = () => {
  const [numPages, setNumPages] = useState<number | null>(null);

  function onDocumentLoadSuccess({ numPages }: { numPages: number }) {
    setNumPages(numPages);
  }

  return (
    <Box sx={{ width: '100%', height: '100vh', overflow: 'auto' }}>
      <Document
        file="/Garrett-Michiels-resume.pdf"
        onLoadSuccess={onDocumentLoadSuccess}
      >
        {Array.from(new Array(numPages), (el, index) => (
          <Page key={`page_${index + 1}`} pageNumber={index + 1} />
        ))}
      </Document>
    </Box>
  );
};

export default ResumeViewer;
