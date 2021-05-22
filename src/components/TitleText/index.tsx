import React from "react";
import { View } from "@tarojs/components";
import { AtButton } from "taro-ui";
// import { View } from "@tarojs/components/dist-h5/react";
import "taro-ui/dist/style/components/button.scss";

export interface ITitleTextProps {
  text?: string;
  align?: "left" | "center" | "end";
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
        height: props.height === undefined ? "100%" : `${props.height}px`,
      }}
    >
      {props.text}
      <AtButton type="primary">123</AtButton>
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
};

export default TitleText;
