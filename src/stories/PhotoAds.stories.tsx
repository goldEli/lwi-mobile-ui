import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";

import { IPhotoAdsProps } from "../components/PhotoAds";
import { PhotoAds } from "../../h5/index.esm.js";
import { TMeta } from "./type";

const ret: TMeta<IPhotoAdsProps> = {
  title: "组件库/图片广告",
  component: PhotoAds,
  parameters: {
    docs: {
      description: {
        component: `
支持轮播，和纵向排列两种模式
        `,
      },
    },
  },
  argTypes: {
    template: {
      description: "展示模式，**carousel** : 轮播，**oneInARow** : 纵向排列，",
    },
    imgList: {
      description: "图片信息",
    },
    borderRadius: {
      description: "圆角",
    },
    paddingX: {
      description: "页边距",
    },
  },
};
export default ret;

const Template: Story<IPhotoAdsProps> = (args) => <PhotoAds {...args} />;

export const Basic = Template.bind({});

Basic.args = {
  ...PhotoAds.defaultProps,
  /**
   Checks if the button should be disabled
  */
  height: 30,
};
Basic.storyName = "介绍";
