import { ProductCard } from "../../components/global/card";
import { Footer } from "../../components/global/footer";
import { MenuNavBar } from "../../components/global/menu-navigation";
import { NavBar } from "../../components/global/navigation";
import { useState } from "react";
import Image from "next/image";
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
  MenuContainer,
  RecipeDescription,
  RecipeTitle,
  ScrollContainer,
  SmallBottom,
  Tab,
} from "../../components/global/styles";
import { useBasketContext, Product } from "../../context/basket";
import { products } from "../../context/utils";

const Starters = () => {
  const context = useBasketContext();
  const [product, setProduct] = useState<Product>();
  const productAdded = product
    ? context.cart.find((itm) => itm.id === product.id)
    : undefined;
  const cards = products.filter((itm) => itm.id.startsWith("starters"));
  const [tab, setTab] = useState<"nutrition" | "contain" | "dietary">(
    "dietary"
  );

  return (
    <div>
      <NavBar />
      <MenuNavBar />
      <MenuContainer>
        {cards.map((itm) => (
          <div onClick={() => setProduct(itm)} key={itm.title}>
            <ProductCard
              title={itm.title}
              image={itm.image}
              price={itm.price}
              kcal={itm.kcal}
            />
          </div>
        ))}
      </MenuContainer>
      {product && (
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
                </ScrollContainer>
                <ButtonsWrapper>
                  <DrawerButton onClick={() => setProduct(undefined)}>
                    Cancel
                  </DrawerButton>
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
      )}
      <Footer />
    </div>
  );
};

export default Starters;
