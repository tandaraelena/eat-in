import { collection, getDocs } from 'firebase/firestore/lite';
import { db } from '../utils/init-firebase';
import { useEffect, useState } from 'react';
import { Card } from '../components/homepage/card';

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
      <h1>Home page</h1>
      <div style={{ color: 'green' }}>
        <Card />
      </div>
      {/* <CategoriesList items={allCategories} /> */}
    </div>
  );
};

export default HomePage;
