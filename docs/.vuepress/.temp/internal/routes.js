export const redirects = JSON.parse("{}")

export const routes = Object.fromEntries([
  ["/api-documentation.html", { loader: () => import(/* webpackChunkName: "api-documentation.html" */"E:/Github/VisionGalDoc/docs/.vuepress/.temp/pages/api-documentation.html.js"), meta: {"title":"API文档"} }],
  ["/galgamelua-api-documentation.html", { loader: () => import(/* webpackChunkName: "galgamelua-api-documentation.html" */"E:/Github/VisionGalDoc/docs/.vuepress/.temp/pages/galgamelua-api-documentation.html.js"), meta: {"title":"GalGame API文档"} }],
  ["/gamelua-api-documentation.html", { loader: () => import(/* webpackChunkName: "gamelua-api-documentation.html" */"E:/Github/VisionGalDoc/docs/.vuepress/.temp/pages/gamelua-api-documentation.html.js"), meta: {"title":"游戏API文档"} }],
  ["/get-started.html", { loader: () => import(/* webpackChunkName: "get-started.html" */"E:/Github/VisionGalDoc/docs/.vuepress/.temp/pages/get-started.html.js"), meta: {"title":"快速开始"} }],
  ["/", { loader: () => import(/* webpackChunkName: "index.html" */"E:/Github/VisionGalDoc/docs/.vuepress/.temp/pages/index.html.js"), meta: {"title":"主页"} }],
  ["/404.html", { loader: () => import(/* webpackChunkName: "404.html" */"E:/Github/VisionGalDoc/docs/.vuepress/.temp/pages/404.html.js"), meta: {"title":""} }],
]);

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateRoutes) {
    __VUE_HMR_RUNTIME__.updateRoutes(routes)
  }
  if (__VUE_HMR_RUNTIME__.updateRedirects) {
    __VUE_HMR_RUNTIME__.updateRedirects(redirects)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ routes, redirects }) => {
    __VUE_HMR_RUNTIME__.updateRoutes(routes)
    __VUE_HMR_RUNTIME__.updateRedirects(redirects)
  })
}
