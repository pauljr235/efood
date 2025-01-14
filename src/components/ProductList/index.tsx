import Product from '../Product'
import { List } from './styles'

import Restaurant from '../../models/Restaurant'

export type Props = {
  title: string
  restaurants: Restaurant[]
}

const ProductList = ({ title, restaurants }: Props) => (
  <div className="container">
    <List>
      {restaurants.map((restaurant) => (
        <Product
          key={restaurant.id}
          image={restaurant.image}
          rating={restaurant.rating}
          description={restaurant.description}
          infos={restaurant.infos}
          title={restaurant.title}
        />
      ))}
    </List>
  </div>
)

export default ProductList
