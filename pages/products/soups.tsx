import { useState } from 'react';
import { ProductCard } from '../../components/global/card';
import { MenuNavBar } from '../../components/global/menu-navigation';
import { NavBar } from '../../components/global/navigation';
import { useBasketContext,Product } from '../../context/basket';
import { products } from '../../context/utils';

const Soups = () => {
  const context = useBasketContext();
  const [product, setProduct] = useState<Product>();
  const productAdded = product ? context.cart.find((itm) => itm.id === product.id) : undefined;
  const cards = products.filter((itm) => itm.id.startsWith('soups'))

  return (
    <div>
      <NavBar />
      <MenuNavBar />
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', marginTop: '30px' }}>
        {cards.map((itm) => (
          <div onClick={() => setProduct(itm)} key={itm.title}>
            <ProductCard title={itm.title} image={itm.image} price={itm.price} kcal={itm.kcal} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Soups;
