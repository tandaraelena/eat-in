import { collection, getDocs } from 'firebase/firestore/lite';
import { db } from '../utils/init-firebase';
import { useEffect, useState } from 'react';
import { Card } from '../components/homepage/card';
import { NavBar } from '../components/global/navigation';
import { Banner } from '../components/global/banner';

const HomePage = () => {
  const [data, setData] = useState<any>();
  useEffect(() => {
    (async function getCategories() {
      const categ = collection(db, 'check');
      const dbSnapshot = await getDocs(categ);
      const dbList = dbSnapshot.docs.map((doc) => doc.data());
      setData(dbList);
    })();
  }, []);
  console.log('data', data);
  return (
    <div>
      <NavBar />
      <Banner />
      <div style={{ padding: '0 50px' }}>
        <Card />
      </div>
    </div>
  );
};

export default HomePage;
