import sushi from "../../assets/images/sushi.png";
import estrela from "../../assets/images/estrela.png";
import Button from "../Button";
import { Card, CardInfo, Description, Imagem, Ratings, Title } from "./styles";

const Restaurant = () => (
  <Card className="container">
    <Imagem src={sushi} alt="Foto de sushi" />
    <CardInfo>
      <div>
        <Title>Nome do restaurante</Title>
        <Ratings>
          <p>4.9</p>
          <img src={estrela} alt="Estrela" />
        </Ratings>
      </div>
      <Description>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi vitae
        delectus possimus at magnam voluptate adipisci ad doloribus quod harum
        vero illo, dicta commodi, asperiores voluptatum error consectetur maxime
        dolores!
      </Description>
      <Button to="/perfil" type="link" title={"Clique aqui"}>
        Saiba mais
      </Button>
    </CardInfo>
  </Card>
);

export default Restaurant;
