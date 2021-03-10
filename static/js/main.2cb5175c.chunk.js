(this.webpackJsonplernie=this.webpackJsonplernie||[]).push([[0],{122:function(e,t,n){},123:function(e,t,n){},185:function(e,t,n){"use strict";n.r(t);var o,c=n(4),a=n.n(c),r=n(111),s=n.n(r),i=(n(122),n(49)),u=n(43),m=(n(123),n(44)),l=n(37),d=n(42),f=n(77),p=n(117),h=n(112),b=n.n(h),v=n(21),j=n(9),S={parameters:{mod1:{min:0,max:80},mod2:{min:-.5,max:.5},mod3:{min:0,max:10},rotation:{min:0,max:6.283185307179586},brightness:{min:-1,max:1},pixelate:{min:10,max:1500},scale:{min:.5,max:7},colorama:{min:-.001,max:1},modulate:{min:-1,max:1},modulateRotate:{min:-10,max:10},modulateScale:{min:-10,max:10},repeatXY:{min:1,max:8},blend:{min:0,max:1},diff:{min:0,max:1},feedback:{min:0,max:1},selfModulate:{min:0,max:1}},sourceMods:(o={},Object(v.a)(o,j.SourceType.osc,{mod1:{min:0,max:100},mod2:{min:-1,max:1},mod3:{min:0,max:6.3}}),Object(v.a)(o,j.SourceType.noise,{mod1:{min:0,max:1},mod2:{min:0,max:.5},mod3:{min:0,max:10}}),Object(v.a)(o,j.SourceType.voronoi,{mod1:{min:0,max:80},mod2:{min:0,max:10},mod3:{min:0,max:20}}),Object(v.a)(o,j.SourceType.screen,{mod1:{min:0,max:1},mod2:{min:0,max:1},mod3:{min:0,max:1}}),Object(v.a)(o,j.SourceType.shape,{mod1:{min:1,max:20},mod2:{min:0,max:1},mod3:{min:-100,max:100}}),o)};var x=function(){function e(){Object(d.a)(this,e)}return Object(f.a)(e,[{key:"getValue",value:function(e){return(Math.sin(e/5)+1)/2}}]),e}();function O(e,t,n){return function(o){var c=o.time;return e.parameters[t]+(n.getValue(c)*(S.parameters[t].max-S.parameters[t].min)+S.parameters[t].min)*e.lfo[t]}}function y(e,t,n,o,c){(function(e,t,n){return e.sourceType===j.SourceType.noise?noise(80,O(e,"mod1",n)).scale(1,1,t).contrast(O(e,"mod2",n)):e.sourceType===j.SourceType.voronoi?voronoi(100,O(e,"mod1",n),O(e,"mod2",n)).scale(1,1,t):e.sourceType===j.SourceType.screen?(s0.initScreen(),src(s0).color(O(e,"mod1",n),O(e,"mod2",n),O(e,"mod3",n))):e.sourceType===j.SourceType.shape?shape(O(e,"mod1",n),O(e,"mod2",n)).scale(1,1,t).rotate((function(t){return t.time*e.parameters.mod3%360*(Math.PI/180)})):osc(O(e,"mod1",n),O(e,"mod2",n),O(e,"mod3",n))})(t,o,c).blend(e,O(t,"feedback",c)).rotate(O(t,"rotation",c),0).pixelate(O(t,"pixelate",c),O(t,"pixelate",c)).scale(O(t,"scale",c)).colorama(O(t,"colorama",c)).modulate(src(n),O(t,"modulate",c)).modulateRotate(src(n),O(t,"modulateRotate",c),O(t,"modulateRotate",c)).modulateScale(src(n),O(t,"modulateScale",c)).modulate(e,O(t,"selfModulate",c)).repeat(O(t,"repeatXY",c),O(t,"repeatXY",c)).brightness(O(t,"brightness",c)).out(e)}function T(e,t,n){y(o1,e.sources[0],o2,t,n),y(o2,e.sources[1],o1,t,n),solid(0,0,0,0).blend(src(o1),O(e.sources[0],"blend",n)).blend(src(o2),O(e.sources[1],"blend",n)).diff(solid(0,0,0,0).blend(src(o1),O(e.sources[0],"diff",n))).diff(solid(0,0,0,0).blend(src(o2),O(e.sources[1],"diff",n))).out(o0)}var g,w=n(61),k=function e(){Object(d.a)(this,e),this.parameterChange=new w.Subject,this.lfoChange=new w.Subject,this.sourceTypeChange=new w.Subject,this.loadPreset=new w.Subject,this.savePreset=new w.Subject},P=n(92),C=n(113),R={rotation:0,brightness:0,pixelate:1500,scale:1,colorama:0,modulate:0,modulateRotate:0,modulateScale:0,repeatXY:1,blend:1,diff:0,feedback:0,selfModulate:0},E=(g={},Object(v.a)(g,j.SourceType.osc,{mod1:40,mod2:0,mod3:0}),Object(v.a)(g,j.SourceType.noise,{mod1:0,mod2:.8,mod3:0}),Object(v.a)(g,j.SourceType.voronoi,{mod1:0,mod2:0,mod3:0}),Object(v.a)(g,j.SourceType.screen,{mod1:1,mod2:1,mod3:1}),Object(v.a)(g,j.SourceType.shape,{mod1:3,mod2:.3,mod3:0}),g),M=function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],n=new j.SourceState(Object(l.a)(Object(l.a)({},E[e]),R),e);return n.parameters.blend=t?n.parameters.blend:0,n},F={sources:[{parameters:{blend:{cc:77},diff:{cc:78},feedback:{cc:79},selfModulate:{cc:80},mod1:{cc:13},mod2:{cc:14},mod3:{cc:15},brightness:{cc:16},rotation:{cc:29},pixelate:{cc:30},scale:{cc:31},colorama:{cc:32},modulate:{cc:49},modulateRotate:{cc:50},modulateScale:{cc:51},repeatXY:{cc:52}},switchSource:{note:"F2"},reset:{note:"F#2"}},{parameters:{blend:{cc:81},diff:{cc:82},feedback:{cc:83},selfModulate:{cc:84},mod1:{cc:17},mod2:{cc:18},mod3:{cc:19},brightness:{cc:20},rotation:{cc:33},pixelate:{cc:34},scale:{cc:35},colorama:{cc:36},modulate:{cc:53},modulateRotate:{cc:54},modulateScale:{cc:55},repeatXY:{cc:56}},switchSource:{note:"A3"},reset:{note:"A#3"}}],shift:{note:"C8"},lfo1:{note:"B7"},presets:[{note:"C#5"},{note:"D5"},{note:"D#5"},{note:"E5"},{note:"F6"},{note:"F#6"},{note:"G6"},{note:"G#6"}]},I=[],Y=C.Input.create("Launch Control XL");function L(e,t,n,o,c,a){var r=t.sources[n],s=Object.keys(r.parameters).map((function(c){var r=c;return function(e,t,n,o,c,a,r){return e.cc(n.cc,n.channel).subscribe((function(e){var n=c.sources[t];if(r())n.lfo[o]=e.value/127,a.lfoChange.next({value:n.lfo[o],parameter:o,sourceIndex:t});else{var s="mod1"===o||"mod2"===o||"mod3"===o?S.sourceMods[n.sourceType][o]:S.parameters[o],i=s.min,u=(s.max-i)/127;n.parameters[o]=i+u*e.value,a.parameterChange.next({value:n.parameters[o],parameter:o,sourceIndex:t})}}))}(e,n,o.parameters[r],r,t,a,(function(){return t.lfo1}))}));return s.push(e.noteOn(o.switchSource.note,o.switchSource.channel).subscribe((function(){r.sourceType=(Number(r.sourceType)+1)%j.SourceTypeValues.length;var e=M(r.sourceType).parameters;Object.keys(r.parameters).filter((function(e){return!["blend","diff"].includes(e)})).forEach((function(t){return r.parameters[t]=e[t]})),c(),a.sourceTypeChange.next(r.sourceType)}))),s.push(e.noteOn(o.reset.note,o.reset.channel).subscribe((function(){var e=M(r.sourceType);Object.keys(r.parameters).forEach((function(t){var n=t;r.parameters[n]=e.parameters[n]}))}))),s}function N(e,t,n){I.forEach((function(e){return e.unsubscribe()})),Y.then((function(o){I=[].concat(Object(P.a)(L(o,e,0,F.sources[0],t,n)),Object(P.a)(L(o,e,1,F.sources[1],t,n)))}))}function V(e,t,n,o,c){return[e.noteOn(F[n].note,F[n].channel).subscribe((function(){t[n]=!0})),e.noteOff(F[n].note,F[n].channel).subscribe((function(){t[n]=!1}))]}var X,A,D,B,J,z=new(function(){function e(){Object(d.a)(this,e),this.state=void 0,this.scopeSubjects=new k,this.screenRatio=1,this.lfo1=new x,this.state={sources:[M(j.SourceType.osc),M(j.SourceType.osc,!1)],presets:[],shift:!1,lfo1:!1},this.savePreset=this.savePreset.bind(this),this.loadPreset=this.loadPreset.bind(this)}return Object(f.a)(e,[{key:"init",value:function(){var e,t,n,o,c=this;N(this.state,(function(){return T(c.state,c.screenRatio,c.lfo1)}),this.scopeSubjects),e=this.state,t=this.savePreset,n=this.loadPreset,o=this.scopeSubjects,Y.then((function(c){V(c,e,"shift",F.shift.note,F.shift.channel),V(c,e,"lfo1",F.lfo1.note,F.lfo1.channel),F.presets.forEach((function(a,r){c.noteOn(a.note,a.channel).subscribe((function(){e.shift?(t(r),o.savePreset.next(r)):(n(r),o.loadPreset.next(r))}))}))}))}},{key:"run",value:function(e){e&&(this.screenRatio=e),T(this.state,this.screenRatio,this.lfo1)}},{key:"randomize",value:function(){var e=this;Object.keys(this.state.sources[0].parameters).forEach((function(t){if(!t.startsWith("modulate")&&Math.random()<.5){var n=t;e.state.sources[0].parameters[n]=Math.random()*(S.parameters[n].max-S.parameters[n].min+1)+S.parameters[n].min,e.state.sources[1].parameters[n]=Math.random()*(S.parameters[n].max-S.parameters[n].min+1)+S.parameters[n].min}}))}},{key:"savePreset",value:function(e){this.state.presets[e]=[this.cloneSourceState(this.state.sources[0]),this.cloneSourceState(this.state.sources[1])]}},{key:"loadPreset",value:function(e){var t=this;if(this.state.presets[e]&&this.state.presets[e].length===this.state.sources.length){var n=this.state.presets[e].some((function(e,n){return e.sourceType!==t.state.sources[n].sourceType}));this.state.sources.forEach((function(n,o){var c=t.state.presets[e][o];n.sourceType=c.sourceType,p.a.to(n.parameters,Object(l.a)(Object(l.a)({},c.parameters),{},{duration:.001,repeat:0}))})),n&&T(this.state,this.screenRatio,this.lfo1)}}},{key:"saveProject",value:function(){!function(e,t){var n="data:text/json;charset=utf-8,"+encodeURIComponent(e),o=document.createElement("a");o.setAttribute("href",n),o.setAttribute("download",t+".json"),document.body.appendChild(o),o.click(),o.remove()}(JSON.stringify(this.state,null,2),b()().format("YYYY-MM-DD_hh-mm-ss"))}},{key:"loadProject",value:function(e){var t=this;(function(e){return new Promise((function(t,n){var o=new FileReader;o.addEventListener("load",(function(e){var n;t(null===(n=e.target)||void 0===n?void 0:n.result)})),o.readAsText(e)}))})(e).then((function(e){try{var n=JSON.parse(e);t.state=n,N(t.state,(function(){return T(t.state,t.screenRatio,t.lfo1)}),t.scopeSubjects),T(t.state,t.screenRatio,t.lfo1)}catch(o){console.error("failed to parse file",o)}})).catch((function(e){console.error("failed to read file",e)}))}},{key:"cloneSourceState",value:function(e){return new j.SourceState(Object(l.a)({},e.parameters),e.sourceType)}}]),e}()),W=n(15),G=n(142),H=m.a.canvas(X||(X=Object(u.a)(["\n  height: 100%;\n  width: 100%;\n"]))),U=function(){var e=Object(c.useRef)(null),t=Object(c.useState)(!1),n=Object(i.a)(t,2),o=n[0],a=n[1];return Object(c.useEffect)((function(){if(e.current&&!o){var t=window.innerWidth,n=window.innerHeight;e.current.width=t,e.current.height=n,new G({canvas:e.current}).setResolution(t,n),z.run(t/n),a(!1)}}),[e,o]),Object(W.jsx)(H,{id:"hydra-canvas",ref:e})},_=n(72),q=n(10),K=m.a.div(A||(A=Object(u.a)(["\n  position: absolute;\n  left: 0;\n  right: 0;\n  text-align: center;\n  bottom: 20vh;\n  font-size: 5vh;\n  text-shadow: 2px 2px 2px #111;\n  // -webkit-text-stroke-width: 2px;\n  // -webkit-text-stroke-color: #111;\n\n  .text-1 {\n    color: #dcf;\n  }\n  .text-2 {\n    color: #dfc;\n  }\n"]))),Q=m.a.div(D||(D=Object(u.a)([""]))),Z=[],$=function(e){var t=e.enabled,n=Object(c.useState)(""),o=Object(i.a)(n,2),a=o[0],r=o[1],s=Object(c.useState)(""),u=Object(i.a)(s,2),m=u[0],l=u[1],d=Object(c.useCallback)((function(e){var n=arguments.length>1&&void 0!==arguments[1]&&arguments[1],o=e.startsWith("2 - ")?1:0,c=[r,l][o];(t||n)&&(c(e),Z[o]&&clearTimeout(Z[o]),Z[o]=setTimeout((function(){c("")}),1e3))}),[r,l,t]);return Object(c.useEffect)((function(){var e=Object(_.a)(z.scopeSubjects.sourceTypeChange.pipe(Object(q.a)((function(e){return j.SourceType[e].toString()}))),z.scopeSubjects.parameterChange.pipe(Object(q.a)((function(e){return"".concat(e.sourceIndex+1," - ").concat(e.parameter,": ").concat(e.value.toFixed(2))}))),z.scopeSubjects.lfoChange.pipe(Object(q.a)((function(e){return"".concat(e.sourceIndex+1," - LFO - ").concat(e.parameter,": ").concat(Math.floor(100*e.value),"%")}))),z.scopeSubjects.loadPreset.pipe(Object(q.a)((function(e){return"Load preset ".concat(e+1)}))),z.scopeSubjects.savePreset.pipe(Object(q.a)((function(e){return"Save preset ".concat(e+1)})))).subscribe(d);return function(){return e.unsubscribe()}}),[d]),Object(c.useEffect)((function(){d("Scope ".concat(t?"on":"off"),!0)}),[t,d]),Object(W.jsxs)(K,{children:[Object(W.jsx)(Q,{className:"text-1",children:a}),Object(W.jsx)(Q,{className:"text-2",children:m})]})},ee=m.a.div(B||(B=Object(u.a)(["\n  height: 100%;\n  width: 100%;\n  position: relative;\n"])));var te=m.a.input(J||(J=Object(u.a)(["\n  display: none;\n"])));var ne=function(){var e=Object(c.useState)(!0),t=Object(i.a)(e,2),n=t[0],o=t[1];return Object(c.useEffect)((function(){window.addEventListener("keypress",(function(e){var t=e.key.toLowerCase();if("s"===t)z.saveProject();else if("l"===t){var n;null===(n=document.getElementById("file-selector"))||void 0===n||n.click()}else"r"===t?z.randomize():"i"===t&&o((function(e){return!e}))}))}),[o]),Object(W.jsxs)(ee,{children:[Object(W.jsx)(U,{}),Object(W.jsx)($,{enabled:n}),Object(W.jsx)(te,{type:"file",id:"file-selector",accept:".json",onChange:function(e){return function(e){var t;e.target.files&&(null===(t=e.target.files)||void 0===t?void 0:t.length)>0&&z.loadProject(e.target.files[0])}(e)}})]})},oe=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,186)).then((function(t){var n=t.getCLS,o=t.getFID,c=t.getFCP,a=t.getLCP,r=t.getTTFB;n(e),o(e),c(e),a(e),r(e)}))};z.init(),s.a.render(Object(W.jsx)(a.a.StrictMode,{children:Object(W.jsx)(ne,{})}),document.getElementById("root")),oe()},9:function(e,t,n){"use strict";var o=n(94);n.o(o,"SourceState")&&n.d(t,"SourceState",(function(){return o.SourceState})),n.o(o,"SourceType")&&n.d(t,"SourceType",(function(){return o.SourceType})),n.o(o,"SourceTypeValues")&&n.d(t,"SourceTypeValues",(function(){return o.SourceTypeValues}));var c=n(95);n.d(t,"SourceType",(function(){return c.a})),n.d(t,"SourceTypeValues",(function(){return c.b}));var a=n(96);n.o(a,"SourceState")&&n.d(t,"SourceState",(function(){return a.SourceState}));var r=n(97);n.d(t,"SourceState",(function(){return r.a}));n(98)},94:function(e,t){},95:function(e,t,n){"use strict";var o;n.d(t,"a",(function(){return o})),n.d(t,"b",(function(){return c})),function(e){e[e.osc=0]="osc",e[e.noise=1]="noise",e[e.voronoi=2]="voronoi",e[e.shape=3]="shape",e[e.screen=4]="screen"}(o||(o={}));var c=Object.keys(o).filter((function(e){return isNaN(Number(e))}))},96:function(e,t){},97:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var o=n(37),c=n(42),a=function e(t,n){var a=this;Object(c.a)(this,e),this.parameters=void 0,this.sourceType=void 0,this.lfo=void 0,this.parameters=t,this.sourceType=n,this.lfo=Object(o.a)({},t),Object.keys(this.lfo).forEach((function(e){return a.lfo[e]=0}))}},98:function(e,t){}},[[185,1,2]]]);
//# sourceMappingURL=main.2cb5175c.chunk.js.map