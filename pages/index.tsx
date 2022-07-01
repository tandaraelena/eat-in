import { collection, getDocs } from 'firebase/firestore/lite';
import { db } from '../utils/init-firebase';
import { useEffect, useState } from 'react';
import { Card } from '../components/homepage/card';
import { NavBar } from '../components/global/navigation';
import { Banner } from '../components/global/banner';
import { categories } from '../components/homepage/utils';
import { StyledCards } from '../components/homepage/styles';
import { Footer } from '../components/global/footer';

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

  return (
    <div>
      <NavBar />
      <Banner />
      <StyledCards>
        {categories.map(({ title, src }) => (
          <Card title={title} src={src} key={title} />
        ))}
      </StyledCards>
      <Footer />
    </div>
  );
};

export default HomePage;
