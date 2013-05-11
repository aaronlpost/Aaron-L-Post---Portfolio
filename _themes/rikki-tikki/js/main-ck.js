$(document).ready(function() {
	if ($('#nav').css('text-align') !== 'center') {
	$('.parallax').mousemove(
		function(e){
			/* Work out mouse position */
			var offset = $(this).offset();
			var xPos = e.pageX - offset.left;

			/* Get percentage positions */
			var mouseXPercent = Math.round(xPos / $(this).width() * 100);

			/* Position Each Layer */
			$(this).children('img.slide').each(
				function(){
					var diffX = $('.parallax').width() - $(this).width();

					var myX = diffX * (mouseXPercent / 100); //) / 100) / 2;

					var cssObj = {
						'left': myX + 'px'
					};
					$(this).css(cssObj);
					$(this).animate({left: myX},{duration: 50, queue: false, easing: 'linear'});

				}
			);
		}
	);

	$('.parallax').mouseenter(
		function(){
			$(this).children('div').fadeOut(
				300
			);
		}
	);

	$('.parallax').mouseleave(
		function(){
			$(this).children('div').fadeIn(
				300
			);
		}
	);
	}
 });


/* **********************************************
     Begin jquery.qtip.min.js
********************************************** */

/* qTip2 v2.0.1-92- tips modal viewport svg imagemap ie6 | qtip2.com | Licensed MIT, GPL | Tue May 07 2013 18:02:43 */
(function(t,e,s){(function(t){"use strict";"function"==typeof define&&define.amd?define(["jquery"],t):jQuery&&!jQuery.fn.qtip&&t(jQuery)})(function(o){function n(t,e,i,s){this.id=i,this.target=t,this.tooltip=E,this.elements=elements={target:t},this._id=X+"-"+i,this.timers={img:{}},this.options=e,this.plugins={},this.cache=cache={event:{},target:o(),disabled:S,attr:s,onTooltip:S,lastClass:""},this.rendered=this.destroyed=this.disabled=this.waiting=this.hiddenDuringWait=this.positioning=this.triggering=S}function r(t){return t===E||"object"!==o.type(t)}function a(t){return!(o.isFunction(t)||t&&t.attr||t.length||"object"===o.type(t)&&(t.jquery||t.then))}function h(t){var e,i,s,n;return r(t)?S:(r(t.metadata)&&(t.metadata={type:t.metadata}),"content"in t&&(e=t.content,r(e)||e.jquery||e.done?e=t.content={text:i=a(e)?S:e}:i=e.text,"ajax"in e&&(s=e.ajax,n=s&&s.once!==S,delete e.ajax,e.text=function(t,e){var r=i||o(this).attr(e.options.content.attr)||"Loading...",a=o.ajax(o.extend({},s,{context:e})).then(s.success,E,s.error).then(function(t){return t&&n&&e.set("content.text",t),t},function(t,i,s){e.destroyed||0===t.status||e.set("content.text",i+": "+s)});return n?r:(e.set("content.text",r),a)}),"title"in e&&(r(e.title)||(e.button=e.title.button,e.title=e.title.text),a(e.title||S)&&(e.title=S))),"position"in t&&r(t.position)&&(t.position={my:t.position,at:t.position}),"show"in t&&r(t.show)&&(t.show=t.show.jquery?{target:t.show}:t.show===W?{ready:W}:{event:t.show}),"hide"in t&&r(t.hide)&&(t.hide=t.hide.jquery?{target:t.hide}:{event:t.hide}),"style"in t&&r(t.style)&&(t.style={classes:t.style}),o.each(N,function(){this.sanitize&&this.sanitize(t)}),t)}function l(t,e){for(var i,s=0,o=t,n=e.split(".");o=o[n[s++]];)n.length>s&&(i=o);return[i||t,n.pop()]}function c(t,e){var i,s,o;for(i in this.checks)for(s in this.checks[i])(o=RegExp(s,"i").exec(t))&&(e.push(o),("builtin"===i||this.plugins[i])&&this.checks[i][s].apply(this.plugins[i]||this,e))}function p(t){return H.concat("").join(t?"-"+t+" ":" ")}function d(t){if(this.tooltip.hasClass(te))return S;clearTimeout(this.timers.show),clearTimeout(this.timers.hide);var e=o.proxy(function(){this.toggle(W,t)},this);this.options.show.delay>0?this.timers.show=setTimeout(e,this.options.show.delay):e()}function u(t){if(this.tooltip.hasClass(te))return S;var e=o(t.relatedTarget),i=e.closest(G)[0]===this.tooltip[0],s=e[0]===this.options.show.target[0];if(clearTimeout(this.timers.show),clearTimeout(this.timers.hide),this!==e[0]&&"mouse"===this.options.position.target&&i||this.options.hide.fixed&&/mouse(out|leave|move)/.test(t.type)&&(i||s))try{t.preventDefault(),t.stopImmediatePropagation()}catch(n){}else{var r=o.proxy(function(){this.toggle(S,t)},this);this.options.hide.delay>0?this.timers.hide=setTimeout(r,this.options.hide.delay):r()}}function f(t){return this.tooltip.hasClass(te)||!this.options.hide.inactive?S:(clearTimeout(this.timers.inactive),this.timers.inactive=setTimeout(o.proxy(function(){this.hide(t)},this),this.options.hide.inactive),s)}function g(t){this.rendered&&this.tooltip[0].offsetWidth>0&&this.reposition(t)}function m(t,i,s){o(e.body).delegate(t,(i.split?i:i.join(re+" "))+re,function(){var t=T.api[o.attr(this,Y)];t&&s.apply(t,arguments)})}function v(t,i,s){var r,a,l,c,p,d=o(e.body),u=t[0]===e?d:t,f=t.metadata?t.metadata(s.metadata):E,g="html5"===s.metadata.type&&f?f[s.metadata.name]:E,m=t.data(s.metadata.name||"qtipopts");try{m="string"==typeof m?o.parseJSON(m):m}catch(v){}if(c=o.extend(W,{},T.defaults,s,"object"==typeof m?h(m):E,h(g||f)),a=c.position,c.id=i,"boolean"==typeof c.content.text){if(l=t.attr(c.content.attr),c.content.attr===S||!l)return S;c.content.text=l}if(a.container.length||(a.container=d),a.target===S&&(a.target=u),c.show.target===S&&(c.show.target=u),c.show.solo===W&&(c.show.solo=a.container.closest("body")),c.hide.target===S&&(c.hide.target=u),c.position.viewport===W&&(c.position.viewport=a.container),a.container=a.container.eq(0),a.at=new j(a.at,W),a.my=new j(a.my),t.data(X))if(c.overwrite)t.qtip("destroy");else if(c.overwrite===S)return S;return t.attr($,i),c.suppress&&(p=t.attr("title"))&&t.removeAttr("title").attr(ie,p).attr("title",""),r=new n(t,c,i,!!l),t.data(X,r),t.one("remove.qtip-"+i+" removeqtip.qtip-"+i,function(){var t;(t=o(this).data(X))&&t.destroy()}),r}function y(t){return t.charAt(0).toUpperCase()+t.slice(1)}function b(t,e){var i,o,n,r=e.charAt(0).toUpperCase()+e.slice(1),a=(e+" "+ve.join(r+" ")+r).split(" ");if(me[e])return t.css(me[e]);for(n in a)if(i=a[n],(o=t.css(i))!==s)return me[e]=i,o}function w(t,e){return parseInt(b(t,e),10)}function x(t,e){this._ns="tip",this.options=e,this.offset=e.offset,this.size=[e.width,e.height],this.init(this.qtip=t)}function _(t,e){this.options=e,this._ns="-modal",this.init(this.qtip=t)}function q(t){this._ns="ie6",this.init(this.qtip=t)}var T,C,j,z,M,W=!0,S=!1,E=null,O="x",R="y",I="width",k="height",L="top",B="left",V="bottom",A="right",D="center",F="flipinvert",P="shift",N={},X="qtip",$="data-hasqtip",Y="data-qtip-id",H=["ui-widget","ui-tooltip"],G="."+X,U="click dblclick mousedown mouseup mousemove mouseleave mouseenter".split(" "),Q=X+"-fixed",J=X+"-default",K=X+"-focus",Z=X+"-hover",te=X+"-disabled",ee="_replacedByqTip",ie="oldtitle";BROWSER={ie:function(){for(var t=3,i=e.createElement("div");(i.innerHTML="<!--[if gt IE "+ ++t+"]><i></i><![endif]-->")&&i.getElementsByTagName("i")[0];);return t>4?t:0/0}(),iOS:parseFloat((""+(/CPU.*OS ([0-9_]{1,5})|(CPU like).*AppleWebKit.*Mobile/i.exec(navigator.userAgent)||[0,""])[1]).replace("undefined","3_2").replace("_",".").replace("_",""))||S},C=n.prototype,C.render=function(t){if(this.rendered||this.destroyed)return this;var e=this,i=this.options,s=this.cache,n=this.elements,r=i.content.text,a=i.content.title,h=i.content.button,l=i.position,c="."+this._id+" ",p=[];return o.attr(this.target[0],"aria-describedby",this._id),this.tooltip=n.tooltip=tooltip=o("<div/>",{id:this._id,"class":[X,J,i.style.classes,X+"-pos-"+i.position.my.abbrev()].join(" "),width:i.style.width||"",height:i.style.height||"",tracking:"mouse"===l.target&&l.adjust.mouse,role:"alert","aria-live":"polite","aria-atomic":S,"aria-describedby":this._id+"-content","aria-hidden":W}).toggleClass(te,this.disabled).attr(Y,this.id).data(X,this).appendTo(l.container).append(n.content=o("<div />",{"class":X+"-content",id:this._id+"-content","aria-atomic":W})),this.rendered=-1,this.positioning=W,a&&(this._createTitle(),o.isFunction(a)||p.push(this._updateTitle(a,S))),h&&this._createButton(),o.isFunction(r)||p.push(this._updateContent(r,S)),this.rendered=W,this._setWidget(),o.each(i.events,function(t,e){o.isFunction(e)&&tooltip.bind(("toggle"===t?["tooltipshow","tooltiphide"]:["tooltip"+t]).join(c)+c,e)}),o.each(N,function(t){var i;"render"===this.initialize&&(i=this(e))&&(e.plugins[t]=i)}),this._assignEvents(),o.when.apply(o,p).then(function(){e._trigger("render"),e.positioning=S,e.hiddenDuringWait||!i.show.ready&&!t||e.toggle(W,s.event,S),e.hiddenDuringWait=S}),T.api[this.id]=this,this},C.destroy=function(t){function e(){if(!this.destroyed){this.destroyed=W;var t=this.target,e=t.attr(ie);this.rendered&&this.tooltip.stop(1,0).find("*").remove().end().remove(),o.each(this.plugins,function(){this.destroy&&this.destroy()}),clearTimeout(this.timers.show),clearTimeout(this.timers.hide),this._unassignEvents(),t.removeData(X).removeAttr(Y).removeAttr("aria-describedby"),this.options.suppress&&e&&t.attr("title",e).removeAttr(ie),this._unbind(t),this.options=this.elements=this.cache=this.timers=this.plugins=this.mouse=E,delete T.api[this.id]}}return this.destroyed?this.target:(t!==W&&this.rendered?(tooltip.one("tooltiphidden",o.proxy(e,this)),!this.triggering&&this.hide()):e.call(this),this.target)},z=C.checks={builtin:{"^id$":function(t,e,i,s){var n=i===W?T.nextid:i,r=X+"-"+n;n!==S&&n.length>0&&!o("#"+r).length?(this._id=r,this.rendered&&(this.tooltip[0].id=this._id,this.elements.content[0].id=this._id+"-content",this.elements.title[0].id=this._id+"-title")):t[e]=s},"^prerender":function(t,e,i){i&&!this.rendered&&this.render(this.options.show.ready)},"^content.text$":function(t,e,i){this._updateContent(i)},"^content.attr$":function(t,e,i,s){this.options.content.text===this.target.attr(s)&&this._updateContent(this.target.attr(i))},"^content.title$":function(t,e,i){return i?(i&&!this.elements.title&&this._createTitle(),this._updateTitle(i),s):this._removeTitle()},"^content.button$":function(t,e,i){this._updateButton(i)},"^content.title.(text|button)$":function(t,e,i){this.set("content."+e,i)},"^position.(my|at)$":function(t,e,i){"string"==typeof i&&(t[e]=new j(i,"at"===e))},"^position.container$":function(t,e,i){this.tooltip.appendTo(i)},"^show.ready$":function(t,e,i){i&&(!this.rendered&&this.render(W)||this.toggle(W))},"^style.classes$":function(t,e,i,s){this.tooltip.removeClass(s).addClass(i)},"^style.width|height":function(t,e,i){this.tooltip.css(e,i)},"^style.widget|content.title":function(){this._setWidget()},"^style.def":function(t,e,i){this.tooltip.toggleClass(J,!!i)},"^events.(render|show|move|hide|focus|blur)$":function(t,e,i){tooltip[(o.isFunction(i)?"":"un")+"bind"]("tooltip"+e,i)},"^(show|hide|position).(event|target|fixed|inactive|leave|distance|viewport|adjust)":function(){var t=this.options.position;tooltip.attr("tracking","mouse"===t.target&&t.adjust.mouse),this._unassignEvents(),this._assignEvents()}}},C.get=function(t){if(this.destroyed)return this;var e=l(this.options,t.toLowerCase()),i=e[0][e[1]];return i.precedance?i.string():i};var se=/^position\.(my|at|adjust|target|container|viewport)|style|content|show\.ready/i,oe=/^prerender|show\.ready/i;C.set=function(t,e){if(this.destroyed)return this;var i,n=this.rendered,r=S,a=this.options;return this.checks,"string"==typeof t?(i=t,t={},t[i]=e):t=o.extend({},t),o.each(t,function(e,i){if(!n&&!oe.test(e))return delete t[e],s;var h,c=l(a,e.toLowerCase());h=c[0][c[1]],c[0][c[1]]=i&&i.nodeType?o(i):i,r=se.test(e)||r,t[e]=[c[0],c[1],i,h]}),h(a),this.positioning=W,o.each(t,o.proxy(c,this)),this.positioning=S,this.rendered&&this.tooltip[0].offsetWidth>0&&r&&this.reposition("mouse"===a.position.target?E:this.cache.event),this},C._update=function(t,e,i){var s=this,n=this.cache;return this.rendered&&t?(o.isFunction(t)&&(t=t.call(this.elements.target,n.event,this)||""),o.isFunction(t.then)?(n.waiting=W,t.then(function(t){return n.waiting=S,s._update(t,e,i)},E,function(t){return s._update(t,e,i)})):t===S||!t&&""!==t?S:(t.jquery&&t.length>0?e.empty().append(t.css({display:"block"})):e.html(t),n.waiting=W,e.imagesLoaded().done(function(t){n.waiting=S,i!==S&&s.rendered&&s.tooltip[0].offsetWidth>0&&s.reposition(n.event,!t.length)}).promise())):S},C._updateContent=function(t,e){this._update(t,this.elements.content,e)},C._updateTitle=function(t,e){this._update(t,this.elements.title,e)===S&&this._removeTitle(S)},C._createTitle=function(){var t=this.elements,e=this._id+"-title";t.titlebar&&this._removeTitle(),t.titlebar=o("<div />",{"class":X+"-titlebar "+(this.options.style.widget?p("header"):"")}).append(t.title=o("<div />",{id:e,"class":X+"-title","aria-atomic":W})).insertBefore(t.content).delegate(".qtip-close","mousedown keydown mouseup keyup mouseout",function(t){o(this).toggleClass("ui-state-active ui-state-focus","down"===t.type.substr(-4))}).delegate(".qtip-close","mouseover mouseout",function(t){o(this).toggleClass("ui-state-hover","mouseover"===t.type)}),this.options.content.button&&this._createButton()},C._removeTitle=function(t){var e=this.elements;e.title&&(e.titlebar.remove(),e.titlebar=e.title=e.button=E,t!==S&&this.reposition())},C.reposition=function(i,s){if(!this.rendered||this.positioning||this.destroyed)return this;this.positioning=W;var n,r,a=this.cache,h=this.tooltip,l=this.options.position,c=l.target,p=l.my,d=l.at,u=l.viewport,f=l.container,g=l.adjust,m=g.method.split(" "),v=h.outerWidth(S),y=h.outerHeight(S),b=0,w=0,x=h.css("position"),_={left:0,top:0},q=h[0].offsetWidth>0,T=i&&"scroll"===i.type,C=o(t),j=this.mouse;if(o.isArray(c)&&2===c.length)d={x:B,y:L},_={left:c[0],top:c[1]};else if("mouse"===c&&(i&&i.pageX||a.event.pageX))d={x:B,y:L},i=!j||!j.pageX||!g.mouse&&i&&i.pageX?(!i||"resize"!==i.type&&"scroll"!==i.type?i&&i.pageX&&"mousemove"===i.type?i:(!g.mouse||this.options.show.distance)&&a.origin&&a.origin.pageX?a.origin:i:a.event)||i||a.event||j||{}:{pageX:j.pageX,pageY:j.pageY},"static"!==x&&(_=f.offset()),_={left:i.pageX-_.left,top:i.pageY-_.top},g.mouse&&T&&(_.left-=j.scrollX-C.scrollLeft(),_.top-=j.scrollY-C.scrollTop());else{if("event"===c&&i&&i.target&&"scroll"!==i.type&&"resize"!==i.type?a.target=o(i.target):"event"!==c&&(a.target=o(c.jquery?c:elements.target)),c=a.target,c=o(c).eq(0),0===c.length)return this;c[0]===e||c[0]===t?(b=BROWSER.iOS?t.innerWidth:c.width(),w=BROWSER.iOS?t.innerHeight:c.height(),c[0]===t&&(_={top:(u||c).scrollTop(),left:(u||c).scrollLeft()})):N.imagemap&&c.is("area")?n=N.imagemap(this,c,d,N.viewport?m:S):N.svg&&c[0].ownerSVGElement?n=N.svg(this,c,d,N.viewport?m:S):(b=c.outerWidth(S),w=c.outerHeight(S),_=c.offset()),n&&(b=n.width,w=n.height,r=n.offset,_=n.position),_=this.reposition.offset(c,_,f),(BROWSER.iOS>3.1&&4.1>BROWSER.iOS||BROWSER.iOS>=4.3&&4.33>BROWSER.iOS||!BROWSER.iOS&&"fixed"===x)&&(_.left-=C.scrollLeft(),_.top-=C.scrollTop()),(!n||n&&n.adjustable!==S)&&(_.left+=d.x===A?b:d.x===D?b/2:0,_.top+=d.y===V?w:d.y===D?w/2:0)}return _.left+=g.x+(p.x===A?-v:p.x===D?-v/2:0),_.top+=g.y+(p.y===V?-y:p.y===D?-y/2:0),N.viewport?(_.adjusted=N.viewport(this,_,l,b,w,v,y),r&&_.adjusted.left&&(_.left+=r.left),r&&_.adjusted.top&&(_.top+=r.top)):_.adjusted={left:0,top:0},this._trigger("move",[_,u.elem||u],i)?(delete _.adjusted,s===S||!q||isNaN(_.left)||isNaN(_.top)||"mouse"===c||!o.isFunction(l.effect)?h.css(_):o.isFunction(l.effect)&&(l.effect.call(h,this,o.extend({},_)),h.queue(function(t){o(this).css({opacity:"",height:""}),BROWSER.ie&&this.style.removeAttribute("filter"),t()})),this.positioning=S,this):this},C.reposition.offset=function(t,i,s){function n(t,e){i.left+=e*t.scrollLeft(),i.top+=e*t.scrollTop()}if(!s[0])return i;var r,a,h,l,c=o(t[0].ownerDocument),p=!!BROWSER.ie&&"CSS1Compat"!==e.compatMode,d=s[0];do"static"!==(a=o.css(d,"position"))&&("fixed"===a?(h=d.getBoundingClientRect(),n(c,-1)):(h=o(d).position(),h.left+=parseFloat(o.css(d,"borderLeftWidth"))||0,h.top+=parseFloat(o.css(d,"borderTopWidth"))||0),i.left-=h.left+(parseFloat(o.css(d,"marginLeft"))||0),i.top-=h.top+(parseFloat(o.css(d,"marginTop"))||0),r||"hidden"===(l=o.css(d,"overflow"))||"visible"===l||(r=o(d)));while(d=d.offsetParent);return r&&(r[0]!==c[0]||p)&&n(r,1),i};var ne=(j=C.reposition.Corner=function(t,e){t=(""+t).replace(/([A-Z])/," $1").replace(/middle/gi,D).toLowerCase(),this.x=(t.match(/left|right/i)||t.match(/center/)||["inherit"])[0].toLowerCase(),this.y=(t.match(/top|bottom|center/i)||["inherit"])[0].toLowerCase(),this.forceY=!!e;var i=t.charAt(0);this.precedance="t"===i||"b"===i?R:O}).prototype;ne.invert=function(t,e){this[t]=this[t]===B?A:this[t]===A?B:e||this[t]},ne.string=function(){var t=this.x,e=this.y;return t===e?t:this.precedance===R||this.forceY&&"center"!==e?e+" "+t:t+" "+e},ne.abbrev=function(){var t=this.string().split(" ");return t[0].charAt(0)+(t[1]&&t[1].charAt(0)||"")},ne.clone=function(){return new j(this.string(),this.forceY)},C.toggle=function(t,i){var s=this.cache,n=this.options,r=this.tooltip;if(i){if(/over|enter/.test(i.type)&&/out|leave/.test(s.event.type)&&n.show.target.add(i.target).length===n.show.target.length&&r.has(i.relatedTarget).length)return this;s.event=o.extend({},i)}if(this.waiting&&!t&&(this.hiddenDuringWait=W),!this.rendered)return t?this.render(1):this;if(this.destroyed)return this;var a,h,l=t?"show":"hide",c=this.options[l],p=(this.options[t?"hide":"show"],this.options.position),d=this.options.content,u=this.tooltip.css("width"),f=this.tooltip[0].offsetWidth>0,g=t||1===c.target.length,m=!i||2>c.target.length||s.target[0]===i.target;return(typeof t).search("boolean|number")&&(t=!f),a=!r.is(":animated")&&f===t&&m,h=a?E:!!this._trigger(l,[90]),h!==S&&t&&this.focus(i),!h||a?this:(o.attr(r[0],"aria-hidden",!t),t?(s.origin=o.extend({},this.mouse),o.isFunction(d.text)&&this._updateContent(d.text,S),o.isFunction(d.title)&&this._updateTitle(d.title,S),!M&&"mouse"===p.target&&p.adjust.mouse&&(o(e).bind("mousemove."+X,this._storeMouse),M=W),u||r.css("width",r.outerWidth(S)),this.reposition(i,arguments[2]),u||r.css("width",""),c.solo&&("string"==typeof c.solo?o(c.solo):o(G,c.solo)).not(r).not(c.target).qtip("hide",o.Event("tooltipsolo"))):(clearTimeout(this.timers.show),delete s.origin,M&&!o(G+'[tracking="true"]:visible',c.solo).not(r).length&&(o(e).unbind("mousemove."+X),M=S),this.blur(i)),after=o.proxy(function(){t?(BROWSER.ie&&r[0].style.removeAttribute("filter"),r.css("overflow",""),"string"==typeof c.autofocus&&o(this.options.show.autofocus,r).focus(),this.options.show.target.trigger("qtip-"+this.id+"-inactive")):r.css({display:"",visibility:"",opacity:"",left:"",top:""}),this._trigger(t?"visible":"hidden")},this),c.effect===S||g===S?(r[l](),after()):o.isFunction(c.effect)?(r.stop(1,1),c.effect.call(r,this),r.queue("fx",function(t){after(),t()})):r.fadeTo(90,t?1:0,after),t&&c.target.trigger("qtip-"+this.id+"-inactive"),this)},C.show=function(t){return this.toggle(W,t)},C.hide=function(t){return this.toggle(S,t)},C.focus=function(t){if(!this.rendered||this.destroyed)return this;var e=o(G),i=this.tooltip,s=parseInt(i[0].style.zIndex,10),n=T.zindex+e.length;return i.hasClass(K)||this._trigger("focus",[n],t)&&(s!==n&&(e.each(function(){this.style.zIndex>s&&(this.style.zIndex=this.style.zIndex-1)}),e.filter("."+K).qtip("blur",t)),i.addClass(K)[0].style.zIndex=n),this},C.blur=function(t){return!this.rendered||this.destroyed?this:(this.tooltip.removeClass(K),this._trigger("blur",[this.tooltip.css("zIndex")],t),this)},C.disable=function(t){return this.destroyed?this:("boolean"!=typeof t&&(t=!(this.tooltip.hasClass(te)||this.disabled)),this.rendered&&this.tooltip.toggleClass(te,t).attr("aria-disabled",t),this.disabled=!!t,this)},C.enable=function(){return this.disable(S)},C._createButton=function(){var t=this,e=this.elements,i=e.tooltip,s=this.options.content.button,n="string"==typeof s,r=n?s:"Close tooltip";e.button&&e.button.remove(),e.button=s.jquery?s:o("<a />",{"class":"qtip-close "+(this.options.style.widget?"":X+"-icon"),title:r,"aria-label":r}).prepend(o("<span />",{"class":"ui-icon ui-icon-close",html:"&times;"})),e.button.appendTo(e.titlebar||i).attr("role","button").click(function(e){return i.hasClass(te)||t.hide(e),S})},C._updateButton=function(t){if(!this.rendered)return S;var e=this.elements.button;t?this._createButton():e.remove()},C._setWidget=function(){var t=this.options.style.widget,e=this.elements,i=e.tooltip,s=i.hasClass(te);i.removeClass(te),te=t?"ui-state-disabled":"qtip-disabled",i.toggleClass(te,s),i.toggleClass("ui-helper-reset "+p(),t).toggleClass(J,this.options.style.def&&!t),e.content&&e.content.toggleClass(p("content"),t),e.titlebar&&e.titlebar.toggleClass(p("header"),t),e.button&&e.button.toggleClass(X+"-icon",!t)},C._storeMouse=function(i){this.mouse={pageX:i.pageX,pageY:i.pageY,type:"mousemove",scrollX:t.pageXOffset||e.body.scrollLeft||e.documentElement.scrollLeft,scrollY:t.pageYOffset||e.body.scrollTop||e.documentElement.scrollTop}},C._bind=function(t,e,i,s,n){var r="."+this._id+(s?"-"+s:"");e.length&&o(t).bind((e.split?e:e.join(r+" "))+r,o.proxy(i,n||this))},C._unbind=function(t,e){o(t).unbind("."+this._id+(e?"-"+e:""))};var re="."+X;o(function(){m(G,["mouseenter","mouseleave"],function(t){var e="mouseenter"===t.type,i=o(t.currentTarget),s=o(t.relatedTarget||t.target),n=this.options;e?(this.focus(t),i.hasClass(Q)&&!i.hasClass(te)&&clearTimeout(this.timers.hide)):"mouse"===n.position.target&&n.hide.event&&n.show.target&&!s.closest(n.show.target[0]).length&&this.hide(t),i.toggleClass(Z,e)}),m("["+Y+"]",U,f)}),C._trigger=function(t,e,i){var s=o.Event("tooltip"+t);return s.originalEvent=i&&o.extend({},i)||this.cache.event||E,this.triggering=W,this.tooltip.trigger(s,[this].concat(e||[])),this.triggering=S,!s.isDefaultPrevented()},C._assignEvents=function(){var i=this.options,n=i.position,r=this.tooltip,a=i.show.target,h=i.hide.target,l=n.container,c=n.viewport,p=o(e),m=(o(e.body),o(t)),v=i.show.event?o.trim(""+i.show.event).split(" "):[],y=i.hide.event?o.trim(""+i.hide.event).split(" "):[],b=[];/mouse(out|leave)/i.test(i.hide.event)&&"window"===i.hide.leave&&this._bind(p,["mouseout","blur"],function(t){/select|option/.test(t.target.nodeName)||t.relatedTarget||this.hide(t)}),i.hide.fixed?h=h.add(r.addClass(Q)):/mouse(over|enter)/i.test(i.show.event)&&this._bind(h,"mouseleave",function(){clearTimeout(this.timers.show)}),(""+i.hide.event).indexOf("unfocus")>-1&&this._bind(l.closest("html"),["mousedown","touchstart"],function(t){var e=o(t.target),i=this.rendered&&!this.tooltip.hasClass(te)&&this.tooltip[0].offsetWidth>0,s=e.parents(G).filter(this.tooltip[0]).length>0;e[0]===this.target[0]||e[0]===this.tooltip[0]||s||this.target.has(e[0]).length||!i||this.hide(t)}),"number"==typeof i.hide.inactive&&(this._bind(a,"qtip-"+this.id+"-inactive",f),this._bind(h.add(r),T.inactiveEvents,f,"-inactive")),y=o.map(y,function(t){var e=o.inArray(t,v);return e>-1&&h.add(a).length===h.length?(b.push(v.splice(e,1)[0]),s):t}),this._bind(a,v,d),this._bind(h,y,u),this._bind(a,b,function(t){(this.tooltip[0].offsetWidth>0?u:d).call(this,t)}),"number"==typeof i.hide.distance&&this._bind(a.add(r),"mousemove",function(t){var e=this.cache.origin||{},i=this.options.hide.distance,s=Math.abs;(s(t.pageX-e.pageX)>=i||s(t.pageY-e.pageY)>=i)&&this.hide(t),this._storeMouse(t)}),"mouse"===n.target&&n.adjust.mouse&&(i.hide.event&&this._bind(a,["mouseenter","mouseleave"],function(t){this.cache.onTarget="mouseenter"===t.type}),this._bind(p,"mousemove",function(t){this.rendered&&this.cache.onTarget&&!this.tooltip.hasClass(te)&&this.tooltip[0].offsetWidth>0&&this.reposition(t||this.mouse)})),(n.adjust.resize||c.length)&&this._bind(o.event.special.resize?c:m,"resize",g),n.adjust.scroll&&this._bind(m.add(n.container),"scroll",g)},C._unassignEvents=function(){var i=[this.options.show.target[0],this.options.hide.target[0],this.rendered&&this.tooltip[0],this.options.position.container[0],this.options.position.viewport[0],this.options.position.container.closest("html")[0],t,e];this.rendered?this._unbind(o([]).pushStack(o.grep(i,function(t){return"object"==typeof t}))):o(i[0]).unbind("."+this._id+"-create")},T=o.fn.qtip=function(t,e,i){var n=(""+t).toLowerCase(),r=E,a=o.makeArray(arguments).slice(1),l=a[a.length-1],c=this[0]?o.data(this[0],X):E;return!arguments.length&&c||"api"===n?c:"string"==typeof t?(this.each(function(){var t=o.data(this,X);if(!t)return W;if(l&&l.timeStamp&&(t.cache.event=l),"option"!==n&&"options"!==n||!e)t[n]&&t[n].apply(t,a);else{if(!o.isPlainObject(e)&&i===s)return r=t.get(e),S;t.set(e,i)}}),r!==E?r:this):"object"!=typeof t&&arguments.length?s:(c=h(o.extend(W,{},t)),T.bind.call(this,c,l))},T.bind=function(t,e){return this.each(function(i){function n(t){function e(){c.render("object"==typeof t||r.show.ready),a.show.add(a.hide).unbind(l)}return c.disabled?S:(c.cache.event=o.extend({},t),c.cache.target=t?o(t.target):[s],r.show.delay>0?(clearTimeout(c.timers.show),c.timers.show=setTimeout(e,r.show.delay),h.show!==h.hide&&a.hide.bind(h.hide,function(){clearTimeout(c.timers.show)})):e(),s)}var r,a,h,l,c,p;return p=o.isArray(t.id)?t.id[i]:t.id,p=!p||p===S||1>p.length||T.api[p]?T.nextid++:p,l=".qtip-"+p+"-create",c=v(o(this),p,t),c===S?W:(T.api[p]=c,r=c.options,o.each(N,function(){"initialize"===this.initialize&&this(c)}),a={show:r.show.target,hide:r.hide.target},h={show:o.trim(""+r.show.event).replace(/ /g,l+" ")+l,hide:o.trim(""+r.hide.event).replace(/ /g,l+" ")+l},/mouse(over|enter)/i.test(h.show)&&!/mouse(out|leave)/i.test(h.hide)&&(h.hide+=" mouseleave"+l),a.show.bind("mousemove"+l,function(t){c._storeMouse(t),c.cache.onTarget=W}),a.show.bind(h.show,n),(r.show.ready||r.prerender)&&n(e),s)})},T.api={},o.each({attr:function(t,e){if(this.length){var i=this[0],s="title",n=o.data(i,"qtip");if(t===s&&n&&"object"==typeof n&&n.options.suppress)return 2>arguments.length?o.attr(i,ie):(n&&n.options.content.attr===s&&n.cache.attr&&n.set("content.text",e),this.attr(ie,e))}return o.fn["attr"+ee].apply(this,arguments)},clone:function(t){var e=(o([]),o.fn["clone"+ee].apply(this,arguments));return t||e.filter("["+ie+"]").attr("title",function(){return o.attr(this,ie)}).removeAttr(ie),e}},function(t,e){if(!e||o.fn[t+ee])return W;var i=o.fn[t+ee]=o.fn[t];o.fn[t]=function(){return e.apply(this,arguments)||i.apply(this,arguments)}}),o.ui||(o["cleanData"+ee]=o.cleanData,o.cleanData=function(t){for(var e,i=0;(e=o(t[i])).length&&e.attr(Y);i++)try{e.triggerHandler("removeqtip")}catch(s){}o["cleanData"+ee](t)}),T.version="2.0.1-92-",T.nextid=0,T.inactiveEvents=U,T.zindex=15e3,T.defaults={prerender:S,id:S,overwrite:W,suppress:W,content:{text:W,attr:"title",title:S,button:S},position:{my:"top left",at:"bottom right",target:S,container:S,viewport:S,adjust:{x:0,y:0,mouse:W,scroll:W,resize:W,method:"flipinvert flipinvert"},effect:function(t,e){o(this).animate(e,{duration:200,queue:S})}},show:{target:S,event:"mouseenter",effect:W,delay:90,solo:S,ready:S,autofocus:S},hide:{target:S,event:"mouseleave",effect:W,delay:0,fixed:S,inactive:S,leave:"window",distance:S},style:{classes:"",widget:S,width:S,height:S,def:W},events:{render:E,move:E,show:E,hide:E,toggle:E,visible:E,hidden:E,focus:E,blur:E}};var ae,he="margin",le="border",ce="color",pe="background-color",de="transparent",ue=" !important",fe=!!e.createElement("canvas").getContext,ge=/rgba?\(0, 0, 0(, 0)?\)|transparent|#123456/i,me={},ve=["Webkit","O","Moz","ms"];fe||(createVML=function(t,e,i){return"<qtipvml:"+t+' xmlns="urn:schemas-microsoft.com:vml" class="qtip-vml" '+(e||"")+' style="behavior: url(#default#VML); '+(i||"")+'" />'}),o.extend(x.prototype,{init:function(t){var e,i;i=this.element=t.elements.tip=o("<div />",{"class":X+"-tip"}).prependTo(t.tooltip),fe?(e=o("<canvas />").appendTo(this.element)[0].getContext("2d"),e.lineJoin="miter",e.miterLimit=100,e.save()):(e=createVML("shape",'coordorigin="0,0"',"position:absolute;"),this.element.html(e+e),t._bind(o("*",i).add(i),["click","mousedown"],function(t){t.stopPropagation()},this._ns)),t._bind(t.tooltip,"tooltipmove",this.reposition,this._ns,this),this.create()},_swapDimensions:function(){this.size[0]=this.options.height,this.size[1]=this.options.width},_resetDimensions:function(){this.size[0]=this.options.width,this.size[1]=this.options.height},_useTitle:function(t){var e=this.qtip.elements.titlebar;return e&&(t.y===L||t.y===D&&this.element.position().top+size[1]/2+options.offset<e.outerHeight(W))},_parseCorner:function(t){var e=this.qtip.options.position.my;return t===S||e===S?t=S:t===W?t=new j(e.string()):t.string||(t=new j(t),t.fixed=W),t},_parseWidth:function(t,e,i){var s=this.qtip.elements,o=le+y(e)+"Width";return(i?w(i,o):w(s.content,o)||w(this._useTitle(t)&&s.titlebar||s.content,o)||w(tooltip,o))||0},_parseRadius:function(t){var e=this.qtip.elements,i=le+y(t.y)+y(t.x)+"Radius";return 9>BROWSER.ie?0:w(this._useTitle(t)&&e.titlebar||e.content,i)||w(e.tooltip,i)||0},_invalidColour:function(t,e,i){var s=t.css(e);return!s||i&&s===t.css(i)||ge.test(s)?S:s},_parseColours:function(t){var e=this.qtip.elements,i=this.element.css("cssText",""),s=le+y(t[t.precedance])+y(ce),n=this._useTitle(t)&&e.titlebar||e.content,r=this._invalidColour,a=[];return a[0]=r(i,pe)||r(n,pe)||r(e.content,pe)||r(tooltip,pe)||i.css(pe),a[1]=r(i,s,ce)||r(n,s,ce)||r(e.content,s,ce)||r(tooltip,s,ce)||tooltip.css(s),o("*",i).add(i).css("cssText",pe+":"+de+ue+";"+le+":0"+ue+";"),a},_calculateSize:function(t){var e,i,s,o=t.precedance===R,n=this.options[o?"height":"width"],r=this.options[o?"width":"height"],a="c"===t.abbrev(),h=n*(a?.5:1),l=Math.pow,c=Math.round,p=Math.sqrt(l(h,2)+l(r,2)),d=[this.border/h*p,this.border/r*p];return d[2]=Math.sqrt(l(d[0],2)-l(this.border,2)),d[3]=Math.sqrt(l(d[1],2)-l(this.border,2)),e=p+d[2]+d[3]+(a?0:d[0]),i=e/p,s=[c(i*n),c(i*r)],o?s:s.reverse()},_calculateTip:function(t){var e=this.size[0],i=this.size[1],s=Math.ceil(e/2),o=Math.ceil(i/2),n={br:[0,0,e,i,e,0],bl:[0,0,e,0,0,i],tr:[0,i,e,0,e,i],tl:[0,0,0,i,e,i],tc:[0,i,s,0,e,i],bc:[0,0,e,0,s,i],rc:[0,0,e,o,0,i],lc:[e,0,e,i,0,o]};return n.lt=n.br,n.rt=n.bl,n.lb=n.tr,n.rb=n.tl,n[t.abbrev()]},create:function(){var t=this.corner=(fe||BROWSER.ie)&&this._parseCorner(this.options.corner);return(this.enabled=!!this.corner&&"c"!==this.corner.abbrev())&&(this.qtip.cache.corner=t.clone(),this.update()),this.element.toggle(this.enabled),this.corner},update:function(t,e){if(!this.enabled)return this;var i,s,n,r,a,h,l,c=(this.qtip.elements,this.element),p=c.children(),d=this.options,u=this.size,f=d.mimic,g=Math.round;t||(t=this.qtip.cache.corner||this.corner),f===S?f=t:(f=new j(f),f.precedance=t.precedance,"inherit"===f.x?f.x=t.x:"inherit"===f.y?f.y=t.y:f.x===f.y&&(f[t.precedance]=t[t.precedance])),s=f.precedance,t.precedance===O?this._swapDimensions():this._resetDimensions(),i=this.color=this._parseColours(t),i[1]!==de?(l=this.border=this._parseWidth(t,t[t.precedance]),d.border&&1>l&&(i[0]=i[1]),this.border=l=d.border!==W?d.border:l):this.border=l=0,r=this._calculateTip(f),h=this.size=this._calculateSize(t),c.css({width:h[0],height:h[1],lineHeight:h[1]+"px"}),a=t.precedance===R?[g(f.x===B?l:f.x===A?h[0]-u[0]-l:(h[0]-u[0])/2),g(f.y===L?h[1]-u[1]:0)]:[g(f.x===B?h[0]-u[0]:0),g(f.y===L?l:f.y===V?h[1]-u[1]-l:(h[1]-u[1])/2)],fe?(p.attr(I,h[0]).attr(k,h[1]),n=p[0].getContext("2d"),n.restore(),n.save(),n.clearRect(0,0,3e3,3e3),n.fillStyle=i[0],n.strokeStyle=i[1],n.lineWidth=2*l,n.translate(a[0],a[1]),n.beginPath(),n.moveTo(r[0],r[1]),n.lineTo(r[2],r[3]),n.lineTo(r[4],r[5]),n.closePath(),l&&("border-box"===tooltip.css("background-clip")&&(n.strokeStyle=i[0],n.stroke()),n.strokeStyle=i[1],n.stroke()),n.fill()):(r="m"+r[0]+","+r[1]+" l"+r[2]+","+r[3]+" "+r[4]+","+r[5]+" xe",a[2]=l&&/^(r|b)/i.test(t.string())?8===BROWSER.ie?2:1:0,p.css({coordsize:u[0]+l+" "+(u[1]+l),antialias:""+(f.string().indexOf(D)>-1),left:a[0],top:a[1],width:u[0]+l,height:u[1]+l}).each(function(t){var e=o(this);e[e.prop?"prop":"attr"]({coordsize:u[0]+l+" "+(u[1]+l),path:r,fillcolor:i[0],filled:!!t,stroked:!t}).toggle(!(!l&&!t)),!t&&e.html(createVML("stroke",'weight="'+2*l+'px" color="'+i[1]+'" miterlimit="1000" joinstyle="miter"'))})),e!==S&&this.calculate(t)},calculate:function(t){if(!this.enabled)return S;var e,i,s,n=this,r=this.qtip.elements,a=this.element,h=Math.max(0,this.options.offset),l=(this.qtip.tooltip.hasClass("ui-widget"),{});return t=t||this.corner,e=t.precedance,i=this._calculateSize(t),s=[t.x,t.y],e===O&&s.reverse(),o.each(s,function(s,o){var a,c,p;o===D?(a=e===R?B:L,l[a]="50%",l[he+"-"+a]=-Math.round(i[e===R?0:1]/2)+h):(a=n._parseWidth(t,o,r.tooltip),c=n._parseWidth(t,o,r.content),p=n._parseRadius(t),l[o]=Math.max(-n.border,s?c:h+(p>a?p:-a)))}),l[t[e]]-=i[e===O?0:1],a.css({margin:"",top:"",bottom:"",left:"",right:""}).css(l),l},reposition:function(t,e,i){if(this.enabled){var o,n,r=e.cache,a=this.corner.clone(),h=i.adjusted,l=e.options.position.adjust.method.split(" "),c=l[0],p=l[1]||l[0],d={left:S,top:S,x:0,y:0},u={};this.corner.fixed!==W&&(c===P&&a.precedance===O&&h.left&&a.y!==D?a.precedance=a.precedance===O?R:O:c!==P&&h.left&&(a.x=a.x===D?h.left>0?B:A:a.x===B?A:B),p===P&&a.precedance===R&&h.top&&a.x!==D?a.precedance=a.precedance===R?O:R:p!==P&&h.top&&(a.y=a.y===D?h.top>0?L:V:a.y===L?V:L),a.string()===r.corner.string()||r.cornerTop===h.top&&r.cornerLeft===h.left||this.update(a,S)),o=this.calculate(a,h),o.right!==s&&(o.left=-o.right),o.bottom!==s&&(o.top=-o.bottom),o.user=Math.max(0,this.offset),(d.left=c===P&&!!h.left)&&(a.x===D?u[he+"-left"]=d.x=o[he+"-left"]-h.left:(n=o.right!==s?[h.left,-o.left]:[-h.left,o.left],(d.x=Math.max(n[0],n[1]))>n[0]&&(i.left-=h.left,d.left=S),u[o.right!==s?A:B]=d.x)),(d.top=p===P&&!!h.top)&&(a.y===D?u[he+"-top"]=d.y=o[he+"-top"]-h.top:(n=o.bottom!==s?[h.top,-o.top]:[-h.top,o.top],(d.y=Math.max(n[0],n[1]))>n[0]&&(i.top-=h.top,d.top=S),u[o.bottom!==s?V:L]=d.y)),this.element.css(u).toggle(!(d.x&&d.y||a.x===D&&d.y||a.y===D&&d.x)),i.left-=o.left.charAt?o.user:c!==P||d.top||!d.left&&!d.top?o.left:0,i.top-=o.top.charAt?o.user:p!==P||d.left||!d.left&&!d.top?o.top:0,r.cornerLeft=h.left,r.cornerTop=h.top,r.corner=a.clone()
}},destroy:function(){this.qtip._unbind(this.qtip.tooltip,this._ns),this.qtip.elements.tip&&this.qtip.elements.tip.find("*").remove().end().remove()}}),ae=N.tip=function(t){return new x(t,t.options.style.tip)},ae.initialize="render",ae.sanitize=function(t){t.style&&"tip"in t.style&&(opts=t.style.tip,"object"!=typeof opts&&(opts=t.style.tip={corner:opts}),/string|boolean/i.test(typeof opts.corner)||(opts.corner=W))},z.tip={"^position.my|style.tip.(corner|mimic|border)$":function(){this.create(),this.qtip.reposition()},"^style.tip.(height|width)$":function(t){this.size=size=[t.width,t.height],this.update(),this.qtip.reposition()},"^content.title|style.(classes|widget)$":function(){this.update()}},o.extend(W,T.defaults,{style:{tip:{corner:W,mimic:S,width:6,height:6,border:W,offset:0}}});var ye,be,we="qtip-modal",xe="."+we;be=function(){function i(t){if(o.expr[":"].focusable)return o.expr[":"].focusable;var e,i,s,n=!isNaN(o.attr(t,"tabindex")),r=t.nodeName&&t.nodeName.toLowerCase();return"area"===r?(e=t.parentNode,i=e.name,t.href&&i&&"map"===e.nodeName.toLowerCase()?(s=o("img[usemap=#"+i+"]")[0],!!s&&s.is(":visible")):!1):/input|select|textarea|button|object/.test(r)?!t.disabled:"a"===r?t.href||n:n}function s(t){1>p.length&&t.length?t.not("body").blur():p.first().focus()}function n(t){if(l.is(":visible")){var e,i=o(t.target),n=r.tooltip,h=i.closest(G);e=1>h.length?S:parseInt(h[0].style.zIndex,10)>parseInt(n[0].style.zIndex,10),e||i.closest(G)[0]===n[0]||s(i),a=t.target===p[p.length-1]}}var r,a,h,l,c=this,p={};o.extend(c,{init:function(){function i(){var t=o(this);l.css({height:t.height(),width:t.width()})}return l=c.elem=o("<div />",{id:"qtip-overlay",html:"<div></div>",mousedown:function(){return S}}).hide(),o(t).bind("resize"+xe,i),i(),o(e.body).bind("focusin"+xe,n),o(e).bind("keydown"+xe,function(t){r&&r.options.show.modal.escape&&27===t.keyCode&&r.hide(t)}),l.bind("click"+xe,function(t){r&&r.options.show.modal.blur&&r.hide(t)}),c},update:function(t){r=t,p=t.options.show.modal.stealfocus!==S?t.tooltip.find("*").filter(function(){return i(this)}):[]},toggle:function(t,i,n){var a=(o(e.body),t.tooltip),p=t.options.show.modal,d=p.effect,u=i?"show":"hide",f=l.is(":visible"),g=o(xe).filter(":visible:not(:animated)").not(a);return c.update(t),i&&p.stealfocus!==S&&s(o(":focus")),l.toggleClass("blurs",p.blur),i&&l.css({left:0,top:0}).appendTo(e.body),l.is(":animated")&&f===i&&h!==S||!i&&g.length?c:(l.stop(W,S),o.isFunction(d)?d.call(l,i):d===S?l[u]():l.fadeTo(parseInt(n,10)||90,i?1:0,function(){i||l.hide()}),i||l.queue(function(t){l.css({left:"",top:""}),o(xe).length||l.detach(),t()}),h=i,r.destroyed&&(r=E),c)}}),c.init()},be=new be,o.extend(_.prototype,{init:function(t){var e=t.tooltip;return this.options.on?(t.elements.overlay=be.elem,e.addClass(we).css("z-index",N.modal.zindex+o(xe).length),t._bind(e,["tooltipshow","tooltiphide"],function(t,i,s){var n=t.originalEvent;if(t.target===e[0])if(n&&"tooltiphide"===t.type&&/mouse(leave|enter)/.test(n.type)&&o(n.relatedTarget).closest(overlay[0]).length)try{t.preventDefault()}catch(r){}else(!n||n&&!n.solo)&&this.toggle(t,"tooltipshow"===t.type,s)},this._ns,this),t._bind(e,"tooltipfocus",function(t,i){if(!t.isDefaultPrevented()&&t.target===e[0]){var s=o(xe),n=N.modal.zindex+s.length,r=parseInt(e[0].style.zIndex,10);be.elem[0].style.zIndex=n-1,s.each(function(){this.style.zIndex>r&&(this.style.zIndex-=1)}),s.filter("."+K).qtip("blur",t.originalEvent),e.addClass(K)[0].style.zIndex=n,be.update(i);try{t.preventDefault()}catch(a){}}},this._ns,this),t._bind(e,"tooltiphide",function(t){t.target===e[0]&&o(xe).filter(":visible").not(e).last().qtip("focus",t)},this._ns,this),s):this},toggle:function(t,e,i){return t&&t.isDefaultPrevented()?this:(be.toggle(this.qtip,!!e,i),s)},destroy:function(){this.qtip.tooltip.removeClass(we),this.qtip._unbind(this.qtip.tooltip,this._ns),be.toggle(this.qtip,S),delete this.qtip.elements.overlay}}),ye=N.modal=function(t){return new _(t,t.options.show.modal)},ye.sanitize=function(t){t.show&&("object"!=typeof t.show.modal?t.show.modal={on:!!t.show.modal}:t.show.modal.on===s&&(t.show.modal.on=W))},ye.zindex=T.zindex-200,ye.initialize="render",z.modal={"^show.modal.(on|blur)$":function(){this.destroy(),this.init(),this.qtip.elems.overlay.toggle(this.qtip.tooltip[0].offsetWidth>0)}},o.extend(W,T.defaults,{show:{modal:{on:S,effect:W,blur:W,stealfocus:W,escape:W}}}),N.viewport=function(i,s,o,n,r,a,h){function l(t,e,i,o,n,r,a,h,l){var c=s[n],d=g[t],u=m[t],f=i===P,v=-_.offset[n]+x.offset[n]+x["scroll"+n],y=d===n?l:d===r?-l:-l/2,b=u===n?h:u===r?-h:-h/2,w=T&&T.size?T.size[a]||0:0,q=T&&T.corner&&T.corner.precedance===t&&!f?w:0,C=v-c+q,j=c+l-x[a]-v+q,z=y-(g.precedance===t||d===g[e]?b:0)-(u===D?h/2:0);return f?(q=T&&T.corner&&T.corner.precedance===e?w:0,z=(d===n?1:-1)*y-q,s[n]+=C>0?C:j>0?-j:0,s[n]=Math.max(-_.offset[n]+x.offset[n]+(q&&T.corner[t]===D?T.offset:0),c-z,Math.min(Math.max(-_.offset[n]+x.offset[n]+x[a],c+z),s[n]))):(o*=i===F?2:0,C>0&&(d!==n||j>0)?(s[n]-=z+o,p.invert(t,n)):j>0&&(d!==r||C>0)&&(s[n]-=(d===D?-z:z)+o,p.invert(t,r)),v>s[n]&&-s[n]>j&&(s[n]=c,p=g.clone())),s[n]-c}var c,p,d,u=o.target,f=i.elements.tooltip,g=o.my,m=o.at,v=o.adjust,y=v.method.split(" "),b=y[0],w=y[1]||y[0],x=o.viewport,_=o.container,q=i.cache,T=i.plugins.tip,C={left:0,top:0};return x.jquery&&u[0]!==t&&u[0]!==e.body&&"none"!==v.method?(c="fixed"===f.css("position"),x={elem:x,width:x[0]===t?x.width():x.outerWidth(S),height:x[0]===t?x.height():x.outerHeight(S),scrollleft:c?0:x.scrollLeft(),scrolltop:c?0:x.scrollTop(),offset:x.offset()||{left:0,top:0}},_={elem:_,scrollLeft:_.scrollLeft(),scrollTop:_.scrollTop(),offset:_.offset()||{left:0,top:0}},("shift"!==b||"shift"!==w)&&(p=g.clone()),C={left:"none"!==b?l(O,R,b,v.x,B,A,I,n,a):0,top:"none"!==w?l(R,O,w,v.y,L,V,k,r,h):0},p&&q.lastClass!==(d=X+"-pos-"+p.abbrev())&&f.removeClass(i.cache.lastClass).addClass(i.cache.lastClass=d),C):C},N.polys={polygon:function(t,e){var i,s,o,n={width:0,height:0,position:{top:1e10,right:0,bottom:0,left:1e10},adjustable:S},r=0,a=[],h=1,l=1,c=0,p=0;for(r=t.length;r--;)i=[parseInt(t[--r],10),parseInt(t[r+1],10)],i[0]>n.position.right&&(n.position.right=i[0]),i[0]<n.position.left&&(n.position.left=i[0]),i[1]>n.position.bottom&&(n.position.bottom=i[1]),i[1]<n.position.top&&(n.position.top=i[1]),a.push(i);if(s=n.width=Math.abs(n.position.right-n.position.left),o=n.height=Math.abs(n.position.bottom-n.position.top),"c"===e.abbrev())n.position={left:n.position.left+n.width/2,top:n.position.top+n.height/2};else{for(;s>0&&o>0&&h>0&&l>0;)for(s=Math.floor(s/2),o=Math.floor(o/2),e.x===B?h=s:e.x===A?h=n.width-s:h+=Math.floor(s/2),e.y===L?l=o:e.y===V?l=n.height-o:l+=Math.floor(o/2),r=a.length;r--&&!(2>a.length);)c=a[r][0]-n.position.left,p=a[r][1]-n.position.top,(e.x===B&&c>=h||e.x===A&&h>=c||e.x===D&&(h>c||c>n.width-h)||e.y===L&&p>=l||e.y===V&&l>=p||e.y===D&&(l>p||p>n.height-l))&&a.splice(r,1);n.position={left:a[0][0],top:a[0][1]}}return n},rect:function(t,e,i,s){return{width:Math.abs(i-t),height:Math.abs(s-e),position:{left:Math.min(t,i),top:Math.min(e,s)}}},_angles:{tc:1.5,tr:7/4,tl:5/4,bc:.5,br:.25,bl:.75,rc:2,lc:1,c:0},ellipse:function(t,e,i,s,o){var n=N.polys._angles[o.abbrev()],r=i*Math.cos(n*Math.PI),a=s*Math.sin(n*Math.PI);return{width:2*i-Math.abs(r),height:2*s-Math.abs(a),position:{left:t+r,top:e+a},adjustable:S}},circle:function(t,e,i,s){return N.polys.ellipse(t,e,i,i,s)}},N.svg=function(t,s,n){for(var r,a,h=o(e),l=s[0],c=S;!l.getBBox;)l=l.parentNode;if(!l.getBBox||!l.parentNode)return S;switch(l.nodeName){case"rect":r=N.svg.toPixel(l,l.x.baseVal.value,l.y.baseVal.value),a=N.svg.toPixel(l,l.x.baseVal.value+l.width.baseVal.value,l.y.baseVal.value+l.height.baseVal.value),c=N.polys.rect(r[0],r[1],a[0],a[1],n);break;case"ellipse":case"circle":r=N.svg.toPixel(l,l.cx.baseVal.value,l.cy.baseVal.value),c=N.polys.ellipse(r[0],r[1],(l.rx||l.r).baseVal.value,(l.ry||l.r).baseVal.value,n);break;case"line":case"polygon":case"polyline":for(points=l.points||[{x:l.x1.baseVal.value,y:l.y1.baseVal.value},{x:l.x2.baseVal.value,y:l.y2.baseVal.value}],c=[],i=-1,len=points.numberOfItems||points.length;len>++i;)next=points.getItem?points.getItem(i):points[i],c.push.apply(c,N.svg.toPixel(l,next.x,next.y));c=N.polys.polygon(c,n);break;default:return S}return c.position.left+=h.scrollLeft(),c.position.top+=h.scrollTop(),c},N.svg.toPixel=function(t,e,i){var s,o,n=t.getScreenCTM(),r=t.farthestViewportElement||t;return r.createSVGPoint?(o=r.createSVGPoint(),o.x=e,o.y=i,s=o.matrixTransform(n),[s.x,s.y]):S},N.imagemap=function(t,e,i){e.jquery||(e=o(e));var s,n,r,a=e.attr("shape").toLowerCase().replace("poly","polygon"),h=o('img[usemap="#'+e.parent("map").attr("name")+'"]'),l=e.attr("coords"),c=l.split(",");if(!h.length)return S;if("polygon"===a)result=N.polys.polygon(c,i);else{if(!N.polys[a])return S;for(r=-1,len=c.length,n=[];len>++r;)n.push(parseInt(c[r],10));result=N.polys[a].apply(this,n.concat(i))}return s=h.offset(),s.left+=Math.ceil((h.outerWidth(S)-h.width())/2),s.top+=Math.ceil((h.outerHeight(S)-h.height())/2),result.position.left+=s.left,result.position.top+=s.top,result};var _e,qe='<iframe class="qtip-bgiframe" frameborder="0" tabindex="-1" src="javascript:\'\';"  style="display:block; position:absolute; z-index:-1; filter:alpha(opacity=0); -ms-filter:"progid:DXImageTransform.Microsoft.Alpha(Opacity=0)";"></iframe>';o.extend(q.prototype,{_scroll:function(){var e=this.qtip.elements.overlay;e&&(e[0].style.top=o(t).scrollTop()+"px")},init:function(i){var s=i.tooltip;1>o("select, object").length&&(this.bgiframe=i.elements.bgiframe=o(qe).appendTo(s),i._bind(s,"tooltipmove",this.adjustBGIFrame,this._ns,this)),this.redrawContainer=o("<div/>",{id:X+"-rcontainer"}).appendTo(e.body),i.elements.overlay&&i.elements.overlay.addClass("qtipmodal-ie6fix")&&(i._bind(t,["scroll","resize"],this._scroll,this._ns,this),i._bind(s,["tooltipshow"],this._scroll,this._ns,this)),this.redraw()},adjustBGIFrame:function(){var t,e,i=this.qtip.tooltip,s={height:i.outerHeight(S),width:i.outerWidth(S)},o=this.qtip.plugins.tip,n=this.qtip.elements.tip;e=parseInt(i.css("borderLeftWidth"),10)||0,e={left:-e,top:-e},o&&n&&(t="x"===o.corner.precedance?[I,B]:[k,L],e[t[1]]-=n[t[0]]()),this.bgiframe.css(e).css(s)},redraw:function(){if(1>this.qtip.rendered||this.drawing)return self;var t,e,i,s,o=this.qtip.tooltip,n=this.qtip.options.style,r=this.qtip.options.position.container;return this.qtip.drawing=1,n.height&&o.css(k,n.height),n.width?o.css(I,n.width):(o.css(I,"").appendTo(this.redrawContainer),e=o.width(),1>e%2&&(e+=1),i=o.css("maxWidth")||"",s=o.css("minWidth")||"",t=(i+s).indexOf("%")>-1?r.width()/100:0,i=(i.indexOf("%")>-1?t:1)*parseInt(i,10)||e,s=(s.indexOf("%")>-1?t:1)*parseInt(s,10)||0,e=i+s?Math.min(Math.max(e,s),i):e,o.css(I,Math.round(e)).appendTo(r)),this.drawing=0,self},destroy:function(){this.bgiframe&&this.bgiframe.remove(),this.qtip._unbind([t,this.qtip.tooltip],this._ns)}}),_e=N.ie6=function(t){return 6===BROWSER.ie?new q(t):S},_e.initialize="render",z.ie6={"^content|style$":function(){this.redraw()}}})})(window,document);

