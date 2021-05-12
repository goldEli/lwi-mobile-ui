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

export const Basic = Template.bind({})

Basic.args = TitleText.defaultProps 

