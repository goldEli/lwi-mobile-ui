import { applyPolyfills, defineCustomElements } from '@tarojs/components/loader'
import '@tarojs/components/dist/taro-components/taro-components.css'
import '../h5/index.esm.css'

applyPolyfills().then(() => {
  defineCustomElements(window)
})

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}