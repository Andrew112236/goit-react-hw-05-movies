"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[716],{7726:function(n,e,r){r.d(e,{Hg:function(){return d},Jh:function(){return m},TP:function(){return p},z1:function(){return u},zv:function(){return h}});var t=r(5861),o=r(7757),i=r.n(o),a=r(1243),c="6761a75cfe3ce8a6cf2b591c7da9567e";function u(n){return s.apply(this,arguments)}function s(){return(s=(0,t.Z)(i().mark((function n(e){var r,t;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,r="search/movie?api_key=".concat(c,"&language=en-US&query=").concat(e,"&page=1&include_adult=false"),n.next=4,a.Z.get(r);case 4:return t=n.sent,n.abrupt("return",t.data);case 8:throw n.prev=8,n.t0=n.catch(0),console.error("There is a error in search movies of",n.t0),n.t0;case 12:case"end":return n.stop()}}),n,null,[[0,8]])})))).apply(this,arguments)}function p(n){return l.apply(this,arguments)}function l(){return(l=(0,t.Z)(i().mark((function n(e){var r,t;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,r="movie/".concat(e,"?api_key=").concat(c,"&language=en-US"),n.next=4,a.Z.get(r);case 4:return t=n.sent,n.abrupt("return",t.data);case 8:throw n.prev=8,n.t0=n.catch(0),console.error("There is a error in search movies details of",n.t0),n.t0;case 12:case"end":return n.stop()}}),n,null,[[0,8]])})))).apply(this,arguments)}function h(n){return f.apply(this,arguments)}function f(){return(f=(0,t.Z)(i().mark((function n(e){var r,t;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,r="movie/".concat(e,"/credits?api_key=").concat(c,"&language=en-US"),n.next=4,a.Z.get(r);case 4:return t=n.sent,n.abrupt("return",t.data);case 8:throw n.prev=8,n.t0=n.catch(0),console.error("There is a error in searching credits of",n.t0),n.t0;case 12:case"end":return n.stop()}}),n,null,[[0,8]])})))).apply(this,arguments)}function d(){return x.apply(this,arguments)}function x(){return(x=(0,t.Z)(i().mark((function n(){var e,r;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,e="trending/movie/day?api_key=".concat(c),n.next=4,a.Z.get(e);case 4:return r=n.sent,n.abrupt("return",r.data);case 8:throw n.prev=8,n.t0=n.catch(0),console.error("There is a error in searching trendings of",n.t0),n.t0;case 12:case"end":return n.stop()}}),n,null,[[0,8]])})))).apply(this,arguments)}function m(n){return g.apply(this,arguments)}function g(){return(g=(0,t.Z)(i().mark((function n(e){var r,t;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,r="movie/".concat(e,"/reviews?api_key=").concat(c,"&language=en-US&page=1"),n.next=4,a.Z.get(r);case 4:return t=n.sent,n.abrupt("return",t.data);case 8:throw n.prev=8,n.t0=n.catch(0),console.error("There is a error in searching reviews of",n.t0),n.t0;case 12:case"end":return n.stop()}}),n,null,[[0,8]])})))).apply(this,arguments)}a.Z.defaults.baseURL="https://api.themoviedb.org/3/"},8746:function(n,e,r){r.d(e,{Dx:function(){return l},eW:function(){return p},up:function(){return s}});var t,o,i,a=r(168),c=r(1087),u=r(6444),s=(0,u.ZP)(c.rU)(t||(t=(0,a.Z)(["\n  text-decoration: none;\n  padding: 5px 8px;\n  color: white;\n\n  &:visited {\n    color: white;\n  }\n  &:hover {\n    border-radius: 15px;\n    background-color: #004b69;\n    color: white;\n    font-weight: bold;\n  }\n"]))),p=u.ZP.ul(o||(o=(0,a.Z)(["\n  padding: 20px 0 20px;\n  margin: 0;\n  display: flex;\n  flex-direction: column;\n  row-gap: 15px;\n  list-style-type: lower-numerical;\n  list-style-color:\n  text-decoration: none;\n  color: white;\n"]))),l=u.ZP.h2(i||(i=(0,a.Z)(["\n  margin-top: 20px;\n  margin-bottom: 0;\n  font-size: 30px;\n"])))},2716:function(n,e,r){r.r(e),r.d(e,{default:function(){return m}});var t=r(9439),o=r(2791),i=r(1087),a=r(7726),c=r(3849),u=r(8746),s=r(3952),p=r(9126),l=r(184),h=function(n){var e=n.onSubmit,r=n.children;return(0,l.jsx)(s.l0,{onSubmit:e,children:r})},f=function(){return(0,l.jsx)(s.II,{type:"text",name:"movieName",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"May contain only letters, apostrophe, dash and spaces. For example moon",required:!0,autoComplete:"off",autoFocus:!0,placeholder:"Search movie..."})},d=function(n){var e=n.onSubmit;return(0,l.jsx)(s.Rj,{children:(0,l.jsxs)(h,{onSubmit:e,children:[(0,l.jsx)(f,{}),(0,l.jsx)(s.Ei,{type:"submit","aria-label":"search button",children:(0,l.jsx)(p.Ud,{})})]})})},x=r(1598);var m=function(){var n,e=(0,i.lr)(),r=null!==(n=(0,t.Z)(e,1)[0].get("movieName"))&&void 0!==n?n:"",s=(0,o.useState)([]),p=(0,t.Z)(s,2),h=p[0],f=p[1],m=(0,o.useState)(!1),g=(0,t.Z)(m,2),v=g[0],w=g[1],b=(0,o.useState)(!1),Z=(0,t.Z)(b,2),y=Z[0],k=Z[1];return(0,o.useEffect)((function(){""!==r&&(f([]),w(!0),(0,a.z1)(r).then((function(n){n.results.length?(k(!1),f(n.results),w(!1)):(w(!1),k(!0),console.log("There are no movies with this request. Please try again"))})).catch((function(n){w(!1),k(!0),console.error("An error occurred while fetching movies:",n)})))}),[r]),(0,l.jsxs)(x.W2,{children:[(0,l.jsx)(d,{}),v?(0,l.jsx)(c.Z,{}):y?(0,l.jsx)("p",{children:"There was an error loading the movies."}):(0,l.jsx)(u.eW,{children:h.map((function(n){return(0,l.jsx)(u.up,{to:"/movies/".concat(n.id),children:n.title},n.id)}))})]})}},3952:function(n,e,r){r.d(e,{Ei:function(){return d},II:function(){return f},Rj:function(){return l},b_:function(){return x},l0:function(){return h}});var t,o,i,a,c,u,s=r(168),p=r(6444),l=p.ZP.div(t||(t=(0,s.Z)([""]))),h=p.ZP.form(o||(o=(0,s.Z)(["\n  display: flex;\n  align-items: center;\n  width: 100%;\n  height: 30px;\n  max-width: 1000px;\n  background-color: #fff;\n  border-radius: 3px;\n  overflow: hidden;\n  margin-top: 8px;\n"]))),f=p.ZP.input(i||(i=(0,s.Z)(["\n  display: inline-block;\n  width: 100%;\n  font: inherit;\n  font-size: 16px;\n  // border: none;\n  // outline: none;\n  padding: 4px;\n  &::placeholder {\n    font: inherit;\n    font-size: 18px;\n  }\n"]))),d=p.ZP.button(a||(a=(0,s.Z)(["\n  display: flex;\n  align-items: center;\n  background-color: inherit;\n  width: 30px;\n  height: 30px;\n  border: 0;\n  margin-right: 4px;\n  margin-left: 4px;\n  cursor: pointer;\n  outline: none;\n"]))),x=(p.ZP.button(c||(c=(0,s.Z)(["\n  padding: 8px 16px;\n  margin-top: ","px;\n  border: none;\n  border-radius: 15px;\n  background-color: #3f51b5;\n  color: white;\n  text-decoration: none;\n  font-family: inherit;\n  font-size: 16px;\n  line-height: 24px;\n  font-style: normal;\n  font-weight: 500;\n  min-width: 180px;\n\n  cursor: pointer;\n  transition: background-color 250ms linear;\n  &:hover {\n    background-color: #303f9f;\n  }\n"])),(function(n){return n.theme.space[4]})),p.ZP.div(u||(u=(0,s.Z)(["\n  display: flex;\n  flex-wrap: wrap;\n  max-width: 1200px;\n  list-style: none;\n"]))))}}]);
//# sourceMappingURL=716.8f241227.chunk.js.map