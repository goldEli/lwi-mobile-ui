import React from "react";
// import { View } from "@tarojs/components";
import { View } from "@tarojs/components/dist-h5/react";

export interface ITitleTextProps {
  text?: string;
  align?: "left" | "center" | "right";
  fontSize?: "16" | "14" | "12";
  fontWeight?: "bold" | "normal";
  color?: string;
  lineHeight?: number;
  paddingX?: number;
  height?: number;
}

const TitleText: React.FC<ITitleTextProps> = (props) => {
  const defaultStyle = {
    display: "block",
  };
  return (
    <View
      style={{
        ...defaultStyle,
        color: props.color,
        textAlign: props.align,
        lineHeight: `${props.lineHeight}px`,
        fontSize: `${props.fontSize}px`,
        fontWeight: props.fontWeight,
        padding: `0 ${props.paddingX}px`,
        height: `${props.height}px`,
      }}
    >
      {props.text}
    </View>
  );
};

TitleText.defaultProps = {
  text: "我是标题文本",
  color: "black",
  align: "center",
  fontSize: "12",
  fontWeight: "bold",
  lineHeight: 30,
  paddingX: 20,
  height: 30,
};

export default TitleText;
