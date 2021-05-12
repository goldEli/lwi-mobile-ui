import React from "react";
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from "@storybook/react/types-6-0";
// import { actions } from "@storybook/addon-actions";

import TitleText, {ITitleTextProps} from "../components/TitleText";

export default {
  title: "Example/TitleText",
  component: TitleText,
  argTypes: {
    color: { control: 'color' },
  },
} as Meta;

const Template: Story<ITitleTextProps> = (args) => <TitleText {...args} />;

export const Basic = Template.bind({}) as {args: ITitleTextProps}

Basic.args = {
  text: "我是标题文本",
  color: "red",
  align: "center",
  fontSize: "12",
  fontWeight: "bold",
  lineHeight: 30,
  paddingX: 20,
  height: 30
} 

