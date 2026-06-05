import Banner from "../../components/Banner";
import HeaderPerfil from "../../components/HeaderPerfil";

import DishesList, { type Menu } from "../../components/DishesList";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import type { RestaurantItem } from "../../components/RestaurantsList";

const Perfil = () => {
  const { id } = useParams();

  const [menu, setMenu] = useState<RestaurantItem | null>(null);

  useEffect(() => {
    fetch(`https://api-ebac.vercel.app/api/efood/restaurantes/${id}`)
      .then((res) => res.json())
      .then((res) => {
        setMenu(res);
      });
  });

  if (!menu) {
    return <p>Carregando...</p>;
  }

  return (
    <div>
      <HeaderPerfil />
      <Banner capa={menu.capa} titulo={menu.titulo} tipo={menu.tipo} />
      <DishesList cardapio={menu.cardapio} />
    </div>
  );
};
export default Perfil;
