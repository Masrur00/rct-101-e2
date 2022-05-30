import React from "react";
import { Text } from "@chakra-ui/react";

const Product = (props) => {
  let { imageSrc, gender, category, title, price } = props.prod;
  // console.log(gender);
  // TODO: Remove below const and instead import them from chakra
  // const Text = () => <div />;
  // const Image = () => <div />;
  // const Box = () => <div />;
  // const Stack = () => <div />;
  // const Heading = () => <div />;
  // const Tag = () => <div />;
  // const TagLabel = () => <div />;
  // console.log(title, price);
  return (
    <div data-cy="product">
      <img data-cy="product-image" src={imageSrc} alt="" />
      <div className="">
        <p data-cy="product-category">{category}</p>
        <p data-cy="product-category">{gender}</p>
      </div>
      <h3 data-cy="product-title">{title}</h3>
      <h4 data-cy="product-price">{price}</h4>
    </div>
  );
};

export default Product;
