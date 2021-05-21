import React from "react";
// import { View } from "@tarojs/components";
import { View } from "@tarojs/components/dist-h5/react";

export interface IBlankComponentsProps {
  bgColor: string;
  height?: number;
}

const BlankComponents: React.FC<IBlankComponentsProps> = (props) => {
  return (
    <View
      style={{
        width: "100%",
        backgroundColor: props.bgColor,
        height: props.height === undefined ? "100%" : `${props.height}px`,
      }}
    >
    </View>
  );
};

BlankComponents.defaultProps = {
  bgColor: "black",
};

export default BlankComponents;
