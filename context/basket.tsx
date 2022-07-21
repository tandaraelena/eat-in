import React, { useContext, useReducer, useState } from 'react';
import { shopReducer, ADD_PRODUCT, REMOVE_PRODUCT } from './reducer';

export interface Product {
  id: string;
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
  nutrition: {
      energy: string;
      fat: string;
      protein: string;
      salt: string;
      carbohydrates: string;
      fibre: string;
  } | undefined;
  quantity?: number;
}

export const products = [
  {
    id: 'starters-bruschetta',
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
    id: 'starters-caprese-salad',
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
    id: 'starters-filled-eggs',
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
    id: 'starters-omelette',
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
    id: 'starters-spinach-rolls',
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

export interface BasketContextProps {
  products: Array<Product>;
  cart: Array<Product>;
  addProductToCart: (product: Product) => void;
  removeProductFromCart: (productId: string) => void;
}

const BasketContext = React.createContext<BasketContextProps>({
  products: products,
  cart: [],
  addProductToCart: () => {},
  removeProductFromCart: () => {},
});

interface BasketProviderProps {
  children?: React.ReactNode;
}

const BasketProvider: React.FunctionComponent = ({ children }: BasketProviderProps) => {
  const [cartState, dispatch] = useReducer(shopReducer, { cart: [] });

  const addProductToCart = (product) => {
    setTimeout(() => {
      dispatch({ type: ADD_PRODUCT, product: product });
    }, 100);
  };

  const removeProductFromCart = (productId) => {
    setTimeout(() => {
      dispatch({ type: REMOVE_PRODUCT, productId: productId });
    }, 100);
  };

  return (
    <BasketContext.Provider
      value={{
        products: products,
        cart: cartState.cart,
        addProductToCart: addProductToCart,
        removeProductFromCart: removeProductFromCart,
      }}
    >
      {children}
    </BasketContext.Provider>
  );
};

const useBasketContext: () => BasketContextProps = () => {
  return useContext(BasketContext);
};

export { BasketProvider, useBasketContext };
