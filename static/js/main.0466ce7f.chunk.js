(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{13:function(e,t,a){e.exports=a(28)},25:function(e,t,a){},28:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(8),o=a.n(c),i=a(2);a(25),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var s=a(11),l=a(12),u=a(3),d=Object(n.createContext)(),p={episodes:[],favourites:[]};function f(e,t){var a=t.type,n=t.payload;switch(a){case"FETCH_DATA":return Object(u.a)({},e,{episodes:n});case"ADD_FAV":return Object(u.a)({},e,{favourites:[].concat(Object(l.a)(e.favourites),[n])});case"REMOVE_FAV":return Object(u.a)({},e,{favourites:n});default:return e}}var v=function(e){var t=Object(n.useContext)(d).state;return r.a.createElement(n.Fragment,null,r.a.createElement(n.Suspense,{fallback:r.a.createElement("div",null,"Loading...")},r.a.createElement("header",{className:"header"},r.a.createElement("div",null,r.a.createElement("h1",null,"Rick and Morty"),r.a.createElement("p",null,"Pick your favourite episodes")),r.a.createElement("nav",null,r.a.createElement(i.a,{to:"/"},"Home"),r.a.createElement(i.a,{to:"/faves"},"Favourite(s) ",t.favourites.length))),e.children))},m=a(4),E=a.n(m),h=a(10),b=Object(n.lazy)(function(){return a.e(0).then(a.bind(null,29))}),y=function(){var e=Object(n.useContext)(d),t=e.state,a=e.dispatch,c=function(){var e=Object(h.a)(E.a.mark(function e(){var t,n;return E.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.tvmaze.com/singlesearch/shows?q=rick-&-morty&embed=episodes");case 2:return t=e.sent,e.next=5,t.json();case 5:return n=e.sent,e.abrupt("return",a({type:"FETCH_DATA",payload:n._embedded.episodes}));case 7:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}(),o=t.favourites,i={episodes:t.episodes,toggleFavAction:function(e){var n=t.favourites.includes(e),r={type:"ADD_FAV",payload:e};return n&&(r={type:"REMOVE_FAV",payload:t.favourites.filter(function(t){return t.id!==e.id})}),a(r)},favourites:o};return Object(n.useEffect)(function(){0===t.episodes.length&&c()}),r.a.createElement(n.Fragment,null,r.a.createElement(n.Suspense,{fallback:r.a.createElement("div",null,"Loading...")},r.a.createElement("section",{className:"episode-layout"},r.a.createElement(b,i))))},O=Object(n.lazy)(function(){return a.e(0).then(a.bind(null,29))}),g=function(){var e=Object(n.useContext)(d),t=e.state,a=e.dispatch,c=t.favourites,o={episodes:c,toggleFavAction:function(e){var n=t.favourites.includes(e),r={type:"ADD_FAV",payload:e};return n&&(r={type:"REMOVE_FAV",payload:t.favourites.filter(function(t){return t.id!==e.id})}),a(r)},favourites:c};return r.a.createElement(n.Suspense,{fallback:r.a.createElement("div",null,"Loading...")},r.a.createElement("div",{className:"episode-layout"},r.a.createElement(O,o)))};o.a.render(r.a.createElement(function(e){var t=Object(n.useReducer)(f,p),a=Object(s.a)(t,2),c={state:a[0],dispatch:a[1]};return r.a.createElement(d.Provider,{value:c},e.children)},null,r.a.createElement(i.b,null,r.a.createElement(v,{path:"/"},r.a.createElement(y,{path:"/"}),r.a.createElement(g,{path:"/faves"})))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[13,2,3]]]);
//# sourceMappingURL=main.0466ce7f.chunk.js.map