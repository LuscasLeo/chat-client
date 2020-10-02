import { Action, Reducer } from 'redux';
import { MessageData, MessagesState, MessageTypes } from './types';

const INITIAL_STATE: MessagesState = {
	data: [],
	error: false,
	loading: false,
};

const loaded_state_data: MessageData[] = [
	{
		senderId: 1,
		senderName: 'LUCAS',
		text: 'Hello World!',
		timestamp: Date.now()
	}
];

const reducer: Reducer<MessagesState> = (state = INITIAL_STATE, action) => {
	switch(action.type) {
	case MessageTypes.SEND_MESSAGE:
		return {...state, loading: true, data: [...state.data, action.payload]};
	case MessageTypes.LOAD_REQUEST:
		return {...state, loading: false, error: false, data: loaded_state_data};
	default:
		return state;
	}
};

export default reducer;