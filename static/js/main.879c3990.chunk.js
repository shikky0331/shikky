(this.webpackJsonpshikky=this.webpackJsonpshikky||[]).push([[0],{18:function(t,e,n){t.exports={header:"style_header__3O4WM",logo:"style_logo__33j5N",menu:"style_menu__MQT3X",item:"style_item__QHON2"}},210:function(t,e,n){var r={"./20210805.md":[212,4]};function c(t){if(!n.o(r,t))return Promise.resolve().then((function(){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}));var e=r[t],c=e[0];return n.e(e[1]).then((function(){return n(c)}))}c.keys=function(){return Object.keys(r)},c.id=210,t.exports=c},211:function(t,e,n){"use strict";n.r(e);var r=n(40),c=(n(94),n(1)),i=n(16),s=n(3),o=n(18),l=n.n(o),a=n(0),j=function(){return Object(a.jsxs)("header",{className:l.a.header,children:[Object(a.jsx)(i.b,{to:"/",className:l.a.logo,children:"Shikky"}),Object(a.jsx)("nav",{children:Object(a.jsxs)("ul",{className:l.a.menu,children:[Object(a.jsx)("li",{className:l.a.item,children:Object(a.jsx)(i.b,{to:"/",children:"Blog"})}),Object(a.jsx)("li",{className:l.a.item,children:Object(a.jsx)("a",{href:"https://github.com/shikky0331",target:"_blank",rel:"noopener noreferrer",children:"GitHub"})}),Object(a.jsx)("li",{className:l.a.item,children:Object(a.jsx)("a",{href:"https://twitter.com/shikky0331",target:"_blank",rel:"noopener noreferrer",children:"Twitter"})})]})})]})},u=n(80),d=n.n(u),b=function(t){var e=t.url,n=t.title;return Object(a.jsx)("h3",{className:d.a.h3,children:Object(a.jsx)(i.b,{to:e,children:n})})},h=n(31),p=n.n(h),O=function(t){var e=t.url,n=t.title,r=t.date,c=t.introduction;return Object(a.jsxs)("article",{className:p.a.wrapper,children:[Object(a.jsx)("div",{className:p.a.articleTitleWrapper,children:Object(a.jsx)(b,{url:e,title:n})}),Object(a.jsx)("small",{children:r}),Object(a.jsx)("p",{className:p.a.p,children:c})]})},x=n(81),m=n.n(x),f=function(t){var e=t.articles;return Object(a.jsx)("ul",{children:e.map((function(t){var e=t.url,n=t.title,r=t.date,c=t.introduction;return Object(a.jsx)("li",{className:m.a.li,children:Object(a.jsx)(O,{url:e,title:n,date:r,introduction:c})},e)}))})},y=n(43),g=n.n(y),_=function(){return Object(a.jsx)("footer",{className:g.a.footer,children:Object(a.jsx)("span",{className:g.a.copyOnWrite,children:"\xa9 2021 shikky"})})},k=n(82),v=n.n(k),N=function(t){var e=t.articles;return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)(j,{}),Object(a.jsx)("main",{className:v.a.main,children:Object(a.jsx)(f,{articles:e})}),Object(a.jsx)(_,{})]})},T=n(83),w=function(t){var e=t.title,n=t.description,r=t.url,c=t.ogType,i=t.ogTitle,s=t.ogDescription,o=t.ogImage;return Object(a.jsxs)(T.a,{defaultTitle:"Shikky",titleTemplate:"%s | Shikky",children:[Object(a.jsx)("title",{children:e}),Object(a.jsx)("link",{rel:"canonical",href:"https://shikky0331.com"}),Object(a.jsx)("meta",{charSet:"utf-8"}),Object(a.jsx)("meta",{name:"description",content:n}),Object(a.jsx)("meta",{property:"og:url",content:"https://shikky0331.com".concat(r)}),Object(a.jsx)("meta",{property:"og:type",content:c}),Object(a.jsx)("meta",{property:"og:title",content:i}),Object(a.jsx)("meta",{property:"og:description",content:s}),Object(a.jsx)("meta",{property:"og:image",content:o}),Object(a.jsx)("meta",{property:"og:site_name",content:"Shikky"}),Object(a.jsx)("meta",{name:"twitter:card",content:"summary"}),Object(a.jsx)("meta",{name:"twitter:site",content:"@shikky0331"})]})},F=n(30),S=function(){return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)(w,{ogType:"website"}),Object(a.jsx)(N,{articles:F})]})},W=n(44),M=n.n(W),C=n(86),D=n(89),J=n(87),E=n.n(J),I=function(){var t=Object(c.useState)(""),e=Object(D.a)(t,2),r=e[0],i=e[1],o=Object(s.f)().date,l=Object(c.useMemo)((function(){return F.find((function(t){return t.url.includes(o)}))}),[o]);return Object(c.useEffect)((function(){(function(){var t=Object(C.a)(M.a.mark((function t(){var e,r;return M.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,n(210)("./".concat(o,".md"));case 3:return e=t.sent,t.next=6,fetch(e.default);case 6:return r=t.sent,t.t0=i,t.next=10,r.text();case 10:t.t1=t.sent,(0,t.t0)(t.t1),t.next=17;break;case 14:t.prev=14,t.t2=t.catch(0),i("# Not found a article.");case 17:case"end":return t.stop()}}),t,null,[[0,14]])})));return function(){return t.apply(this,arguments)}})()()}),[]),Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)(w,{title:null===l||void 0===l?void 0:l.title,description:null===l||void 0===l?void 0:l.introduction,url:null===l||void 0===l?void 0:l.url,ogType:"article",ogTitle:null===l||void 0===l?void 0:l.title,ogDescription:null===l||void 0===l?void 0:l.introduction}),Object(a.jsx)(E.a,{children:r})]})},A=n(88),B=n.n(A),H=function(t){var e=t.children;return Object(a.jsx)("main",{className:B.a.main,children:e})},L=function(){return Object(a.jsx)(H,{children:Object(a.jsx)("h3",{children:"404 Not Found"})})},P=function(){return Object(a.jsx)(i.a,{basename:"",children:Object(a.jsxs)(s.c,{children:[Object(a.jsx)(s.a,{path:"/blog/:date",children:Object(a.jsx)(I,{})}),Object(a.jsx)(s.a,{exact:!0,path:"/",children:Object(a.jsx)(S,{})}),Object(a.jsx)(s.a,{path:"*",children:Object(a.jsx)(L,{})})]})})},Q=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,213)).then((function(e){var n=e.getCLS,r=e.getFID,c=e.getFCP,i=e.getLCP,s=e.getTTFB;n(t),r(t),c(t),i(t),s(t)}))},U=document.getElementById("root");U&&U.hasChildNodes()?Object(r.hydrate)(Object(a.jsx)(c.StrictMode,{children:Object(a.jsx)(P,{})}),U):Object(r.render)(Object(a.jsx)(c.StrictMode,{children:Object(a.jsx)(P,{})}),U),Q()},30:function(t){t.exports=JSON.parse('[{"url":"/blog/20210805","title":"test blog post","date":"August 05, 2021","introduction":"This is my test blog post"},{"url":"/blog/5","title":"How Are Function Components Defferent from Classes?","date":"February 13, 2021","introduction":"This is my 5th blog post"},{"url":"/blog/4","title":"forth blog post","date":"March 23, 2021","introduction":"This is my 4th blog post"},{"url":"/blog/3","title":"third blog post","date":"April 4, 2021","introduction":"This is my 3th blog post"},{"url":"/blog/2","title":"second blog post","date":"May 30, 2021","introduction":"This is my 2th blog post"},{"url":"/blog/1","title":"first blog post","date":"July 21, 2021","introduction":"This is my 1th blog post"}]')},31:function(t,e,n){t.exports={articleTitleWrapper:"style_articleTitleWrapper__3QtyW",p:"style_p__1TIVy",wrapper:"style_wrapper__RJUdi"}},43:function(t,e,n){t.exports={footer:"style_footer__2ccSq",copyOnWrite:"style_copyOnWrite__1cxVF"}},80:function(t,e,n){t.exports={h3:"style_h3__O9-We"}},81:function(t,e,n){t.exports={li:"style_li__5r72W"}},82:function(t,e,n){t.exports={main:"style_main__259bO"}},88:function(t,e,n){t.exports={main:"style_main__3Doxr"}},94:function(t,e,n){}},[[211,1,2]]]);
//# sourceMappingURL=main.879c3990.chunk.js.map