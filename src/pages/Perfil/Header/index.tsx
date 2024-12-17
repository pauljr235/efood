import { Carrinho, LinkH, HeaderContainer, Imagem, Logo } from './styles'
import logo from '../../../assets/images/logo.png'
import headerImg from '../../../assets/images/hero.png'
import { Link as RouterLink } from 'react-router-dom' // Importe o Link do react-router-dom

const Header = () => (
  <HeaderContainer>
    <Imagem style={{ backgroundImage: `url(${headerImg})` }}></Imagem>{' '}
    <Logo src={logo} alt="Logo efood" />
    <nav>
      <LinkH>
        <RouterLink to="/">Restaurantes</RouterLink>
      </LinkH>
    </nav>
    <Carrinho>0 produto(s) no carrinho</Carrinho>
  </HeaderContainer>
)

export default Header
