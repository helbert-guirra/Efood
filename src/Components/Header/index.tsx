import logo from '../../Assets/images/logo.png'
import { HeaderContainer, Logo, Title } from './styles'

const Header = () => (
  <HeaderContainer>
    <Logo src={logo} alt="" />
    <Title>Viva experiências gastronômicas no conforto da sua casa</Title>
  </HeaderContainer>
)

export default Header
