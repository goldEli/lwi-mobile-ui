import NodePath from "path";
import RollupCopy from "rollup-plugin-copy";
import alias from "@rollup/plugin-alias";
import Package from "./package.json";
import { plugins } from "./common.rollup.config";

const resolveFile = (path) => NodePath.resolve(__dirname, path);
const replaceH5 = (s) => s.replace("dist", "h5");

const externalPackages = [
  "react",
  "react-dom",
  // "@tarojs/components",
  "@tarojs/runtime",
  "@tarojs/taro",
  "@tarojs/react",
];

export default {
  input: resolveFile(replaceH5(Package.source)),
  output: [
    // {
    //   file: resolveFile(replaceH5(Package.main)),
    //   format: "cjs",
    //   sourcemap: true,
    // },
    {
      file: resolveFile(replaceH5(Package.module)),
      format: "es",
      // sourcemap: true,
    },
    // {
    //   file: resolveFile(replaceH5(Package.browser)),
    //   format: "umd",
    //   name: "taro-ui",
    //   sourcemap: true,
    //   globals: {
    //     react: "React",
    //     "@tarojs/components": "components",
    //     "@tarojs/taro": "Taro",
    //   },
    // },
  ],
  external: externalPackages,
  plugins: [
    ...plugins,
    alias({
      entries: {
        "@tarojs/components": "@tarojs/components/dist-h5/react",
      },
    }),

    RollupCopy({
      targets: [
        {
          src: resolveFile("src/styles"),
          dest: resolveFile(replaceH5("dist")),
        },
      ],
    }),
  ],
};
