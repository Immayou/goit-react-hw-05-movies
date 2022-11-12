"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[822],{8749:function(n,e,t){t.d(e,{$:function(){return c}});var r,a=t(6286),i=t(168),s=t(7402).Z.div(r||(r=(0,i.Z)(["\nposition: absolute;\ntop: 50%;\nleft: 50%;\ntransform: translate(-50%, -50%)\n"]))),o=t(184),c=function(){return(0,o.jsx)(s,{children:(0,o.jsx)(a.Rf,{color:"#000",width:"200",visible:!0,ariaLabel:"falling-lines-loading"})})}},8822:function(n,e,t){t.r(e),t.d(e,{default:function(){return D}});var r,a,i,s,o,c,u,p,l,d,f,x,m=t(5861),g=t(885),h=t(4687),v=t.n(h),b=t(1044),Z=t(828),w=t(2791),y=t(7691),j=t(168),k=t(7402),_=t(7692),z=t(6731),F=(0,k.Z)(z.rU)(r||(r=(0,j.Z)(["\ntext-decoration: none;\nfont-size: 20px;\nfont-style: italic;\ncolor: #000;\nborder-radius: 5px;\n"]))),P=(0,k.Z)(_.slP)(a||(a=(0,j.Z)(["\n&:not(:last-of-type) {\nmargin-right: 8px;\n}\n"]))),U=k.Z.div(i||(i=(0,j.Z)(["\nposition: absolute;\ndisplay: flex;\nflex-direction: column;\njustify-content: center;\nalign-items: center;\ntext-align: center;\nbottom: 0;\nwidth: 100%;\nmin-height: 30%;\nmargin: 0;\nfont-size: 18px;\nline-height: 1.56;\nbackground-color: rgba(0,0, 0, 2); \nopacity: 0.8;\ncolor: #FFFFFF;\noverflow: auto;\ntransition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);\n"]))),S=k.Z.li(s||(s=(0,j.Z)(["\ndisplay: flex;\nflex-direction: column;\njustify-content: center;\nborder-radius: 5px;\n&:not(:last-child) {\n    margin-bottom: 8px;\n}\ntransition: box-shadow 250ms cubic-bezier(0.075, 0.82, 0.165, 1);\n\n&:hover {\nbox-shadow: 0 12px 16px 0 rgba(0,0,0,0.24),0 17px 50px 0 rgba(0,0,0,3);\n}\n"]))),R=k.Z.ul(o||(o=(0,j.Z)(["\ndisplay:grid;\ngrid-template-columns: repeat(1, 1fr);\n/* grid-template-rows: repeat(3, 1fr); */\ngrid-column-gap: 10px;\ngrid-row-gap: 10px;\n@media screen and (min-width: 450px) {\ngrid-template-columns: repeat(2, 1fr);\ngrid-template-rows: repeat(2, 1fr);\n}\n@media screen and (min-width: 768px) {\ngrid-template-columns: repeat(4, 1fr);\ngrid-template-rows: repeat(3, 1fr);\n}\n@media screen and (min-width: 1200px) {\ngrid-template-columns: repeat(5, 1fr);\ngrid-template-rows: repeat(3, 1fr);\n}\n"]))),$=k.Z.div(c||(c=(0,j.Z)(["\nposition: relative;\nborder-radius: 5px;\noverflow: hidden;\n"]))),C=k.Z.img(u||(u=(0,j.Z)(["\nheight: 400px;\nborder-radius: 5px;\n"]))),L=k.Z.h3(p||(p=(0,j.Z)(["\nfont-size: 20px;\n"]))),M=k.Z.span(l||(l=(0,j.Z)(["\nmargin-right: 8px;\n"]))),N=k.Z.div(d||(d=(0,j.Z)(["\ndisplay: flex;\njustify-content: center;\nalign-items: center;\n"]))),q=t(184),A=function(n){var e=n.dataMovies;return(0,q.jsx)(R,{children:e.map((function(n){var e=n.id,t=n.title,r=n.name,a=n.poster_path,i=n.vote_average;return(0,q.jsx)(S,{children:(0,q.jsx)(F,{to:"movies/".concat(e),children:(0,q.jsxs)($,{children:[(0,q.jsx)(C,{src:a?"https://image.tmdb.org/t/p/w500".concat(a):y,alt:"".concat(t||r)}),(0,q.jsxs)(U,{children:[(0,q.jsx)(L,{children:t||r}),(0,q.jsxs)(N,{children:[(0,q.jsx)(P,{}),(0,q.jsx)(M,{children:i?Number(i).toFixed(1):"No information"}),(0,q.jsx)(P,{})]})]})]})})},e)}))})},E=t(8749),G=t(4390),T=k.Z.h1(f||(f=(0,j.Z)(["\nfont-size: 36px;\ntext-shadow: 1px 1px 1px gray;\nmargin-left: 8px;\n"]))),B=k.Z.div(x||(x=(0,j.Z)(["\ndisplay: flex;\nalign-items: center;\nmargin-bottom: 20px;\n"])));b.ZP.defaults.baseURL="https://api.themoviedb.org/3/";var D=function(){var n=(0,w.useState)([]),e=(0,g.Z)(n,2),t=e[0],r=e[1],a=(0,w.useState)(!1),i=(0,g.Z)(a,2),s=i[0],o=i[1];return(0,w.useEffect)((function(){var n=new AbortController,e=function(){var e=(0,m.Z)(v().mark((function e(){var t,a;return v().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,o(!0),e.next=4,(0,G.l5)(n.signal);case 4:return t=e.sent,e.next=7,t.map((function(n){return{title:n.title,name:n.name,id:n.id,poster_path:n.poster_path,vote_average:n.vote_average}}));case 7:a=e.sent,r(a),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(0),console.log(e.t0.message);case 14:return e.prev=14,o(!1),e.finish(14);case 17:case"end":return e.stop()}}),e,null,[[0,11,14,17]])})));return function(){return e.apply(this,arguments)}}();return e(),function(){n.abort()}}),[]),(0,q.jsx)(q.Fragment,{children:(0,q.jsxs)("main",{children:[s&&(0,q.jsx)(E.$,{}),0!==t.length&&(0,q.jsxs)("section",{children:[(0,q.jsxs)(B,{children:[(0,q.jsx)(Z.w$t,{size:"25px"}),(0,q.jsx)(T,{children:"Trending today"})]}),(0,q.jsx)(A,{dataMovies:t})]})]})})}},4390:function(n,e,t){t.d(e,{GR:function(){return p},l5:function(){return o},r5:function(){return c},yk:function(){return u},z$:function(){return l}});var r=t(5861),a=t(4687),i=t.n(a),s=t(1044);s.ZP.defaults.baseURL="https://api.themoviedb.org/3/";var o=function(){var n=(0,r.Z)(i().mark((function n(e){var t;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,s.ZP.get("trending/all/day?api_key=".concat("f19c93a33a6f9456f5109701414d5b41"),{signal:e});case 2:return t=n.sent,n.next=5,t.data.results;case 5:return n.abrupt("return",n.sent);case 6:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),c=function(){var n=(0,r.Z)(i().mark((function n(e){var t;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,s.ZP.get("movie/".concat(e,"?api_key=").concat("f19c93a33a6f9456f5109701414d5b41","&language=en-US"));case 2:return t=n.sent,n.next=5,t.data;case 5:return n.abrupt("return",n.sent);case 6:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),u=function(){var n=(0,r.Z)(i().mark((function n(e){var t;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,s.ZP.get("movie/".concat(e,"/credits?api_key=").concat("f19c93a33a6f9456f5109701414d5b41","&language=en-US"));case 2:return t=n.sent,n.next=5,t.data.cast;case 5:return n.abrupt("return",n.sent);case 6:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),p=function(){var n=(0,r.Z)(i().mark((function n(e){var t;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,s.ZP.get("movie/".concat(e,"/reviews?api_key=").concat("f19c93a33a6f9456f5109701414d5b41","&language=en-US&page=1"));case 2:return t=n.sent,n.abrupt("return",t.data.results);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),l=function(){var n=(0,r.Z)(i().mark((function n(e){var t;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,s.ZP.get("search/movie?api_key=".concat("f19c93a33a6f9456f5109701414d5b41","&language=en-US&page=1&query=").concat(e));case 2:return t=n.sent,n.abrupt("return",t.data.results);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()},7691:function(n,e,t){n.exports=t.p+"static/media/no-img-avaliable.0c994237efde5604d802.jpg"}}]);
//# sourceMappingURL=822.5c05144c.chunk.js.map