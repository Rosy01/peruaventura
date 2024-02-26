function inspiroResponsiveEmbeds(){let e,t,n,i;const s=document.querySelectorAll("body")[0];document.querySelectorAll("iframe").forEach(function(o){"wp-custom-header"!==o.parentElement.id?o.width&&o.height&&(e=parseFloat(o.width)/parseFloat(o.height),t=parseFloat(window.getComputedStyle(o.parentElement,null).width.replace("px","")),o.style.maxWidth="100%",o.style.maxHeight=Math.round(t/e).toString()+"px"):s.classList.contains("full-height-iframe-video")&&(o.hasAttribute("data-initial-width")||o.setAttribute("data-initial-width",o.width),o.hasAttribute("data-initial-height")||o.setAttribute("data-initial-height",o.height),n=o.getAttribute("data-initial-width"),i=o.getAttribute("data-initial-height"),window.innerWidth<1200?(o.width=window.innerHeight+window.innerWidth,o.height=window.innerWidth):(o.width=n,o.height=i))})}!function(e){const t=e("body"),n=t.find(".custom-header"),i=(n.find(".site-branding"),t.find("#site-navigation")),s=t.find("#scroll-to-content"),o=t.find("#content"),a=t.find("#secondary"),d=t.find(".entry-content"),r=(t.find(".format-quote blockquote"),t.hasClass("has-header-image")||t.hasClass("has-header-video"));t.hasClass("inspiro-front-page")||t.hasClass("home blog");let l,c,h,u=0;function p(){c=i.height(),h=i.outerHeight(),e("#wpadminbar").length&&(h+=e("#wpadminbar").outerHeight())}function g(){e(window).outerWidth()>=1?r||(n.css("padding-top",h),o.css("padding-top",h)):(n.css("padding-top","0"),o.css("padding-top",h))}function f(n){if(!a.length)return;if(!t.hasClass("has-sidebar")||t.hasClass("search")||t.hasClass("single-attachment")||t.hasClass("error404")||t.hasClass("inspiro-front-page"))return;const i=a.offset().top+(a.height()+28);d.find(n).each(function(){const t=e(this);t.offset().top>i?t.addClass("below-entry-meta"):t.removeClass("below-entry-meta")})}function m(){const e=document.createElement("div");let t;try{return!(!("backgroundAttachment"in e.style)||/iPad|iPhone|iPod/.test(navigator.userAgent)&&!window.MSStream)&&(e.style.backgroundAttachment="fixed",t="fixed"===e.style.backgroundAttachment)}catch(e){return!1}}e(document).ready(function(){t.addClass("inspiro-page-ready"),i.length&&p(),s.length&&(e("body").hasClass("admin-bar")&&(u-=32),i.length?u-=24:c=0,s.on("click",function(t){t.preventDefault(),e(window).scrollTo("#content",{duration:600,offset:{top:u-c}})})),inspiroResponsiveEmbeds(),g(),f("blockquote.alignleft, blockquote.alignright"),!0===m()&&(document.documentElement.className+=" background-fixed")}),i.length&&e(window).on("resize",function(){p(),g()}),e(window).on("resize",function(){inspiroResponsiveEmbeds(),clearTimeout(l),l=setTimeout(function(){f("blockquote.alignleft, blockquote.alignright")},300)}),e(window).on("load",function(){t.addClass("inspiro-page-loaded")}),e(document).on("wp-custom-header-video-loaded",function(){t.addClass("has-header-video"),e("#wp-custom-header-video").attr("autoplay",!0),e("#wp-custom-header-video").attr("playsinline",!0)})}(jQuery),function(e){"use strict";const t=e(document),n=e(window);e.fn.TopMenuMargin=function(){function t(){e(window).width();const t=e(".site-header");e("#main").css("paddingTop",t.outerHeight());e("#wpadminbar"),e(window).width(),e(window).height()}e(window).on("resize orientationchange",t),t()},e.fn.sideNav=function(){let i=!1;function s(){e(document.body).toggleClass("side-nav-open").addClass("side-nav-transitioning");const t=e("#slider").data("flexslider");t&&(e(document.body).hasClass("side-nav-open")?(i=t.playing,t.playing&&t.pause()):i&&t.play());let s=!1;e(".site").one("transitionend",function(){e(document.body).removeClass("side-nav-transitioning"),s=!0}),setTimeout(function(){s||e(document.body).removeClass("side-nav-transitioning"),n.trigger("resize")},230)}e(".navbar-toggle, .side-nav-overlay").on("click touchend",function(){e(document.body).hasClass("side-nav-transitioning")||(s(),e.fn.keepFocusInMobileSidebar())}),t.on("keyup",function(t){27===t.keyCode&&e(document.body).hasClass("side-nav-open")&&s()}),e(".side-nav__scrollable-container").on("touchstart",function(){const e=this.scrollTop;e<=0&&(this.scrollTop=1),e+this.offsetHeight>=this.scrollHeight&&(this.scrollTop=this.scrollHeight-this.offsetHeight-1)})},e.fn.sbSearch=function(){return t.on("keyup",function(t){27===t.keyCode&&e("#sb-search").hasClass("sb-search-open")&&e("#sb-search").removeClass("sb-search-open")}),this.each(function(){new UISearch(this)})},e.fn.keepFocusInSearchModal=function(){t.on("keydown",function(n){let i,s,o,a,d,r,l,c;e("#sb-search").hasClass("sb-search-open")&&(s="input, a, button",o=(i=t.find("#sb-search")).find(s),d=(o=Array.prototype.slice.call(o))[o.length-1],r=o[0],a=document.activeElement,l=9===n.keyCode,!(c=n.shiftKey)&&l&&d===a&&(n.preventDefault(),r.focus()),c&&l&&r===a&&(n.preventDefault(),d.focus()))})},e.fn.keepFocusInMobileSidebar=function(){t.on("keydown",function(n){let i,s,o,a,d,r,l,c;e(document.body).hasClass("side-nav-open")&&(s="input, a, button",o=(i=t.find("aside#side-nav")).find(s),d=(o=Array.prototype.slice.call(o))[o.length-1],r=o[0],a=document.activeElement,l=9===n.keyCode,!(c=n.shiftKey)&&l&&d===a&&(n.preventDefault(),r.focus()),c&&l&&r===a&&(n.preventDefault(),d.focus()))})},e(function(){e.fn.sideNav(),e("#sb-search").sbSearch(),e.fn.keepFocusInSearchModal(),e(".sf-menu").superfish({speed:"fast",animation:{height:"show"},animationOut:{height:"hide"}}),e(".site-header").headroom({tolerance:{up:0,down:0},offset:70}),e(".side-nav .navbar-nav li.menu-item-has-children > a .svg-icon").on("click",function(t){t.preventDefault();const n=e(this).closest("li"),i=n.find("> ul");i.is(":visible")?(i.slideUp(),n.removeClass("open")):(i.slideDown(),n.addClass("open"))})})}(jQuery),function(e){if(e.wp=e.wp||!1,!e.wp)return;if(!e.wp.customHeader)return;const t=e.wp.customHeader.BaseVideoHandler.extend({test:e=>"video/x-vimeo"===e.mimeType,ready(){const t=this;if("Vimeo"in e)t.loadVideo();else{const e=document.createElement("script");e.src="https://player.vimeo.com/api/player.js",e.onload=function(){t.loadVideo()},document.getElementsByTagName("head")[0].appendChild(e)}},loadVideo(){let e;const t=this;this._paused=!0,this.player=e=new Vimeo.Player(this.container,{autopause:!1,autoplay:!0,background:!0,byline:!1,height:this.settings.height,loop:!0,portrait:!1,title:!1,url:this.settings.videoUrl,width:this.settings.width,id:this.settings.id}),e.on("play",function(){t._paused=!1,t.trigger("play")}),e.on("pause",function(){t._paused=!0,t.trigger("pause")}),e.ready().then(function(){const n=t.container.getElementsByTagName("img")[0];n.src===t.settings.posterUrl&&t.container.removeChild(n),t.showControls(),e.getPaused().then(function(e){t._paused=e,e||t.trigger("play")})}),e.setVolume(0)},isPaused(){return this._paused},pause(){this.player.pause()},play(){this.player.play()}});e.wp.customHeader.BaseVideoHandler.extend({origin:"https://player.vimeo.com",test:e=>"video/x-vimeo"===e.mimeType,ready(){const t=this,n=this.settings.videoUrl.split("/").pop(),i=document.createElement("iframe");this._paused=!0,t.setVideo(i),i.id="wp-custom-header-video",i.src="https://player.vimeo.com/video/"+n+"?api=1&autopause=0&autoplay=0&background=1&badge=0&byline=0&loop=1&player_id="+i.id+"&portrait=0&title=0",this.iframe=i,e.addEventListener("message",function(e){let n;if(t.origin===e.origin){try{n=JSON.parse(e.data)}catch(e){return}"wp-custom-header-video"===n.player_id&&("ready"===n.event?(t.postMessage("addEventListener","pause"),t.postMessage("addEventListener","play"),t.postMessage("setVolume",0),t.play(),t.showControls()):"pause"===n.event?(t._paused=!0,t.trigger(n.event)):"play"===n.event&&(t._paused=!1,t.trigger(n.event)))}})},isPaused(){return this._paused},pause(){this.postMessage("pause")},play(){this.postMessage("play")},postMessage(e,t){const n=JSON.stringify({method:e,value:t});this.iframe.contentWindow.postMessage(n,this.origin)}});e.wp.customHeader.handlers.vimeo=new t}(window);