(this.webpackJsonparia=this.webpackJsonparia||[]).push([[0],{67:function(e,t,n){e.exports=n(92)},73:function(e,t,n){e.exports=n.p+"static/media/logo.ee7cd8ed.svg"},74:function(e,t,n){},77:function(e,t,n){},78:function(e,t,n){},92:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(26),l=n.n(i),o=(n(72),n(10)),c=n(11),s=n(14),u=n(15),m=(n(73),n(74),n(64)),d=n(48),p=n(16),h=n(36),v=function(e){Object(u.a)(n,e);var t=Object(s.a)(n);function n(e){var a;return Object(o.a)(this,n),(a=t.call(this,e)).state={test:13,input:12,value:0,setValue:0,currentActivation:"<select activation function>",currentInit:"<select weight initializer>",activations:["<select activation function>","relu","tanh","sigmoid","softmax"],inits:["<select weight initializer>","zeros","ones","normal","uniform","glorot uniform","he uniform"]},a}return Object(c.a)(n,[{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement("br",null),r.a.createElement(h.a,{variant:"primary",onClick:function(){console.log("adding layer"),e.props.appState.doAddLayer()}},"Add Layer")," ",r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement(p.a,null,r.a.createElement(p.a.Toggle,{variant:"success",id:"dropdown-basic"},"Activation"),r.a.createElement(p.a.Menu,null,this.state.activations.map((function(t){return r.a.createElement(p.a.Item,{as:"button",onClick:function(){e.setState({currentActivation:t})}},t)})))),r.a.createElement("br",null),r.a.createElement("p",null,this.state.currentActivation),r.a.createElement("br",null),r.a.createElement(p.a,null,r.a.createElement(p.a.Toggle,{variant:"success",id:"dropdown-basic"},"Weight Initializer"),r.a.createElement(p.a.Menu,null,this.state.inits.map((function(t){return r.a.createElement(p.a.Item,{as:"button",onClick:function(){e.setState({currentInit:t})}},t)})))),r.a.createElement("br",null),r.a.createElement("p",null,this.state.currentInit),r.a.createElement("br",null))}}]),n}(a.Component),f=function(e){Object(u.a)(n,e);var t=Object(s.a)(n);function n(e){var a;return Object(o.a)(this,n),(a=t.call(this,e)).state={test:13,input:12,value:0,setValue:0,currentOpti:"<select optimizer>",optimizers:["<select optimizer>","SGD","RMSProp","Adadelta","Adam"]},a}return Object(c.a)(n,[{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement("br",null),r.a.createElement(p.a,null,r.a.createElement(p.a.Toggle,{variant:"success",id:"dropdown-basic"},"Optimizer"),r.a.createElement(p.a.Menu,null,this.state.optimizers.map((function(t){return r.a.createElement(p.a.Item,{as:"button",onClick:function(){e.setState({currentOpti:t}),e.props.appState.doSetOptimizer(t)}},t)})))),r.a.createElement("br",null),r.a.createElement("p",null,this.state.currentOpti),r.a.createElement("br",null))}}]),n}(a.Component),E=(n(77),function(e){Object(u.a)(n,e);var t=Object(s.a)(n);function n(e){var a;return Object(o.a)(this,n),(a=t.call(this,e)).state={currentCode:"model = Sequential()"},a}return Object(c.a)(n,[{key:"render",value:function(){return r.a.createElement("div",{class:"codepanel"},r.a.createElement("h1",null,"Code"),r.a.createElement("p",null,this.state.currentCode))}}]),n}(a.Component)),b=function(e){Object(u.a)(n,e);var t=Object(s.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(c.a)(n,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("br",null),r.a.createElement("p",null,"TrainPanel"))}}]),n}(a.Component),y=(n(78),function(e){Object(u.a)(n,e);var t=Object(s.a)(n);function n(e){return Object(o.a)(this,n),t.call(this,e)}return Object(c.a)(n,[{key:"render",value:function(){return r.a.createElement("div",{id:"sidebar"},r.a.createElement("div",{class:"settings"},r.a.createElement(m.a,{defaultActiveKey:"build",id:"settings"},r.a.createElement(d.a,{eventKey:"build",title:"Build"},r.a.createElement("div",null,r.a.createElement(v,{appState:this.props.appState}))),r.a.createElement(d.a,{eventKey:"learn",title:"Learn"},r.a.createElement("div",null,r.a.createElement(f,this.props))),r.a.createElement(d.a,{eventKey:"train",title:"Train"},r.a.createElement("div",null,r.a.createElement(b,this.props))))),r.a.createElement(E,null))}}]),n}(a.Component)),g=n(46),O=function(){function e(){Object(o.a)(this,e),this.arrLayers=[],this.optimizer=0,this.metrics=0,this.loss=0}return Object(c.a)(e,[{key:"copy",value:function(e){this.arrLayers=e.arrLayers,this.optimizer=e.optimizer,this.metrics=e.metrics,this.loss=e.loss,this.reportContent()}},{key:"setOptimizer",value:function(e){this.optimizer=e}},{key:"reportContent",value:function(){console.log(this.arrLayers),console.log(this.optimizer),console.log(this.metrics),console.log(this.loss),console.log(" ")}},{key:"addLayer",value:function(e){this.arrLayers.push(e)}}]),e}(),j=function(){function e(t,n,a,r){Object(o.a)(this,e),this.numNodes=t,this.activation=n,this.isFirstLayer=a}return Object(c.a)(e,[{key:"setNumNodes",value:function(e){this.numNodes=e}},{key:"setActivation",value:function(e){this.activation=e}},{key:"setisFirstLayer",value:function(e){this.isFirstLayer=e}}]),e}(),w=new Map;w.set("beginModel","model = Sequential()"),w.set("addLayer","model.add(Dense("),w.set("input_dim","input_dim="),w.set("compile","model.compile("),w.set("losser","loss="),w.set("optimizer","optimizer="),w.set("metrics","metrics=["),w.set("network_end","))");var k=n(63);function z(e){!function(e){var t,n=0,a=Object(g.a)(e);try{for(a.s();!(t=a.n()).done;){var r=t.value.numNodes;r>n&&(n=r)}}catch(i){a.e(i)}finally{a.f()}}(e);for(var t={},n=[],a=[],r=[],i=0;i<e.length;i++){for(var l=e[i].numNodes,o=.2*i,c=.15-l/200,s=(2-(l-1)*c)/2,u=[],m=0;m<l;m++){var d={x:o,y:s+m*c,size:1,id:i+","+m};n.push(d),u.push(d)}r&&S(r,u,a),r=u}return t.nodes=n,t.edges=a,t}function S(e,t,n){for(var a=0;a<e.length;a++)for(var r=e[a],i=r.id,l=0;l<t.length;l++){var o=t[l],c={id:"e_"+r.id+","+o.id,source:i,target:o.id,size:1-e.length*t.length/100};n.push(c)}}var L=function(e){Object(u.a)(n,e);var t=Object(s.a)(n);function n(e){return Object(o.a)(this,n),t.call(this,e)}return Object(c.a)(n,[{key:"render",value:function(){var e=function(){var e=[],t=new j(2,"softmax",!1,!0),n=new j(6,"softmax",!1,!0),a=new j(8,"softmax",!1,!0),r=new j(4,"softmax",!1,!0),i=new j(1,"softmax",!1,!0);return e.push(t,a,n,r,i),e}();console.log(e);var t=z(e);console.log(t);var n=r.a.createElement(k.a,{graph:t,style:{height:"100%"},settings:{maxNodeSize:15,maxEdgeSize:.3,clone:!1,defaultNodeColor:"#fff"}});return r.a.createElement("div",{id:"content"},r.a.createElement("h1",null,"Model"),r.a.createElement("div",{style:{backgroundColor:"#333",height:"90%"}},n))}}]),n}(a.Component),C=function(e){Object(u.a)(n,e);var t=Object(s.a)(n);function n(e){var a;return Object(o.a)(this,n),(a=t.call(this,e)).doSetOptimizer=function(e){console.log("starting");var t=new O;t.copy(a.state.network),t.setOptimizer(e),a.setState((function(e){return{network:t}}))},a.doAddLayer=function(){var e=new j(10,"relu",!1,!1),t=new O;t.copy(a.state.network),0===t.arrLayers.length&&(e.isFirstLayer=!0),t.addLayer(e),a.setState((function(e){return{network:t}}))},a.state={network:new O,doAddLayer:function(){return a.doAddLayer()},doSetOptimizer:function(e){return a.doSetOptimizer(e)}},a}return Object(c.a)(n,[{key:"render",value:function(){return r.a.createElement("div",{class:"wrapper"},r.a.createElement("p",null,r.a.createElement("br",null),this.state.network.optimizer," ",r.a.createElement("br",null)),r.a.createElement(L,{appState:this.state}),r.a.createElement(y,{appState:this.state}))}}]),n}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(C,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[67,1,2]]]);
//# sourceMappingURL=main.5299868d.chunk.js.map