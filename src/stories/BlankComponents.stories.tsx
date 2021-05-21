import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";

import BlankComponents, {IBlankComponentsProps} from "../components/BlankComponents";

export default {
  title: "Example/BlankComponents",
  component: BlankComponents,
  parameters: {
    docs: {
      description: {
        component: `
空白组件，只支持纵向，可自定义背景色
        `,
      },
    },
  },
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as Meta;

const Template: Story<IBlankComponentsProps> = (args) => <BlankComponents {...args} />;

export const Basic = Template.bind({});

Basic.args = BlankComponents.defaultProps;
