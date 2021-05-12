import React from "react";
import { storiesOf } from "@storybook/react";

storiesOf("Welcome page", module).add(
  "welcome",
  () => {
    return (
      <div>
        <h1>欢迎来到丽维家移动端组件库</h1>
        <p>基于 tarojs 开发的一套组件库</p>
        <br />
        <h3>Install</h3>
        <code>npm install lwj-mobile-ui --save</code>
        <br />
        <h3>Usage</h3>
        <code>
          // 加载样式
          <br />
          import 'lwj-mobile-ui/dist/index.css'
          <br />
          // 引入组件
          <br />
          import &#123;Button&#125; from 'lwj-mobile-ui'
          <br />
        </code>
      </div>
    );
  },
  { info: { disable: true } }
);
