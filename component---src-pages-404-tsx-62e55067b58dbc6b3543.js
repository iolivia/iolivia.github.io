(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{129:function(e,t,n){"use strict";n.r(t),n.d(t,"default",function(){return l});n(135),n(136),n(66);var a=n(6),r=n.n(a),o=n(0),i=n(138),l=function(e){function t(){for(var t,n=arguments.length,a=new Array(n),r=0;r<n;r++)a[r]=arguments[r];return(t=e.call.apply(e,[this].concat(a))||this).quotes=["I think you travel to search and you come back home to find yourself there.","I am a pisces, a fish out of water, searching for a way back home.","If you want to find the real competition, just look in the mirror. After awhile you'll see your rivals scrambling for second place.","People who fit don’t seek. The seekers are those that don’t fit.","I believe one has to escape oneself to discover oneself."],t.buildQuotes=function(){var e=[],n=t.quotes,a=Array.isArray(n),r=0;for(n=a?n:n[Symbol.iterator]();;){var i;if(a){if(r>=n.length)break;i=n[r++]}else{if((r=n.next()).done)break;i=r.value}var l=i;e.push(o.createElement("h3",null,o.createElement("p",null,l)))}return e},t}return r()(t,e),t.prototype.render=function(){return o.createElement(i.a,null,o.createElement("h1",null,"404 - Not found"),o.createElement("h1",null,"What you're looking for cannot be found. Search inside your soul."),o.createElement("div",null,this.buildQuotes()),o.createElement("p",null,'The standard Lorem Ipsum passage, used since the 1500s "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."'))},t}(o.Component)},134:function(e,t,n){var a;e.exports=(a=n(144))&&a.default||a},137:function(e,t,n){"use strict";n.r(t),n.d(t,"graphql",function(){return p}),n.d(t,"StaticQueryContext",function(){return m}),n.d(t,"StaticQuery",function(){return f});var a=n(0),r=n.n(a),o=n(4),i=n.n(o),l=n(132),u=n.n(l);n.d(t,"Link",function(){return u.a}),n.d(t,"withPrefix",function(){return l.withPrefix}),n.d(t,"navigate",function(){return l.navigate}),n.d(t,"push",function(){return l.push}),n.d(t,"replace",function(){return l.replace}),n.d(t,"navigateTo",function(){return l.navigateTo});var c=n(134),s=n.n(c);n.d(t,"PageRenderer",function(){return s.a});var d=n(34);n.d(t,"parsePath",function(){return d.a});var m=r.a.createContext({}),f=function(e){return r.a.createElement(m.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};function p(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}f.propTypes={data:i.a.object,query:i.a.string.isRequired,render:i.a.func,children:i.a.func}},138:function(e,t,n){"use strict";var a=n(0),r=n.n(a),o=n(133),i=n(6),l=n.n(i),u=o.a.nav.withConfig({displayName:"Navigation__NavBar",componentId:"axbleu-0"})(["display:block;width:100%;height:6.5rem;background:#fff;z-index:99;border-top:1px solid #eee;border-bottom:1px solid #eee;"]),c=o.a.a.withConfig({displayName:"Navigation__NavBarLink",componentId:"axbleu-1"})(["text-transform:uppercase;font-size:11px;font-weight:600;letter-spacing:.2rem;text-decoration:none;line-height:6.5rem;color:#222;:hover{color:#f7484e;}"]),s=o.a.li.withConfig({displayName:"Navigation__NavBarItem",componentId:"axbleu-2"})(["position:relative;margin-left:35px;float:left;margin-bottom:0;@media (max-width:550px){display:none;}"]),d=o.a.ul.withConfig({displayName:"Navigation__NavBarItems",componentId:"axbleu-3"})(["list-style:none;margin-bottom:0;float:right;"]),m=function(e){function t(){return e.apply(this,arguments)||this}return l()(t,e),t.prototype.render=function(){return a.createElement(u,{className:"fixed"},a.createElement("div",{className:"container"},a.createElement(c,{href:"/"},"olivia ifrim"),a.createElement(d,null,a.createElement(s,null,a.createElement(c,{href:"/#about"},"about")),a.createElement(s,null,a.createElement(c,{href:"/#blog"},"blog")),a.createElement(s,null,a.createElement(c,{href:"/#contact"},"contact")))))},t}(a.Component),f=(n(139),n(140),n(141),n(135),n(136),n(66),n(47),n(74),n(155),n(143)),p=n(137),h=o.a.footer.withConfig({displayName:"Footer",componentId:"k1v18k-0"})(["display:block;width:100%;height:6.5rem;background:#fff;border-top:1px solid #eee;border-bottom:1px solid #eee;padding-top:15px;margin-top:25px;"]),g=o.a.li.withConfig({displayName:"Footer__FooterItem",componentId:"k1v18k-1"})(["position:relative;float:left;margin-bottom:0;margin-right:15px;"]),v=o.a.ul.withConfig({displayName:"Footer__FooterItems",componentId:"k1v18k-2"})(["list-style:none;margin-bottom:0;float:right;"]),y=o.a.div.withConfig({displayName:"Footer__Copyright",componentId:"k1v18k-3"})(["float:left;"]),b=function(){return a.createElement(p.StaticQuery,{query:"2798683107",render:function(e){return a.createElement(h,null,a.createElement(y,null,"Made with ❤️ in 2018"),a.createElement(v,null,function(e){var t=new Map(e),n=[],r=t.keys(),o=Array.isArray(r),i=0;for(r=o?r:r[Symbol.iterator]();;){var l;if(o){if(i>=r.length)break;l=r[i++]}else{if((i=r.next()).done)break;l=i.value}var u=l,c=t.get(u);n.push(a.createElement(g,null,a.createElement("a",{href:c,title:u,target:"_blank"},a.createElement("i",{className:"fab fa-"+u+" fa-lg"}))))}return n}(e.site.siteMetadata.socialLinks)))},data:f})},w=o.a.div.withConfig({displayName:"Layout__MainContent",componentId:"sc-1nkx85v-0"})(["padding-top:100px;"]);t.a=function(e){var t=e.children;return r.a.createElement("div",{className:"container"},r.a.createElement(m,null),r.a.createElement(w,null,t),r.a.createElement(b,null))}},139:function(e,t,n){},140:function(e,t,n){},141:function(e,t,n){},143:function(e){e.exports={data:{site:{siteMetadata:{socialLinks:[["twitter","https://twitter.com/oliviff"],["linkedin","https://www.linkedin.com/in/oliviaifrim/"],["github","https://github.com/iolivia"],["quora","https://www.quora.com/profile/Olivia-Ifrim"]]}}}}},144:function(e,t,n){"use strict";n.r(t);n(31);var a=n(0),r=n.n(a),o=n(4),i=n.n(o),l=n(54),u=n(2),c=function(e){var t=e.location,n=u.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(l.a,Object.assign({location:t,pageResources:n},n.json))};c.propTypes={location:i.a.shape({pathname:i.a.string.isRequired}).isRequired},t.default=c}}]);
//# sourceMappingURL=component---src-pages-404-tsx-62e55067b58dbc6b3543.js.map