const { app, BrowserWindow } = require('electron');

let mainWindow = null;
//判断命令行脚本的第二参数是否含--debug
function createWindow() {
    mainWindow = new BrowserWindow({
        width: 400,
        height: 300,
    });
    mainWindow.loadURL("http://localhost:8000/");
}
//app主进程的事件和方法
app.on('ready', () => {
    createWindow();
});
app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit()
    }
});
app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
        createWindow();
    }
});
module.exports = mainWindow;
