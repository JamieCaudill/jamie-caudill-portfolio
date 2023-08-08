import React from "react";
import { Page, Document, pdfjs } from 'react-pdf'
import 'react-pdf/dist/Page/AnnotationLayer.css';
import 'react-pdf/dist/Page/TextLayer.css';
import './PdfViewer.css';

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  'pdfjs-dist/build/pdf.worker.min.js',
  import.meta.url,
).toString();


const PdfViewer = () => {

  const pdfPath = './Caudill_Resume.pdf';

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = pdfPath;
    link.download = pdfPath; // Specify the download filename
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="resume__outside">
    <h1 className="resume__title">Resume</h1>
    <div className="resume">
      <Document className='resume__container' file={pdfPath}>
        <Page className='resume__page' pageNumber={1} />
      </Document>
      <button className='resume__btn' onClick={handleDownload}>Download</button>
    </div>
    </div>
  )
};

export default PdfViewer;