export type TransactionsType = {
  id: number
  title: string
  amount: number
  type: 'income' | 'outcome'
  category: string
  createdAt: string
}
