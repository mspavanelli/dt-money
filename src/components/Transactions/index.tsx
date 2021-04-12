import { useEffect, useState } from 'react'

import api from '../../services/api'

import { formatDate } from '../../utils/formatDate'
import { formatMoney } from '../../utils/formatMoney'

import { Container } from './styles'

type TransactionsType = {
  id: number
  title: string
  amount: number
  type: 'income' | 'outcome'
  category: string
  createdAt: string
}

const Transactions = () => {
  const [transactions, setTransactions] = useState<TransactionsType[]>([])

  useEffect(() => {
    api
      .get('transactions')
      .then(response => setTransactions(response.data.transactions))
  }, [])

  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Título</th>
            <th>Preço</th>
            <th>Categoria</th>
            <th>Data</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map(transaction => (
            <tr key={transaction.id}>
              <td>{transaction.title}</td>
              <td className={transaction.type || ''}>
                {formatMoney(transaction.amount)}
              </td>
              <td>{transaction.category}</td>
              <td>{formatDate(new Date(transaction.createdAt))}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </Container>
  )
}

export default Transactions
