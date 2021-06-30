import React from "react";
import { View, Image } from "@tarojs/components";

export interface ICategoryNavigationProps {}

const CategoryNavigation: React.FC<ICategoryNavigationProps> = (props) => {
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
        src="https://static.liweijia.com/site-php/upload/commodity-goods/1334fb334d5e0c3db3b58fe0afae33c5.jpeg"
      />
      <Image
        style={{
          width: "100%",
          height: "auto",
        }}
        src="https://static.liweijia.com/site-php/upload/commodity-goods/346aae0817cb96e805ab08792e3bad57.png"
      />
    </View>
  );
};

CategoryNavigation.defaultProps = {
};

export default CategoryNavigation;
