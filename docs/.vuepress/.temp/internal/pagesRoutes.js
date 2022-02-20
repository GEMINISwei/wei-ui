import { Vuepress } from '@vuepress/client/lib/components/Vuepress'

const routeItems = [
  ["v-8daa1a0e","/",{"title":"Welcome Wei UI"},["/index.html","/README.md"]],
  ["v-2f99c7eb","/input/input-text.html",{"title":"input-text"},["/input/input-text","/input/input-text.md"]],
  ["v-238b6e7e","/input/input-textarea.html",{"title":"input-textarea"},["/input/input-textarea","/input/input-textarea.md"]],
  ["v-3706649a","/404.html",{"title":""},["/404"]],
]

export const pagesRoutes = routeItems.reduce(
  (result, [name, path, meta, redirects]) => {
    result.push(
      {
        name,
        path,
        component: Vuepress,
        meta,
      },
      ...redirects.map((item) => ({
        path: item,
        redirect: path,
      }))
    )
    return result
  },
  [
    {
      name: "404",
      path: "/:catchAll(.*)",
      component: Vuepress,
    }
  ]
)
