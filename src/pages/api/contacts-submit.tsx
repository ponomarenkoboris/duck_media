import { NextApiRequest, NextApiResponse } from "next";
import sendMessage from "@services/telegram/sendMessage";

export default async function contactsSubmitHandler(req: NextApiRequest, res: NextApiResponse) {
    const data = JSON.parse(req.body);

    try {
        const { status, message } = await Promise.any([sendMessage(data)])

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