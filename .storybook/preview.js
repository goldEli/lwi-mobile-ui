import React from "react";
import { addDecorator } from "@storybook/react";
import { window } from "@tarojs/runtime";
import "@tarojs/components/dist/taro-components/taro-components.css";
import {
  defineCustomElements,
  applyPolyfills,
} from "@tarojs/components/loader";

addDecorator((storyFn) => {
  applyPolyfills().then(function () {
    defineCustomElements(window);
  });

  return storyFn();
});

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}