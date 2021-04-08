const formatToBrazilian = Intl.NumberFormat('pt-br', {
  style: 'currency',
  currency: 'BRL',
})

const formatMoney = (value: number) => formatToBrazilian.format(value)

export { formatMoney }