(function(c,q){var m="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==";c.fn.imagesLoaded=function(f){function n(){var b=c(j),a=c(h);d&&(h.length?d.reject(e,b,a):d.resolve(e));c.isFunction(f)&&f.call(g,e,b,a)}function p(b){k(b.target,"error"===b.type)}function k(b,a){b.src===m||-1!==c.inArray(b,l)||(l.push(b),a?h.push(b):j.push(b),c.data(b,"imagesLoaded",{isBroken:a,src:b.src}),r&&d.notifyWith(c(b),[a,e,c(j),c(h)]),e.length===l.length&&(setTimeout(n),e.unbind(".imagesLoaded",
p)))}var g=this,d=c.isFunction(c.Deferred)?c.Deferred():0,r=c.isFunction(d.notify),e=g.find("img").add(g.filter("img")),l=[],j=[],h=[];c.isPlainObject(f)&&c.each(f,function(b,a){if("callback"===b)f=a;else if(d)d[b](a)});e.length?e.bind("load.imagesLoaded error.imagesLoaded",p).each(function(b,a){var d=a.src,e=c.data(a,"imagesLoaded");if(e&&e.src===d)k(a,e.isBroken);else if(a.complete&&a.naturalWidth!==q)k(a,0===a.naturalWidth||0===a.naturalHeight);else if(a.readyState||a.complete)a.src=m,a.src=d}):
n();return d?d.promise(g):g}})(jQuery);


