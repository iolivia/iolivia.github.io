(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{130:function(e,t,n){"use strict";n.r(t);var a=n(6),i=n.n(a),r=n(0),o=n(133),l=n(157),c=n(141),u=n.n(c),s=n(161),d=n.n(s),m=function(e){function t(){return e.apply(this,arguments)||this}return i()(t,e),t.prototype.render=function(){var e=this.props,t=e.description,n=e.title;return r.createElement("div",null,r.createElement(d.a,{htmlAttributes:{lang:"en"},meta:[{name:"description",content:t}],title:n}))},t}(r.Component),p=n(149);n.d(t,"pageQuery",function(){return x});var f=o.a.div.withConfig({displayName:"blog-post__Center",componentId:"ftibxg-0"})(["text-align:center;"]),g=o.a.h1.withConfig({displayName:"blog-post__Title",componentId:"ftibxg-1"})(["padding:20px 30px 0 30px;"]),h=o.a.div.withConfig({displayName:"blog-post__Date",componentId:"ftibxg-2"})(["padding-bottom:80px;"]),b=o.a.ul.withConfig({displayName:"blog-post__Tags",componentId:"ftibxg-3"})([""]),y=o.a.li.withConfig({displayName:"blog-post__Tag",componentId:"ftibxg-4"})(["display:inline-block;position:relative;margin-bottom:0;margin-right:15px;color:white;background-color:#f7484e;padding:2px 5px;font-size:0.8em;"]),v=o.a.div.withConfig({displayName:"blog-post__PostContent",componentId:"ftibxg-5"})(["width:700px;margin:0 auto;"]),w=function(e){function t(){return e.apply(this,arguments)||this}return i()(t,e),t.prototype.render=function(){var e=this.props.data.markdownRemark,t=this.props.data.site.siteMetadata,n=(t.fullName,t.settings.disqusShortName),a={identifier:e.id,title:e.frontmatter.title};return r.createElement(p.a,null,r.createElement(m,{title:e.frontmatter.title||t.title,description:e.excerpt||t.description}),r.createElement(v,null,r.createElement(f,null,r.createElement(u.a,{sizes:e.frontmatter.featuredImage.childImageSharp.sizes}),r.createElement(g,null,e.frontmatter.title),r.createElement(b,null,e.frontmatter.tags.map(function(e,t){return r.createElement(y,{key:t},e)})),r.createElement(h,null,e.frontmatter.date)),r.createElement("div",{dangerouslySetInnerHTML:{__html:e.html}}),r.createElement(l.DiscussionEmbed,{shortname:n,config:a})))},t}(r.Component),x=(t.default=w,"106359470")},134:function(e,t,n){var a;e.exports=(a=n(140))&&a.default||a},135:function(e,t,n){"use strict";n.r(t),n.d(t,"graphql",function(){return f}),n.d(t,"StaticQueryContext",function(){return m}),n.d(t,"StaticQuery",function(){return p});var a=n(0),i=n.n(a),r=n(4),o=n.n(r),l=n(132),c=n.n(l);n.d(t,"Link",function(){return c.a}),n.d(t,"withPrefix",function(){return l.withPrefix}),n.d(t,"navigate",function(){return l.navigate}),n.d(t,"push",function(){return l.push}),n.d(t,"replace",function(){return l.replace}),n.d(t,"navigateTo",function(){return l.navigateTo});var u=n(134),s=n.n(u);n.d(t,"PageRenderer",function(){return s.a});var d=n(28);n.d(t,"parsePath",function(){return d.a});var m=i.a.createContext({}),p=function(e){return i.a.createElement(m.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):i.a.createElement("div",null,"Loading (StaticQuery)")})};function f(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}p.propTypes={data:o.a.object,query:o.a.string.isRequired,render:o.a.func,children:o.a.func}},136:function(e,t,n){"use strict";n(137),n(138),n(66),n(46),n(68),n(148);var a=n(139),i=n(0),r=n(133),o=n(135),l=r.a.footer.withConfig({displayName:"Footer",componentId:"k1v18k-0"})(["display:block;width:100%;height:6.5rem;background:#fff;border-top:1px solid #eee;border-bottom:1px solid #eee;padding-top:15px;margin-top:25px;"]),c=r.a.li.withConfig({displayName:"Footer__FooterItem",componentId:"k1v18k-1"})(["position:relative;float:left;margin-bottom:0;margin-right:15px;"]),u=r.a.ul.withConfig({displayName:"Footer__FooterItems",componentId:"k1v18k-2"})(["list-style:none;margin-bottom:0;float:right;"]),s=r.a.div.withConfig({displayName:"Footer__Copyright",componentId:"k1v18k-3"})(["float:left;"]);t.a=function(){return i.createElement(o.StaticQuery,{query:"2798683107",render:function(e){return i.createElement(l,null,i.createElement(s,null,"Made with ❤️ in 2018"),i.createElement(u,null,function(e){var t=new Map(e),n=[],a=t.keys(),r=Array.isArray(a),o=0;for(a=r?a:a[Symbol.iterator]();;){var l;if(r){if(o>=a.length)break;l=a[o++]}else{if((o=a.next()).done)break;l=o.value}var u=l,s=t.get(u);n.push(i.createElement(c,null,i.createElement("a",{href:s,title:u,target:"_blank"},i.createElement("i",{className:"fab fa-"+u+" fa-lg"}))))}return n}(e.site.siteMetadata.socialLinks)))},data:a})}},139:function(e){e.exports={data:{site:{siteMetadata:{socialLinks:[["linkedin","https://www.linkedin.com/in/oliviaifrim/"],["github","https://github.com/iolivia"],["quora","https://www.quora.com/profile/Olivia-Ifrim"]]}}}}},140:function(e,t,n){"use strict";n.r(t);n(29);var a=n(0),i=n.n(a),r=n(4),o=n.n(r),l=n(49),c=n(2),u=function(e){var t=e.location,n=c.default.getResourcesForPathnameSync(t.pathname);return i.a.createElement(l.a,Object.assign({location:t,pageResources:n},n.json))};u.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},t.default=u},144:function(e,t,n){},145:function(e,t,n){},146:function(e,t,n){},149:function(e,t,n){"use strict";var a=n(0),i=n.n(a),r=n(133),o=n(6),l=n.n(o),c=r.a.nav.withConfig({displayName:"Navigation__NavBar",componentId:"axbleu-0"})(["display:block;width:100%;height:6.5rem;background:#fff;z-index:99;border-top:1px solid #eee;border-bottom:1px solid #eee;"]),u=r.a.a.withConfig({displayName:"Navigation__NavBarLink",componentId:"axbleu-1"})(["text-transform:uppercase;font-size:11px;font-weight:600;letter-spacing:.2rem;text-decoration:none;line-height:6.5rem;color:#222;:hover{color:#f7484e;}"]),s=r.a.li.withConfig({displayName:"Navigation__NavBarItem",componentId:"axbleu-2"})(["position:relative;margin-left:35px;float:left;margin-bottom:0;"]),d=r.a.ul.withConfig({displayName:"Navigation__NavBarItems",componentId:"axbleu-3"})(["list-style:none;margin-bottom:0;float:right;"]),m=function(e){function t(){return e.apply(this,arguments)||this}return l()(t,e),t.prototype.render=function(){return a.createElement(c,{className:"fixed"},a.createElement("div",{className:"container"},a.createElement(u,{href:"/"},"olivia ifrim"),a.createElement(d,null,a.createElement(s,null,a.createElement(u,{href:"/#about"},"about")),a.createElement(s,null,a.createElement(u,{href:"/#blog"},"blog")),a.createElement(s,null,a.createElement(u,{href:"/#contact"},"contact")))))},t}(a.Component),p=(n(144),n(145),n(146),n(136)),f=r.a.div.withConfig({displayName:"Layout__MainContent",componentId:"sc-1nkx85v-0"})(["padding-top:100px;"]);t.a=function(e){var t=e.children;return i.a.createElement("div",{className:"container"},i.a.createElement(m,null),i.a.createElement(f,null,t),i.a.createElement(p.a,null))}}}]);
//# sourceMappingURL=component---src-templates-blog-post-tsx-cd842116693f538d8cd7.js.map