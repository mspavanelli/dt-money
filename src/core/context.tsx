import { createContext, useEffect, useState } from 'react'
import { TransactionsType } from '../types/Transaction'
import api from '../services/api'

export const AppContext = createContext<TransactionsType[]>([])

type AppContextProviderProps = {
  children: JSX.Element | JSX.Element[]
}

export const AppContextProvider = ({ children }: AppContextProviderProps) => {
  const [transactions, setTransactions] = useState<TransactionsType[]>([])

  useEffect(() => {
    api
      .get('transactions')
      .then(response => setTransactions(response.data.transactions))
  }, [])

  return (
    <AppContext.Provider value={transactions}>{children}</AppContext.Provider>
  )
}
