(this["webpackJsonpreact_dynamic-list-of-goods"]=this["webpackJsonpreact_dynamic-list-of-goods"]||[]).push([[0],{16:function(t,e,n){},18:function(t,e,n){"use strict";n.r(e);var o=n(6),r=n.n(o),s=n(1),a=n.n(s),c=n(3),i=n(7),u=n(8),d=n(10),l=n(9),p=n(2),b=n.n(p),f=(n(16),n(5));function h(){return fetch("https://mate-academy.github.io/react_dynamic-list-of-goods/goods.json").then((function(t){return t.json()}))}var j=function(){return h().then((function(t){return Object(f.a)(t).sort((function(t,e){return t.name.localeCompare(e.name)})).filter((function(t){return t.id<=5}))}))},m=function(){return h().then((function(t){return Object(f.a)(t.filter((function(t){return"red"===t.color})))}))},O=n(0),g=function(t){var e=t.goods;return Object(O.jsx)("ul",{className:"app__list",children:e.map((function(t){var e=t.id,n=t.name,o=t.color;return Object(O.jsx)("li",{style:{color:o},children:n},e)}))})},v=function(t){Object(d.a)(n,t);var e=Object(l.a)(n);function n(){var t;Object(i.a)(this,n);for(var o=arguments.length,r=new Array(o),s=0;s<o;s++)r[s]=arguments[s];return(t=e.call.apply(e,[this].concat(r))).state={goods:[]},t.showAllGood=Object(c.a)(a.a.mark((function e(){var n;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h();case 2:n=e.sent,t.setState({goods:n});case 4:case"end":return e.stop()}}),e)}))),t.show5First=Object(c.a)(a.a.mark((function e(){var n;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,j();case 2:n=e.sent,t.setState({goods:n});case 4:case"end":return e.stop()}}),e)}))),t.showRedGoods=Object(c.a)(a.a.mark((function e(){var n;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m();case 2:n=e.sent,t.setState({goods:n});case 4:case"end":return e.stop()}}),e)}))),t}return Object(u.a)(n,[{key:"render",value:function(){var t=this.state.goods;return Object(O.jsxs)("div",{className:"app",children:[Object(O.jsx)("h1",{className:"app__title",children:"Dynamic list of Goods"}),Object(O.jsxs)("div",{className:"app__buttons",children:[Object(O.jsx)("button",{className:"app__button btn btn-primary",type:"button",onClick:this.showAllGood,children:"Load All goods"}),Object(O.jsx)("button",{className:"app__button btn btn-primary",type:"button",onClick:this.show5First,children:"Load 5 first goods"}),Object(O.jsx)("button",{className:"app__button btn btn-primary",type:"button",onClick:this.showRedGoods,children:"Load red goods"})]}),Object(O.jsx)(g,{goods:t})]})}}]),n}(b.a.Component);r.a.render(Object(O.jsx)(v,{}),document.getElementById("root"))}},[[18,1,2]]]);
//# sourceMappingURL=main.d69140ce.chunk.js.map