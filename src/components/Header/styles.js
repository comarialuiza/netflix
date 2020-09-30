import styled from 'styled-components/macro';
import { Link as ReactRouterLink } from 'react-router-dom';

export const Container = styled.div`
    display: flex;
    margin: 0 56px;
    height: 64px;
    padding: 18px 0;
    justify-content: space-between;
    align-items: center;

    a {
        display: flex;
    }

    @media (max-width: 1000px) {
        margin: 0 30px;
    }
`;

export const Group = styled.div`
    display: flex;
    align-items: center;
`;

export const Background = styled.div`
    display: flex;
    flex-direction: column;
    background: url(${({ src }) => src ? `../images/misc/${src}.jpg` : '../images/misc/home-bg.jpg'}) top left / cover no-repeat;

    @media (max-width: 1100px) {
        ${({ dontShowOnSmallViewport }) => dontShowOnSmallViewport && `background: none;`}
    }
`;

export const Logo = styled.img`
    height: 32px;
    width: 108px;
    margin-right: 40px;

    @media (min-width: 1449px) {
        height: 45px;
        width: 167px;
    }
`;

export const ButtonLink = styled(ReactRouterLink)`
    display: block;
    background-color: #e50914;
    width: 84px;
    height: fit-content;
    color: #fff;
    border: 0;
    font-size: 15px;
    border-radius: 3px;
    padding: 8px 17px;
    cursor: pointer;
    text-decoration: none;
    box-sizing: border-box;
    transition: background-color .2s;

    &&:hover {
        background-color: #f40612;
    }
`;

export const Feature = styled(Container)`
    padding: 150px 0 500px 0;
    flex-direction: column;
    align-items: normal;
    width: 50%;

    @media (max-width: 1100px) {
        display: none;
    }
`;

export const Text = styled.h2`
    color: #fff;
    font-size: 50px;
    line-height: normal;
    font-weight: bold;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.45);
`;

export const TextSmall = styled.p`
    color: #fff;
    font-size: 22px;
    line-height: normal;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.45);
`;

export const TextLink = styled.button`
    background-color: transparent;
    outline: 0;
    border: 0;

    color: #fff;
    cursor: pointer;
    font-weight: ${({ active }) => ( active === 'true' ? '700' : 'normal' )};
    transition: all .2s;

    &:hover {
        font-weight: bold;
    }
    
    &:not(:last-of-type) {
        margin-right: 30px;
    }
`;

export const Picture = styled.button`
    background: url(${({ src }) => src});
    background-size: contain;
    border: 0;
    width: 32px;
    height: 32px;
    cursor: pointer;
`;


export const Dropdown = styled.div`
    display: none;
    background-color: #000;
    position: absolute;
    padding: 10px;
    width: 100px;
    top: 32px;
    right: 0;

    ${Group} {
        margin-bottom: 10px;

        ${TextLink}, ${Picture} {
            cursor: default;
        }
    }

    ${Group}:last-of-type {
        margin-bottom: 0;

        ${TextLink} {
            cursor: pointer;
        }
    }

    button:first-of-type {
        margin-right: 10px;
    }

    button:last-of-type {
        font-size: 12px;
        overflow: hidden;
        padding: 0;
        margin: 0;
        text-align: left;
    }
`;

export const Profile = styled.div`
    display: flex;
    align-items: center;
    margin-left: 20px;
    position: relative;

    &:hover > ${Dropdown} {
        display: flex;
        flex-direction: column;
    }
`;

export const Search = styled.div`
    display: flex;
    align-items: center;

    svg {
        cursor: pointer;
        color: #fff;
    }

    @media (max-width: 700px) {
        display: none;
    }
`;

export const SearchIcon = styled.button`
    cursor: pointer;
    border: 0;
    background-color: transparent;
`;

export const SearchImage = styled.img`
    display: block;
    filter: brightness(0) invert(1);
    width: 16px;
`;

export const SearchInput = styled.input`
    background-color: #44444459;
    color: #fff;
    border: 1px solid #fff;
    transition: width .5s;
    height: 30px;
    font-size: 14px;
    margin-left: ${({ active }) => active === true ? '10px' : '0'};
    padding: ${({ active }) => active === true ? '0 10px' : '0'};
    opacity: ${({ active }) => active === true ? '1' : '0'};
    width: ${({ active }) => active === true ? '200px' : '0'};
`;