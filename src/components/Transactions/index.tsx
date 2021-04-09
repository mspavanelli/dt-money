import { formatMoney } from '../../utils/formatMoney'

import { Container } from './styles'

const Transactions = () => {
  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Título</th>
            <th>Preço</th>
            <th>Categoria</th>
            <th>Data</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Desenvolvimento de Site</td>
            <td className='income'>{formatMoney(12000)}</td>
            <td>Venda</td>
            <td>12/03/2021</td>
          </tr>
          <tr>
            <td>Aluguel</td>
            <td className='outcome'>{formatMoney(1800)}</td>
            <td>Moradia</td>
            <td>12/03/2021</td>
          </tr>
        </tbody>
      </table>
    </Container>
  )
}

export default Transactions
