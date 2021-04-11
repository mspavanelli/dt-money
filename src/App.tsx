import { GlobalStyles } from './theme/global'

import Header from './components/Header'
import Dashboard from './components/Dashboard'

import NewTransactionModal from './components/NewTransactionModal'
import { useState } from 'react'

const App = () => {
  const [isNewTransactionModalOpen, setNewTransactionOpen] = useState(false)

  const openNewTransactionModal = () => {
    setNewTransactionOpen(true)
  }

  const closeNewTransactionModal = () => {
    setNewTransactionOpen(false)
  }

  return (
    <>
      <GlobalStyles />
      <Header openModal={openNewTransactionModal} />
      <Dashboard />

      <NewTransactionModal
        isOpen={isNewTransactionModalOpen}
        onRequestClose={closeNewTransactionModal}
      />
    </>
  )
}

export default App
