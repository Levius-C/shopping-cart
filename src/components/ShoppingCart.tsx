import { Offcanvas, Stack } from "react-bootstrap";
import { useQuery } from "react-query";
import { useCart } from "../context/CartContext";
import { fetchBooks } from "../data/storageAPI";
import { book } from "../pages/Store";
import { CartItem } from "./CardItem";

type SharpinfCartProps = {
  isOpen: boolean;
};

export function ShoppingCart({ isOpen }: SharpinfCartProps) {
  const { closeCart, cartItems } = useCart();

  return (
    <Offcanvas show={isOpen} onHide={closeCart} placement="end">
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>Cart</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        <Stack gap={3}>
          {cartItems.map((item) => (
            <CartItem key={item.id} {...item} />
          ))}
          <div className="ms-auto fw-bold fs-5"></div>
        </Stack>
      </Offcanvas.Body>
    </Offcanvas>
  );
}
