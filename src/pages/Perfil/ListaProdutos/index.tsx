import Produtos from '../../Perfil/Produtos'
import { Lista } from './styles'

const ListaProdutos = () => (
  <div className="container">
    <Lista>
      <Produtos />
      <Produtos />
      <Produtos />
      <Produtos />
      <Produtos />
      <Produtos />
    </Lista>
  </div>
)

export default ListaProdutos
