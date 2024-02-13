"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[254],{1120:function(e,n,i){var a=i(7297),o=i(5893),l=i(7294),s=i(9521),r=i(5204),t=i(9692),c=i(9501),d=i(4681),m=i(2175),u=i(7886),p=i(1475),x=i(1649),h=i(5862),g=i(8357),v=i(5738);function f(){let e=(0,a.Z)(["\n  background: ",";\n  border: 1px solid ",';\n  border-radius: 22px;\n  width: 100%;\n  padding: 25px;\n  .mainHeading {\n    font-family: "Urbanist", sans-serif;\n    font-weight: 600;\n    font-size: 24px;\n    line-height: 24px;\n    color: ',";\n  }\n  .subTitle {\n    font-weight: 400;\n    font-size: 14px;\n    line-height: 24px;\n    color: ",";\n  }\n  .form-btn button {\n    background: #f35b04;\n  }\n  input,\n  textarea {\n    color: ",";\n    font-size: 14px;\n    padding: 10px 16px;\n    display: block;\n    width: 100%;\n    height: 56px;\n    background-color: ",";\n    box-sizing: border-box;\n    border: 1px solid rgba(145, 163, 169, 0.4);\n    resize: none;\n    outline: none;\n    border-radius: 8px;\n    &.textareaHeight {\n      height: 110px;\n    }\n  }\n  .bg-one {\n    background-image: url(/images/dummy/sub-head/not-checked.png);\n    background-repeat: no-repeat;\n    background-position: 8px 4px;\n    width: 125px;\n    height: 34px;\n    padding: 6px 0 6px 6px;\n    color: #68778d;\n    padding-left: 42px;\n    margin-bottom: 12px;\n    cursor: pointer;\n  }\n  .bg-one.bg-two {\n    background-image: url(/images/dummy/sub-head/checked.png);\n    color: #323a43;\n    border: 1px solid #68778d;\n    border-radius: 100px;\n    background-color: rgba(185, 181, 227, 0.4);\n    font-weight: 500;\n  }\n  .error {\n    color: #c12727;\n    font-size: 14px;\n  }\n\n  @media only screen and (min-width: 1024px) {\n    padding: 25px 40px 25px 25px;\n    border-radius: 32px;\n  }\n"]);return f=function(){return e},e}function b(){let e=(0,a.Z)(["\n  display: flex;\n  justify-content: flex-start;\n  position: relative;\n\n  .country-drop {\n    border: 1px solid rgba(80, 128, 142, 0.3);\n    display: block;\n    width: 100px;\n    height: 58px;\n    border-radius: 8px;\n    padding: 0 10px;\n    box-sizing: border-box;\n    margin-bottom: 6px;\n    margin-right: 10px;\n    background: #fff;\n    /* background: rgba(241, 245, 249, 0.4); */\n    overflow: hidden;\n  }\n  .mob-input {\n    width: auto;\n    margin-right: 0px;\n  }\n  /* .mob-input input {\n    border-radius: 0px;\n  } */\n  @media (min-width: 768px) {\n    /* .mob-input {\n      width: 298px;\n      margin-right: 20px;\n    } */\n  }\n"]);return b=function(){return e},e}function N(){let e=(0,a.Z)(["\n  background-image: url(/images/icons/select-arrow.svg);\n  background-repeat: no-repeat;\n  background-position: calc(100% - 0px) center;\n  .selected_value {\n    display: flex;\n    align-items: center;\n    height: 56px;\n    width: 66px;\n  }\n  .code {\n    font-size: 14px;\n    color: ",";\n    font-weight: 500;\n  }\n"]);return N=function(){return e},e}let _=e=>{var n,i,a;let[s,f]=(0,l.useState)(!1),[b,N]=(0,l.useState)(!0),[_,w]=(0,l.useState)(!1),[E,S]=(0,l.useState)(h.x[0]),[C,I]=(0,l.useState)(),{userDetail_res:T}=(0,x.v9)(e=>e.GDHomeApi.userDetailsApi),A=(0,x.v9)(e=>e.GDAuthApi.mobile_exist_info),R=(0,x.v9)(e=>e.GDAuthApi.email_exist_info),O=(0,x.v9)(e=>e.GDHomeApi.askforexpertApi),Z=(0,x.v9)(e=>e.GDHomeApi.askforexpertexsitingApi),L=(0,x.v9)(e=>e.GDHomeApi.askforexpertlogApi),[P,q]=(0,l.useState)(!0),D=(0,x.I0)(),H=()=>{N(!0),w(!1)},z=()=>{w(!0),N(!1)};(0,l.useEffect)(()=>{(null==T?void 0:T.fname)&&(!1==P&&q(!0),Q("userDetail",!1))},[null==T?void 0:T.fname,P]),(0,l.useEffect)(()=>{if(null==Z?void 0:Z.askforexperexsitingtList){var e,n;(null==Z?void 0:null===(e=Z.askforexperexsitingtList)||void 0===e?void 0:e.msg)&&I(null==Z?void 0:null===(n=Z.askforexperexsitingtList)||void 0===n?void 0:n.msg)}},[null==Z?void 0:null===(n=Z.askforexperexsitingtList)||void 0===n?void 0:n.msg]),(0,l.useEffect)(()=>{if(null==O?void 0:O.askforexpertList){var e,n;(null==O?void 0:null===(e=O.askforexpertList)||void 0===e?void 0:e.msg)&&I(null==O?void 0:null===(n=O.askforexpertList)||void 0===n?void 0:n.msg)}},[null==O?void 0:null===(i=O.askforexpertList)||void 0===i?void 0:i.msg]),(0,l.useEffect)(()=>{if(null==L?void 0:L.askforexpertlogList){var e,n;(null==L?void 0:null===(e=L.askforexpertlogList)||void 0===e?void 0:e.msg)&&I(null==L?void 0:null===(n=L.askforexpertlogList)||void 0===n?void 0:n.msg)}},[null==L?void 0:null===(a=L.askforexpertlogList)||void 0===a?void 0:a.msg]),(0,l.useEffect)(()=>{var e,n,i;(null==A?void 0:null===(e=A.mobile_exist_res)||void 0===e?void 0:e.phone_exists)&&!1==P&&(q(null==A?void 0:null===(n=A.mobile_exist_res)||void 0===n?void 0:n.phone_exists),Q("emailCheckedinfo",null==A?void 0:null===(i=A.mobile_exist_res)||void 0===i?void 0:i.phone_exists))},[null==A?void 0:A.mobile_exist_res]),(0,l.useEffect)(()=>{if(null==R?void 0:R.email_exist_res){var e,n;q(null==R?void 0:null===(e=R.email_exist_res)||void 0===e?void 0:e.email_exists),Q("emailCheckedinfo",null==R?void 0:null===(n=R.email_exist_res)||void 0===n?void 0:n.email_exists)}},[null==R?void 0:R.email_exist_res]);let G=e=>{if(10==e.length){D({type:p.Ap.RESET_PHONE});let n={phone_no:E.code+e};D({type:p.Ap.POST_PHONE_EXIST_REQUEST,mobiledata:n})}},B=e=>{/\S+@\S+\.\S+/.test(e)&&(D({type:p.Ap.RESET_EMAIL}),D({type:p.Ap.POST_EMAIL_EXIST_REQUEST,emaildata:{email:e}}))},F=(0,m.TA)({initialValues:{name:"",message:"",frequency:"",userDetail:null==T||!T.fname,email:"",contact:"",companyName:"",userName:"",pin:"",cityName:"",emailCheckedinfo:P},validationSchema:u.lc,onSubmit:()=>{if(X){let e={requirement_type:M.frequency,requirement:M.message,product_name:M.name};(null==T?void 0:T.fname)&&(e.userid=null==T?void 0:T.userid),(null==T?void 0:T.fname)||(e.mobile=(null==E?void 0:E.code)+M.contact,e.email=M.email.toLowerCase()),P&&(null==T?void 0:T.fname)||(e.co_name=M.companyName,e.pin_code=M.pin,e.city=M.cityName,e.name=M.userName),D({type:p.i4.RESET_ALL_ASK}),(null==T?void 0:T.fname)?D({type:p.i4.POST_ASK_FOR_EXPORT_LOGING_REQUEST,data:e}):(null==T?void 0:T.fname)||!P?D({type:p.i4.POST_ASK_FOR_EXPORT_REQUEST,data:e}):D({type:p.i4.POST_ASK_FOR_EXPORT_EXISITING_REQUEST,data:e}),F.resetForm(),Q("frequency",_)}}}),{errors:U,touched:K,values:M,handleSubmit:W,isValid:X,setFieldValue:Q,resetForm:V}=F;return(0,o.jsxs)(y,{withPopup:e.withPopup,children:["Requirements Inserted Successfully"!=C&&(0,o.jsxs)("div",{children:[(0,o.jsx)("div",{className:"mainHeading",children:"What are you looking ?"}),(0,o.jsx)("div",{className:"subTitle",children:"Fast Track Your Business"}),(0,o.jsxs)("div",{className:"d-flex mt-3 mb-2",children:[(0,o.jsx)(d.o0,{className:"".concat(b?"bg-two":""," Body4R bg-one"),color:c.Z.colors.theme_secondary[100],onClick:H,children:"Distributor"}),(0,o.jsx)(d.o0,{className:"".concat(_?"bg-two":""," Body4R bg-one ml-3"),color:c.Z.colors.theme_secondary[100],onClick:z,children:"Franchise"})]}),(0,o.jsxs)("form",{onSubmit:W,noValidate:!0,children:[(0,o.jsxs)("div",{className:"d-block d-md-flex",children:[(0,o.jsx)("div",{children:(0,o.jsx)(r.Z,{label:_?" I am looking for franchise":" I am looking for distributor",Id:"Onetime",name:"frequency",variant:"Circle",className:"mr-3 d-flex align-items-center",value:_?"LOOKING_FRANCHISE":"LOOKING_DISTRIBUTOR",onChange:e=>Q("frequency",e.target.value)})}),(0,o.jsx)("div",{children:(0,o.jsx)(r.Z,{label:_?" I want to become a franchise":" I want to become a distributor",Id:"Recurring",name:"frequency",variant:"Circle",className:"mr-3",value:_?"BECOME_FRANCHISE":"BECOME_DISTRIBUTOR",onChange:e=>{Q("frequency",e.target.value)}})})]}),U.frequency&&K.frequency&&(0,o.jsx)("span",{className:"error",children:U.frequency}),(0,o.jsxs)("div",{className:"row",children:[!(null==T?void 0:T.fname)&&(0,o.jsx)("div",{className:"col-12 mt-2",children:(0,o.jsxs)("div",{className:"row mb-3",children:[(0,o.jsxs)("div",{className:"col-12 col-md-6 mb-3 mb-md-0",children:[(0,o.jsx)("input",{type:"mail",value:M.email,onChange:e=>Q("email",e.target.value),placeholder:"Email Address",onBlur:()=>B(M.email)}),U.email&&K.email&&(0,o.jsx)("span",{className:"error",children:U.email})]}),(0,o.jsx)("div",{className:"col-12 col-md-6",children:(0,o.jsx)("div",{className:"mob-input-cont",children:(0,o.jsxs)(j,{children:[(0,o.jsx)("div",{className:"country-drop",children:(0,o.jsx)(g.Z,{selectField:(0,o.jsxs)(k,{children:[(0,o.jsxs)("div",{className:"selected_value",children:[(0,o.jsx)("img",{loading:"lazy",decoding:"async",className:"mr-2",height:"20",width:"20",src:E.flag,alt:"flag"}),(0,o.jsx)("span",{className:"code",children:E.code})]}),(0,o.jsx)("label",{className:"city_label d-none",children:"country"}),(0,o.jsx)("span",{className:"down_icon"})]}),handleOnchange:e=>{S(e)},list:h.x,isCountrySelect:!0})}),(0,o.jsxs)("div",{style:{flex:1},className:"mob-input",children:[(0,o.jsx)("input",{type:"number",value:M.contact,onChange:e=>Q("contact",e.target.value),placeholder:"Mobile Number",onBlur:()=>{G(M.contact)}}),U.contact&&K.contact&&(0,o.jsx)("span",{className:"error",children:U.contact})]})]})})})]})}),!1==P&&(0,o.jsx)("div",{className:"col-12 ",children:(0,o.jsxs)("div",{className:"row mb-3",children:[(0,o.jsxs)("div",{className:"col-12 col-md-6 mb-3 mb-md-0",children:[(0,o.jsx)("input",{type:"text",value:M.companyName,onChange:e=>Q("companyName",e.target.value),placeholder:"Company Name"}),U.companyName&&K.companyName&&(0,o.jsx)("span",{className:"error",children:U.companyName})]}),(0,o.jsxs)("div",{className:"col-12 col-md-6",children:[(0,o.jsx)("input",{type:"name",value:M.userName,onChange:e=>Q("userName",e.target.value),placeholder:"Your Name"}),U.userName&&K.userName&&(0,o.jsx)("span",{className:"error",children:U.userName})]})]})}),!1==P&&(0,o.jsx)("div",{className:"col-12 ",children:(0,o.jsxs)("div",{className:"row mb-3",children:[(0,o.jsxs)("div",{className:"col-12 col-md-6 mb-3 mb-md-0",children:[(0,o.jsx)("input",{type:"number",value:M.pin,onChange:e=>Q("pin",e.target.value),placeholder:"Pin Code"}),U.pin&&K.pin&&(0,o.jsx)("span",{className:"error",children:U.pin})]}),(0,o.jsxs)("div",{className:"col-12 col-md-6",children:[(0,o.jsx)("input",{type:"name",value:M.cityName,onChange:e=>Q("cityName",e.target.value),placeholder:"City Name"}),U.cityName&&K.cityName&&(0,o.jsx)("span",{className:"error",children:U.cityName})]})]})}),(0,o.jsxs)("div",{className:"col-12 col-lg-12 mb-3",children:[(0,o.jsx)("input",{type:"text",value:M.name,onChange:e=>Q("name",e.target.value),placeholder:"Enter Product Name"}),U.name&&K.name&&(0,o.jsx)("span",{className:"error",children:U.name})]}),(0,o.jsxs)("div",{className:"col-12 mb-3",children:[(0,o.jsx)("textarea",{name:"message",value:M.message,onChange:e=>Q("message",e.target.value),placeholder:"Type your requirment",className:"textareaHeight"}),U.message&&K.message&&(0,o.jsx)("span",{className:"error",children:U.message}),C&&(0,o.jsx)("span",{className:"error",children:C})]}),(0,o.jsx)("div",{className:"col-12 form-btn",children:(0,o.jsx)(t.WC,{size:"default",type:"submit",children:"Submit"})})]})]})]}),"Requirements Inserted Successfully"==C&&(0,o.jsx)("div",{children:(0,o.jsx)(v.Z,{setnewLatterMsg:I})})]})};n.Z=_;let y=s.ZP.div.withConfig({componentId:"sc-39cc34a0-0"})(f(),c.Z.colors.theme_card_2.background,c.Z.colors.theme_card_2.border,c.Z.colors.black,c.Z.colors.theme_info.text_color.dark_gray,c.Z.colors.theme_info.text_color.light_gray,c.Z.colors.theme_background.white),j=s.ZP.div.withConfig({componentId:"sc-39cc34a0-1"})(b()),k=s.ZP.div.withConfig({componentId:"sc-39cc34a0-2"})(N(),c.Z.colors.theme_secondary.dark)},572:function(e,n,i){var a=i(7297),o=i(5893);i(7294);var l=i(9521);function s(){let e=(0,a.Z)(["\n  .chips {\n    display: inline-block;\n    background: ",";\n    border-radius: 50px;\n    padding: ",";\n    font-weight: 400;\n    font-size: 10px;\n    line-height: 24px;\n    color: #e07f23;\n    margin-bottom: 0.5rem;\n    text-overflow: ellipsis;\n    white-space: nowrap;\n    overflow: hidden;\n    max-width:",";\n  }\n  @media (min-width: 768px) {\n    .chips {\n      padding: 3px 1rem;\n      max-width: inherit;\n    }\n  }\n"]);return s=function(){return e},e}let r=e=>(0,o.jsx)(t,{bgColor:e.bgColor,cWidth:e.cWidth,children:(0,o.jsx)("span",{className:"chips",children:e.content})});n.Z=r;let t=l.ZP.div.withConfig({componentId:"sc-8bc47e10-0"})(s(),e=>e.bgColor?e.bgColor:"#fff6ed",e=>e.cWidth?"3px 6px":"3px 1rem",e=>e.cWidth?"100px":"inherit")}}]);