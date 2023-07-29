export const configureTelegramUrl = (message: string): string => {
    const url = `https://api.telegram.org/bot${process.env.TELEGRAM_BOT_TOKEN}/sendMessage`;
    const query = `?chat_id=${process.env.TELEGRAM_BOT_CHAT_ID}&parse_mode=html&text=`;
    return url + query + message;
};