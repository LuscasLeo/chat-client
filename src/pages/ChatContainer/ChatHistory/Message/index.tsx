import React, { useEffect, useRef } from 'react';
import { MessageData } from '../../../../store/ducks/messages/types';
import { ProfileIcon, MessageContainer, ProfileName, MessageContent, Container } from './styles';

export interface MessageProps {
    message: MessageData;
}

const Message: React.FC<MessageProps> = ({message}) => {
	const messageRef = useRef<HTMLDivElement>(null);
    
	useEffect(() => {
		messageRef.current && messageRef.current.scrollIntoView({behavior: 'smooth'});
	}, []);

	const isMe = message.senderId == 1;

	return (
		<Container className={`${isMe && 'right'}`} ref={messageRef}>
			{   !isMe && <ProfileIcon />    }
			<MessageContainer>
				<ProfileName>{message.senderName}</ProfileName>
				<MessageContent>{message.text}</MessageContent>
			</MessageContainer>
			{   isMe && <ProfileIcon />    }
		</Container>
	);
};

export default Message;