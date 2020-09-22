import React from 'react';

import HeaderContainer from './../../containers/HeaderContainer';
import JumbotronContainer from './../../containers/JumbotronContainer';
import FooterContainer from './../../containers/FooterContainer';
import FaqsContainer from './../../containers/FaqsContainer';

import OptForm from '../../components/OptForm';
import Feature from '../../components/Feature';

function Home() {
    return (
        <>
            <HeaderContainer>
                <Feature>
                    <Feature.Title>Unlimited films, TV programmes and more.</Feature.Title>
                    <Feature.SubTitle>Watch anywhere. Cancel at anytime.</Feature.SubTitle>

                    <OptForm>
                        <OptForm.Input placeholder="Email address"/>
                        <OptForm.Button>Try it now</OptForm.Button>
                        <OptForm.Break/>
                        <OptForm.Text>Ready to watch? Enter your email to create or restart your membership</OptForm.Text>
                    </OptForm>
                </Feature>
            </HeaderContainer>
            <JumbotronContainer />
            <FaqsContainer />
            <FooterContainer />
        </>
    );
}

export default Home;