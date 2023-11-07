import React from 'react';
import { Document, Page } from 'react-pdf';
const PDFViewer = () => {
 const pdfURL = 'https://drive.google.com/file/d/1nMZunAfCChl2EYSGncZMGkvD1-HrOKCm/view?usp=drive_link'
return (
 <div>
 <Document file={pdfURL}>
 <Page pageNumber={1} />
 </Document>
 </div>
 );
};
export default PDFViewer;