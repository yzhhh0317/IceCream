import DefaultTheme from "vitepress/theme";
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { ElementPlusContainer } from '@vitepress-demo-preview/component'
import '@vitepress-demo-preview/component/dist/style.css'
import Button from '../../../src/components/Button/Button.vue'
import Input from '../../../src/components/Input/Input.vue'
import Collapse from '../../../src/components/Collapse/Collapse.vue'
import CollapseItem from '../../../src/components/Collapse/CollapseItem.vue'
import Icon from '../../../src/components/Icon/Icon.vue'

import '../../../src/styles/index.css'
import './custom.css'
library.add(fas)

export default {
  ...DefaultTheme,
  enhanceApp({ app }) {
    app.component('demo-preview', ElementPlusContainer)
    app.component('YuButton', Button)
    app.component('YuInput', Input)
    app.component('YuCollapse', Collapse)
    app.component('YuCollapseItem', CollapseItem)
    app.component('YuIcon', Icon)
  }
}