/* **********************************************
     Begin magnific-popup.min.js
********************************************** */

// Magnific Popup v0.8.3 by Dmitry Semenov
// http://bit.ly/magnific-popup#build=inline+image+retina
(function(a){var b="Close",c="BeforeAppend",d="MarkupParse",e="Open",f="Change",g="mfp",h="."+g,i="mfp-ready",j="mfp-removing",k="mfp-prevent-close",l,m=function(){},n,o=a(window),p,q,r,s,t,u=function(a,b){l.ev.on(g+a+h,b)},v=function(b,c,d,e){var f=document.createElement("div");return f.className="mfp-"+b,d&&(f.innerHTML=d),e?c&&c.appendChild(f):(f=a(f),c&&f.appendTo(c)),f},w=function(b,c){l.ev.triggerHandler(g+b,c),l.st.callbacks&&(b=b.charAt(0).toLowerCase()+b.slice(1),l.st.callbacks[b]&&l.st.callbacks[b].apply(l,a.isArray(c)?c:[c]))},x=function(){(l.st.focus?l.content.find(l.st.focus).eq(0):l.wrap).focus()},y=function(b){if(b!==t||!l.currTemplate.closeBtn)l.currTemplate.closeBtn=a(l.st.closeMarkup.replace("%title%",l.st.tClose)),t=b;return l.currTemplate.closeBtn};m.prototype={constructor:m,init:function(){var b=navigator.appVersion;l.isIE7=b.indexOf("MSIE 7.")!==-1,l.isAndroid=/android/gi.test(b),l.isIOS=/iphone|ipad|ipod/gi.test(b),l.probablyMobile=l.isAndroid||l.isIOS||/(Opera Mini)|Kindle|webOS|BlackBerry|(Opera Mobi)|(Windows Phone)|IEMobile/i.test(navigator.userAgent),p=a(document.body),q=a(document),l.popupsCache={}},open:function(b){if(l.isOpen)return;var c;l.types=[],s="",l.ev=b.el||q;if(b.isObj)l.index=b.index||0;else{l.index=0;var f=b.items,g;for(c=0;c<f.length;c++){g=f[c],g.parsed&&(g=g.el[0]);if(g===b.el[0]){l.index=c;break}}}b.key?(l.popupsCache[b.key]||(l.popupsCache[b.key]={}),l.currTemplate=l.popupsCache[b.key]):l.currTemplate={},l.st=a.extend(!0,{},a.magnificPopup.defaults,b),l.fixedContentPos=l.st.fixedContentPos==="auto"?!l.probablyMobile:l.st.fixedContentPos,l.items=b.items.length?b.items:[b.items],l.bgOverlay||(l.bgOverlay=v("bg").on("click"+h,function(){l.close()}),l.wrap=v("wrap").attr("tabindex",-1).on("click"+h,function(b){var c=b.target;if(a(c).hasClass(k))return;l.st.closeOnContentClick?l.close():(!l.content||a(c).hasClass("mfp-close")||l.preloader&&b.target===l.preloader[0]||c!==l.content[0]&&!a.contains(l.content[0],c))&&l.close()}),l.container=v("container",l.wrap)),l.contentContainer=v("content"),l.st.preloader&&(l.preloader=v("preloader",l.container,l.st.tLoading));var j=a.magnificPopup.modules;for(c=0;c<j.length;c++){var m=j[c];m=m.charAt(0).toUpperCase()+m.slice(1),l["init"+m].call(l)}w("BeforeOpen"),l.st.closeBtnInside?(u(d,function(a,b,c,d){c.close_replaceWith=y(d.type)}),s+=" mfp-close-btn-in"):l.wrap.append(y()),l.st.alignTop&&(s+=" mfp-align-top"),l.fixedContentPos?l.wrap.css({overflow:l.st.overflowY,overflowX:"hidden",overflowY:l.st.overflowY}):l.wrap.css({top:o.scrollTop(),position:"absolute"}),(l.st.fixedBgPos===!1||l.st.fixedBgPos==="auto"&&!l.fixedContentPos)&&l.bgOverlay.css({height:q.height(),position:"absolute"}),q.on("keyup"+h,function(a){a.keyCode===27&&l.close()}),o.on("resize"+h,function(){l.updateSize()}),l.st.closeOnContentClick||(s+=" mfp-auto-cursor"),s&&l.wrap.addClass(s);var n=l.wH=o.height(),r={};if(l.fixedContentPos&&l.st.overflowY!=="scroll"){var t=l._getScrollbarSize();t&&(r.paddingRight=t)}l.fixedContentPos&&(l.isIE7?a("body, html").css("overflow","hidden"):r.overflow="hidden");var z=l.st.mainClass;l.isIE7&&(z+=" mfp-ie7"),z&&l._addClassToMFP(z),l.updateItemHTML(),w("BuildControls"),p.css(r),l.bgOverlay.add(l.wrap).prependTo(document.body),l._lastFocusedEl=document.activeElement,setTimeout(function(){l.content?(l._addClassToMFP(i),x()):l.bgOverlay.addClass(i),q.on("focusin"+h,function(b){if(b.target!==l.wrap[0]&&!a.contains(l.wrap[0],b.target))return x(),!1})},16),l.isOpen=!0,l.updateSize(n),w(e)},close:function(){if(!l.isOpen)return;l.isOpen=!1,l.st.removalDelay?(l._addClassToMFP(j),setTimeout(function(){l._close()},l.st.removalDelay)):l._close()},_close:function(){w(b);var c=j+" "+i+" ";l.bgOverlay.detach(),l.wrap.detach(),l.container.empty(),l.st.mainClass&&(c+=l.st.mainClass+" "),l._removeClassFromMFP(c);if(l.fixedContentPos){var d={paddingRight:0};l.isIE7?a("body, html").css("overflow","auto"):d.overflow="visible",p.css(d)}q.off("keyup"+h+" focusin"+h),l.ev.off(h),l.wrap.attr("class","mfp-wrap").removeAttr("style"),l.bgOverlay.attr("class","mfp-bg"),l.container.attr("class","mfp-container"),(!l.st.closeBtnInside||l.currTemplate[l.currItem.type]===!0)&&l.currTemplate.closeBtn&&l.currTemplate.closeBtn.detach(),l._lastFocusedEl&&a(l._lastFocusedEl).focus(),l.content=null,l.currTemplate=null,l.prevHeight=0},updateSize:function(a){if(l.isIOS){var b=document.documentElement.clientWidth/window.innerWidth,c=window.innerHeight*b;l.wrap.css("height",c),l.wH=c}else l.wH=a||o.height();w("Resize")},updateItemHTML:function(){var b=l.items[l.index];l.contentContainer.detach(),l.content&&l.content.detach(),b.parsed||(b=l.parseEl(l.index)),l.currItem=b;var c=b.type;if(!l.currTemplate[c]){var d=l.st[c]?l.st[c].markup:!1;w("FirstMarkupParse",d),d?l.currTemplate[c]=a(d):l.currTemplate[c]=!0}r&&r!==b.type&&l.container.removeClass("mfp-"+r+"-holder");var e=l["get"+c.charAt(0).toUpperCase()+c.slice(1)](b,l.currTemplate[c]);l.appendContent(e,c),b.preloaded=!0,w(f,b),r=b.type,l.container.prepend(l.contentContainer)},appendContent:function(a,b){l.content=a,a?l.st.closeBtnInside&&l.currTemplate[b]===!0?l.content.find(".mfp-close").length||l.content.append(y()):l.content=a:l.content="",w(c),l.container.addClass("mfp-"+b+"-holder"),l.contentContainer.append(l.content)},parseEl:function(b){var c=l.items[b],d=c.type;c.tagName?c={el:a(c)}:c={data:c,src:c.src};if(c.el){var e=l.types;for(var f=0;f<e.length;f++)if(c.el.hasClass("mfp-"+e[f])){d=e[f];break}c.src=c.el.attr("data-mfp-src"),c.src||(c.src=c.el.attr("href"))}return c.type=d||l.st.type,c.index=b,c.parsed=!0,l.items[b]=c,w("ElementParse",c),l.items[b]},addGroup:function(b,c){var d=function(d){var e=c.midClick!==undefined?c.midClick:a.magnificPopup.defaults.midClick;if(e||d.which!==2){var f=c.disableOn!==undefined?c.disableOn:a.magnificPopup.defaults.disableOn;if(f)if(a.isFunction(f)){if(!f.call(l))return!0}else if(a(window).width()<f)return!0;d.preventDefault(),c.el=a(this),c.mainEl=b,c.delegate&&(c.items=b.find(c.delegate)),l.open(c)}};c||(c={});var e="click.magnificPopup";c.items?(c.isObj=!0,b.off(e).on(e,d)):(c.isObj=!1,c.delegate?b.off(e).on(e,c.delegate,d):(c.items=b,b.off(e).on(e,d)))},updateStatus:function(a,b){if(l.preloader){n!==a&&l.container.removeClass("mfp-s-"+n),!b&&a==="loading"&&(b=l.st.tLoading);var c={status:a,text:b};w("UpdateStatus",c),a=c.status,b=c.text,l.preloader.html(b),l.preloader.find("a").click(function(a){a.stopImmediatePropagation()}),l.container.addClass("mfp-s-"+a),n=a}},_addClassToMFP:function(a){l.bgOverlay.addClass(a),l.wrap.addClass(a)},_removeClassFromMFP:function(a){this.bgOverlay.removeClass(a),l.wrap.removeClass(a)},_hasScrollBar:function(a){return document.body.clientHeight>(a||o.height())?!0:!1},_parseMarkup:function(b,c,e){var f;e.data&&(c=a.extend(e.data,c)),w(d,[b,c,e]),a.each(c,function(a,c){if(c===undefined||c===!1)return!0;f=a.split("_");if(f.length>1){var d=b.find(h+"-"+f[0]);if(d.length>0){var e=f[1];e==="replaceWith"?d[0]!==c[0]&&d.replaceWith(c):e==="img"?d.is("img")?d.attr("src",c):d.replaceWith('<img src="'+c+'" class="'+d.attr("class")+'" />'):d.attr(f[1],c)}}else b.find(h+"-"+a).html(c)})},_getScrollbarSize:function(){if(l.scrollbarSize===undefined){var a=document.createElement("div");a.id="mfp-sbm",a.style.cssText="width: 99px; height: 99px; overflow: scroll; position: absolute; top: -9999px;",document.body.appendChild(a),l.scrollbarSize=a.offsetWidth-a.clientWidth,document.body.removeChild(a)}return l.scrollbarSize}},a.magnificPopup={instance:null,proto:m.prototype,modules:[],open:function(b,c){return a.magnificPopup.instance||(l=new m,l.init(),a.magnificPopup.instance=l),b||(b={}),b.isObj=!0,b.index=c===undefined?0:c,this.instance.open(b)},close:function(){return a.magnificPopup.instance.close()},registerModule:function(b,c){c.options&&(a.magnificPopup.defaults[b]=c.options),a.extend(this.proto,c.proto),this.modules.push(b)},defaults:{disableOn:0,key:null,midClick:!1,mainClass:"",preloader:!0,focus:"",closeOnContentClick:!1,closeBtnInside:!0,alignTop:!1,removalDelay:0,fixedContentPos:"auto",fixedBgPos:"auto",overflowY:"auto",closeMarkup:'<button title="%title%" type="button" class="mfp-close">&times;</button>',tClose:"Close (Esc)",tLoading:"Loading..."}},a.fn.magnificPopup=function(b){return a.magnificPopup.instance||(l=new m,l.init(),a.magnificPopup.instance=l),l.addGroup(a(this),b),a(this)};var z="inline",A;a.magnificPopup.registerModule(z,{options:{hiddenClass:g+"-hide",markup:"",tNotFound:"Content not found"},proto:{initInline:function(){l.types.push(z),A=!1,u(b+"."+z,function(){var a=l.currItem;if(a.type===z){if(A)for(var b=0;b<l.items.length;b++)a=l.items[b],a&&a.inlinePlaceholder&&a.inlinePlaceholder.after(a.inlineElement.addClass(l.st.inline.hiddenClass)).detach();a.inlinePlaceholder=a.inlineElement=null}})},getInline:function(b,c){l.updateStatus("ready");if(b.src){var d=l.st.inline;return typeof b.src!="string"&&(b.isElement=!0),!b.isElement&&!b.inlinePlaceholder&&(b.inlinePlaceholder=v(d.hiddenClass)),b.isElement?b.inlineElement=b.src:b.inlineElement||(b.inlineElement=a(b.src),b.inlineElement.length||(l.updateStatus("error",d.tNotFound),b.inlineElement=a("<div>"))),b.inlinePlaceholder&&(A=!0),b.inlineElement.after(b.inlinePlaceholder).detach().removeClass(d.hiddenClass),b.inlineElement}return l._parseMarkup(c,{},b),c}}});var B,C=function(b){if(b.data&&b.data.title!==undefined)return b.data.title;var c=l.st.image.titleSrc;if(c){if(a.isFunction(c))return c.call(l,b);if(b.el)return b.el.attr(c)||""}return""};a.magnificPopup.registerModule("image",{options:{markup:'<div class="mfp-figure"><div class="mfp-close"></div><div class="mfp-img"></div><div class="mfp-bottom-bar"><div class="mfp-title"></div><div class="mfp-counter"></div></div></div>',cursor:"mfp-zoom-out-cur",titleSrc:"title",verticalFit:!0,tError:'<a href="%url%">The image</a> could not be loaded.'},proto:{initImage:function(){var a=l.st.image,c=".image";l.types.push("image"),u(e+c,function(){l.currItem.type==="image"&&a.cursor&&p.addClass(a.cursor)}),u(b+c,function(){a.cursor&&p.removeClass(a.cursor),o.off("resize"+h)}),u("Resize"+c,function(){l.resizeImage()})},resizeImage:function(){var a=l.currItem;if(!a.img)return;l.st.image.verticalFit&&a.img.css("max-height",l.wH+"px")},_onImageHasSize:function(a){a.img&&(a.hasSize=!0,B&&clearInterval(B),a.isCheckingImgSize=!1,w("ImageHasSize",a),a.imgHidden&&(l.content&&l.content.removeClass("mfp-loading"),a.imgHidden=!1))},findImageSize:function(a){var b=0,c=a.img[0],d=function(e){B&&clearInterval(B),B=setInterval(function(){if(c.naturalWidth>0){l._onImageHasSize(a);return}b>200&&clearInterval(B),b++,b===3?d(10):b===40?d(50):b===100&&d(500)},e)};d(1)},getImage:function(b,c){var d=0,e=function(){b&&(b.img[0].complete?(b.img.off(".mfploader"),b===l.currItem&&(l._onImageHasSize(b),l.updateStatus("ready")),b.hasSize=!0,b.loaded=!0):(d++,d<200?setTimeout(e,100):f()))},f=function(){b&&(b.img.off(".mfploader"),b===l.currItem&&(l._onImageHasSize(b),l.updateStatus("error",g.tError.replace("%url%",b.src))),b.hasSize=!0,b.loaded=!0,b.loadError=!0)},g=l.st.image,h=c.find(".mfp-img");if(h.length){var i=new Image;i.className="mfp-img",b.img=a(i).on("load.mfploader",e).on("error.mfploader",f),i.src=b.src,h.is("img")&&(b.img=b.img.clone())}return l._parseMarkup(c,{title:C(b),img_replaceWith:b.img},b),l.resizeImage(),b.hasSize?(B&&clearInterval(B),b.loadError?(c.addClass("mfp-loading"),l.updateStatus("error",g.tError.replace("%url%",b.src))):(c.removeClass("mfp-loading"),l.updateStatus("ready")),c):(l.updateStatus("loading"),b.loading=!0,b.hasSize||(b.imgHidden=!0,c.addClass("mfp-loading"),l.findImageSize(b)),c)}}});var D="retina";a.magnificPopup.registerModule(D,{options:{replaceSrc:function(a){return a.src.replace(/\.\w+$/,function(a){return"@2x"+a})},ratio:1},proto:{initRetina:function(){if(window.devicePixelRatio>1){var a=l.st.retina,b=a.ratio;b=isNaN(b)?b():b,b>1&&(u("ImageHasSize."+D,function(a,c){c.img.css({"max-width":c.img[0].naturalWidth/b,width:"100%"})}),u("ElementParse."+D,function(c,d){d.src=a.replaceSrc(d,b)}))}}}})})(window.jQuery||window.Zepto);

