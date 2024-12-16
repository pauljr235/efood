import { useNavigate } from 'react-router-dom' // Importe o hook useNavigate
import pasta from '../../assets/images/massa.png'
import estrela from '../../assets/images/estrela.png'
import { TagContainer, Titulo, Descricao, Botao, Card, Rating } from './styles'

const Products = () => {
  const navigate = useNavigate() // Inicialize o hook

  const handleClick = () => {
    navigate('/perfil') // Defina a navegação para a página de perfil
  }

  return (
    <Card className="container">
      <img src={pasta} alt="Massa" />
      <Titulo>
        <h3>La Dolce Vita Trattoria</h3>
        <Rating>4.5</Rating>
        <img src={estrela} alt="Estrela" />
      </Titulo>
      <TagContainer>italiana</TagContainer>

      <Descricao>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste ea
        dignissimos esse? Aliquid veniam vel rerum assumenda nam a soluta quos
        quis, ea pariatur, quo cum totam quisquam dignissimos cupiditate.
      </Descricao>
      <Botao type="button" onClick={handleClick}>
        Saiba mais
      </Botao>
      {/* Atribua a função handleClick ao onClick */}
    </Card>
  )
}

export default Products
