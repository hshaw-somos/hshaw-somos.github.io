(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{27:function(e,n,t){e.exports=t(37)},37:function(e,n,t){"use strict";t.r(n);var a=t(0),l=t.n(a),o=t(18),r=t.n(o),c=t(14),i=t(19),u=t(20),s=t(5),m=t.n(s);function d(){var e=Object(i.a)(["\n   opacity: ",";\n   transition: opacity 0.5s ease;\n"]);return d=function(){return e},e}var b=document.getElementById("index-html-loading"),p=u.a.div(d(),function(e){return e.visible?1:0});p.propTypes={visible:m.a.bool},p.defaultProps={visible:!1};var f=function(e){var n=e.children,t=Object(a.useState)(!1),o=Object(c.a)(t,2),r=o[0],i=o[1],u=Object(a.useState)(!0),s=Object(c.a)(u,2),m=s[0],d=s[1];Object(a.useEffect)(function(){i(!0)},[]);var f=m?function(){b.classList.add("app-loaded"),d(!1)}:null;return l.a.createElement(p,{visible:r,onTransitionEnd:f},n)},E=t(15),h=t(6),v=function(){return l.a.createElement("div",null,l.a.createElement("h2",null,"Loading..."))},w=Object(a.lazy)(function(){return Promise.all([t.e(0),t.e(5)]).then(t.bind(null,45))}),j=Object(a.lazy)(function(){return Promise.all([t.e(0),t.e(4)]).then(t.bind(null,46))}),y=Object(a.lazy)(function(){return Promise.all([t.e(0),t.e(6)]).then(t.bind(null,47))}),O=function(){return l.a.createElement(a.Suspense,{fallback:l.a.createElement(v,null)},l.a.createElement(E.a,null,l.a.createElement(h.c,null,l.a.createElement(h.a,{path:"/",exact:!0,component:w}),l.a.createElement(h.a,{path:"/admin/",component:j}),l.a.createElement(h.a,{component:y}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(l.a.createElement(function(){return l.a.createElement(f,null,l.a.createElement(O,null))},null),document.getElementById("index-html-root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[27,2,3]]]);
//# sourceMappingURL=main.948703f6.chunk.js.map