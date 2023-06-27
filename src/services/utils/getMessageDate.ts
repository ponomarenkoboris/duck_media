export const getMessageDate = (): string => {
    const currentDate = new Date(Date.now())
    const time = currentDate.toLocaleTimeString('ru-RU', { timeZone: 'Europe/Moscow' }).slice(0, 5)
    const date = currentDate.toLocaleDateString('ru-RU', { timeZone: 'Europe/Moscow' })
    return `Дата: ${time} ${date}`
}