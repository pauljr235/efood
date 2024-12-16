import logo from '../../assets/images/logo.png'
import heroImg from '../../assets/images/hero.png'
import {
  ImagemFooter,
  Logo,
  FooterContainer,
  SocialLinks,
  DescricaoFooter
} from './styles'
import socialLinks from '../../assets/images/redes sociais.png'

const Footer = () => (
  <FooterContainer>
    <ImagemFooter style={{ backgroundImage: `url(${heroImg})` }}></ImagemFooter>
    <Logo src={logo} alt="Logo efood" />
    <div>
      <SocialLinks src={socialLinks} alt="" />
    </div>
    <DescricaoFooter>
      A efood é uma plataforma para divulgação de estabelecimentos, a
      responsabilidade pela entrega, qualidade <br /> dos produtos é toda do
      estabelecimento contratado.{' '}
    </DescricaoFooter>
  </FooterContainer>
)

export default Footer
