"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[457],{726:function(e,n,r){r.d(n,{Hg:function(){return d},Jh:function(){return f},TP:function(){return p},z1:function(){return s}});var t=r(861),a=r(757),o=r.n(a),i=r(243),c="6761a75cfe3ce8a6cf2b591c7da9567e";function s(e){return u.apply(this,arguments)}function u(){return(u=(0,t.Z)(o().mark((function e(n){var r,t;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,r="search/movie?api_key=".concat(c,"&language=en-US&query=").concat(n,"&page=1&include_adult=false"),e.next=4,i.Z.get(r);case 4:return t=e.sent,e.abrupt("return",t.data);case 8:throw e.prev=8,e.t0=e.catch(0),console.error("There is a error in search movies of",e.t0),e.t0;case 12:case"end":return e.stop()}}),e,null,[[0,8]])})))).apply(this,arguments)}function p(e){return l.apply(this,arguments)}function l(){return(l=(0,t.Z)(o().mark((function e(n){var r,t;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,r="movie/".concat(n,"?api_key=").concat(c,"&language=en-US"),e.next=4,i.Z.get(r);case 4:return t=e.sent,e.abrupt("return",t.data);case 8:throw e.prev=8,e.t0=e.catch(0),console.error("There is a error in search movies details of",e.t0),e.t0;case 12:case"end":return e.stop()}}),e,null,[[0,8]])})))).apply(this,arguments)}function d(){return h.apply(this,arguments)}function h(){return(h=(0,t.Z)(o().mark((function e(){var n,r;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,n="trending/movie/day?api_key=".concat(c),e.next=4,i.Z.get(n);case 4:return r=e.sent,e.abrupt("return",r.data);case 8:throw e.prev=8,e.t0=e.catch(0),console.error("There is a error in searching trendings of",e.t0),e.t0;case 12:case"end":return e.stop()}}),e,null,[[0,8]])})))).apply(this,arguments)}function f(e){return g.apply(this,arguments)}function g(){return(g=(0,t.Z)(o().mark((function e(n){var r,t;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,r="movie/".concat(n,"/reviews?api_key=").concat(c,"&language=en-US&page=1"),e.next=4,i.Z.get(r);case 4:return t=e.sent,e.abrupt("return",t.data);case 8:throw e.prev=8,e.t0=e.catch(0),console.error("There is a error in searching reviews of",e.t0),e.t0;case 12:case"end":return e.stop()}}),e,null,[[0,8]])})))).apply(this,arguments)}i.Z.defaults.baseURL="https://api.themoviedb.org/3/"},457:function(e,n,r){function t(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function a(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function o(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?a(Object(r),!0).forEach((function(n){t(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}r.r(n),r.d(n,{default:function(){return S}});var i,c,s,u,p,l,d,h,f=r(439),g=r(791),v=r(689),x=r(87),m=r(726),b=r(168),y=r(444),w=y.ZP.h2(i||(i=(0,b.Z)(["\n  margin: 0;\n"]))),j=y.ZP.div(c||(c=(0,b.Z)(["\n  display: flex;\n  padding: 30px;\n  border-bottom: solid 1px grey;\n"]))),Z=y.ZP.div(s||(s=(0,b.Z)(["\n  padding: 20px 40px;\n"]))),O=y.ZP.ul(u||(u=(0,b.Z)(["\n  list-style: none;\n  display: flex;\n  padding: 0;\n  gap: 16px;\n  text-decoration: none;\n"]))),P=(y.ZP.li(p||(p=(0,b.Z)(["\n  list-style: none;\n  display: flex;\n  padding: 0;\n  gap: 16px;\n  text-decoration: none;\n"]))),y.ZP.button(l||(l=(0,b.Z)(["\n  margin-top: 16px;\n  padding: 8px 16px;\n  border-radius: 4px;\n  border: none;\n  margin-bottom: 10px;\n  font-weight: 500;\n  &:hover {\n    background-color: #63c5da;\n  }\n  background-color: rgb(31, 133, 255);\n"])))),k=(0,y.ZP)(x.rU)(d||(d=(0,b.Z)(["\n  display: flex;\n  font-size: 14px;\n  align-items: center;\n  column-gap: 10px;\n  color: white;\n  list-style: none;\n  text-decoration: none;\n"]))),_=y.ZP.div(h||(h=(0,b.Z)(["\n  padding: 20px;\n  border-bottom: solid 1px grey;\n  text-decoration: none;\n"]))),U=r(184);var S=function(){var e,n,r=(0,v.UO)().movieIdParam,t=(0,g.useState)({}),a=(0,f.Z)(t,2),i=a[0],c=a[1],s=(0,v.TH)();(0,g.useEffect)((function(){(0,m.TP)(r).then((function(e){return c(e)}))}),[r]);var u=i.original_title,p=i.overview,l=i.genres,d=i.poster_path,h=(10*i.vote_average).toFixed(2);return(0,U.jsxs)("main",{children:[(0,U.jsx)(P,{type:"button",children:(0,U.jsx)(k,{to:null!==(e=null===(n=s.state)||void 0===n?void 0:n.from)&&void 0!==e?e:"/",children:"Go back"})}),(0,U.jsxs)(j,{className:"MovieBox",children:[(0,U.jsx)("img",{src:d?"https://image.tmdb.org/t/p/w300".concat(d):"http://www.suryalaya.org/images/no_image.jpg",width:320,height:380,loading:"lazy",alt:"poster"}),(0,U.jsxs)(Z,{children:[(0,U.jsx)(w,{children:u}),(0,U.jsxs)("h3",{children:["User score: ",h,"%"]}),(0,U.jsx)("h3",{children:"Overview"}),(0,U.jsxs)("p",{children:[p,"nu ma vezi Silviu"]}),(0,U.jsx)("h3",{children:"Genres"}),(0,U.jsx)(O,{children:l&&l.length&&l.map((function(e){var n=e.id,r=e.name;return(0,U.jsx)("li",{children:r},n)}))})]})]}),(0,U.jsxs)(_,{children:[(0,U.jsx)("h4",{children:"Additional information"}),(0,U.jsxs)("ul",{children:[(0,U.jsx)("li",{children:(0,U.jsx)(x.rU,{to:{pathname:"/cast",state:o({},s.state)},children:"Cast"})}),(0,U.jsx)("li",{children:(0,U.jsx)(x.rU,{to:{pathname:"/reviews",state:o({},s.state)},children:"Reviews"})})]})]})]})}}}]);
//# sourceMappingURL=457.d5a38919.chunk.js.map