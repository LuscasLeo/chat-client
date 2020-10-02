import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    :root {
        font-size: 60.2%;

        --font-medium: 1.7rem;
    }

    html, body, #root {
        height: 100vh;
        font-size: 2rem;
        font-family: Arvo;
        font-weight: 200;
        background-color: #DFE4E8;
    }

`;

export const Container = styled.div`
`;

export const Icon = styled.div<{icon: string, color?: string}>`
    mask-image: url(${props => props.icon});
    background-color: ${props => props.color};
    mask-repeat: no-repeat;
    mask-position: center;
    width: 100%;
    height: 100%;
`;