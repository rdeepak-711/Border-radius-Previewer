import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className='container-fluid vh-100 d-flex flex-column justify-content-center align-items-center bg-light'>
      <div>
        <p className="h2 text-black">Border Radius Previewer</p>
      </div>
      <div class="square square-lg bg-secondary h-50 w-25">
        
      </div>
      <div className='d-flex flex-row input-group m-3 justify-content-center align-items-center'>
        <div className='p-2 mx-2'>
          <span class="input-group-text" id="borderTopRight">Top Right</span>
          <input type="number" id="borderTopRight" name="borderTopRight"/>
        </div>
        <div className='p-2 mx-2'>
          <span class="input-group-text" id="borderTopLeft">Top Left</span>
          <input type="number" id="borderTopLeft" name="borderTopLeft"/>
        </div>
        <div className='p-2 mx-2'>
          <span class="input-group-text" id="borderBottomRight">Bottom Right</span>
          <input type="number" id="borderBottomRight" name="borderBottomRight"/>
        </div>
        <div className='p-2 mx-2'>
          <span class="input-group-text" id="borderBottomLeft">Bottom Left</span>
          <input type="number" id="borderBottomLeft" name="borderBottomLeft"/>
        </div>
      </div>
    </div>
  );
}

export default App;
