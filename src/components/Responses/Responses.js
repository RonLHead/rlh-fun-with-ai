import React from 'react';
import './Responses.css';

function Responses() {
    return(
        <div>
          <header className='Responses-heading'>
              <h2>Responses</h2>
          </header>
          <section className='Responses-section'>
              <div className='sub-heading'>
                <p className='sub-heading-margin'>Prompt:</p>
                <p>Response:</p>
              </div>
              <div className='Responses-container'>
                <p className='Responses-margin'>Prompt goes here</p>
                <p>Response goes here</p>
              </div>
          </section>
        </div>
    )
}

export default Responses;
