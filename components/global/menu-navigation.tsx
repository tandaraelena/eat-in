import { useRouter } from 'next/router';
import { MenuWrapper } from './styles';

const menuList = ['Starters', 'Soups', 'Grills', 'Deserts', 'Beverages'];

export const MenuNavBar = () => {
  const router = useRouter();
  const activeLink = router?.pathname.split('/')[2];

  return (
    <MenuWrapper>
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
    </MenuWrapper>
  );
};
