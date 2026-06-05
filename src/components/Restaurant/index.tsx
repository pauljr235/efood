import estrela from "../../assets/images/estrela.png";
import Button from "../Button";
import {
  Card,
  CardInfo,
  Description,
  Imagem,
  Infos,
  Ratings,
  Title,
} from "./styles";
import Tag from "../Tag";

type Props = {
  id: number;
  image: string;
  title: string;
  rating: string;
  description: string;
  infos: string[];
};

const Restaurant = ({
  image,
  title,
  rating,
  description,
  infos,
  id,
}: Props) => {
  const getDescription = (description: string) => {
    if (description.length > 250) {
      return description.slice(0, 200) + "...";
    }
    return description;
  };
  return (
    <Card className="container">
      <Imagem src={image} alt="Foto de sushi" />
      <Infos>
        {infos.map((info) => (
          <Tag key={info}>{info}</Tag>
        ))}
      </Infos>
      <CardInfo>
        <div>
          <Title>{title}</Title>
          <Ratings>
            <p>{rating}</p>
            <img src={estrela} alt="Estrela" />
          </Ratings>
        </div>
        <Description>{getDescription(description)}</Description>
        <Button to={`/perfil/${id}`} type="link" title={"Clique aqui"}>
          Saiba mais
        </Button>
      </CardInfo>
    </Card>
  );
};
export default Restaurant;
