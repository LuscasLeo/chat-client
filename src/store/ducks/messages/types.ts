

export enum MessageTypes {
    LOAD_REQUEST = '@messages/LOAD_REQUEST',
    SEND_MESSAGE = '@messages/SEND_MESSAGE',
}

export interface MessageData {
    senderId: number
    senderName: string
    text: string
    timestamp: number
}

export interface MessagesState {
    readonly data: MessageData[]
    readonly loading: boolean
    readonly error: boolean
}