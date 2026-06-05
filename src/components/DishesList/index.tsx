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
import { ButtonContainer } from "../Button/styles";

export type Menu = {
  id: number;
  foto: string;
  nome: string;
  descricao: string;
  porcao: string;
  preco: number;
};

export type Props = {
  cardapio: Menu[];
};

const DishesList = ({ cardapio }: Props) => {
  const [itemIsOpen, setItemIsOpen] = useState<Menu | null>(null);

  return (
    <div className="container">
      <List>
        {cardapio.map((item) => (
          <Dish
            key={item.id}
            image={item.foto}
            title={item.nome}
            description={item.descricao}
            onClick={() => setItemIsOpen(item)}
          />
        ))}
      </List>

      <Modal className={itemIsOpen ? "visible" : ""}>
        {itemIsOpen && (
          <div>
            <header>
              <img
                onClick={() => setItemIsOpen(null)}
                src={botaoFechar}
                alt="Botão fechar"
              />
            </header>
            <ModalContent>
              <div>
                <ModalImg src={itemIsOpen.foto} />
              </div>
              <div>
                <h4>{itemIsOpen.nome}</h4>
                <ModalDescription>
                  <p>{itemIsOpen.descricao}</p>
                </ModalDescription>{" "}
                <br />
                <br />
                <p>Serve: de {itemIsOpen.porcao}</p>
                <ButtonContainer title="Clique aqui">
                  Adicionar ao carrinho R$ {itemIsOpen.preco}
                </ButtonContainer>
              </div>
            </ModalContent>
          </div>
        )}
      </Modal>
    </div>
  );
};

export default DishesList;
