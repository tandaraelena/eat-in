import { useRouter } from 'next/router';
import { FaRegArrowAltCircleLeft, FaPlusCircle, FaTrashAlt } from 'react-icons/fa';
import { useBasketContext } from '../context/basket';
import Image from 'next/image';

const Basket = () => {
  const router = useRouter();
  const context = useBasketContext();
  console.log(context);
  return (
    <div>
      <div style={{ padding: '20px 30px ', backgroundColor: 'white', display: 'flex', alignItems: 'center' }}>
        <FaRegArrowAltCircleLeft
          onClick={() => {
            router.push('/');
          }}
          size="30px"
          color="#9A9898"
        />
        <span style={{ marginLeft: '20px', fontSize: '24px' }}>Basket</span>
      </div>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <div
          style={{
            backgroundColor: 'white',
            margin: '40px 20px 20px',
            borderRadius: '2px',
            padding: '20px',
            width: '800px',
          }}
        >
          {context.products.map((itm) => (
            <div style={{ padding: '20px 0' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <div style={{ display: 'flex' }}>
                  <Image src={itm.image} width={100} height={100} />
                  <div style={{ marginLeft: '20px', fontSize: '20px' }}>{itm.title}</div>
                </div>
                <div>{itm.price}</div>
              </div>
              <div style={{ display: 'flex', flexDirection: 'row-reverse' }}>
                <FaPlusCircle size="20px" style={{ color: 'green' }} />
                <FaTrashAlt size="20px" style={{ marginRight: '20px', color: 'red' }} />
              </div>
              <hr style={{ borderTop: '1px solid #C4C6CA', marginTop: '20px' }} />
            </div>
          ))}
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <span>Total:</span>
            <span>total price</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Basket;
