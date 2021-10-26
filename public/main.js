const { app, BrowserWindow } = require('electron')
require('@electron/remote/main').initialize()

const path = require('path')
function createWindow(){
    const win = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences:{
            enableRemoteModule:true,
            nodeIntegration:true
        }
    })
    win.loadURL('index.html')
}

// require('electron-reload')(__dirname, {
//     electron: path.join(__dirname, 'node_modules', '.bin', 'electron')
//   });
const electron = require('electron')

// Enable live reload for all the files inside your project directory
require('electron-reload')(__dirname);
app.on('ready',createWindow)

app.on('activate', () => {
    // On macOS it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if (BrowserWindow.getAllWindows().length === 0) createWindow()
})

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit()
})