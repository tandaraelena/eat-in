import { ProductCard } from '../../components/global/card';
import { Footer } from '../../components/global/footer';
import { MenuNavBar } from '../../components/global/menu-navigation';
import { NavBar } from '../../components/global/navigation';
import { FaTimes } from 'react-icons/fa';
import { useState } from 'react';
import Image from 'next/image';

const cards = [
  {
    image: '/assets/bruschetta.jpg',
    title: 'Bruschetta',
    price: 6,
    kcal: '110 kcal',
    description:
      'Mixture of chopped tomatoes, balsamic, basil, and garlic, spooned over olive-oil brushed slices of rustic bread.',
    dietary: {
      energy: '666 kcal / 2787 kJ',
      allergens: 'Soya, Gluten',
    },
    contain: 'Possible kitchen cross-contamination: Gluten (Rye)',
    nutrition: {
      energy: '666 kcal',
      fat: '40.4g',
      protein: '8.7g',
      salt: '1.37g',
      carbohydrates: '68.1g',
      fibre: '3.3g',
    },
  },
  {
    image: '/assets/capresse.jpg',
    title: 'Caprese salad',
    price: 9,
    kcal: '88 kcal',
    description:
      '“Insalata Caprese” - “the salad of Capri”, popular on Italian islands. Slices of fresh mozzarella cheese, tomatoes, and basil, then seasoned to perfection, drizzled with extra virgin olive oil.',
    dietary: {
      energy: '362 kcal / 1515 kJ',
      allergens: 'Milk',
    },
    contain: 'Possible kitchen cross-contamination: Milk',
    nutrition: {
      energy: '362 kcal',
      fat: '15.4g',
      protein: '9.7g',
      salt: '1.35g',
      carbohydrates: '47.1g',
      fibre: '5.3g',
    },
  },
  {
    image: '/assets/eggs.jpg',
    title: 'Filled Eggs',
    price: 11,
    kcal: '123 kcal',
    description: 'Single layer of eggs covered with a mix of tuna, Dijon mustard, green onions and a pinch of lemon.',
    dietary: {
      energy: '666 kcal / 2787 kJ',
      allergens: 'Soya, Gluten',
    },
    contain: 'Possible kitchen cross-contamination: Gluten (Rye)',
    nutrition: {
      energy: '666 kcal',
      fat: '40.4g',
      protein: '8.7g',
      salt: '1.37g',
      carbohydrates: '68.1g',
      fibre: '3.3g',
    },
  },
  {
    image: '/assets/omleta.jpg',
    title: 'Omelette',
    price: 12,
    kcal: '133 kcal',
    description: 'Fresh eggs smashed and seasoned with salad, avocado slices, parsley and mushrooms',
    dietary: {
      energy: '362 kcal / 1515 kJ',
      allergens: 'Ovalbumin, ovomucoid, ovotransferrin, lysozyme',
    },
    contain: 'Possible kitchen cross-contamination in egg white: ovalbumin, ovomucoid, ovotransferrin, lysozyme',
    nutrition: {
      energy: '362 kcal',
      fat: '15.4g',
      protein: '9.7g',
      salt: '1.35g',
      carbohydrates: '47.1g',
      fibre: '5.3g',
    },
  },
  {
    image: '/assets/spinach.jpg',
    title: 'Spinach Rolls',
    price: 11,
    kcal: '133 kcal',
    description: 'Colorful and delicious appetizer with a layer of smashed spinach mix, flour, yogurt and butter',
    dietary: {
      energy: '666 kcal / 2787 kJ',
      allergens: 'Histamines, Gluten, Milk',
    },
    contain: 'Possible kitchen cross-contamination: Histamines, Gluten, Milk',
    nutrition: {
      energy: '666 kcal',
      fat: '40.4g',
      protein: '8.7g',
      salt: '1.37g',
      carbohydrates: '68.1g',
      fibre: '3.3g',
    },
  },
];

const Starters = () => {
  const [product, setProduct] = useState<{
    image: string;
    title: string;
    price: number;
    kcal: string;
    description: string;
    dietary: {
      energy: string;
      allergens: string;
    };
    contain: string;
    nutrition:
      | {
          energy: string;
          fat: string;
          protein: string;
          salt: string;
          carbohydrates: string;
          fibre: string;
        }
      | undefined;
  }>();
  const [tab, setTab] = useState<'nutrition' | 'contain' | 'dietary'>('dietary');
  console.log('tab', tab);
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
            <div style={{ width: '50%', background: '#30395F', padding: '20px 30px', color: 'white' }}>
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'row-reverse',
                }}
              >
                <FaTimes style={{ width: '15px' }} onClick={() => setProduct(undefined)} />
              </div>
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  marginTop: '30px',
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'center' }}>
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
                        ...(index !== 2 && { marginRight: '10px' }),
                        ...(index !== 2 && { paddingRight: '10px' }),
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
                    <div>Allergens: {product.dietary.allergens}</div>
                  </div>
                )}
                {tab === 'contain' && (
                  <div style={{ marginTop: '10px', fontSize: '18px' }}>
                    <div>{product.contain}</div>
                  </div>
                )}
                {tab === 'nutrition' && (
                  <div style={{ marginTop: '10px', fontSize: '18px' }}>
                    <div style={{ marginBottom: '8px' }}>Energy: {product.nutrition.energy}</div>
                    <div style={{ marginBottom: '8px' }}>Fat: {product.nutrition.fat}</div>
                    <div style={{ marginBottom: '8px' }}>Protein: {product.nutrition.protein}</div>
                    <div style={{ marginBottom: '8px' }}>Salt: {product.nutrition.salt}</div>
                    <div style={{ marginBottom: '8px' }}>Carbohydrates: {product.nutrition.carbohydrates}</div>
                    <div>Fibre: {product.nutrition.fibre}</div>
                  </div>
                )}
              </div>
              <button
                style={{
                  marginTop: '30px',
                  width: '100%',
                  padding: '10px',
                  fontSize: '20px',
                  borderRadius: '5px',
                  border: 'none',
                }}
              >
                Add to order
              </button>
            </div>
          </div>
        </div>
      )}
      <Footer />
    </div>
  );
};

export default Starters;
