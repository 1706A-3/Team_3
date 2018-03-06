(function(){
    size();
    window.onresize=function(){
        size();
    }
    function size(){
        var winW=document.documentElement.clientWidth||document.body.clientWidth;
        document.documentElement.style.fontSize=(winW/750)*100+"px";
    }
})()
// 1rem =10px
// 屏幕最小支持320px
// 最小字体10px