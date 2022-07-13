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
          {context.products.map((itm) => (
            <BasketItemWrapper>
              <BasketItem>
                <ItemInfo>
                  <Image src={itm.image} width={100} height={100} />
                  <ItemTitle>{itm.title}</ItemTitle>
                </ItemInfo>
                <div>{itm.price}</div>
              </BasketItem>
              <ItemActions>
                <FaPlusCircle size="20px" color="green" />
                <FaTrashAlt size="20px" color="red" style={{ marginRight: '20px' }} />
              </ItemActions>
              <ItemHr />
            </BasketItemWrapper>
          ))}
          <BasketFooter>
            <span>Total:</span>
            <span>total price</span>
          </BasketFooter>
        </ItemsWrapper>
      </BasketContainer>
    </div>
  );
};

export default Basket;