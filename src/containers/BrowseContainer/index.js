import React, { useState, useContext, useEffect } from 'react';

import ProfileContainer from './../ProfilesContainer';
import { FirebaseContext } from './../../context/firebase';

import Loading from './../../components/Loading';
import Header from './../../components/Header';
import Card from './../../components/Card';

import * as ROUTES from './../../constants/routes';
import logo from './../../assets/logo.svg';

// import { Container } from './styles';

function BrowseContainer({ slides }) {
    const [ category, setCategory ] = useState('series');
    const [ slideRows, setSlideRows ] = useState([]);

    const [ profile, setProfile ] = useState({});
    const [ loading, setLoading ] = useState(true);

    const [ searchTerm, setSearchTerm ] = useState('');

    const { firebase } = useContext(FirebaseContext);

    const user = firebase.auth().currentUser || {};

    useEffect(() => {
        console.log(profile);
        setTimeout(() => {
            setLoading(false);
        }, 3000);
    }, [ profile.displayName ]);

    useEffect(() => {
        setSlideRows(slides[category]);
    }, [ slides, category ]);

    return (
        <>
            { profile.displayName ? (
                <>
                    { loading ? <Loading src={ user.photoURL }/> : <Loading.ReleaseBody /> }
                    <Header src="joker1" dontShowOnSmallViewport>
                        <Header.Frame>
                            <Header.Group>
                                <Header.Logo to={ ROUTES.HOME } src={ logo } alt="Netflix" />
                                <Header.TextLink 
                                    active={ category === 'films' ? 'true' : 'false' } 
                                    onClick={ () => { setCategory('films')} }
                                >
                                    Films
                                </Header.TextLink>
                                <Header.TextLink 
                                    active={ category === 'series' ? 'true' : 'false' }
                                    onClick={ () => { setCategory('series')} }
                                >
                                    Series
                                </Header.TextLink>
                            </Header.Group>

                            <Header.Group>
                                <Header.Search searchTerm={ searchTerm } setSearchTerm={ setSearchTerm } />
                                <Header.Profile>
                                    <Header.Picture src={ user.photoURL }/>
                                    <Header.Dropdown>
                                        <Header.Group>
                                            <Header.Picture src={ user.photoURL } />
                                            <Header.TextLink>{ user.displayName }</Header.TextLink>
                                        </Header.Group>

                                        <Header.Group>
                                            <Header.TextLink onClick={ () => { firebase.auth().signOut() } }>Sign out</Header.TextLink>
                                        </Header.Group>
                                    </Header.Dropdown>
                                </Header.Profile>
                            </Header.Group>
                        </Header.Frame>

                        <Header.Feature>
                            <Header.Text>Watch Joker Now</Header.Text>
                            <Header.TextSmall>Forever alone in a crowd, failed comedian Arthur Fleck seeks connection as he walks the streets of Gotham
                                City. Arthur wears two masks -- the one he paints for his day job as a clown, and the guise he projects in a
                                futile attempt to feel like he's part of the world around him.</Header.TextSmall>
                        </Header.Feature>
                    </Header>
                </>
            ) : (
                <ProfileContainer user={ user } setProfile={ setProfile }/>
            )}
        </>
    );
}

export default BrowseContainer;