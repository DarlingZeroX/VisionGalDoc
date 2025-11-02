import comp from "E:/Github/VisionGalDoc/docs/.vuepress/.temp/pages/index.html.vue"
const data = JSON.parse("{\"path\":\"/\",\"title\":\"主页\",\"lang\":\"zh-CN\",\"frontmatter\":{\"lang\":\"zh-CN\",\"home\":true,\"title\":\"主页\",\"heroImage\":\"/icons/visiongal.png\",\"actions\":[{\"text\":\"快速开始\",\"link\":\"/get-started.html\",\"type\":\"primary\"},{\"text\":\"介绍\",\"link\":\"/get-started.html\",\"type\":\"secondary\"},{\"text\":\"Github\",\"link\":\"https://github.com/DarlingZeroX/VisionGal\",\"type\":\"secondary\"}],\"features\":[{\"title\":\"可视化编辑器\",\"details\":\"提供完善的可视化编辑器，支持实时预览编辑效果，方便创作和管理视觉小说内容\"},{\"title\":\"自定义UI界面\",\"details\":\"全部自定义的UI界面，用类似html和css的语法来定义界面，用Lua脚本定义界面的行为\"},{\"title\":\"剧情脚本语言\",\"details\":\"支持丰富功能的剧情脚本语言,优雅的链式语法编写剧情\"},{\"title\":\"中文支持\",\"details\":\"提供完善的中文支持,包括中文语法,中文字体,中文界面等\"},{\"title\":\"MIT协议\",\"details\":\"开源的MIT协议，开发的游戏版权属于个人所有，你也可以修改引擎源代码，完全不受限制\"}],\"footer\":\"MIT Licensed | Copyright © 2025-present 梦旅缘心\"},\"headers\":[],\"git\":{\"updatedTime\":1762093392000,\"contributors\":[{\"name\":\"梦旅缘心\",\"username\":\"\",\"email\":\"307498626@qq.com\",\"commits\":3}],\"changelog\":[{\"hash\":\"cc8fe6981d5ffebf37fb9a2da53d0f307e462030\",\"time\":1762093392000,\"email\":\"307498626@qq.com\",\"author\":\"梦旅缘心\",\"message\":\"完善基础文档\"},{\"hash\":\"f153c6655c4ecb3da6bc78d107557ffd99a95874\",\"time\":1762009344000,\"email\":\"307498626@qq.com\",\"author\":\"梦旅缘心\",\"message\":\"更新\"},{\"hash\":\"bdc3f0c00d1870162714d76d0df9e1e13e0704e6\",\"time\":1762007077000,\"email\":\"307498626@qq.com\",\"author\":\"梦旅缘心\",\"message\":\"初始化代码\"}]},\"filePathRelative\":\"README.md\"}")
export { comp, data }

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
