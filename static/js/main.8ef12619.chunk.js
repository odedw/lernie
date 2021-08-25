(this.webpackJsonplernie=this.webpackJsonplernie||[]).push([[0],{109:function(e,t,n){},110:function(e,t,n){},160:function(e,t,n){"use strict";n.r(t);var r,o=n(4),c=n.n(o),i=n(100),s=n.n(i),u=(n(109),n(28)),l=n(14),d=(n(110),n(15)),f=n(49),m=n(38),p=n.n(m),h=n(67),b=n(26),v=n(33),j=n(101),O=n.n(j),x=n(22);!function(e){e[e.osc=0]="osc",e[e.noise=1]="noise",e[e.voronoi=2]="voronoi",e[e.shape=3]="shape",e[e.screen=4]="screen"}(r||(r={}));var y=Object.keys(r).filter((function(e){return isNaN(Number(e))})),g=["shift","lfo1","lfo2","audio"];function k(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return g.reduce((function(t,n){return t[n]=e.includes(n),t}),{})}var I,S=function(){function e(t,n){Object(b.a)(this,e),this.parameters=void 0,this.sourceType=void 0,this.lfos=void 0,this.audio=void 0,this.parameters=t,this.sourceType=n,this.lfos=[this.generateZeroParametersRecord(),this.generateZeroParametersRecord()],this.audio=this.generateZeroParametersRecord()}return Object(v.a)(e,[{key:"generateZeroParametersRecord",value:function(){var e=Object(f.a)({},this.parameters);return $.forEach((function(t){return e[t]=0})),e}}]),e}(),w={parameters:{mod1:{min:0,max:80},mod2:{min:-.5,max:.5},mod3:{min:0,max:10},rotation:{min:0,max:6.283185307179586},brightness:{min:-1,max:1},pixelate:{min:10,max:1500},scale:{min:.5,max:7},colorama:{min:-.001,max:1},modulate:{min:-1,max:1},modulateRotate:{min:-10,max:10},modulateScale:{min:-10,max:10},repeatXY:{min:1,max:8},blend:{min:0,max:1},diff:{min:0,max:1},feedback:{min:0,max:1},selfModulate:{min:0,max:1},colorR:{min:0,max:1},colorG:{min:0,max:1},colorB:{min:0,max:1},contrast:{min:0,max:20}},sourceMods:(I={},Object(x.a)(I,r.osc,{mod1:{min:0,max:100},mod2:{min:-1,max:1},mod3:{min:0,max:6.3}}),Object(x.a)(I,r.noise,{mod1:{min:0,max:1},mod2:{min:0,max:.5},mod3:{min:0,max:10}}),Object(x.a)(I,r.voronoi,{mod1:{min:0,max:80},mod2:{min:0,max:10},mod3:{min:0,max:20}}),Object(x.a)(I,r.screen,{mod1:{min:0,max:50},mod2:{min:0,max:1},mod3:{min:0,max:1}}),Object(x.a)(I,r.shape,{mod1:{min:1,max:20},mod2:{min:0,max:1},mod3:{min:-100,max:100}}),I)},$=Object.keys(w.parameters).map((function(e){return e}));var T,C=new(function(){function e(){Object(b.a)(this,e),this.keys={MIDI_INPUT:"MIDI_INPUT"}}return Object(v.a)(e,[{key:"get",value:function(e){return localStorage.getItem(e)}},{key:"set",value:function(e,t){localStorage.setItem(e,t)}}]),e}()),P=n(53),M=new function e(){Object(b.a)(this,e),this.parameterValueChange$=void 0,this.lfoDestinationValueChange$=void 0,this.audioDestinationValueChange$=void 0,this.clearParameter$=void 0,this.sourceTypeChange$=void 0,this.loadPreset$=void 0,this.savePreset$=void 0,this.keyDown$=void 0,this.keyUp$=void 0,this.resetSource$=void 0,this.selectAudioBin$=void 0,this.lfoRateChange$=void 0,this.lfoTypeChange$=void 0,this.lifecycle={engine:{initialized$:new P.a(1)},settings:{midiInputChanged$:new P.a(1)}}},R=new(function(){function e(){Object(b.a)(this,e),this._midiInput=void 0}return Object(v.a)(e,[{key:"init",value:function(){this.midiInput=C.get(C.keys.MIDI_INPUT)||void 0}},{key:"midiInput",get:function(){return this._midiInput},set:function(e){this._midiInput=e,e&&C.set(C.keys.MIDI_INPUT,e),M.lifecycle.settings.midiInputChanged$.next(e)}}]),e}()),D=n(93);!function(e){e[e.Sine=0]="Sine",e[e.Square=1]="Square",e[e.Triangle=2]="Triangle",e[e.Saw=3]="Saw",e[e.ReverseSaw=4]="ReverseSaw",e[e.SampleAndHold=5]="SampleAndHold"}(T||(T={}));var E=function(){function e(){Object(b.a)(this,e),this.rate=1e3,this.type=T.Sine,this.snhTimestamp=void 0,this.snhValue=0}return Object(v.a)(e,[{key:"getValue",value:function(){switch(this.type){case T.Sine:return this.sine();case T.Square:return this.square();case T.Triangle:return this.triangle();case T.Saw:return this.saw();case T.ReverseSaw:return this.reverseSaw();case T.SampleAndHold:return this.sampleAndHold()}}},{key:"sampleAndHold",value:function(){var e=D();return(!this.snhTimestamp||e-this.snhTimestamp>this.rate)&&(this.snhTimestamp=e,this.snhValue=Math.random()),this.snhValue}},{key:"reverseSaw",value:function(){return D()%this.rate/this.rate}},{key:"saw",value:function(){return 1-D()%this.rate/this.rate}},{key:"triangle",value:function(){var e=D()%this.rate;return e<=this.rate/2?e/(this.rate/2):(this.rate-e)/(this.rate/2)}},{key:"square",value:function(){return Math.floor(D()/this.rate%2)}},{key:"sine",value:function(){return(Math.sin(2*D()*Math.PI/this.rate)+1)/2}}]),e}();function A(e,t,n){return function(r){r.time;var o=e.parameters[t],c=w.parameters[t].max-w.parameters[t].min;return n.forEach((function(n,a){var r=e.lfos[a][t]<0?1-n.getValue():n.getValue();o+=r*Math.abs(e.lfos[a][t])*c})),o+=e.audio[t]*c*a.fft[0],o=Math.min(Math.max(w.parameters[t].min,o),w.parameters[t].max)}}function V(e,t,n,a){switch(e.sourceType){case r.noise:return function(e,t,n){return noise(80,A(e,"mod1",n)).scale(1,1,t).contrast(A(e,"mod2",n))}(e,n,a);case r.voronoi:return function(e,t,n){return voronoi(100,A(e,"mod1",n),A(e,"mod2",n)).scale(1,1,t)}(e,n,a);case r.screen:return function(e,t,n,a){return t.initScreen(),src(t).saturate(A(e,"mod1",a)).invert(A(e,"mod3",a)).luma(A(e,"mod2",a),0)}(e,t,0,a);case r.shape:return function(e,t,n){return shape(A(e,"mod1",n),A(e,"mod2",n)).scale(1,1,t).rotate((function(t){return t.time*e.parameters.mod3%360*(Math.PI/180)}))}(e,n,a);default:return function(e,t){return osc(A(e,"mod1",t),A(e,"mod2",t),A(e,"mod3",t))}(e,a)}}function F(e,t,n,a){var r=e.sources[t],o=function(e){return[o1,o2][e]}(t),c=function(e){return[s0,s1][e]}(t),i=function(e){return[o2,o1][e]}(t);V(r,c,n,a).blend(o,A(r,"feedback",a)).rotate(A(r,"rotation",a),0).color(A(r,"colorR",a),A(r,"colorG",a),A(r,"colorB",a)).contrast(A(r,"contrast",a)).pixelate((function(e){return A(r,"pixelate",a)(e)*n}),A(r,"pixelate",a)).scale(A(r,"scale",a)).colorama(A(r,"colorama",a)).modulate(src(i),A(r,"modulate",a)).modulateRotate(src(i),A(r,"modulateRotate",a),A(r,"modulateRotate",a)).modulateScale(src(i),A(r,"modulateScale",a)).modulate(o,A(r,"selfModulate",a)).repeat(A(r,"repeatXY",a),A(r,"repeatXY",a)).brightness(A(r,"brightness",a)).out(o)}function N(e,t,n){F(e,0,t,n),F(e,1,t,n),solid(0,0,0,0).blend(src(o1),A(e.sources[0],"blend",n)).blend(src(o2),A(e.sources[1],"blend",n)).diff(solid(0,0,0,0).blend(src(o1),A(e.sources[0],"diff",n))).diff(solid(0,0,0,0).blend(src(o2),A(e.sources[1],"diff",n))).out(o0)}var B,L=n(40),U=n(83),Y={sources:[{parameters:{blend:{cc:77},diff:{cc:78},feedback:{cc:79},selfModulate:{cc:80},mod1:{cc:13},mod2:{cc:14},mod3:{cc:15},brightness:{cc:16},rotation:{cc:29},pixelate:{cc:30},scale:{cc:31},colorama:{cc:32},modulate:{cc:49},modulateRotate:{cc:50},modulateScale:{cc:51},repeatXY:{cc:52},colorR:{cc:37},colorG:{cc:38},colorB:{cc:39},contrast:{cc:40}},switchSource:{note:"F2"},reset:{note:"F#2"}},{parameters:{blend:{cc:81},diff:{cc:82},feedback:{cc:83},selfModulate:{cc:84},mod1:{cc:17},mod2:{cc:18},mod3:{cc:19},brightness:{cc:20},rotation:{cc:33},pixelate:{cc:34},scale:{cc:35},colorama:{cc:36},modulate:{cc:53},modulateRotate:{cc:54},modulateScale:{cc:55},repeatXY:{cc:56},colorR:{cc:41},colorG:{cc:42},colorB:{cc:43},contrast:{cc:44}},switchSource:{note:"A3"},reset:{note:"A#3"}}],keys:{shift:{note:"A7"},lfo1:{note:"B7"},lfo2:{note:"C8"},audio:{note:"A#7"}},presets:[{note:"C#5"},{note:"D5"},{note:"D#5"},{note:"E5"},{note:"F6"},{note:"F#6"},{note:"G6"},{note:"G#6"}],lfosControl:[{rate:{cc:85},type:{cc:86}},{rate:{cc:89},type:{cc:90}}]},_=n(76),G=n(20),H=n(10),z={min:100,max:3e4},X=function(e,t){return e.note==="".concat(t.note.name).concat(t.note.octave)&&(!e.channel||e.channel===t.channel)},q=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:k();return g.every((function(n){return t[n]===e[n]}))};function J(e,t,n){var a=U.Input.create(e),r=Object.keys(Y.sources[0].parameters).map((function(e){return e}));return a.then((function(e){M.resetSource$=_.a.apply(void 0,Object(L.a)(Y.sources.map((function(t,a){return e.noteOn(t.reset.note,t.reset.channel).pipe(Object(G.a)((function(){return!n.audio})),Object(H.a)((function(){return a})))})))),M.selectAudioBin$=_.a.apply(void 0,Object(L.a)(Y.sources.map((function(t,a){return e.noteOn(t.switchSource.note,t.switchSource.channel).pipe(Object(G.a)((function(){return n.audio})),Object(H.a)((function(){return a})))})))),M.sourceTypeChange$=_.a.apply(void 0,Object(L.a)(Y.sources.map((function(t,a){return e.noteOn(t.switchSource.note,t.switchSource.channel).pipe(Object(G.a)((function(){return q(n,k())})),Object(H.a)((function(){return a})))}))));var a=Y.sources.map((function(t,n){return r.map((function(a){return e.cc(t.parameters[a].cc,t.parameters[a].channel).pipe(Object(H.a)((function(e){return{e:e,sourceIndex:n,p:a,m:t}})))}))})).flatMap((function(e){return e}));M.lfoDestinationValueChange$=_.a.apply(void 0,Object(L.a)(a.map((function(e){return e.pipe(Object(G.a)((function(){return q(n,k(["lfo1"]))||q(n,k(["lfo2"]))})),Object(H.a)((function(e){var t=e.e,a=e.sourceIndex,r=e.p,o=n.lfo1?0:1;return{value:2*t.value/127-1,parameter:r,sourceIndex:a,lfoIndex:o}})))})))),M.parameterValueChange$=_.a.apply(void 0,Object(L.a)(a.map((function(e){return e.pipe(Object(G.a)((function(){return q(n)})),Object(H.a)((function(e){var n=e.e,a=e.sourceIndex,r=e.p,o="mod1"===r||"mod2"===r||"mod3"===r?w.sourceMods[t(a)][r]:w.parameters[r],c=o.min;return{value:c+(o.max-c)/127*n.value,parameter:r,sourceIndex:a}})))})))),M.audioDestinationValueChange$=_.a.apply(void 0,Object(L.a)(a.map((function(e){return e.pipe(Object(G.a)((function(){return n.audio&&!n.shift})),Object(H.a)((function(e){var t=e.e,n=e.sourceIndex,a=e.p;return{value:t.value/127,parameter:a,sourceIndex:n}})))})))),M.clearParameter$=_.a.apply(void 0,Object(L.a)(a.map((function(e){return e.pipe(Object(G.a)((function(){return n.shift})),Object(H.a)((function(e){var t=e.sourceIndex;return{parameter:e.p,sourceIndex:t,destination:n.lfo1?"lfo1":n.lfo2?"lfo2":n.audio?"audio":null}})))}))));var o=128/(Object.keys(T).length/2);M.lfoTypeChange$=_.a.apply(void 0,Object(L.a)(Y.lfosControl.map((function(t,n){return e.cc(t.type.cc,t.type.channel).pipe(Object(H.a)((function(e){return{lfoIndex:n,type:Math.floor(e.value/o)}})))})))),M.lfoRateChange$=_.a.apply(void 0,Object(L.a)(Y.lfosControl.map((function(t,n){return e.cc(t.rate.cc,t.rate.channel).pipe(Object(H.a)((function(e){return{lfoIndex:n,rate:z.min+Math.floor((z.max-z.min)*e.value/127)}})))}))));var c=e.noteOn(),i=Object.keys(Y.keys).map((function(e){return e}));M.keyDown$=c.pipe(Object(G.a)((function(e){return i.some((function(t){return X(Y.keys[t],e)}))})),Object(H.a)((function(e){return i.find((function(t){return X(Y.keys[t],e)}))}))),M.keyUp$=e.noteOff().pipe(Object(G.a)((function(e){return i.some((function(t){return X(Y.keys[t],e)}))})),Object(H.a)((function(e){return i.find((function(t){return X(Y.keys[t],e)}))}))),M.loadPreset$=c.pipe(Object(G.a)((function(e){return q(n,k())&&Y.presets.some((function(t){return X(t,e)}))})),Object(H.a)((function(e){return Y.presets.findIndex((function(t){return X(t,e)}))}))),M.savePreset$=c.pipe(Object(G.a)((function(e){return q(n,k(["shift"]))&&Y.presets.some((function(t){return X(t,e)}))})),Object(H.a)((function(e){return Y.presets.findIndex((function(t){return X(t,e)}))})))}))}var Z,W,K,Q,ee,te,ne,ae,re,oe,ce,ie,se,ue={rotation:0,brightness:0,pixelate:1500,scale:1,colorama:0,modulate:0,modulateRotate:0,modulateScale:0,repeatXY:1,blend:1,diff:0,feedback:0,selfModulate:0,colorR:1,colorG:1,colorB:1,contrast:1,mod1:0,mod2:0,mod3:0},le=(B={},Object(x.a)(B,r.osc,{mod1:40,mod2:0,mod3:0}),Object(x.a)(B,r.noise,{mod1:0,mod2:.8,mod3:0}),Object(x.a)(B,r.voronoi,{mod1:0,mod2:0,mod3:0}),Object(x.a)(B,r.screen,{mod1:1,mod2:0,mod3:.01}),Object(x.a)(B,r.shape,{mod1:3,mod2:.3,mod3:0}),B),de=function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],n=new S(Object(f.a)(Object(f.a)({},ue),le[e]),e);return n.parameters.blend=t?n.parameters.blend:0,n},fe=new(function(){function e(){Object(b.a)(this,e),this.subscriptions=[],this.state=void 0,this.screenRatio=1,this.lfos=[new E,new E],this.ranAudio=!1,this.keyState={lfo1:!1,lfo2:!1,shift:!1,audio:!1},this.state={sources:[de(r.osc),de(r.osc,!1)],presets:[]},this.savePreset=this.savePreset.bind(this),this.loadPreset=this.loadPreset.bind(this)}return Object(v.a)(e,[{key:"init",value:function(){var e=Object(h.a)(p.a.mark((function e(){var t=this;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:M.lifecycle.settings.midiInputChanged$.subscribe((function(e){return t.setupMidi(e)}));case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()},{key:"run",value:function(e){e&&(this.screenRatio=e),N(this.state,this.screenRatio,this.lfos)}},{key:"randomize",value:function(){var e=this;$.forEach((function(t){if(!t.startsWith("modulate")&&Math.random()<.5){var n=t;e.state.sources[0].parameters[n]=Math.random()*(w.parameters[n].max-w.parameters[n].min+1)+w.parameters[n].min,e.state.sources[1].parameters[n]=Math.random()*(w.parameters[n].max-w.parameters[n].min+1)+w.parameters[n].min}}))}},{key:"savePreset",value:function(e){this.state.presets[e]=[this.cloneSourceState(this.state.sources[0]),this.cloneSourceState(this.state.sources[1])]}},{key:"loadPreset",value:function(e){var t=this;if(this.state.presets[e]&&this.state.presets[e].length===this.state.sources.length){var n=this.state.presets[e].some((function(e,n){return e.sourceType!==t.state.sources[n].sourceType}));this.state.sources.forEach((function(n,a){var r=t.state.presets[e][a];n.sourceType=r.sourceType,$.forEach((function(e){return n.parameters[e]=r.parameters[e]}))})),n&&N(this.state,this.screenRatio,this.lfos)}}},{key:"saveProject",value:function(){!function(e,t){var n="data:text/json;charset=utf-8,"+encodeURIComponent(e),a=document.createElement("a");a.setAttribute("href",n),a.setAttribute("download",t+".json"),document.body.appendChild(a),a.click(),a.remove()}(JSON.stringify(this.state,null,2),O()().format("YYYY-MM-DD_hh-mm-ss"))}},{key:"loadProject",value:function(e){var t=this;(function(e){return new Promise((function(t,n){var a=new FileReader;a.addEventListener("load",(function(e){var n;t(null===(n=e.target)||void 0===n?void 0:n.result)})),a.readAsText(e)}))})(e).then((function(e){try{var n=JSON.parse(e);t.state=n,N(t.state,t.screenRatio,t.lfos)}catch(a){console.error("failed to parse file",a)}})).catch((function(e){console.error("failed to read file",e)}))}},{key:"setupMidi",value:function(){var e=Object(h.a)(p.a.mark((function e(t){var n=this;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(this.subscriptions.forEach((function(e){return e.unsubscribe()})),t){e.next=3;break}return e.abrupt("return");case 3:return e.next=5,J(t,(function(e){return n.state.sources[e].sourceType}),this.keyState);case 5:this.subscriptions=[M.savePreset$.subscribe((function(e){return n.savePreset(e)})),M.loadPreset$.subscribe((function(e){return n.loadPreset(e)})),M.sourceTypeChange$.subscribe((function(e){var t=n.state.sources[e];t.sourceType=(Number(t.sourceType)+1)%y.length;var a=de(t.sourceType).parameters;$.filter((function(e){return!["blend","diff"].includes(e)})).forEach((function(e){return t.parameters[e]=a[e]})),F(n.state,e,n.screenRatio,n.lfos)})),M.keyDown$.subscribe((function(e){return n.keyState[e]=!0})),M.keyUp$.subscribe((function(e){return n.keyState[e]=!1})),M.parameterValueChange$.subscribe((function(e){return n.state.sources[e.sourceIndex].parameters[e.parameter]=e.value})),M.lfoDestinationValueChange$.subscribe((function(e){return n.state.sources[e.sourceIndex].lfos[e.lfoIndex][e.parameter]=e.value})),M.audioDestinationValueChange$.subscribe((function(e){return n.state.sources[e.sourceIndex].audio[e.parameter]=e.value})),M.resetSource$.subscribe((function(e){var t=n.state.sources[e],a=de(t.sourceType);$.forEach((function(e){t.parameters[e]=a.parameters[e],t.lfos.forEach((function(t){return t[e]=0}))}))})),M.clearParameter$.subscribe((function(e){var t=n.state.sources[e.sourceIndex];"lfo1"===e.destination?t.lfos[0][e.parameter]=0:"lfo2"===e.destination?t.lfos[1][e.parameter]=0:"audio"===e.destination?t.audio[e.parameter]=0:t.parameters[e.parameter]=de(t.sourceType).parameters[e.parameter]})),M.selectAudioBin$.subscribe((function(e){n.ranAudio||(n.ranAudio=!0,navigator.mediaDevices.getDisplayMedia({video:!0,audio:!0}).then((function(e){var t=a.context.createMediaStreamSource(e);a.setSmooth(.5),a.meyda.setSource(t),a.setBins(10)})))})),M.lfoTypeChange$.subscribe((function(e){return n.lfos[e.lfoIndex].type=e.type})),M.lfoRateChange$.subscribe((function(e){return n.lfos[e.lfoIndex].rate=e.rate}))],M.lifecycle.engine.initialized$.next();case 7:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"cloneSourceState",value:function(e){return new S(Object(f.a)({},e.parameters),e.sourceType)}}]),e}()),me=n(7),pe=n(118),he=d.a.canvas(Z||(Z=Object(l.a)(["\n  height: 100%;\n  width: 100%;\n"]))),be=function(){var e=Object(o.useRef)(null),t=Object(o.useState)(!1),n=Object(u.a)(t,2),a=n[0],r=n[1];return Object(o.useEffect)((function(){if(e.current&&!a){var t=window.innerWidth,n=window.innerHeight;e.current.width=t,e.current.height=n,new pe({canvas:e.current}).setResolution(t,n),fe.run(t/n),r(!1)}}),[e,a]),Object(me.jsx)(he,{id:"hydra-canvas",ref:e})},ve=d.a.div(W||(W=Object(l.a)(["\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 0;\n  bottom: 0;\n  text-align: center;\n  bottom: 20vh;\n  font-size: 5vh;\n  text-shadow: 2px 2px 2px #111;\n  // -webkit-text-stroke-width: 2px;\n  // -webkit-text-stroke-color: #111;\n\n  .text-1 {\n    color: #dcf;\n  }\n  .text-2 {\n    color: #dfc;\n  }\n"]))),je=d.a.div(K||(K=Object(l.a)(["\n  position: absolute;\n  right: 20px;\n  top: 20px;\n"]))),Oe=d.a.div(Q||(Q=Object(l.a)(["\n  top: 66vh;\n  position: absolute;\n  margin: auto;\n  left: 0;\n  right: 0;\n"]))),xe=d.a.div(ee||(ee=Object(l.a)([""]))),ye=[],ge=function(e){var t=e.enabled,n=Object(o.useState)(""),a=Object(u.a)(n,2),c=a[0],i=a[1],s=Object(o.useState)(""),l=Object(u.a)(s,2),d=l[0],f=l[1],m=Object(o.useState)(),p=Object(u.a)(m,2),h=p[0],b=p[1],v=Object(o.useCallback)((function(e){var n=arguments.length>1&&void 0!==arguments[1]&&arguments[1],a=e.startsWith("2 - ")?1:0,r=[i,f][a];(t||n)&&(r(e),ye[a]&&clearTimeout(ye[a]),ye[a]=setTimeout((function(){r("")}),1e3))}),[i,f,t]);return Object(o.useEffect)((function(){var e=M.lifecycle.engine.initialized$.subscribe((function(){b(Object(_.a)(M.sourceTypeChange$.pipe(Object(H.a)((function(e){return"".concat(e+1," - ").concat(r[fe.state.sources[e].sourceType].toString())}))),M.parameterValueChange$.pipe(Object(H.a)((function(e){return"".concat(e.sourceIndex+1," - ").concat(e.parameter,": ").concat(e.value.toFixed(2))}))),M.lfoDestinationValueChange$.pipe(Object(H.a)((function(e){return"".concat(e.sourceIndex+1," - LFO ").concat(e.lfoIndex+1," - ").concat(e.parameter,": ").concat(Math.floor(100*e.value),"%")}))),M.audioDestinationValueChange$.pipe(Object(H.a)((function(e){return"".concat(e.sourceIndex+1," - Audio - ").concat(e.parameter,": ").concat(Math.floor(100*e.value),"%")}))),M.loadPreset$.pipe(Object(H.a)((function(e){return"Load preset ".concat(e+1)}))),M.savePreset$.pipe(Object(H.a)((function(e){return"Save preset ".concat(e+1)}))),M.clearParameter$.pipe(Object(H.a)((function(e){return"".concat(e.sourceIndex+1," ").concat(e.destination?"- ".concat(e.destination):"","- ").concat(e.parameter," cleared")}))),M.lfoTypeChange$.pipe(Object(H.a)((function(e){return"LFO ".concat(e.lfoIndex+1," - ").concat(T[e.type])}))),M.lfoRateChange$.pipe(Object(H.a)((function(e){return"LFO ".concat(e.lfoIndex+1," - ").concat(e.rate<1e3?"".concat(e.rate," ms"):"".concat((e.rate/1e3).toFixed(2)," seconds"))})))))}));return function(){return e.unsubscribe()}}),[]),Object(o.useEffect)((function(){var e=null===h||void 0===h?void 0:h.subscribe(v);return function(){return null===e||void 0===e?void 0:e.unsubscribe()}}),[v,h]),Object(o.useEffect)((function(){v("Scope ".concat(t?"on":"off"),!0)}),[t,v]),Object(me.jsxs)(ve,{children:[Object(me.jsxs)(Oe,{children:[Object(me.jsx)(xe,{className:"text-1",children:c}),Object(me.jsx)(xe,{className:"text-2",children:d})]}),Object(me.jsx)(je,{})]})},ke=n(52),Ie=n.n(ke),Se=d.a.div(te||(te=Object(l.a)(["\n  margin-bottom: 0.5rem;\n  display: flex;\n  align-items: center;\n"]))),we=d.a.div(ne||(ne=Object(l.a)(["\n  font-weight: bold;\n"]))),$e=d.a.div(ae||(ae=Object(l.a)(["\n  height: 2px;\n  width: auto;\n  flex: 1;\n  background-color: black;\n  margin-left: 1rem;\n"]))),Te=function(e){return Object(me.jsxs)(Se,{children:[Object(me.jsx)(we,{children:e.children}),Object(me.jsx)($e,{})]})},Ce=d.a.div(re||(re=Object(l.a)(["\n  position: absolute;\n  inset: 0;\n  background-color: #eeeeee88;\n  padding: 20%;\n"]))),Pe=d.a.div(oe||(oe=Object(l.a)(["\n  line-height: 2;\n"]))),Me=d.a.div(ce||(ce=Object(l.a)([""]))),Re=function(){var e=c.a.useState(C.get(C.keys.MIDI_INPUT)),t=Object(u.a)(e,2),n=t[0],a=t[1];return Object(me.jsx)(Ce,{children:Object(me.jsxs)(Me,{children:[Object(me.jsx)(Te,{children:"MIDI Input"}),Ie.a.inputs.map((function(e){return Object(me.jsxs)(Pe,{children:[Object(me.jsx)("input",{type:"radio",id:e.name,name:"midi-input",value:"HTML",checked:e.name===n,onChange:function(){R.midiInput=e.name,a(e.name)}}),Object(me.jsx)("label",{htmlFor:e.name,children:e.name})]},e.name)}))]})})};function De(){return(De=Object(h.a)(p.a.mark((function e(){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(U.init)();case 2:return e.next=4,R.init();case 4:return e.next=6,fe.init();case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var Ee=d.a.div(ie||(ie=Object(l.a)(["\n  height: 100%;\n  width: 100%;\n  position: relative;\n"])));var Ae=d.a.input(se||(se=Object(l.a)(["\n  display: none;\n"])));var Ve=function(){var e=Object(o.useState)(!0),t=Object(u.a)(e,2),n=t[0],a=t[1],r=Object(o.useState)(!C.get(C.keys.MIDI_INPUT)),c=Object(u.a)(r,2),i=c[0],s=c[1],l=Object(o.useState)(!1),d=Object(u.a)(l,2),f=d[0],m=d[1];return Object(o.useEffect)((function(){window.addEventListener("keypress",(function(e){var t=e.key.toLowerCase();if("s"===t)fe.saveProject();else if("l"===t){var n;null===(n=document.getElementById("file-selector"))||void 0===n||n.click()}else"r"===t?fe.randomize():"i"===t?a((function(e){return!e})):"`"===t&&s((function(e){return!e}))}))}),[a]),Object(o.useEffect)((function(){(function(){return De.apply(this,arguments)})().then((function(){return m(!0)}))}),[m]),f?Object(me.jsxs)(Ee,{children:[Object(me.jsx)(be,{}),Object(me.jsx)(ge,{enabled:n}),i&&Object(me.jsx)(Re,{}),Object(me.jsx)(Ae,{type:"file",id:"file-selector",accept:".json",onChange:function(e){return function(e){var t;e.target.files&&(null===(t=e.target.files)||void 0===t?void 0:t.length)>0&&fe.loadProject(e.target.files[0])}(e)}})]}):null},Fe=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,161)).then((function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,o=t.getLCP,c=t.getTTFB;n(e),a(e),r(e),o(e),c(e)}))};s.a.render(Object(me.jsx)(c.a.StrictMode,{children:Object(me.jsx)(Ve,{})}),document.getElementById("root")),Fe()}},[[160,1,2]]]);
//# sourceMappingURL=main.8ef12619.chunk.js.map