import React, { useContext, useReducer } from "react";
import {
  shopReducer,
  ADD_PRODUCT,
  REMOVE_PRODUCT,
  REMOVE_PRODUCTS,
} from "./reducer";
import { products } from "./utils";

export interface Product {
  id: string;
  image: string;
  title: string;
  price: number;
  kcal: string;
  description?: string;
  dietary?: {
    energy: string;
    allergens: string;
  };
  contain?: string;
  nutrition?:
    | {
        energy: string;
        fat: string;
        protein: string;
        salt: string;
        carbohydrates: string;
        fibre: string;
      }
    | undefined;
  quantity?: number;
}

export interface BasketContextProps {
  products: Array<Product>;
  cart: Array<Product>;
  addProductToCart: (product: Product) => void;
  removeProductFromCart: (productId: string) => void;
  removeProductsFromCart: () => void;
}

const BasketContext = React.createContext<BasketContextProps>({
  products,
  cart: [],
  addProductToCart: () => {},
  removeProductFromCart: () => {},
  removeProductsFromCart: () => {},
});

interface BasketProviderProps {
  children?: React.ReactNode;
}

const BasketProvider: React.FunctionComponent = ({
  children,
}: BasketProviderProps) => {
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

  const removeProductsFromCart = () => {
    setTimeout(() => {
      dispatch({ type: REMOVE_PRODUCTS });
    }, 100);
  };

  return (
    <BasketContext.Provider
      value={{
        products,
        cart: cartState.cart,
        addProductToCart,
        removeProductFromCart,
        removeProductsFromCart,
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
