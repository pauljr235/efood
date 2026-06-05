import Button from "../Button";

import { Card, Description, Title } from "./styles";

type Props = {
  image: string;
  title: string;
  description: string;
  onClick: () => void
};

const Dish = ({ image, title, description, onClick}: Props) => (
  <Card>
    <img src={image} alt={title} />
    <Title>{title}</Title>
    <Description>{description}</Description>
    <Button onClick={onClick} type="button" title={"Clique para adicionar"}>
      Adicionar ao carrinho
    </Button>
  </Card>
);

export default Dish;
