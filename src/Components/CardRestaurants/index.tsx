import { Link } from 'react-router-dom'

import {
  Button,
  Card,
  CardContainer,
  Description,
  Rate,
  RateDiv,
  RestaurantBanner,
  Tag,
  Title,
  TitleContainer
} from './styles'

import star from '../../Assets/images/star_favorite-[#1499].png'

export interface MenuItem {
  foto: string
  preco: number
  id: number
  nome: string
  descricao: string
  porcao: string
}

export type DadosRestaurante = {
  id: number
  titulo: string
  destacado?: boolean
  tipo: string
  avaliacao: number
  descricao: string
  capa: string
  cardapio?: MenuItem[]
}

export const getDescription = (descricao: string) => {
  if (descricao.length > 120) {
    return descricao.slice(0, 127) + '...'
  }

  return descricao
}

const Restaurant = ({
  titulo,
  tipo,
  descricao,
  avaliacao,
  capa,
  id
}: DadosRestaurante) => {
  return (
    <Card>
      <RestaurantBanner src={capa} alt="foto do restaurante" />
      <CardContainer>
        <TitleContainer>
          <Title>{titulo}</Title>
          <RateDiv>
            <Rate>{avaliacao}</Rate>
            <span>
              <img src={star} alt="" />
            </span>
          </RateDiv>
        </TitleContainer>
        <Description>{getDescription(descricao)}</Description>
        <Link to={`/restaurant/${id}`}>
          {' '}
          <Button>Saiba mais</Button>{' '}
        </Link>
      </CardContainer>
      <Tag>{tipo}</Tag>
    </Card>
  )
}

export default Restaurant
