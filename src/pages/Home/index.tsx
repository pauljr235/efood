import Header from "../../components/Header";
import RestaurantsList, {
  type RestaurantItem,
} from "../../components/RestaurantsList";

import { useEffect, useState } from "react";



const Home = () => {
  const [restaurantes, setRestaurantes] = useState<RestaurantItem[]>([]);

  useEffect(() => {
    fetch("https://api-ebac.vercel.app/api/efood/restaurantes")
      .then((res) => res.json())
      .then((res) => {
        setRestaurantes(res);
      });
  });

  return (
    <div>
      <Header />
      <RestaurantsList restaurants={restaurantes} />
    </div>
  );
};
export default Home;
