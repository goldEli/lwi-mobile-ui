import React from "react";
import { View, Image } from "@tarojs/components";
import img from "../../assets/hihouse/storeinfo.png";

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
        src={img}
      />
    </View>
  );
};

StoreInfo.defaultProps = {
};

export default StoreInfo;
