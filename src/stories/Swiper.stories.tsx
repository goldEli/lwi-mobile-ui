import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";

import { ISwiperProps } from "../components/Swiper";
import { LwjSwiper } from "../../h5/index.esm.js"
export default {
  title: "组件库/Swiper",
  component: LwjSwiper,
  parameters: {
    docs: {
      description: {
        component: ``,
      },
    },
  },
  argTypes: {
  },
} as Meta;

const Template: Story<ISwiperProps> = (args) => (
  <LwjSwiper {...args} />
);

export const Basic = Template.bind({});

Basic.args = {
  pageNum: 1,
  skin: 'STYLE-6799FF'
};
Basic.storyName = "介绍";
