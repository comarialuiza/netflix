import styled from 'styled-components';

export const Container = styled.div`
    text-align: center;
    padding: 165px 45px;
    border-bottom: 8px solid #222;
`;

export const Title = styled.h1`
    color: #fff;
    max-width: 640px;
    font-size: 50px;
    font-weight: 500;
    margin: auto;

    @media (max-width: 600px) {
        font-size: 35px;
    }
`;

export const SubTitle = styled.h2`
    color: #fff;
    font-size: 26px;
    font-weight: normal;
    margin: 16px auto;

    @media (max-width: 600px) {
        font-size: 18px;
    }
`;