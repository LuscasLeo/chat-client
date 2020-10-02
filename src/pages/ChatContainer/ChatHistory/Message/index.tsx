import React, { useEffect, useRef } from 'react';
import { MessageData } from '../../../../store/ducks/messages/types';
import { ProfileIcon, MessageContainer, ProfileName, MessageContent, Container, Timestamp } from './styles';

export interface MessageProps {
    message: MessageData;
}

const Message: React.FC<MessageProps> = ({message}) => {
	const messageRef = useRef<HTMLDivElement>(null);
	const {senderId, senderName, text, timestamp} = message;
    
	useEffect(() => {
		messageRef.current && messageRef.current.scrollIntoView();
	}, []);

	const isMe = senderId == 1;

	const formatTime= (timestamp: number) => {
		const date = new Date(timestamp);
		return `${date.getHours()}:${date.getMinutes()}`;
	};

	return ( 
		<Container className={`${isMe && 'right'}`} ref={messageRef}>
			{   !isMe && <ProfileIcon />    }
			<MessageContainer>
				<ProfileName>{senderName}</ProfileName>
				<MessageContent>{text}</MessageContent>
				<Timestamp>{formatTime(timestamp)}</Timestamp>
			</MessageContainer>
			{   isMe && <ProfileIcon />    }
		</Container>
	);
};

export default Message;