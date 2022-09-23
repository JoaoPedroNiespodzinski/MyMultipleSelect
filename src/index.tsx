import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import MultipleSelect from './components/multipleSelect';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <div style={{width: "25%", marginInline: "auto", marginTop: "10%"}}>
      <label>My Multiple Select</label>
      <br></br>
      <br></br>
      <MultipleSelect/>
    </div>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
