(this.webpackJsonplernie=this.webpackJsonplernie||[]).push([[0],{122:function(e,t,n){},123:function(e,t,n){},185:function(e,t,n){"use strict";n.r(t);var o,a=n(4),r=n.n(a),c=n(111),s=n.n(c),i=(n(122),n(49)),u=n(43),m=(n(123),n(44)),l=n(37),d=n(42),f=n(57),p=n(117),h=n(112),b=n.n(h),v=n(21),j=n(9),x={parameters:{mod1:{min:0,max:80},mod2:{min:-.5,max:.5},mod3:{min:0,max:10},rotation:{min:0,max:6.283185307179586},brightness:{min:-1,max:1},pixelate:{min:10,max:1500},scale:{min:.5,max:7},colorama:{min:-.001,max:1},modulate:{min:-1,max:1},modulateRotate:{min:-10,max:10},modulateScale:{min:-10,max:10},repeatXY:{min:1,max:8},blend:{min:0,max:1},diff:{min:0,max:1},feedback:{min:0,max:1},selfModulate:{min:0,max:1}},sourceMods:(o={},Object(v.a)(o,j.SourceType.osc,{mod1:{min:0,max:100},mod2:{min:-1,max:1},mod3:{min:0,max:6.3}}),Object(v.a)(o,j.SourceType.noise,{mod1:{min:0,max:1},mod2:{min:0,max:.5},mod3:{min:0,max:10}}),Object(v.a)(o,j.SourceType.voronoi,{mod1:{min:0,max:80},mod2:{min:0,max:10},mod3:{min:0,max:20}}),Object(v.a)(o,j.SourceType.screen,{mod1:{min:0,max:1},mod2:{min:0,max:1},mod3:{min:0,max:1}}),Object(v.a)(o,j.SourceType.shape,{mod1:{min:1,max:20},mod2:{min:0,max:1},mod3:{min:-100,max:100}}),o)};var S=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;Object(d.a)(this,e),this.div=void 0,this.div=t}return Object(f.a)(e,[{key:"getValue",value:function(e){return(Math.sin(e/this.div)+1)/2}}]),e}();function y(e,t,n){return function(o){var a=o.time,r=e.parameters[t];return n.forEach((function(n,o){var c=e.lfos[o][t]<0?1-n.getValue(a):n.getValue(a);r+=c*Math.abs(e.lfos[o][t])*(x.parameters[t].max-x.parameters[t].min)})),r=Math.min(Math.max(x.parameters[t].min,r),x.parameters[t].max)}}function O(e,t,n,o){var a=e.sources[t],r=function(e){return[o1,o2][e]}(t),c=function(e){return[s0,s1][e]}(t),s=function(e){return[o2,o1][e]}(t);(function(e,t,n,o){return e.sourceType===j.SourceType.noise?noise(80,y(e,"mod1",o)).scale(1,1,n).contrast(y(e,"mod2",o)):e.sourceType===j.SourceType.voronoi?voronoi(100,y(e,"mod1",o),y(e,"mod2",o)).scale(1,1,n):e.sourceType===j.SourceType.screen?(t.initScreen(),src(t).color(y(e,"mod1",o),y(e,"mod2",o),y(e,"mod3",o))):e.sourceType===j.SourceType.shape?shape(y(e,"mod1",o),y(e,"mod2",o)).scale(1,1,n).rotate((function(t){return t.time*e.parameters.mod3%360*(Math.PI/180)})):osc(y(e,"mod1",o),y(e,"mod2",o),y(e,"mod3",o))})(a,c,n,o).blend(r,y(a,"feedback",o)).rotate(y(a,"rotation",o),0).pixelate(y(a,"pixelate",o),y(a,"pixelate",o)).scale(y(a,"scale",o)).colorama(y(a,"colorama",o)).modulate(src(s),y(a,"modulate",o)).modulateRotate(src(s),y(a,"modulateRotate",o),y(a,"modulateRotate",o)).modulateScale(src(s),y(a,"modulateScale",o)).modulate(r,y(a,"selfModulate",o)).repeat(y(a,"repeatXY",o),y(a,"repeatXY",o)).brightness(y(a,"brightness",o)).out(r)}function T(e,t,n){O(e,0,t,n),O(e,1,t,n),solid(0,0,0,0).blend(src(o1),y(e.sources[0],"blend",n)).blend(src(o2),y(e.sources[1],"blend",n)).diff(solid(0,0,0,0).blend(src(o1),y(e.sources[0],"diff",n))).diff(solid(0,0,0,0).blend(src(o2),y(e.sources[1],"diff",n))).out(o0)}var g,w=n(62),k=new function e(){Object(d.a)(this,e),this.parameterChange=new w.Subject,this.lfoChange=new w.Subject,this.sourceTypeChange=new w.Subject,this.loadPreset=new w.Subject,this.savePreset=new w.Subject},M=n(92),P=n(113),C={rotation:0,brightness:0,pixelate:1500,scale:1,colorama:0,modulate:0,modulateRotate:0,modulateScale:0,repeatXY:1,blend:1,diff:0,feedback:0,selfModulate:0},E=(g={},Object(v.a)(g,j.SourceType.osc,{mod1:40,mod2:0,mod3:0}),Object(v.a)(g,j.SourceType.noise,{mod1:0,mod2:.8,mod3:0}),Object(v.a)(g,j.SourceType.voronoi,{mod1:0,mod2:0,mod3:0}),Object(v.a)(g,j.SourceType.screen,{mod1:1,mod2:1,mod3:1}),Object(v.a)(g,j.SourceType.shape,{mod1:3,mod2:.3,mod3:0}),g),R=function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],n=new j.SourceState(Object(l.a)(Object(l.a)({},E[e]),C),e);return n.parameters.blend=t?n.parameters.blend:0,n},I={sources:[{parameters:{blend:{cc:77},diff:{cc:78},feedback:{cc:79},selfModulate:{cc:80},mod1:{cc:13},mod2:{cc:14},mod3:{cc:15},brightness:{cc:16},rotation:{cc:29},pixelate:{cc:30},scale:{cc:31},colorama:{cc:32},modulate:{cc:49},modulateRotate:{cc:50},modulateScale:{cc:51},repeatXY:{cc:52}},switchSource:{note:"F2"},reset:{note:"F#2"}},{parameters:{blend:{cc:81},diff:{cc:82},feedback:{cc:83},selfModulate:{cc:84},mod1:{cc:17},mod2:{cc:18},mod3:{cc:19},brightness:{cc:20},rotation:{cc:33},pixelate:{cc:34},scale:{cc:35},colorama:{cc:36},modulate:{cc:53},modulateRotate:{cc:54},modulateScale:{cc:55},repeatXY:{cc:56}},switchSource:{note:"A3"},reset:{note:"A#3"}}],shift:{note:"A7"},lfo1:{note:"B7"},lfo2:{note:"C8"},presets:[{note:"C#5"},{note:"D5"},{note:"D#5"},{note:"E5"},{note:"F6"},{note:"F#6"},{note:"G6"},{note:"G#6"}]},L=[],F=P.Input.create("Launch Control XL");function Y(e,t,n,o){var a=t.sources[n],r=Object.keys(a.parameters).map((function(a){var r=a;return function(e,t,n,o,a,r){return e.cc(n.cc,n.channel).subscribe((function(e){var n=a.sources[t];if(a.lfo1||a.lfo2){var r=a.lfo1?n.lfos[0]:n.lfos[1];r[o]=2*e.value/127-1,k.lfoChange.next({value:r[o],parameter:o,sourceIndex:t,lfoIndex:a.lfo1?1:2})}else{var c="mod1"===o||"mod2"===o||"mod3"===o?x.sourceMods[n.sourceType][o]:x.parameters[o],s=c.min,i=(c.max-s)/127;n.parameters[o]=s+i*e.value,k.parameterChange.next({value:n.parameters[o],parameter:o,sourceIndex:t})}}))}(e,n,o.parameters[r],r,t)}));return r.push(e.noteOn(o.switchSource.note,o.switchSource.channel).subscribe((function(){a.sourceType=(Number(a.sourceType)+1)%j.SourceTypeValues.length;var e=R(a.sourceType).parameters;Object.keys(a.parameters).filter((function(e){return!["blend","diff"].includes(e)})).forEach((function(t){return a.parameters[t]=e[t]})),k.sourceTypeChange.next({type:a.sourceType,sourceIndex:n})}))),r.push(e.noteOn(o.reset.note,o.reset.channel).subscribe((function(){var e=R(a.sourceType);Object.keys(a.parameters).forEach((function(t){var n=t;a.parameters[n]=e.parameters[n],a.lfos.forEach((function(e){return e[n]=0}))}))}))),r}function N(e){L.forEach((function(e){return e.unsubscribe()})),F.then((function(t){L=[].concat(Object(M.a)(Y(t,e,0,I.sources[0])),Object(M.a)(Y(t,e,1,I.sources[1])))}))}function V(e,t,n){return[e.noteOn(I[n].note,I[n].channel).subscribe((function(){t[n]=!0})),e.noteOff(I[n].note,I[n].channel).subscribe((function(){t[n]=!1}))]}var X,A,D,B,J,z=new(function(){function e(){Object(d.a)(this,e),this.state=void 0,this.screenRatio=1,this.lfos=[new S,new S(2)],this.state={sources:[R(j.SourceType.osc),R(j.SourceType.osc,!1)],presets:[],shift:!1,lfo1:!1,lfo2:!1},this.savePreset=this.savePreset.bind(this),this.loadPreset=this.loadPreset.bind(this)}return Object(f.a)(e,[{key:"init",value:function(){var e,t,n,o=this;N(this.state),e=this.state,t=this.savePreset,n=this.loadPreset,F.then((function(o){V(o,e,"shift"),V(o,e,"lfo1"),V(o,e,"lfo2"),I.presets.forEach((function(a,r){o.noteOn(a.note,a.channel).subscribe((function(){e.shift?(t(r),k.savePreset.next(r)):(n(r),k.loadPreset.next(r))}))}))})),k.sourceTypeChange.subscribe((function(e){O(o.state,e.sourceIndex,o.screenRatio,o.lfos)}))}},{key:"run",value:function(e){e&&(this.screenRatio=e),T(this.state,this.screenRatio,this.lfos)}},{key:"randomize",value:function(){var e=this;Object.keys(this.state.sources[0].parameters).forEach((function(t){if(!t.startsWith("modulate")&&Math.random()<.5){var n=t;e.state.sources[0].parameters[n]=Math.random()*(x.parameters[n].max-x.parameters[n].min+1)+x.parameters[n].min,e.state.sources[1].parameters[n]=Math.random()*(x.parameters[n].max-x.parameters[n].min+1)+x.parameters[n].min}}))}},{key:"savePreset",value:function(e){this.state.presets[e]=[this.cloneSourceState(this.state.sources[0]),this.cloneSourceState(this.state.sources[1])]}},{key:"loadPreset",value:function(e){var t=this;if(this.state.presets[e]&&this.state.presets[e].length===this.state.sources.length){var n=this.state.presets[e].some((function(e,n){return e.sourceType!==t.state.sources[n].sourceType}));this.state.sources.forEach((function(n,o){var a=t.state.presets[e][o];n.sourceType=a.sourceType,p.a.to(n.parameters,Object(l.a)(Object(l.a)({},a.parameters),{},{duration:.001,repeat:0}))})),n&&T(this.state,this.screenRatio,this.lfos)}}},{key:"saveProject",value:function(){!function(e,t){var n="data:text/json;charset=utf-8,"+encodeURIComponent(e),o=document.createElement("a");o.setAttribute("href",n),o.setAttribute("download",t+".json"),document.body.appendChild(o),o.click(),o.remove()}(JSON.stringify(this.state,null,2),b()().format("YYYY-MM-DD_hh-mm-ss"))}},{key:"loadProject",value:function(e){var t=this;(function(e){return new Promise((function(t,n){var o=new FileReader;o.addEventListener("load",(function(e){var n;t(null===(n=e.target)||void 0===n?void 0:n.result)})),o.readAsText(e)}))})(e).then((function(e){try{var n=JSON.parse(e);t.state=n,N(t.state),T(t.state,t.screenRatio,t.lfos)}catch(o){console.error("failed to parse file",o)}})).catch((function(e){console.error("failed to read file",e)}))}},{key:"cloneSourceState",value:function(e){return new j.SourceState(Object(l.a)({},e.parameters),e.sourceType)}}]),e}()),W=n(15),G=n(142),H=m.a.canvas(X||(X=Object(u.a)(["\n  height: 100%;\n  width: 100%;\n"]))),U=function(){var e=Object(a.useRef)(null),t=Object(a.useState)(!1),n=Object(i.a)(t,2),o=n[0],r=n[1];return Object(a.useEffect)((function(){if(e.current&&!o){var t=window.innerWidth,n=window.innerHeight;e.current.width=t,e.current.height=n,new G({canvas:e.current}).setResolution(t,n),z.run(t/n),r(!1)}}),[e,o]),Object(W.jsx)(H,{id:"hydra-canvas",ref:e})},_=n(73),q=n(10),K=m.a.div(A||(A=Object(u.a)(["\n  position: absolute;\n  left: 0;\n  right: 0;\n  text-align: center;\n  bottom: 20vh;\n  font-size: 5vh;\n  text-shadow: 2px 2px 2px #111;\n  // -webkit-text-stroke-width: 2px;\n  // -webkit-text-stroke-color: #111;\n\n  .text-1 {\n    color: #dcf;\n  }\n  .text-2 {\n    color: #dfc;\n  }\n"]))),Q=m.a.div(D||(D=Object(u.a)([""]))),Z=[],$=function(e){var t=e.enabled,n=Object(a.useState)(""),o=Object(i.a)(n,2),r=o[0],c=o[1],s=Object(a.useState)(""),u=Object(i.a)(s,2),m=u[0],l=u[1],d=Object(a.useCallback)((function(e){var n=arguments.length>1&&void 0!==arguments[1]&&arguments[1],o=e.startsWith("2 - ")?1:0,a=[c,l][o];(t||n)&&(a(e),Z[o]&&clearTimeout(Z[o]),Z[o]=setTimeout((function(){a("")}),1e3))}),[c,l,t]);return Object(a.useEffect)((function(){var e=Object(_.a)(k.sourceTypeChange.pipe(Object(q.a)((function(e){return"".concat(e.sourceIndex+1," - ").concat(j.SourceType[e.type].toString())}))),k.parameterChange.pipe(Object(q.a)((function(e){return"".concat(e.sourceIndex+1," - ").concat(e.parameter,": ").concat(e.value.toFixed(2))}))),k.lfoChange.pipe(Object(q.a)((function(e){return"".concat(e.sourceIndex+1," - LFO ").concat(e.lfoIndex,"- ").concat(e.parameter,": ").concat(Math.floor(100*e.value),"%")}))),k.loadPreset.pipe(Object(q.a)((function(e){return"Load preset ".concat(e+1)}))),k.savePreset.pipe(Object(q.a)((function(e){return"Save preset ".concat(e+1)})))).subscribe(d);return function(){return e.unsubscribe()}}),[d]),Object(a.useEffect)((function(){d("Scope ".concat(t?"on":"off"),!0)}),[t,d]),Object(W.jsxs)(K,{children:[Object(W.jsx)(Q,{className:"text-1",children:r}),Object(W.jsx)(Q,{className:"text-2",children:m})]})},ee=m.a.div(B||(B=Object(u.a)(["\n  height: 100%;\n  width: 100%;\n  position: relative;\n"])));var te=m.a.input(J||(J=Object(u.a)(["\n  display: none;\n"])));var ne=function(){var e=Object(a.useState)(!0),t=Object(i.a)(e,2),n=t[0],o=t[1];return Object(a.useEffect)((function(){window.addEventListener("keypress",(function(e){var t=e.key.toLowerCase();if("s"===t)z.saveProject();else if("l"===t){var n;null===(n=document.getElementById("file-selector"))||void 0===n||n.click()}else"r"===t?z.randomize():"i"===t&&o((function(e){return!e}))}))}),[o]),Object(W.jsxs)(ee,{children:[Object(W.jsx)(U,{}),Object(W.jsx)($,{enabled:n}),Object(W.jsx)(te,{type:"file",id:"file-selector",accept:".json",onChange:function(e){return function(e){var t;e.target.files&&(null===(t=e.target.files)||void 0===t?void 0:t.length)>0&&z.loadProject(e.target.files[0])}(e)}})]})},oe=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,186)).then((function(t){var n=t.getCLS,o=t.getFID,a=t.getFCP,r=t.getLCP,c=t.getTTFB;n(e),o(e),a(e),r(e),c(e)}))};z.init(),s.a.render(Object(W.jsx)(r.a.StrictMode,{children:Object(W.jsx)(ne,{})}),document.getElementById("root")),oe()},9:function(e,t,n){"use strict";var o=n(94);n.o(o,"SourceState")&&n.d(t,"SourceState",(function(){return o.SourceState})),n.o(o,"SourceType")&&n.d(t,"SourceType",(function(){return o.SourceType})),n.o(o,"SourceTypeValues")&&n.d(t,"SourceTypeValues",(function(){return o.SourceTypeValues}));var a=n(95);n.d(t,"SourceType",(function(){return a.a})),n.d(t,"SourceTypeValues",(function(){return a.b}));var r=n(96);n.o(r,"SourceState")&&n.d(t,"SourceState",(function(){return r.SourceState}));var c=n(97);n.d(t,"SourceState",(function(){return c.a}));n(98)},94:function(e,t){},95:function(e,t,n){"use strict";var o;n.d(t,"a",(function(){return o})),n.d(t,"b",(function(){return a})),function(e){e[e.osc=0]="osc",e[e.noise=1]="noise",e[e.voronoi=2]="voronoi",e[e.shape=3]="shape",e[e.screen=4]="screen"}(o||(o={}));var a=Object.keys(o).filter((function(e){return isNaN(Number(e))}))},96:function(e,t){},97:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var o=n(37),a=n(42),r=n(57),c=function(){function e(t,n){Object(a.a)(this,e),this.parameters=void 0,this.sourceType=void 0,this.lfos=void 0,this.parameters=t,this.sourceType=n,this.lfos=[this.generateLfoMap(),this.generateLfoMap()]}return Object(r.a)(e,[{key:"generateLfoMap",value:function(){var e=Object(o.a)({},this.parameters);return Object.keys(e).forEach((function(t){return e[t]=0})),e}}]),e}()},98:function(e,t){}},[[185,1,2]]]);
//# sourceMappingURL=main.f8062958.chunk.js.map