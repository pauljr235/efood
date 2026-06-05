import {
  List,
  Modal,
  ModalContent,
  ModalDescription,
  ModalImg,
} from "./styles";

import Dish from "../Dish";
import Button from "../Button";

import pizza from "../../assets/images/pizza.png";
import botaoFechar from "../../assets/images/fechar.png";
import { useState } from "react";

export type Menu = {
  id: number;
  image: string;
  title: string;
  description: string;
};

export type Props = {
  cardapio: Menu[];
};

const DishesList = ({ cardapio }: Props) => {
  const [itemIsOpen, setItemIsOpen] = useState(false);

  return (
    <div className="container">
      <List>
        {cardapio.map((item) => (
          <Dish
            key={item.id}
            image={item.image}
            title={item.title}
            description={item.description}
            onClick={() => setItemIsOpen(true)}
          />
        ))}
      </List>

      <Modal className={itemIsOpen ? "visible" : ""}>
        <header>
          <img onClick={() => setItemIsOpen(false)} src={botaoFechar} alt="Botão fechar" />
        </header>
        <ModalContent>
          <div>
            <ModalImg src={pizza} />
          </div>
          <div>
            <h4>{"pizza margauerita"}</h4>
            <ModalDescription>
              <p>
                A pizza Margherita é uma pizza clássica da culinária italiana,
                reconhecida por sua simplicidade e sabor inigualável. Ela é
                feita com uma base de massa fina e crocante, coberta com molho
                de tomate fresco, queijo mussarela de alta qualidade, manjericão
                fresco e azeite de oliva extra-virgem. A combinação de sabores é
                perfeita, com o molho de tomate suculento e ligeiramente ácido,
                o queijo derretido e cremoso e as folhas de manjericão frescas,
                que adicionam um toque de sabor herbáceo. É uma pizza simples,
                mas deliciosa, que agrada a todos os paladares e é uma ótima
                opção para qualquer ocasião.
              </p>
            </ModalDescription>{" "}
            <br />
            <br />
            <p>Serve: de 2 a 3 pessoas</p>
            <Button type="button" title="Clique aqui">
              Adicionar ao Carrinho
            </Button>
          </div>
        </ModalContent>
      </Modal>
    </div>
  );
};

export default DishesList;
