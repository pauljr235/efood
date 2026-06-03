import sushi from "../../assets/images/sushi.png";
import estrela from "../../assets/images/estrela.png";
import Button from "../Button";

const Restaurant = () => (
  <div>
    <img src={sushi} alt="Foto de sushi" />
    <div>
      <h3>Nome do restaurante</h3>
      <div>
        <p>4.9</p>
        <img src={estrela} alt="Estrela" />
      </div>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi vitae
        delectus possimus at magnam voluptate adipisci ad doloribus quod harum
        vero illo, dicta commodi, asperiores voluptatum error consectetur maxime
        dolores!
      </p>
      <Button to="/perfil" type="link" title={"Clique aqui"}>
        Clique aqui
      </Button>
    </div>
  </div>
);

export default Restaurant;
