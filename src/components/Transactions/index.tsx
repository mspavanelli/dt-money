import { useContext } from 'react'
import { AppContext } from '../../core/context'
import { formatDate } from '../../utils/formatDate'
import { formatMoney } from '../../utils/formatMoney'

import { Container } from './styles'

import { TransactionsType } from '../../types/Transaction'

const Transactions = () => {
  const transactions = useContext<TransactionsType[]>(AppContext)

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
