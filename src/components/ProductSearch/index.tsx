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
            ? "https://static.liweijia.com/site-php/upload/commodity-goods/1334fb334d5e0c3db3b58fe0afae33c5.jpeg"
            : "https://static.liweijia.com/site-php/upload/commodity-goods/15d07d6d021fbc8ba60f11bd6c1fd51f.jpeg"
        }
      />
    </View>
  );
};

ProductSearch.defaultProps = {
  borderStyle: "normal",
};

export default ProductSearch;
