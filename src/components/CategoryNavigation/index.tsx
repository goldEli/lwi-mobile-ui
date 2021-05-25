import React from "react";
import { View, Image } from "@tarojs/components";
import img from "../../assets/hihouse/CategoryNavigation.png";

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
        src={img}
      />
    </View>
  );
};

CategoryNavigation.defaultProps = {
};

export default CategoryNavigation;
