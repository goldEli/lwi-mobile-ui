import React from "react";
import { View, Image } from "@tarojs/components";
import img from "../../assets/hihouse/GoldCoinPurchase.png";

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
        src={img}
      />
    </View>
  );
};

GoldCoinPurchase.defaultProps = {
};

export default GoldCoinPurchase;
