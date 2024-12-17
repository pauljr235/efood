import logo from '../../assets/images/logo.png'
import socialLinks from '../../assets/images/redes sociais.png'
import { Container, LogoFotter, SocialMedia, DescricaoFoot } from './styles'

const Footer = () => (
  <Container>
    <div>
      <LogoFotter>
        <img src={logo} alt="Logo efood" />
      </LogoFotter>
      <SocialMedia>
        <img src={socialLinks} alt="Redes Sociais" />
      </SocialMedia>
      <DescricaoFoot>
        A efood é uma plataforma para divulgação de estabelecimentos, a
        responsabilidade pela entrega, qualidade dos produtos é toda do
        estabelecimento contratado.{' '}
      </DescricaoFoot>
    </div>
  </Container>
)

export default Footer
