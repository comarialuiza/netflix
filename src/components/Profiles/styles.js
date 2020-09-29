import styled from 'styled-components/macro';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: auto;
    max-width: 80%;
`;

export const Title = styled.h1`
    width: 100%;
    color: #fff;
    font-size: 48px;
    text-align: center;
    font-weight: 500;
`;

export const List = styled.ul`
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: row;
    list-style: none;
`;

export const Picture = styled.img`
    width: 100%;
    max-width: 150px;
    height: auto;
    border: 3px solid #000;
    cursor: pointer;
    transition: all .2s;
`;

export const Name = styled.div`
    color: #808080;
    text-overflow: ellipsis;
    font-size: 16px;
    margin-top: 8px;
    transition: all .2s;
`;

export const User = styled.li`
    max-width: 200px;
    max-height: 200px;
    list-style-type: none;
    text-align: center;

    &:hover > ${Picture} {
        border: 3px solid #fff;
    }

    &:hover > ${Name} {
        font-weight: bold;
        color: #fff;
    }

    &:not(:last-of-type) {
        margin-right: 30px;
    }
`;