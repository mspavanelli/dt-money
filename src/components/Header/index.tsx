import { Container, Content } from './styles'

import Logo from '../../assets/logo.svg'

type HeaderProps = {
  openModal: () => void
}

const Header = ({ openModal }: HeaderProps) => {
  return (
    <Container>
      <Content>
        <img src={Logo} alt="dt money" />
        <button onClick={openModal}>Nova transação</button>
      </Content>
    </Container>
  )
}

export default Header
