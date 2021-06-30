import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";

import { IProductFlashSaleProps } from "../components/ProductFlashSale";
import { ProductFlashSale } from "../../h5/index.esm.js";
import { TMeta } from "./type";

const ret: TMeta<IProductFlashSaleProps> = {
  title: "组件库/单品秒杀",
  component: ProductFlashSale,
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
    // imgList: {
    //   description: "图片信息",
    // },
    // borderRadius: {
    //   description: "圆角",
    // },
    // paddingX: {
    //   description: "页边距",
    // },
  },
};
export default ret;

const Template: Story<IProductFlashSaleProps> = (args) => <ProductFlashSale {...args} />;

export const Basic = Template.bind({});

Basic.args = {
  ...ProductFlashSale.defaultProps,
  /**
   Checks if the button should be disabled
  */
  // height: 30,
};
Basic.storyName = "介绍";
