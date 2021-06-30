import React from "react";
import { View, Image } from "@tarojs/components";

export interface IProductFlashSaleProps {}

const ProductFlashSale: React.FC<IProductFlashSaleProps> = (props) => {
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
        src="https://static.liweijia.com/site-php/upload/commodity-goods/1e9db72df1376aa70a55c5b9231bc1c9.png"
      />
    </View>
  );
};

ProductFlashSale.defaultProps = {
};

export default ProductFlashSale;
