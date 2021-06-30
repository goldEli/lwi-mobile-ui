import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";

import { IComboFlashSaleProps } from "../components/ComboFlashSale";
import { ComboFlashSale } from "../../h5/index.esm.js";
import { TMeta } from "./type";

const ret: TMeta<IComboFlashSaleProps> = {
  title: "组件库/套餐秒杀",
  component: ComboFlashSale,
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

const Template: Story<IComboFlashSaleProps> = (args) => <ComboFlashSale {...args} />;

export const Basic = Template.bind({});

Basic.args = {
  ...ComboFlashSale.defaultProps,
  /**
   Checks if the button should be disabled
  */
  // height: 30,
};
Basic.storyName = "介绍";
