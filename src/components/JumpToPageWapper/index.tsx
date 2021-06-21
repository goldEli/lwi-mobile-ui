import React from "react";
import Taro from "@tarojs/taro";
import { View, Button } from "@tarojs/components";
import { IImgListItem } from "../type";

interface IJumpToPageWapperProps {
  clickHref?: IImgListItem["clickHref"];
  wxapplink?: string;
  onOk?: () => void;
  style?: { [key in string]: string | number };
}

const JumpToPageWapper: React.FC<IJumpToPageWapperProps> = (props) => {
  const jumpToContact = props.clickHref?.includes("kefu");
  const jumpToPage = props.clickHref?.includes("wxapp");
  const style = props.style || {};
  if (jumpToPage) {
    return (
      <View
        style={{
          width: "100%",
          ...style,
        }}
        onClick={() => {
          props?.wxapplink &&
            Taro.navigateTo({
              url: props.wxapplink,
            });
        }}
      >
        {props.children}
      </View>
    );
  }
  if (jumpToContact) {
    return (
      <View
        style={{
          width: "100%",
          height: "100%",
          position: "relative",
          overflow: "hidden",
          ...style,
        }}
        onClick={() => {
          props?.wxapplink &&
            Taro.navigateTo({
              url: props.wxapplink,
            });
        }}
      >
        <Button
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            opacity: "0",
          ...style,
          }}
          openType="contact"
        ></Button>
        <View style={{ width: "100%", height: "100%" }}>{props.children}</View>
      </View>
    );
  }
  return (
    <View style={{ width: "100%", height: "100%" }}>{props.children}</View>
  );
};

export default JumpToPageWapper;
