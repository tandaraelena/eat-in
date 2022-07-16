import { ProductCard } from '../../components/global/card';
import { Footer } from '../../components/global/footer';
import { MenuNavBar } from '../../components/global/menu-navigation';
import { NavBar } from '../../components/global/navigation';
import { FaTimes } from 'react-icons/fa';
import { useState } from 'react';

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
    description: 'Fresh eggs smashed and seasoned with salad, avocado slices, persley and mushrooms',
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
  const [show, setShow] = useState(false);
  return (
    <div>
      <NavBar />
      <MenuNavBar />
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', marginTop: '30px' }}>
        {cards.map(({ title, image, price, kcal }) => (
          <ProductCard title={title} image={image} price={price} kcal={kcal} />
        ))}
      </div>
      <button onClick={() => setShow(true)} />
      <div
        style={{
          backgroundColor: 'white',
          position: 'fixed',
          bottom: '0',
          left: '0',
          width: '100%',
          height: '0px',
          zIndex: '1000',
          transition: 'height 0.4s ease-in',
          ...(show && {
            height: '100%',
          }),
        }}
      >
        <div
          style={{ display: 'flex', flexDirection: 'row-reverse', padding: '20px 30px' }}
          onClick={() => setShow(false)}
        >
          <FaTimes style={{ width: '15px' }} />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Starters;
