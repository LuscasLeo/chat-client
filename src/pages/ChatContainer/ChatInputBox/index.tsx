import React, { FormEvent, useRef } from 'react';
import { ChatInput, Container, Content, SendButton, SendIcon } from './styles';
import SendSvg from '../../../resources/send.svg';
import { Wrapper } from '../styles';



const ChatInputBox: React.FC<{sendMessage: (message: string) => void}> = ({sendMessage}) => {
	const inputRef = useRef<HTMLInputElement>(null);

    
	const onFormSubmit = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		const message = ((e.currentTarget.elements.namedItem('message') as HTMLInputElement).value) as string;
		if(message.length  == 0)
			return;

		inputRef.current && (inputRef.current.value = '');
		sendMessage(message);
	};


	return (
		<Container>
			<Wrapper>
				<form onSubmit={
					onFormSubmit
				}>
					<Content>
						<ChatInput autoComplete="off" ref={inputRef} name="message" placeholder="Type Something Here"/>
						<SendButton type="submit">
							<SendIcon icon={SendSvg} />
						</SendButton>
					</Content>
				</form>
			</Wrapper>
		</Container>
	);
};

export default ChatInputBox;
