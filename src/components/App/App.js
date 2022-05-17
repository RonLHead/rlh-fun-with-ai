import React, { useState, useEffect } from 'react';
import Form from '../Form/Form';
import Responses from '../Responses/Responses';
import './App.css';

function App() {
  const [responses, setResponses] = useState([])
  return (
    <main className='App'>
      <section className='App-container'>
        <header>  
            <h1 className='App-heading'>Fun with AI</h1>
        </header>
        <Form setResponses={setResponses}/>
        <Responses responses={responses}/>
      </section>
    </main>
  );
}

export default App;

