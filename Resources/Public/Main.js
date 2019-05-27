/*!
 * Jonnitto.PrettyEmbedVimeo - created by Jon Uhlmann
 * @link https://github.com/jonnitto/Jonnitto.PrettyEmbedVimeo
 */
!function(){"use strict";function e(t){return(e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(t)}var t,n=(function(e){!function(){var t,n=0,o=0,i={},r={};function c(e,o,i){return"_root"==o?i:e!==i?function(e){return t||(t=e.matches?e.matches:e.webkitMatchesSelector?e.webkitMatchesSelector:e.mozMatchesSelector?e.mozMatchesSelector:e.msMatchesSelector?e.msMatchesSelector:e.oMatchesSelector?e.oMatchesSelector:u.matchesSelector)}(e).call(e,o)?e:e.parentNode?(n++,c(e.parentNode,o,i)):void 0:void 0}function a(e,t,n,o){i[e.id]||(i[e.id]={}),i[e.id][t]||(i[e.id][t]={}),i[e.id][t][n]||(i[e.id][t][n]=[]),i[e.id][t][n].push(o)}function l(e,t,n,o){if(i[e.id])if(t)if(o||n)if(o){if(i[e.id][t][n])for(var r=0;r<i[e.id][t][n].length;r++)if(i[e.id][t][n][r]===o){i[e.id][t][n].splice(r,1);break}}else delete i[e.id][t][n];else i[e.id][t]={};else for(var c in i[e.id])i[e.id].hasOwnProperty(c)&&(i[e.id][c]={})}function s(e,t,o,s){if(this.element){e instanceof Array||(e=[e]),o||"function"!=typeof t||(o=t,t="_root");var d,f=this.id;for(d=0;d<e.length;d++)s?l(this,e[d],t,o):(i[f]&&i[f][e[d]]||u.addEvent(this,e[d],m(e[d])),a(this,e[d],t,o));return this}function m(e){return function(t){!function(e,t,o){if(i[e][o]){var a,l,s=t.target||t.srcElement,d={},f=0,m=0;for(a in n=0,i[e][o])i[e][o].hasOwnProperty(a)&&(l=c(s,a,r[e].element))&&u.matchesEvent(o,r[e].element,l,"_root"==a,t)&&(n++,i[e][o][a].match=l,d[n]=i[e][o][a]);for(t.stopPropagation=function(){t.cancelBubble=!0},f=0;f<=n;f++)if(d[f])for(m=0;m<d[f].length;m++){if(!1===d[f][m].call(d[f].match,t))return void u.cancel(t);if(t.cancelBubble)return}}}(f,t,e)}}}function u(e,t){if(!(this instanceof u)){for(var n in r)if(r[n].element===e)return r[n];return r[++o]=new u(e,o),r[o]}this.element=e,this.id=t}u.prototype.on=function(e,t,n){return s.call(this,e,t,n)},u.prototype.off=function(e,t,n){return s.call(this,e,t,n,!0)},u.matchesSelector=function(){},u.cancel=function(e){e.preventDefault(),e.stopPropagation()},u.addEvent=function(e,t,n){var o="blur"==t||"focus"==t;e.element.addEventListener(t,n,o)},u.matchesEvent=function(){return!0},e.exports&&(e.exports=u),window.Gator=u}()}(t={exports:{}},t.exports),t.exports),o="a.jonnitto-prettyembedvimeo--inline",i="jonnitto-prettyembedvimeo--play";function r(t){var n=t.getAttribute("data-embed")||!1,o=t.getElementsByTagName("img")[0],r=o.getAttribute("src")||!1,c=o.width,a=o.height;if(n&&c&&a){var l=function(t,n){if("object"===e(t)&&"string"==typeof n){var o=t,i=o.tagName,r=new RegExp("^<"+i,"i"),c=new RegExp(i+">$","i"),a="<"+n,l=n+">",s=document.createElement("div");s.innerHTML=o.outerHTML.replace(r,a).replace(c,l);var u=s.firstChild;return t.parentNode.replaceChild(u,t),u}}(t,"div"),s="true"==t.getAttribute("data-fs")?"allowfullscreen ":"";l.setAttribute("data-img",r),l.classList.add(i),l.style.paddingTop=parseInt(a)/parseInt(c)*100+"%",l.innerHTML='<iframe src="'.concat(n,'" width="').concat(c,'" height="').concat(a,'" ').concat(s,'frameborder="0" allow="fullscreen; accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"></iframe>')}}n(window).on("load",function(){!function(e){if(/Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent)){void 0===e&&(e=document.querySelectorAll(o));for(var t=e.length-1;t>=0;t--)r(e[t])}}()}),n(document.documentElement).on("click",o,function(e){e.preventDefault(),r(this)});var c=document.documentElement,a="jonnitto-prettyembedvimeo__lightbox",l="".concat(a,"-visible"),s='\n<div class="'.concat(a,'-holder">\n    <iframe class="').concat(a,'-iframe" src="%src%" frameborder="0" allow="fullscreen; accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"%fs%></iframe>\n</div>'),u=!1,d=document.createElement("div");function f(){document.body.classList.remove(l),setTimeout(function(){u.innerHTML=""},300)}d.className=a,d.innerHTML='\n<div class="'.concat(a,'-inner">\n    <button type="button" class="').concat(a,'-close">&times;</button>\n    <div id="popup-vimeo" class="').concat(a,'-content"></div>\n</div>'),n(c).on("click","a.jonnitto-prettyembedvimeo--lightbox",function(e){var t="true"==this.getAttribute("data-fs")?" allowfullscreen":"",n=this.getAttribute("data-embed")||!1;u||(document.body.appendChild(d),u=document.getElementById("popup-vimeo")),n&&(e.preventDefault(),u.innerHTML=s.replace("%src%",n).replace("%fs%",t),setTimeout(function(){document.body.classList.add(l)},100))}),n(c).on("click",".".concat(a),f),n(c).on("keyup",function(e){27==e.keyCode&&-1!=document.body.classList.contains(l)&&f()})}();

//# sourceMappingURL=Main.js.map
