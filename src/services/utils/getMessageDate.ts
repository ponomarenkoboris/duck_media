export const getMessageDate = (): string => {
    const currentDate = new Date();
    let day: string | number = currentDate.getDate();
    let month: string | number = currentDate.getMonth() + 1
    const year = currentDate.getFullYear()

    let hours: string | number = currentDate.getHours()
    let minutes: string | number = currentDate.getMinutes()

    day = day < 10 ? `0${day}` : day
    month = month < 10 ? `0${month}` : month

    hours = hours < 10 ? `0${hours}` : hours
    minutes = minutes < 10 ? `0${minutes}` : minutes

    return `Дата: ${hours}:${minutes} ${day}.${month}.${year}`
}
