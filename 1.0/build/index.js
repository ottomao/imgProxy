/*
combined files : 

gallery/imgProxy/1.0/index

*/
/**
 * @fileoverview 
 * @author 加里 茅晓锋<xiaofeng.mxf@taobao.com>
 * @module imgProxy
 **/
KISSY.add('gallery/imgProxy/1.0/index',function (S, Node,Base) {
    var EMPTY = '';
    var $ = Node.all;
    /**
     * 
     * @class ImgProxy
     * @constructor
     * @extends Base
     */
    function ImgProxy(comConfig) {
        var self = this;
        //调用父类构造函数
        ImgProxy.superclass.constructor.call(self, comConfig);
    }
    S.extend(ImgProxy, Base, /** @lends ImgProxy.prototype*/{

    }, {ATTRS : /** @lends ImgProxy*/{

    }});
    return ImgProxy;
}, {requires:['node', 'base']});




