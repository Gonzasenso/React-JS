import React from "react";
import { useAllProducts } from "../hooks/useProducts";
import { LoaderComponent, ItemListContainer } from "../components";

export const Inicio = () => {
  const { products, loading, error } = useAllProducts();

  return (
    <div>
      {loading ? (
        <LoaderComponent />
      ) : error ? (
        <div>Hubo un error</div>
      ) : (
        <ItemListContainer products={products} />
      )}
    </div>
  );
};

