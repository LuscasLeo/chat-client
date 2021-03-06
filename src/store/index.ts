import {createStore, Store} from 'redux';
import { MessagesState } from './ducks/messages/types';
import rootReducer from './ducks/rootReducer';

export interface ApplicationState {
    messages: MessagesState
}

const store: Store<ApplicationState> = createStore(rootReducer);

export default store;