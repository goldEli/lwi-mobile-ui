import React from "react";
// import { View } from "@tarojs/components";
import { View } from "@tarojs/components/dist-h5/react";

export interface ITitleTextProps {
  text: string;
  align: "left" | "center" | "right";
  fontSize: "16" | "14" | "12";
  fontWeight: "bold" | "normal";
  color: string;
  lineHeight: number;
  paddingX: number;
  height: number;
}

const TitleText: React.FC<ITitleTextProps> = (props) => {
  return (
    <View
      style={{
        display: "block",
        color: props.color,
        textAlign: props.align,
        lineHeight: `${props.lineHeight}px`,
        height: `${props.height}px`,
        fontSize: `${props.fontSize}px`,
        fontWeight: props.fontWeight,
        padding: `0 ${props.paddingX}px`,
      }}
    >
      {props.text}
    </View>
  );
};

export default TitleText;
