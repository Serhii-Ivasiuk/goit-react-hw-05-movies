"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[247],{247:function(t,n,e){e.r(n);var r=e(439),a=e(791),c=e(689),u=e(714),o=e(184);n.default=function(){var t=(0,a.useState)(null),n=(0,r.Z)(t,2),e=n[0],i=n[1],s=(0,c.UO)().movieId;return(0,a.useEffect)((function(){(0,u.gI)(s).then((function(t){return i(t)}))}),[s]),(0,o.jsxs)(o.Fragment,{children:[e&&(0,o.jsx)("ul",{children:e.map((function(t){var n=t.id,e=t.name,r=t.profile_path,a=t.character;return(0,o.jsxs)("li",{children:[(0,o.jsx)("img",{src:r?"https://image.tmdb.org/t/p/w500/".concat(r):"https://via.placeholder.com/100x150",alt:"".concat(e),width:"100",height:"150"}),(0,o.jsx)("p",{children:e}),(0,o.jsx)("p",{children:a})]},n)}))}),0===(null===e||void 0===e?void 0:e.length)&&(0,o.jsx)("p",{children:"Unfortunately, we don't have information about the cast of this movie."})]})}},714:function(t,n,e){e.d(n,{FL:function(){return p},Nr:function(){return s},Xj:function(){return d},gI:function(){return f},l3:function(){return i}});var r=e(861),a=e(757),c=e.n(a),u=e(243);u.Z.defaults.baseURL="https://api.themoviedb.org/3";var o=new URLSearchParams({method:"GET",api_key:"bdb5e5a669f604b5ce5232529fdedd0b",language:"en-US",include_adult:!1,headers:{accept:"application/json"}}),i=function(){var t=(0,r.Z)(c().mark((function t(){var n;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return"/trending/movie/day",t.next=3,u.Z.get("".concat("/trending/movie/day","?").concat(o));case 3:return n=t.sent,t.abrupt("return",n.data.results);case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),s=function(){var t=(0,r.Z)(c().mark((function t(n){var e;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return"/search/movie",t.next=3,u.Z.get("".concat("/search/movie","?").concat(o,"&query=").concat(n));case 3:return e=t.sent,t.abrupt("return",e.data.results);case 5:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}(),p=function(){var t=(0,r.Z)(c().mark((function t(n){var e,r;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e="/movie/".concat(n),t.next=3,u.Z.get("".concat(e,"?").concat(o));case 3:return r=t.sent,t.abrupt("return",r.data);case 5:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}(),f=function(){var t=(0,r.Z)(c().mark((function t(n){var e,r;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e="/movie/".concat(n,"/credits"),t.next=3,u.Z.get("".concat(e,"?").concat(o));case 3:return r=t.sent,t.abrupt("return",r.data.cast);case 5:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}(),d=function(){var t=(0,r.Z)(c().mark((function t(n){var e,r;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e="/movie/".concat(n,"/reviews"),t.next=3,u.Z.get("".concat(e,"?").concat(o));case 3:return r=t.sent,t.abrupt("return",r.data.results);case 5:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}()}}]);
//# sourceMappingURL=247.271164d0.chunk.js.map