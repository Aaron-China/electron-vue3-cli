// 主进程
const { app, BrowserWindow, ipcMain } = require('electron')
const path = require('path')

const createWindow = () => {
    // 创建窗口
    const mainWindow = new BrowserWindow({
        width: 1200,
        height: 700,
        webPreferences: {
            // 在主进程中引入node模块
            nodeIntegration: true,
            contextIsolation: false,
            // 加载HTML之前，预加载的画面或代码
            preload: path.join(__dirname, 'preload.js')
        }
    })

    // 加载页面。本地环境加载前端项目；生产环境直接加载静态打包文件
    if (app.isPackaged) {
        mainWindow.loadFile('render/index.html')
    } else {
        // 未打包，开启 谷歌控制台 DevTools.
        mainWindow.webContents.openDevTools()
        // console.log('本地开发环境')

        mainWindow.loadURL(`http://localhost:8003`)
        // mainWindow.loadFile('render/index.html')
    }
}

// electron 初始化完成，准备创建浏览器窗口
app.whenReady().then(() => {
    createWindow()
    app.on('activate', () => {
        // Mac系统，点击图标如果没有可打开的窗口，创建新窗口
        if (BrowserWindow.getAllWindows().length === 0) createWindow()
    })
})

// 接收渲染进程的消息
ipcMain.on("sendMsg",(e, d) => {
    e.reply('replyMsg', {
        msg: `消息 ${d} 收到，over`
    })
})
ipcMain.on("quitApp",(e, d) => {
    setTimeout(() => {
        app.quit()
    }, d.time)
    e.returnValue = `收到,将在 ${d.time/1000} 秒后关闭程序`
})

// 所有窗口关闭，程序退出。Mac(darwin是Mac系统)除外
app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') app.quit()
})