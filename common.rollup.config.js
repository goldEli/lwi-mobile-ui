import NodePath from "path";
import RollupJson from "@rollup/plugin-json";
import RollupNodeResolve from "@rollup/plugin-node-resolve";
import RollupCommonjs from "@rollup/plugin-commonjs";
import RollupTypescript from "rollup-plugin-typescript2";
import alias from "@rollup/plugin-alias";
import scss from "rollup-plugin-scss";
import image from "@rollup/plugin-image";

const resolveFile = path => NodePath.resolve(__dirname, path)
export const plugins = [
  image({
    limit: 10000,
  }),
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

];
