import React from 'react';
import './sign-in.scss';

import FormInput from '../../components/form-input/form-input';
import CustomButton from '../custom-button/custom-button';

class SignIn extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: ''
        }
    }

    handleSubmit = event => {
        event.preventDefault();

        this.setState({ email: '', password: '' })
    }

    handleChange = event => {
        const { value, name } = event.target;
        this.setState({ [name]: value });
    }

    render() {
        return (
            <div className='sign-in'>
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput name="email" type="email" handleChange={this.handleChange} value={this.state.email} required label="email"/>
                    <FormInput name="password" type="password" handleChange={this.handleChange} value={this.state.password} required label="password" />
                
                    <CustomButton type="submit">Sign in</CustomButton>
                </form>
            </div>
        )
    }
}

export default SignIn;