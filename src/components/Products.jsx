import React from "react";
import AddProduct from "./AddProduct";
import Pagination from "./Pagination";
import Product from "./Product";
// import { Box, Flex, Spacer } from "@chakra-ui/react";
import { Box, Center, Flex, Square, Text } from "@chakra-ui/react";

const Products = () => {
  // TODO: Remove below const and instead import them from chakra
  // const Flex = () => <div />;
  // const Grid = () => <div />;

  return (
    <Flex color="white">
      <Center w="100px" bg="green.500">
        <Text>Box 1</Text>
      </Center>
      <Square bg="blue.500" size="150px">
        <Text>Box 2</Text>
      </Square>
      <Box flex="1" bg="tomato">
        <Text>Box 3</Text>
      </Box>
      {/*
       <AddProduct />
      <Grid>
       <Product/>
      </Grid>      
      <Pagination /> */}
    </Flex>
  );
};

export default Products;
