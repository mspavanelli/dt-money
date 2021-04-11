import Modal from 'react-modal'

import { Container, Close } from './styles'

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
          <input type="text" placeholder="Categoria" />

          <button>Cadastrar</button>
        </fieldset>
      </Container>
      <Close onClick={onRequestClose} />
    </Modal>
  )
}

export default NewTransactionModal
