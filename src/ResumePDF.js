import React, { useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import sample from './resume.pdf';
import { Container} from 'react-bootstrap';
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;


function ResumePDF() {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  return (
  	<Container>
    <div className="resumepdf">
      <Document file={sample} onLoadSuccess={onDocumentLoadSuccess}>
        <Page pageNumber={pageNumber} width="750"/>
      </Document>
    </div>
    </Container>
  );
}
export default ResumePDF;