/* **********************************************
     Begin jquery.lazyload.js
********************************************** */

/*
 * Lazy Load - jQuery plugin for lazy loading images
 *
 * Copyright (c) 2007-2013 Mika Tuupola
 *
 * Licensed under the MIT license:
 *   http://www.opensource.org/licenses/mit-license.php
 *
 * Project home:
 *   http://www.appelsiini.net/projects/lazyload
 *
 * Version:  1.8.4
 *
 */
(function($, window, document, undefined) {
    var $window = $(window);

    $.fn.lazyload = function(options) {
        var elements = this;
        var $container;
        var settings = {
            threshold       : 0,
            failure_limit   : 0,
            event           : "scroll",
            effect          : "show",
            container       : window,
            data_attribute  : "original",
            skip_invisible  : true,
            appear          : null,
            load            : null
        };

        function update() {
            var counter = 0;
      
            elements.each(function() {
                var $this = $(this);
                if (settings.skip_invisible && !$this.is(":visible")) {
                    return;
                }
                if ($.abovethetop(this, settings) ||
                    $.leftofbegin(this, settings)) {
                        /* Nothing. */
                } else if (!$.belowthefold(this, settings) &&
                    !$.rightoffold(this, settings)) {
                        $this.trigger("appear");
                        /* if we found an image we'll load, reset the counter */
                        counter = 0;
                } else {
                    if (++counter > settings.failure_limit) {
                        return false;
                    }
                }
            });

        }

        if(options) {
            /* Maintain BC for a couple of versions. */
            if (undefined !== options.failurelimit) {
                options.failure_limit = options.failurelimit; 
                delete options.failurelimit;
            }
            if (undefined !== options.effectspeed) {
                options.effect_speed = options.effectspeed; 
                delete options.effectspeed;
            }

            $.extend(settings, options);
        }

        /* Cache container as jQuery as object. */
        $container = (settings.container === undefined ||
                      settings.container === window) ? $window : $(settings.container);

        /* Fire one scroll event per scroll. Not one scroll event per image. */
        if (0 === settings.event.indexOf("scroll")) {
            $container.bind(settings.event, function(event) {
                return update();
            });
        }

        this.each(function() {
            var self = this;
            var $self = $(self);

            self.loaded = false;

            /* When appear is triggered load original image. */
            $self.one("appear", function() {
                if (!this.loaded) {
                    if (settings.appear) {
                        var elements_left = elements.length;
                        settings.appear.call(self, elements_left, settings);
                    }
                    $("<img />")
                        .bind("load", function() {
                            $self
                                .hide()
                                .attr("src", $self.data(settings.data_attribute))
                                [settings.effect](settings.effect_speed);
                            self.loaded = true;

                            /* Remove image from array so it is not looped next time. */
                            var temp = $.grep(elements, function(element) {
                                return !element.loaded;
                            });
                            elements = $(temp);

                            if (settings.load) {
                                var elements_left = elements.length;
                                settings.load.call(self, elements_left, settings);
                            }
                        })
                        .attr("src", $self.data(settings.data_attribute));
                }
            });

            /* When wanted event is triggered load original image */
            /* by triggering appear.                              */
            if (0 !== settings.event.indexOf("scroll")) {
                $self.bind(settings.event, function(event) {
                    if (!self.loaded) {
                        $self.trigger("appear");
                    }
                });
            }
        });

        /* Check if something appears when window is resized. */
        $window.bind("resize", function(event) {
            update();
        });
              
        /* With IOS5 force loading images when navigating with back button. */
        /* Non optimal workaround. */
        if ((/iphone|ipod|ipad.*os 5/gi).test(navigator.appVersion)) {
            $window.bind("pageshow", function(event) {
                if (event.originalEvent.persisted) {
                    elements.each(function() {
                        $(this).trigger("appear");
                    });
                }
            });
        }

        /* Force initial check if images should appear. */
        $(window).load(function() {
            update();
        });
        
        return this;
    };

    /* Convenience methods in jQuery namespace.           */
    /* Use as  $.belowthefold(element, {threshold : 100, container : window}) */

    $.belowthefold = function(element, settings) {
        var fold;
        
        if (settings.container === undefined || settings.container === window) {
            fold = $window.height() + $window.scrollTop();
        } else {
            fold = $(settings.container).offset().top + $(settings.container).height();
        }

        return fold <= $(element).offset().top - settings.threshold;
    };
    
    $.rightoffold = function(element, settings) {
        var fold;

        if (settings.container === undefined || settings.container === window) {
            fold = $window.width() + $window.scrollLeft();
        } else {
            fold = $(settings.container).offset().left + $(settings.container).width();
        }

        return fold <= $(element).offset().left - settings.threshold;
    };
        
    $.abovethetop = function(element, settings) {
        var fold;
        
        if (settings.container === undefined || settings.container === window) {
            fold = $window.scrollTop();
        } else {
            fold = $(settings.container).offset().top;
        }

        return fold >= $(element).offset().top + settings.threshold  + $(element).height();
    };
    
    $.leftofbegin = function(element, settings) {
        var fold;
        
        if (settings.container === undefined || settings.container === window) {
            fold = $window.scrollLeft();
        } else {
            fold = $(settings.container).offset().left;
        }

        return fold >= $(element).offset().left + settings.threshold + $(element).width();
    };

    $.inviewport = function(element, settings) {
         return !$.rightoffold(element, settings) && !$.leftofbegin(element, settings) &&
                !$.belowthefold(element, settings) && !$.abovethetop(element, settings);
     };

    /* Custom selectors for your convenience.   */
    /* Use as $("img:below-the-fold").something() or */
    /* $("img").filter(":below-the-fold").something() which is faster */

    $.extend($.expr[':'], {
        "below-the-fold" : function(a) { return $.belowthefold(a, {threshold : 0}); },
        "above-the-top"  : function(a) { return !$.belowthefold(a, {threshold : 0}); },
        "right-of-screen": function(a) { return $.rightoffold(a, {threshold : 0}); },
        "left-of-screen" : function(a) { return !$.rightoffold(a, {threshold : 0}); },
        "in-viewport"    : function(a) { return $.inviewport(a, {threshold : 0}); },
        /* Maintain BC for couple of versions. */
        "above-the-fold" : function(a) { return !$.belowthefold(a, {threshold : 0}); },
        "right-of-fold"  : function(a) { return $.rightoffold(a, {threshold : 0}); },
        "left-of-fold"   : function(a) { return !$.rightoffold(a, {threshold : 0}); }
    });

})(jQuery, window, document);


