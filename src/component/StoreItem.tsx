import { Button } from "@mui/material";
import React from "react";
import { Card } from "react-bootstrap";
import { useShoppingCart } from "../context/ShoppingCartContext";
import { formatCurrency } from "../utilities/formatCurrency";

type StoreItemProps = {
  id: number;
  name: string;
  price: number;
  imgUrl: string;
};
const StoreItem = ({ id, name, price, imgUrl }: StoreItemProps) => {
  const {
    getItemQuantity,
    intcreaseCartQuantity,
    decreaseCartQuantity,
    RemoveFromCart,
  } = useShoppingCart();
  const quantity = getItemQuantity(id);
  return (
    <Card
      className="h-100"
      style={{ margin: "0px 15px ", backgroundColor: "black" }}
    >
      <Card.Img
        variant="top"
        src={imgUrl}
        height="100%"
        style={{ objectFit: "cover" }}
      />
      <Card.Body className="d-flex flex-column">
        <Card.Title className="d-flex justify-content-between align-items-baseline mb-4">
          <span className="fs-5" style={{ color: "white" }}>
            {name}
          </span>
          <span className="ms-2 text-muted" style={{ color: "white" }}> {formatCurrency(price)}</span>
        </Card.Title>
        <div className="mt-auto">
          {quantity === 0 ? (
            <Button
              className="w-100"
              variant="contained"
              style={{ color: "white" }}
              onClick={() => intcreaseCartQuantity(id)}
            >
              Add to cart
            </Button>
          ) : (
            <div
              className="d-flex align-items-center flex-column"
              style={{ gap: ".5rem ", color: "white"}}
            >
              <div
                className="d-flex align-items-center justify-content-center"
                style={{ gap: ".5rem" }}
              >
                <Button onClick={() => decreaseCartQuantity(id)}>-</Button>
                <div>
                  <span className="fs-3">{quantity}</span> in cart
                </div>
                <Button onClick={() => intcreaseCartQuantity(id)}>+</Button>
              </div>
              <Button
                style={{ color: "red" }}
                onClick={() => RemoveFromCart(id)}
              >
                Remove
              </Button>
            </div>
          )}
        </div>
      </Card.Body>
    </Card>
  );
};

export default StoreItem;
