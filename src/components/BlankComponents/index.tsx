import React from "react";
import { View } from "@tarojs/components/dist-h5/react";

export interface IBlankComponentsProps {
  backgroundColor: string;
  height: number;
}

const BlankComponents: React.FC<IBlankComponentsProps> = (props) => {
  return (
    <View
      style={{
        display: "block",
        width: "100%",
        backgroundColor: props.backgroundColor,
        height: `${props.height}px`,
      }}
    >
    </View>
  );
};

BlankComponents.defaultProps = {
  backgroundColor: "black",
  height: 100,
};

export default BlankComponents;
