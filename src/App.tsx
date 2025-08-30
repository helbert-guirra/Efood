import { Provider } from 'react-redux'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import GlobalStyle from './styles'
import Footer from './Components/Footer'

import Rotas from './routes'
import Cart from './Components/Cart'
import { store } from './store'

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div className="App">
          <GlobalStyle></GlobalStyle>
          <Rotas />
          <Footer></Footer>
          <Cart></Cart>
        </div>
      </BrowserRouter>
    </Provider>
  )
}

export default App
