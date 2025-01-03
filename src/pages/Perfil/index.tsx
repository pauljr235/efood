import { useEffect, useState } from 'react'
import Header from './Header'
import Hero2 from './Hero2'

import ListaProdutos from './ListaProdutos'

type MenuItem = {
  foto: string
  preco: number
  id: number
  nome: string
  descricao: string
  porcao: string
}

export type Menu = {
  id: number
  titulo: string
  destacado: boolean
  tipo: string
  avaliacao: number
  descricao: string
  capa: string
  cardapio: MenuItem[]
}

const Perfil = () => {
  const [menus, setMenus] = useState<Menu[]>([]) // State to hold menu data
  const [restaurants, setRestaurants] = useState([]) // State to hold restaurant data

  useEffect(() => {
    fetch('https://fake-api-tau.vercel.app/api/efood/perfil')
      .then((res) => res.json())
      .then((res) => setMenus(res))

    fetch('https://fake-api-tau.vercel.app/api/efood/restaurantes')
      .then((res) => res.json())
      .then((res) => setRestaurants(res))
  }, [])

  return (
    <>
      <Header />
      <Hero2 />
      <ListaProdutos />
    </>
  )
}

export default Perfil
