import { ProductCard } from '../../components/global/card';
import { Footer } from '../../components/global/footer';
import { MenuNavBar } from '../../components/global/menu-navigation';
import { NavBar } from '../../components/global/navigation';

const cards = [
  {
    image: '/assets/bruschetta.jpg',
    title: 'Bruschetta',
    price: 6,
    kcal: '110 kcal',
  },
  {
    image: '/assets/capresse.jpg',
    title: 'Capresse salad',
    price: 9,
    kcal: '88 kcal',
  },
  {
    image: '/assets/eggs.jpg',
    title: 'Filled Eggs',
    price: 11,
    kcal: '123 kcal',
  },
  {
    image: '/assets/omleta.jpg',
    title: 'Smashed eggs',
    price: 12,
    kcal: '133 kcal',
  },
  {
    image: '/assets/spinach.jpg',
    title: 'Spinach Rolls',
    price: 11,
    kcal: '133 kcal',
  },
];

const Starters = () => {
  return (
    <div>
      <NavBar />
      <MenuNavBar />
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', marginTop: '30px' }}>
        {cards.map(({ title, image, price, kcal }) => (
          <ProductCard title={title} image={image} price={price} kcal={kcal} />
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default Starters;

// 10 ouă de mărime medie (~50-55 gr/bucată, cântărite cu tot cu coajă)
// 1 conservă (mică) de pește - eu am folosit o conservă de ton în suc propriu, de 150 de grame
// 1 linguriță cu vârf (25 de grame) de muștar Dijon
// 2 fire de ceapă verde
// 40-50 ml. de suc de lămâie

// 450 g spanac or baby spanac
// 4 ouă (separate)
// 5 linguri făină
// 2 linguri smântână sau iaurt
// 30 g unt ((aprox. 1 lingură))
