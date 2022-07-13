import { useRouter } from 'next/router';
import { NavBar } from '../../components/global/navigation';

const Deserts = () => {
  const router = useRouter();
  const activeLink = router?.pathname.split('/')[2];
  console.log('activeLink', activeLink);
  return (
    <div>
      <NavBar />
      Deserts
    </div>
  );
};

export default Deserts;
