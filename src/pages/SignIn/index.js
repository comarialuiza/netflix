import React, { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';

import HeaderContainer from './../../containers/HeaderContainer';
import FooterContainer from './../../containers/FooterContainer';
import Form from './../../components/Form';

import { FirebaseContext } from './../../context/firebase';
import * as ROUTES from './../../constants/routes'; 

function SignIn() {
    const { firebase } = useContext(FirebaseContext);
    const history = useHistory();

    const [ emailAddress, setEmailAddress ] = useState('');
    const [ password, setPassword ] = useState('');
    const [ error, setError ] = useState('');

    const handleSignIn = e => {
        e.preventDefault();

        firebase
            .auth()
            .signInWithEmailAndPassword(emailAddress, password)
            .then(() => {
                /* push to the browse page */
                history.push(ROUTES.BROWSE);
            })
            .catch(error => {
                setEmailAddress('');
                setPassword('');
                setError(error.message);
            });
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

                    <Form.Text>New to Netflix? <Form.Link to={ ROUTES.SIGN_UP }>Sign up now.</Form.Link></Form.Text>
                    <Form.TextSmall>This page is protected by Google reCAPTCHA to ensure you're not a bot. Learn more.</Form.TextSmall>
                </Form>
            </HeaderContainer>
            <FooterContainer />
        </>
    );
}

export default SignIn;