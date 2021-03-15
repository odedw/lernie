(this.webpackJsonplernie=this.webpackJsonplernie||[]).push([[0],{122:function(e,t,n){},123:function(e,t,n){},185:function(e,t,n){"use strict";n.r(t);var o,r=n(4),a=n.n(r),c=n(111),s=n.n(c),i=(n(122),n(45)),u=n(43),m=(n(123),n(44)),f=n(37),d=n(42),l=n(57),p=n(117),h=n(112),b=n.n(h),v=n(21),j=n(9),y={parameters:{mod1:{min:0,max:80},mod2:{min:-.5,max:.5},mod3:{min:0,max:10},rotation:{min:0,max:6.283185307179586},brightness:{min:-1,max:1},pixelate:{min:10,max:1500},scale:{min:.5,max:7},colorama:{min:-.001,max:1},modulate:{min:-1,max:1},modulateRotate:{min:-10,max:10},modulateScale:{min:-10,max:10},repeatXY:{min:1,max:8},blend:{min:0,max:1},diff:{min:0,max:1},feedback:{min:0,max:1},selfModulate:{min:0,max:1}},sourceMods:(o={},Object(v.a)(o,j.SourceType.osc,{mod1:{min:0,max:100},mod2:{min:-1,max:1},mod3:{min:0,max:6.3}}),Object(v.a)(o,j.SourceType.noise,{mod1:{min:0,max:1},mod2:{min:0,max:.5},mod3:{min:0,max:10}}),Object(v.a)(o,j.SourceType.voronoi,{mod1:{min:0,max:80},mod2:{min:0,max:10},mod3:{min:0,max:20}}),Object(v.a)(o,j.SourceType.screen,{mod1:{min:0,max:1},mod2:{min:0,max:1},mod3:{min:0,max:1}}),Object(v.a)(o,j.SourceType.shape,{mod1:{min:1,max:20},mod2:{min:0,max:1},mod3:{min:-100,max:100}}),o)};var O=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;Object(d.a)(this,e),this.div=void 0,this.div=t}return Object(l.a)(e,[{key:"getValue",value:function(e){return(Math.sin(e/this.div)+1)/2}}]),e}();function x(e,t,n){return function(o){var r=o.time,a=e.parameters[t];return n.forEach((function(n,o){var c=e.lfos[o][t]<0?1-n.getValue(r):n.getValue(r);a+=c*Math.abs(e.lfos[o][t])*(y.parameters[t].max-y.parameters[t].min)})),a=Math.min(Math.max(y.parameters[t].min,a),y.parameters[t].max)}}function S(e,t,n,o){var r=e.sources[t],a=function(e){return[o1,o2][e]}(t),c=function(e){return[s0,s1][e]}(t),s=function(e){return[o2,o1][e]}(t);(function(e,t,n,o){return e.sourceType===j.SourceType.noise?noise(80,x(e,"mod1",o)).scale(1,1,n).contrast(x(e,"mod2",o)):e.sourceType===j.SourceType.voronoi?voronoi(100,x(e,"mod1",o),x(e,"mod2",o)).scale(1,1,n):e.sourceType===j.SourceType.screen?(t.initScreen(),src(t).color(x(e,"mod1",o),x(e,"mod2",o),x(e,"mod3",o))):e.sourceType===j.SourceType.shape?shape(x(e,"mod1",o),x(e,"mod2",o)).scale(1,1,n).rotate((function(t){return t.time*e.parameters.mod3%360*(Math.PI/180)})):osc(x(e,"mod1",o),x(e,"mod2",o),x(e,"mod3",o))})(r,c,n,o).blend(a,x(r,"feedback",o)).rotate(x(r,"rotation",o),0).pixelate(x(r,"pixelate",o),x(r,"pixelate",o)).scale(x(r,"scale",o)).colorama(x(r,"colorama",o)).modulate(src(s),x(r,"modulate",o)).modulateRotate(src(s),x(r,"modulateRotate",o),x(r,"modulateRotate",o)).modulateScale(src(s),x(r,"modulateScale",o)).modulate(a,x(r,"selfModulate",o)).repeat(x(r,"repeatXY",o),x(r,"repeatXY",o)).brightness(x(r,"brightness",o)).out(a)}function T(e,t,n){S(e,0,t,n),S(e,1,t,n),solid(0,0,0,0).blend(src(o1),x(e.sources[0],"blend",n)).blend(src(o2),x(e.sources[1],"blend",n)).diff(solid(0,0,0,0).blend(src(o1),x(e.sources[0],"diff",n))).diff(solid(0,0,0,0).blend(src(o2),x(e.sources[1],"diff",n))).out(o0)}var k,g=n(82),w=new function e(){Object(d.a)(this,e),this.parameterChange=new g.Subject,this.lfoChange=new g.Subject,this.sourceTypeChange=new g.Subject,this.loadPreset=void 0,this.savePreset=void 0,this.keyDown=void 0,this.keyUp=void 0},P=n(93),M=n(113),C={rotation:0,brightness:0,pixelate:1500,scale:1,colorama:0,modulate:0,modulateRotate:0,modulateScale:0,repeatXY:1,blend:1,diff:0,feedback:0,selfModulate:0},E=(k={},Object(v.a)(k,j.SourceType.osc,{mod1:40,mod2:0,mod3:0}),Object(v.a)(k,j.SourceType.noise,{mod1:0,mod2:.8,mod3:0}),Object(v.a)(k,j.SourceType.voronoi,{mod1:0,mod2:0,mod3:0}),Object(v.a)(k,j.SourceType.screen,{mod1:1,mod2:1,mod3:1}),Object(v.a)(k,j.SourceType.shape,{mod1:3,mod2:.3,mod3:0}),k),I=function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],n=new j.SourceState(Object(f.a)(Object(f.a)({},E[e]),C),e);return n.parameters.blend=t?n.parameters.blend:0,n},R={sources:[{parameters:{blend:{cc:77},diff:{cc:78},feedback:{cc:79},selfModulate:{cc:80},mod1:{cc:13},mod2:{cc:14},mod3:{cc:15},brightness:{cc:16},rotation:{cc:29},pixelate:{cc:30},scale:{cc:31},colorama:{cc:32},modulate:{cc:49},modulateRotate:{cc:50},modulateScale:{cc:51},repeatXY:{cc:52}},switchSource:{note:"F2"},reset:{note:"F#2"}},{parameters:{blend:{cc:81},diff:{cc:82},feedback:{cc:83},selfModulate:{cc:84},mod1:{cc:17},mod2:{cc:18},mod3:{cc:19},brightness:{cc:20},rotation:{cc:33},pixelate:{cc:34},scale:{cc:35},colorama:{cc:36},modulate:{cc:53},modulateRotate:{cc:54},modulateScale:{cc:55},repeatXY:{cc:56}},switchSource:{note:"A3"},reset:{note:"A#3"}}],keys:{shift:{note:"A7"},lfo1:{note:"B7"},lfo2:{note:"C8"}},presets:[{note:"C#5"},{note:"D5"},{note:"D#5"},{note:"E5"},{note:"F6"},{note:"F#6"},{note:"G6"},{note:"G#6"}]},L=n(19),F=n(10),Y=[],D=M.Input.create("Launch Control XL");function N(e,t,n,o,r){var a=t.sources[n],c=Object.keys(a.parameters).map((function(a){var c=a;return function(e,t,n,o,r,a){return e.cc(n.cc,n.channel).subscribe((function(e){var n=r.sources[t];if(a.lfo1||a.lfo2){var c=a.lfo1?0:1,s=n.lfos[c];s[o]=2*e.value/127-1,w.lfoChange.next({value:s[o],parameter:o,sourceIndex:t,lfoIndex:c})}else{var i="mod1"===o||"mod2"===o||"mod3"===o?y.sourceMods[n.sourceType][o]:y.parameters[o],u=i.min,m=(i.max-u)/127;n.parameters[o]=u+m*e.value,w.parameterChange.next({value:n.parameters[o],parameter:o,sourceIndex:t})}}))}(e,n,o.parameters[c],c,t,r)}));return c.push(e.noteOn(o.switchSource.note,o.switchSource.channel).subscribe((function(){a.sourceType=(Number(a.sourceType)+1)%j.SourceTypeValues.length;var e=I(a.sourceType).parameters;Object.keys(a.parameters).filter((function(e){return!["blend","diff"].includes(e)})).forEach((function(t){return a.parameters[t]=e[t]})),w.sourceTypeChange.next({type:a.sourceType,sourceIndex:n})}))),c.push(e.noteOn(o.reset.note,o.reset.channel).subscribe((function(){var e=I(a.sourceType);Object.keys(a.parameters).forEach((function(t){var n=t;a.parameters[n]=e.parameters[n],a.lfos.forEach((function(e){return e[n]=0}))}))}))),c}function V(e,t){return Y.forEach((function(e){return e.unsubscribe()})),D.then((function(n){Y=[].concat(Object(P.a)(N(n,e,0,R.sources[0],t)),Object(P.a)(N(n,e,1,R.sources[1],t)))}))}var X=function(e,t){return e.note==="".concat(t.note.name).concat(t.note.octave)&&(!e.channel||e.channel===t.channel)};var A,B,J,U,z,W=new(function(){function e(){Object(d.a)(this,e),this.state=void 0,this.screenRatio=1,this.lfos=[new O,new O(2)],this.keyState={lfo1:!1,lfo2:!1,shift:!1},this.state={sources:[I(j.SourceType.osc),I(j.SourceType.osc,!1)],presets:[]},this.savePreset=this.savePreset.bind(this),this.loadPreset=this.loadPreset.bind(this)}return Object(l.a)(e,[{key:"init",value:function(){var e,t=this;return Promise.all([V(this.state,this.keyState),(e=this.keyState,D.then((function(t){var n=t.noteOn(),o=Object.keys(R.keys).map((function(e){return e}));w.keyDown=n.pipe(Object(L.a)((function(e){return o.some((function(t){return X(R.keys[t],e)}))})),Object(F.a)((function(e){return o.find((function(t){return X(R.keys[t],e)}))}))),w.keyUp=t.noteOff().pipe(Object(L.a)((function(e){return o.some((function(t){return X(R.keys[t],e)}))})),Object(F.a)((function(e){return o.find((function(t){return X(R.keys[t],e)}))}))),w.loadPreset=n.pipe(Object(L.a)((function(e){return R.presets.some((function(t){return X(t,e)}))})),Object(F.a)((function(e){return R.presets.findIndex((function(t){return X(t,e)}))}))),w.savePreset=n.pipe(Object(L.a)((function(t){return e.shift&&R.presets.some((function(e){return X(e,t)}))})),Object(F.a)((function(e){return R.presets.findIndex((function(t){return X(t,e)}))})))})))]).then((function(){w.savePreset.subscribe((function(e){return t.savePreset(e)})),w.loadPreset.subscribe((function(e){return t.loadPreset(e)})),w.sourceTypeChange.subscribe((function(e){S(t.state,e.sourceIndex,t.screenRatio,t.lfos)})),w.keyDown.subscribe((function(e){return t.keyState[e]=!0})),w.keyUp.subscribe((function(e){return t.keyState[e]=!1}))}))}},{key:"run",value:function(e){e&&(this.screenRatio=e),T(this.state,this.screenRatio,this.lfos)}},{key:"randomize",value:function(){var e=this;Object.keys(this.state.sources[0].parameters).forEach((function(t){if(!t.startsWith("modulate")&&Math.random()<.5){var n=t;e.state.sources[0].parameters[n]=Math.random()*(y.parameters[n].max-y.parameters[n].min+1)+y.parameters[n].min,e.state.sources[1].parameters[n]=Math.random()*(y.parameters[n].max-y.parameters[n].min+1)+y.parameters[n].min}}))}},{key:"savePreset",value:function(e){this.state.presets[e]=[this.cloneSourceState(this.state.sources[0]),this.cloneSourceState(this.state.sources[1])]}},{key:"loadPreset",value:function(e){var t=this;if(this.state.presets[e]&&this.state.presets[e].length===this.state.sources.length){var n=this.state.presets[e].some((function(e,n){return e.sourceType!==t.state.sources[n].sourceType}));this.state.sources.forEach((function(n,o){var r=t.state.presets[e][o];n.sourceType=r.sourceType,p.a.to(n.parameters,Object(f.a)(Object(f.a)({},r.parameters),{},{duration:.001,repeat:0}))})),n&&T(this.state,this.screenRatio,this.lfos)}}},{key:"saveProject",value:function(){!function(e,t){var n="data:text/json;charset=utf-8,"+encodeURIComponent(e),o=document.createElement("a");o.setAttribute("href",n),o.setAttribute("download",t+".json"),document.body.appendChild(o),o.click(),o.remove()}(JSON.stringify(this.state,null,2),b()().format("YYYY-MM-DD_hh-mm-ss"))}},{key:"loadProject",value:function(e){var t=this;(function(e){return new Promise((function(t,n){var o=new FileReader;o.addEventListener("load",(function(e){var n;t(null===(n=e.target)||void 0===n?void 0:n.result)})),o.readAsText(e)}))})(e).then((function(e){try{var n=JSON.parse(e);t.state=n,V(t.state,t.keyState),T(t.state,t.screenRatio,t.lfos)}catch(o){console.error("failed to parse file",o)}})).catch((function(e){console.error("failed to read file",e)}))}},{key:"cloneSourceState",value:function(e){return new j.SourceState(Object(f.a)({},e.parameters),e.sourceType)}}]),e}()),G=n(15),H=n(142),_=m.a.canvas(A||(A=Object(u.a)(["\n  height: 100%;\n  width: 100%;\n"]))),q=function(){var e=Object(r.useRef)(null),t=Object(r.useState)(!1),n=Object(i.a)(t,2),o=n[0],a=n[1];return Object(r.useEffect)((function(){if(e.current&&!o){var t=window.innerWidth,n=window.innerHeight;e.current.width=t,e.current.height=n,new H({canvas:e.current}).setResolution(t,n),W.run(t/n),a(!1)}}),[e,o]),Object(G.jsx)(_,{id:"hydra-canvas",ref:e})},K=n(72),Q=m.a.div(B||(B=Object(u.a)(["\n  position: absolute;\n  left: 0;\n  right: 0;\n  text-align: center;\n  bottom: 20vh;\n  font-size: 5vh;\n  text-shadow: 2px 2px 2px #111;\n  // -webkit-text-stroke-width: 2px;\n  // -webkit-text-stroke-color: #111;\n\n  .text-1 {\n    color: #dcf;\n  }\n  .text-2 {\n    color: #dfc;\n  }\n"]))),Z=m.a.div(J||(J=Object(u.a)([""]))),$=[],ee=function(e){var t=e.enabled,n=Object(r.useState)(""),o=Object(i.a)(n,2),a=o[0],c=o[1],s=Object(r.useState)(""),u=Object(i.a)(s,2),m=u[0],f=u[1],d=Object(r.useCallback)((function(e){var n=arguments.length>1&&void 0!==arguments[1]&&arguments[1],o=e.startsWith("2 - ")?1:0,r=[c,f][o];(t||n)&&(r(e),$[o]&&clearTimeout($[o]),$[o]=setTimeout((function(){r("")}),1e3))}),[c,f,t]);return Object(r.useEffect)((function(){var e=Object(K.a)(w.sourceTypeChange.pipe(Object(F.a)((function(e){return"".concat(e.sourceIndex+1," - ").concat(j.SourceType[e.type].toString())}))),w.parameterChange.pipe(Object(F.a)((function(e){return"".concat(e.sourceIndex+1," - ").concat(e.parameter,": ").concat(e.value.toFixed(2))}))),w.lfoChange.pipe(Object(F.a)((function(e){return"".concat(e.sourceIndex+1," - LFO ").concat(e.lfoIndex+1,"- ").concat(e.parameter,": ").concat(Math.floor(100*e.value),"%")}))),w.loadPreset.pipe(Object(F.a)((function(e){return"Load preset ".concat(e+1)}))),w.savePreset.pipe(Object(F.a)((function(e){return"Save preset ".concat(e+1)})))).subscribe(d);return function(){return e.unsubscribe()}}),[d]),Object(r.useEffect)((function(){d("Scope ".concat(t?"on":"off"),!0)}),[t,d]),Object(G.jsxs)(Q,{children:[Object(G.jsx)(Z,{className:"text-1",children:a}),Object(G.jsx)(Z,{className:"text-2",children:m})]})},te=m.a.div(U||(U=Object(u.a)(["\n  height: 100%;\n  width: 100%;\n  position: relative;\n"])));var ne=m.a.input(z||(z=Object(u.a)(["\n  display: none;\n"])));var oe=function(){var e=Object(r.useState)(!0),t=Object(i.a)(e,2),n=t[0],o=t[1],a=Object(r.useState)(!1),c=Object(i.a)(a,2),s=c[0],u=c[1];return Object(r.useEffect)((function(){window.addEventListener("keypress",(function(e){var t=e.key.toLowerCase();if("s"===t)W.saveProject();else if("l"===t){var n;null===(n=document.getElementById("file-selector"))||void 0===n||n.click()}else"r"===t?W.randomize():"i"===t&&o((function(e){return!e}))}))}),[o]),Object(r.useEffect)((function(){W.init().then((function(){return u(!0)}))}),[u]),s?Object(G.jsxs)(te,{children:[Object(G.jsx)(q,{}),Object(G.jsx)(ee,{enabled:n}),Object(G.jsx)(ne,{type:"file",id:"file-selector",accept:".json",onChange:function(e){return function(e){var t;e.target.files&&(null===(t=e.target.files)||void 0===t?void 0:t.length)>0&&W.loadProject(e.target.files[0])}(e)}})]}):null},re=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,186)).then((function(t){var n=t.getCLS,o=t.getFID,r=t.getFCP,a=t.getLCP,c=t.getTTFB;n(e),o(e),r(e),a(e),c(e)}))};s.a.render(Object(G.jsx)(a.a.StrictMode,{children:Object(G.jsx)(oe,{})}),document.getElementById("root")),re()},9:function(e,t,n){"use strict";var o=n(95);n.o(o,"SourceState")&&n.d(t,"SourceState",(function(){return o.SourceState})),n.o(o,"SourceType")&&n.d(t,"SourceType",(function(){return o.SourceType})),n.o(o,"SourceTypeValues")&&n.d(t,"SourceTypeValues",(function(){return o.SourceTypeValues}));var r=n(96);n.d(t,"SourceType",(function(){return r.a})),n.d(t,"SourceTypeValues",(function(){return r.b}));var a=n(97);n.o(a,"SourceState")&&n.d(t,"SourceState",(function(){return a.SourceState}));var c=n(98);n.d(t,"SourceState",(function(){return c.a}));n(99)},95:function(e,t){},96:function(e,t,n){"use strict";var o;n.d(t,"a",(function(){return o})),n.d(t,"b",(function(){return r})),function(e){e[e.osc=0]="osc",e[e.noise=1]="noise",e[e.voronoi=2]="voronoi",e[e.shape=3]="shape",e[e.screen=4]="screen"}(o||(o={}));var r=Object.keys(o).filter((function(e){return isNaN(Number(e))}))},97:function(e,t){},98:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var o=n(37),r=n(42),a=n(57),c=function(){function e(t,n){Object(r.a)(this,e),this.parameters=void 0,this.sourceType=void 0,this.lfos=void 0,this.parameters=t,this.sourceType=n,this.lfos=[this.generateLfoMap(),this.generateLfoMap()]}return Object(a.a)(e,[{key:"generateLfoMap",value:function(){var e=Object(o.a)({},this.parameters);return Object.keys(e).forEach((function(t){return e[t]=0})),e}}]),e}()},99:function(e,t){}},[[185,1,2]]]);
//# sourceMappingURL=main.51651316.chunk.js.map