!function(e){function o(n){if(t[n])return t[n].exports;var r=t[n]={i:n,l:!1,exports:{}};return e[n].call(r.exports,r,r.exports,o),r.l=!0,r.exports}var t={};o.m=e,o.c=t,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:n})},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,o){return Object.prototype.hasOwnProperty.call(e,o)},o.p="",o(o.s=1)}([function(e,o,t){"use strict";function n(e,o){if(!(e instanceof o))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(o,"__esModule",{value:!0});var r=function(){function e(e,o){for(var t=0;t<o.length;t++){var n=o[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(o,t,n){return t&&e(o.prototype,t),n&&e(o,n),o}}(),c=function(){function e(){n(this,e)}return r(e,null,[{key:"createRoom",value:function(e,o){var t=new FormData;return t.append("cate",e),t.append("room",o),fetch("../php/.net/mkroom.php",{method:"POST",mode:"cors",credentials:"include",body:t})}},{key:"joinRoom",value:function(e){console.log("joinRoom roomName: "+e)}}]),e}();o.default=c},function(e,o,t){"use strict";var n=t(0),r=function(e){return e&&e.__esModule?e:{default:e}}(n);console.log("top.js"),document.querySelector(".select-create-button").addEventListener("click",function(e){document.querySelector(".create-box").style.display="block",document.querySelector(".join-box").style.display="none"}),document.querySelector(".select-join-button").addEventListener("click",function(e){document.querySelector(".join-box").style.display="block",document.querySelector(".create-box").style.display="none"}),document.querySelector(".create-button").addEventListener("click",function(e){var o=document.querySelector("select").value,t=document.querySelector(".room-name").value;r.default.createRoom(o,t).then(function(e){if(e.ok){var e=e.json();window.location=".//"+t}else console.log("create error",e),alert("error")})}),document.querySelector(".join-button").addEventListener("click",function(e){var o=document.querySelector(".join-room-name").value;r.default.joinRoom(o)})}]);