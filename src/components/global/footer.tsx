import { useRouter } from "next/router";
import { useEffect } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useBasketContext } from "../../context/basket";
import { auth } from "../../utils/firebase";
import { Button } from "./styles";

export const Footer = () => {
  const router = useRouter();
  const context = useBasketContext();
  const [user, loading] = useAuthState(auth);

  useEffect(() => {
    if (loading) return;
  }, [loading]);

  return (
    <div style={{ height: "77px" }}>
      <div
        style={{
          position: "fixed",
          bottom: "0",
          left: "0",
          backgroundColor: "white",
          width: "100%",
          display: "flex",
          justifyContent: "space-between",
          padding: "20px",
        }}
      >
        {user ? (
          <Button link onClick={() => router.push("/orders")}>
            My orders
          </Button>
        ) : (
          <Button link onClick={() => context.removeProductsFromCart()}>
            Cancel order
          </Button>
        )}
        <Button primary onClick={() => router.push("/basket")}>
          View order
        </Button>
      </div>
    </div>
  );
};
