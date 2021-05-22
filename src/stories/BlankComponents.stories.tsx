import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";

import { IBlankComponentsProps } from "../components/BlankComponents";
import { BlankComponents } from "../../h5/index.esm.js";

export default {
  title: "组件库/空白组件",
  component: BlankComponents,
  parameters: {
    docs: {
      description: {
        component: `
只支持纵向，可自定义背景色
        `,
      },
    },
  },
  argTypes: {
    bgColor: { control: "color" },
  },
} as Meta;

const Template: Story<IBlankComponentsProps> = (args) => (
  <BlankComponents {...args} />
);

export const Basic = Template.bind({});

Basic.args = {...BlankComponents.defaultProps, height: 30};
Basic.storyName = "介绍";
