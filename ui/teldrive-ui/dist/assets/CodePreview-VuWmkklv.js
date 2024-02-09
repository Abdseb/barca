import{r as a,R as T,j as ee}from"./vendor-oJTxWfXc.js";import{h as be,s as we}from"./index-C6mBHpiU.js";function ye(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function oe(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),r.push.apply(r,n)}return r}function ie(e){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?arguments[t]:{};t%2?oe(Object(r),!0).forEach(function(n){ye(e,n,r[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):oe(Object(r)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))})}return e}function Oe(e,t){if(e==null)return{};var r={},n=Object.keys(e),o,i;for(i=0;i<n.length;i++)o=n[i],!(t.indexOf(o)>=0)&&(r[o]=e[o]);return r}function je(e,t){if(e==null)return{};var r=Oe(e,t),n,o;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],!(t.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}function Me(e,t){return Se(e)||Ee(e,t)||Pe(e,t)||Re()}function Se(e){if(Array.isArray(e))return e}function Ee(e,t){if(!(typeof Symbol>"u"||!(Symbol.iterator in Object(e)))){var r=[],n=!0,o=!1,i=void 0;try{for(var l=e[Symbol.iterator](),f;!(n=(f=l.next()).done)&&(r.push(f.value),!(t&&r.length===t));n=!0);}catch(h){o=!0,i=h}finally{try{!n&&l.return!=null&&l.return()}finally{if(o)throw i}}return r}}function Pe(e,t){if(e){if(typeof e=="string")return ae(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);if(r==="Object"&&e.constructor&&(r=e.constructor.name),r==="Map"||r==="Set")return Array.from(e);if(r==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return ae(e,t)}}function ae(e,t){(t==null||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function Re(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Ce(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function ue(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),r.push.apply(r,n)}return r}function ce(e){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?arguments[t]:{};t%2?ue(Object(r),!0).forEach(function(n){Ce(e,n,r[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):ue(Object(r)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))})}return e}function Ie(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return function(n){return t.reduceRight(function(o,i){return i(o)},n)}}function N(e){return function t(){for(var r=this,n=arguments.length,o=new Array(n),i=0;i<n;i++)o[i]=arguments[i];return o.length>=e.length?e.apply(this,o):function(){for(var l=arguments.length,f=new Array(l),h=0;h<l;h++)f[h]=arguments[h];return t.apply(r,[].concat(o,f))}}}function G(e){return{}.toString.call(e).includes("Object")}function Le(e){return!Object.keys(e).length}function z(e){return typeof e=="function"}function Ae(e,t){return Object.prototype.hasOwnProperty.call(e,t)}function Te(e,t){return G(t)||E("changeType"),Object.keys(t).some(function(r){return!Ae(e,r)})&&E("changeField"),t}function $e(e){z(e)||E("selectorType")}function xe(e){z(e)||G(e)||E("handlerType"),G(e)&&Object.values(e).some(function(t){return!z(t)})&&E("handlersType")}function De(e){e||E("initialIsRequired"),G(e)||E("initialType"),Le(e)&&E("initialContent")}function Ve(e,t){throw new Error(e[t]||e.default)}var Fe={initialIsRequired:"initial state is required",initialType:"initial state should be an object",initialContent:"initial state shouldn't be an empty object",handlerType:"handler should be an object or a function",handlersType:"all handlers should be a functions",selectorType:"selector should be a function",changeType:"provided value of changes should be an object",changeField:'it seams you want to change a field in the state which is not specified in the "initial" state',default:"an unknown error accured in `state-local` package"},E=N(Ve)(Fe),B={changes:Te,selector:$e,handler:xe,initial:De};function Ne(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};B.initial(e),B.handler(t);var r={current:e},n=N(Ue)(r,t),o=N(ze)(r),i=N(B.changes)(e),l=N(qe)(r);function f(){var w=arguments.length>0&&arguments[0]!==void 0?arguments[0]:function(R){return R};return B.selector(w),w(r.current)}function h(w){Ie(n,o,i,l)(w)}return[f,h]}function qe(e,t){return z(t)?t(e.current):t}function ze(e,t){return e.current=ce(ce({},e.current),t),t}function Ue(e,t,r){return z(t)?t(e.current):Object.keys(r).forEach(function(n){var o;return(o=t[n])===null||o===void 0?void 0:o.call(t,e.current[n])}),r}var He={create:Ne},We={paths:{vs:"https://cdn.jsdelivr.net/npm/monaco-editor@0.43.0/min/vs"}};function Be(e){return function t(){for(var r=this,n=arguments.length,o=new Array(n),i=0;i<n;i++)o[i]=arguments[i];return o.length>=e.length?e.apply(this,o):function(){for(var l=arguments.length,f=new Array(l),h=0;h<l;h++)f[h]=arguments[h];return t.apply(r,[].concat(o,f))}}}function ke(e){return{}.toString.call(e).includes("Object")}function Ge(e){return e||le("configIsRequired"),ke(e)||le("configType"),e.urls?{paths:{vs:e.urls.monacoBase}}:e}function Ke(e,t){throw new Error(e[t]||e.default)}var Ye={configIsRequired:"the configuration object is required",configType:"the configuration object should be an object",default:"an unknown error accured in `@monaco-editor/loader` package",deprecation:`Deprecation warning!
    You are using deprecated way of configuration.

    Instead of using
      monaco.config({ urls: { monacoBase: '...' } })
    use
      monaco.config({ paths: { vs: '...' } })

    For more please check the link https://github.com/suren-atoyan/monaco-loader#config
  `},le=Be(Ke)(Ye),Je={config:Ge},Qe=function(){for(var t=arguments.length,r=new Array(t),n=0;n<t;n++)r[n]=arguments[n];return function(o){return r.reduceRight(function(i,l){return l(i)},o)}};function se(e,t){return Object.keys(t).forEach(function(r){t[r]instanceof Object&&e[r]&&Object.assign(t[r],se(e[r],t[r]))}),ie(ie({},e),t)}var Xe={type:"cancelation",msg:"operation is manually canceled"};function te(e){var t=!1,r=new Promise(function(n,o){e.then(function(i){return t?o(Xe):n(i)}),e.catch(o)});return r.cancel=function(){return t=!0},r}var Ze=He.create({config:We,isInitialized:!1,resolve:null,reject:null,monaco:null}),fe=Me(Ze,2),U=fe[0],K=fe[1];function _e(e){var t=Je.config(e),r=t.monaco,n=je(t,["monaco"]);K(function(o){return{config:se(o.config,n),monaco:r}})}function et(){var e=U(function(t){var r=t.monaco,n=t.isInitialized,o=t.resolve;return{monaco:r,isInitialized:n,resolve:o}});if(!e.isInitialized){if(K({isInitialized:!0}),e.monaco)return e.resolve(e.monaco),te(re);if(window.monaco&&window.monaco.editor)return de(window.monaco),e.resolve(window.monaco),te(re);Qe(tt,nt)(ot)}return te(re)}function tt(e){return document.body.appendChild(e)}function rt(e){var t=document.createElement("script");return e&&(t.src=e),t}function nt(e){var t=U(function(n){var o=n.config,i=n.reject;return{config:o,reject:i}}),r=rt("".concat(t.config.paths.vs,"/loader.js"));return r.onload=function(){return e()},r.onerror=t.reject,r}function ot(){var e=U(function(r){var n=r.config,o=r.resolve,i=r.reject;return{config:n,resolve:o,reject:i}}),t=window.require;t.config(e.config),t(["vs/editor/editor.main"],function(r){de(r),e.resolve(r)},function(r){e.reject(r)})}function de(e){U().monaco||K({monaco:e})}function it(){return U(function(e){var t=e.monaco;return t})}var re=new Promise(function(e,t){return K({resolve:e,reject:t})}),pe={config:_e,init:et,__getMonacoInstance:it},at={wrapper:{display:"flex",position:"relative",textAlign:"initial"},fullWidth:{width:"100%"},hide:{display:"none"}},ne=at,ut={container:{display:"flex",height:"100%",width:"100%",justifyContent:"center",alignItems:"center"}},ct=ut;function lt({children:e}){return T.createElement("div",{style:ct.container},e)}var st=lt,ft=st;function dt({width:e,height:t,isEditorReady:r,loading:n,_ref:o,className:i,wrapperProps:l}){return T.createElement("section",{style:{...ne.wrapper,width:e,height:t},...l},!r&&T.createElement(ft,null,n),T.createElement("div",{ref:o,style:{...ne.fullWidth,...!r&&ne.hide},className:i}))}var pt=dt,ge=a.memo(pt);function gt(e){a.useEffect(e,[])}var he=gt;function ht(e,t,r=!0){let n=a.useRef(!0);a.useEffect(n.current||!r?()=>{n.current=!1}:e,t)}var j=ht;function q(){}function A(e,t,r,n){return vt(e,n)||mt(e,t,r,n)}function vt(e,t){return e.editor.getModel(ve(e,t))}function mt(e,t,r,n){return e.editor.createModel(t,r,n?ve(e,n):void 0)}function ve(e,t){return e.Uri.parse(t)}function bt({original:e,modified:t,language:r,originalLanguage:n,modifiedLanguage:o,originalModelPath:i,modifiedModelPath:l,keepCurrentOriginalModel:f=!1,keepCurrentModifiedModel:h=!1,theme:w="light",loading:R="Loading...",options:M={},height:Y="100%",width:J="100%",className:Q,wrapperProps:X={},beforeMount:Z=q,onMount:_=q}){let[y,$]=a.useState(!1),[P,v]=a.useState(!0),m=a.useRef(null),g=a.useRef(null),x=a.useRef(null),b=a.useRef(_),s=a.useRef(Z),C=a.useRef(!1);he(()=>{let u=pe.init();return u.then(d=>(g.current=d)&&v(!1)).catch(d=>(d==null?void 0:d.type)!=="cancelation"&&void 0),()=>m.current?D():u.cancel()}),j(()=>{if(m.current&&g.current){let u=m.current.getOriginalEditor(),d=A(g.current,e||"",n||r||"text",i||"");d!==u.getModel()&&u.setModel(d)}},[i],y),j(()=>{if(m.current&&g.current){let u=m.current.getModifiedEditor(),d=A(g.current,t||"",o||r||"text",l||"");d!==u.getModel()&&u.setModel(d)}},[l],y),j(()=>{let u=m.current.getModifiedEditor();u.getOption(g.current.editor.EditorOption.readOnly)?u.setValue(t||""):t!==u.getValue()&&(u.executeEdits("",[{range:u.getModel().getFullModelRange(),text:t||"",forceMoveMarkers:!0}]),u.pushUndoStop())},[t],y),j(()=>{var u,d;(d=(u=m.current)==null?void 0:u.getModel())==null||d.original.setValue(e||"")},[e],y),j(()=>{let{original:u,modified:d}=m.current.getModel();g.current.editor.setModelLanguage(u,n||r||"text"),g.current.editor.setModelLanguage(d,o||r||"text")},[r,n,o],y),j(()=>{var u;(u=g.current)==null||u.editor.setTheme(w)},[w],y),j(()=>{var u;(u=m.current)==null||u.updateOptions(M)},[M],y);let H=a.useCallback(()=>{var S;if(!g.current)return;s.current(g.current);let u=A(g.current,e||"",n||r||"text",i||""),d=A(g.current,t||"",o||r||"text",l||"");(S=m.current)==null||S.setModel({original:u,modified:d})},[r,t,o,e,n,i,l]),W=a.useCallback(()=>{var u;!C.current&&x.current&&(m.current=g.current.editor.createDiffEditor(x.current,{automaticLayout:!0,...M}),H(),(u=g.current)==null||u.editor.setTheme(w),$(!0),C.current=!0)},[M,w,H]);a.useEffect(()=>{y&&b.current(m.current,g.current)},[y]),a.useEffect(()=>{!P&&!y&&W()},[P,y,W]);function D(){var d,S,I,V;let u=(d=m.current)==null?void 0:d.getModel();f||((S=u==null?void 0:u.original)==null||S.dispose()),h||((I=u==null?void 0:u.modified)==null||I.dispose()),(V=m.current)==null||V.dispose()}return T.createElement(ge,{width:J,height:Y,isEditorReady:y,loading:R,_ref:x,className:Q,wrapperProps:X})}var wt=bt;a.memo(wt);function yt(e){let t=a.useRef();return a.useEffect(()=>{t.current=e},[e]),t.current}var Ot=yt,k=new Map;function jt({defaultValue:e,defaultLanguage:t,defaultPath:r,value:n,language:o,path:i,theme:l="light",line:f,loading:h="Loading...",options:w={},overrideServices:R={},saveViewState:M=!0,keepCurrentModel:Y=!1,width:J="100%",height:Q="100%",className:X,wrapperProps:Z={},beforeMount:_=q,onMount:y=q,onChange:$,onValidate:P=q}){let[v,m]=a.useState(!1),[g,x]=a.useState(!0),b=a.useRef(null),s=a.useRef(null),C=a.useRef(null),H=a.useRef(y),W=a.useRef(_),D=a.useRef(),u=a.useRef(n),d=Ot(i),S=a.useRef(!1),I=a.useRef(!1);he(()=>{let c=pe.init();return c.then(p=>(b.current=p)&&x(!1)).catch(p=>(p==null?void 0:p.type)!=="cancelation"&&void 0),()=>s.current?me():c.cancel()}),j(()=>{var p,O,F,L;let c=A(b.current,e||n||"",t||o||"",i||r||"");c!==((p=s.current)==null?void 0:p.getModel())&&(M&&k.set(d,(O=s.current)==null?void 0:O.saveViewState()),(F=s.current)==null||F.setModel(c),M&&((L=s.current)==null||L.restoreViewState(k.get(i))))},[i],v),j(()=>{var c;(c=s.current)==null||c.updateOptions(w)},[w],v),j(()=>{!s.current||n===void 0||(s.current.getOption(b.current.editor.EditorOption.readOnly)?s.current.setValue(n):n!==s.current.getValue()&&(I.current=!0,s.current.executeEdits("",[{range:s.current.getModel().getFullModelRange(),text:n,forceMoveMarkers:!0}]),s.current.pushUndoStop(),I.current=!1))},[n],v),j(()=>{var p,O;let c=(p=s.current)==null?void 0:p.getModel();c&&o&&((O=b.current)==null||O.editor.setModelLanguage(c,o))},[o],v),j(()=>{var c;f!==void 0&&((c=s.current)==null||c.revealLine(f))},[f],v),j(()=>{var c;(c=b.current)==null||c.editor.setTheme(l)},[l],v);let V=a.useCallback(()=>{var c;if(!(!C.current||!b.current)&&!S.current){W.current(b.current);let p=i||r,O=A(b.current,n||e||"",t||o||"",p||"");s.current=(c=b.current)==null?void 0:c.editor.create(C.current,{model:O,automaticLayout:!0,...w},R),M&&s.current.restoreViewState(k.get(p)),b.current.editor.setTheme(l),f!==void 0&&s.current.revealLine(f),m(!0),S.current=!0}},[e,t,r,n,o,i,w,R,M,l,f]);a.useEffect(()=>{v&&H.current(s.current,b.current)},[v]),a.useEffect(()=>{!g&&!v&&V()},[g,v,V]),u.current=n,a.useEffect(()=>{var c,p;v&&$&&((c=D.current)==null||c.dispose(),D.current=(p=s.current)==null?void 0:p.onDidChangeModelContent(O=>{I.current||$(s.current.getValue(),O)}))},[v,$]),a.useEffect(()=>{if(v){let c=b.current.editor.onDidChangeMarkers(p=>{var F;let O=(F=s.current.getModel())==null?void 0:F.uri;if(O&&p.find(L=>L.path===O.path)){let L=b.current.editor.getModelMarkers({resource:O});P==null||P(L)}});return()=>{c==null||c.dispose()}}return()=>{}},[v,P]);function me(){var c,p;(c=D.current)==null||c.dispose(),Y?M&&k.set(i,s.current.saveViewState()):(p=s.current.getModel())==null||p.dispose(),s.current.dispose()}return T.createElement(ge,{width:J,height:Q,isEditorReady:v,loading:h,_ref:C,className:X,wrapperProps:Z})}var Mt=jt,St=a.memo(Mt),Et=St;function Pt(e){const[t,r]=a.useState(""),[n,o]=a.useState(!0),[i,l]=a.useState("");return a.useEffect(()=>{be.get(e).then(f=>{r(f.data)}).catch(f=>l(f.message)).finally(()=>o(!1))},[e]),{response:t,error:i,validating:n}}const Rt=({name:e,mediaUrl:t})=>{const{response:r,error:n,validating:o}=Pt(t);return ee.jsx(ee.Fragment,{children:o?null:ee.jsx(Et,{options:{readOnly:!0},language:we(e),theme:"vs-dark",height:"100%",value:r})})},Lt=a.memo(Rt);export{Lt as default};
