import { ImageList, ImageListItem, ImageListItemBar } from "@mui/material";
import React from "react";
import { Col, Row } from "react-bootstrap";
import storeItems from "../data/items.json";
import StoreItem from "../component/StoreItem";
const Store = () => {
  return (
    <>
      <Row md={2} lg={3} className="g-3">
        {storeItems.map((item) => (
          <Col key={item.id}>
            <StoreItem {...item} />
          </Col>
        ))}
      </Row>
    </>
  );
};

export default Store;
