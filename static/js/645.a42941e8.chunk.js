"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[645],{645:function(e,t,s){s.r(t),s.d(t,{default:function(){return x}});var i=s(861),n=s(439),a=s(757),o=s.n(a),r=s(689),c=s(87),l=s(791),v=s(315),d=s(649),m={button:"MovieDetails_button__uXZxd",movieDetails:"MovieDetails_movieDetails__EbgQo",boxImg:"MovieDetails_boxImg__za2cX",img:"MovieDetails_img__uOAom",boxInfo:"MovieDetails_boxInfo__Plu-D",boxAddInfo:"MovieDetails_boxAddInfo__Tw1XK",castLink:"MovieDetails_castLink__U3a0A",reviewLink:"MovieDetails_reviewLink__gtr-m",link:"MovieDetails_link__U+v+7"},u=s(263),h=s(184);function x(){var e,t,s,a=(0,l.useState)(null),x=(0,n.Z)(a,2),_=x[0],p=x[1],f=(0,l.useState)(!1),j=(0,n.Z)(f,2),k=j[0],b=j[1],w=(0,l.useState)(null),g=(0,n.Z)(w,2),D=g[0],I=g[1],M=(0,r.UO)().movieId,N=(0,r.TH)(),U=(null===(e=N.state)||void 0===e?void 0:e.from)||"/";(0,l.useEffect)((function(){var e=function(){var e=(0,i.Z)(o().mark((function e(){var t;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,b(!0),I(null),e.next=5,(0,v.TP)(M);case 5:t=e.sent,p(t),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),I(e.t0);case 12:return e.prev=12,b(!1),e.finish(12);case 15:case"end":return e.stop()}}),e,null,[[0,9,12,15]])})));return function(){return e.apply(this,arguments)}}();e()}),[M]);var A=N.pathname.includes("cast")?"/movies/".concat(M):"/movies/".concat(M,"/cast"),L=N.pathname.includes("reviews")?"/movies/".concat(M):"/movies/".concat(M,"/reviews"),S=null!==(t=null===(s=N.state)||void 0===s?void 0:s.from)&&void 0!==t?t:"/movies";return(0,h.jsxs)("div",{className:m.container,children:[(0,h.jsx)(c.rU,{to:S,className:m.link,children:"Go back"}),k&&(0,h.jsx)(d.a,{}),D&&(0,h.jsx)("p",{children:"Something went wrong"}),_&&(0,h.jsxs)("div",{className:m.movieDetails,children:[(0,h.jsx)("div",{className:m.boxImg,children:(0,h.jsx)("img",{className:m.img,src:_.poster_path?"https://image.tmdb.org/t/p/w500".concat(_.poster_path):u,alt:"poster"})}),(0,h.jsxs)("div",{className:m.boxInfo,children:[(0,h.jsx)("h2",{children:_.title}),(0,h.jsxs)("p",{children:["User Score: ","".concat((10*_.vote_average).toFixed(1)),"%"]}),(0,h.jsx)("h3",{children:"Overview"}),(0,h.jsx)("p",{children:"".concat(_.overview)}),(0,h.jsx)("h3",{children:"Genres"}),(0,h.jsx)("p",{children:"".concat(_.genres.map((function(e){return e.name})).join(" / "))}),(0,h.jsxs)("div",{className:m.boxAddInfo,children:[(0,h.jsx)("h2",{children:"Additional information"}),(0,h.jsx)(c.rU,{className:m.castLink,state:{from:U},to:A,replace:!0,children:"Cast"}),(0,h.jsx)(c.rU,{className:m.reviewLink,state:{from:U},to:L,replace:!0,children:"Reviews"})]})]})]}),(0,h.jsx)(l.Suspense,{fallback:(0,h.jsx)(d.a,{}),children:(0,h.jsx)(r.j3,{})})]})}}}]);
//# sourceMappingURL=645.a42941e8.chunk.js.map