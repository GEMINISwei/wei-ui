import { defineAsyncComponent } from 'vue'

export default ({ app }) => {
  app.component("InputText", defineAsyncComponent(() => import("D:/Practice/wei-ui/docs/.vuepress/components/InputText.vue")))
}
