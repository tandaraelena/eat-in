import { ProductCard } from '../../components/global/card';
import { Footer } from '../../components/global/footer';
import { MenuNavBar } from '../../components/global/menu-navigation';
import { NavBar } from '../../components/global/navigation';
import { useState } from 'react';
import Image from 'next/image';
import { DrawerContent, ScrollContainer } from '../../components/global/styles';
import { useBasketContext, Product } from '../../context/basket';
import { products } from '../../context/utils';

const Starters = () => {
  const context = useBasketContext();
  const [product, setProduct] = useState<Product>();
  const productAdded = product ? context.cart.find((itm) => itm.id === product.id) : undefined;
  const cards = products.filter((itm) => itm.id.startsWith('starters'))
  const [tab, setTab] = useState<'nutrition' | 'contain' | 'dietary'>('dietary');

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
      {product && (
        <div
          style={{
            background: 'rgba(114, 116, 121, .5)',
            position: 'fixed',
            bottom: '0',
            left: '0',
            width: '100%',
            height: '0px',
            zIndex: '1000',
            transition: 'height 0.4s ease-in',
            ...(product && {
              height: '100%',
            }),
          }}
        >
          <div style={{ display: 'flex', flexDirection: 'row-reverse', height: '100%' }}>
            <DrawerContent>
              <div style={{ position: 'relative', height: '100%' }}>
                <ScrollContainer>
                  <div
                    style={{
                      display: 'flex',
                      justifyContent: 'center',
                      marginTop: '30px',
                    }}
                  >
                    <div style={{ maxWidth: '300px' }}>
                      <Image src={product.image} width={300} height={300} objectFit="cover" />
                    </div>
                  </div>
                  <div
                    style={{
                      fontSize: '24px',
                      marginTop: '20px',
                      fontWeight: 'bold',
                    }}
                  >
                    {product.title}
                  </div>
                  <div
                    style={{
                      fontSize: '20px',
                      marginTop: '10px',
                    }}
                  >
                    {product.description}
                  </div>
                  <div
                    style={{
                      fontSize: '20px',
                      marginTop: '30px',
                      display: 'flex',
                    }}
                  >
                    {[
                      { text: 'Dietary info', key: 'dietary' },
                      { text: 'May contain', key: 'contain' },
                      { text: 'Nutrition', key: 'nutrition' },
                    ].map((itm: { text: string; key: 'nutrition' | 'contain' | 'dietary' }, index) => (
                      <div
                        key={itm.key}
                        onClick={() => setTab(itm.key)}
                        style={{
                          cursor: 'pointer',
                          padding: '10px',
                          ...(itm.key === tab && {
                            background: 'black',
                            borderRadius: '5px',
                          }),
                          ...(index !== 2 && { marginRight: '5px', paddingRight: '10px' }),
                        }}
                      >
                        {itm.text}
                      </div>
                    ))}
                  </div>
                  <hr style={{ width: '100%', opacity: '0.6' }} />
                  {tab === 'dietary' && (
                    <div style={{ marginTop: '10px', fontSize: '18px' }}>
                      <div style={{ marginBottom: '8px' }}>Energy: {product.dietary.energy}</div>
                      <div style={{ marginBottom: '65px' }}>Allergens: {product.dietary.allergens}</div>
                    </div>
                  )}
                  {tab === 'contain' && (
                    <div style={{ marginTop: '10px', fontSize: '18px' }}>
                      <div style={{ marginBottom: '65px' }}>{product.contain}</div>
                    </div>
                  )}
                  {tab === 'nutrition' && (
                    <div style={{ marginTop: '10px', fontSize: '18px' }}>
                      <div style={{ marginBottom: '8px' }}>Energy: {product.nutrition.energy}</div>
                      <div style={{ marginBottom: '8px' }}>Fat: {product.nutrition.fat}</div>
                      <div style={{ marginBottom: '8px' }}>Protein: {product.nutrition.protein}</div>
                      <div style={{ marginBottom: '8px' }}>Salt: {product.nutrition.salt}</div>
                      <div style={{ marginBottom: '8px' }}>Carbohydrates: {product.nutrition.carbohydrates}</div>
                      <div style={{ marginBottom: '65px' }}>Fibre: {product.nutrition.fibre}</div>
                    </div>
                  )}
                </ScrollContainer>
                <div
                  style={{
                    width: '100%',
                    position: 'absolute',
                    bottom: '0px',
                    display: 'flex',
                    justifyContent: 'space-between',
                    background: '#30395F',
                  }}
                >
                  <button
                    style={{
                      fontSize: '18px',
                      padding: '10px',
                      borderRadius: '5px',
                      border: 'none',
                      background: 'red',
                      color: 'white',
                    }}
                    onClick={() => setProduct(undefined)}
                  >
                    Cancel
                  </button>
                  <button
                    style={{
                      color: 'white',
                      background: 'green',
                      fontSize: '18px',
                      padding: '10px',
                      borderRadius: '5px',
                      border: 'none',
                    }}
                    onClick={() => context.addProductToCart(product)}
                  >
                    Add to order {`${productAdded ? '(Added)' : ''}`}
                  </button>
                </div>
              </div>
            </DrawerContent>
          </div>
        </div>
      )}
      <Footer />
    </div>
  );
};

export default Starters;
