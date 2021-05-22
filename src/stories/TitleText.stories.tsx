import React from "react";
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from "@storybook/react/types-6-0";
// import { actions } from "@storybook/addon-actions";

import { ITitleTextProps } from "../components/TitleText";
import { TitleText } from "../../h5/index.esm.js";

export default {
  title: "组件库/标题文本",
  component: TitleText,
  parameters: {
    docs: {
      description: {
        component: `
可自定义字体颜色、大小等
        `,
      },
    },
  },
  argTypes: {
    color: { control: "color" },
  },
} as Meta;

const Template: Story<ITitleTextProps> = (args) => <TitleText {...args} />;

export const Basic = Template.bind({});

Basic.args = TitleText.defaultProps;
Basic.storyName = "介绍";
