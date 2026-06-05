import Button from "../Button";

import pizza from "../../assets/images/pizza.png";
import { Card, Description, Title } from "./styles";

type Props = {
  image: string;
  title: string;
  description: string;
};

const Dish = ({ image, title, description }: Props) => (
  <Card>
    <img src={image} alt={title} />
    <Title>{title}</Title>
    <Description>{description}</Description>
    <Button type="button" title={"Clique para adicionar"}>
      Adicionar ao carrinho
    </Button>
  </Card>
);

export default Dish;
