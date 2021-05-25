import React from "react";
import { Story } from "@storybook/react/types-6-0";

import { IGraphicNavigationProps } from "../components/GraphicNavigation";
import { GraphicNavigation } from "../../h5/index.esm.js";
import { TMeta } from "./type";

const ret: TMeta<IGraphicNavigationProps> = {
  title: "组件库/图文导航",
  component: GraphicNavigation,
  parameters: {
    docs: {
      description: {
        component: `
1. 小于等于四个导航，between space 布局
2. 超过四个导航，横向滚动
        `,
      },
    },
  },
  argTypes: {
    imgList: {
      description: "图片信息",
    },
    paddingX: {
      description: "页边距",
    },
  },
};
export default ret;

const Template: Story<IGraphicNavigationProps> = (args) => <GraphicNavigation {...args} />;

export const Basic = Template.bind({});

Basic.args = {
  ...GraphicNavigation.defaultProps,
  /**
   Checks if the button should be disabled
  */
};
Basic.storyName = "介绍";
