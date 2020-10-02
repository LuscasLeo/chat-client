
export enum UserTypes {
    LOGIN_REQUEST = '@user/LOGIN_REQUEST',
    LOGIN_SUCCESS = '@user/LOGIN_SUCCESS',
    LOGIN_FAILURE = '@user/LOGIN_FAILURE',
}

export interface UserDetails {
    id: number
    username: string
    mail: string
}