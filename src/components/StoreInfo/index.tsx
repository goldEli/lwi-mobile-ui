import React from "react";
import { View } from "@tarojs/components";

export interface IStoreInfoProps {
  // bgColor: string;
  // height?: number;
}

const StoreInfo: React.FC<IStoreInfoProps> = (props) => {
  return (
    <View
      style={{
        width: "100%",
        // height: props.height === undefined ? "100%" : `${props.height}px`,
      }}
    >
      店铺信息展示区域（非自定义组件，仅占位）
    </View>
  );
};

StoreInfo.defaultProps = {
  // bgColor: "black",
};

export default StoreInfo;
