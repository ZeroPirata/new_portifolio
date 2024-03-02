export const formatLocalDatetime = (unixtime: number) => {
  const dateObject = new Date(unixtime * 1000)
  const options: Intl.DateTimeFormatOptions = {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
  }
  const formattedDate = dateObject.toLocaleDateString('pt-BR', options) // Substitua 'pt-BR' pelo código do seu local
  return formattedDate
}
