import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import CopyToClipboard from 'vue-copy-to-clipboard'

export default ({Vue}) => {
  Vue.use(ElementUI)
  Vue.use(CopyToClipboard);
}
