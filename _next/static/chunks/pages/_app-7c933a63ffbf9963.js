(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[888],{6363:function(e,n,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return r(2714)}])},8418:function(e,n,r){"use strict";function t(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var r=[],t=!0,a=!1,o=void 0;try{for(var i,l=e[Symbol.iterator]();!(t=(i=l.next()).done)&&(r.push(i.value),!n||r.length!==n);t=!0);}catch(c){a=!0,o=c}finally{try{t||null==l.return||l.return()}finally{if(a)throw o}}return r}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}n.default=void 0;var a,o=(a=r(7294))&&a.__esModule?a:{default:a},i=r(6273),l=r(387),c=r(7190);var s={};function u(e,n,r,t){if(e&&i.isLocalURL(n)){e.prefetch(n,r,t).catch((function(e){0}));var a=t&&"undefined"!==typeof t.locale?t.locale:e&&e.locale;s[n+"%"+r+(a?"%"+a:"")]=!0}}var d=function(e){var n,r=!1!==e.prefetch,a=l.useRouter(),d=o.default.useMemo((function(){var n=t(i.resolveHref(a,e.href,!0),2),r=n[0],o=n[1];return{href:r,as:e.as?i.resolveHref(a,e.as):o||r}}),[a,e.href,e.as]),f=d.href,h=d.as,m=e.children,p=e.replace,v=e.shallow,b=e.scroll,g=e.locale;"string"===typeof m&&(m=o.default.createElement("a",null,m));var x=(n=o.default.Children.only(m))&&"object"===typeof n&&n.ref,y=t(c.useIntersection({rootMargin:"200px"}),2),w=y[0],j=y[1],E=o.default.useCallback((function(e){w(e),x&&("function"===typeof x?x(e):"object"===typeof x&&(x.current=e))}),[x,w]);o.default.useEffect((function(){var e=j&&r&&i.isLocalURL(f),n="undefined"!==typeof g?g:a&&a.locale,t=s[f+"%"+h+(n?"%"+n:"")];e&&!t&&u(a,f,h,{locale:n})}),[h,f,j,g,r,a]);var N={ref:E,onClick:function(e){n.props&&"function"===typeof n.props.onClick&&n.props.onClick(e),e.defaultPrevented||function(e,n,r,t,a,o,l,c){("A"!==e.currentTarget.nodeName||!function(e){var n=e.currentTarget.target;return n&&"_self"!==n||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&i.isLocalURL(r))&&(e.preventDefault(),null==l&&t.indexOf("#")>=0&&(l=!1),n[a?"replace":"push"](r,t,{shallow:o,locale:c,scroll:l}))}(e,a,f,h,p,v,b,g)},onMouseEnter:function(e){i.isLocalURL(f)&&(n.props&&"function"===typeof n.props.onMouseEnter&&n.props.onMouseEnter(e),u(a,f,h,{priority:!0}))}};if(e.passHref||"a"===n.type&&!("href"in n.props)){var k="undefined"!==typeof g?g:a&&a.locale,L=a&&a.isLocaleDomain&&i.getDomainLocale(h,k,a&&a.locales,a&&a.domainLocales);N.href=L||i.addBasePath(i.addLocale(h,k,a&&a.defaultLocale))}return o.default.cloneElement(n,N)};n.default=d},7190:function(e,n,r){"use strict";function t(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var r=[],t=!0,a=!1,o=void 0;try{for(var i,l=e[Symbol.iterator]();!(t=(i=l.next()).done)&&(r.push(i.value),!n||r.length!==n);t=!0);}catch(c){a=!0,o=c}finally{try{t||null==l.return||l.return()}finally{if(a)throw o}}return r}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}Object.defineProperty(n,"__esModule",{value:!0}),n.useIntersection=function(e){var n=e.rootMargin,r=e.disabled||!i,c=a.useRef(),s=t(a.useState(!1),2),u=s[0],d=s[1],f=a.useCallback((function(e){c.current&&(c.current(),c.current=void 0),r||u||e&&e.tagName&&(c.current=function(e,n,r){var t=function(e){var n=e.rootMargin||"",r=l.get(n);if(r)return r;var t=new Map,a=new IntersectionObserver((function(e){e.forEach((function(e){var n=t.get(e.target),r=e.isIntersecting||e.intersectionRatio>0;n&&r&&n(r)}))}),e);return l.set(n,r={id:n,observer:a,elements:t}),r}(r),a=t.id,o=t.observer,i=t.elements;return i.set(e,n),o.observe(e),function(){i.delete(e),o.unobserve(e),0===i.size&&(o.disconnect(),l.delete(a))}}(e,(function(e){return e&&d(e)}),{rootMargin:n}))}),[r,n,u]);return a.useEffect((function(){if(!i&&!u){var e=o.requestIdleCallback((function(){return d(!0)}));return function(){return o.cancelIdleCallback(e)}}}),[u]),[f,u]};var a=r(7294),o=r(9311),i="undefined"!==typeof IntersectionObserver;var l=new Map},2714:function(e,n,r){"use strict";r.r(n),r.d(n,{default:function(){return h}});var t=r(5893),a=r(7294),o=r(1163),i=r(1664),l=function(){var e=(0,a.useState)(!1),n=e[0],r=e[1],l=(0,a.useState)(!1),c=l[0],s=l[1],u=(0,o.useRouter)().asPath.split("/").slice(1,2).join(""),d=(0,a.useRef)(null);(0,a.useEffect)((function(){var e=function(e){var t=d.current;t&&!t.contains(e.target)&&r(!n)};return n&&window.addEventListener("click",e),function(){return window.removeEventListener("click",e)}}),[n]);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(i.default,{href:"/",children:(0,t.jsxs)("a",{children:[(0,t.jsx)("img",{src:"".concat("/frontend-space-travel-tourism","/assets/shared/logo.svg"),"aria-hidden":"true",width:"48",height:"48",className:"lg:min-h-[3rem] lg:min-w-[3rem] lg:mr-16 lg:mt-0",alt:"logo"}),(0,t.jsx)("span",{className:"sr-only",children:"Logo"})]})}),(0,t.jsx)("button",{onClick:function(){r(!n),s(!c)},"aria-expanded":c,className:" h-6 w-5 bg-no-repeat z-20 md:hidden \n            ".concat(n?"bg-menu-close":"bg-menu-open","\n            "),children:(0,t.jsx)("span",{className:"sr-only",children:"menu"})}),(0,t.jsx)("nav",{ref:d,className:"\n             fixed right-0 top-0 min-h-screen bg-white/10 backdrop-blur-xl w-3/4 transform transition duration-700 ease-in-out z-10\n             ".concat(n?"translate-x-0":"translate-x-full","\n            md:relative md:translate-x-0 md:tracking-[2.36px] md:text-sm md:min-h-[6rem]\n\n             lg:font-sans-cond\n             lg:translate-x-0\n             lg:relative\n             lg:text-base\n             lg:tracking-[2.7px]\n             lg:w-[830px]\n             lg:order-2\n            "),children:(0,t.jsxs)("ul",{className:"mt-32 space-y-8 ml-8 text-clr-white md:m-0 md:space-y-0 md:flex md:justify-evenly md:items-center md:mt-9 md:px-8 lg:w-[830px] ",children:[(0,t.jsx)("li",{children:(0,t.jsx)(i.default,{href:"/",children:(0,t.jsxs)("a",{className:"uppercase  ".concat(""===u?"md:border-b-4":"md:hover:border-b-4 md:hover:border-white/20"," md:pb-9 "),children:[(0,t.jsx)("span",{"aria-hidden":"true",className:"mr-3 font-bold md:hidden lg:inline-block",children:"00"}),"Home"]})})}),(0,t.jsx)("li",{children:(0,t.jsx)(i.default,{href:"/destination",children:(0,t.jsxs)("a",{className:"uppercase  ".concat("destination"===u?"md:border-b-4":"md:hover:border-b-4 md:hover:border-white/20"," md:pb-9 "),children:[(0,t.jsx)("span",{"aria-hidden":"true",className:"mr-3 font-bold md:hidden lg:inline-block",children:"01"}),"destination"]})})}),(0,t.jsx)("li",{children:(0,t.jsx)(i.default,{href:"/crew",children:(0,t.jsxs)("a",{className:"uppercase  ".concat("crew"===u?"md:border-b-4":"md:hover:border-b-4 md:hover:border-white/20"," md:pb-9 "),children:[(0,t.jsx)("span",{"aria-hidden":"true",className:"mr-3 font-bold md:hidden lg:inline-block",children:"02"}),"crew"]})})}),(0,t.jsx)("li",{children:(0,t.jsx)(i.default,{href:"/technology",children:(0,t.jsxs)("a",{className:"uppercase  ".concat("technology"===u?"md:border-b-4":"md:hover:border-b-4 md:hover:border-white/20"," md:pb-9 "),children:[(0,t.jsx)("span",{"aria-hidden":"true",className:"mr-3 font-bold md:hidden lg:inline-block",children:"03"}),"technology"]})})})]})})]})},c=function(){return(0,t.jsx)("header",{className:"p-6 relative flex justify-between items-center md:p-0 md:pl-6 lg:mt-10 lg:after:relative lg:after:h-[1px] lg:after:w-full lg:after:-mr-10 lg:after:bg-white/50 lg:after:z-10 ",children:(0,t.jsx)(l,{})})},s=function(e){var n=e.children;return(0,t.jsxs)("div",{className:"wrapper",children:[(0,t.jsx)(c,{}),n]})},u=r(9008);r(3569),r(3602);function d(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function f(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{},t=Object.keys(r);"function"===typeof Object.getOwnPropertySymbols&&(t=t.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),t.forEach((function(n){d(e,n,r[n])}))}return e}var h=function(e){var n=e.Component,r=e.pageProps;return a.useEffect((function(){var e;window.addEventListener("resize",(function(){document.body.classList.add("resize-animation-stopper"),clearTimeout(e),e=setTimeout((function(){document.body.classList.remove("resize-animation-stopper")}),400)}))}),[]),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(u.default,{children:(0,t.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1"})}),(0,t.jsx)(s,{children:(0,t.jsx)(n,f({},r))})]})}},3569:function(){},3602:function(){},9008:function(e,n,r){e.exports=r(5443)},1664:function(e,n,r){e.exports=r(8418)},1163:function(e,n,r){e.exports=r(387)}},function(e){var n=function(n){return e(e.s=n)};e.O(0,[774,179],(function(){return n(6363),n(387)}));var r=e.O();_N_E=r}]);