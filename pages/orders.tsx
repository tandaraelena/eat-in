import { useRouter } from "next/router";
import { FaRegArrowAltCircleLeft } from "react-icons/fa";
import { BasketHeader, BasketText } from "../components/basket/styles";

const Orders = () => {
  const router = useRouter();

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
    </div>
  );
};

export default Orders;
