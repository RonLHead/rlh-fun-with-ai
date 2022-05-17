import React from 'react';
import './Responses.css';

function Responses({ responses }) {
  const totalResponses = responses.map(response => {
    return(
      <section className='Responses-section' key={response.key}>
              <div className='sub-heading'>
                <p className='sub-heading-margin'>Prompt:</p>
                <p>Response:</p>
              </div>
              <div className='Responses-container'>
                <p className='Responses-margin'>{response.response}</p>
                <p>{response.prompt}</p>
              </div>
          </section>
    )
  })
    return(
        <div>
          <header className='Responses-heading'>
              <h2>Responses</h2>
          </header>
          {totalResponses}
        </div>
    )
}

export default Responses;
