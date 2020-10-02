import React from 'react';
import { MessageData } from '../../../store/ducks/messages/types';
import { Wrapper } from '../styles';
import Message from './Message';
import { Container, Content } from './styles';



const ChatHistory: React.FC<{messages: MessageData[]}> = ({messages}) => {


	// const bottomRef = useRef<HTMLElement>(null);
	return (
		<Container>
			<Wrapper>
				<Content>
					{messages && 
                        messages.map((message, key) => (<Message key={key} message={message}/>
                        ))
					}
				</Content>
			</Wrapper>
		</Container>
	);
};

export default ChatHistory;
