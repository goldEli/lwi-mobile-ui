import React from "react";
import { View, Image } from "@tarojs/components";

export interface IGoldCoinPurchaseProps {}

const GoldCoinPurchase: React.FC<IGoldCoinPurchaseProps> = (props) => {
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
        src="https://static.liweijia.com/site-php/images/GoldCoinPurchase.png"
      />
    </View>
  );
};

GoldCoinPurchase.defaultProps = {
};

export default GoldCoinPurchase;
