const {app, BrowserWindow} = require('electron')
const remote = require('electron').remote

function createWindow (){

	win = new BrowserWindow({
		width: 1000, 
		height: 600,
		minHeight: 600,
		minWidth: 1000,
		maxHeight: 600,
		maxWidth: 1000,
		frame: false,
		fullscreenable: false,
		icon: __dirname + "/assets/icons/png/64x64.png"
	})

	win.loadFile('index.html')
	//If you want you can enable the debug mode
	//win.openDevTools();

	win.on('closed', () => {
		win = null
	})

}

app.on('ready', createWindow)

