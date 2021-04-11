import { useState } from 'react'

import Modal from 'react-modal'

import { Container, Close, Types, RadioBox } from './styles'

import IncomeIcon from '../../assets/incomes.svg'
import OutcomeIcon from '../../assets/outcomes.svg'

enum TransactionType {
  INCOME,
  OUTCOME,
}

type NewTransactionModalProps = {
  isOpen: boolean
  onRequestClose: () => void
}

const NewTransactionModal = ({
  isOpen,
  onRequestClose,
}: NewTransactionModalProps) => {
  const [selectedType, setSelectedType] = useState<TransactionType | null>(null)

  const setToIncome = () => {
    setSelectedType(TransactionType.INCOME)
  }

  const setToOutcome = () => {
    setSelectedType(TransactionType.OUTCOME)
  }

  const handleClose = () => {
    setSelectedType(null)
    onRequestClose()
  }

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      ariaHideApp={false}
      overlayClassName="modal-overlay"
      className="modal-container"
    >
      <Container action="">
        <fieldset>
          <legend>Cadastrar transação</legend>

          <input type="text" placeholder="Título" />
          <input type="number" placeholder="Preço" />

          <Types>
            <RadioBox
              type="button"
              className="incomes"
              active={selectedType === TransactionType.INCOME}
              activeColor="income"
              onClick={setToIncome}
            >
              <img src={IncomeIcon} alt="Entradas" />
              Entrada
            </RadioBox>
            <RadioBox
              type="button"
              active={selectedType === TransactionType.OUTCOME}
              className="outcomes"
              activeColor="outcome"
              onClick={setToOutcome}
            >
              <img src={OutcomeIcon} alt="Saídas" />
              Saída
            </RadioBox>
          </Types>

          <input type="text" placeholder="Categoria" />

          <button type="submit">Cadastrar</button>
        </fieldset>
      </Container>
      <Close onClick={handleClose} />
    </Modal>
  )
}

export default NewTransactionModal
