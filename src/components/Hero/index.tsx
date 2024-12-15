import logo from '../../assets/images/logo.png'
import heroImg from '../../assets/images/hero.png'
import { Imagem, Logo, Titulo } from './styles'

const Hero = () => (
  <>
    <Imagem style={{ backgroundImage: `url(${heroImg})` }}></Imagem>
    <div>
      <Logo src={logo} alt="Logo efood" />
      <Titulo>
        Viva experiências gastronômicas <br /> no conforto da sua casa
      </Titulo>
    </div>
  </>
)

export default Hero
