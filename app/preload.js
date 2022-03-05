// 预执行一些代码，或者提前加载渲染进程需要的node模块等等
window.addEventListener('DOMContentLoaded', () => {
    global.electron = require('electron')

    const replaceText = (selector, text) => {
      const element = document.getElementById(selector)
      if (element) element.innerText = text
    }
  
    for (const dependency of ['chrome', 'node', 'electron']) {
      replaceText(`${dependency}-version`, process.versions[dependency])
    }
  })