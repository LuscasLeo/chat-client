import {Action, action} from 'typesafe-actions';
import { MessageData, MessageTypes } from './types';

export const loadRequest = (): Action => action(MessageTypes.LOAD_REQUEST);

export const sendMessage = (message: MessageData): Action => action(MessageTypes.SEND_MESSAGE, message);