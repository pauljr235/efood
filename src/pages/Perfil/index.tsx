import { useParams } from 'react-router-dom'
import Banner from '../../components/Banner'
import DishesList from '../../components/DishesList'
import HeaderPerfil from '../../components/HeaderPerfil'

import { useGetFeaturedMenuQuery } from '../../services/api'

const Perfil = () => {
  const { id } = useParams()

  const { data: menu, isLoading } = useGetFeaturedMenuQuery(id || '')

  if (isLoading) {
    return <p> Carregando... </p>
  }

  if (!menu) {
    return <p>PÁGINA NÃO ENCONTRADA!</p>
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
