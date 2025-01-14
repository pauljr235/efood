import { Link } from 'react-router-dom'
import estrela from '../../assets/images/star.png'

import { BotaoContainer } from '../Button/styles'
import Tag from '../Tag'

import {
  Card,
  Descricao,
  HeaderCard,
  Infos,
  Rating,
  TituloCard
} from './styles'

type Props = {
  image: string
  title: string
  rating: string
  description: string
  infos: string[]
  to?: string
}

const Product = ({ image, title, rating, description, infos, to }: Props) => (
  <>
    <Card className="container">
      <img src={image} />
      <Infos>
        {infos.map((info) => (
          <Tag key={info}>{info}</Tag>
        ))}
      </Infos>
      <HeaderCard>
        <TituloCard>{title}</TituloCard>
        <Rating>
          <h3>
            {rating} <img src={estrela} alt="Estrela" />
          </h3>
        </Rating>
      </HeaderCard>
      <Descricao>{description}</Descricao>
      <Link to="/perfil">
        <BotaoContainer type="button" title="Saiba mais">
          Saiba mais
        </BotaoContainer>
      </Link>
    </Card>
  </>
)

export default Product
