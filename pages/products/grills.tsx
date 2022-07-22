import { useState } from "react";
import { ProductCard } from "../../components/global/card";
import { Drawer } from "../../components/global/drawer";
import { Footer } from "../../components/global/footer";
import { MenuNavBar } from "../../components/global/menu-navigation";
import { NavBar } from "../../components/global/navigation";
import { MenuContainer } from "../../components/global/styles";
import { Product } from "../../context/basket";
import { products } from "../../context/utils";

const Grills = () => {
  const [product, setProduct] = useState<Product>();
  const cards = products.filter((itm) => itm.id.startsWith("grill"));

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
        <Drawer product={product} cancel={() => setProduct(undefined)} />
      )}
      <Footer />
    </div>
  );
};

export default Grills;
