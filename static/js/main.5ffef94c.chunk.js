(this["webpackJsonp25-5-clock"]=this["webpackJsonp25-5-clock"]||[]).push([[0],{10:function(e,t,n){"use strict";n.r(t);var s=n(3),a=n(4),i=n(1),r=n(8),c=n(7),l=n(0),o=n.n(l),m=n(5),h=n.n(m),u=(n(15),n(6)),b=n.n(u),g=function(e){Object(r.a)(n,e);var t=Object(c.a)(n);function n(e){var a;return Object(s.a)(this,n),(a=t.call(this,e)).state={timer:1500,sessionLength:25,breakLength:5,timerCounting:"OFF",timerName:"Session",minutes:25,seconds:"00"},a.handleChange=a.handleChange.bind(Object(i.a)(a)),a.sessionDecrement=a.sessionDecrement.bind(Object(i.a)(a)),a.sessionIncrement=a.sessionIncrement.bind(Object(i.a)(a)),a.breakDecrement=a.breakDecrement.bind(Object(i.a)(a)),a.breakIncrement=a.breakIncrement.bind(Object(i.a)(a)),a.reset=a.reset.bind(Object(i.a)(a)),a.startStop=a.startStop.bind(Object(i.a)(a)),a}return Object(a.a)(n,[{key:"sessionDecrement",value:function(){this.state.sessionLength>1&&this.setState({sessionLength:this.state.sessionLength-1,minutes:this.state.minutes-1})}},{key:"sessionIncrement",value:function(){this.state.sessionLength<60&&this.setState({sessionLength:this.state.sessionLength+1,minutes:this.state.minutes+1})}},{key:"breakDecrement",value:function(){this.state.breakLength>1&&this.setState({breakLength:this.state.breakLength-1})}},{key:"breakIncrement",value:function(){this.state.breakLength<60&&this.setState({breakLength:this.state.breakLength+1})}},{key:"handleChange",value:function(e){var t=this;(""===e.target.value||/^[0-9\b]+$/.test(e.target.value)&&e.target.value>0&&e.target.value<=60)&&("session-length"==e.target.id&&this.setState({sessionLength:e.target.value},(function(){t.setState({minutes:t.state.sessionLength})})),"break-length"==e.target.id&&this.setState({breakLength:e.target.value}))}},{key:"reset",value:function(){this.setState({timer:1500,sessionLength:25,breakLength:5,timerCounting:"OFF",minutes:25,seconds:"00",timerName:"Session"});var e=document.getElementById("beep");e.pause(),e.currentTime=0,clearInterval(this.interval)}},{key:"startStop",value:function(){var e=this;switch(this.state.timerCounting){case"OFF":this.setState({timerCounting:"ON",timer:60*this.state.minutes}),this.interval=setInterval((function(){return e.counter()}),1e3);break;case"ON":this.setState({timerCounting:"PAUSE"});break;case"PAUSE":this.setState({timerCounting:"ON"})}}},{key:"counter",value:function(){var e=document.getElementById("beep");if("ON"===this.state.timerCounting){var t=this.state.timer-1;if(t>=0){var n=Math.floor(t/60),s=t-60*n;this.setState({timer:t,minutes:n<10?"0"+n:n,seconds:s<10?"0"+s:s}),0===t&&e.play()}else{var a,i,r;"Session"===this.state.timerName?(a="Break",i=this.state.breakLength):(a="Session",i=this.state.sessionLength),r=60*i,i=i,"00",this.setState({timerName:a,timer:r,minutes:i<10?"0"+i:i,seconds:"00"})}}}},{key:"render",value:function(){return o.a.createElement("div",{className:" mt-5 container-sm text-center vertical-center"},o.a.createElement("label",{id:"session-label"},"Session Length"),o.a.createElement("div",{className:"row justify-content-center"},o.a.createElement("button",{className:"btn btn-lg  btn-outline-primary",type:"button",id:"session-decrement",onClick:this.sessionDecrement},"-"),o.a.createElement("input",{className:"mx-5",id:"session-length",pattern:"[0-9]*",type:"text",value:this.state.sessionLength,onChange:this.handleChange}),o.a.createElement("button",{className:" btn-lg btn btn-outline-primary",id:"session-increment",onClick:this.sessionIncrement},"+")),o.a.createElement("label",{className:"pt-4",id:"break-label"},"Break Length"),o.a.createElement("div",{className:"row justify-content-center"},o.a.createElement("button",{className:"btn  btn-lg btn-outline-primary",id:"break-decrement",onClick:this.breakDecrement},"-"),o.a.createElement("input",{className:"mx-5",id:"break-length",type:"text",value:this.state.breakLength,onChange:this.handleChange}),o.a.createElement("button",{className:"btn btn-lg btn-outline-primary",id:"break-increment",onClick:this.breakIncrement},"+")),o.a.createElement("div",null,o.a.createElement("div",{className:"h3 p-5",id:"timer-label"},this.state.timerName),o.a.createElement("div",{className:"d-inline-flex p-5 display-1 font-weight-bold",id:"time-left"},this.state.minutes,":",this.state.seconds," ")),o.a.createElement("div",null,o.a.createElement("button",{className:"p-2 m-2 btn btn-danger",id:"reset",onClick:this.reset},"Reset"),o.a.createElement("button",{className:"p-2 btn btn-success",id:"start_stop",onClick:this.startStop},"Start-Stop")),o.a.createElement("audio",{id:"beep",src:b.a}))}}]),n}(o.a.Component);h.a.render(o.a.createElement(g,null),document.getElementById("root"))},15:function(e,t,n){},6:function(e,t,n){e.exports=n.p+"static/media/guitar.54720aff.mp3"},9:function(e,t,n){e.exports=n(10)}},[[9,1,2]]]);
//# sourceMappingURL=main.5ffef94c.chunk.js.map