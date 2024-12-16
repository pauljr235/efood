import { Carrinho, HeaderContainer, Imagem, Link, Logo } from './styles'
import logo from '../../../assets/images/logo.png'
import headerImg from '../../../assets/images/hero.png'

const Header = () => (
  <HeaderContainer>
    <Imagem style={{ backgroundImage: `url(${headerImg})` }}></Imagem>

    <Logo src={logo} alt="Logo efood" />
    <nav>
      <ul>
        <li>
          <Link href="./home">Restaurantes</Link>
        </li>
      </ul>
    </nav>
    <Carrinho>0 produto(s) no carrinho</Carrinho>
  </HeaderContainer>
)

export default Header
