(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{633:function(e,n,t){"use strict";t.r(n),t.d(n,"default",(function(){return E}));var o=t(9),a=t.n(o),r=t(18),c=t.n(r),p=t(19),m=t.n(p),s=t(20),u=t.n(s),i=t(23),l=t.n(i),f=t(8),d=t.n(f),g=t(0),h=t.n(g),v=t(2),M=t(80);function D(e){var n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var t,o=d()(e);if(n){var a=d()(this).constructor;t=Reflect.construct(o,arguments,a)}else t=o.apply(this,arguments);return l()(this,t)}}t.d(n,"Root",(function(){return M.Root}));var E=function(e){u()(t,e);var n=D(t);function t(e){var o;return c()(this,t),(o=n.call(this,e)).layout=null,o}return m()(t,[{key:"render",value:function(){var e=this.props,n=e.components;a()(e,["components"]);return h.a.createElement(v.MDXTag,{name:"wrapper",components:n},h.a.createElement(v.MDXTag,{name:"p",components:n},h.a.createElement(v.MDXTag,{name:"a",components:n,parentName:"p",props:{href:"/"}},"Home")," | Vue - ",h.a.createElement(v.MDXTag,{name:"em",components:n,parentName:"p"},"Latest React Syntax - Updated: May 2020 at ",h.a.createElement(v.MDXTag,{name:"a",components:n,parentName:"em",props:{href:"https://github.com/ngduc/syntax.codes"}},"Github"))),h.a.createElement("img",{src:"https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Vue.js_Logo_2.svg/2560px-Vue.js_Logo_2.svg.png",height:"48"}),h.a.createElement(v.MDXTag,{name:"h2",components:n,props:{id:"vue-3"}},"Vue 3"),h.a.createElement(v.MDXTag,{name:"h3",components:n,props:{id:"functional-component"}},"Functional Component"),h.a.createElement(v.MDXTag,{name:"pre",components:n},h.a.createElement(v.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-.js"}},"<template>\n  <button @click=\"increment\">\n    Count is: {{ count }}, double is: {{ double }}, click to increase it.\n  </button>\n</template>\n\n<script>\nimport { ref, computed, onMounted } from 'vue'\n\nexport default {\n  setup() {\n    onMounted(() => console.log('component mounted!'))\n\n    const count = ref(0)\n    const increment = () => {\n      count.value++\n    }\n    const double = computed(() => count.value * 2)\n\n    return {\n      count,\n      double,\n      increment\n    }\n  }\n}\n<\/script>\n\n<style scoped></style>\n")),h.a.createElement(v.MDXTag,{name:"h5",components:n,props:{id:"references"}},"References:"),h.a.createElement(v.MDXTag,{name:"ul",components:n},h.a.createElement(v.MDXTag,{name:"li",components:n,parentName:"ul"},h.a.createElement(v.MDXTag,{name:"a",components:n,parentName:"li",props:{href:"https://composition-api.vuejs.org/api.html"}},"https://composition-api.vuejs.org/api.html"))))}}]),t}(h.a.Component)}}]);