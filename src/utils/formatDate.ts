const formatToLocalDate = Intl.DateTimeFormat('pt-br')

const formatDate = (date: Date) => formatToLocalDate.format(date)

export { formatDate }
