import React from "react";
import { View, Image } from "@tarojs/components";
import img from "../../assets/hihouse/ProductSearch.jpg";
import img1 from "../../assets/hihouse/ProductSearch1.jpg";

export interface IProductSearchProps {
  borderStyle?: "normal" | "none";
}

const ProductSearch: React.FC<IProductSearchProps> = (props) => {
  console.log(props);
  
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
        src={props.borderStyle === "normal" ? img1 : img}
      />
    </View>
  );
};

ProductSearch.defaultProps = {
  borderStyle: "normal",
};

export default ProductSearch;
