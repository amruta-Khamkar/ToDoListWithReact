(this.webpackJsonpassignment2=this.webpackJsonpassignment2||[]).push([[0],{14:function(e,t,n){},15:function(e,t,n){},17:function(e,t,n){},18:function(e,t,n){"use strict";n.r(t);var s=n(1),a=n.n(s),c=n(4),l=n.n(c),o=(n(14),n.p,n(7)),i=n(2),d=n(5),r=n(6),j=n(9),b=n(8),u=(n(15),n(0)),h=function(e){Object(j.a)(n,e);var t=Object(b.a)(n);function n(e){var s;return Object(d.a)(this,n),(s=t.call(this,e)).handler=function(e){var t=e.target,n=t.name,a=t.value;s.setState(Object(i.a)({},n,a))},s.add=function(){var e=s.state,t=e.tasks,n=e.Title,a=e.body;e.noOfTasks;""==document.getElementById("title").value||" "==document.getElementById("desc").value?alert("Please fill out fields"):(s.setState({tasks:[].concat(Object(o.a)(t),[{Title:n,body:a}])}),s.setState({noOfTasks:s.state.tasks.length}),console.log(s.state.tasks.length),document.getElementById("title").value=" ",document.getElementById("desc").value=" ",console.log(s.state))},s.delete=function(e){console.log("delete");var t=s.state.noOfTasks;if(1==window.confirm("Do You really want to delele this?")){var n=s.state.tasks;n.splice(e,1),s.setState({tasks:n}),s.setState({noOfTasks:s.state.noOfTasks-1}),console.log(t)}},s.edit=function(e){var t=s.state,n=t.tasks;t.Title,t.body,t.update;s.setState({update:e}),console.log(s.state),document.getElementById("title").value=n[e].Title,document.getElementById("desc").value=n[e].body},s.Update=function(e){if(""==document.getElementById("title").value||" "==document.getElementById("desc").value)alert("Please Select the task that you want to update !");else if(window.confirm("Are sure you want to update this?")){console.log("final update");var t=s.state,n=t.tasks,a=t.Title,c=t.body;n[e].Title=document.getElementById("title").value,n[e].body=document.getElementById("desc").value,console.log(n[e].Title),s.setState({Title:a,body:c}),document.getElementById("title").value=" ",document.getElementById("desc").value=" "}},s.state={tasks:[],update:0,noOfTasks:1},s}return Object(r.a)(n,[{key:"render",value:function(){var e,t=this;return Object(u.jsx)(u.Fragment,{children:Object(u.jsxs)("div",{className:"Container",children:[Object(u.jsx)("h1",{children:"To Do List"}),Object(u.jsxs)("h1",{className:"nums",children:["No of tasks are :",Object(u.jsx)("span",{className:"red",children:this.state.noOfTasks+1})]}),Object(u.jsx)("label",{children:" Title: "}),Object(u.jsx)("input",{onChange:this.handler,name:"Title",id:"title",cols:"30",rows:"3"}),Object(u.jsx)("br",{}),Object(u.jsx)("label",{className:"label",children:"Description :"})," ",Object(u.jsx)("textarea",(e={onChange:this.handler,name:"",id:"desc"},Object(i.a)(e,"name","body"),Object(i.a)(e,"cols","30"),Object(i.a)(e,"rows","3"),Object(i.a)(e,"o",!0),e)),Object(u.jsx)("br",{}),Object(u.jsxs)("div",{className:"flex",children:[Object(u.jsx)("button",{className:"btn",onClick:this.add,children:"Add task"}),Object(u.jsx)("br",{}),Object(u.jsx)("button",{className:"btn",onClick:function(){return t.Update(t.state.update)},children:"Final Update"}),Object(u.jsx)("br",{})]}),Object(u.jsx)("div",{className:"scroll",children:Object(u.jsxs)("table",{className:"table",border:"3",children:[Object(u.jsxs)("thead",{children:[Object(u.jsx)("th",{children:"Sr No"}),Object(u.jsx)("th",{children:"Title"}),Object(u.jsx)("th",{children:"Description"}),Object(u.jsx)("th",{children:"Action"})]}),Object(u.jsx)("tbody",{children:this.state.tasks.map((function(e,n){return Object(u.jsxs)("tr",{children:[Object(u.jsx)("td",{children:n+1}),Object(u.jsx)("td",{children:e.Title}),Object(u.jsx)("td",{children:e.body}),Object(u.jsxs)("td",{children:[Object(u.jsx)("button",{className:"btn1",onClick:function(){return t.edit(n)},children:"Edit"}),Object(u.jsx)("button",{className:"btn2",onClick:function(){return t.delete(n)},children:"Delete"})]})]},n)}))})]})})]})})}}]),n}(s.Component);n(17);var O=function(){return Object(u.jsx)("div",{className:"App",children:Object(u.jsx)(h,{})})},m=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,19)).then((function(t){var n=t.getCLS,s=t.getFID,a=t.getFCP,c=t.getLCP,l=t.getTTFB;n(e),s(e),a(e),c(e),l(e)}))};l.a.render(Object(u.jsx)(a.a.StrictMode,{children:Object(u.jsx)(O,{})}),document.getElementById("root")),m()}},[[18,1,2]]]);
//# sourceMappingURL=main.6adae750.chunk.js.map