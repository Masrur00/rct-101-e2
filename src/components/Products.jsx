import React, { useEffect, useState } from "react";
// import AddProduct from "./AddProduct";
import Pagination from "./Pagination";
import Product from "./Product";
// import { Grid, GridItem } from "@chakra-ui/react";
// import { Box, Flex, Spacer } from "@chakra-ui/react";
// import { Box, Center, Flex, Square, Text } from "@chakra-ui/react";
import axios from "axios";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(3);
  // TODO: Remove below const and instead import them from chakra
  // const Flex = () => <div />;
  // const Grid = () => <div />;

  useEffect(() => {
    const getData = async () => {
      let res = await axios.get(
        `http://localhost:8585/products?_limit=${limit}&_page=${page}`
      );
      console.log(res.data);
      setProducts(res.data);
    };
    getData();
  }, [page, limit]);

  return (
    <div className="prods-pg">
      {/* <AddProduct /> */}

      {products.map((prod) => (
        <Product key={prod.id} prod={prod} />
      ))}

      <Pagination setLimit={setLimit} setPage={setPage} />
    </div>
  );
};

export default Products;
