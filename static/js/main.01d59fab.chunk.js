(this.webpackJsonpassignment2=this.webpackJsonpassignment2||[]).push([[0],{14:function(e,t,n){},15:function(e,t,n){},17:function(e,t,n){},18:function(e,t,n){"use strict";n.r(t);var c=n(1),a=n.n(c),l=n(4),s=n.n(l),i=(n(14),n.p,n(7)),d=n(2),r=n(5),o=n(6),j=n(9),b=n(8),u=(n(15),n(0)),h=function(e){Object(j.a)(n,e);var t=Object(b.a)(n);function n(e){var c;return Object(r.a)(this,n),(c=t.call(this,e)).handler1=function(e){var t=e.target,n=t.name,a=t.value;c.setState(Object(d.a)({},n,a))},c.addTask=function(){var e=c.state,t=e.arr,n=e.Title,a=e.body,l=e.id;""==document.getElementById("title").value||""==document.getElementById("desc").value?alert("Please fill out fields"):(c.setState({arr:[].concat(Object(i.a)(t),[{Title:n,body:a,id:l+1}])}),document.getElementById("title").value=" ",document.getElementById("desc").value=" ")},c.deleteTask=function(e){if(console.log("delete"),1==window.confirm("Do You really want to delele this?")){var t=c.state.arr;t.splice(e,1),c.setState({arr:t})}},c.updateTask=function(e){var t=c.state,n=t.arr;t.Title,t.body,t.edit;c.setState({edit:e}),console.log(c.state),document.getElementById("title").value=n[e].Title,document.getElementById("desc").value=n[e].body},c.finalUpdate=function(e){if(window.confirm("Are sure you want to update this?")){console.log("final update");var t=c.state,n=t.arr,a=t.Title,l=t.body;n[e].Title=document.getElementById("title").value,n[e].body=document.getElementById("desc").value,console.log(n[e].Title),c.setState({Title:a,body:l}),document.getElementById("title").value=" ",document.getElementById("desc").value=" "}},c.state={arr:[],edit:0},c}return Object(o.a)(n,[{key:"render",value:function(){var e,t=this;return Object(u.jsx)(u.Fragment,{children:Object(u.jsxs)("div",{className:"Container",children:[Object(u.jsx)("h1",{children:"To Do List"}),Object(u.jsx)("label",{children:" Title: "}),Object(u.jsx)("input",{onChange:this.handler1,name:"Title",id:"title",cols:"30",rows:"3",value:this.state.arr.Title}),Object(u.jsx)("br",{}),Object(u.jsx)("label",{className:"label",children:"Description :"})," ",Object(u.jsx)("textarea",(e={onChange:this.handler1,name:"",id:"desc"},Object(d.a)(e,"name","body"),Object(d.a)(e,"cols","30"),Object(d.a)(e,"rows","3"),Object(d.a)(e,"o",!0),e)),Object(u.jsx)("br",{}),Object(u.jsxs)("div",{className:"flex",children:[Object(u.jsx)("button",{className:"btn",onClick:this.addTask,children:"Add task"}),Object(u.jsx)("br",{}),Object(u.jsx)("button",{className:"btn",onClick:function(){return t.finalUpdate(t.state.edit)},children:"Final Update"}),Object(u.jsx)("br",{})]}),Object(u.jsx)("div",{className:"scroll",children:Object(u.jsxs)("table",{className:"table",border:"3",children:[Object(u.jsxs)("thead",{children:[Object(u.jsx)("th",{children:"Sr No"}),Object(u.jsx)("th",{children:"Title"}),Object(u.jsx)("th",{children:"Description"}),Object(u.jsx)("th",{children:"Action"})]}),Object(u.jsx)("tbody",{children:this.state.arr.map((function(e,n){return Object(u.jsxs)("tr",{children:[Object(u.jsx)("td",{children:n+1}),Object(u.jsx)("td",{children:e.Title}),Object(u.jsx)("td",{children:e.body}),Object(u.jsxs)("td",{children:[Object(u.jsx)("button",{className:"btn1",onClick:function(){return t.updateTask(n)},children:"Update"}),Object(u.jsx)("button",{className:"btn1",onClick:function(){return t.deleteTask(n)},children:"Delete"})]})]},n)}))})]})})]})})}}]),n}(c.Component);n(17);var m=function(){return Object(u.jsx)("div",{className:"App",children:Object(u.jsx)(h,{})})},O=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,19)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,l=t.getLCP,s=t.getTTFB;n(e),c(e),a(e),l(e),s(e)}))};s.a.render(Object(u.jsx)(a.a.StrictMode,{children:Object(u.jsx)(m,{})}),document.getElementById("root")),O()}},[[18,1,2]]]);
//# sourceMappingURL=main.01d59fab.chunk.js.map