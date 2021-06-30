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
        src="https://static.liweijia.com/site-php/upload/commodity-goods/79bdbf0597b8052ec2d3cce863ac13e8.png"
      />
    </View>
  );
};

GoldCoinPurchase.defaultProps = {
};

export default GoldCoinPurchase;
