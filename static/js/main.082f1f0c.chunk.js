(this.webpackJsonplernie=this.webpackJsonplernie||[]).push([[0],{114:function(e,t,n){},115:function(e,t,n){},166:function(e,t,n){"use strict";n.r(t);var r,a=n(4),o=n.n(a),c=n(103),s=n.n(c),i=(n(114),n(45)),u=n(43),f=(n(115),n(44)),d=n(37),l=n(42),m=n(58),p=n(109),h=n(104),b=n.n(h),v=n(21),j=n(9),O={parameters:{mod1:{min:0,max:80},mod2:{min:-.5,max:.5},mod3:{min:0,max:10},rotation:{min:0,max:6.283185307179586},brightness:{min:-1,max:1},pixelate:{min:10,max:1500},scale:{min:.5,max:7},colorama:{min:-.001,max:1},modulate:{min:-1,max:1},modulateRotate:{min:-10,max:10},modulateScale:{min:-10,max:10},repeatXY:{min:1,max:8},blend:{min:0,max:1},diff:{min:0,max:1},feedback:{min:0,max:1},selfModulate:{min:0,max:1}},sourceMods:(r={},Object(v.a)(r,j.SourceType.osc,{mod1:{min:0,max:100},mod2:{min:-1,max:1},mod3:{min:0,max:6.3}}),Object(v.a)(r,j.SourceType.noise,{mod1:{min:0,max:1},mod2:{min:0,max:.5},mod3:{min:0,max:10}}),Object(v.a)(r,j.SourceType.voronoi,{mod1:{min:0,max:80},mod2:{min:0,max:10},mod3:{min:0,max:20}}),Object(v.a)(r,j.SourceType.screen,{mod1:{min:0,max:1},mod2:{min:0,max:1},mod3:{min:0,max:1}}),Object(v.a)(r,j.SourceType.shape,{mod1:{min:1,max:20},mod2:{min:0,max:1},mod3:{min:-100,max:100}}),r)};var y=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;Object(l.a)(this,e),this.div=void 0,this.div=t}return Object(m.a)(e,[{key:"getValue",value:function(e){return(Math.sin(e/this.div)+1)/2}}]),e}();function x(e,t,n){return function(r){var a=r.time,o=e.parameters[t];return n.forEach((function(n,r){var c=e.lfos[r][t]<0?1-n.getValue(a):n.getValue(a);o+=c*Math.abs(e.lfos[r][t])*(O.parameters[t].max-O.parameters[t].min)})),o=Math.min(Math.max(O.parameters[t].min,o),O.parameters[t].max)}}function S(e,t,n,r){switch(e.sourceType){case j.SourceType.noise:return function(e,t,n){return noise(80,x(e,"mod1",n)).scale(1,1,t).contrast(x(e,"mod2",n))}(e,n,r);case j.SourceType.voronoi:return function(e,t,n){return voronoi(100,x(e,"mod1",n),x(e,"mod2",n)).scale(1,1,t)}(e,n,r);case j.SourceType.screen:return function(e,t,n,r){return t.initScreen(),src(t).color(x(e,"mod1",r),x(e,"mod2",r),x(e,"mod3",r))}(e,t,0,r);case j.SourceType.shape:return function(e,t,n){return shape(x(e,"mod1",n),x(e,"mod2",n)).scale(1,1,t).rotate((function(t){return t.time*e.parameters.mod3%360*(Math.PI/180)}))}(e,n,r);default:return function(e,t){return osc(x(e,"mod1",t),x(e,"mod2",t),x(e,"mod3",t))}(e,r)}}function g(e,t,n,r){var a=e.sources[t],o=function(e){return[o1,o2][e]}(t),c=function(e){return[s0,s1][e]}(t),s=function(e){return[o2,o1][e]}(t);S(a,c,n,r).blend(o,x(a,"feedback",r)).rotate(x(a,"rotation",r),0).pixelate((function(e){return x(a,"pixelate",r)(e)*n}),x(a,"pixelate",r)).scale(x(a,"scale",r)).colorama(x(a,"colorama",r)).modulate(src(s),x(a,"modulate",r)).modulateRotate(src(s),x(a,"modulateRotate",r),x(a,"modulateRotate",r)).modulateScale(src(s),x(a,"modulateScale",r)).modulate(o,x(a,"selfModulate",r)).repeat(x(a,"repeatXY",r),x(a,"repeatXY",r)).brightness(x(a,"brightness",r)).out(o)}function k(e,t,n){g(e,0,t,n),g(e,1,t,n),solid(0,0,0,0).blend(src(o1),x(e.sources[0],"blend",n)).blend(src(o2),x(e.sources[1],"blend",n)).diff(solid(0,0,0,0).blend(src(o1),x(e.sources[0],"diff",n))).diff(solid(0,0,0,0).blend(src(o2),x(e.sources[1],"diff",n))).out(o0)}var T=new function e(){Object(l.a)(this,e),this.parameterValueChange$=void 0,this.lfoDestinationValueChange$=void 0,this.audioDestinationValueChange$=void 0,this.clearParameter$=void 0,this.sourceTypeChange$=void 0,this.loadPreset$=void 0,this.savePreset$=void 0,this.keyDown$=void 0,this.keyUp$=void 0,this.resetSource$=void 0},$=n(50),w=n(105),P={sources:[{parameters:{blend:{cc:77},diff:{cc:78},feedback:{cc:79},selfModulate:{cc:80},mod1:{cc:13},mod2:{cc:14},mod3:{cc:15},brightness:{cc:16},rotation:{cc:29},pixelate:{cc:30},scale:{cc:31},colorama:{cc:32},modulate:{cc:49},modulateRotate:{cc:50},modulateScale:{cc:51},repeatXY:{cc:52}},switchSource:{note:"F2"},reset:{note:"F#2"}},{parameters:{blend:{cc:81},diff:{cc:82},feedback:{cc:83},selfModulate:{cc:84},mod1:{cc:17},mod2:{cc:18},mod3:{cc:19},brightness:{cc:20},rotation:{cc:33},pixelate:{cc:34},scale:{cc:35},colorama:{cc:36},modulate:{cc:53},modulateRotate:{cc:54},modulateScale:{cc:55},repeatXY:{cc:56}},switchSource:{note:"A3"},reset:{note:"A#3"}}],keys:{shift:{note:"A7"},lfo1:{note:"B7"},lfo2:{note:"C8"},audio:{note:"A#7"}},presets:[{note:"C#5"},{note:"D5"},{note:"D#5"},{note:"E5"},{note:"F6"},{note:"F#6"},{note:"G6"},{note:"G#6"}]},I=n(73),C=n(10),M=n(19),E=w.Input.create("Launch Control XL");function V(e,t){var n=Object.keys(P.sources[0].parameters).map((function(e){return e}));return E.then((function(r){T.resetSource$=I.a.apply(void 0,Object($.a)(P.sources.map((function(e,t){return r.noteOn(e.reset.note,e.reset.channel).pipe(Object(C.a)((function(){return t})))})))),T.sourceTypeChange$=I.a.apply(void 0,Object($.a)(P.sources.map((function(e,t){return r.noteOn(e.switchSource.note,e.switchSource.channel).pipe(Object(C.a)((function(){return t})))}))));var a=P.sources.map((function(e,t){return n.map((function(n){return r.cc(e.parameters[n].cc,e.parameters[n].channel).pipe(Object(C.a)((function(e){return{e:e,sourceIndex:t,p:n}})))}))})).flatMap((function(e){return e}));T.lfoDestinationValueChange$=I.a.apply(void 0,Object($.a)(a.map((function(e){return e.pipe(Object(M.a)((function(){return(t.lfo1||t.lfo2)&&!t.shift})),Object(C.a)((function(e){var n=e.e,r=e.sourceIndex,a=e.p,o=t.lfo1?0:1;return{value:2*n.value/127-1,parameter:a,sourceIndex:r,lfoIndex:o}})))})))),T.parameterValueChange$=I.a.apply(void 0,Object($.a)(a.map((function(n){return n.pipe(Object(M.a)((function(){return!(t.lfo1||t.lfo2||t.audio||t.shift)})),Object(C.a)((function(t){var n=t.e,r=t.sourceIndex,a=t.p,o="mod1"===a||"mod2"===a||"mod3"===a?O.sourceMods[e(r)][a]:O.parameters[a],c=o.min;return{value:c+(o.max-c)/127*n.value,parameter:a,sourceIndex:r}})))})))),T.audioDestinationValueChange$=I.a.apply(void 0,Object($.a)(a.map((function(e){return e.pipe(Object(M.a)((function(){return t.audio&&!t.shift})),Object(C.a)((function(e){var t=e.e,n=e.sourceIndex,r=e.p;return{value:t.value/127,parameter:r,sourceIndex:n}})))})))),T.clearParameter$=I.a.apply(void 0,Object($.a)(a.map((function(e){return e.pipe(Object(M.a)((function(){return t.shift})),Object(C.a)((function(e){var n=e.sourceIndex;return{parameter:e.p,sourceIndex:n,destination:t.lfo1?"lfo1":t.lfo2?"lfo2":t.audio?"audio":null}})))}))))}))}var R,D=function(e,t){return e.note==="".concat(t.note.name).concat(t.note.octave)&&(!e.channel||e.channel===t.channel)};var L,F,Y,N,A,X={rotation:0,brightness:0,pixelate:1500,scale:1,colorama:0,modulate:0,modulateRotate:0,modulateScale:0,repeatXY:1,blend:1,diff:0,feedback:0,selfModulate:0},B=(R={},Object(v.a)(R,j.SourceType.osc,{mod1:40,mod2:0,mod3:0}),Object(v.a)(R,j.SourceType.noise,{mod1:0,mod2:.8,mod3:0}),Object(v.a)(R,j.SourceType.voronoi,{mod1:0,mod2:0,mod3:0}),Object(v.a)(R,j.SourceType.screen,{mod1:1,mod2:1,mod3:1}),Object(v.a)(R,j.SourceType.shape,{mod1:3,mod2:.3,mod3:0}),R),J=function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],n=new j.SourceState(Object(d.a)(Object(d.a)({},B[e]),X),e);return n.parameters.blend=t?n.parameters.blend:0,n},U=new(function(){function e(){Object(l.a)(this,e),this.state=void 0,this.screenRatio=1,this.lfos=[new y,new y(2)],this.keyState={lfo1:!1,lfo2:!1,shift:!1,audio:!1},this.state={sources:[J(j.SourceType.osc),J(j.SourceType.osc,!1)],presets:[]},this.savePreset=this.savePreset.bind(this),this.loadPreset=this.loadPreset.bind(this)}return Object(m.a)(e,[{key:"init",value:function(){var e,t=this;return Promise.all([V((function(e){return t.state.sources[e].sourceType}),this.keyState),(e=this.keyState,E.then((function(t){var n=t.noteOn(),r=Object.keys(P.keys).map((function(e){return e}));T.keyDown$=n.pipe(Object(M.a)((function(e){return r.some((function(t){return D(P.keys[t],e)}))})),Object(C.a)((function(e){return r.find((function(t){return D(P.keys[t],e)}))}))),T.keyUp$=t.noteOff().pipe(Object(M.a)((function(e){return r.some((function(t){return D(P.keys[t],e)}))})),Object(C.a)((function(e){return r.find((function(t){return D(P.keys[t],e)}))}))),T.loadPreset$=n.pipe(Object(M.a)((function(e){return P.presets.some((function(t){return D(t,e)}))})),Object(C.a)((function(e){return P.presets.findIndex((function(t){return D(t,e)}))}))),T.savePreset$=n.pipe(Object(M.a)((function(t){return e.shift&&P.presets.some((function(e){return D(e,t)}))})),Object(C.a)((function(e){return P.presets.findIndex((function(t){return D(t,e)}))})))})))]).then((function(){T.savePreset$.subscribe((function(e){return t.savePreset(e)})),T.loadPreset$.subscribe((function(e){return t.loadPreset(e)})),T.sourceTypeChange$.subscribe((function(e){var n=t.state.sources[e];n.sourceType=(Number(n.sourceType)+1)%j.SourceTypeValues.length;var r=J(n.sourceType).parameters;Object.keys(n.parameters).filter((function(e){return!["blend","diff"].includes(e)})).forEach((function(e){return n.parameters[e]=r[e]})),g(t.state,e,t.screenRatio,t.lfos)})),T.keyDown$.subscribe((function(e){return t.keyState[e]=!0})),T.keyUp$.subscribe((function(e){return t.keyState[e]=!1})),T.parameterValueChange$.subscribe((function(e){return t.state.sources[e.sourceIndex].parameters[e.parameter]=e.value})),T.lfoDestinationValueChange$.subscribe((function(e){return t.state.sources[e.sourceIndex].lfos[e.lfoIndex][e.parameter]=e.value})),T.resetSource$.subscribe((function(e){var n=t.state.sources[e],r=J(n.sourceType);Object.keys(n.parameters).forEach((function(e){var t=e;n.parameters[t]=r.parameters[t],n.lfos.forEach((function(e){return e[t]=0}))}))})),T.clearParameter$.subscribe((function(e){var n=t.state.sources[e.sourceIndex];"lfo1"===e.destination?n.lfos[0][e.parameter]=0:"lfo2"===e.destination?n.lfos[1][e.parameter]=0:"audio"===e.destination||(n.parameters[e.parameter]=J(n.sourceType).parameters[e.parameter])}))}))}},{key:"run",value:function(e){e&&(this.screenRatio=e),k(this.state,this.screenRatio,this.lfos)}},{key:"randomize",value:function(){var e=this;Object.keys(this.state.sources[0].parameters).forEach((function(t){if(!t.startsWith("modulate")&&Math.random()<.5){var n=t;e.state.sources[0].parameters[n]=Math.random()*(O.parameters[n].max-O.parameters[n].min+1)+O.parameters[n].min,e.state.sources[1].parameters[n]=Math.random()*(O.parameters[n].max-O.parameters[n].min+1)+O.parameters[n].min}}))}},{key:"savePreset",value:function(e){this.state.presets[e]=[this.cloneSourceState(this.state.sources[0]),this.cloneSourceState(this.state.sources[1])]}},{key:"loadPreset",value:function(e){var t=this;if(this.state.presets[e]&&this.state.presets[e].length===this.state.sources.length){var n=this.state.presets[e].some((function(e,n){return e.sourceType!==t.state.sources[n].sourceType}));this.state.sources.forEach((function(n,r){var a=t.state.presets[e][r];n.sourceType=a.sourceType,p.a.to(n.parameters,Object(d.a)(Object(d.a)({},a.parameters),{},{duration:.001,repeat:0}))})),n&&k(this.state,this.screenRatio,this.lfos)}}},{key:"saveProject",value:function(){!function(e,t){var n="data:text/json;charset=utf-8,"+encodeURIComponent(e),r=document.createElement("a");r.setAttribute("href",n),r.setAttribute("download",t+".json"),document.body.appendChild(r),r.click(),r.remove()}(JSON.stringify(this.state,null,2),b()().format("YYYY-MM-DD_hh-mm-ss"))}},{key:"loadProject",value:function(e){var t=this;(function(e){return new Promise((function(t,n){var r=new FileReader;r.addEventListener("load",(function(e){var n;t(null===(n=e.target)||void 0===n?void 0:n.result)})),r.readAsText(e)}))})(e).then((function(e){try{var n=JSON.parse(e);t.state=n,k(t.state,t.screenRatio,t.lfos)}catch(r){console.error("failed to parse file",r)}})).catch((function(e){console.error("failed to read file",e)}))}},{key:"cloneSourceState",value:function(e){return new j.SourceState(Object(d.a)({},e.parameters),e.sourceType)}}]),e}()),z=n(15),W=n(123),G=f.a.canvas(L||(L=Object(u.a)(["\n  height: 100%;\n  width: 100%;\n"]))),H=function(){var e=Object(a.useRef)(null),t=Object(a.useState)(!1),n=Object(i.a)(t,2),r=n[0],o=n[1];return Object(a.useEffect)((function(){if(e.current&&!r){var t=window.innerWidth,n=window.innerHeight;e.current.width=t,e.current.height=n,new W({canvas:e.current}).setResolution(t,n),U.run(t/n),o(!1)}}),[e,r]),Object(z.jsx)(G,{id:"hydra-canvas",ref:e})},_=f.a.div(F||(F=Object(u.a)(["\n  position: absolute;\n  left: 0;\n  right: 0;\n  text-align: center;\n  bottom: 20vh;\n  font-size: 5vh;\n  text-shadow: 2px 2px 2px #111;\n  // -webkit-text-stroke-width: 2px;\n  // -webkit-text-stroke-color: #111;\n\n  .text-1 {\n    color: #dcf;\n  }\n  .text-2 {\n    color: #dfc;\n  }\n"]))),q=f.a.div(Y||(Y=Object(u.a)([""]))),K=[],Q=function(e){var t=e.enabled,n=Object(a.useState)(""),r=Object(i.a)(n,2),o=r[0],c=r[1],s=Object(a.useState)(""),u=Object(i.a)(s,2),f=u[0],d=u[1],l=Object(a.useCallback)((function(e){var n=arguments.length>1&&void 0!==arguments[1]&&arguments[1],r=e.startsWith("2 - ")?1:0,a=[c,d][r];(t||n)&&(a(e),K[r]&&clearTimeout(K[r]),K[r]=setTimeout((function(){a("")}),1e3))}),[c,d,t]);return Object(a.useEffect)((function(){var e=Object(I.a)(T.sourceTypeChange$.pipe(Object(C.a)((function(e){return"".concat(e+1," - ").concat(j.SourceType[U.state.sources[e].sourceType].toString())}))),T.parameterValueChange$.pipe(Object(C.a)((function(e){return"".concat(e.sourceIndex+1," - ").concat(e.parameter,": ").concat(e.value.toFixed(2))}))),T.lfoDestinationValueChange$.pipe(Object(C.a)((function(e){return"".concat(e.sourceIndex+1," - LFO ").concat(e.lfoIndex+1,"- ").concat(e.parameter,": ").concat(Math.floor(100*e.value),"%")}))),T.loadPreset$.pipe(Object(C.a)((function(e){return"Load preset ".concat(e+1)}))),T.savePreset$.pipe(Object(C.a)((function(e){return"Save preset ".concat(e+1)}))),T.clearParameter$.pipe(Object(C.a)((function(e){return"".concat(e.sourceIndex+1," ").concat(e.destination?"- ".concat(e.destination):"","- ").concat(e.parameter," cleared")})))).subscribe(l);return function(){return e.unsubscribe()}}),[l]),Object(a.useEffect)((function(){l("Scope ".concat(t?"on":"off"),!0)}),[t,l]),Object(z.jsxs)(_,{children:[Object(z.jsx)(q,{className:"text-1",children:o}),Object(z.jsx)(q,{className:"text-2",children:f})]})},Z=f.a.div(N||(N=Object(u.a)(["\n  height: 100%;\n  width: 100%;\n  position: relative;\n"])));var ee=f.a.input(A||(A=Object(u.a)(["\n  display: none;\n"])));var te=function(){var e=Object(a.useState)(!0),t=Object(i.a)(e,2),n=t[0],r=t[1],o=Object(a.useState)(!1),c=Object(i.a)(o,2),s=c[0],u=c[1];return Object(a.useEffect)((function(){window.addEventListener("keypress",(function(e){var t=e.key.toLowerCase();if("s"===t)U.saveProject();else if("l"===t){var n;null===(n=document.getElementById("file-selector"))||void 0===n||n.click()}else"r"===t?U.randomize():"i"===t&&r((function(e){return!e}))}))}),[r]),Object(a.useEffect)((function(){U.init().then((function(){return u(!0)}))}),[u]),s?Object(z.jsxs)(Z,{children:[Object(z.jsx)(H,{}),Object(z.jsx)(Q,{enabled:n}),Object(z.jsx)(ee,{type:"file",id:"file-selector",accept:".json",onChange:function(e){return function(e){var t;e.target.files&&(null===(t=e.target.files)||void 0===t?void 0:t.length)>0&&U.loadProject(e.target.files[0])}(e)}})]}):null},ne=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,167)).then((function(t){var n=t.getCLS,r=t.getFID,a=t.getFCP,o=t.getLCP,c=t.getTTFB;n(e),r(e),a(e),o(e),c(e)}))};s.a.render(Object(z.jsx)(o.a.StrictMode,{children:Object(z.jsx)(te,{})}),document.getElementById("root")),ne()},9:function(e,t,n){"use strict";var r=n(91);n.o(r,"SourceState")&&n.d(t,"SourceState",(function(){return r.SourceState})),n.o(r,"SourceType")&&n.d(t,"SourceType",(function(){return r.SourceType})),n.o(r,"SourceTypeValues")&&n.d(t,"SourceTypeValues",(function(){return r.SourceTypeValues}));var a=n(92);n.d(t,"SourceType",(function(){return a.a})),n.d(t,"SourceTypeValues",(function(){return a.b}));var o=n(93);n.o(o,"SourceState")&&n.d(t,"SourceState",(function(){return o.SourceState}));var c=n(94);n.d(t,"SourceState",(function(){return c.a}));n(95)},91:function(e,t){},92:function(e,t,n){"use strict";var r;n.d(t,"a",(function(){return r})),n.d(t,"b",(function(){return a})),function(e){e[e.osc=0]="osc",e[e.noise=1]="noise",e[e.voronoi=2]="voronoi",e[e.shape=3]="shape",e[e.screen=4]="screen"}(r||(r={}));var a=Object.keys(r).filter((function(e){return isNaN(Number(e))}))},93:function(e,t){},94:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var r=n(37),a=n(42),o=n(58),c=function(){function e(t,n){Object(a.a)(this,e),this.parameters=void 0,this.sourceType=void 0,this.lfos=void 0,this.parameters=t,this.sourceType=n,this.lfos=[this.generateLfoMap(),this.generateLfoMap()]}return Object(o.a)(e,[{key:"generateLfoMap",value:function(){var e=Object(r.a)({},this.parameters);return Object.keys(e).forEach((function(t){return e[t]=0})),e}}]),e}()},95:function(e,t){}},[[166,1,2]]]);
//# sourceMappingURL=main.082f1f0c.chunk.js.map