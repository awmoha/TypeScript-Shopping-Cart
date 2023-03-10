import { ImageList, ImageListItem, ImageListItemBar } from "@mui/material";
import React from "react";
import { Col, Row } from "react-bootstrap";
import storeItems from "../data/items.json";
import StoreItem from "../component/StoreItem";
const Store = () => {
  return (
    <>
      <Row xs={2} sm={3} md={4} lg={4} xl={5} className="g-3">
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
