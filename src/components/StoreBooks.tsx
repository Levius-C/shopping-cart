import { Button, Card } from "react-bootstrap";
import { useCart } from "../context/CartContext";

type StoreBookType = {
  imgUrl: string;
  title: string;
  author: string;
  price: string;
  id: number;
};

export function StoreBooks({
  imgUrl,
  title,
  author,
  price,
  id,
}: StoreBookType) {
  const {
    getItemQuantity,
    increaseCartQuantity,
    decreaseCartQuantity,
    removeFromCart,
  } = useCart();
  const quantity = getItemQuantity(id);
  return (
    <Card className="h-100">
      <Card.Img
        variant="top"
        src={imgUrl}
        height="200px"
        style={{ objectFit: "cover" }}
      />
      <Card.Body className="d-flex flex-column">
        <Card.Title className="d-flex flex-column justify-content-space-between aligne-items-baseline mb-3">
          <span className="fs-2 text-truncate">{title}</span>

          <span className="mt-2">{author}</span>
          <span className=" text-muted">
            price: £{Number(price.slice(1, -1))}
          </span>
        </Card.Title>
        <div className="mt-auto">
          {quantity === 0 ? (
            <Button
              variant="secondary"
              className="w-100"
              onClick={() => increaseCartQuantity(id)}
            >
              + Add to cart
            </Button>
          ) : (
            <div
              className="d-flex align-items-center justify-content-between flex-row"
              style={{ gap: ".5rem" }}
            >
              <div
                className="d-flex align-items-center justify-content-center"
                style={{ gap: ".5rem" }}
              >
                <Button
                  variant="secondary"
                  onClick={() => decreaseCartQuantity(id)}
                >
                  -
                </Button>
                <div>
                  <span className="fs-3">{quantity}</span> in cart
                </div>
                <Button
                  variant="secondary"
                  onClick={() => increaseCartQuantity(id)}
                >
                  +
                </Button>
              </div>
              <Button
                variant="danger"
                size="sm"
                onClick={() => removeFromCart(id)}
              >
                remove
              </Button>
            </div>
          )}
        </div>
      </Card.Body>
    </Card>
  );
}
