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
        src="https://static.liweijia.com/site-php/images/CategoryNavigation.png"
      />
    </View>
  );
};

CategoryNavigation.defaultProps = {
};

export default CategoryNavigation;
