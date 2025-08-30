import { Link } from 'react-router-dom'
import logo from '../../Assets/images/logo.png'
import { CartButton, Header, HeaderContainer, LinkHome, Logo } from './styles'

import { open } from '../../store/reducers/cart'
import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../store'

const ProfileHeader = () => {
  const dispatch = useDispatch()

  const OpenCart = () => {
    dispatch(open())
  }

  const { items } = useSelector((state: RootReducer) => state.cart)

  return (
    <Header>
      <HeaderContainer className="container">
        <Link to="/">
          <LinkHome>Restaurantes</LinkHome>
        </Link>
        <Logo src={logo}></Logo>
        <CartButton onClick={OpenCart}>
          {items.length} produto(s) no carrinho
        </CartButton>
      </HeaderContainer>
    </Header>
  )
}

export default ProfileHeader
