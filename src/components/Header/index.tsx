import { Container, Content } from './styles'

import Logo from '../../assets/logo.svg'

const Header = () => {
  return (
    <Container>
      <Content>
        <img src={Logo} alt='dt money' />
        <button>Nova transação</button>
      </Content>
    </Container>
  )
}

export default Header
