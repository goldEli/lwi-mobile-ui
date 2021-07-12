const { jsWithTs: tsjPreset } = require("ts-jest/presets");

module.exports = {
  verbose: true,
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
  rootDir: __dirname,
  testMatch: [
    "<rootDir>/__tests__/**.test.ts",
    "<rootDir>/__tests__/**.test.tsx",
  ],
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': '<rootDir>/node_modules/babel-jest',
    // '^.+\\.esm.js?$': 'ts-jest',
  },
  rootDir: __dirname,
  transformIgnorePatterns: ['<rootDir>/node_modules/(?!@taro)', '^.+\\.(css|sass|scss|less)$'],
  moduleNameMapper: {
    '@tarojs/components': '@tarojs/components/dist-h5/react',
    '../src/index': '../h5/index.esm.js',
  },
  preset: "ts-jest",
  transform: {
    // "^.+\\.(ts|tsx)?$": "ts-jest",
    "^.+\\.(js|jsx)$": "babel-jest",
  },
  setupFilesAfterEnv: ["<rootDir>/setupTests.js"]
};
