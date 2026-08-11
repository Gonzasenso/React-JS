
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Badge from "react-bootstrap/Badge";
import React from "react";
import { Link } from "react-router-dom";
import "./itemlist.css";

export const ItemListContainer = ({ products }) => {
  return (
    <div className="products-container">
      {products.map((product) => {
        return (
          <Card key={product.id} className="product-card">
            <div className="image-container">
              <Link to={`/item/${product.id}`}>
                <Card.Img variant="top" src={product.thumbnail} className="product-image" />
              </Link>
            </div>

            <Card.Body className="d-flex flex-column">
              <Badge bg="warning" text="dark" className="mb-3 align-self-start">
                {product.category}
              </Badge>

              <Card.Title className="product-title">
                {product.title}
              </Card.Title>

              <Card.Text className="product-description">
                {product.description}
              </Card.Text>

              <div className="mt-auto d-grid gap-2">
                <Button variant="dark">
                  Agregar al carrito
                </Button>

                <Link to={`/item/${product.id}`} className="btn btn-warning fw-bold">
                  Ver detalle
                </Link>
              </div>
            </Card.Body>
          </Card>
        );
      })}
    </div>
  );
};
