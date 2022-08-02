import Image from "next/image";
import { useState } from "react";
import {
  ButtonsWrapper,
  DrawerButton,
  DrawerContainer,
  DrawerContent,
  DrawerContentContainer,
  DrawerWrapper,
  HeaderTabs,
  HR,
  ImageContainer,
  ImageWrapper,
  LargeBottom,
  RecipeDescription,
  RecipeTitle,
  ScrollContainer,
  SmallBottom,
  Tab,
} from "./styles";
import { Product, useBasketContext } from "../../context/basket";

export const Drawer = ({
  product,
  cancel,
  beverage,
}: {
  product: Product;
  cancel: () => void;
  beverage?: boolean;
}) => {
  const context = useBasketContext();
  const [tab, setTab] = useState<"nutrition" | "contain" | "dietary">(
    "dietary"
  );
  const productAdded = product
    ? context.cart.find((itm) => itm.id === product.id)
    : undefined;

  return (
    <DrawerWrapper
      style={{
        transition: "height 0.4s ease-in",
        ...(product && {
          height: "100%",
        }),
      }}
    >
      <DrawerContainer>
        <DrawerContent>
          <DrawerContentContainer>
            <ScrollContainer>
              <ImageWrapper>
                <ImageContainer>
                  <Image
                    src={product.image}
                    width={300}
                    height={300}
                    objectFit="cover"
                  />
                </ImageContainer>
              </ImageWrapper>
              <RecipeTitle>{product.title}</RecipeTitle>
              {beverage ? (
                <div></div>
              ) : (
                <>
                  <RecipeDescription>{product.description}</RecipeDescription>
                  <HeaderTabs>
                    {[
                      { text: "Dietary info", key: "dietary" },
                      { text: "May contain", key: "contain" },
                      { text: "Nutrition", key: "nutrition" },
                    ].map(
                      (
                        itm: {
                          text: string;
                          key: "nutrition" | "contain" | "dietary";
                        },
                        index
                      ) => (
                        <div
                          key={itm.key}
                          onClick={() => setTab(itm.key)}
                          style={{
                            cursor: "pointer",
                            padding: "10px",
                            ...(itm.key === tab && {
                              background: "black",
                              borderRadius: "5px",
                            }),
                            ...(index !== 2 && {
                              marginRight: "5px",
                              paddingRight: "10px",
                            }),
                          }}
                        >
                          {itm.text}
                        </div>
                      )
                    )}
                  </HeaderTabs>
                  <HR />
                  {tab === "dietary" && (
                    <Tab>
                      <SmallBottom>
                        Energy: {product.dietary.energy}
                      </SmallBottom>
                      <LargeBottom>
                        Allergens: {product.dietary.allergens}
                      </LargeBottom>
                    </Tab>
                  )}
                  {tab === "contain" && (
                    <Tab>
                      <LargeBottom>{product.contain}</LargeBottom>
                    </Tab>
                  )}
                  {tab === "nutrition" && (
                    <Tab>
                      <SmallBottom>
                        Energy: {product.nutrition.energy}
                      </SmallBottom>
                      <SmallBottom>Fat: {product.nutrition.fat}</SmallBottom>
                      <SmallBottom>
                        Protein: {product.nutrition.protein}
                      </SmallBottom>
                      <SmallBottom>Salt: {product.nutrition.salt}</SmallBottom>
                      <SmallBottom>
                        Carbohydrates: {product.nutrition.carbohydrates}
                      </SmallBottom>
                      <LargeBottom>
                        Fibre: {product.nutrition.fibre}
                      </LargeBottom>
                    </Tab>
                  )}
                </>
              )}
            </ScrollContainer>
            <ButtonsWrapper>
              <DrawerButton onClick={cancel}>Cancel</DrawerButton>
              <DrawerButton
                backgroundC="green"
                onClick={() => context.addProductToCart(product)}
              >
                Add to order {`${productAdded ? "(Added)" : ""}`}
              </DrawerButton>
            </ButtonsWrapper>
          </DrawerContentContainer>
        </DrawerContent>
      </DrawerContainer>
    </DrawerWrapper>
  );
};
