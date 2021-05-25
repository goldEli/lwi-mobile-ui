import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";

import { IStoreInfoProps } from "../components/StoreInfo";
import { StoreInfo } from "../../h5/index.esm.js";
import { TMeta } from "./type";

const ret: TMeta<IStoreInfoProps> = {
  title: "组件库/店铺信息",
  component: StoreInfo,
  parameters: {
    docs: {
      description: {
        component: `
展示店铺信息、跳转店铺详情、拨打电话
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

const Template: Story<IStoreInfoProps> = (args) => <StoreInfo {...args} />;

export const Basic = Template.bind({});

Basic.args = {
  ...StoreInfo.defaultProps,
  /**
   Checks if the button should be disabled
  */
  // height: 30,
};
Basic.storyName = "介绍";
