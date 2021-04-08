import { GlobalStyles } from './theme/global'

import Header from './components/Header'
import Dashboard from './components/Dashboard'

const App = () => {
  return (
    <>
      <GlobalStyles />
      <Header />
      <Dashboard />
    </>
  )
}

export default App
