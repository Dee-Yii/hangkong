!function(n){n.fn.tabs=function(t){var e=n.extend({btn:".tab_btn",page:".tab_content",current:"active"},t);return this.each(function(){var t=n(this);t.find(e.btn).on("click",function(){var i=n(this),r=i.index();return!i.hasClass(e.current)&&(i.addClass(e.current).siblings().removeClass(e.current),void t.find(e.page).eq(r).show().siblings().hide())})})}}(jQuery);