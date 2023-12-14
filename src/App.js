import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [topRight, setTopRight] = useState(0);
  const [topLeft, setTopLeft] = useState(0);
  const [bottomRight, setBottomRight] = useState(0);
  const [bottomLeft, setBottomLeft] = useState(0);

  const changeTopRightBorderRadius = event => {
    if(event.target.value===''){
      setTopRight(0)
    }else{
      setTopRight(event.target.value);
    }
  };
  const changeTopLeftBorderRadius = event => {
    if(event.target.value===''){
      setTopLeft(0)
    } else {
      setTopLeft(event.target.value);
    }
  };
  const changeBottomRightBorderRadius = event => {
    if(event.target.value===''){
      setBottomRight(0)
    } else {
      setBottomRight(event.target.value);
    }
  };
  const changeBottomLeftBorderRadius = event => {
    if(event.target.value===''){
      setBottomLeft(0)
    } else {
      setBottomLeft(event.target.value);
    }
  };

  return (
    <div 
      className='container-fluid vh-100 d-flex flex-column justify-content-center align-items-center bg-light'
    >
      <div>
        <p
          className="h2 text-black"
        >
          Border Radius Previewer
        </p>
      </div>
      <div 
        className="square square-lg bg-secondary h-50 w-25"
        style={{ borderRadius: `${topRight}em ${topLeft}em ${bottomRight}em ${bottomLeft}em`}}
      >
      </div>
      <div
        className='d-flex flex-row input-group m-3 justify-content-center align-items-center'
      >
        <div
          className='p-2 mx-2'
        >
          <span
            className="input-group-text"
            id="borderTopRight"
          >
            Top Right
          </span>
          <input
            type="number"
            id="borderTopRight"
            name="borderTopRight"
            min="0"
            max="10"
            onChange={changeTopRightBorderRadius}
            style={{ maxWidth: '100%', width: '100%' }}
          />
        </div>
        <div
          className='p-2 mx-2'
        >
          <span
            className="input-group-text"
            id="borderTopLeft"
          >
            Top Left
          </span>
          <input
            type="number"
            id="borderTopLeft"
            name="borderTopLeft"
            min="0"
            max="10"
            onChange={changeTopLeftBorderRadius}
            style={{ maxWidth: '100%', width: '100%' }}
          />
        </div>
        <div
          className='p-2 mx-2'
        >
          <span
            className="input-group-text"
            id="borderBottomRight"
          >
            Bottom Right
          </span>
          <input
            type="number"
            id="borderBottomRight"
            name="borderBottomRight"
            min="0"
            max="10"
            onChange={changeBottomRightBorderRadius}
            style={{ maxWidth: '100%', width: '100%' }}
          />
        </div>
        <div
          className='p-2 mx-2'
        >
          <span 
            className="input-group-text"
            id="borderBottomLeft"
          >
            Bottom Left
          </span>
          <input
            type="number"
            id="borderBottomLeft"
            name="borderBottomLeft"
            min="0"
            max="10"
            onChange={changeBottomLeftBorderRadius}
            style={{ maxWidth: '100%', width: '100%' }}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
