import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";

import { IGoldCoinPurchaseProps } from "../components/GoldCoinPurchase";
import { GoldCoinPurchase } from "../../h5/index.esm.js";
import { TMeta } from "./type";

const ret: TMeta<IGoldCoinPurchaseProps> = {
  title: "组件库/金币换购",
  component: GoldCoinPurchase,
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

const Template: Story<IGoldCoinPurchaseProps> = (args) => <GoldCoinPurchase {...args} />;

export const Basic = Template.bind({});

Basic.args = {
  ...GoldCoinPurchase.defaultProps,
  /**
   Checks if the button should be disabled
  */
  // height: 30,
};
Basic.storyName = "介绍";
