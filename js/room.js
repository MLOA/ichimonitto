!function(e){function n(t){if(o[t])return o[t].exports;var r=o[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,n),r.l=!0,r.exports}var o={};n.m=e,n.c=o,n.d=function(e,o,t){n.o(e,o)||Object.defineProperty(e,o,{configurable:!1,enumerable:!0,get:t})},n.n=function(e){var o=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(o,"a",o),o},n.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},n.p="",n(n.s=2)}([function(e,n,o){"use strict";function t(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(n,"__esModule",{value:!0});var r=function(){function e(e,n){for(var o=0;o<n.length;o++){var t=n[o];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(e,t.key,t)}}return function(n,o,t){return o&&e(n.prototype,o),t&&e(n,t),n}}(),u=function(){function e(){t(this,e)}return r(e,null,[{key:"post",value:function(e,n){return fetch(e,{method:"POST",mode:"cors",credentials:"include",body:n})}},{key:"createRoom",value:function(e,n){console.log("create",arguments);var o=new FormData;return o.append("ctr","make"),o.append("cate",e),o.append("room",n),this.post("../php/mkroom.php",o).then(function(e){return e.text()})}},{key:"joinRoom",value:function(e){console.log("join",arguments)}},{key:"kick",value:function(e){console.log("kick",arguments)}}]),e}();n.default=u},,function(e,n,o){"use strict";var t=o(0);!function(e){e&&e.__esModule}(t);console.log("room.js")}]);