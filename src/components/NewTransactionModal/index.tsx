import { FormEvent, useState } from 'react'

import Modal from 'react-modal'

import { Container, Close, Types, RadioBox } from './styles'

import IncomeIcon from '../../assets/incomes.svg'
import OutcomeIcon from '../../assets/outcomes.svg'
import api from '../../services/api'

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
  const [title, setTitle] = useState('')
  const [price, setPrice] = useState(0)
  const [category, setCategory] = useState('')
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
    resetForm()
  }

  const resetForm = () => {
    setTitle('')
    setPrice(0)
    setCategory('')
    setSelectedType(null)
  }

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault()

    const data = {
      title,
      price,
      category,
      selectedType,
    }

    api.post('transactions', data)

    handleClose()
  }

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      ariaHideApp={false}
      overlayClassName="modal-overlay"
      className="modal-container"
    >
      <Container onSubmit={handleSubmit}>
        <fieldset>
          <legend>Cadastrar transação</legend>

          <input
            type="text"
            placeholder="Título"
            value={title}
            onChange={event => setTitle(event.target.value)}
          />
          <input
            type="number"
            placeholder="Preço"
            value={price}
            onChange={event => setPrice(Number(event.target.value))}
          />

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

          <input
            type="text"
            placeholder="Categoria"
            value={category}
            onChange={event => setCategory(event.target.value)}
          />

          <button type="submit">Cadastrar</button>
        </fieldset>
      </Container>
      <Close onClick={handleClose} />
    </Modal>
  )
}

export default NewTransactionModal
