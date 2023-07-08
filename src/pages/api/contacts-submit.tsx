import { NextApiRequest, NextApiResponse } from "next";
import sendTelegramMessage from "@services/telegram/sendTelegramMessage";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const data = JSON.parse(req.body);

    try {
        const { status, message } = await sendTelegramMessage(data)

        if (!status) {
            res.status(500)
            return res.json({message})
        }

        res.status(200)
        return res.json({message: 'Ваше сообщение успешно отправлено!'})
        
    } catch (error) {
        res.status(400)
        return res.json({message: 'Упс! Что-то ипошло не так...'})
    }
}