import Button from '../Button'
import { CartContainer, CartItem, Overlay, Price, SideBar } from './styles'

import pizza from '../../assets/images/pizza.png'
import { useDispatch, useSelector } from 'react-redux'
import type { RootReducer } from '../../store'

import { close, remove } from '../../store/reducers/cart'

const Cart = () => {
  const { isOpen, items } = useSelector((state: RootReducer) => state.cart)

  const dispatch = useDispatch()

  const closeCart = () => {
    dispatch(close())
  }

  const total = items.reduce((total, item) => total + item.preco, 0) // Para somar o valor dos items do carrinho

  const removeItem = (id: number) => {
    dispatch(remove(id))
  }
  return (
    <CartContainer className={isOpen ? 'isOpen' : ''}>
      <Overlay onClick={closeCart} />
      <SideBar>
        <ul>
          {items.map((item) => (
            <CartItem key={item.id}>
              <img src={item.foto} alt={item.nome} />
              <div>
                <h3>{item.nome}</h3>
                <p>R$ {item.preco}</p>
              </div>
              <button
                onClick={() => removeItem(item.id)}
                type="button"
              ></button>
            </CartItem>
          ))}
          <Price>
            <p>Valor total</p>
            <p>R$ {total.toFixed(2)}</p>
          </Price>
          <Button type={'button'} title="Continuar com a entrega">
            Continuar com a entrega
          </Button>
        </ul>
      </SideBar>
    </CartContainer>
  )
}

export default Cart
