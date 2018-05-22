let handlerOrientationChange = function(){
    let width = (window.innerWidth <= 320) ? 320 : ((window.innerWidth >= 640) ? 640 : window.innerWidth);
    let fontSize = 100 * (width / 320);
    document.documentElement.style.fontSize = fontSize + "px";
};
handlerOrientationChange();
window.onresize = handlerOrientationChange;