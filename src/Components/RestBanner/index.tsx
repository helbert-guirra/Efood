import { BannerDiv, BannerImg, Category, Title } from './styles'

type Props = {
  capa: string
  tipo: string
  titulo: string
}

const Banner = ({ capa, tipo, titulo }: Props) => (
  <BannerImg style={{ backgroundImage: `url(${capa})` }}>
    <BannerDiv className="container">
      <Category>{tipo}</Category>
      <Title>{titulo}</Title>
    </BannerDiv>
  </BannerImg>
)

export default Banner
