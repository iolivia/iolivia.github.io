(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{131:function(e,t,a){"use strict";a.r(t);a(137),a(138),a(66);var r=a(6),o=a.n(r),n=a(0),i=a(180),s=a(144),l=a(181),u=a(150),p=a.n(u),c=function(e){function t(){return e.apply(this,arguments)||this}return o()(t,e),t.prototype.render=function(){var e=this.props,t=e.imageSizes,a=e.title,r=e.excerpt,o=e.url,i=e.date;return n.createElement("a",{className:l.postPreviewContainer,href:o},n.createElement(p.a,{sizes:t}),n.createElement("div",{className:l.date},i),n.createElement("h2",null,a),n.createElement("p",null,r))},t}(n.Component),m=a(148);a.d(t,"indexPageQuery",function(){return d}),a.d(t,"default",function(){return f});var d="1390828367",f=function(e){function t(){for(var t,a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(t=e.call.apply(e,[this].concat(r))||this).buildPostList=function(e){var t=[],a=e,r=Array.isArray(a),o=0;for(a=r?a:a[Symbol.iterator]();;){var i;if(r){if(o>=a.length)break;i=a[o++]}else{if((o=a.next()).done)break;i=o.value}var s=i.node;t.push(n.createElement(c,{imageSizes:s.frontmatter.featuredImage.childImageSharp.sizes,title:s.frontmatter.title,excerpt:s.excerpt,url:s.fields.slug,date:s.frontmatter.date}))}return t},t}return o()(t,e),t.prototype.render=function(){var e=this.props.data.allMarkdownRemark.edges,t=this.props.data.site.siteMetadata;return n.createElement(s.a,null,n.createElement(m.a,{title:t.title,description:t.description}),n.createElement("ul",{className:i.postList},this.buildPostList(e)))},t}(n.Component)},133:function(e,t,a){"use strict";a.r(t),a.d(t,"graphql",function(){return f}),a.d(t,"StaticQueryContext",function(){return m}),a.d(t,"StaticQuery",function(){return d});var r=a(0),o=a.n(r),n=a(4),i=a.n(n),s=a(132),l=a.n(s);a.d(t,"Link",function(){return l.a}),a.d(t,"withPrefix",function(){return s.withPrefix}),a.d(t,"navigate",function(){return s.navigate}),a.d(t,"push",function(){return s.push}),a.d(t,"replace",function(){return s.replace}),a.d(t,"navigateTo",function(){return s.navigateTo});var u=a(134),p=a.n(u);a.d(t,"PageRenderer",function(){return p.a});var c=a(28);a.d(t,"parsePath",function(){return c.a});var m=o.a.createContext({}),d=function(e){return o.a.createElement(m.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):o.a.createElement("div",null,"Loading (StaticQuery)")})};function f(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}d.propTypes={data:i.a.object,query:i.a.string.isRequired,render:i.a.func,children:i.a.func}},134:function(e,t,a){var r;e.exports=(r=a(141))&&r.default||r},135:function(e,t,a){e.exports={pattern:"Page-module--pattern--2OMjD",separatorTopDark:"Page-module--separatorTopDark--1PJCx",separatorBottomDark:"Page-module--separatorBottomDark--3Z-pL",separatorTopLight:"Page-module--separatorTopLight--18HRW",separatorBottomLight:"Page-module--separatorBottomLight--12LAs",pageInnerContainer:"Page-module--pageInnerContainer--3yRDU"}},136:function(e,t,a){e.exports={pattern:"Banner-module--pattern--30-Rm",separatorTopDark:"Banner-module--separatorTopDark--1c1VX",separatorBottomDark:"Banner-module--separatorBottomDark--1VDp2",separatorTopLight:"Banner-module--separatorTopLight--2hymc",separatorBottomLight:"Banner-module--separatorBottomLight--1HHq1",bannerContainer:"Banner-module--bannerContainer--2kfC_"}},139:function(e){e.exports={data:{site:{siteMetadata:{socialLinks:[["linkedin","https://www.linkedin.com/in/oliviaifrim/"],["github","https://github.com/iolivia"],["quora","https://www.quora.com/profile/Olivia-Ifrim"]]}}}}},140:function(e,t,a){e.exports={pattern:"Footer-module--pattern--7s7q6",separatorTopDark:"Footer-module--separatorTopDark--2PN15",separatorBottomDark:"Footer-module--separatorBottomDark--1nsn2",separatorTopLight:"Footer-module--separatorTopLight--2adox",separatorBottomLight:"Footer-module--separatorBottomLight--278Mg",footerContainer:"Footer-module--footerContainer--6amLz",footerInnerContainer:"Footer-module--footerInnerContainer--3s6kB",footerSocialIconsItem:"Footer-module--footerSocialIconsItem--3ocE0"}},141:function(e,t,a){"use strict";a.r(t);a(29);var r=a(0),o=a.n(r),n=a(4),i=a.n(n),s=a(49),l=a(2),u=function(e){var t=e.location,a=l.default.getResourcesForPathnameSync(t.pathname);return o.a.createElement(s.a,Object.assign({location:t,pageResources:a},a.json))};u.propTypes={location:i.a.shape({pathname:i.a.string.isRequired}).isRequired},t.default=u},142:function(e){e.exports={data:{site:{siteMetadata:{fullName:"olivia ifrim",title:"Software Engineer",tagline:"",email:"olivia_github@outlook.com",settings:{animationsEnabled:!0}}}}}},143:function(e,t,a){e.exports={pattern:"Header-module--pattern--2EFLT",separatorTopDark:"Header-module--separatorTopDark--1etmK",separatorBottomDark:"Header-module--separatorBottomDark--1NXeZ",separatorTopLight:"Header-module--separatorTopLight--2v-vk",separatorBottomLight:"Header-module--separatorBottomLight--2MHyW",headerContainer:"Header-module--headerContainer--1T6Fd",headerLogo:"Header-module--headerLogo--2Nsjr",headerInfo:"Header-module--headerInfo--jqeNh"}},144:function(e,t,a){"use strict";var r=a(6),o=a.n(r),n=a(0),i=a(135),s=a(136),l=(a(137),a(138),a(66),a(46),a(68),a(146),a(139)),u=a(140),p=a(133),c=function(){return n.createElement(p.StaticQuery,{query:"2798683107",render:function(e){return n.createElement("footer",{className:u.footerContainer+" "+u.pattern},n.createElement("div",{className:u.separatorBottomLight}),n.createElement("div",{className:u.footerInnerContainer+" "+u.innerContainer},n.createElement("div",{className:u.footerCopyrightSection},"Copyright 2018"),n.createElement("ul",{className:u.footerSocialIconsSection},function(e){var t=new Map(e),a=[],r=t.keys(),o=Array.isArray(r),i=0;for(r=o?r:r[Symbol.iterator]();;){var s;if(o){if(i>=r.length)break;s=r[i++]}else{if((i=r.next()).done)break;s=i.value}var l=s,p=t.get(l);a.push(n.createElement("li",{className:u.footerSocialIconsItem},n.createElement("a",{href:p,title:l,target:"_blank"},n.createElement("i",{className:"fab fa-"+l+" fa-lg"}))))}return a}(e.site.siteMetadata.socialLinks))))},data:l})},m=a(142),d=a(143),f=a(147),h=function(){return n.createElement(p.StaticQuery,{query:"3867052632",render:function(e){return n.createElement("header",{className:d.headerContainer},n.createElement("div",{className:d.headerInnerContainer},n.createElement("div",{className:d.headerNavigation},n.createElement("a",{className:d.headerLogo,href:"/"},n.createElement("h1",null,e.site.siteMetadata.settings.animationsEnabled?n.createElement(f.Random,{text:e.site.siteMetadata.fullName,iterations:1,effect:"fadeIn",effectChange:2,effectDirection:"up"}):e.site.siteMetadata.fullName)),n.createElement("div",{className:d.separatorBottomLight}),n.createElement("div",{className:d.headerInfo},n.createElement("h4",null," ",e.site.siteMetadata.title," "),n.createElement("p",null," ",e.site.siteMetadata.tagline,"  "),n.createElement("div",{className:d.separatorBottomLight}),n.createElement("a",{href:"mailto:"+e.site.siteMetadata.email},n.createElement("p",null,e.site.siteMetadata.email)),n.createElement("div",{className:d.separatorBottomLight})))))},data:m})},g=function(e){function t(){return e.apply(this,arguments)||this}return o()(t,e),t.prototype.render=function(){return n.createElement("div",{className:s.bannerContainer+" "+s.pattern},n.createElement(h,null),n.createElement(c,null))},t}(n.Component);a.d(t,"a",function(){return v});var v=function(e){function t(){return e.apply(this,arguments)||this}return o()(t,e),t.prototype.render=function(){return n.createElement("div",{className:i.pageContainer},n.createElement(g,null),n.createElement("div",{className:""+i.pageInnerContainer},this.props.children))},t}(n.Component)},148:function(e,t,a){"use strict";a.d(t,"a",function(){return l});var r=a(6),o=a.n(r),n=a(0),i=a(158),s=a.n(i),l=function(e){function t(){return e.apply(this,arguments)||this}return o()(t,e),t.prototype.render=function(){var e=this.props,t=e.description,a=e.title;return n.createElement("div",null,n.createElement(s.a,{htmlAttributes:{lang:"en"},meta:[{name:"description",content:t}],title:a}))},t}(n.Component)},180:function(e,t,a){e.exports={pattern:"index-module--pattern--iEmFM",separatorTopDark:"index-module--separatorTopDark--r44w9",separatorBottomDark:"index-module--separatorBottomDark--39StQ",separatorTopLight:"index-module--separatorTopLight--2FxnD",separatorBottomLight:"index-module--separatorBottomLight--3bVuA",postList:"index-module--postList--2xOC_"}},181:function(e,t,a){e.exports={pattern:"PostPreview-module--pattern--2RsNg",separatorTopDark:"PostPreview-module--separatorTopDark--2L23p",separatorBottomDark:"PostPreview-module--separatorBottomDark--Kaf-k",separatorTopLight:"PostPreview-module--separatorTopLight--2QmT_",separatorBottomLight:"PostPreview-module--separatorBottomLight--1rFpO",postPreviewContainer:"PostPreview-module--postPreviewContainer--45mXQ",date:"PostPreview-module--date--_ZzX1"}}}]);
//# sourceMappingURL=component---src-pages-index-tsx-3f44109062cd83cb1f02.js.map