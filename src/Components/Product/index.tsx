import { useDispatch } from 'react-redux'
import pizaa from '../../Assets/images/image 3.png'
import { AddCart, Card, Description, ProductImg, Title } from './styles'

export type Props = {
  foto: string
  nome: string
  descricao: string
  id: number
}

const Product = ({ foto, id, nome, descricao }: Props) => {
  return (
    <Card>
      <div>
        <ProductImg src={foto} alt={nome} />
        <Title>{nome}</Title>
        <Description>{descricao}</Description>
        <AddCart>Adicionar ao carrinho</AddCart>
      </div>
    </Card>
  )
}

export default Product
