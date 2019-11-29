const { app, BrowserWindow } = require('electron');
const path = require('path');
const url = require('url');
require('electron-debug')();
const {
  default: installExtension,
  REACT_DEVELOPER_TOOLS,
} = require('electron-devtools-installer');

let mainWindow = null;

const createWindow = async () => {
  await installExtension(REACT_DEVELOPER_TOOLS);
  mainWindow = new BrowserWindow({
    width: 1000,
    height: 600,
    webPreferences: { nodeIntegration: true },
    frame: false,
  });
  mainWindow.loadURL(
    url.format({
      pathname: path.join(__dirname, 'index.html'),
      protocol: 'file:',
      slashes: true,
    }),
  );
  mainWindow.on('closed', () => {
    mainWindow = null;
  });
};

app.on('ready', createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (mainWindow === null) {
    createWindow();
  }
});
