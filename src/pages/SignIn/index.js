import React, { useState } from 'react';

import HeaderContainer from './../../containers/HeaderContainer';
import FooterContainer from './../../containers/FooterContainer';
import Form from './../../components/Form';

function SignIn() {
    const [ emailAddress, setEmailAddress ] = useState('');
    const [ password, setPassword ] = useState('');
    const [ error, setError ] = useState('');

    /* Check form input elements valid */

    const handleSignIn = e => {
        e.preventDefault();
    }

    const isInvalid = password === '' || emailAddress === '';

    return (
        <>
            <HeaderContainer>
                <Form>
                    <Form.Title>Sign in</Form.Title>
                    { error && <Form.Error>{ error }</Form.Error> }

                    <Form.Base onSubmit={ handleSignIn }>
                        <Form.Input 
                            placeholder="Email address"
                            value={ emailAddress }
                            onChange={({ target }) => setEmailAddress(target.value)}
                        />
                        <Form.Input 
                            placeholder="Password"
                            value={ password }
                            onChange={({ target }) => setPassword(target.value)}
                            type="password"
                            autoComplete="off"
                        />
                        <Form.Submit disabled={ isInvalid } type="submit">Sign In</Form.Submit>
                    </Form.Base>

                    <Form.Text>New to Netflix? <Form.Link to="/signup">Sign up now.</Form.Link></Form.Text>
                    <Form.TextSmall>This page is protected by Google reCAPTCHA to ensure you're not a bot. Learn more.</Form.TextSmall>
                </Form>
            </HeaderContainer>
            <FooterContainer />
        </>
    );
}

export default SignIn;