(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],[,,,,function(e,t,n){e.exports={someClass:"Affairs_someClass__2jOW1",filterButtons:"Affairs_filterButtons__TqWPH",activeFilter:"Affairs_activeFilter__30Ui-",removeButton:"Affairs_removeButton__1z-7Z",lowColorPriority:"Affairs_lowColorPriority__1AA5r",highColorPriority:"Affairs_highColorPriority__2EAgL",affairName:"Affairs_affairName__21UXG"}},,,,function(e,t,n){e.exports={navlinks:"Header_navlinks__3rJHw",items:"Header_items__fV-_Z",activeLink:"Header_activeLink__3czzG",menu:"Header_menu__syrVi"}},,function(e,t,n){e.exports={error:"Greeting_error__OC-sS",messageOfError:"Greeting_messageOfError__1GA-Z",buttonAdd:"Greeting_buttonAdd__1iNPX",totalCounter:"Greeting_totalCounter__O6Xqr"}},,function(e,t,n){e.exports={message:"Message_message__3LdCn",inner:"Message_inner__1NUoY",name:"Message_name__yjswx",textMessage:"Message_textMessage__1Hacz",time:"Message_time__36tCB"}},,function(e,t,n){e.exports={notFound:"Error404_notFound__21XjL",item:"Error404_item__2mRgf"}},function(e,t,n){e.exports={input:"SuperInputText_input__2xPmm",superInput:"SuperInputText_superInput__qbZxi",errorInput:"SuperInputText_errorInput__1US-h",error:"SuperInputText_error__LHQoC"}},function(e,t,n){e.exports={default:"SuperButton_default__PKSPU",red:"SuperButton_red__VyGfv",button:"SuperButton_button__1ojer",blink:"SuperButton_blink__F6Er4"}},function(e,t,n){e.exports={label:"SuperCheckbox_label__3OZV5",checkbox:"SuperCheckbox_checkbox__Ab58d",spanClassName:"SuperCheckbox_spanClassName__1hDYQ"}},,function(e,t,n){e.exports={blue:"HW4_blue__1RQAa",column:"HW4_column__1WPF-",testSpanError:"HW4_testSpanError__1VkWc"}},,function(e,t,n){},,,,,,function(e,t,n){},,function(e,t,n){"use strict";n.r(t);var r=n(1),a=n.n(r),c=n(20),s=n.n(c),i=(n(27),n(21)),o=n.n(i),l=n(9),j=n(2),u=n(14),d=n.n(u),b=n(0);var h=function(){return Object(b.jsxs)("div",{className:d.a.notFound,children:[Object(b.jsx)("div",{className:d.a.item,children:"404"}),Object(b.jsx)("div",{className:d.a.item,children:"Page not found!"}),Object(b.jsx)("div",{className:d.a.item,children:"\u2014\u0e05/\u1420.\u032b .\u141f\\\u0e05\u2014"})]})};var m=function(){return Object(b.jsx)("div",{children:"HW7-HW11"})},O=n(12),x=n.n(O);var f=function(e){return Object(b.jsxs)("div",{className:x.a.message,children:[Object(b.jsx)("img",{src:e.avatar}),Object(b.jsxs)("div",{className:x.a.inner,children:[Object(b.jsxs)("div",{className:x.a.name,children:[" ",e.name," "]}),Object(b.jsxs)("div",{className:x.a.textMessage,children:[" ",e.message," "]}),Object(b.jsxs)("div",{className:x.a.time,children:[" ",e.time," "]})]})]})},_="https://sun9-74.userapi.com/Ph-WiuOtF985il9AvN9JqiCWedmHtSGSSTXrSA/ltEB2Z2-YO4.jpg",p="Artem",v="npm start",g="22:00";var C=function(){return Object(b.jsxs)("div",{children:[Object(b.jsx)("hr",{}),"homeworks 1",Object(b.jsx)(f,{avatar:_,name:p,message:v,time:g}),Object(b.jsx)("hr",{}),Object(b.jsx)("hr",{})]})},N=n(3),k=n(4),y=n.n(k);var S=function(e){return Object(b.jsxs)("div",{className:y.a.someClass,children:[Object(b.jsx)("div",{className:y.a.affairName,children:e.affair.name}),Object(b.jsxs)("div",{className:"low"===e.affair.priority||"middle"===e.affair.priority?y.a.lowColorPriority:y.a.highColorPriority,children:["[",e.affair.priority,"]"]}),Object(b.jsx)("button",{className:y.a.removeButton,onClick:function(){e.deleteAffairCallback(e.affair._id)},children:"X"})]})};var w=function(e){var t=e.data.map((function(t){return Object(b.jsx)(S,{affair:t,deleteAffairCallback:e.deleteAffairCallback},t._id)}));return Object(b.jsxs)("div",{children:[t,Object(b.jsx)("button",{className:"all"===e.filter?y.a.activeFilter:y.a.filterButtons,onClick:function(){e.setFilter("all")},children:"All"}),Object(b.jsx)("button",{className:"high"===e.filter?y.a.activeFilter:y.a.filterButtons,onClick:function(){e.setFilter("high")},children:"High"}),Object(b.jsx)("button",{className:"middle"===e.filter?y.a.activeFilter:y.a.filterButtons,onClick:function(){e.setFilter("middle")},children:"Middle"}),Object(b.jsx)("button",{className:"low"===e.filter?y.a.activeFilter:y.a.filterButtons,onClick:function(){e.setFilter("low")},children:"Low"})]})},A=[{_id:1,name:"React",priority:"high"},{_id:2,name:"anime",priority:"low"},{_id:3,name:"games",priority:"low"},{_id:4,name:"work",priority:"high"},{_id:5,name:"html&css",priority:"middle"}];var P=function(){var e=Object(r.useState)(A),t=Object(N.a)(e,2),n=t[0],a=t[1],c=Object(r.useState)("all"),s=Object(N.a)(c,2),i=s[0],o=s[1],l=function(e,t){return"all"===t?e:"low"===t?e.filter((function(e){return"low"===e.priority})):"middle"===t?e.filter((function(e){return"middle"===e.priority})):"high"===t?e.filter((function(e){return"high"===e.priority})):e}(n,i);return Object(b.jsxs)("div",{children:[Object(b.jsx)("hr",{}),"homeworks 2",Object(b.jsx)(w,{data:l,setFilter:o,deleteAffairCallback:function(e){return a(function(e,t){return e.filter((function(e){return e._id!==t}))}(n,e))},filter:i})]})},F=n(22),B=n(10),E=n.n(B),H=function(e){var t=e.name,n=e.setNameCallback,r=e.addUser,a=e.error,c=e.totalUsers,s=e.onKeyPressEnter,i=a?E.a.error:"",o=a?E.a.messageOfError:"";return Object(b.jsxs)("div",{children:[Object(b.jsx)("input",{value:t,onChange:n,className:i,onKeyPress:s}),Object(b.jsx)("button",{className:E.a.buttonAdd,disabled:!!a,onClick:r,children:"add"}),Object(b.jsx)("span",{className:E.a.totalCounter,children:c}),Object(b.jsx)("div",{children:Object(b.jsx)("span",{className:o,children:a})})]})},T=function(e){var t=e.users,n=e.addUserCallback,a=Object(r.useState)(""),c=Object(N.a)(a,2),s=c[0],i=c[1],o=Object(r.useState)(""),l=Object(N.a)(o,2),j=l[0],u=l[1],d=function(){""===s?u("Title is required"):(alert("Hello ".concat(s," !")),n(s),i(""))},h=t.length;return Object(b.jsx)(H,{name:s,setNameCallback:function(e){u(""),i(e.currentTarget.value)},addUser:d,error:j,totalUsers:h,onKeyPressEnter:function(e){13===e.charCode&&d()}})},W=n(31);var I=function(){var e=Object(r.useState)([]),t=Object(N.a)(e,2),n=t[0],a=t[1];return Object(b.jsxs)("div",{className:E.a.someClass,children:[Object(b.jsx)("hr",{}),"homeworks 3",Object(b.jsx)(T,{users:n,addUserCallback:function(e){var t={_id:Object(W.a)(),name:e};a([t].concat(Object(F.a)(n)))}}),Object(b.jsx)("hr",{}),Object(b.jsx)("hr",{})]})},L=n(6),U=n(7),M=n(15),G=n.n(M),K=function(e){e.type;var t=e.onChange,n=e.onChangeText,r=e.onKeyPress,a=e.onEnter,c=e.error,s=e.className,i=e.spanClassName,o=Object(U.a)(e,["type","onChange","onChangeText","onKeyPress","onEnter","error","className","spanClassName"]),l="".concat(G.a.error," ").concat(i||""),j="".concat(G.a.input," ").concat(c?G.a.errorInput:G.a.superInput," ").concat(s);return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("input",Object(L.a)({type:"text",onChange:function(e){t&&t(e),n&&n(e.currentTarget.value)},onKeyPress:function(e){r&&r(e),a&&"Enter"===e.key&&a()},className:j},o)),c&&Object(b.jsx)("span",{className:l,children:c})]})},J=n(19),X=n.n(J),Z=n(16),q=n.n(Z),V=function(e){var t=e.red,n=e.className,r=Object(U.a)(e,["red","className"]),a="".concat(q.a.button," ").concat(t?q.a.red:q.a.default," ").concat(n);return Object(b.jsx)("button",Object(L.a)({className:a},r))},z=n(17),D=n.n(z),Q=function(e){e.type;var t=e.onChange,n=e.onChangeChecked,r=e.className,a=(e.spanClassName,e.children),c=Object(U.a)(e,["type","onChange","onChangeChecked","className","spanClassName","children"]),s="".concat(D.a.checkbox," ").concat(r||"");return Object(b.jsxs)("label",{className:D.a.label,children:[Object(b.jsx)("input",Object(L.a)({type:"checkbox",onChange:function(e){t&&t(e),n&&n(e.currentTarget.checked)},className:s},c)),a&&Object(b.jsx)("span",{className:D.a.spanClassName,children:a})]})};var R=function(){var e=Object(r.useState)(""),t=Object(N.a)(e,2),n=t[0],a=t[1],c=n?"":"error",s=function(){c?alert("\u0432\u0432\u0435\u0434\u0438\u0442\u0435 \u0442\u0435\u043a\u0441\u0442..."):alert(n)},i=Object(r.useState)(!1),o=Object(N.a)(i,2),l=o[0],j=o[1];return Object(b.jsxs)("div",{children:[Object(b.jsx)("hr",{}),"homeworks 4",Object(b.jsxs)("div",{className:X.a.column,children:[Object(b.jsx)(K,{value:n,onChangeText:a,onEnter:s,error:c}),Object(b.jsx)(K,{className:X.a.blue}),Object(b.jsx)(V,{children:"default"}),Object(b.jsx)(V,{red:!0,onClick:s,children:"delete "}),Object(b.jsx)(V,{disabled:!0,children:"disabled"}),Object(b.jsx)(Q,{checked:l,onChangeChecked:j,children:"some text "}),Object(b.jsx)(Q,{checked:l,onChange:function(e){return j(e.currentTarget.checked)}})]}),Object(b.jsx)("hr",{}),Object(b.jsx)("hr",{})]})},Y=function(e){e.autoFocus;var t=e.onBlur,n=e.onEnter,a=e.spanProps,c=Object(U.a)(e,["autoFocus","onBlur","onEnter","spanProps"]),s=Object(r.useState)(!1),i=Object(N.a)(s,2),o=i[0],l=i[1],j=a||{},u=j.children,d=j.onDoubleClick,h=j.className,m=Object(U.a)(j,["children","onDoubleClick","className"]),O="\u0441\u0434\u0435\u043b\u0430\u0442\u044c \u043a\u0440\u0430\u0441\u0438\u0432\u044b\u0439 \u0441\u0442\u0438\u043b\u044c \u0434\u043b\u044f \u0441\u043f\u0430\u043d\u0430".concat(" ",h);return Object(b.jsx)(b.Fragment,{children:o?Object(b.jsx)(K,Object(L.a)({autoFocus:!0,onBlur:function(e){l(!1),t&&t(e)},onEnter:function(){l(!1),n&&n()}},c)):Object(b.jsx)("span",Object(L.a)(Object(L.a)({onDoubleClick:function(e){l(!0),d&&d(e)},className:O},m),{},{children:u||c.value}))})};function $(e,t){var n=JSON.stringify(t);localStorage.setItem(e,n)}function ee(e,t){var n=t,r=localStorage.getItem(e);return null!==r&&(n=JSON.parse(r)),n}$("test",{x:"A",y:1});ee("test",{x:"",y:0});var te=n.p+"static/media/pencil.d489e27e.png";var ne=function(){var e=Object(r.useState)(""),t=Object(N.a)(e,2),n=t[0],a=t[1],c={color:"#99ff99",marginLeft:"10px"},s=Object(b.jsxs)("div",{style:c,children:[Object(b.jsx)("img",{src:te,style:{backgroundColor:"transparent",width:"15px",height:"15px"},alt:"image"})," enter text..."]});return Object(b.jsxs)("div",{children:[Object(b.jsx)("hr",{}),"homeworks 6",Object(b.jsx)("div",{style:c,children:Object(b.jsx)(Y,{value:n,onChangeText:a,spanProps:{children:n?void 0:s}})}),Object(b.jsx)(V,{onClick:function(){$("editable-span-value",n)},children:"save"}),Object(b.jsx)(V,{onClick:function(){a(ee("editable-span-value",""))},children:"restore"}),Object(b.jsx)("hr",{}),Object(b.jsx)("hr",{})]})};var re=function(){return Object(b.jsxs)("div",{children:[Object(b.jsx)(C,{}),Object(b.jsx)(P,{}),Object(b.jsx)(I,{}),Object(b.jsx)(R,{}),Object(b.jsx)(ne,{})]})};var ae=function(){return Object(b.jsx)("div",{children:"HW12"})},ce="/pre-junior",se="/junior",ie="/junior+";var oe=function(){return Object(b.jsx)("div",{children:Object(b.jsxs)(j.d,{children:[Object(b.jsx)(j.b,{path:"/",element:Object(b.jsx)(j.a,{to:ce})}),Object(b.jsx)(j.b,{path:ce,element:Object(b.jsx)(re,{})}),Object(b.jsx)(j.b,{path:se,element:Object(b.jsx)(m,{})}),Object(b.jsx)(j.b,{path:ie,element:Object(b.jsx)(ae,{})}),"// add routes",Object(b.jsx)(j.b,{path:"*",element:Object(b.jsx)(h,{})})]})})},le=n(8),je=n.n(le);var ue=function(){return Object(b.jsxs)("div",{className:je.a.navlinks,children:[Object(b.jsx)("div",{className:je.a.items,children:Object(b.jsx)(l.b,{to:ce,className:function(e){return e.isActive?je.a.activeLink:""},children:"pre-junior"})}),Object(b.jsx)("div",{className:je.a.items,children:Object(b.jsx)(l.b,{to:se,className:function(e){return e.isActive?je.a.activeLink:""},children:"junior"})}),Object(b.jsx)("div",{className:je.a.items,children:Object(b.jsx)(l.b,{to:ie,className:function(e){return e.isActive?je.a.activeLink:""},children:"junior+"})}),Object(b.jsx)("div",{className:je.a.menu,children:" "})]})};var de=function(){return Object(b.jsx)("div",{children:Object(b.jsxs)(l.a,{children:[Object(b.jsx)(ue,{}),Object(b.jsx)(oe,{})]})})};var be=function(){return Object(b.jsxs)("div",{className:o.a.App,children:[Object(b.jsx)("div",{children:"react homeworks:"}),Object(b.jsx)(de,{})]})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(Object(b.jsx)(a.a.StrictMode,{children:Object(b.jsx)(be,{})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[29,1,2]]]);
//# sourceMappingURL=main.3f3213f6.chunk.js.map