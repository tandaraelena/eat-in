import { collection, getDocs } from "firebase/firestore";
import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { FaRegArrowAltCircleLeft } from "react-icons/fa";
import { BasketHeader, BasketText } from "../components/basket/styles";
import { Product } from "../context/basket";
import { auth, db } from "../utils/firebase";

const Orders = () => {
  const router = useRouter();
  const [data, setData] = useState<any>();
  const [user, loading] = useAuthState(auth);

  useEffect(() => {
    if (loading) return;
    if (user) {
      (async function getCategories() {
        const categ = collection(db, "orders");
        const dbSnapshot = await getDocs(categ);
        const dbList = dbSnapshot.docs
          .map((doc) => doc.data())
          .filter((order) => order.user === user.email);
        setData(dbList);
      })();
    }
    if (!user) router.push("/login");
  }, [user]);

  const transformDate = (timestamp) => {
    const date = new Date(timestamp);
    const datevalues = [
      date.getFullYear(),
      date.getMonth() + 1,
      date.getDate(),
      date.getHours(),
      date.getMinutes(),
    ];
    return `${datevalues[2]}/${datevalues[1]}/${datevalues[0]} at ${datevalues[3]} and ${datevalues[4]} minutes`;
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
        <BasketText>My orders</BasketText>
      </BasketHeader>
      <div
        style={{
          padding: "30px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        {data && data.length === 0 && (
          <div
            style={{
              backgroundColor: "white",
              borderRadius: "2px",
              padding: "20px",
              width: "800px",
            }}
          >
            You don't have any orders yet.
          </div>
        )}
        {Array.isArray(data) &&
          data.map((order) => (
            <div
              style={{ marginTop: "20px", maxWidth: "700px" }}
              key={`${order.timestamp}-${order.email}`}
            >
              <div
                style={{
                  background: "green",
                  color: "white",
                  padding: "10px 20px",
                  borderTopLeftRadius: "4px",
                  borderTopRightRadius: "4px",
                }}
              >
                Ordered on {transformDate(order.timestamp)}
              </div>
              <div
                style={{
                  background: "white",
                  padding: "20px",
                  borderBottomLeftRadius: "4px",
                  borderBottomRightRadius: "4px",
                }}
              >
                {order?.cart &&
                  order.cart.map((itm: Product) => (
                    <div
                      key={itm.image}
                      style={{ display: "flex", marginTop: "20px" }}
                    >
                      <Image src={itm.image} width={70} height={70} />
                      <div style={{ marginLeft: "20px" }}>
                        <div style={{ marginBottom: "10px", fontSize: "18px" }}>
                          {itm.title} ({itm.quantity})
                        </div>
                        <div>{itm.description}</div>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Orders;
