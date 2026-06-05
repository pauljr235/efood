import Banner from "../../components/Banner";
import HeaderPerfil from "../../components/HeaderPerfil";

import massa from "../../assets/images/massa.png";
import Dish from "../../components/Dish";
import DishesList, { type Menu } from "../../components/DishesList";

import pizza from "../../assets/images/pizza.png";
import { useParams } from "react-router-dom";

const menu: Menu[] = [
  {
    id: 1,
    image: pizza,
    title: "Pizza Marguerita",
    description:
      "A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!",
  },
  {
    id: 2,
    image: pizza,
    title: "Pizza Marguerita",
    description:
      "A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!",
  },
  {
    id: 3,
    image: pizza,
    title: "Pizza Marguerita",
    description:
      "A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!",
  },
  {
    id: 4,
    image: pizza,
    title: "Pizza Marguerita",
    description:
      "A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!",
  },
  {
    id: 5,
    image: pizza,
    title: "Pizza Marguerita",
    description:
      "A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!",
  },
  {
    id: 6,
    image: pizza,
    title: "Pizza Marguerita",
    description:
      "A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!",
  },
];

const Perfil = () => {
  const { id } = useParams();

  return (
    <div>
      <HeaderPerfil />
      <DishesList cardapio={menu} />
    </div>
  );
};
export default Perfil;
