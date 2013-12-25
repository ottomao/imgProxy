## 综述

ImgProxy是一个图片代理工具。它通过Flash引入跨域的图片，做png-base64编码，回传给页面。一般用于解决canvas上的跨域getImageData问题。

* 版本：1.0
* 作者：加里 茅晓锋
* demo：[http://gallery.kissyui.com/imgProxy/1.0/demo/index.html](http://gallery.kissyui.com/imgProxy/1.0/demo/index.html)

## 组件使用

    S.use('gallery/imgProxy/1.0/index', function (S, ImgProxy) {
    	var url = "http://img04.taobaocdn.com/bao/uploaded/i4/T1fQpaXtBXXXb1upjX.jpg";
    	Imgproxy.load(url,
    	    function(imgBase64) {
    	        S.log(imgBase64);
    	    },
    	    function(msg) {
    	        S.log("fail to load img: " + msg);
    	    }
    	);
    })

## 注意事项

* flash跨域引入图片时，需要有crossdomain.xml，且引用图片的站点位于其白名单中 e.g. http://img04.taobaocdn.com/crossdomain.xml
* 使用组件时，会在window对象下生成一个全局变量window.imgProxy
