var un=Object.defineProperty,cn=Object.defineProperties;var an=Object.getOwnPropertyDescriptors;var ae=Object.getOwnPropertySymbols;var sn=Object.prototype.hasOwnProperty,fn=Object.prototype.propertyIsEnumerable;var se=(e,n,t)=>n in e?un(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t,L=(e,n)=>{for(var t in n||(n={}))sn.call(n,t)&&se(e,t,n[t]);if(ae)for(var t of ae(n))fn.call(n,t)&&se(e,t,n[t]);return e},z=(e,n)=>cn(e,an(n));const pn=function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const _ of document.querySelectorAll('link[rel="modulepreload"]'))r(_);new MutationObserver(_=>{for(const o of _)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}).observe(document,{childList:!0,subtree:!0});function t(_){const o={};return _.integrity&&(o.integrity=_.integrity),_.referrerpolicy&&(o.referrerPolicy=_.referrerpolicy),_.crossorigin==="use-credentials"?o.credentials="include":_.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(_){if(_.ep)return;_.ep=!0;const o=t(_);fetch(_.href,o)}};pn();var V,u,He,Ue,j,De,fe,Re,Y={},Te=[],dn=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;function A(e,n){for(var t in n)e[t]=n[t];return e}function Fe(e){var n=e.parentNode;n&&n.removeChild(e)}function S(e,n,t){var r,_,o,i={};for(o in n)o=="key"?r=n[o]:o=="ref"?_=n[o]:i[o]=n[o];if(arguments.length>2&&(i.children=arguments.length>3?V.call(arguments,2):t),typeof e=="function"&&e.defaultProps!=null)for(o in e.defaultProps)i[o]===void 0&&(i[o]=e.defaultProps[o]);return I(e,i,r,_,null)}function I(e,n,t,r,_){var o={type:e,props:n,key:t,ref:r,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:_==null?++He:_};return _==null&&u.vnode!=null&&u.vnode(o),o}function Le(){return{current:null}}function O(e){return e.children}function N(e,n){this.props=e,this.context=n}function D(e,n){if(n==null)return e.__?D(e.__,e.__.__k.indexOf(e)+1):null;for(var t;n<e.__k.length;n++)if((t=e.__k[n])!=null&&t.__e!=null)return t.__e;return typeof e.type=="function"?D(e):null}function Me(e){var n,t;if((e=e.__)!=null&&e.__c!=null){for(e.__e=e.__c.base=null,n=0;n<e.__k.length;n++)if((t=e.__k[n])!=null&&t.__e!=null){e.__e=e.__c.base=t.__e;break}return Me(e)}}function X(e){(!e.__d&&(e.__d=!0)&&j.push(e)&&!J.__r++||fe!==u.debounceRendering)&&((fe=u.debounceRendering)||De)(J)}function J(){for(var e;J.__r=j.length;)e=j.sort(function(n,t){return n.__v.__b-t.__v.__b}),j=[],e.some(function(n){var t,r,_,o,i,s;n.__d&&(i=(o=(t=n).__v).__e,(s=t.__P)&&(r=[],(_=A({},o)).__v=o.__v+1,_e(s,o,_,t.__n,s.ownerSVGElement!==void 0,o.__h!=null?[i]:null,r,i==null?D(o):i,o.__h),Ie(r,o),o.__e!=i&&Me(o)))})}function We(e,n,t,r,_,o,i,s,f,h){var l,m,c,a,p,$,y,b=r&&r.__k||Te,C=b.length;for(t.__k=[],l=0;l<n.length;l++)if((a=t.__k[l]=(a=n[l])==null||typeof a=="boolean"?null:typeof a=="string"||typeof a=="number"||typeof a=="bigint"?I(null,a,null,null,a):Array.isArray(a)?I(O,{children:a},null,null,null):a.__b>0?I(a.type,a.props,a.key,null,a.__v):a)!=null){if(a.__=t,a.__b=t.__b+1,(c=b[l])===null||c&&a.key==c.key&&a.type===c.type)b[l]=void 0;else for(m=0;m<C;m++){if((c=b[m])&&a.key==c.key&&a.type===c.type){b[m]=void 0;break}c=null}_e(e,a,c=c||Y,_,o,i,s,f,h),p=a.__e,(m=a.ref)&&c.ref!=m&&(y||(y=[]),c.ref&&y.push(c.ref,null,a),y.push(m,a.__c||p,a)),p!=null?($==null&&($=p),typeof a.type=="function"&&a.__k===c.__k?a.__d=f=Be(a,f,e):f=je(e,a,c,b,p,f),typeof t.type=="function"&&(t.__d=f)):f&&c.__e==f&&f.parentNode!=e&&(f=D(c))}for(t.__e=$,l=C;l--;)b[l]!=null&&(typeof t.type=="function"&&b[l].__e!=null&&b[l].__e==t.__d&&(t.__d=D(r,l+1)),qe(b[l],b[l]));if(y)for(l=0;l<y.length;l++)Ve(y[l],y[++l],y[++l])}function Be(e,n,t){for(var r,_=e.__k,o=0;_&&o<_.length;o++)(r=_[o])&&(r.__=e,n=typeof r.type=="function"?Be(r,n,t):je(t,r,r,_,r.__e,n));return n}function P(e,n){return n=n||[],e==null||typeof e=="boolean"||(Array.isArray(e)?e.some(function(t){P(t,n)}):n.push(e)),n}function je(e,n,t,r,_,o){var i,s,f;if(n.__d!==void 0)i=n.__d,n.__d=void 0;else if(t==null||_!=o||_.parentNode==null)e:if(o==null||o.parentNode!==e)e.appendChild(_),i=null;else{for(s=o,f=0;(s=s.nextSibling)&&f<r.length;f+=2)if(s==_)break e;e.insertBefore(_,o),i=o}return i!==void 0?i:_.nextSibling}function hn(e,n,t,r,_){var o;for(o in t)o==="children"||o==="key"||o in n||Q(e,o,null,t[o],r);for(o in n)_&&typeof n[o]!="function"||o==="children"||o==="key"||o==="value"||o==="checked"||t[o]===n[o]||Q(e,o,n[o],t[o],r)}function pe(e,n,t){n[0]==="-"?e.setProperty(n,t):e[n]=t==null?"":typeof t!="number"||dn.test(n)?t:t+"px"}function Q(e,n,t,r,_){var o;e:if(n==="style")if(typeof t=="string")e.style.cssText=t;else{if(typeof r=="string"&&(e.style.cssText=r=""),r)for(n in r)t&&n in t||pe(e.style,n,"");if(t)for(n in t)r&&t[n]===r[n]||pe(e.style,n,t[n])}else if(n[0]==="o"&&n[1]==="n")o=n!==(n=n.replace(/Capture$/,"")),n=n.toLowerCase()in e?n.toLowerCase().slice(2):n.slice(2),e.l||(e.l={}),e.l[n+o]=t,t?r||e.addEventListener(n,o?he:de,o):e.removeEventListener(n,o?he:de,o);else if(n!=="dangerouslySetInnerHTML"){if(_)n=n.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if(n!=="href"&&n!=="list"&&n!=="form"&&n!=="tabIndex"&&n!=="download"&&n in e)try{e[n]=t==null?"":t;break e}catch{}typeof t=="function"||(t!=null&&(t!==!1||n[0]==="a"&&n[1]==="r")?e.setAttribute(n,t):e.removeAttribute(n))}}function de(e){this.l[e.type+!1](u.event?u.event(e):e)}function he(e){this.l[e.type+!0](u.event?u.event(e):e)}function _e(e,n,t,r,_,o,i,s,f){var h,l,m,c,a,p,$,y,b,C,H,v=n.type;if(n.constructor!==void 0)return null;t.__h!=null&&(f=t.__h,s=n.__e=t.__e,n.__h=null,o=[s]),(h=u.__b)&&h(n);try{e:if(typeof v=="function"){if(y=n.props,b=(h=v.contextType)&&r[h.__c],C=h?b?b.props.value:h.__:r,t.__c?$=(l=n.__c=t.__c).__=l.__E:("prototype"in v&&v.prototype.render?n.__c=l=new v(y,C):(n.__c=l=new N(y,C),l.constructor=v,l.render=mn),b&&b.sub(l),l.props=y,l.state||(l.state={}),l.context=C,l.__n=r,m=l.__d=!0,l.__h=[]),l.__s==null&&(l.__s=l.state),v.getDerivedStateFromProps!=null&&(l.__s==l.state&&(l.__s=A({},l.__s)),A(l.__s,v.getDerivedStateFromProps(y,l.__s))),c=l.props,a=l.state,m)v.getDerivedStateFromProps==null&&l.componentWillMount!=null&&l.componentWillMount(),l.componentDidMount!=null&&l.__h.push(l.componentDidMount);else{if(v.getDerivedStateFromProps==null&&y!==c&&l.componentWillReceiveProps!=null&&l.componentWillReceiveProps(y,C),!l.__e&&l.shouldComponentUpdate!=null&&l.shouldComponentUpdate(y,l.__s,C)===!1||n.__v===t.__v){l.props=y,l.state=l.__s,n.__v!==t.__v&&(l.__d=!1),l.__v=n,n.__e=t.__e,n.__k=t.__k,n.__k.forEach(function(g){g&&(g.__=n)}),l.__h.length&&i.push(l);break e}l.componentWillUpdate!=null&&l.componentWillUpdate(y,l.__s,C),l.componentDidUpdate!=null&&l.__h.push(function(){l.componentDidUpdate(c,a,p)})}l.context=C,l.props=y,l.state=l.__s,(h=u.__r)&&h(n),l.__d=!1,l.__v=n,l.__P=e,h=l.render(l.props,l.state,l.context),l.state=l.__s,l.getChildContext!=null&&(r=A(A({},r),l.getChildContext())),m||l.getSnapshotBeforeUpdate==null||(p=l.getSnapshotBeforeUpdate(c,a)),H=h!=null&&h.type===O&&h.key==null?h.props.children:h,We(e,Array.isArray(H)?H:[H],n,t,r,_,o,i,s,f),l.base=n.__e,n.__h=null,l.__h.length&&i.push(l),$&&(l.__E=l.__=null),l.__e=!1}else o==null&&n.__v===t.__v?(n.__k=t.__k,n.__e=t.__e):n.__e=vn(t.__e,n,t,r,_,o,i,f);(h=u.diffed)&&h(n)}catch(g){n.__v=null,(f||o!=null)&&(n.__e=s,n.__h=!!f,o[o.indexOf(s)]=null),u.__e(g,n,t)}}function Ie(e,n){u.__c&&u.__c(n,e),e.some(function(t){try{e=t.__h,t.__h=[],e.some(function(r){r.call(t)})}catch(r){u.__e(r,t.__v)}})}function vn(e,n,t,r,_,o,i,s){var f,h,l,m=t.props,c=n.props,a=n.type,p=0;if(a==="svg"&&(_=!0),o!=null){for(;p<o.length;p++)if((f=o[p])&&"setAttribute"in f==!!a&&(a?f.localName===a:f.nodeType===3)){e=f,o[p]=null;break}}if(e==null){if(a===null)return document.createTextNode(c);e=_?document.createElementNS("http://www.w3.org/2000/svg",a):document.createElement(a,c.is&&c),o=null,s=!1}if(a===null)m===c||s&&e.data===c||(e.data=c);else{if(o=o&&V.call(e.childNodes),h=(m=t.props||Y).dangerouslySetInnerHTML,l=c.dangerouslySetInnerHTML,!s){if(o!=null)for(m={},p=0;p<e.attributes.length;p++)m[e.attributes[p].name]=e.attributes[p].value;(l||h)&&(l&&(h&&l.__html==h.__html||l.__html===e.innerHTML)||(e.innerHTML=l&&l.__html||""))}if(hn(e,c,m,_,s),l)n.__k=[];else if(p=n.props.children,We(e,Array.isArray(p)?p:[p],n,t,r,_&&a!=="foreignObject",o,i,o?o[0]:t.__k&&D(t,0),s),o!=null)for(p=o.length;p--;)o[p]!=null&&Fe(o[p]);s||("value"in c&&(p=c.value)!==void 0&&(p!==e.value||a==="progress"&&!p||a==="option"&&p!==m.value)&&Q(e,"value",p,m.value,!1),"checked"in c&&(p=c.checked)!==void 0&&p!==e.checked&&Q(e,"checked",p,m.checked,!1))}return e}function Ve(e,n,t){try{typeof e=="function"?e(n):e.current=n}catch(r){u.__e(r,t)}}function qe(e,n,t){var r,_;if(u.unmount&&u.unmount(e),(r=e.ref)&&(r.current&&r.current!==e.__e||Ve(r,null,n)),(r=e.__c)!=null){if(r.componentWillUnmount)try{r.componentWillUnmount()}catch(o){u.__e(o,n)}r.base=r.__P=null}if(r=e.__k)for(_=0;_<r.length;_++)r[_]&&qe(r[_],n,typeof e.type!="function");t||e.__e==null||Fe(e.__e),e.__e=e.__d=void 0}function mn(e,n,t){return this.constructor(e,t)}function w(e,n,t){var r,_,o;u.__&&u.__(e,n),_=(r=typeof t=="function")?null:t&&t.__k||n.__k,o=[],_e(n,e=(!r&&t||n).__k=S(O,null,[e]),_||Y,Y,n.ownerSVGElement!==void 0,!r&&t?[t]:_?null:n.firstChild?V.call(n.childNodes):null,o,!r&&t?t:_?_.__e:n.firstChild,r),Ie(o,e)}function le(e,n){w(e,n,le)}function ze(e,n,t){var r,_,o,i=A({},e.props);for(o in n)o=="key"?r=n[o]:o=="ref"?_=n[o]:i[o]=n[o];return arguments.length>2&&(i.children=arguments.length>3?V.call(arguments,2):t),I(e.type,i,r||e.key,_||e.ref,null)}function Ze(e,n){var t={__c:n="__cC"+Re++,__:e,Consumer:function(r,_){return r.children(_)},Provider:function(r){var _,o;return this.getChildContext||(_=[],(o={})[n]=this,this.getChildContext=function(){return o},this.shouldComponentUpdate=function(i){this.props.value!==i.value&&_.some(X)},this.sub=function(i){_.push(i);var s=i.componentWillUnmount;i.componentWillUnmount=function(){_.splice(_.indexOf(i),1),s&&s.call(i)}}),r.children}};return t.Provider.__=t.Consumer.contextType=t}V=Te.slice,u={__e:function(e,n,t,r){for(var _,o,i;n=n.__;)if((_=n.__c)&&!_.__)try{if((o=_.constructor)&&o.getDerivedStateFromError!=null&&(_.setState(o.getDerivedStateFromError(e)),i=_.__d),_.componentDidCatch!=null&&(_.componentDidCatch(e,r||{}),i=_.__d),i)return _.__E=_}catch(s){e=s}throw e}},He=0,Ue=function(e){return e!=null&&e.constructor===void 0},N.prototype.setState=function(e,n){var t;t=this.__s!=null&&this.__s!==this.state?this.__s:this.__s=A({},this.state),typeof e=="function"&&(e=e(A({},t),this.props)),e&&A(t,e),e!=null&&this.__v&&(n&&this.__h.push(n),X(this))},N.prototype.forceUpdate=function(e){this.__v&&(this.__e=!0,e&&this.__h.push(e),X(this))},N.prototype.render=O,j=[],De=typeof Promise=="function"?Promise.prototype.then.bind(Promise.resolve()):setTimeout,J.__r=0,Re=0;var yn=Object.freeze(Object.defineProperty({__proto__:null,render:w,hydrate:le,createElement:S,h:S,Fragment:O,createRef:Le,get isValidElement(){return Ue},Component:N,cloneElement:ze,createContext:Ze,toChildArray:P,get options(){return u}},Symbol.toStringTag,{value:"Module"})),T,k,ve,R=0,Ge=[],me=u.__b,ye=u.__r,be=u.diffed,ge=u.__c,ke=u.unmount;function q(e,n){u.__h&&u.__h(k,e,R||n),R=0;var t=k.__H||(k.__H={__:[],__h:[]});return e>=t.__.length&&t.__.push({}),t.__[e]}function W(e){return R=1,Ke(Qe,e)}function Ke(e,n,t){var r=q(T++,2);return r.t=e,r.__c||(r.__=[t?t(n):Qe(void 0,n),function(_){var o=r.t(r.__[0],_);r.__[0]!==o&&(r.__=[o,r.__[1]],r.__c.setState({}))}],r.__c=k),r.__}function Ye(e,n){var t=q(T++,3);!u.__s&&ue(t.__H,n)&&(t.__=e,t.__H=n,k.__H.__h.push(t))}function Je(e,n){var t=q(T++,4);!u.__s&&ue(t.__H,n)&&(t.__=e,t.__H=n,k.__h.push(t))}function bn(e){return R=5,ie(function(){return{current:e}},[])}function gn(e,n,t){R=6,Je(function(){return typeof e=="function"?(e(n()),function(){return e(null)}):e?(e.current=n(),function(){return e.current=null}):void 0},t==null?t:t.concat(e))}function ie(e,n){var t=q(T++,7);return ue(t.__H,n)&&(t.__=e(),t.__H=n,t.__h=e),t.__}function kn(e,n){return R=8,ie(function(){return e},n)}function Cn(e){var n=k.context[e.__c],t=q(T++,9);return t.c=e,n?(t.__==null&&(t.__=!0,n.sub(k)),n.props.value):e.__}function $n(e,n){u.useDebugValue&&u.useDebugValue(n?n(e):e)}function xn(){for(var e;e=Ge.shift();)if(e.__P)try{e.__H.__h.forEach(G),e.__H.__h.forEach(ee),e.__H.__h=[]}catch(n){e.__H.__h=[],u.__e(n,e.__v)}}u.__b=function(e){k=null,me&&me(e)},u.__r=function(e){ye&&ye(e),T=0;var n=(k=e.__c).__H;n&&(n.__h.forEach(G),n.__h.forEach(ee),n.__h=[])},u.diffed=function(e){be&&be(e);var n=e.__c;n&&n.__H&&n.__H.__h.length&&(Ge.push(n)!==1&&ve===u.requestAnimationFrame||((ve=u.requestAnimationFrame)||function(t){var r,_=function(){clearTimeout(o),Ce&&cancelAnimationFrame(r),setTimeout(t)},o=setTimeout(_,100);Ce&&(r=requestAnimationFrame(_))})(xn)),k=null},u.__c=function(e,n){n.some(function(t){try{t.__h.forEach(G),t.__h=t.__h.filter(function(r){return!r.__||ee(r)})}catch(r){n.some(function(_){_.__h&&(_.__h=[])}),n=[],u.__e(r,t.__v)}}),ge&&ge(e,n)},u.unmount=function(e){ke&&ke(e);var n,t=e.__c;t&&t.__H&&(t.__H.__.forEach(function(r){try{G(r)}catch(_){n=_}}),n&&u.__e(n,t.__v))};var Ce=typeof requestAnimationFrame=="function";function G(e){var n=k,t=e.__c;typeof t=="function"&&(e.__c=void 0,t()),k=n}function ee(e){var n=k;e.__c=e.__(),k=n}function ue(e,n){return!e||e.length!==n.length||n.some(function(t,r){return t!==e[r]})}function Qe(e,n){return typeof n=="function"?n(e):n}function Xe(e,n){for(var t in n)e[t]=n[t];return e}function ne(e,n){for(var t in e)if(t!=="__source"&&!(t in n))return!0;for(var r in n)if(r!=="__source"&&e[r]!==n[r])return!0;return!1}function te(e){this.props=e}function Nn(e,n){function t(_){var o=this.props.ref,i=o==_.ref;return!i&&o&&(o.call?o(null):o.current=null),n?!n(this.props,_)||!i:ne(this.props,_)}function r(_){return this.shouldComponentUpdate=t,S(e,_)}return r.displayName="Memo("+(e.displayName||e.name)+")",r.prototype.isReactComponent=!0,r.__f=!0,r}(te.prototype=new N).isPureReactComponent=!0,te.prototype.shouldComponentUpdate=function(e,n){return ne(this.props,e)||ne(this.state,n)};var $e=u.__b;u.__b=function(e){e.type&&e.type.__f&&e.ref&&(e.props.ref=e.ref,e.ref=null),$e&&$e(e)};var Sn=typeof Symbol!="undefined"&&Symbol.for&&Symbol.for("react.forward_ref")||3911;function Pn(e){function n(t){var r=Xe({},t);return delete r.ref,e(r,t.ref||null)}return n.$$typeof=Sn,n.render=n,n.prototype.isReactComponent=n.__f=!0,n.displayName="ForwardRef("+(e.displayName||e.name)+")",n}var xe=function(e,n){return e==null?null:P(P(e).map(n))},En={map:xe,forEach:xe,count:function(e){return e?P(e).length:0},only:function(e){var n=P(e);if(n.length!==1)throw"Children.only";return n[0]},toArray:P},An=u.__e;u.__e=function(e,n,t,r){if(e.then){for(var _,o=n;o=o.__;)if((_=o.__c)&&_.__c)return n.__e==null&&(n.__e=t.__e,n.__k=t.__k),_.__c(e,n)}An(e,n,t,r)};var Ne=u.unmount;function K(){this.__u=0,this.t=null,this.__b=null}function en(e){var n=e.__.__c;return n&&n.__e&&n.__e(e)}function On(e){var n,t,r;function _(o){if(n||(n=e()).then(function(i){t=i.default||i},function(i){r=i}),r)throw r;if(!t)throw n;return S(t,o)}return _.displayName="Lazy",_.__f=!0,_}function B(){this.u=null,this.o=null}u.unmount=function(e){var n=e.__c;n&&n.__R&&n.__R(),n&&e.__h===!0&&(e.type=null),Ne&&Ne(e)},(K.prototype=new N).__c=function(e,n){var t=n.__c,r=this;r.t==null&&(r.t=[]),r.t.push(t);var _=en(r.__v),o=!1,i=function(){o||(o=!0,t.__R=null,_?_(s):s())};t.__R=i;var s=function(){if(!--r.__u){if(r.state.__e){var h=r.state.__e;r.__v.__k[0]=function m(c,a,p){return c&&(c.__v=null,c.__k=c.__k&&c.__k.map(function($){return m($,a,p)}),c.__c&&c.__c.__P===a&&(c.__e&&p.insertBefore(c.__e,c.__d),c.__c.__e=!0,c.__c.__P=p)),c}(h,h.__c.__P,h.__c.__O)}var l;for(r.setState({__e:r.__b=null});l=r.t.pop();)l.forceUpdate()}},f=n.__h===!0;r.__u++||f||r.setState({__e:r.__b=r.__v.__k[0]}),e.then(i,i)},K.prototype.componentWillUnmount=function(){this.t=[]},K.prototype.render=function(e,n){if(this.__b){if(this.__v.__k){var t=document.createElement("div"),r=this.__v.__k[0].__c;this.__v.__k[0]=function o(i,s,f){return i&&(i.__c&&i.__c.__H&&(i.__c.__H.__.forEach(function(h){typeof h.__c=="function"&&h.__c()}),i.__c.__H=null),(i=Xe({},i)).__c!=null&&(i.__c.__P===f&&(i.__c.__P=s),i.__c=null),i.__k=i.__k&&i.__k.map(function(h){return o(h,s,f)})),i}(this.__b,t,r.__O=r.__P)}this.__b=null}var _=n.__e&&S(O,null,e.fallback);return _&&(_.__h=null),[S(O,null,n.__e?null:e.children),_]};var Se=function(e,n,t){if(++t[1]===t[0]&&e.o.delete(n),e.props.revealOrder&&(e.props.revealOrder[0]!=="t"||!e.o.size))for(t=e.u;t;){for(;t.length>3;)t.pop()();if(t[1]<t[0])break;e.u=t=t[2]}};function wn(e){return this.getChildContext=function(){return e.context},e.children}function Hn(e){var n=this,t=e.i;n.componentWillUnmount=function(){w(null,n.l),n.l=null,n.i=null},n.i&&n.i!==t&&n.componentWillUnmount(),e.__v?(n.l||(n.i=t,n.l={nodeType:1,parentNode:t,childNodes:[],appendChild:function(r){this.childNodes.push(r),n.i.appendChild(r)},insertBefore:function(r,_){this.childNodes.push(r),n.i.appendChild(r)},removeChild:function(r){this.childNodes.splice(this.childNodes.indexOf(r)>>>1,1),n.i.removeChild(r)}}),w(S(wn,{context:n.context},e.__v),n.l)):n.l&&n.componentWillUnmount()}function Un(e,n){return S(Hn,{__v:e,i:n})}(B.prototype=new N).__e=function(e){var n=this,t=en(n.__v),r=n.o.get(e);return r[0]++,function(_){var o=function(){n.props.revealOrder?(r.push(_),Se(n,e,r)):_()};t?t(o):o()}},B.prototype.render=function(e){this.u=null,this.o=new Map;var n=P(e.children);e.revealOrder&&e.revealOrder[0]==="b"&&n.reverse();for(var t=n.length;t--;)this.o.set(n[t],this.u=[1,0,this.u]);return e.children},B.prototype.componentDidUpdate=B.prototype.componentDidMount=function(){var e=this;this.o.forEach(function(n,t){Se(e,t,n)})};var nn=typeof Symbol!="undefined"&&Symbol.for&&Symbol.for("react.element")||60103,Dn=/^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|marker(?!H|W|U)|overline|paint|stop|strikethrough|stroke|text(?!L)|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/,Rn=typeof document!="undefined",Tn=function(e){return(typeof Symbol!="undefined"&&typeof Symbol()=="symbol"?/fil|che|rad/i:/fil|che|ra/i).test(e)};function Fn(e,n,t){return n.__k==null&&(n.textContent=""),w(e,n),typeof t=="function"&&t(),e?e.__c:null}function Ln(e,n,t){return le(e,n),typeof t=="function"&&t(),e?e.__c:null}N.prototype.isReactComponent={},["componentWillMount","componentWillReceiveProps","componentWillUpdate"].forEach(function(e){Object.defineProperty(N.prototype,e,{configurable:!0,get:function(){return this["UNSAFE_"+e]},set:function(n){Object.defineProperty(this,e,{configurable:!0,writable:!0,value:n})}})});var Pe=u.event;function Mn(){}function Wn(){return this.cancelBubble}function Bn(){return this.defaultPrevented}u.event=function(e){return Pe&&(e=Pe(e)),e.persist=Mn,e.isPropagationStopped=Wn,e.isDefaultPrevented=Bn,e.nativeEvent=e};var tn,Ee={configurable:!0,get:function(){return this.class}},Ae=u.vnode;u.vnode=function(e){var n=e.type,t=e.props,r=t;if(typeof n=="string"){var _=n.indexOf("-")===-1;for(var o in r={},t){var i=t[o];Rn&&o==="children"&&n==="noscript"||o==="value"&&"defaultValue"in t&&i==null||(o==="defaultValue"&&"value"in t&&t.value==null?o="value":o==="download"&&i===!0?i="":/ondoubleclick/i.test(o)?o="ondblclick":/^onchange(textarea|input)/i.test(o+n)&&!Tn(t.type)?o="oninput":/^onfocus$/i.test(o)?o="onfocusin":/^onblur$/i.test(o)?o="onfocusout":/^on(Ani|Tra|Tou|BeforeInp|Compo)/.test(o)?o=o.toLowerCase():_&&Dn.test(o)?o=o.replace(/[A-Z0-9]/,"-$&").toLowerCase():i===null&&(i=void 0),r[o]=i)}n=="select"&&r.multiple&&Array.isArray(r.value)&&(r.value=P(t.children).forEach(function(s){s.props.selected=r.value.indexOf(s.props.value)!=-1})),n=="select"&&r.defaultValue!=null&&(r.value=P(t.children).forEach(function(s){s.props.selected=r.multiple?r.defaultValue.indexOf(s.props.value)!=-1:r.defaultValue==s.props.value})),e.props=r,t.class!=t.className&&(Ee.enumerable="className"in t,t.className!=null&&(r.class=t.className),Object.defineProperty(r,"className",Ee))}e.$$typeof=nn,Ae&&Ae(e)};var Oe=u.__r;u.__r=function(e){Oe&&Oe(e),tn=e.__c};var jn={ReactCurrentDispatcher:{current:{readContext:function(e){return tn.__n[e.__c].props.value}}}};function In(e){return S.bind(null,e)}function rn(e){return!!e&&e.$$typeof===nn}function Vn(e){return rn(e)?ze.apply(null,arguments):e}function qn(e){return!!e.__k&&(w(null,e),!0)}function zn(e){return e&&(e.base||e.nodeType===1&&e)||null}var Zn=function(e,n){return e(n)},Gn=function(e,n){return e(n)},ce={useState:W,useReducer:Ke,useEffect:Ye,useLayoutEffect:Je,useRef:bn,useImperativeHandle:gn,useMemo:ie,useCallback:kn,useContext:Cn,useDebugValue:$n,version:"17.0.2",Children:En,render:Fn,hydrate:Ln,unmountComponentAtNode:qn,createPortal:Un,createElement:S,createContext:Ze,createFactory:In,cloneElement:Vn,createRef:Le,Fragment:O,isValidElement:rn,findDOMNode:zn,Component:N,PureComponent:te,memo:Nn,forwardRef:Pn,flushSync:Gn,unstable_batchedUpdates:Zn,StrictMode:O,Suspense:K,SuspenseList:B,lazy:On,__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED:jn};function Kn(e){if(e.__esModule)return e;var n=Object.defineProperty({},"__esModule",{value:!0});return Object.keys(e).forEach(function(t){var r=Object.getOwnPropertyDescriptor(e,t);Object.defineProperty(n,t,r.get?r:{enumerable:!0,get:function(){return e[t]}})}),n}var Yn=Kn(yn),on,_n,ln,re=Yn,Jn=0;function we(e,n,t,r,_){var o,i,s={};for(i in n)i=="ref"?o=n[i]:s[i]=n[i];var f={type:e,props:s,key:t,ref:o,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:--Jn,__source:_,__self:r};if(typeof e=="function"&&(o=e.defaultProps))for(i in o)s[i]===void 0&&(s[i]=o[i]);return re.options.vnode&&re.options.vnode(f),f}ln=re.Fragment,_n=we,on=we;const d=_n,oe=on,Qn=ln;class x extends ce.Component{constructor(n){super(n)}render(){return d("button",z(L({className:["CalcNumButton",this.props.is_wide?"is_2x":null].join(" ")},this.props),{children:this.props.label}))}}class M extends ce.Component{constructor(n){super(n)}render(){return d("button",z(L({className:"CalcOpButton"},this.props),{children:this.props.label}))}}class Z extends ce.Component{constructor(n){super(n)}render(){return d("button",z(L({className:"CalcDarkButton"},this.props),{children:this.props.label}))}}var Xn=e=>d("div",L({className:"CalcDisplay"},e));function E(){const[e,n]=W(0),[t,r]=W(null),[_,o]=W(null),[i,s]=W(null);Ye(()=>{document.title=e.toString()},[e]);function f(v){i==null?n(g=>g*10+v):r(g=>g*10+v)}function h(){f(0),f(0)}function l(){r(null)}function m(){n(0),r(null),o(null),s(null)}function c(v){t!=null&&p(),s(v)}function a(){var v;if(i!=null){let g=(v=t!=null?t:_)!=null?v:e;const U=$(e,g,i);n(U),o(g),r(null)}}function p(){const v=$(e,t,i);n(v),o(t),r(null)}function $(v,g,U){let F=null;return U==="+"?F=v+g:U==="-"?F=v-g:U==="*"?F=v*g:U==="/"&&(F=v/g),Math.trunc(F)}function y(){t!=null?r(-t):e!=null&&n(-e)}function b(){t!=null?r(t/100):e!=null&&n(e/100)}const C=t!=null,H=(()=>{let v=null;return t!=null?v=t:e!=null&&(v=e),v})();return oe("div",{className:"CalcApp",children:[d(Xn,{children:H}),oe("div",{className:"CalcNumButtons",children:[C?d(Z,{label:"C",onClick:l}):d(Z,{label:"AC",onClick:m}),d(Z,{label:"\xB1",onClick:y}),d(Z,{label:"\uFF05",onClick:b}),d(M,{label:"\xF7",onClick:()=>c("/")}),d(x,{label:"7",onClick:()=>f(7)}),d(x,{label:"8",onClick:()=>f(8)}),d(x,{label:"9",onClick:()=>f(9)}),d(M,{label:"\xD7",onClick:()=>c("*")}),d(x,{label:"4",onClick:()=>f(4)}),d(x,{label:"5",onClick:()=>f(5)}),d(x,{label:"6",onClick:()=>f(6)}),d(M,{label:"-",onClick:()=>c("-")}),d(x,{label:"1",onClick:()=>f(1)}),d(x,{label:"2",onClick:()=>f(2)}),d(x,{label:"3",onClick:()=>f(3)}),d(M,{label:"+",onClick:()=>c("+")}),d(x,{label:"0",onClick:()=>f(0),is_wide:!0}),d(x,{label:"00",onClick:h}),d(M,{label:"=",onClick:a})]})]})}function et(e){return oe(Qn,{children:[d(E,{}),d(E,{}),d(E,{}),d(E,{}),d(E,{}),d(E,{}),d(E,{}),d(E,{}),d(E,{})]})}w(d(et,{}),document.getElementById("app"));