import { BannerContainer, Name, Title } from './styles'

type Props = {
  capa: string
  tipo: string
  titulo: string
}

const Banner = ({ tipo, titulo, capa }: Props) => (
  <BannerContainer style={{ backgroundImage: `url(${capa})` }}>
    <div className="container">
      <Title>{tipo}</Title>
      <Name>{titulo}</Name>
    </div>
  </BannerContainer>
)

export default Banner
