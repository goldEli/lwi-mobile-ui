import NodePath from "path";
import RollupJson from "@rollup/plugin-json";
import RollupNodeResolve from "@rollup/plugin-node-resolve";
import RollupCommonjs from "@rollup/plugin-commonjs";
import RollupTypescript from "rollup-plugin-typescript2";
import RollupCopy from "rollup-plugin-copy";
import alias from "@rollup/plugin-alias";
import nodePolyfills from "rollup-plugin-node-polyfills";
import scss from 'rollup-plugin-scss'


import Package from "./package.json";

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
    scss(),
    alias({
      entries: {
        "@tarojs/components": "@tarojs/components/dist-h5/react",
      },
    }),
    RollupNodeResolve({
      customResolveOptions: {
        moduleDirectory: "node_modules",
      },
    }),
    RollupCommonjs({
      include: /\/node_modules\//,
    }),
    RollupJson(),
    RollupTypescript({
      tsconfig: resolveFile("tsconfig.rollup.json"),
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
