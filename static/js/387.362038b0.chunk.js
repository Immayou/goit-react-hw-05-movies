"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[387],{387:function(n,e,t){t.r(e),t.d(e,{default:function(){return Z}});var r,a,c,u,i=t(861),s=t(885),o=t(687),p=t.n(o),f=t(791),d=t(689),l=t(390),m=t(168),x=t(934),g=x.Z.ul(r||(r=(0,m.Z)(["\ndisplay:grid;\ngrid-column-gap: 10px;\ngrid-row-gap: 10px;\ngrid-template-columns: (1, 1fr); \nmargin-bottom: 10px;\n\n@media screen and (min-width: 450px) {\ngrid-template-columns: repeat(2, 1fr);\n}\n@media screen and (min-width: 768px) {\ngrid-template-columns: repeat(3, 1fr);\n}\n@media screen and (min-width: 850px) {\ngrid-template-columns: repeat(4, 1fr);\n}\n@media screen and (min-width: 1200px) {\ngrid-template-columns: repeat(6, 1fr);\n}\n"]))),h=x.Z.img(a||(a=(0,m.Z)(["\nheight: 300px;\nmargin: 0 auto;\nborder-radius: 5px;\nbox-shadow: 0 12px 16px 0 rgba(0,0,0,0.24),0 17px 50px 0 rgba(0,0,0,0.19);\n/* @media screen and (max-width: 450px) {\nwidth: 200px;\n} */\n@media screen and (max-width: 768px) {\nwidth: 200px;\n}\n"]))),v=x.Z.p(c||(c=(0,m.Z)(["\ntext-align: center;\nfont-size: 17px;\nfont-style: oblique;\n"]))),w=x.Z.p(u||(u=(0,m.Z)(["\ntext-align: center;\n"]))),b=t(184),Z=function(){var n=(0,d.UO)().movieId,e=(0,f.useState)([]),r=(0,s.Z)(e,2),a=r[0],c=r[1];return(0,f.useEffect)((function(){var e=function(){var e=(0,i.Z)(p().mark((function e(){var t;return p().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,l.yk)(n).then((function(n){return n}));case 3:t=e.sent,c(t),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0.message);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}();e()}),[n]),(0,b.jsx)(b.Fragment,{children:a&&(0,b.jsx)(g,{children:a.map((function(n){var e=n.character,r=n.id,a=n.profile_path,c=n.name;return(0,b.jsxs)("li",{children:[(0,b.jsx)(h,{src:a?"https://image.tmdb.org/t/p/w500".concat(a):t(691),alt:"".concat(c)}),(0,b.jsx)(v,{children:c}),(0,b.jsxs)(w,{children:["Character: ",e]})]},r)}))})})}},390:function(n,e,t){t.d(e,{GR:function(){return p},l5:function(){return i},r5:function(){return s},yk:function(){return o},z$:function(){return f}});var r=t(861),a=t(687),c=t.n(a),u=t(44);u.ZP.defaults.baseURL="https://api.themoviedb.org/3/";var i=function(){var n=(0,r.Z)(c().mark((function n(){var e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.ZP.get("trending/all/day?api_key=".concat("f19c93a33a6f9456f5109701414d5b41"));case 2:return e=n.sent,n.next=5,e.data.results;case 5:return n.abrupt("return",n.sent);case 6:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),s=function(){var n=(0,r.Z)(c().mark((function n(e){var t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.ZP.get("movie/".concat(e,"?api_key=").concat("f19c93a33a6f9456f5109701414d5b41","&language=en-US"));case 2:return t=n.sent,n.next=5,t.data;case 5:return n.abrupt("return",n.sent);case 6:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),o=function(){var n=(0,r.Z)(c().mark((function n(e){var t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.ZP.get("movie/".concat(e,"/credits?api_key=").concat("f19c93a33a6f9456f5109701414d5b41","&language=en-US"));case 2:return t=n.sent,n.next=5,t.data.cast;case 5:return n.abrupt("return",n.sent);case 6:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),p=function(){var n=(0,r.Z)(c().mark((function n(e){var t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.ZP.get("movie/".concat(e,"/reviews?api_key=").concat("f19c93a33a6f9456f5109701414d5b41","&language=en-US&page=1"));case 2:return t=n.sent,n.abrupt("return",t.data.results);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),f=function(){var n=(0,r.Z)(c().mark((function n(e){var t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.ZP.get("search/movie?api_key=".concat("f19c93a33a6f9456f5109701414d5b41","&language=en-US&page=1&query=").concat(e));case 2:return t=n.sent,n.abrupt("return",t.data.results);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()},691:function(n,e,t){n.exports=t.p+"static/media/no-img-avaliable.0c994237efde5604d802.jpg"}}]);
//# sourceMappingURL=387.362038b0.chunk.js.map