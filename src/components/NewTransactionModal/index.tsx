import Modal from 'react-modal'

import { Container, Close, Types } from './styles'

import IncomeIcon from '../../assets/incomes.svg'
import OutcomeIcon from '../../assets/outcomes.svg'

type NewTransactionModalProps = {
  isOpen: boolean
  onRequestClose: () => void
}

const NewTransactionModal = ({
  isOpen,
  onRequestClose,
}: NewTransactionModalProps) => {
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
            <button type="button" className="incomes">
              <img src={IncomeIcon} alt="Entradas" />
              Entrada
            </button>
            <button type="button" className="outcomes">
              <img src={OutcomeIcon} alt="Saídas" />
              Saída
            </button>
          </Types>

          <input type="text" placeholder="Categoria" />

          <button type="submit">Cadastrar</button>
        </fieldset>
      </Container>
      <Close onClick={onRequestClose} />
    </Modal>
  )
}

export default NewTransactionModal
