import { useRouter } from 'next/router';
import { FaRegArrowAltCircleLeft, FaPlusCircle, FaTrashAlt } from 'react-icons/fa';
import { useBasketContext } from '../context/basket';
import Image from 'next/image';
import {
  BasketHeader,
  BasketText,
  BasketContainer,
  ItemsWrapper,
  BasketItemWrapper,
  BasketItem,
  ItemInfo,
  ItemTitle,
  ItemActions,
  ItemHr,
  BasketFooter,
} from '../components/basket/styles';

const Basket = () => {
  const router = useRouter();
  const context = useBasketContext();
  const total = context.cart.reduce((prev,curr) => {
    return prev + (curr.quantity * curr.price)
  }, 0)

  return (
    <div>
      <BasketHeader>
        <FaRegArrowAltCircleLeft
          onClick={() => {
            router.push('/');
          }}
          size="30px"
          color="#9A9898"
        />
        <BasketText>Basket</BasketText>
      </BasketHeader>
      <BasketContainer>
        <ItemsWrapper>
          {context.cart.length === 0 ? 
          <div>The basket is empty. Please add products.</div>
          : context.cart.map((itm) => (
            <BasketItemWrapper key={itm.id}>
              <BasketItem>
                <ItemInfo>
                  <Image src={itm.image} width={100} height={100} />
                  <div>
                  <ItemTitle>{itm.title} ({itm.quantity})</ItemTitle>
                  <div style={{marginLeft: '20px'}}>{itm.description}</div>
                  </div>
                </ItemInfo>
                <div style={{marginLeft: '20px'}}>{itm.price}</div>
              </BasketItem>
              <ItemActions>
                <FaPlusCircle size="20px" color="green" onClick={() => context.addProductToCart(itm)}/>
                <FaTrashAlt size="20px" color="red" style={{ marginRight: '20px' }} onClick={() => context.removeProductFromCart(itm.id)}/>
              </ItemActions>
              <ItemHr />
            </BasketItemWrapper>
          ))}
          {context.cart.length !== 0 && (
          <BasketFooter>
            <span>Total:</span>
            <span>£{total}</span>
          </BasketFooter>
          )}
        </ItemsWrapper>
      </BasketContainer>
    </div>
  );
};

export default Basket;
