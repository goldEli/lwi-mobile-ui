import NodePath from "path";
import RollupCopy from "rollup-plugin-copy";
import { plugins } from "./common.rollup.config";

import Package from "./package.json";

const resolveFile = (path) => NodePath.resolve(__dirname, path);

const externalPackages = [
  "react",
  "react-dom",
  "@tarojs/components",
  "@tarojs/runtime",
  "@tarojs/taro",
  "@tarojs/react",
];

export default {
  input: resolveFile(Package.source),
  output: [
    {
      file: resolveFile(Package.main),
      format: "cjs",
      sourcemap: true,
    },
    {
      file: resolveFile(Package.module),
      format: "es",
      sourcemap: true,
    },
    {
      file: resolveFile(Package.browser),
      format: "umd",
      name: "taro-ui",
      sourcemap: true,
      globals: {
        react: "React",
        "@tarojs/components": "components",
        "@tarojs/taro": "Taro",
      },
    },
  ],
  external: externalPackages,
  plugins: [
    ...plugins,
    RollupCopy({
      targets: [
        {
          src: resolveFile("src/styles"),
          dest: resolveFile("dist"),
        },
        {
          src: resolveFile("src/assets"),
          dest: resolveFile("dist"),
        },
      ],
    }),
  ],
};
