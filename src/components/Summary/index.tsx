import { Card, Container } from './styles'

import IncomesIcon from '../../assets/incomes.svg'
import OutcomesIcon from '../../assets/outcomes.svg'
import TotalIcon from '../../assets/total.svg'
import { formatMoney } from '../../utils/formatMoney'

const Summary = () => {
  return (
    <Container>
      <Card>
        <h3>Entradas</h3>
        <strong>{formatMoney(17400)}</strong>
        <img src={IncomesIcon} alt='Entradas' />
      </Card>

      <Card>
        <h3>Saídas</h3>
        <strong>{formatMoney(1)}</strong>
        <img src={OutcomesIcon} alt='Saídas' />
      </Card>

      <Card featured>
        <h3>Total</h3>
        <strong>{formatMoney(16141)}</strong>
        <img src={TotalIcon} alt='Total' />
      </Card>
    </Container>
  )
}

export default Summary
