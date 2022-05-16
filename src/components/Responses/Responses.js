import React from 'react';
import './Responses.css';

function Responses() {
    return(
        <div>
          <header>
              <h2>Responses</h2>
          </header>
          <section className='Responses-section'>
              <div className='sub-heading'>
                <p>Prompt:</p>
                <p>Response:</p>
              </div>
              <div className='Responses-container'>
                <p>Prompt goes here</p>
                <p>Response goes here</p>
              </div>
          </section>
        </div>
    )
}

export default Responses;
