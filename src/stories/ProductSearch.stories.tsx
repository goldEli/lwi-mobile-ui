import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";

import { IProductSearchProps } from "../components/ProductSearch";
import { ProductSearch } from "../../h5/index.esm.js";
import { TMeta } from "./type";

const ret: TMeta<IProductSearchProps> = {
  title: "组件库/商品搜索",
  component: ProductSearch,
  parameters: {
    docs: {
      description: {
        component: `
        `,
      },
    },
  },
  argTypes: {
    borderStyle: {
      description: `搜索框样式类型: **normal** , **none** `,
      control: {
        type: "select",
        options: ["normal", "none"]
      }
      // options: ["normal", "none"],
      // contorl: "select", // Automatically inferred when 'options' is defined
    },
  },
};
export default ret;

const Template: Story<IProductSearchProps> = (args) => (
  <ProductSearch {...args} />
);

export const Basic = Template.bind({});

Basic.args = {
  ...ProductSearch.defaultProps,
  /**
   Checks if the button should be disabled
  */
  // height: 30,
};
Basic.storyName = "介绍";
