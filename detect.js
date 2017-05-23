var detect = function(base, if_installed, if_not_installed) {
    var s = document.createElement('script');
    s.onerror = if_not_installed;
    s.onload = if_installed;
    document.body.appendChild(s);
    s.src = base + '/manifest.json';
}
// detect Ghostery
detect('chrome-extension://mlomiejdfkolichcflejclcbmpeaniij', 
    function() {alert('installed!');},
    function() {alert('not installed!');});