import { useState, useEffect, useContext } from 'react';
import { FirebaseContext } from './../context/firebase';

export default function useAuthListener() {
    const [ user, setUser ] = useState(JSON.parse(localStorage.getItem('@netflix/authUser')));
    const { firebase } = useContext(FirebaseContext);

    useEffect(() => {
        const listener = firebase.auth().onAuthStateChanged((authUser) => {
            if (authUser) {
                localStorage.setItem('@netflix/authUser', JSON.stringify(authUser));
                setUser(authUser);
            } else {
                localStorage.removeItem('@netflix/authUser');
                setUser(null);
            }
        });

        return () => listener();
    }, []);

    return { user };
}