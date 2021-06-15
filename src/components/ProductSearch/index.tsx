import React from "react";
import { View, Image } from "@tarojs/components";

export interface IProductSearchProps {
  borderStyle?: "normal" | "none";
}

const ProductSearch: React.FC<IProductSearchProps> = (props) => {
  return (
    <View
      style={{
        width: "100%",
      }}
    >
      <Image
        style={{
          width: "100%",
          height: "auto",
        }}
        src={
          props.borderStyle === "normal"
            ? "https://static.liweijia.com/site-php/images/ProductSearch1.jpg"
            : "https://static.liweijia.com/site-php/images/ProductSearch.jpg"
        }
      />
    </View>
  );
};

ProductSearch.defaultProps = {
  borderStyle: "normal",
};

export default ProductSearch;
