import pizza from '../../../assets/images/pizza.png'
import { Cartao, TituloCartao, DescricaoCartao, BotaoCartao } from './styles'

const Produtos = () => (
  <Cartao>
    <img src={pizza} alt="" />
    <TituloCartao>Pizza Marguerita</TituloCartao>
    <DescricaoCartao>
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Distinctio
      neque, molestiae nihil earum perspiciatis id illum excepturi tempora
      recusandae vel vero nobis corrupti minus, itaque libero iusto. Quaerat,
      ipsa aliquid?
    </DescricaoCartao>
    <BotaoCartao type="button">Adicionar ao carrinho</BotaoCartao>
  </Cartao>
)

export default Produtos
