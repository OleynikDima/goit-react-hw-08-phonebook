(this.webpackJsonplogin=this.webpackJsonplogin||[]).push([[4],{115:function(e,t,n){e.exports={filter:"style_filter__3GF2l",filter__input:"style_filter__input__3GdNe",filter__search:"style_filter__search__3YcZV"}},118:function(e,t,n){e.exports={container:"style_container__2Xh7w",form:"style_form__2MFG6",form_input:"style_form_input__3aSkS",form_label:"style_form_label__2rZXN",form_button:"style_form_button__V715X"}},119:function(e,t,n){e.exports={list:"style_list__1wBvn",list__item:"style_list__item__F4gP9",list__name:"style_list__name__3V6gm",list__contact:"style_list__contact__3zvWh",list__btn:"style_list__btn__2iROF"}},120:function(e,t,n){e.exports=n.p+"static/media/pngegg.7ea4af7d.png"},121:function(e,t,n){e.exports={enter:"pop_enter__3jcLu",enterActive:"pop_enterActive__1-csK",exit:"pop_exit__3sjCI",exitActive:"pop_exitActive__h2MnE"}},123:function(e,t,n){e.exports={wrapper:"style_wrapper__1AbaA"}},138:function(e,t,n){"use strict";n.r(t);var a=n(21),r=n(22),c=n(24),i=n(23),l=n(0),s=n.n(l),o=n(9),u=n(13),m=function(e){return e.contacts.items},_=function(e){return e.contacts.filter},f={getContactsItems:m,getContacts:function(e){return e.contacts},getVisibleContacts:Object(u.a)([m,_],(function(e,t){return e.filter((function(e){return e.name.toLowerCase().includes(t)}))})),getFilter:_},p=n(26),h=n(115),b=n.n(h),d=n(116),v=n.n(d),g={onChangeFindContact:p.a.changeFilter},E=Object(o.b)((function(e){return{value:f.getFilter(e)}}),g)((function(e){var t=e.value,n=e.onChangeFindContact;return s.a.createElement("div",{className:b.a.filter},s.a.createElement(v.a,{className:b.a.filter__search}),s.a.createElement("label",null,s.a.createElement("input",{className:b.a.filter__input,value:t,type:"text",onChange:function(e){return n(e.target.value)}})))})),y=n(20),N=n.n(y),C=function(e){N.a.defaults.headers.common.Authorization="Bearer ".concat(e)},j={addTask:function(e){var t=e.name,n=e.number;return function(e){e(p.a.addItemRequest()),N.a.post("/contacts",{name:t,number:n}).then((function(t){e(p.a.addItemSuccess(t.data))})).catch((function(t){return e(p.a.addItemError(t))}))}},fetchItems:function(){return function(e,t){var n=t().auth.token;n&&(C(n),e(p.a.fetchItemRequest()),N.a.get("/contacts").then((function(t){e(p.a.fetchItemSuccess(t.data))})).catch((function(t){return e(p.a.fetchItemError(t))})))}},removeItem:function(e){return function(t){t(p.a.removeItemRequest()),N.a.delete("/contacts/".concat(e)).then((function(){return t(p.a.removeItemSuccess(e))})).catch((function(e){return t(p.a.removeItemError(e))}))}}},O=n(118),A=n.n(O),I=function(e){Object(c.a)(n,e);var t=Object(i.a)(n);function n(){var e;Object(a.a)(this,n);for(var r=arguments.length,c=new Array(r),i=0;i<r;i++)c[i]=arguments[i];return(e=t.call.apply(t,[this].concat(c))).state={name:"",number:""},e.handleChangeText=function(t){e.setState({name:t.target.value})},e.handleChangeNumber=function(t){e.setState({number:t.target.value})},e.handleSubmit=function(t){t.preventDefault();var n=e.state,a=n.name,r=n.number;e.props.onAddObj({name:a,number:r}),e.setState({name:"",number:""})},e}return Object(r.a)(n,[{key:"render",value:function(){var e=this.state,t=e.name,n=e.number;return s.a.createElement("div",{className:A.a.container},s.a.createElement("form",{className:A.a.form,onSubmit:this.handleSubmit},s.a.createElement("label",{className:A.a.form_label},"Name",s.a.createElement("input",{className:A.a.form_input,type:"input",value:t,onChange:this.handleChangeText})),s.a.createElement("label",{className:A.a.form_label}," Number",s.a.createElement("input",{className:A.a.form_input,type:"input",value:n,onChange:this.handleChangeNumber})),s.a.createElement("button",{className:A.a.form_button,type:"submit",disabled:!t||!n},!0===this.props.isLoadingBtn?"Loading ":"Add contact")))}}]),n}(l.Component),x={onAddObj:j.addTask},k=Object(o.b)(null,x)(I),F=n(119),S=n.n(F),w=n(120),D=n.n(w),V=n(122),L=n.n(V),R=n(125),T=n(94),q=n(121),B=n.n(q),G={onDelete:j.removeItem},M=Object(o.b)((function(e){return{contacts:f.getVisibleContacts(e)}}),G)((function(e){var t=e.contacts,n=e.onDelete;return s.a.createElement(R.a,{component:"ul",className:S.a.list},t.map((function(e){return s.a.createElement(T.a,{key:e.id,in:!0,timeout:500,classNames:B.a,unmountOnExit:!0},s.a.createElement("li",{className:S.a.list__item,key:e.id},s.a.createElement("img",{alt:"avatar user",src:D.a,width:"30",height:"30"}),s.a.createElement("div",{className:S.a.list__contact},s.a.createElement("span",{className:S.a.list__name}," ",e.name," "),s.a.createElement("span",null,e.number," ")),s.a.createElement("button",{className:S.a.list__btn,onClick:function(){return n(e.id)},type:"submit"}," ",s.a.createElement(L.a,null))))})))})),X=n(18),z=n(123),J=n.n(z),U=function(e){Object(c.a)(n,e);var t=Object(i.a)(n);function n(){return Object(a.a)(this,n),t.apply(this,arguments)}return Object(r.a)(n,[{key:"componentDidMount",value:function(){this.props.isAuth?this.props.contactsFetch():this.props.history.replace("/login")}},{key:"componentDidUpdate",value:function(){this.props.isAuth||this.props.history.replace("/login")}},{key:"render",value:function(){return s.a.createElement("div",{className:J.a.wrapper},s.a.createElement("div",null,s.a.createElement(k,null)),s.a.createElement("div",null,s.a.createElement(E,null),s.a.createElement(M,null)))}}]),n}(l.Component),Z={contactsFetch:j.fetchItems};t.default=Object(o.b)((function(e){return{isAuth:X.a.onAuthUser(e)}}),Z)(U)}}]);
//# sourceMappingURL=4.6c73b0c8.chunk.js.map