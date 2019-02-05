const $ = require('jquery');
const {remote} = require('electron');
var window = remote.getCurrentWindow();

$('#close').click(function(){
    window.close();
})

$('#minimize').click(function(){
    window.minimize();
})