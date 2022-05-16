import React from 'react';
import Form from '../Form/Form';
import Responses from '../Responses/Responses';
import './App.css';

function App() {
  return (
    <main className='App'>
      <section className='App-container'>
        <header>  
            <h1 className='App-heading'>Fun with AI</h1>
        </header>
        <Form />
        <Responses />
      </section>
    </main>
  );
}

export default App;

