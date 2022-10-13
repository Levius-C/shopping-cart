import { useCart } from "../context/CartContext";
import { fetchBooks } from "../data/storageAPI";
import { useQuery } from "react-query";
import { book } from "../pages/Store";
import { Button, Stack } from "react-bootstrap";
import { useState } from "react";

type CardIItemProps = {
  id: number;
  quantity: number;
};
export function CartItem({ id, quantity }: CardIItemProps) {
  const { data } = useQuery<book[]>("bookData", fetchBooks);
  const { removeFromCart } = useCart();
  const bookInCart = data?.find((Book) => Book.id === id);
  if (bookInCart == null) return null;

  return (
    <>
      <Stack
        direction="horizontal"
        gap={2}
        className="d-flex align-items-center"
      >
        <img
          src={bookInCart.imgUrl}
          style={{ width: "20vh", objectFit: "cover" }}
        />
        <div className="me-auto">
          <div>
            {bookInCart.title}
            {quantity > 1 && (
              <span className="text-muted" style={{ fontSize: ".65rem" }}>
                x{quantity}
              </span>
            )}
          </div>
          <div className="text-muted" style={{ fontSize: ".75rem" }}>
            {bookInCart.price}
          </div>
        </div>
        <div>£{Number(bookInCart.price.slice(1, -1)) * quantity}</div>
        <Button
          variant="outline-danger"
          size="sm"
          onClick={() => removeFromCart(bookInCart.id)}
        >
          &times;
        </Button>
      </Stack>
    </>
  );
}
