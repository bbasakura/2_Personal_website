// build time:Fri Dec 20 2019 17:33:13 GMT+0800 (GMT+08:00)
window._bd_share_main.F.module("view/image_view",function(e,t,i){var n=e("base/tangram").T,o=e("base/class").Class,s=e("conf/const"),r=e("view/view_base");t.View=o.create(function(e){function t(){var t=e.tag||"";n("img").each(function(e,r){if(!t||n(r).attr(s.CONFIG_TAG_ATTR)==t){if(1==n(r).attr("data-bd-imgshare-binded"))return;n(r).on("mouseenter",i).on("mouseleave",o),n(r).attr("data-bd-imgshare-binded",1)}})}function i(e){var t=e.target;r(t)&&(y.element=t,y.start())}function o(){y.abort()}function r(t){var i=!0;return e.bdMinHeight&&e.bdMinHeight>t.offsetHeight?i=!1:e.bdMinWidth&&e.bdMinWidth>t.offsetWidth?i=!1:(t.offsetWidth<100||t.offsetHeight<100)&&(i=!1),i}function a(e){e&&u(function(){l(e),g.show(),v=!1,w=e})}function h(){v||g.hide()}function f(){return g.find(".bdimgshare-icon")}function l(t){if("list"==e.viewType)for(var i={16:{lbl:53,pright:8,item:18},24:{lbl:57,pright:8,item:28},32:{lbl:61,pright:8,item:38}},o=i[e.viewSize],s=Math.floor((t.offsetWidth-o.lbl-o.pright-10)/o.item),r=f(),a=0,h=r.length-1;a<h;a++)a<s-1?n(r[a]).show():n(r[a]).hide();var l={width:g.offsetWidth,height:g.offsetHeight},c={width:t.offsetWidth,height:t.offsetHeight},u=d(n(t).offset(),c,l),m={position:"absolute",top:u.top+"px",left:u.left+"px"};"list"==e.viewType&&(m.width=c.width+"px"),g.css(m)}function d(t,i,n){return"list"==e.viewType?{top:t.top+("bottom"==e.viewPos?i.height-n.height:0),left:t.left}:"collection"==e.viewType?{top:t.top+(e.viewPos.toLowerCase().indexOf("bottom")>-1?i.height-n.height-5:5),left:t.left+(e.viewPos.toLowerCase().indexOf("left")>-1?5:i.width-n.width-5)}:{top:t.top+("bottom"==e.viewPos?i.height-n.height:0),left:t.left+(i.width-n.width)}}function c(){var t=["<div id='#{id}' class='sr-bdimgshare sr-bdimgshare-#{type} sr-bdimgshare-#{size} sr-bdimgshare-#{color}' style='height:#{height}px;line-height:#{lineHeight}px;font-size:#{fontSize}px;width:#{width}px;display:none;'>","<div class='bdimgshare-bg'></div>","<div class='bdimgshare-content bdsharebuttonbox bdshare-button-style#{style}-#{size}'>","<label class='bdimgshare-lbl'>#{text}</label>","#{list}","</div>","</div>"].join(""),i="<a href='#' onclick='return false;' class='bds_#{icon}' data-cmd='#{icon}' hidefocus></a>",o="list"==e.viewType,s=[];o&&n.each(e.viewList,function(e,t){s.push(n.string(i).format({icon:t}))}),s.push(n.string(i).format({icon:"more"}));var r={16:"36",24:"42",32:"48"},a={16:"33",24:"39",32:"45"},h={16:"60",24:"71",32:"82"},f={16:"12",24:"14",32:"14"},l=n.string(t).format({id:b,text:e.viewText||(o?"图片分享":"分享"),type:e.viewType,style:e.viewStyle,size:e.viewSize,color:e.viewColor,width:o?"auto":h[e.viewSize],height:(o?r:a)[e.viewSize],lineHeight:(o?r:a)[e.viewSize]-10,fontSize:f[e.viewSize],list:s.join("")});n("body").insertHTML("beforeEnd",l),m._entities=g=n("#"+b),g.on("mouseleave",function(){y.abort()}).on("mouseenter",function(){y.clearAbort()})}function u(t){if(e.bdCustomStyle){var i=document.createElement("link");i.href=e.bdCustomStyle,i.rel="styleSheet",i.type="text/css",i.onLoad=function(){t&&t()},document.getElementsByTagName("head")[0].appendChild(i)}else window._bd_share_main.F.use(["imgshare.css","share_style0_"+e.viewSize+".css"],function(){t&&t()})}var m=this,b="bdimgshare_"+(new Date).getTime(),g=null,v=!1,w=null,p=function(e){function t(){s&&(s=clearTimeout(s)),o||(o=setTimeout(function(){e.startFn&&e.startFn(),o=!1},e.time))}function i(){o&&(o=clearTimeout(o)),s||(s=setTimeout(function(){e.abortFn&&e.abortFn(),s=!1},e.time))}var n=this,o=!1,s=!1;n.clearAbort=function(){s&&(s=clearTimeout(s))},n.start=t,n.abort=i},y=new p({time:200,startFn:function(){a(y.element)},abortFn:function(){h()}});m.render=function(e){t(),c()},m._init=function(){},m._keepBarVisible=function(){y.clearAbort(),v=!0},m._getImageSrc=function(){return w.src},m._distory=function(){g.remove();var t=e.tag||"";n("img").each(function(e,r){t&&n(r).attr(s.CONFIG_TAG_ATTR)!=t||(n(r).off("mouseenter",i).off("mouseleave",o),n(r).removeAttr("data-bd-imgshare-binded"))})}},r.ViewBase)});
//rebuild by neat 