/* **********************************************
     Begin jquery.fitvids.js
********************************************** */

/*global jQuery */
/*jshint multistr:true browser:true */
/*!
* FitVids 1.0
*
* Copyright 2011, Chris Coyier - http://css-tricks.com + Dave Rupert - http://daverupert.com
* Credit to Thierry Koblentz - http://www.alistapart.com/articles/creating-intrinsic-ratios-for-video/
* Released under the WTFPL license - http://sam.zoy.org/wtfpl/
*
* Date: Thu Sept 01 18:00:00 2011 -0500
*/

(function( $ ){

  "use strict";

  $.fn.fitVids = function( options ) {
    var settings = {
      customSelector: null
    };

    var div = document.createElement('div'),
        ref = document.getElementsByTagName('base')[0] || document.getElementsByTagName('script')[0];

    div.className = 'fit-vids-style';
    div.innerHTML = '&shy;<style>         \
      .fluid-width-video-wrapper {        \
         width: 100%;                     \
         position: relative;              \
         padding: 0;                      \
      }                                   \
                                          \
      .fluid-width-video-wrapper iframe,  \
      .fluid-width-video-wrapper object,  \
      .fluid-width-video-wrapper embed {  \
         position: absolute;              \
         top: 0;                          \
         left: 0;                         \
         width: 100%;                     \
         height: 100%;                    \
      }                                   \
    </style>';

    ref.parentNode.insertBefore(div,ref);

    if ( options ) {
      $.extend( settings, options );
    }

    return this.each(function(){
      var selectors = [
        "iframe[src*='player.vimeo.com']",
        "iframe[src*='youtube.com']",
        "iframe[src*='youtube-nocookie.com']",
        "iframe[src*='kickstarter.com']",
        "object",
        "embed"
      ];

      if (settings.customSelector) {
        selectors.push(settings.customSelector);
      }

      var $allVideos = $(this).find(selectors.join(','));

      $allVideos.each(function(){
        var $this = $(this);
        if (this.tagName.toLowerCase() === 'embed' && $this.parent('object').length || $this.parent('.fluid-width-video-wrapper').length) { return; }
        var height = ( this.tagName.toLowerCase() === 'object' || ($this.attr('height') && !isNaN(parseInt($this.attr('height'), 10))) ) ? parseInt($this.attr('height'), 10) : $this.height(),
            width = !isNaN(parseInt($this.attr('width'), 10)) ? parseInt($this.attr('width'), 10) : $this.width(),
            aspectRatio = height / width;
        if(!$this.attr('id')){
          var videoID = 'fitvid' + Math.floor(Math.random()*999999);
          $this.attr('id', videoID);
        }
        $this.wrap('<div class="fluid-width-video-wrapper"></div>').parent('.fluid-width-video-wrapper').css('padding-top', (aspectRatio * 100)+"%");
        $this.removeAttr('height').removeAttr('width');
      });
    });
  };
})( jQuery );


