import React from "react";
import { Page, Document, pdfjs } from 'react-pdf'
import 'react-pdf/dist/Page/AnnotationLayer.css';
import 'react-pdf/dist/Page/TextLayer.css';

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  'pdfjs-dist/build/pdf.worker.min.js',
  import.meta.url,
).toString();


const PdfViewer = () => {

  const pdfPath = './Caudill_Resume.pdf';

  return (
    <div>
      <Document file={pdfPath}>
        <Page pageNumber={1} />
      </Document>
    </div>
  )
};

export default PdfViewer;