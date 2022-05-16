import React, { Component } from 'react';
import './Form.css';

class Form extends Component {
    constructor() {
        super();
        this.state = {
            prompt: ''
        }
    }

    handleChange = e => {
        this.setState({ [e.target.name]: e.target.value });
    }

    handleSubmit = e => {
        e.preventDefault();
        this.clearInput();
    }

    clearInput = () => {
        this.setState({ prompt: '' })
    }
    render() {
        return(
            <form>
                <p className='prompt-heading'>Enter prompt</p>
                <div className='input-container'>
                    <textarea 
                        className='prompt-input'
                        name='form'
                        type='text'
                        value={this.setState.prompt}
                        onChange={e => this.handleChange(e)}
                    />
                <div className='button-container'>
                    <button className='submit-button' onClick={e => this.handleSubmit(e)}>
                        Submit
                    </button>
                </div>
                </div>
            </form>
        )
    }
}

export default Form;
