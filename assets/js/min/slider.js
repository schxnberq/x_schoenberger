document.addEventListener("DOMContentLoaded",function(){var t=document.querySelectorAll(".gallery__cnt__thmb a");t.forEach(function(e){e.addEventListener("click",function(e){function n(){var t=$(".overlay__cnt .overlay__slide img");$(function(){var e=t.parent().height();t.css({height:e+"px",width:1.5*e+"px"}),t.width()+40>=window.innerWidth&&t.css({height:"auto",width:"100%"})})}e.preventDefault(),e.target.getAttribute("href");var a=document.createElement("div");a.setAttribute("class","overlay");var r=document.createElement("div");r.setAttribute("class","overlay__cnt"),a.appendChild(r);var i=document.createElement("img");i.setAttribute("data-idx",e.target.getAttribute("data-idx")),i.setAttribute("src",e.target.getAttribute("href"));var u=document.createElement("div");u.setAttribute("class","overlay__slide"),u.appendChild(i);var c=document.createElement("div");c.innerHTML="<span></span>",c.setAttribute("class","overlay__prev");var o=document.createElement("div");o.innerHTML="<span></span>",o.setAttribute("class","overlay__next");var s=document.createElement("div");s.setAttribute("class","exit"),a.appendChild(s),r.appendChild(u);var d=parseInt(i.getAttribute("data-idx"))-1;-1==d&&(d=t.length-1);var l=document.querySelector(".gallery__cnt__thmb a[data-idx='"+d+"'"),h=document.createElement("img");h.setAttribute("data-idx",l.getAttribute("data-idx")),h.setAttribute("src",l);var v=document.createElement("div");v.setAttribute("class","overlay__slide"),v.appendChild(h);var _=parseInt(i.getAttribute("data-idx"))+1;_==t.length&&(_=0);var f=document.querySelector(".gallery__cnt__thmb a[data-idx='"+_+"'"),m=document.createElement("img");m.setAttribute("data-idx",f.getAttribute("data-idx")),m.setAttribute("src",f);var g=document.createElement("div");g.setAttribute("class","overlay__slide scale"),g.appendChild(m);var p=_+1,y=document.querySelector(".gallery__cnt__thmb a[data-idx='"+p+"'");console.log(d),console.log(_),r.prepend(v),r.append(g),a.append(c),a.append(o),e.target.parentNode.parentNode.parentNode.append(a),function($,e){function n(){$(function(){var t=$(".overlay__cnt .overlay__slide img"),e=t.parent().height();t.css({height:e+"px",width:1.5*e+"px"}),t.width()+40>=window.innerWidth&&t.css({height:"auto",width:"100%"})}),$(".overlay__cnt").animate({"margin-left":-1*u},400,"easeInOutCubic",function(){$(".overlay__cnt > .overlay__slide").first().remove();var t=$(".overlay__cnt div:nth-child(2)")[0].childNodes[0].getAttribute("data-idx");t=parseInt(t)+1;var e=$(".gallery__cnt__thmb a[data-idx='"+_+"']").attr("href"),n=document.createElement("img");n.setAttribute("src",e),n.setAttribute("data-idx",t);var a=document.createElement("div");a.setAttribute("class","overlay__slide"),a.appendChild(n),$(".overlay__cnt > .overlay__slide").last().after(a),$(".overlay__cnt").css("margin-left",0)})}function a(){$(function(){var t=$(".overlay__cnt .overlay__slide img"),e=t.parent().height();t.css({height:e+"px",width:1.5*e+"px"}),t.width()+40>=window.innerWidth&&t.css({height:"auto",width:"100%"})}),$(".overlay__cnt > .overlay__slide").last().remove();var t=$(".overlay__cnt div:nth-child(2)")[0].childNodes[0].getAttribute("data-idx");t=parseInt(t)-2;var e=$(".gallery__cnt__thmb a[data-idx='"+d+"']").attr("href"),n=document.createElement("img");n.setAttribute("src",e),n.setAttribute("data-idx",t);var a=document.createElement("div");a.setAttribute("class","overlay__slide"),a.appendChild(n),$(".overlay__cnt > .overlay__slide").first().before(a),$(".overlay__cnt").css("margin-left",-1*u),$(".overlay__cnt").animate({"margin-left":0},400,"easeInOutCubic")}function r(t){o=t.touches[0].clientX,s=t.touches[0].clientY}function i(t){if(o&&s){var e=t.touches[0].clientX,r=t.touches[0].clientY,i=o-e,u=s-r;Math.abs(i)>Math.abs(u)&&(i>0?n():a()),o=null,s=null}}$.easing.jswing=$.easing.swing,$.extend($.easing,{def:"easeOutQuad",swing:function(t,e,n,a,r){return $.easing[$.easing.def](t,e,n,a,r)},easeInQuad:function(t,e,n,a,r){return a*(e/=r)*e+n},easeOutQuad:function(t,e,n,a,r){return-a*(e/=r)*(e-2)+n},easeInOutQuad:function(t,e,n,a,r){return(e/=r/2)<1?a/2*e*e+n:-a/2*(--e*(e-2)-1)+n},easeInCubic:function(t,e,n,a,r){return a*(e/=r)*e*e+n},easeOutCubic:function(t,e,n,a,r){return a*((e=e/r-1)*e*e+1)+n},easeInOutCubic:function(t,e,n,a,r){return(e/=r/2)<1?a/2*e*e*e+n:a/2*((e-=2)*e*e+2)+n},easeInQuart:function(t,e,n,a,r){return a*(e/=r)*e*e*e+n},ease:function(t,e,n,a,r){return-a*((e=e/r-1)*e*e*e-1)+n},easeInOutQuart:function(t,e,n,a,r){return(e/=r/2)<1?a/2*e*e*e*e+n:-a/2*((e-=2)*e*e*e-2)+n},easeInQuint:function(t,e,n,a,r){return a*(e/=r)*e*e*e*e+n},easeOutQuint:function(t,e,n,a,r){return a*((e=e/r-1)*e*e*e*e+1)+n},easeInOutQuint:function(t,e,n,a,r){return(e/=r/2)<1?a/2*e*e*e*e*e+n:a/2*((e-=2)*e*e*e*e+2)+n},easeInSine:function(t,e,n,a,r){return-a*Math.cos(e/r*(Math.PI/2))+a+n},easeOutSine:function(t,e,n,a,r){return a*Math.sin(e/r*(Math.PI/2))+n},easeInOutSine:function(t,e,n,a,r){return-a/2*(Math.cos(Math.PI*e/r)-1)+n},easeInExpo:function(t,e,n,a,r){return 0==e?n:a*Math.pow(2,10*(e/r-1))+n},easeOutExpo:function(t,e,n,a,r){return e==r?n+a:a*(1-Math.pow(2,-10*e/r))+n},easeInOutExpo:function(t,e,n,a,r){return 0==e?n:e==r?n+a:(e/=r/2)<1?a/2*Math.pow(2,10*(e-1))+n:a/2*(2-Math.pow(2,-10*--e))+n},easeInCirc:function(t,e,n,a,r){return-a*(Math.sqrt(1-(e/=r)*e)-1)+n},easeOutCirc:function(t,e,n,a,r){return a*Math.sqrt(1-(e=e/r-1)*e)+n},easeInOutCirc:function(t,e,n,a,r){return(e/=r/2)<1?-a/2*(Math.sqrt(1-e*e)-1)+n:a/2*(Math.sqrt(1-(e-=2)*e)+1)+n},easeInElastic:function(t,e,n,a,r){var i=1.70158,u=0,c=a;if(0==e)return n;if(1==(e/=r))return n+a;if(u||(u=.3*r),c<Math.abs(a)){c=a;var i=u/4}else var i=u/(2*Math.PI)*Math.asin(a/c);return-c*Math.pow(2,10*(e-=1))*Math.sin((e*r-i)*(2*Math.PI)/u)+n},easeOutElastic:function(t,e,n,a,r){var i=1.70158,u=0,c=a;if(0==e)return n;if(1==(e/=r))return n+a;if(u||(u=.3*r),c<Math.abs(a)){c=a;var i=u/4}else var i=u/(2*Math.PI)*Math.asin(a/c);return c*Math.pow(2,-10*e)*Math.sin((e*r-i)*(2*Math.PI)/u)+a+n},easeInOutElastic:function(t,e,n,a,r){var i=1.70158,u=0,c=a;if(0==e)return n;if(2==(e/=r/2))return n+a;if(u||(u=r*(.3*1.5)),c<Math.abs(a)){c=a;var i=u/4}else var i=u/(2*Math.PI)*Math.asin(a/c);return e<1?c*Math.pow(2,10*(e-=1))*Math.sin((e*r-i)*(2*Math.PI)/u)*-.5+n:c*Math.pow(2,-10*(e-=1))*Math.sin((e*r-i)*(2*Math.PI)/u)*.5+a+n},easeInBack:function(t,e,n,a,r,i){return void 0==i&&(i=1.70158),a*(e/=r)*e*((i+1)*e-i)+n},easeOutBack:function(t,e,n,a,r,i){return void 0==i&&(i=1.70158),a*((e=e/r-1)*e*((i+1)*e+i)+1)+n},easeInOutBack:function(t,e,n,a,r,i){return void 0==i&&(i=1.70158),(e/=r/2)<1?a/2*(e*e*((1+(i*=1.525))*e-i))+n:a/2*((e-=2)*e*((1+(i*=1.525))*e+i)+2)+n},easeInBounce:function(t,e,n,a,r){return a-$.easing.easeOutBounce(t,r-e,0,a,r)+n},easeOutBounce:function(t,e,n,a,r){return(e/=r)<1/2.75?a*(7.5625*e*e)+n:e<2/2.75?a*(7.5625*(e-=1.5/2.75)*e+.75)+n:e<2.5/2.75?a*(7.5625*(e-=2.25/2.75)*e+.9375)+n:a*(7.5625*(e-=2.625/2.75)*e+.984375)+n},easeInOutBounce:function(t,e,n,a,r){return e<r/2?.5*$.easing.easeInBounce(t,2*e,0,a,r)+n:.5*$.easing.easeOutBounce(t,2*e-r,0,a,r)+.5*a+n}});var u=$(".overlay__cnt > .overlay__slide").first().width(),c=$(".overlay__cnt > .overlay__slide").length;$(".overlay__next").on("click",function(){_++,_==t.length&&(_=0),n()}),document.addEventListener("keydown",function(e){39==e.keyCode&&(_++,_==t.length&&(_=0),n())}),$(".overlay__prev").on("click",function(){d--,-1==d&&(d=t.length-1),a()}),document.addEventListener("keydown",function(e){37==e.keyCode&&(d--,-1==d&&(d=t.length-1),a())}),document.addEventListener("touchstart",r,!1),document.addEventListener("touchmove",i,!1);var o=null,s=null}(jQuery),n(),window.addEventListener("resize",n),document.addEventListener("keydown",function(t){27==t.keyCode&&a.remove()}),$(".overlay .exit").on("click",function(){$(".overlay").remove()})})})});