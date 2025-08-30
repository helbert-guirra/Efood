import { Logo } from '../Header/styles'
import {
  Copy,
  FooterContaine,
  LogoFooter,
  SocialIcon,
  Socialcontainer
} from './styled'

import Facebook from '../../Assets/images/Vector (1).png'
import Tt from '../../Assets/images/Vector.png'
import Insta from '../../Assets/images/instagram-round-svgrepo-com (1) 1.png'
import logo from '../../Assets/images/logo.png'

const Footer = () => (
  <FooterContaine>
    <LogoFooter src={logo} alt="" />
    <Socialcontainer>
      <SocialIcon src={Facebook} alt="" />
      <SocialIcon src={Tt} alt="" />
      <SocialIcon src={Insta} alt="" />
    </Socialcontainer>
    <Copy>
      A efood é uma plataforma para divulgação de estabelecimentos, a
      responsabilidade pela entrega, qualidade dos produtos é toda do
      estabelecimento contratado.{' '}
    </Copy>
  </FooterContaine>
)

export default Footer
