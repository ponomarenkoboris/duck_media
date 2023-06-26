export type Message = [name: string, email: string, about: string]

export type MessageSendResult = {
    status: boolean,
    message: string
}