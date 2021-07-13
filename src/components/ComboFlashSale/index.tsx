import React from "react";
import { View, Image } from "@tarojs/components";

export interface IComboFlashSaleProps {}

const ComboFlashSale: React.FC<IComboFlashSaleProps> = (props) => {
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
        src="https://static.liweijia.com/site-php/upload/commodity-goods/efd91044b4203a36e3c349a2686b1faa.png"
      />
    </View>
  );
};

ComboFlashSale.defaultProps = {
};

export default ComboFlashSale;
