import Dish from "../Dish";
import { List } from "./styles";

export type Menu = {
  id: number;
  image: string;
  title: string;
  description: string;
};

export type Props = {
  cardapio: Menu[];
};

const DishesList = ({ cardapio }: Props) => (
  <div className="container">
    <List>
      {cardapio.map((item) => (
        <Dish
          key={item.id}
          image={item.image}
          title={item.title}
          description={item.description}
        />
      ))}
    </List>
  </div>
);

export default DishesList;
