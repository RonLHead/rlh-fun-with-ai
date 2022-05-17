import React, { useState } from 'react';
import { fetchOpenAi } from '../../apiCalls';
import './Form.css';

const Form =({ setResponses }) => {
    const [prompt, setPrompt] = useState('');
    const [error, setError] = useState('')
   
    const handleChange = e => {
        setPrompt(e.target.value);
    }

    const handleSubmit = e => {
        e.preventDefault();
        capturePrompt()
        clearInput();
    }

    const capturePrompt = (prompt) => {
        fetchOpenAi(prompt)
            .then(data => {
                setResponses(prevResponses => [{
                    prompt: prompt,
                    response: data.choices[0].text,
                    key: Date.now(),
                }, ...prevResponses])
            })
            .catch(error => setError(error))
    }

    const clearInput = () => {
        setPrompt('')
    }

    return(
        <form>
            <p className='prompt-heading'>Enter prompt</p>
            <div className='input-container'>
                <textarea 
                    className='prompt-input'
                    name='form'
                    type='text'
                    value={prompt}
                    onChange={e => handleChange(e)}
                />
                {error && <p>{error}</p>}
            <div className='button-container'>
                <button className='submit-button' onClick={e => handleSubmit(e)}>
                    Submit
                </button>
            </div>
            </div>
        </form>
    )
}

export default Form;
