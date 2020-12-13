import './js9.js'
import './js9prefs.js'
import './js9support.min.js'
import './js9.min.js'
import './js9plugins.js'

$(document).ready(function(){
    //$("#JS9Menubar").hide();
    $("#div").draggable({
      handle: "#JS9Menubar",
      opacity: 0.35
    });
    JS9.ResizeDisplay("JS9", 350, 400);
    JS9.Load("galaxy.fits", {scale: "linear"});
});
