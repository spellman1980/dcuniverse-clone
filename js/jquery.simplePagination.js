!function(e){var a={init:function(t){var s=e.extend({items:1,itemsOnPage:1,pages:0,displayedPages:5,edges:2,currentPage:1,hrefText:"#page-",prevText:"Prev",nextText:"Next",ellipseText:"&hellip;",cssStyle:"light-theme",selectOnClick:!0,onPageClick:function(e){},onInit:function(){}},t||{}),n=this;return s.pages=s.pages?s.pages:Math.ceil(s.items/s.itemsOnPage)?Math.ceil(s.items/s.itemsOnPage):1,s.currentPage=s.currentPage-1,s.halfDisplayed=s.displayedPages/2,this.each(function(){n.addClass(s.cssStyle).data("pagination",s),a._draw.call(n)}),s.onInit(),this},selectPage:function(e){return a._selectPage.call(this,e-1),this},prevPage:function(){var e=this.data("pagination");return e.currentPage>0&&a._selectPage.call(this,e.currentPage-1),this},nextPage:function(){var e=this.data("pagination");return e.currentPage<e.pages-1&&a._selectPage.call(this,e.currentPage+1),this},destroy:function(){return this.empty(),this},redraw:function(){return a._draw.call(this),this},disable:function(){var e=this.data("pagination");return e.disabled=!0,this.data("pagination",e),a._draw.call(this),this},enable:function(){var e=this.data("pagination");return e.disabled=!1,this.data("pagination",e),a._draw.call(this),this},_draw:function(){var e,t=this,s=t.data("pagination"),n=a._getInterval(s);if(a.destroy.call(this),s.prevText&&a._appendItem.call(this,s.currentPage-1,{text:s.prevText,classes:"prev"}),n.start>0&&s.edges>0){var i=Math.min(s.edges,n.start);for(e=0;e<i;e++)a._appendItem.call(this,e);s.edges<n.start&&s.ellipseText&&t.append('<span class="ellipse">'+s.ellipseText+"</span>")}for(e=n.start;e<n.end;e++)a._appendItem.call(this,e);if(n.end<s.pages&&s.edges>0)for(s.pages-s.edges>n.end&&s.ellipseText&&t.append('<span class="ellipse">'+s.ellipseText+"</span>"),e=Math.max(s.pages-s.edges,n.end);e<s.pages;e++)a._appendItem.call(this,e);s.nextText&&a._appendItem.call(this,s.currentPage+1,{text:s.nextText,classes:"next"})},_getInterval:function(e){return{start:Math.ceil(e.currentPage>e.halfDisplayed?Math.max(Math.min(e.currentPage-e.halfDisplayed,e.pages-e.displayedPages),0):0),end:Math.ceil(e.currentPage>e.halfDisplayed?Math.min(e.currentPage+e.halfDisplayed,e.pages):Math.min(e.displayedPages,e.pages))}},_appendItem:function(t,s){var n,i,l=this,r=l.data("pagination");t=t<0?0:t<r.pages?t:r.pages-1,n=e.extend({text:t+1,classes:""},s||{}),t==r.currentPage||r.disabled?i=e('<span class="current">'+n.text+"</span>"):(i=e('<a href="'+r.hrefText+(t+1)+'" class="page-link">'+n.text+"</a>")).click(function(){a._selectPage.call(l,t)}),n.classes&&i.addClass(n.classes),l.append(i)},_selectPage:function(e){var t=this.data("pagination");t.currentPage=e,t.selectOnClick?(t.onPageClick(e+1),a._draw.call(this)):t.onPageClick(e+1)}};e.fn.pagination=function(t){return a[t]&&"_"!=t.charAt(0)?a[t].apply(this,Array.prototype.slice.call(arguments,1)):"object"!=typeof t&&t?void e.error("Method "+t+" does not exist on jQuery.pagination"):a.init.apply(this,arguments)}}(jQuery);