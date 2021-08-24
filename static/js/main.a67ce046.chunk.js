(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{10:function(t,e,n){t.exports={filter:"Filter_filter__1Ib-s",input:"Filter_input__1J8xM",title:"Filter_title__3dvv6"}},18:function(t,e,n){},2:function(t,e,n){t.exports={form:"ContactForm_form__LovDS",btn:"ContactForm_btn__214bL",input:"ContactForm_input__2wqnH",label:"ContactForm_label__2rRlg"}},20:function(t,e,n){"use strict";n.r(e);var a=n(1),c=n.n(a),s=n(12),r=n.n(s),i=(n(18),n(13)),o=n(4),l=n(6),u=n(7),m=n(9),b=n(8),d=n(5),j=n(2),h=n.n(j),p=n(0),f=function(t){Object(m.a)(n,t);var e=Object(b.a)(n);function n(){var t;Object(l.a)(this,n);for(var a=arguments.length,c=new Array(a),s=0;s<a;s++)c[s]=arguments[s];return(t=e.call.apply(e,[this].concat(c))).state={name:"",number:""},t.handleChange=function(e){var n=e.target,a=n.name,c=n.value;t.setState(Object(d.a)({},a,c))},t.handleSubmit=function(e){e.preventDefault(),t.props.onAddContact(Object(o.a)({},t.state)),t.setState({name:"",number:""}),t.reset()},t.reset=function(){t.setState({name:"",number:""})},t}return Object(u.a)(n,[{key:"render",value:function(){return Object(p.jsxs)("form",{className:h.a.form,onSubmit:this.handleSubmit,children:[Object(p.jsxs)("label",{className:h.a.label,children:["Name",Object(p.jsx)("input",{className:h.a.input,value:this.state.name,onChange:this.handleChange,type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0})]}),Object(p.jsxs)("label",{className:h.a.label,children:["Number",Object(p.jsx)("input",{className:h.a.input,value:this.state.number,onChange:this.handleChange,type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0})]}),Object(p.jsx)("button",{className:h.a.btn,type:"submit",children:"Add contact"})]})}}]),n}(a.Component),_=n(22),O=n(3),v=n.n(O),C=function(t){var e=t.contacts,n=t.onRemoveContact;return Object(p.jsx)("ul",{className:v.a.list,children:e.map((function(t){var e=t.id,a=t.name,c=t.number;return Object(p.jsxs)("li",{className:v.a.list__item,children:[Object(p.jsx)("span",{className:v.a.name,children:a}),Object(p.jsx)("span",{className:v.a.number,children:c}),Object(p.jsx)("button",{className:v.a.deleteBtn,type:"button",onClick:function(){return n(e)},children:"Delete"})]},e)}))})},x=n(10),g=n.n(x);function y(t){var e=t.value,n=t.onChangeFilter;return Object(p.jsxs)("div",{className:g.a.filter,children:[Object(p.jsx)("span",{className:g.a.title,children:" Find contacts by name"}),Object(p.jsx)("input",{className:g.a.input,type:"text",value:e,onChange:n})]})}var N=function(t){Object(m.a)(n,t);var e=Object(b.a)(n);function n(){var t;Object(l.a)(this,n);for(var a=arguments.length,c=new Array(a),s=0;s<a;s++)c[s]=arguments[s];return(t=e.call.apply(e,[this].concat(c))).state={contacts:[{id:"id-1",name:"Rosie Simpson",number:"459-12-56"},{id:"id-2",name:"Hermione Kline",number:"443-89-12"},{id:"id-3",name:"Eden Clements",number:"645-17-79"},{id:"id-4",name:"Annie Copeland",number:"227-91-26"}],filter:""},t.addContact=function(e){if(t.state.contacts.map((function(t){return t.name})).includes(e.name))alert("".concat(e.name," is already in contacts"));else{var n=Object(o.a)(Object(o.a)({},e),{},{id:Object(_.a)()});t.setState((function(t){return{contacts:[].concat(Object(i.a)(t.contacts),[n])}}))}},t.changeFilter=function(e){t.setState({filter:e.target.value})},t.getVisibleContacts=function(){var e=t.state,n=e.contacts,a=e.filter;return n.filter((function(t){return t.name.toLowerCase().includes(a.toLowerCase())}))},t.removeContact=function(e){t.setState((function(t){return{contacts:t.contacts.filter((function(t){return t.id!==e}))}}))},t}return Object(u.a)(n,[{key:"componentDidMount",value:function(){var t=localStorage.getItem("contacts"),e=JSON.parse(t);e&&this.setState({contacts:e})}},{key:"componentDidUpdate",value:function(t){var e=this.state.contacts;e!==t.contacts&&localStorage.setItem("contacts",JSON.stringify(e))}},{key:"render",value:function(){var t=this.state.filter,e=this.getVisibleContacts();return Object(p.jsx)(p.Fragment,{children:Object(p.jsxs)("div",{children:[Object(p.jsx)("h2",{children:"Phonebook"}),Object(p.jsx)(f,{onAddContact:this.addContact}),Object(p.jsx)("h2",{children:"Contacts"}),Object(p.jsx)(y,{value:t,onChangeFilter:this.changeFilter}),e.length>0&&Object(p.jsx)(C,{contacts:e,onRemoveContact:this.removeContact})]})})}}]),n}(a.Component);r.a.render(Object(p.jsx)(c.a.StrictMode,{children:Object(p.jsx)(N,{})}),document.getElementById("root"))},3:function(t,e,n){t.exports={list:"ContactList_list__1HV5c",list__item:"ContactList_list__item__3sRTH",deleteBtn:"ContactList_deleteBtn__2YwBa",name:"ContactList_name__A4yqq",number:"ContactList_number__2R76u"}}},[[20,1,2]]]);
//# sourceMappingURL=main.a67ce046.chunk.js.map