import Vue from 'vue'
import { addDecorator, addParameters, configure } from '@storybook/vue'
import { withKnobs } from '@storybook/addon-knobs'
import { themes } from '@storybook/theming'
import ElementUI from 'element-ui'

import './utils/tailwind.storybook.css'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUI)

addParameters({
  options: {
    theme: themes.light,
    showRoots: true,
  },
})
const rootPaddingContainer = () => ({
  template: `<div class="p-4"><story/></div>`,
})

addDecorator(
  withKnobs({
    escapeHTML: false,
  })
)

addDecorator(rootPaddingContainer)

configure(require.context('../src/components', true, /\.stories\.js$/), module)
