import { useRouter } from 'next/router';
import { MenuNavBar } from '../../components/global/menu-navigation';
import { NavBar } from '../../components/global/navigation';

const Grills = () => {
  const router = useRouter();
  const activeLink = router?.pathname.split('/')[2];
  console.log('activeLink', activeLink);
  return (
    <div>
      <NavBar />
      <MenuNavBar />
      Grills
    </div>
  );
};

export default Grills;
