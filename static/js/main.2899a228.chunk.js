(this["webpackJsonpflash-cards"]=this["webpackJsonpflash-cards"]||[]).push([[0],{23:function(e,c,t){},24:function(e,c,t){},31:function(e,c,t){"use strict";t.r(c);var s=t(1),n=t.n(s),a=t(17),i=t.n(a),r=(t(23),t(8)),l=t(2),d=(t(24),t(0));function j(){return Object(d.jsx)("div",{className:"container-fluid min-vh-100 ",children:Object(d.jsxs)("div",{className:"row min-vh-100 justify-content-center align-items-center ",children:[Object(d.jsx)("div",{className:"col-12 text-center mb-0",children:Object(d.jsx)("h1",{className:"h3",children:"Choose a deck"})}),Object(d.jsx)("div",{class:"col-12 col-md-4 mb-5",children:Object(d.jsx)(r.b,{to:"/html",className:"text-decoration-none",children:Object(d.jsx)("div",{class:"cardDeck mx-auto",children:Object(d.jsx)("i",{class:"fab fa-html5 fa-4x text-danger"})})})}),Object(d.jsx)("div",{class:"col-12 col-md-4 mb-5",children:Object(d.jsx)(r.b,{to:"/css",className:"text-decoration-none",children:Object(d.jsx)("div",{class:"cardDeck mx-auto",children:Object(d.jsx)("i",{class:"fab fa-js-square fa-4x text-warning"})})})}),Object(d.jsx)("div",{class:"col-12 col-md-4 mb-5",children:Object(d.jsx)(r.b,{to:"/js",className:"text-decoration-none",children:Object(d.jsx)("div",{class:"cardDeck mx-auto",children:Object(d.jsx)("i",{class:"fab fa-css3-alt fa-4x text-primary"})})})})]})})}var o=t(11),b=[{id:0,question:"A che serve il tag <p>?",answer:"boh"},{id:1,question:"A che serve il tag <h1>?",answer:"non lo so"},{id:2,question:"A che serve l'attributo title?",answer:"non lo so"}],x=t(9),h=t.n(x);function O(e){return Object(d.jsx)(d.Fragment,{children:Object(d.jsx)("div",{className:h.a.card+(e.isFlipped?" "+h.a.active:""),onClick:function(){return e.setIsFlipped(!e.isFlipped)},children:Object(d.jsxs)("div",{className:h.a["card-inner"],children:[Object(d.jsx)("div",{className:h.a["card-front"],children:Object(d.jsx)("p",{children:e.data.question})}),Object(d.jsxs)("div",{className:h.a["card-back"],children:[Object(d.jsx)("p",{children:e.data.answer}),Object(d.jsx)("button",{className:"btn btn-danger",onClick:function(c){return function(c){c.stopPropagation(),e.nextQuestion(),e.setIsFlipped(!1)}(c)},children:"Next"})]})]})})})}function u(){var e=Object(s.useState)(b),c=Object(o.a)(e,2),t=c[0],n=c[1],a=Object(s.useState)(null),i=Object(o.a)(a,2),r=i[0],l=i[1],j=Object(s.useState)(!1),x=Object(o.a)(j,2),h=x[0],u=x[1];Object(s.useEffect)((function(){var e=t.sort((function(e,c){return Math.random()<.5?-1:1}));l(e[0])}),[t]);return Object(d.jsxs)("div",{className:"container",children:[Object(d.jsx)("div",{className:"row",children:Object(d.jsx)("div",{className:"col-12",children:Object(d.jsxs)("p",{className:"h1 text-end",children:[b.length-t.length," / ",b.length]})})}),Object(d.jsx)("div",{className:"row justify-content-center align-items-center mt-5 pt-5",children:0!==t.length?Object(d.jsx)("div",{className:"col-12 col-md-4 px-0",children:r&&Object(d.jsx)(O,{data:r,nextQuestion:function(){var e=t.slice(1);n(e)},isFlipped:h,setIsFlipped:u})}):Object(d.jsxs)("div",{className:"col-12 col-md-4 px-0",children:[Object(d.jsx)("p",{children:"Mazzo finito, ricominciare?"}),Object(d.jsx)("button",{className:"btn btn-danger",onClick:function(){return n(b)},children:"Ok"})]})})]})}var m=function(){return Object(d.jsx)(r.a,{basename:"/flash-cards",children:Object(d.jsxs)(l.c,{children:[Object(d.jsx)(l.a,{exact:!0,path:"/",children:Object(d.jsx)(j,{})}),Object(d.jsx)(l.a,{exact:!0,path:"/html",children:Object(d.jsx)(u,{})}),Object(d.jsx)(l.a,{exact:!0,path:"/css",children:Object(d.jsx)(j,{})}),Object(d.jsx)(l.a,{exact:!0,path:"/js",children:Object(d.jsx)(j,{})})]})})},f=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,32)).then((function(c){var t=c.getCLS,s=c.getFID,n=c.getFCP,a=c.getLCP,i=c.getTTFB;t(e),s(e),n(e),a(e),i(e)}))};i.a.render(Object(d.jsx)(n.a.StrictMode,{children:Object(d.jsx)(m,{})}),document.getElementById("root")),f()},9:function(e,c,t){e.exports={card:"Card_card__1m44e","card-inner":"Card_card-inner__16_oL",active:"Card_active__2brWH","card-front":"Card_card-front__2KCbv","card-back":"Card_card-back__1tTv3"}}},[[31,1,2]]]);
//# sourceMappingURL=main.2899a228.chunk.js.map