/* **********************************************
     Begin responsiveslides.min.js
********************************************** */

/*! http://responsiveslides.com v1.54 by @viljamis */
(function(c,I,B){c.fn.responsiveSlides=function(l){var a=c.extend({auto:!0,speed:500,timeout:4E3,pager:!1,nav:!1,random:!1,pause:!1,pauseControls:!0,prevText:"Previous",nextText:"Next",maxwidth:"",navContainer:"",manualControls:"",namespace:"rslides",before:c.noop,after:c.noop},l);return this.each(function(){B++;var f=c(this),s,r,t,m,p,q,n=0,e=f.children(),C=e.size(),h=parseFloat(a.speed),D=parseFloat(a.timeout),u=parseFloat(a.maxwidth),g=a.namespace,d=g+B,E=g+"_nav "+d+"_nav",v=g+"_here",j=d+"_on",
w=d+"_s",k=c("<ul class='"+g+"_tabs "+d+"_tabs' />"),x={"float":"left",position:"relative",opacity:1,zIndex:2},y={"float":"none",position:"absolute",opacity:0,zIndex:1},F=function(){var b=(document.body||document.documentElement).style,a="transition";if("string"===typeof b[a])return!0;s=["Moz","Webkit","Khtml","O","ms"];var a=a.charAt(0).toUpperCase()+a.substr(1),c;for(c=0;c<s.length;c++)if("string"===typeof b[s[c]+a])return!0;return!1}(),z=function(b){a.before(b);F?(e.removeClass(j).css(y).eq(b).addClass(j).css(x),
n=b,setTimeout(function(){a.after(b)},h)):e.stop().fadeOut(h,function(){c(this).removeClass(j).css(y).css("opacity",1)}).eq(b).fadeIn(h,function(){c(this).addClass(j).css(x);a.after(b);n=b})};a.random&&(e.sort(function(){return Math.round(Math.random())-0.5}),f.empty().append(e));e.each(function(a){this.id=w+a});f.addClass(g+" "+d);l&&l.maxwidth&&f.css("max-width",u);e.hide().css(y).eq(0).addClass(j).css(x).show();F&&e.show().css({"-webkit-transition":"opacity "+h+"ms ease-in-out","-moz-transition":"opacity "+
h+"ms ease-in-out","-o-transition":"opacity "+h+"ms ease-in-out",transition:"opacity "+h+"ms ease-in-out"});if(1<e.size()){if(D<h+100)return;if(a.pager&&!a.manualControls){var A=[];e.each(function(a){a+=1;A+="<li><a href='#' class='"+w+a+"'>"+a+"</a></li>"});k.append(A);l.navContainer?c(a.navContainer).append(k):f.after(k)}a.manualControls&&(k=c(a.manualControls),k.addClass(g+"_tabs "+d+"_tabs"));(a.pager||a.manualControls)&&k.find("li").each(function(a){c(this).addClass(w+(a+1))});if(a.pager||a.manualControls)q=
k.find("a"),r=function(a){q.closest("li").removeClass(v).eq(a).addClass(v)};a.auto&&(t=function(){p=setInterval(function(){e.stop(!0,!0);var b=n+1<C?n+1:0;(a.pager||a.manualControls)&&r(b);z(b)},D)},t());m=function(){a.auto&&(clearInterval(p),t())};a.pause&&f.hover(function(){clearInterval(p)},function(){m()});if(a.pager||a.manualControls)q.bind("click",function(b){b.preventDefault();a.pauseControls||m();b=q.index(this);n===b||c("."+j).queue("fx").length||(r(b),z(b))}).eq(0).closest("li").addClass(v),
a.pauseControls&&q.hover(function(){clearInterval(p)},function(){m()});if(a.nav){g="<a href='#' class='"+E+" prev'>"+a.prevText+"</a><a href='#' class='"+E+" next'>"+a.nextText+"</a>";l.navContainer?c(a.navContainer).append(g):f.after(g);var d=c("."+d+"_nav"),G=d.filter(".prev");d.bind("click",function(b){b.preventDefault();b=c("."+j);if(!b.queue("fx").length){var d=e.index(b);b=d-1;d=d+1<C?n+1:0;z(c(this)[0]===G[0]?b:d);if(a.pager||a.manualControls)r(c(this)[0]===G[0]?b:d);a.pauseControls||m()}});
a.pauseControls&&d.hover(function(){clearInterval(p)},function(){m()})}}if("undefined"===typeof document.body.style.maxWidth&&l.maxwidth){var H=function(){f.css("width","100%");f.width()>u&&f.css("width",u)};H();c(I).bind("resize",function(){H()})}})}})(jQuery,this,0);


