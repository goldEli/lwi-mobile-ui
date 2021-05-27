import React from "react";
import { Story } from "@storybook/react/types-6-0";

import { IProductRecommendationProps } from "../components/ProductRecommendation";
import { ProductRecommendation } from "../../h5/index.esm.js";
import { TMeta } from "./type";

const ret: TMeta<IProductRecommendationProps> = {
  title: "组件库/商品推荐",
  component: ProductRecommendation,
  parameters: {
    docs: {
      description: {
        component: `
一排展示两个，或者横向滚动
        `,
      },
    },
  },
  argTypes: {
    template: {
      description: "展示方式",
      control: {
        type: "select",
        options: ["twoInARow", "horizontalScrolling"],
      },
    },
    imgList: {
      description: "图片信息",
    },
  },
};
export default ret;

const Template: Story<IProductRecommendationProps> = (args) => (
  <ProductRecommendation {...args} />
);

export const Basic = Template.bind({});

Basic.args = {
  ...ProductRecommendation.defaultProps,
  /**
   Checks if the button should be disabled
  */
};
Basic.storyName = "介绍";
