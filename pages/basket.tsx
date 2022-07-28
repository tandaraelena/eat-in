import { useRouter } from "next/router";
import {
  FaRegArrowAltCircleLeft,
  FaPlusCircle,
  FaTrashAlt,
} from "react-icons/fa";
import { useBasketContext } from "../context/basket";
import Image from "next/image";
import {
  BasketHeader,
  BasketText,
  BasketContainer,
  ItemsWrapper,
  BasketItemWrapper,
  BasketItem,
  ItemInfo,
  ItemTitle,
  ItemActions,
  ItemHr,
  BasketFooter,
} from "../components/basket/styles";
import { Button } from "../components/global/styles";
import { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, db } from "../utils/firebase";
import { addDoc, collection } from "firebase/firestore";
import Link from "next/link";

const Basket = () => {
  const router = useRouter();
  const context = useBasketContext();
  const total = context.cart.reduce((prev, curr) => {
    return prev + curr.quantity * curr.price;
  }, 0);
  const [user, loading] = useAuthState(auth);
  const [error, setError] = useState(undefined);
  const [success, setSuccess] = useState(undefined);

  useEffect(() => {
    if (loading) return;
    if (!user) router.push("/login");
  }, [user, loading]);

  const placeOrder = async () => {
    try {
      setError(undefined);
      const res = await addDoc(collection(db, "orders"), {
        user: user.email,
        order: {
          ...context.cart,
        },
        timestamp: Date.now(),
      });
      if (res) setSuccess(true);
    } catch {
      setError(
        "We couldn't satisfy your request this time. Please try again later"
      );
    }
  };

  return (
    <div>
      <BasketHeader>
        <FaRegArrowAltCircleLeft
          onClick={() => {
            router.push("/");
          }}
          size="30px"
          color="#9A9898"
        />
        <BasketText>Basket</BasketText>
      </BasketHeader>
      <BasketContainer>
        <ItemsWrapper>
          {context.cart.length === 0 ? (
            <div>The basket is empty. Please add products.</div>
          ) : (
            context.cart.map((itm) => (
              <BasketItemWrapper key={itm.id}>
                <BasketItem>
                  <ItemInfo>
                    <Image src={itm.image} width={100} height={100} />
                    <div>
                      <ItemTitle>
                        {itm.title} ({itm.quantity})
                      </ItemTitle>
                      <div style={{ marginLeft: "20px" }}>
                        {itm.description}
                      </div>
                    </div>
                  </ItemInfo>
                  <div style={{ marginLeft: "20px" }}>£{itm.price}</div>
                </BasketItem>
                <ItemActions>
                  <FaPlusCircle
                    size="20px"
                    color="green"
                    onClick={() => context.addProductToCart(itm)}
                  />
                  <FaTrashAlt
                    size="20px"
                    color="red"
                    style={{ marginRight: "20px" }}
                    onClick={() => context.removeProductFromCart(itm.id)}
                  />
                </ItemActions>
                <ItemHr />
              </BasketItemWrapper>
            ))
          )}
          {context.cart.length !== 0 && (
            <div>
              <BasketFooter>
                <span>Total:</span>
                <span>£{total}</span>
              </BasketFooter>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  marginTop: "10px",
                }}
              >
                <Button link onClick={() => context.removeProductsFromCart()}>
                  Cancel order
                </Button>
                <Button primary onClick={placeOrder} disabled={success}>
                  Place order
                </Button>
              </div>
              {error && (
                <div
                  style={{ color: "red", fontSize: "16px", marginTop: "5px" }}
                >
                  {error}
                </div>
              )}
              {success && (
                <div
                  style={{ color: "green", fontSize: "16px", marginTop: "5px" }}
                >
                  Your order has been placed successfully. You can view it in{" "}
                  <Link href="/orders">my orders</Link> page.
                </div>
              )}
            </div>
          )}
        </ItemsWrapper>
      </BasketContainer>
    </div>
  );
};

export default Basket;
