import { defineAsyncComponent } from 'vue'

export default ({ app }) => {
  app.component("InputText", defineAsyncComponent(() => import("D:/Practice/wei-ui/src/InputText.vue"))),
  app.component("InputTextarea", defineAsyncComponent(() => import("D:/Practice/wei-ui/src/InputTextarea.vue")))
}
