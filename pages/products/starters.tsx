import { useRouter } from 'next/router';
import { FaRegArrowAltCircleLeft, FaPlusCircle, FaTrashAlt } from 'react-icons/fa';
import { Footer } from '../../components/global/footer';
import { NavBar } from '../../components/global/navigation';

const menuList = ['Starters', 'Soups', 'Grills', 'Deserts', 'Beverages'];

const Starters = () => {
  const router = useRouter();
  const activeLink = router?.pathname.split('/')[2];

  return (
    <div>
      <NavBar />
      <div
        style={{
          display: 'flex',
          backgroundColor: 'black',
          color: 'white',
          padding: '10px 20px',
          fontSize: '18px',
          justifyContent: 'center',
          flexWrap: 'wrap',
        }}
      >
        {menuList.map((itm, index) => (
          <div
            onClick={() => router.push(`/products/${itm.toLowerCase()}`)}
            key={itm}
            style={{
              marginRight: index !== menuList.length - 1 ? '20px' : '0',
              textDecoration: activeLink === itm.toLowerCase() ? 'underline' : 'initial',
              cursor: 'pointer',
            }}
          >
            {itm}
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default Starters;
