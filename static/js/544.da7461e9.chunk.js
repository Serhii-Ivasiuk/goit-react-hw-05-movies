"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[544],{544:function(t,n,e){e.r(n);var r=e(439),a=e(791),c=e(689),u=e(87),o=e(714),i=e(184);n.default=function(){var t=(0,a.useState)(null),n=(0,r.Z)(t,2),e=n[0],s=n[1],f=(0,c.TH)();return(0,a.useEffect)((function(){(0,o.l3)().then((function(t){return s(t)}))}),[]),e&&(0,i.jsxs)("div",{children:[(0,i.jsx)("h1",{children:"Trending today"}),(0,i.jsx)("ul",{children:e.map((function(t){var n=t.id,e=t.title;return(0,i.jsx)("li",{children:(0,i.jsx)(u.rU,{to:"movies/".concat(n),state:f,children:e})},n)}))})]})}},714:function(t,n,e){e.d(n,{FL:function(){return f},Nr:function(){return s},Xj:function(){return d},gI:function(){return p},l3:function(){return i}});var r=e(861),a=e(757),c=e.n(a),u=e(243);u.Z.defaults.baseURL="https://api.themoviedb.org/3";var o=new URLSearchParams({method:"GET",api_key:"bdb5e5a669f604b5ce5232529fdedd0b",language:"en-US",include_adult:!1,headers:{accept:"application/json"}}),i=function(){var t=(0,r.Z)(c().mark((function t(){var n;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return"/trending/movie/day",t.next=3,u.Z.get("".concat("/trending/movie/day","?").concat(o));case 3:return n=t.sent,t.abrupt("return",n.data.results);case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),s=function(){var t=(0,r.Z)(c().mark((function t(n){var e;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return"/search/movie",t.next=3,u.Z.get("".concat("/search/movie","?").concat(o,"&query=").concat(n));case 3:return e=t.sent,t.abrupt("return",e.data.results);case 5:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}(),f=function(){var t=(0,r.Z)(c().mark((function t(n){var e,r;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e="/movie/".concat(n),t.next=3,u.Z.get("".concat(e,"?").concat(o));case 3:return r=t.sent,t.abrupt("return",r.data);case 5:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}(),p=function(){var t=(0,r.Z)(c().mark((function t(n){var e,r;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e="/movie/".concat(n,"/credits"),t.next=3,u.Z.get("".concat(e,"?").concat(o));case 3:return r=t.sent,t.abrupt("return",r.data.cast);case 5:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}(),d=function(){var t=(0,r.Z)(c().mark((function t(n){var e,r;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e="/movie/".concat(n,"/reviews"),t.next=3,u.Z.get("".concat(e,"?").concat(o));case 3:return r=t.sent,t.abrupt("return",r.data.results);case 5:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}()}}]);
//# sourceMappingURL=544.da7461e9.chunk.js.map