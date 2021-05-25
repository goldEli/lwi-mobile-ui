import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";

import { IProductSearchProps } from "../components/ProductSearch";
import { ProductSearch } from "../../h5/index.esm.js";
import { TMeta } from "./type";

const ret: TMeta<IProductSearchProps> = {
  title: "组件库/商品搜索",
  component: ProductSearch,
  parameters: {
    docs: {
      description: {
        component: `
        `,
      },
    },
  },
  argTypes: {
    // template: {
    //   description: "展示模式，**carousel** : 轮播，**oneInARow** : 纵向排列，",
    // },
    borderStyle: {
      description: "搜索框样式类型",
    },
    // borderRadius: {
    //   description: "圆角",
    // },
    // paddingX: {
    //   description: "页边距",
    // },
  },
};
export default ret;

const Template: Story<IProductSearchProps> = (args) => (
  <ProductSearch {...args} />
);

export const Basic = Template.bind({});

Basic.args = {
  ...ProductSearch.defaultProps,
  /**
   Checks if the button should be disabled
  */
  // height: 30,
};
Basic.storyName = "介绍";
