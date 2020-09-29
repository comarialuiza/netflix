import React, { useState, useContext, useEffect } from 'react';

import ProfileContainer from './../ProfilesContainer';
import { FirebaseContext } from './../../context/firebase';

import Loading from './../../components/Loading';

// import { Container } from './styles';

function BrowseContainer({ slides }) {
    const [ profile, setProfile ] = useState({});
    const [ loading, setLoading ] = useState(true);

    const { firebase } = useContext(FirebaseContext);

    const user = firebase.auth().currentUser || {};

    useEffect(() => {
        console.log(profile);
        setTimeout(() => {
            setLoading(false);
        }, 3000);
    }, [ profile.displayName ]);

    return (
        <>
            { profile.displayName ? (
                loading && <Loading src={ user.photoURL }/>
            ) : (
                <ProfileContainer user={ user } setProfile={ setProfile }/>
            )}
        </>
    );
}

export default BrowseContainer;