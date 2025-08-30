import styled from 'styled-components'
import { colors } from '../../styles'

import bg from '../../Assets/images/Vector3.png'

export const HeaderContainer = styled.header`
  background-image: url(${bg});
  background-size: cover;
  background-repeat: no-repeat;
  height: 384px;
  padding: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const Title = styled.h2`
  font-size: 36px;
  font-weight: 900;
  line-height: 42px;
  color: ${colors.rose};
  max-width: 539px;
  width: 100%;
  text-align: center;

  @media (max-width: 615px) {
    font-size: 24px;
  }
`

export const Logo = styled.img`
  width: 125px;
  height: 57px;
  margin-bottom: 138px;
`
