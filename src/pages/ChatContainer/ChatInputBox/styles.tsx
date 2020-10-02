import styled from "styled-components";

import { Icon } from '../../styles';

export const Container = styled.div`
    background-color: #1C898C;
    /* position: sticky; */
    bottom: 0;
    grid-area: input;
`;

export const Content = styled.div`
    display: flex;
    align-items: center;
    height: 7rem;
`;

export const ChatInput = styled.input`
    flex: 1;
    height: 4.5rem;
    text-indent: 1rem;
    font-size: var(--font-medium);
    border: none;
    border-radius: 1rem;
`;

export const SendButton = styled.button`
    margin-left: 1rem;
    border: none;
    height: 5rem;
    width: 5rem;
    border-radius: 10em;
    display: flex;
    justify-content: center;
    align-items: center;

    background-color: #0E4943;
`;

export const SendIcon = styled(Icon)`
    background-color: #fff;
    mask-position: 60% 50%;
    mask-size: 2.2rem;
`;