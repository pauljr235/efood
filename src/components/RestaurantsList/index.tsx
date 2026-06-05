import Restaurant from "../Restaurant";
import { Container, List } from "./styles";

export type RestaurantItem = {
  id: number;
  capa: string;
  titulo: string;
  avaliacao: string;
  descricao: string;
  destacado: string;
  tipo: string;
};

export type Props = {
  restaurants: RestaurantItem[];
};

const RestaurantsList = ({ restaurants }: Props) => {
  const getTag = (restaurante: RestaurantItem) => {
    const tag = [];
    if (restaurante.destacado) {
      tag.push("Destaque da semana");
    }
    if (restaurante.tipo) {
      tag.push(restaurante.tipo);
    }
    return tag;
  };

  return (
    <Container>
      <List>
        {restaurants.map((restaurant) => (
          <Restaurant
            key={restaurant.id}
            image={restaurant.capa}
            title={restaurant.titulo}
            rating={restaurant.avaliacao}
            description={restaurant.descricao}
            infos={getTag(restaurant)}
            id={restaurant.id}
          />
        ))}
      </List>
    </Container>
  );
};
export default RestaurantsList;
