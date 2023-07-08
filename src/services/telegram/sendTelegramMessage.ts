import type { Message, MessageSendResult } from "@services/types";
import { getMessageDate, configureTelegramUrl } from '../utils';



export default async function sendTelegramMessage([name, email, about]: Message): Promise<MessageSendResult> {
    const result: MessageSendResult = { status: true, message: '' }
    try {
        const message = `${email} - хочет сотрудничать! %0A%0AИмя: ${name} %0AEmail: ${email} %0AИдея: ${about} %0A%0A${getMessageDate()}`;
        const response = await fetch(configureTelegramUrl(message))
        const data = await response.json()

        if (!data.ok) {
            result.status = data.ok
            result.message = data.description
        }

        return result

    } catch (error) {
        console.error(error)
        result.status = false
        result.message = 'При попытке оптравить сообщение в бот, что-то пошло не так.'
        return result
    }   
}