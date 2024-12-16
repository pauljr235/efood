import styled from 'styled-components'
import { cores } from '../../styles'

export const FooterContainer = styled.section``

export const ImagemFooter = styled.div`
  width: 100%;
  height: 298px;
  background-repeat: no-repeat;
  background-size: cover;
  font-weight: bold;
`

export const Logo = styled.img`
  position: absolute;
  top: 1700px;
  left: 51.5%;
  transform: translateX(-50%);
  padding-top: 40px;
`

export const SocialLinks = styled.img`
  position: absolute;
  top: 1800px;
  left: 48.8%;
  margin-top: 34px;
`

export const DescricaoFooter = styled.p`
  position: absolute;
  top: 1900px;
  left: 27%;
  color: ${cores.pink};
  text-align: center;
  margin-bottom: 100px;
`
