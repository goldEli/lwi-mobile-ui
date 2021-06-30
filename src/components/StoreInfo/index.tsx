import React from "react";
import { View, Image } from "@tarojs/components";

export interface IStoreInfoProps {}

const StoreInfo: React.FC<IStoreInfoProps> = (props) => {
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
        src="https://static.liweijia.com/site-php/upload/commodity-goods/4ab145255a447500079b85e1f84f2b1f.png"
      />
    </View>
  );
};

StoreInfo.defaultProps = {
};

export default StoreInfo;
