import Header from "../../components/Header";
import RestaurantsList, {
  type RestaurantItem,
} from "../../components/RestaurantsList";

import sushi from "../../assets/images/sushi.png";

const restaurantes: RestaurantItem[] = [
  {
    id: 1,
    image: sushi,
    title: "Hioki Sushi ",
    rating: "4.9",
    description:
      "Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida.Experimente o Japão sem sair do lar com nosso delivery!",
    infos: ["Destaque da Semana", "Japonesa"],
  },
  {
    id: 2,
    image: sushi,
    title: "Hioki Sushi ",
    rating: "4.9",
    description:
      "Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida.Experimente o Japão sem sair do lar com nosso delivery!",
    infos: ["Destaque da Semana", "Japonesa"],
  },
  {
    id: 3,
    image: sushi,
    title: "Hioki Sushi ",
    rating: "4.9",
    description:
      "Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida.Experimente o Japão sem sair do lar com nosso delivery!",
    infos: ["Destaque da Semana", "Japonesa"],
  },
  {
    id: 4,
    image: sushi,
    title: "Hioki Sushi ",
    rating: "4.9",
    description:
      "Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida.Experimente o Japão sem sair do lar com nosso delivery!",
    infos: ["Destaque da Semana", "Japonesa"],
  },
  {
    id: 5,
    image: sushi,
    title: "Hioki Sushi ",
    rating: "4.9",
    description:
      "Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida.Experimente o Japão sem sair do lar com nosso delivery!",
    infos: ["Destaque da Semana", "Japonesa"],
  },
  {
    id: 6,
    image: sushi,
    title: "Hioki Sushi ",
    rating: "4.9",
    description:
      "Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida.Experimente o Japão sem sair do lar com nosso delivery!",
    infos: ["Destaque da Semana", "Japonesa"],
  },
];

const Home = () => (
  <div>
    <Header />
    <RestaurantsList restaurants={restaurantes} />
  </div>
);

export default Home;
