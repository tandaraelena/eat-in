import { useRouter } from 'next/router';
import { NavBar } from '../../components/global/navigation';

const Beverages = () => {
  const router = useRouter();
  const activeLink = router?.pathname.split('/')[2];
  console.log('activeLink', activeLink);
  return (
    <div>
      <NavBar />
      Beverages
    </div>
  );
};

export default Beverages;