/* **********************************************
     Begin plugins.js
********************************************** */

// Avoid `console` errors in browsers that lack a console.
(function() {
    var method;
    var noop = function noop() {};
    var methods = [
        'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
        'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
        'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
        'timeStamp', 'trace', 'warn'
    ];
    var length = methods.length;
    var console = (window.console = window.console || {});

    while (length--) {
        method = methods[length];

        // Only stub undefined methods.
        if (!console[method]) {
            console[method] = noop;
        }
    }
}());

// Place any jQuery/helper plugins in here.


/* **********************************************
     Begin main.js
********************************************** */

/*
$(window).load(function(){
    $("#shadow").css("height", $(document).height()).hide();
    $("#shadow").css("width", $(document).width()).hide();
});

$(".lightSwitcher").click(function(){
    $("#shadow").fadeToggle("fast","swing");
});
*/

/*
$(document).ready(function() {
	$('#displaymap').click(function() {
		$('.map-container').slideToggle('slow', function() {
	});
	return false;
	});
});
*/

$(document).ready(function(){
  $(".image-popup").magnificPopup({type:"image"});
  $(".lazy").lazyload({threshold : 200, effect : "fadeIn"});

	// Cache the Window object

	var $window = $(window);

      $(window).scroll(function() {
		// Scroll the background at var speed
		var babydistance = ($('.baby-container').offset().top - 100);
		//var yPos = $window.scrollTop(), distance = $('.img-contain').offset().top;


		if ( $window.scrollTop() >= babydistance ) {
		// Put together our final background position

		//var coords = (0.5 * (yPos-150)) + 'px';

		//var opac = ((0.0167 * yPos) - 1.5);


		// Move the background

		//$('.parallax-image').css({"top": coords });
		//$('.img-overlay').css({"opacity": opac });

		$('.baby').css({"opacity":"1" });
		}

		else {
		$('.baby').css({"opacity":"0" });
		//$('.img-overlay').css({"opacity":"1" });
		}

		    


}); // window scroll Ends

jQuery.easing.def = "easeInOutCubic";
$("#night-trigger").hover( function() { $("#night img").attr("src", $("#night img").attr("data-original")); $("#night img").removeAttr("data-original"); $("#night").fadeToggle(); } );
$("#eyes-trigger").hover( function() { $("#eyes img").attr("src", $("#eyes img").attr("data-original")); $("#eys img").removeAttr("data-original"); $("#eyes").fadeToggle(); } );
$("#autumn-trigger").hover( function() { $("#autumn img").attr("src", $("#autumn img").attr("data-original")); $("#autumn img").removeAttr("data-original"); $("#autumn").fadeToggle(); } );
$("#cast-trigger").hover( function() { $("#cast img").attr("src", $("#cast img").attr("data-original")); $("#cast img").removeAttr("data-original"); $("#cast").fadeToggle(); } );
$("#flight-trigger").hover( function() { $("#flight img").attr("src", $("#flight img").attr("data-original")); $("#flight img").removeAttr("data-original"); $("#flight").fadeToggle(); } );
$("#bridge-trigger").hover( function() { $("#bridge img").attr("src", $("#bridge img").attr("data-original")); $("#bridge img").removeAttr("data-original"); $("#bridge").fadeToggle(); } );
$("#beth-trigger").hover( function() { $("#beth img").attr("src", $("#beth img").attr("data-original")); $("#beth img").removeAttr("data-original"); $("#beth").fadeToggle(); } );
$("#fred-trigger").hover( function() { $("#fred img").attr("src", $("#fred img").attr("data-original")); $("#fred img").removeAttr("data-original"); $("#fred").fadeToggle(); } );
$("#aaron-trigger").hover( function() { $("#aaron img").attr("src", $("#aaron img").attr("data-original")); $("#aaron img").removeAttr("data-original"); $("#aaron").fadeToggle(); } );
$(".rslides").responsiveSlides();
$("a[title]").qtip({position: {
		my: 'top center',  
		at: 'bottom center', 
		target: $('.soon') 
	}})
$("#fitvid").fitVids();

});



