import styled from "styled-components";


export const Container = styled.div`
    display: flex;
    margin-bottom: 1rem;
    gap: 1rem;

    &.right {
        justify-content: flex-end;
    }

`;


export const ProfileIcon = styled.div`
    background-color: #0E4943;
    width: 2.4em;
    height: 2.4em;
    border-radius: 50%;
`;


export const MessageContainer = styled.div`
    flex: 1;
    background-color: #DFE4E8;
    font-size: 1.3rem;
    border-radius: .9rem;
    padding: 1rem;
`;


export const ProfileName = styled.div`
    font-size: 1.5rem;
    font-weight: bold;
`;

export const MessageContent = styled.span`
    
`;