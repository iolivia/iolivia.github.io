(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{150:function(e,t,r){"use strict";var n=r(8);t.__esModule=!0,t.default=void 0;var o,i=n(r(6)),a=n(r(48)),s=n(r(151)),u=n(r(152)),c=n(r(0)),l=n(r(4)),f=function(e){var t=(0,u.default)({},e);return t.resolutions&&(t.fixed=t.resolutions,delete t.resolutions),t.sizes&&(t.fluid=t.sizes,delete t.sizes),t},d={},p=function(e){var t=f(e),r=t.fluid?t.fluid.src:t.fixed.src;return!!d[r]||(d[r]=!0,!1)},T=[];var E=function(e,t){(void 0===o&&"undefined"!=typeof window&&window.IntersectionObserver&&(o=new window.IntersectionObserver(function(e){e.forEach(function(e){T.forEach(function(t){t[0]===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(o.unobserve(t[0]),t[1]())})})},{rootMargin:"200px"})),o).observe(e),T.push([e,t])},h=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',r=e.sizes?'sizes="'+e.sizes+'" ':"",n=e.srcSetWebp?"<source type='image/webp' srcSet=\""+e.srcSetWebp+'" '+r+"/>":"",o=e.srcSet?'<source srcSet="'+e.srcSet+'" '+r+"/>":"",i=e.title?'title="'+e.title+'" ':"",a=e.alt?'alt="'+e.alt+'" ':'alt="" ',s=e.width?'width="'+e.width+'" ':"",u=e.height?'height="'+e.height+'" ':"",c=e.opacity?e.opacity:"1";return"<picture>"+n+o+"<img "+s+u+t+a+i+'style="position:absolute;top:0;left:0;transition:opacity 0.5s;transition-delay:'+(e.transitionDelay?e.transitionDelay:"0.5s")+";opacity:"+c+';width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},y=c.default.forwardRef(function(e,t){var r=e.style,n=e.onLoad,o=e.onError,i=(0,s.default)(e,["style","onLoad","onError"]);return c.default.createElement("img",(0,u.default)({},i,{onLoad:n,onError:o,ref:t,style:(0,u.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},r)}))});y.propTypes={style:l.default.object,onError:l.default.func,onLoad:l.default.func};var A=function(e){function t(t){var r;r=e.call(this,t)||this;var n=!0,o=!0,i=!1,s=t.fadeIn,u=p(t);!u&&"undefined"!=typeof window&&window.IntersectionObserver&&(n=!1,o=!1,i=!0),"undefined"==typeof window&&(n=!1,o=!1),t.critical&&(n=!0,o=!1,i=!1);var l=!(r.props.critical&&!r.props.fadeIn);return r.state={isVisible:n,imgLoaded:o,IOSupported:i,fadeIn:s,hasNoScript:l,seenBefore:u},r.imageRef=c.default.createRef(),r.handleImageLoaded=r.handleImageLoaded.bind((0,a.default)((0,a.default)(r))),r.handleRef=r.handleRef.bind((0,a.default)((0,a.default)(r))),r}(0,i.default)(t,e);var r=t.prototype;return r.componentDidMount=function(){if(this.props.critical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},r.handleRef=function(e){var t=this;this.state.IOSupported&&e&&E(e,function(){t.setState({isVisible:!0})})},r.handleImageLoaded=function(){this.setState({imgLoaded:!0}),this.state.seenBefore&&this.setState({fadeIn:!1}),this.props.onLoad&&this.props.onLoad()},r.render=function(){var e=f(this.props),t=e.title,r=e.alt,n=e.className,o=e.style,i=void 0===o?{}:o,a=e.imgStyle,s=void 0===a?{}:a,l=e.placeholderStyle,d=void 0===l?{}:l,p=e.placeholderClassName,T=e.fluid,E=e.fixed,A=e.backgroundColor,S=e.Tag,b="boolean"==typeof A?"lightgray":A,m=(0,u.default)({opacity:this.state.imgLoaded?0:1,transition:"opacity 0.5s",transitionDelay:this.state.imgLoaded?"0.5s":"0.25s"},s,d),g=(0,u.default)({opacity:this.state.imgLoaded||!1===this.state.fadeIn?1:0,transition:!0===this.state.fadeIn?"opacity 0.5s":"none"},s),v={title:t,alt:this.state.isVisible?"":r,style:m,className:p};if(T){var _=T;return c.default.createElement(S,{className:(n||"")+" gatsby-image-wrapper",style:(0,u.default)({position:"relative",overflow:"hidden"},i),ref:this.handleRef,key:"fluid-"+JSON.stringify(_.srcSet)},c.default.createElement(S,{style:{width:"100%",paddingBottom:100/_.aspectRatio+"%"}}),_.base64&&c.default.createElement(y,(0,u.default)({src:_.base64},v)),_.tracedSVG&&c.default.createElement(y,(0,u.default)({src:_.tracedSVG},v)),b&&c.default.createElement(S,{title:t,style:{backgroundColor:b,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,transitionDelay:"0.35s",right:0,left:0}}),this.state.isVisible&&c.default.createElement("picture",null,_.srcSetWebp&&c.default.createElement("source",{type:"image/webp",srcSet:_.srcSetWebp,sizes:_.sizes}),c.default.createElement("source",{srcSet:_.srcSet,sizes:_.sizes}),c.default.createElement(y,{alt:r,title:t,src:_.src,style:g,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError})),this.state.hasNoScript&&c.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:h((0,u.default)({alt:r,title:t},_))}}))}if(E){var R=E,w=(0,u.default)({position:"relative",overflow:"hidden",display:"inline-block",width:R.width,height:R.height},i);return"inherit"===i.display&&delete w.display,c.default.createElement(S,{className:(n||"")+" gatsby-image-wrapper",style:w,ref:this.handleRef,key:"fixed-"+JSON.stringify(R.srcSet)},R.base64&&c.default.createElement(y,(0,u.default)({src:R.base64},v)),R.tracedSVG&&c.default.createElement(y,(0,u.default)({src:R.tracedSVG},v)),b&&c.default.createElement(S,{title:t,style:{backgroundColor:b,width:R.width,opacity:this.state.imgLoaded?0:1,transitionDelay:"0.25s",height:R.height}}),this.state.isVisible&&c.default.createElement("picture",null,R.srcSetWebp&&c.default.createElement("source",{type:"image/webp",srcSet:R.srcSetWebp,sizes:R.sizes}),c.default.createElement("source",{srcSet:R.srcSet,sizes:R.sizes}),c.default.createElement(y,{alt:r,title:t,width:R.width,height:R.height,src:R.src,style:g,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError})),this.state.hasNoScript&&c.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:h((0,u.default)({alt:r,title:t,width:R.width,height:R.height},R))}}))}return null},t}(c.default.Component);A.defaultProps={critical:!1,fadeIn:!0,alt:"",Tag:"div"};var S=l.default.shape({width:l.default.number.isRequired,height:l.default.number.isRequired,src:l.default.string.isRequired,srcSet:l.default.string.isRequired,base64:l.default.string,tracedSVG:l.default.string,srcWebp:l.default.string,srcSetWebp:l.default.string}),b=l.default.shape({aspectRatio:l.default.number.isRequired,src:l.default.string.isRequired,srcSet:l.default.string.isRequired,sizes:l.default.string.isRequired,base64:l.default.string,tracedSVG:l.default.string,srcWebp:l.default.string,srcSetWebp:l.default.string});A.propTypes={resolutions:S,sizes:b,fixed:S,fluid:b,fadeIn:l.default.bool,title:l.default.string,alt:l.default.string,className:l.default.oneOfType([l.default.string,l.default.object]),critical:l.default.bool,style:l.default.object,imgStyle:l.default.object,placeholderStyle:l.default.object,placeholderClassName:l.default.string,backgroundColor:l.default.oneOfType([l.default.string,l.default.bool]),onLoad:l.default.func,onError:l.default.func,Tag:l.default.string};var m=A;t.default=m},158:function(e,t,r){t.__esModule=!0,t.Helmet=void 0;var n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},o=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),i=f(r(0)),a=f(r(4)),s=f(r(171)),u=f(r(174)),c=r(177),l=r(159);function f(e){return e&&e.__esModule?e:{default:e}}function d(e,t){var r={};for(var n in e)t.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(e,n)&&(r[n]=e[n]);return r}var p,T,E,h=(0,s.default)(c.reducePropsToState,c.handleClientStateChange,c.mapStateOnServer)(function(){return null}),y=(p=h,E=T=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,e.apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.shouldComponentUpdate=function(e){return!(0,u.default)(this.props,e)},t.prototype.mapNestedChildrenToProps=function(e,t){if(!t)return null;switch(e.type){case l.TAG_NAMES.SCRIPT:case l.TAG_NAMES.NOSCRIPT:return{innerHTML:t};case l.TAG_NAMES.STYLE:return{cssText:t}}throw new Error("<"+e.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")},t.prototype.flattenArrayTypeChildren=function(e){var t,r=e.child,o=e.arrayTypeChildren,i=e.newChildProps,a=e.nestedChildren;return n({},o,((t={})[r.type]=[].concat(o[r.type]||[],[n({},i,this.mapNestedChildrenToProps(r,a))]),t))},t.prototype.mapObjectTypeChildren=function(e){var t,r,o=e.child,i=e.newProps,a=e.newChildProps,s=e.nestedChildren;switch(o.type){case l.TAG_NAMES.TITLE:return n({},i,((t={})[o.type]=s,t.titleAttributes=n({},a),t));case l.TAG_NAMES.BODY:return n({},i,{bodyAttributes:n({},a)});case l.TAG_NAMES.HTML:return n({},i,{htmlAttributes:n({},a)})}return n({},i,((r={})[o.type]=n({},a),r))},t.prototype.mapArrayTypeChildrenToProps=function(e,t){var r=n({},t);return Object.keys(e).forEach(function(t){var o;r=n({},r,((o={})[t]=e[t],o))}),r},t.prototype.warnOnInvalidChildren=function(e,t){return!0},t.prototype.mapChildrenToProps=function(e,t){var r=this,n={};return i.default.Children.forEach(e,function(e){if(e&&e.props){var o=e.props,i=o.children,a=d(o,["children"]),s=(0,c.convertReactPropstoHtmlAttributes)(a);switch(r.warnOnInvalidChildren(e,i),e.type){case l.TAG_NAMES.LINK:case l.TAG_NAMES.META:case l.TAG_NAMES.NOSCRIPT:case l.TAG_NAMES.SCRIPT:case l.TAG_NAMES.STYLE:n=r.flattenArrayTypeChildren({child:e,arrayTypeChildren:n,newChildProps:s,nestedChildren:i});break;default:t=r.mapObjectTypeChildren({child:e,newProps:t,newChildProps:s,nestedChildren:i})}}}),t=this.mapArrayTypeChildrenToProps(n,t)},t.prototype.render=function(){var e=this.props,t=e.children,r=d(e,["children"]),o=n({},r);return t&&(o=this.mapChildrenToProps(t,o)),i.default.createElement(p,o)},o(t,null,[{key:"canUseDOM",set:function(e){p.canUseDOM=e}}]),t}(i.default.Component),T.propTypes={base:a.default.object,bodyAttributes:a.default.object,children:a.default.oneOfType([a.default.arrayOf(a.default.node),a.default.node]),defaultTitle:a.default.string,defer:a.default.bool,encodeSpecialCharacters:a.default.bool,htmlAttributes:a.default.object,link:a.default.arrayOf(a.default.object),meta:a.default.arrayOf(a.default.object),noscript:a.default.arrayOf(a.default.object),onChangeClientState:a.default.func,script:a.default.arrayOf(a.default.object),style:a.default.arrayOf(a.default.object),title:a.default.string,titleAttributes:a.default.object,titleTemplate:a.default.string},T.defaultProps={defer:!0,encodeSpecialCharacters:!0},T.peek=p.peek,T.rewind=function(){var e=p.rewind();return e||(e=(0,c.mapStateOnServer)({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}})),e},E);y.renderStatic=y.rewind,t.Helmet=y,t.default=y},159:function(e,t){t.__esModule=!0;t.ATTRIBUTE_NAMES={BODY:"bodyAttributes",HTML:"htmlAttributes",TITLE:"titleAttributes"};var r=t.TAG_NAMES={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title"},n=(t.VALID_TAG_NAMES=Object.keys(r).map(function(e){return r[e]}),t.TAG_PROPERTIES={CHARSET:"charset",CSS_TEXT:"cssText",HREF:"href",HTTPEQUIV:"http-equiv",INNER_HTML:"innerHTML",ITEM_PROP:"itemprop",NAME:"name",PROPERTY:"property",REL:"rel",SRC:"src"},t.REACT_TAG_MAP={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"});t.HELMET_PROPS={DEFAULT_TITLE:"defaultTitle",DEFER:"defer",ENCODE_SPECIAL_CHARACTERS:"encodeSpecialCharacters",ON_CHANGE_CLIENT_STATE:"onChangeClientState",TITLE_TEMPLATE:"titleTemplate"},t.HTML_TAG_MAP=Object.keys(n).reduce(function(e,t){return e[n[t]]=t,e},{}),t.SELF_CLOSING_TAGS=[r.NOSCRIPT,r.SCRIPT,r.STYLE],t.HELMET_ATTRIBUTE="data-react-helmet"},171:function(e,t,r){"use strict";function n(e){return e&&"object"==typeof e&&"default"in e?e.default:e}var o=r(0),i=n(o),a=n(r(172)),s=n(r(173));e.exports=function(e,t,r){if("function"!=typeof e)throw new Error("Expected reducePropsToState to be a function.");if("function"!=typeof t)throw new Error("Expected handleStateChangeOnClient to be a function.");if(void 0!==r&&"function"!=typeof r)throw new Error("Expected mapStateOnServer to either be undefined or a function.");return function(n){if("function"!=typeof n)throw new Error("Expected WrappedComponent to be a React component.");var u=[],c=void 0;function l(){c=e(u.map(function(e){return e.props})),f.canUseDOM?t(c):r&&(c=r(c))}var f=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,e.apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.peek=function(){return c},t.rewind=function(){if(t.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var e=c;return c=void 0,u=[],e},t.prototype.shouldComponentUpdate=function(e){return!s(e,this.props)},t.prototype.componentWillMount=function(){u.push(this),l()},t.prototype.componentDidUpdate=function(){l()},t.prototype.componentWillUnmount=function(){var e=u.indexOf(this);u.splice(e,1),l()},t.prototype.render=function(){return i.createElement(n,this.props)},t}(o.Component);return f.displayName="SideEffect("+function(e){return e.displayName||e.name||"Component"}(n)+")",f.canUseDOM=a.canUseDOM,f}}},172:function(e,t,r){var n;!function(){"use strict";var o=!("undefined"==typeof window||!window.document||!window.document.createElement),i={canUseDOM:o,canUseWorkers:"undefined"!=typeof Worker,canUseEventListeners:o&&!(!window.addEventListener&&!window.attachEvent),canUseViewport:o&&!!window.screen};void 0===(n=function(){return i}.call(t,r,t,e))||(e.exports=n)}()},173:function(e,t){e.exports=function(e,t,r,n){var o=r?r.call(n,e,t):void 0;if(void 0!==o)return!!o;if(e===t)return!0;if("object"!=typeof e||!e||"object"!=typeof t||!t)return!1;var i=Object.keys(e),a=Object.keys(t);if(i.length!==a.length)return!1;for(var s=Object.prototype.hasOwnProperty.bind(t),u=0;u<i.length;u++){var c=i[u];if(!s(c))return!1;var l=e[c],f=t[c];if(!1===(o=r?r.call(n,l,f,c):void 0)||void 0===o&&l!==f)return!1}return!0}},174:function(e,t,r){var n=Array.prototype.slice,o=r(175),i=r(176),a=e.exports=function(e,t,r){return r||(r={}),e===t||(e instanceof Date&&t instanceof Date?e.getTime()===t.getTime():!e||!t||"object"!=typeof e&&"object"!=typeof t?r.strict?e===t:e==t:function(e,t,r){var c,l;if(s(e)||s(t))return!1;if(e.prototype!==t.prototype)return!1;if(i(e))return!!i(t)&&(e=n.call(e),t=n.call(t),a(e,t,r));if(u(e)){if(!u(t))return!1;if(e.length!==t.length)return!1;for(c=0;c<e.length;c++)if(e[c]!==t[c])return!1;return!0}try{var f=o(e),d=o(t)}catch(e){return!1}if(f.length!=d.length)return!1;for(f.sort(),d.sort(),c=f.length-1;c>=0;c--)if(f[c]!=d[c])return!1;for(c=f.length-1;c>=0;c--)if(l=f[c],!a(e[l],t[l],r))return!1;return typeof e==typeof t}(e,t,r))};function s(e){return null==e}function u(e){return!(!e||"object"!=typeof e||"number"!=typeof e.length)&&("function"==typeof e.copy&&"function"==typeof e.slice&&!(e.length>0&&"number"!=typeof e[0]))}},175:function(e,t){function r(e){var t=[];for(var r in e)t.push(r);return t}(e.exports="function"==typeof Object.keys?Object.keys:r).shim=r},176:function(e,t){var r="[object Arguments]"==function(){return Object.prototype.toString.call(arguments)}();function n(e){return"[object Arguments]"==Object.prototype.toString.call(e)}function o(e){return e&&"object"==typeof e&&"number"==typeof e.length&&Object.prototype.hasOwnProperty.call(e,"callee")&&!Object.prototype.propertyIsEnumerable.call(e,"callee")||!1}(t=e.exports=r?n:o).supported=n,t.unsupported=o},177:function(e,t,r){(function(e){t.__esModule=!0,t.warn=t.requestAnimationFrame=t.reducePropsToState=t.mapStateOnServer=t.handleClientStateChange=t.convertReactPropstoHtmlAttributes=void 0;var n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},i=u(r(0)),a=u(r(53)),s=r(159);function u(e){return e&&e.__esModule?e:{default:e}}var c,l=function(e){return!1===(!(arguments.length>1&&void 0!==arguments[1])||arguments[1])?String(e):String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},f=function(e,t){return t.filter(function(t){return void 0!==t[e]}).map(function(t){return t[e]}).reduce(function(e,t){return o({},e,t)},{})},d=function(e,t,r){var o={};return r.filter(function(t){return!!Array.isArray(t[e])||(void 0!==t[e]&&A("Helmet: "+e+' should be of type "Array". Instead found type "'+n(t[e])+'"'),!1)}).map(function(t){return t[e]}).reverse().reduce(function(e,r){var n={};r.filter(function(e){for(var r=void 0,i=Object.keys(e),a=0;a<i.length;a++){var u=i[a],c=u.toLowerCase();-1===t.indexOf(c)||r===s.TAG_PROPERTIES.REL&&"canonical"===e[r].toLowerCase()||c===s.TAG_PROPERTIES.REL&&"stylesheet"===e[c].toLowerCase()||(r=c),-1===t.indexOf(u)||u!==s.TAG_PROPERTIES.INNER_HTML&&u!==s.TAG_PROPERTIES.CSS_TEXT&&u!==s.TAG_PROPERTIES.ITEM_PROP||(r=u)}if(!r||!e[r])return!1;var l=e[r].toLowerCase();return o[r]||(o[r]={}),n[r]||(n[r]={}),!o[r][l]&&(n[r][l]=!0,!0)}).reverse().forEach(function(t){return e.push(t)});for(var i=Object.keys(n),u=0;u<i.length;u++){var c=i[u],l=(0,a.default)({},o[c],n[c]);o[c]=l}return e},[]).reverse()},p=function(e,t){for(var r=e.length-1;r>=0;r--){var n=e[r];if(n.hasOwnProperty(t))return n[t]}return null},T=(c=Date.now(),function(e){var t=Date.now();t-c>16?(c=t,e(t)):setTimeout(function(){T(e)},0)}),E=function(e){return clearTimeout(e)},h="undefined"!=typeof window?window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||T:e.requestAnimationFrame||T,y="undefined"!=typeof window?window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||E:e.cancelAnimationFrame||E,A=function(e){return console&&"function"==typeof console.warn&&console.warn(e)},S=null,b=function(e,t){var r=e.baseTag,n=e.bodyAttributes,o=e.htmlAttributes,i=e.linkTags,a=e.metaTags,u=e.noscriptTags,c=e.onChangeClientState,l=e.scriptTags,f=e.styleTags,d=e.title,p=e.titleAttributes;v(s.TAG_NAMES.BODY,n),v(s.TAG_NAMES.HTML,o),g(d,p);var T={baseTag:_(s.TAG_NAMES.BASE,r),linkTags:_(s.TAG_NAMES.LINK,i),metaTags:_(s.TAG_NAMES.META,a),noscriptTags:_(s.TAG_NAMES.NOSCRIPT,u),scriptTags:_(s.TAG_NAMES.SCRIPT,l),styleTags:_(s.TAG_NAMES.STYLE,f)},E={},h={};Object.keys(T).forEach(function(e){var t=T[e],r=t.newTags,n=t.oldTags;r.length&&(E[e]=r),n.length&&(h[e]=T[e].oldTags)}),t&&t(),c(e,E,h)},m=function(e){return Array.isArray(e)?e.join(""):e},g=function(e,t){void 0!==e&&document.title!==e&&(document.title=m(e)),v(s.TAG_NAMES.TITLE,t)},v=function(e,t){var r=document.getElementsByTagName(e)[0];if(r){for(var n=r.getAttribute(s.HELMET_ATTRIBUTE),o=n?n.split(","):[],i=[].concat(o),a=Object.keys(t),u=0;u<a.length;u++){var c=a[u],l=t[c]||"";r.getAttribute(c)!==l&&r.setAttribute(c,l),-1===o.indexOf(c)&&o.push(c);var f=i.indexOf(c);-1!==f&&i.splice(f,1)}for(var d=i.length-1;d>=0;d--)r.removeAttribute(i[d]);o.length===i.length?r.removeAttribute(s.HELMET_ATTRIBUTE):r.getAttribute(s.HELMET_ATTRIBUTE)!==a.join(",")&&r.setAttribute(s.HELMET_ATTRIBUTE,a.join(","))}},_=function(e,t){var r=document.head||document.querySelector(s.TAG_NAMES.HEAD),n=r.querySelectorAll(e+"["+s.HELMET_ATTRIBUTE+"]"),o=Array.prototype.slice.call(n),i=[],a=void 0;return t&&t.length&&t.forEach(function(t){var r=document.createElement(e);for(var n in t)if(t.hasOwnProperty(n))if(n===s.TAG_PROPERTIES.INNER_HTML)r.innerHTML=t.innerHTML;else if(n===s.TAG_PROPERTIES.CSS_TEXT)r.styleSheet?r.styleSheet.cssText=t.cssText:r.appendChild(document.createTextNode(t.cssText));else{var u=void 0===t[n]?"":t[n];r.setAttribute(n,u)}r.setAttribute(s.HELMET_ATTRIBUTE,"true"),o.some(function(e,t){return a=t,r.isEqualNode(e)})?o.splice(a,1):i.push(r)}),o.forEach(function(e){return e.parentNode.removeChild(e)}),i.forEach(function(e){return r.appendChild(e)}),{oldTags:o,newTags:i}},R=function(e){return Object.keys(e).reduce(function(t,r){var n=void 0!==e[r]?r+'="'+e[r]+'"':""+r;return t?t+" "+n:n},"")},w=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce(function(t,r){return t[s.REACT_TAG_MAP[r]||r]=e[r],t},t)},O=function(e,t,r){switch(e){case s.TAG_NAMES.TITLE:return{toComponent:function(){return e=t.title,r=t.titleAttributes,(n={key:e})[s.HELMET_ATTRIBUTE]=!0,o=w(r,n),[i.default.createElement(s.TAG_NAMES.TITLE,o,e)];var e,r,n,o},toString:function(){return function(e,t,r,n){var o=R(r),i=m(t);return o?"<"+e+" "+s.HELMET_ATTRIBUTE+'="true" '+o+">"+l(i,n)+"</"+e+">":"<"+e+" "+s.HELMET_ATTRIBUTE+'="true">'+l(i,n)+"</"+e+">"}(e,t.title,t.titleAttributes,r)}};case s.ATTRIBUTE_NAMES.BODY:case s.ATTRIBUTE_NAMES.HTML:return{toComponent:function(){return w(t)},toString:function(){return R(t)}};default:return{toComponent:function(){return function(e,t){return t.map(function(t,r){var n,o=((n={key:r})[s.HELMET_ATTRIBUTE]=!0,n);return Object.keys(t).forEach(function(e){var r=s.REACT_TAG_MAP[e]||e;if(r===s.TAG_PROPERTIES.INNER_HTML||r===s.TAG_PROPERTIES.CSS_TEXT){var n=t.innerHTML||t.cssText;o.dangerouslySetInnerHTML={__html:n}}else o[r]=t[e]}),i.default.createElement(e,o)})}(e,t)},toString:function(){return function(e,t,r){return t.reduce(function(t,n){var o=Object.keys(n).filter(function(e){return!(e===s.TAG_PROPERTIES.INNER_HTML||e===s.TAG_PROPERTIES.CSS_TEXT)}).reduce(function(e,t){var o=void 0===n[t]?t:t+'="'+l(n[t],r)+'"';return e?e+" "+o:o},""),i=n.innerHTML||n.cssText||"",a=-1===s.SELF_CLOSING_TAGS.indexOf(e);return t+"<"+e+" "+s.HELMET_ATTRIBUTE+'="true" '+o+(a?"/>":">"+i+"</"+e+">")},"")}(e,t,r)}}}};t.convertReactPropstoHtmlAttributes=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce(function(t,r){return t[s.HTML_TAG_MAP[r]||r]=e[r],t},t)},t.handleClientStateChange=function(e){S&&y(S),e.defer?S=h(function(){b(e,function(){S=null})}):(b(e),S=null)},t.mapStateOnServer=function(e){var t=e.baseTag,r=e.bodyAttributes,n=e.encode,o=e.htmlAttributes,i=e.linkTags,a=e.metaTags,u=e.noscriptTags,c=e.scriptTags,l=e.styleTags,f=e.title,d=void 0===f?"":f,p=e.titleAttributes;return{base:O(s.TAG_NAMES.BASE,t,n),bodyAttributes:O(s.ATTRIBUTE_NAMES.BODY,r,n),htmlAttributes:O(s.ATTRIBUTE_NAMES.HTML,o,n),link:O(s.TAG_NAMES.LINK,i,n),meta:O(s.TAG_NAMES.META,a,n),noscript:O(s.TAG_NAMES.NOSCRIPT,u,n),script:O(s.TAG_NAMES.SCRIPT,c,n),style:O(s.TAG_NAMES.STYLE,l,n),title:O(s.TAG_NAMES.TITLE,{title:d,titleAttributes:p},n)}},t.reducePropsToState=function(e){return{baseTag:function(e,t){return t.filter(function(e){return void 0!==e[s.TAG_NAMES.BASE]}).map(function(e){return e[s.TAG_NAMES.BASE]}).reverse().reduce(function(t,r){if(!t.length)for(var n=Object.keys(r),o=0;o<n.length;o++){var i=n[o].toLowerCase();if(-1!==e.indexOf(i)&&r[i])return t.concat(r)}return t},[])}([s.TAG_PROPERTIES.HREF],e),bodyAttributes:f(s.ATTRIBUTE_NAMES.BODY,e),defer:p(e,s.HELMET_PROPS.DEFER),encode:p(e,s.HELMET_PROPS.ENCODE_SPECIAL_CHARACTERS),htmlAttributes:f(s.ATTRIBUTE_NAMES.HTML,e),linkTags:d(s.TAG_NAMES.LINK,[s.TAG_PROPERTIES.REL,s.TAG_PROPERTIES.HREF],e),metaTags:d(s.TAG_NAMES.META,[s.TAG_PROPERTIES.NAME,s.TAG_PROPERTIES.CHARSET,s.TAG_PROPERTIES.HTTPEQUIV,s.TAG_PROPERTIES.PROPERTY,s.TAG_PROPERTIES.ITEM_PROP],e),noscriptTags:d(s.TAG_NAMES.NOSCRIPT,[s.TAG_PROPERTIES.INNER_HTML],e),onChangeClientState:function(e){return p(e,s.HELMET_PROPS.ON_CHANGE_CLIENT_STATE)||function(){}}(e),scriptTags:d(s.TAG_NAMES.SCRIPT,[s.TAG_PROPERTIES.SRC,s.TAG_PROPERTIES.INNER_HTML],e),styleTags:d(s.TAG_NAMES.STYLE,[s.TAG_PROPERTIES.CSS_TEXT],e),title:function(e){var t=p(e,s.TAG_NAMES.TITLE),r=p(e,s.HELMET_PROPS.TITLE_TEMPLATE);if(r&&t)return r.replace(/%s/g,function(){return t});var n=p(e,s.HELMET_PROPS.DEFAULT_TITLE);return t||n||void 0}(e),titleAttributes:f(s.ATTRIBUTE_NAMES.TITLE,e)}},t.requestAnimationFrame=h,t.warn=A}).call(this,r(178))},178:function(e,t){var r;r=function(){return this}();try{r=r||new Function("return this")()}catch(e){"object"==typeof window&&(r=window)}e.exports=r}}]);
//# sourceMappingURL=1-078f37b172f0c8d815c4.js.map