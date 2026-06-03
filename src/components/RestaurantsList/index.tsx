import Restaurant from "../Restaurant";
import { Container, List } from "./styles";

export type RestaurantItem = {
  id: number;
  image: string;
  title: string;
  rating: string;
  description: string;
  infos: string[];
};

export type Props = {
  restaurants: RestaurantItem[];
};

const RestaurantsList = ({ restaurants }: Props) => (
  <Container>
    <List>
      {restaurants.map((restaurant) => (
        <Restaurant
          key={restaurant.id}
          image={restaurant.image}
          title={restaurant.title}
          rating={restaurant.rating}
          description={restaurant.description}
          infos={restaurant.infos}
        />
      ))}
    </List>
  </Container>
);

export default RestaurantsList;
