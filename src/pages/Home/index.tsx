import ProductList from '../../components/ProductList'
import Restaurant from '../../models/Restaurant'

import sushi from '../../assets/images/sushi.png'
import pasta from '../../assets/images/pasta.png'

const restaurantes: Restaurant[] = [
  {
    id: 1,
    image: sushi,
    title: 'Hioki Sushi ',
    rating: '4.9',
    description:
      'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida. Experimente o Japão sem sair do lar com nosso delivery!',
    infos: ['Destaque da semana', 'Japonesa']
  },
  {
    id: 2,
    image: pasta,
    title: 'La Dolce Vita Trattoria ',
    rating: '4.6',
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    infos: ['Italiana']
  },
  {
    id: 3,
    image: pasta,
    title: 'La Dolce Vita Trattoria ',
    rating: '4.6',
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    infos: ['Italiana']
  },
  {
    id: 4,
    image: pasta,
    title: 'La Dolce Vita Trattoria ',
    rating: '4.6',
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    infos: ['Italiana']
  },
  {
    id: 5,
    image: pasta,
    title: 'La Dolce Vita Trattoria ',
    rating: '4.6',
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    infos: ['Italiana']
  },
  {
    id: 6,
    image: pasta,
    title: 'La Dolce Vita Trattoria ',
    rating: '4.6',
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    infos: ['Italiana']
  }
]

const Home = () => (
  <ProductList restaurants={restaurantes} title="Restaurantes" />
)

export default Home
