import { useContext, useEffect, useState } from 'react'

import { Card, Container } from './styles'

import IncomesIcon from '../../assets/incomes.svg'
import OutcomesIcon from '../../assets/outcomes.svg'
import TotalIcon from '../../assets/total.svg'
import { formatMoney } from '../../utils/formatMoney'
import { AppContext } from '../../core/context'

import { TransactionsType as Transactions } from '../../types/Transaction'

type TransactionType = 'income' | 'outcome'

const Summary = () => {
  const transactions = useContext(AppContext)

  const [totalIncome, setTotalIncome] = useState(0)
  const [totalOutcome, setTotalOutcome] = useState(0)

  const filterTransactionByType = (
    transactions: Transactions[],
    type: TransactionType
  ) => {
    return transactions.filter(transaction => transaction.type === type)
  }

  const sumTransactionValues = (transactions: Transactions[]) => {
    return transactions.reduce(
      (total, transaction) => total + transaction.amount,
      0
    )
  }

  useEffect(() => {
    const incomesTransactions = filterTransactionByType(transactions, 'income')
    const outcomesTransactions = filterTransactionByType(
      transactions,
      'outcome'
    )

    const incomes = sumTransactionValues(incomesTransactions)
    const outcomes = sumTransactionValues(outcomesTransactions)

    setTotalIncome(incomes)
    setTotalOutcome(outcomes)
  }, [transactions])

  return (
    <Container>
      <Card>
        <h3>Entradas</h3>
        <strong>{formatMoney(totalIncome)}</strong>
        <img src={IncomesIcon} alt="Entradas" />
      </Card>

      <Card>
        <h3>Saídas</h3>
        <strong>{formatMoney(totalOutcome)}</strong>
        <img src={OutcomesIcon} alt="Saídas" />
      </Card>

      <Card featured>
        <h3>Total</h3>
        <strong>{formatMoney(totalIncome - totalOutcome)}</strong>
        <img src={TotalIcon} alt="Total" />
      </Card>
    </Container>
  )
}

export default Summary
