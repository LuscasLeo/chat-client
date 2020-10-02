import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ApplicationState } from '../../store';
import { sendMessage } from '../../store/ducks/messages/actions';
import ChatHistory from './ChatHistory';
import ChatInputBox from './ChatInputBox';
import { Container } from './styles';


const ChatContainer: React.FC = () => {
	const dispatch = useDispatch();
	const messages = useSelector<ApplicationState, ApplicationState['messages']['data']>(state => state.messages.data);

	const onSendMessage = (message: string) => {
		dispatch(sendMessage({
			senderId: 1,
			senderName: 'Lucas',
			text: message
		}));
	};

	return (
		<Container>
			<ChatHistory messages={messages} />
			<ChatInputBox sendMessage={onSendMessage} />
		</Container>
	);
};

export default ChatContainer;