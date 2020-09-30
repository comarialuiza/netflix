import React, { useState, useContext, createContext } from 'react';
import ReactDOM from 'react-dom';

import { Container, Button, Overlay, Inner } from './styles';

export const PlayerContext = createContext();

function Player({ children, ...restProps }) {
    const [ showPlayer, setShowPlayer ] = useState(false);

    return(
        <PlayerContext.Provider value={{ showPlayer, setShowPlayer }}>
            <Container { ...restProps }>{ children }</Container>
        </PlayerContext.Provider>
    );
}

export default Player;

Player.Video = function PlayerVideo({ src, ...restProps }) {
    const { showPlayer, setShowPlayer } = useContext(PlayerContext);

    return showPlayer && ReactDOM.createPortal(
        <Overlay onClick={() => setShowPlayer(false)} { ...restProps }>
            <Inner>
                <video id="netflix-player" controls>
                    <source src={ src } type="video/mp4"/>
                </video>
            </Inner>
        </Overlay>,
        document.body
    )
};

Player.Button = function PlayerButton({ ...restProps }) {
    const { showPlayer, setShowPlayer } = useContext(PlayerContext);

    return (
        <Button onClick={() => setShowPlayer(showPlayer => !showPlayer)} { ...restProps }>
            Play
        </Button>
    )
}

