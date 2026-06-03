import Banner from "../../components/Banner";
import HeaderPerfil from "../../components/HeaderPerfil";

import bannerImg from "../../assets/images/massa.png";

const Perfil = () => (
  <div>
    <HeaderPerfil />
    <Banner
      image={bannerImg}
      type={"Italiana"}
      name={"La Dolce Vita Trattoria"}
    />
  </div>
);

export default Perfil;
