import React, { useContext, useReducer, useState } from 'react';
import { shopReducer, ADD_PRODUCT, REMOVE_PRODUCT } from './reducer';

const products = [
  { id: 'p1', title: 'Gaming Mouse', price: 29.99, image: '/assets/desert.jpg' },
  { id: 'p2', title: 'Harry Potter 3', price: 9.99, image: '/assets/drinks.jpg' },
  { id: 'p3', title: 'Used plastic bottle', price: 0.99, image: '/assets/grill.jpg' },
  { id: 'p4', title: 'Half-dried plant', price: 2.99, image: '/assets/soup.jpg' },
];

export interface BasketContextProps {
  products: Array<{ id: string; title: string; price: number; image: string }>;
  cart: Array<{ id: string; title: string; price: number; image: string }>;
  addProductToCart: (product: { id: string; title: string; price: number; image: string }) => void;
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
