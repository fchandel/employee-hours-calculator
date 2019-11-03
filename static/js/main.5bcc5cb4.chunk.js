(window["webpackJsonptime-tracker"]=window["webpackJsonptime-tracker"]||[]).push([[0],{134:function(t,e,a){"use strict";a.r(e);var n=a(1),r=a.n(n),l=a(2),o=a.n(l),s=(a(81),a(23)),c=a(32),i=a(33),u=a(35),d=a(34),h=a(9),m=a(36),f=(a(55),a(56),a(53)),p=a.n(f),y=(a(57),a(3)),b=a.n(y),E=a(75),v=a.n(E),g=a(54),O=function(t){function e(){return Object(c.a)(this,e),Object(u.a)(this,Object(d.a)(e).apply(this,arguments))}return Object(m.a)(e,t),Object(i.a)(e,[{key:"render",value:function(){var t=this;return r.a.createElement(v.a,{id:"myTable",striped:!0,hover:!0,variant:"dark"},r.a.createElement("thead",{className:"table-header"},r.a.createElement("tr",null,r.a.createElement("th",null,"#"),r.a.createElement("th",null,"Start Time"),r.a.createElement("th",null,"End Time"),r.a.createElement("th",null,"Hours "))),r.a.createElement("tbody",null,this.props.days.map((function(e){return r.a.createElement("tr",null,r.a.createElement("td",null,e.id),r.a.createElement("td",null,r.a.createElement(g.a,{showSecond:!1,defaultValue:t.props.defaultStart,className:"xxx",onChange:function(a){return t.props.onChangeStart(a,e.id)},format:t.props.format,use12Hours:!0,inputReadOnly:!0})),r.a.createElement("td",null,r.a.createElement(g.a,{showSecond:!1,defaultValue:t.props.defaultEnd,className:"xxx",onChange:function(a){return t.props.onChangeEnd(a,e.id)},format:t.props.format,use12Hours:!0,inputReadOnly:!0})),r.a.createElement("td",null,e.total))}))))}}]),e}(r.a.Component),k=function(t){function e(t){var a;return Object(c.a)(this,e),(a=Object(u.a)(this,Object(d.a)(e).call(this,t))).state={counter:0,format:"h:mm a",totalHours:0,days:[],defaultStart:b()().hour(9).minute(0),defaultEnd:b()().hour(19).minute(0)},a.onChangeStart=a.onChangeStart.bind(Object(h.a)(a)),a.onChangeEnd=a.onChangeEnd.bind(Object(h.a)(a)),a.addRow=a.addRow.bind(Object(h.a)(a)),a.calculateHours=a.calculateHours.bind(Object(h.a)(a)),a.calculateTotalForDay=a.calculateTotalForDay.bind(Object(h.a)(a)),a.displayHelp=a.displayHelp.bind(Object(h.a)(a)),a.displayTable=a.displayTable.bind(Object(h.a)(a)),a}return Object(m.a)(e,t),Object(i.a)(e,[{key:"calculateDifferenceInDefaultHours",value:function(){var t=b()(this.state.defaultStart,"h:mm a"),e=b()(this.state.defaultEnd,"h:mm a"),a=b.a.duration(e.diff(t)).asHours();return Math.round(10*a)/10}},{key:"calculateHours",value:function(){var t=0;this.state.days.map((function(e){return t+=e.total})),this.setState({totalHours:t})}},{key:"calculateTotalForDay",value:function(t){var e=Object(s.a)(this.state.days),a=e[t].start,n=e[t].end,r=b()(a,"h:mm a"),l=b()(n,"h:mm a"),o=b.a.duration(l.diff(r)).asHours(),c=Math.round(20*o)/20;e[t].total=c}},{key:"onChangeStart",value:function(t,e){var a=this,n=Object(s.a)(this.state.days);n[e].start=t.format(this.state.format),this.setState({days:n},(function(){console.log("On Change Start",a.state)})),this.calculateTotalForDay(e)}},{key:"onChangeEnd",value:function(t,e){var a=this,n=Object(s.a)(this.state.days);n[e].end=t.format(this.state.format),this.setState({days:n},(function(){console.log("On Change End",a.state)})),this.calculateTotalForDay(e)}},{key:"addRow",value:function(){var t=this,e={id:this.state.counter,start:this.state.defaultStart,end:this.state.defaultEnd,total:this.calculateDifferenceInDefaultHours()};this.setState((function(a){return{counter:t.state.counter+1,days:[].concat(Object(s.a)(a.days),[e])}}),(function(){console.log("Add Row",t.state)}))}},{key:"displayHelp",value:function(){if(this.counterActive)return r.a.createElement("h2",{className:"hint"},'Click "Add Day" to get started!')}},{key:"counterActive",value:function(){return 0!=this.state.counter}},{key:"displayTable",value:function(){return this.counterActive()?r.a.createElement(O,{format:this.state.format,days:this.state.days,defaultStart:this.state.defaultStart,defaultEnd:this.state.defaultEnd,onChangeStart:this.onChangeStart,onChangeEnd:this.onChangeEnd}):""}},{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement("header",{className:"App-header"},this.displayHelp(),r.a.createElement("div",{className:"tableDiv"},this.displayTable()),r.a.createElement("div",{className:"black bottom-bar"},r.a.createElement("div",{className:"float-left"},"Total Hours Worked This Month: ",this.state.totalHours),r.a.createElement("div",{className:"float-right"},r.a.createElement(p.a,{variant:"success button-color",className:"p-20",onClick:this.addRow},"Add Day"),r.a.createElement("br",null),r.a.createElement(p.a,{variant:"success",className:"p-20",onClick:this.calculateHours},"Calculate Hours")))))}}]),e}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(k,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()}))},55:function(t,e,a){},76:function(t,e,a){t.exports=a(134)},81:function(t,e,a){}},[[76,1,2]]]);
//# sourceMappingURL=main.5bcc5cb4.chunk.js.map