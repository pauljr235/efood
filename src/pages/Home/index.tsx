import Header from "../../components/Header";
import { useGetFeaturedRestaurantsQuery } from "../../services/api";
import RestaurantsList from "../../components/RestaurantsList";

export type CardapioItem = {
  foto: string;
  preco: number;
  id: number;
  nome: string;
  descricao: string;
  porcao: string;
};

export type Restaurant = {
  id: number;
  titulo: string;
  destacado: boolean;
  tipo: string;
  avaliacao: number;
  descricao: string;
  capa: string;
  cardapio: CardapioItem[];
};

const Home = () => {
  const { data: restaurantes, isLoading } = useGetFeaturedRestaurantsQuery();

  if (isLoading) {
    return <p>Carregando . . .</p>;
  }

  return (
    <>
      <Header />
      <RestaurantsList restaurants={restaurantes || []} />
    </>
  );
};

export default Home;
