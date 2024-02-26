if("undefined"==typeof jQuery)throw new Error("Bootstrap's JavaScript requires jQuery");!function(){"use strict";var t=jQuery.fn.jquery.split(" ")[0].split(".");if(t[0]<2&&t[1]<9||1==t[0]&&9==t[1]&&t[2]<1||3<t[0])throw new Error("Bootstrap's JavaScript requires jQuery version 1.9.1 or higher, but lower than version 4")}(),function(n){"use strict";function r(t,e){this.options=e,this.$body=n(document.body),this.$html=n(document.documentElement),this.$element=n(t),this.$dialog=this.$element.find(".premium-modal-box-modal-dialog"),this.$backdrop=null,this.isShown=null,this.originalBodyPad=null,this.scrollbarWidth=0,this.ignoreBackdropClick=!1,this.options.remote&&this.$element.find(".premium-modal-box-modal-content").load(this.options.remote,n.proxy(function(){this.$element.trigger("loaded.bs.modal")},this))}function s(i,s){return this.each(function(){var t=n(this),e=t.data("bs.modal"),o=n.extend({},r.DEFAULTS,t.data(),"object"==typeof i&&i);e||t.data("bs.modal",e=new r(this,o)),"string"==typeof i?e[i](s):o.show&&e.show(s)})}r.VERSION="3.3.7",r.TRANSITION_DURATION=300,r.BACKDROP_TRANSITION_DURATION=150,r.DEFAULTS={backdrop:!0,keyboard:!0,show:!0},r.prototype.toggle=function(t){return this.isShown?this.hide():this.show(t)},r.prototype.show=function(e){var o=this,t=n.Event("show.bs.modal",{relatedTarget:e});this.$element.trigger(t),this.isShown||t.isDefaultPrevented()||(this.isShown=!0,this.checkScrollbar(),this.setScrollbar(),this.$body.addClass("premium-modal-open"),this.$html.addClass("premium-modal-open"),this.escape(),this.resize(),this.$element.on("click.dismiss.bs.modal",'[data-dismiss="premium-modal"]',n.proxy(this.hide,this)),this.$dialog.on("mousedown.dismiss.bs.modal",function(){o.$element.one("mouseup.dismiss.bs.modal",function(t){n(t.target).is(o.$element)&&(o.ignoreBackdropClick=!0)})}),this.backdrop(function(){var t=n.support.transition&&o.$element.hasClass("premium-modal-fade"),t=(o.$element.parent().length||o.$element.appendTo(o.$body),o.$element.show().scrollTop(0),o.adjustDialog(),t&&o.$element[0].offsetWidth,o.$element.addClass("premium-in"),o.enforceFocus(),n.Event("shown.bs.modal",{relatedTarget:e}));o.$element.trigger("focus").trigger(t)}))},r.prototype.hide=function(t){t&&t.preventDefault(),t=n.Event("hide.bs.modal"),this.$element.trigger(t),this.isShown&&!t.isDefaultPrevented()&&(this.isShown=!1,this.escape(),this.resize(),n(document).off("focusin.bs.modal"),this.$element.removeClass("premium-in").off("click.dismiss.bs.modal").off("mouseup.dismiss.bs.modal"),this.$dialog.off("mousedown.dismiss.bs.modal"),this.hideModal())},r.prototype.enforceFocus=function(){n(document).off("focusin.bs.modal").on("focusin.bs.modal",n.proxy(function(t){document===t.target||this.$element[0]===t.target||this.$element.has(t.target).length||this.$element.trigger("focus")},this))},r.prototype.escape=function(){this.isShown&&this.options.keyboard?this.$element.on("keydown.dismiss.bs.modal",n.proxy(function(t){27==t.which&&this.hide()},this)):this.isShown||this.$element.off("keydown.dismiss.bs.modal")},r.prototype.resize=function(){this.isShown?n(window).on("resize.bs.modal",n.proxy(this.handleUpdate,this)):n(window).off("resize.bs.modal")},r.prototype.hideModal=function(){var t=this;this.$element.hide(),this.backdrop(function(){t.$body.removeClass("premium-modal-open"),t.$html.removeClass("premium-modal-open"),t.resetAdjustments(),t.resetScrollbar(),t.$element.trigger("hidden.bs.modal")})},r.prototype.removeBackdrop=function(){this.$backdrop&&this.$backdrop.remove(),this.$backdrop=null},r.prototype.backdrop=function(t){var e,o=this.$element.hasClass("premium-modal-fade")?"premium-modal-fade":"";this.isShown&&this.options.backdrop?(e=n.support.transition&&o,this.$backdrop=n(document.createElement("div")).addClass("premium-modal-backdrop "+o),this.$element.on("click.dismiss.bs.modal",n.proxy(function(t){this.ignoreBackdropClick?this.ignoreBackdropClick=!1:t.target===t.currentTarget&&("static"==this.options.backdrop?this.$element[0].focus():this.hide())},this)),e&&this.$backdrop[0].offsetWidth,this.$backdrop.addClass("premium-in")):!this.isShown&&this.$backdrop&&(this.$backdrop.removeClass("premium-in"),this.removeBackdrop()),t&&t()},r.prototype.handleUpdate=function(){this.adjustDialog()},r.prototype.adjustDialog=function(){var t=this.$element[0].scrollHeight>document.documentElement.clientHeight;this.$element.css({paddingLeft:!this.bodyIsOverflowing&&t?this.scrollbarWidth:"",paddingRight:this.bodyIsOverflowing&&!t?this.scrollbarWidth:""})},r.prototype.resetAdjustments=function(){this.$element.css({paddingLeft:"",paddingRight:""})},r.prototype.checkScrollbar=function(){var t,e=window.innerWidth;e||(e=(t=document.documentElement.getBoundingClientRect()).right-Math.abs(t.left)),this.bodyIsOverflowing=document.body.clientWidth<e,this.scrollbarWidth=this.measureScrollbar()},r.prototype.setScrollbar=function(){parseInt(this.$body.css("padding-right")||0,10),this.originalBodyPad=document.body.style.paddingRight||""},r.prototype.resetScrollbar=function(){this.$body.css("padding-right",this.originalBodyPad)},r.prototype.measureScrollbar=function(){var t=document.createElement("div"),e=(t.className="premium-modal-scrollbar-measure",this.$body.append(t),t.offsetWidth-t.clientWidth);return this.$body[0].removeChild(t),e};var t=n.fn.modal;n.fn.modal=s,n.fn.modal.Constructor=r,n.fn.modal.noConflict=function(){return n.fn.modal=t,this};var a=0;n(document).on("click.bs.modal.data-api",'[data-toggle="premium-modal"]',function(t){var o=n(this),e=o.attr("href"),i=n(o.attr("data-target")||e&&e.replace(/.*(?=#[^\s]+$)/,"")),e=i.data("bs.modal")?"toggle":n.extend({remote:!/#/.test(e)&&e},i.data(),o.data());o.is("a")&&t.preventDefault(),i.one("show.bs.modal",function(t){var e=i.find(".soundcloud-iframe");i.find(".soundcloud-iframe").remove(),i.find(".premium-modal-box-modal-body").append(e),n(this).find("iframe").each(function(t,e){var o=n(e).attr("src");n(e).attr("data-src",o)}),0===a&&t.isDefaultPrevented()||i.one("hidden.bs.modal",function(){n(this).find("iframe").each(function(t,e){var o=null,o=(0<n(e).closest(".premium-video-box-video-container").length?n(e).closest(".premium-video-box-video-container"):n(e)).attr("data-src");n(e).attr("src",o)});n(this).find(".premium-video-box-container").data("type");0<n(this).find("video").length&&n(this).find("video").get(0).pause(),a++,o.is(":visible")&&o.trigger("focus")})}),s.call(i,e,this)})}(jQuery);