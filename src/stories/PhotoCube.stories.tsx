import React from "react";
import { Story } from "@storybook/react/types-6-0";

import { IPhotoCubeProps } from "../components/PhotoCube";
import { PhotoCube } from "../../h5/index.esm.js";
import { TMeta } from "./type";

const ret: TMeta<IPhotoCubeProps> = {
  title: "组件库/图片魔方",
  component: PhotoCube,
  parameters: {
    docs: {
      description: {
        component: `
        `,
      },
    },
  },
  argTypes: {
    template: {
      description: `展示模式`,
      control: {
        type: "select",
        options: [
          "twoInARow",
          "threeInARow",
          "fourInARow",
          "upOneDownThree",
          "leftTwoRightTwo",
          "leftOneRightTwo",
          "leftOneIRightThree",
        ],
      },
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

const Template: Story<IPhotoCubeProps> = (args) => <PhotoCube {...args} />;

export const Basic = Template.bind({});

Basic.args = {
  ...PhotoCube.defaultProps,
  /**
   Checks if the button should be disabled
  */
  height: 30,
};
Basic.storyName = "介绍";
