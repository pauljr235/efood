import Restaurant from "../Restaurant";
import { Container, List } from "./styles";

import sushi from "../../assets/images/sushi.png";

const RestaurantsList = () => (
  <Container>
    <List>
      <Restaurant
        image={sushi}
        title="Hioki Sushi "
        rating="4.9"
        description="Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida.Experimente o Japão sem sair do lar com nosso delivery!"
        infos={["Destaque da Semana", "Japonesa"]}
      />
      <Restaurant
        image={sushi}
        title="Hioki Sushi "
        rating="4.9"
        description="Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida.Experimente o Japão sem sair do lar com nosso delivery!"
        infos={["Destaque da Semana", "Japonesa"]}
      />
      <Restaurant
        image={sushi}
        title="Hioki Sushi "
        rating="4.9"
        description="Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida.Experimente o Japão sem sair do lar com nosso delivery!"
        infos={["Destaque da Semana", "Japonesa"]}
      />
      <Restaurant
        image={sushi}
        title="Hioki Sushi "
        rating="4.9"
        description="Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida.Experimente o Japão sem sair do lar com nosso delivery!"
        infos={["Destaque da Semana", "Japonesa"]}
      />
      <Restaurant
        image={sushi}
        title="Hioki Sushi "
        rating="4.9"
        description="Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida.Experimente o Japão sem sair do lar com nosso delivery!"
        infos={["Destaque da Semana", "Japonesa"]}
      />
      <Restaurant
        image={sushi}
        title="Hioki Sushi "
        rating="4.9"
        description="Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida.Experimente o Japão sem sair do lar com nosso delivery!"
        infos={["Destaque da Semana", "Japonesa"]}
      />
    </List>
  </Container>
);

export default RestaurantsList;
