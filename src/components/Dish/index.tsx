import Button from "../Button";

import { Card, Description, Title } from "./styles";

type Props = {
  image: string;
  title: string;
  description: string;
  onClick: () => void;
};

const Dish = ({ image, title, description, onClick }: Props) => {

  const getDescription = (description: string) =>{
    if(description.length > 95){
      return description.slice(0, 92) + '...'
    }
    return description
  }

  return (
    <Card>
      <img src={image} alt={title} />
      <Title>{title}</Title>
      <Description>{getDescription(description)}</Description>
      <Button onClick={onClick} type="button" title={"Clique para adicionar"}>
        Adicionar ao carrinho
      </Button>
    </Card>
  );
};
export default Dish;
