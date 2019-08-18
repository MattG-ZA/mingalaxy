(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,function(t,e,n){t.exports=n(24)},,,,,,function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){"use strict";n.r(e);var a=n(0),r=n.n(a),o=n(7),s=n.n(o),i=(n(14),n(1)),c=n(2),l=n(4),u=n(3),p=n(5),m=(n(15),function(){for(var t=Math.ceil(50*Math.random())+50,e=Math.ceil(6*Math.random())+1,n=[],a=0;a<e;a++){for(var r=Math.ceil(20*Math.random())+5,o=100*a+Math.ceil(100*Math.random())+t,s=o=0===a?o:y(o,n[a-1],"planet"),i=Math.floor(3*Math.random()),c=[],l=0;l<i;l++){var u=Math.ceil(3*Math.random())+1,p=10*l+Math.ceil(10*Math.random())+r,m=p=0===l?p:y(p,c[l-1],"moon");c.push({index:l,moonSize:u,distance:p,tto:m})}n.push({index:a,planetSize:r,distance:o,tto:s,moonObjects:c})}return{starSize:t,planetObjects:n}}),y=function(t,e,n){var a=Math.ceil(t+.3*e.distance+e[n+"Size"]);if("planet"===n&&e.moonObjects.length>0){var r=e.moonObjects;a+=r[r.length-1].distance}return a},h=(n(16),n(17),function(t){function e(){return Object(i.a)(this,e),Object(l.a)(this,Object(u.a)(e).apply(this,arguments))}return Object(p.a)(e,t),Object(c.a)(e,[{key:"setStarStyleProperties",value:function(){var t=this.props.starSize;this.refs.star.style.setProperty("--starSize",t+"px")}},{key:"componentDidMount",value:function(){this.setStarStyleProperties()}},{key:"render",value:function(){return r.a.createElement("span",{ref:"star",className:"star-body"})}}]),e}(r.a.Component)),f=(n(18),n(19),function(t){function e(){return Object(i.a)(this,e),Object(l.a)(this,Object(u.a)(e).apply(this,arguments))}return Object(p.a)(e,t),Object(c.a)(e,[{key:"setPlanetStyleProperties",value:function(){var t=this.props.planetSize;this.refs.planet.style.setProperty("--planetSize",t+"px")}},{key:"componentDidMount",value:function(){this.setPlanetStyleProperties()}},{key:"render",value:function(){return r.a.createElement("span",{ref:"planet",className:"planet-body"})}}]),e}(r.a.Component)),d=(n(20),function(t){function e(){return Object(i.a)(this,e),Object(l.a)(this,Object(u.a)(e).apply(this,arguments))}return Object(p.a)(e,t),Object(c.a)(e,[{key:"setMoonStyleProperties",value:function(){var t=this.props,e=t.moonSize,n=t.distance,a=t.tto,r=this.refs.moon;r.style.setProperty("--moonSize",e+"px"),r.style.setProperty("--translate",n+"px"),r.style.setProperty("--tto",a+"s"),this.calculateRotation()}},{key:"calculateRotation",value:function(){var t=this.refs.moon,e=Math.round(360*Math.random()),n=e+360;0===Math.round(Math.random())&&(e*=-1,n*=-1),t.style.setProperty("--fromPosition",e+"deg"),t.style.setProperty("--toPosition",n+"deg")}},{key:"componentDidMount",value:function(){this.setMoonStyleProperties()}},{key:"render",value:function(){return r.a.createElement("span",{ref:"moon",className:"moon-body"})}}]),e}(r.a.Component)),b=(n(21),function(t){function e(){return Object(i.a)(this,e),Object(l.a)(this,Object(u.a)(e).apply(this,arguments))}return Object(p.a)(e,t),Object(c.a)(e,[{key:"setOrbitStyleProperties",value:function(){var t=this.props.distance,e=this.refs.orbit;e.style.setProperty("--height",2*t+"px"),e.style.setProperty("--width",2*t+"px")}},{key:"componentDidMount",value:function(){this.setOrbitStyleProperties()}},{key:"render",value:function(){return r.a.createElement("span",{ref:"orbit",className:"system-orbit"})}}]),e}(r.a.Component)),O=function(t){function e(){return Object(i.a)(this,e),Object(l.a)(this,Object(u.a)(e).apply(this,arguments))}return Object(p.a)(e,t),Object(c.a)(e,[{key:"setPlanetSystemStyleProperties",value:function(){var t=this.props,e=t.distance,n=t.tto,a=this.refs.planetSystem;a.style.setProperty("--translate",e+"px"),a.style.setProperty("--tto",n+"s"),this.calculateRotation()}},{key:"calculateRotation",value:function(){var t=this.refs.planetSystem,e=Math.round(360*Math.random()),n=e+360;0===Math.round(Math.random())&&(e*=-1,n*=-1),t.style.setProperty("--fromPosition",e+"deg"),t.style.setProperty("--toPosition",n+"deg")}},{key:"componentDidMount",value:function(){this.setPlanetSystemStyleProperties()}},{key:"render",value:function(){var t=this.props,e=t.planetSize,n=t.moonObjects;return r.a.createElement("span",{ref:"planetSystem",className:"planet-system"},r.a.createElement(f,{planetSize:e}),n.map(function(t){var e=t.index,n=t.moonSize,a=t.distance,o=t.tto,s=e+a+o;return r.a.createElement(d,{key:s,moonSize:n,distance:a,tto:o})}),n.map(function(t){var e=t.index,n=t.distance,a=e+n;return r.a.createElement(b,{key:a,distance:n})}))}}]),e}(r.a.Component),j=function(t){function e(){return Object(i.a)(this,e),Object(l.a)(this,Object(u.a)(e).apply(this,arguments))}return Object(p.a)(e,t),Object(c.a)(e,[{key:"render",value:function(){var t=this.props.solarSystem,e=t.starSize,n=t.planetObjects;return r.a.createElement("span",{className:"system-body"},r.a.createElement(h,{key:e,starSize:e}),n.map(function(t){var e=t.index,n=t.planetSize,a=t.distance,o=t.tto,s=t.moonObjects,i=e+a+o;return r.a.createElement(O,{key:i,planetSize:n,distance:a,tto:o,moonObjects:s})}),n.map(function(t){var e=t.index,n=t.distance,a=e+n;return r.a.createElement(b,{key:a,distance:n})}))}}]),e}(r.a.Component),S=(n(22),function(){return r.a.createElement("span",null,r.a.createElement("div",{className:"spacebackground-stars"}),r.a.createElement("div",{className:"spacebackground-twinkling"}),r.a.createElement("div",{className:"spacebackground-clouds"}))}),v=(n(23),function(t){function e(){return Object(i.a)(this,e),Object(l.a)(this,Object(u.a)(e).apply(this,arguments))}return Object(p.a)(e,t),Object(c.a)(e,[{key:"render",value:function(){var t=this.props.updateSolarSystem;return r.a.createElement("div",{className:"generate-button",onClick:t},r.a.createElement("span",null,"Generate new system"))}}]),e}(r.a.Component)),k=function(t){function e(t){var n;return Object(i.a)(this,e),(n=Object(l.a)(this,Object(u.a)(e).call(this,t))).spaceZoom=function(t){var e=n.refs.space,a=0;a=t.deltaY<0?n.state.zoom+.1*n.state.zoom:n.state.zoom-.1*n.state.zoom,e.style.setProperty("--zoom",a),n.setState({zoom:a})},n.updateSolarSystem=function(){n.setState({solarSystem:m()})},n.state={zoom:1,solarSystem:{starSize:null,planetObjects:[]}},n}return Object(p.a)(e,t),Object(c.a)(e,[{key:"componentDidMount",value:function(){this.refs.space.addEventListener("wheel",this.spaceZoom),this.updateSolarSystem()}},{key:"render",value:function(){return r.a.createElement("span",null,r.a.createElement(S,null),r.a.createElement(v,{updateSolarSystem:this.updateSolarSystem}),r.a.createElement("span",{ref:"space",className:"space-container"},this.state.solarSystem.planetObjects.length>0&&r.a.createElement(j,{solarSystem:this.state.solarSystem})))}}]),e}(r.a.Component),P=function(t){function e(){return Object(i.a)(this,e),Object(l.a)(this,Object(u.a)(e).apply(this,arguments))}return Object(p.a)(e,t),Object(c.a)(e,[{key:"render",value:function(){return r.a.createElement(k,null)}}]),e}(a.Component);s.a.render(r.a.createElement(P,null),document.getElementById("root"))}],[[8,1,2]]]);
//# sourceMappingURL=main.10582479.chunk.js.map