import pizza from '../../../assets/images/pizza.png'
import zoom from '../../../assets/images/mais-zoom 1.png'

import {
  Cartao,
  TituloCartao,
  DescricaoCartao,
  BotaoCartao,
  Action
} from './styles'
import { useState } from 'react'

export type Menu = {
  id: number
  name: string
  description: string
  price: number
  image: string
}

const Produtos = () => {
  return (
    <>
      <Cartao>
        <img src={pizza} alt="imagem pizza" />
        <Action>
          <img src={zoom} alt="botao zoom" />
        </Action>
        <TituloCartao>Pizza Marguerita</TituloCartao>
        <DescricaoCartao>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Distinctio
          neque, molestiae nihil earum perspiciatis id illum excepturi tempora
          recusandae vel vero nobis corrupti minus, itaque libero iusto.
          Quaerat, ipsa aliquid?
        </DescricaoCartao>
        <BotaoCartao type="button">Adicionar ao carrinho</BotaoCartao>
      </Cartao>
    </>
  )
}

export default Produtos
