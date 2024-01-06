import { useState } from 'react';

import styled from 'styled-components';
import API from '../Api';

import { Worker, Viewer } from '@react-pdf-viewer/core';
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';
// Import the styles
import '@react-pdf-viewer/core/lib/styles/index.css';
// Import styles
import '@react-pdf-viewer/default-layout/lib/styles/index.css';

const PDFViewer = (props) => {
  const [pdf, setPdf] = useState();
  const pdfFile = `${API}/public/image/${props.pdfData}`;
  console.log(pdf);

  const defaultLayoutPluginInstance = defaultLayoutPlugin();
  return (
    <Wrapper>
      <div className='container'>
        <button
          className='btn btn-info my-5 mx-auto'
          onClick={() => setPdf(pdfFile)}
        >
          View PDF File
        </button>
        <div className='view-pdf-file'>
          <h2>PDF File</h2>
          <div className='file'>
            <Worker workerUrl='https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js'>
              {pdf ? (
                <Viewer fileUrl={pdf} plugins={[defaultLayoutPluginInstance]} />
              ) : (
                <h3>No file</h3>
              )}
            </Worker>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  width: 100%;
  .view-pdf-file {
    background: #e3e3ff;
    text-align: center;
    height: 600px;
  }
`;
export default PDFViewer;
