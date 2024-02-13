"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[362],{8416:function(e,n,r){var a=r(7297),t=r(5893);r(7294);var o=r(9521),i=r(5675),s=r.n(i);function c(){let e=(0,a.Z)(["\n  background-color: #eef0f3;\n  display: flex;\n  font-size: 15px;\n  align-items: center;\n  justify-content: space-around;\n  text-align: center;\n  /* border-radius: 22px 22px 0 0; */\n  border-radius:",";\n  width: 100%;\n  height: 100%;\n  object-fit:contain;\n  @media (min-width: 768px) {\n    /* border-radius: 32px 32px 0 0; */\n    border-radius:",";\n  }\n"]);return c=function(){return e},e}let l=e=>(0,t.jsx)(d,{coyDetail:e.coyDetail,children:(0,t.jsx)(s(),{src:"/images/icons/no-image.png",width:"64",height:"64",alt:"No Image Availaible"})});n.Z=l;let d=o.ZP.span.withConfig({componentId:"sc-e93fbe0b-0"})(c(),e=>e.coyDetail?"12px":"22px 22px 0 0",e=>e.coyDetail?"12px":"32px 32px 0 0")},3666:function(e,n,r){r.d(n,{Z:function(){return P}});var a=r(7297),t=r(5893),o=r(7294),i=r(9521),s=r(2175),c=r(1475),l=r(1649),d=r(7886),p=r(4681),m=r(9501),u=r(5204),h=r(9692);function g(){let e=(0,a.Z)(['\n  font-family: "Urbanist";\n  background: #fff;\n  position: absolute;\n  right: 0px;\n  top:42px;\n  z-index: 10;\n  border-radius: 12px;\n  width: 140px;\n  list-style-type: none;\n  padding: 4px 10px;\n  box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.2);\n\n  li {\n    cursor: pointer;\n    padding: 4px 0px;\n    transition: all 0.1s;\n  }\n  li:hover {\n    background: #ebebeb;\n  }\n  @media (min-width: 768px) {\n    right: 0px;\n    width: 178px;\n    padding: 10px;\n    box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.2);\n\n    li {\n      padding: 4px 10px;\n    }\n  }\n']);return g=function(){return e},e}let x=e=>(0,t.jsx)(f,{children:["1 star package","2 star package","3 star package","4 star package","5 star package"].map((n,r)=>(0,t.jsx)("li",{onClick:()=>e.setShowDropDown(!e.showDropDown),children:(0,t.jsx)(p.o0,{className:"dd-text Body3R",mfontWeight:500,dfontWeight:500,onClick:()=>e.setSelectPackage(n),children:n},r)},r))}),f=i.ZP.ul.withConfig({componentId:"sc-dd6012ea-0"})(g());var b=r(7434),y=r(5675),v=r.n(y);function j(){let e=(0,a.Z)(['\n  font-family: "Urbanist";\n  box-sizing: border-box;\n  width: 100%;\n  .main-cont {\n    width: 100%;\n  }\n  .content {\n    text-align: center;\n  }\n  .no-decoration {\n    text-decoration: none;\n  }\n  .Headline {\n    font-size: 32px;\n    font-weight: 600;\n  }\n']);return j=function(){return e},e}let w=()=>(0,t.jsx)(N,{children:(0,t.jsxs)("div",{className:"main-cont mt-4 mb-4 d-flex align-items-center flex-column p-2",children:[(0,t.jsx)(v(),{src:"/images/congragulation-msg.png",width:100,height:100,alt:"Congragulation Message","object-fit":"contain"}),(0,t.jsxs)("div",{className:"mt-5 content",children:[(0,t.jsx)("div",{className:"Headline",color:m.Z.colors.theme_secondary[900],children:"Congratulations!"}),(0,t.jsxs)(p.ks,{className:"Body3R mt-1",color:m.Z.colors.theme_secondary[600],children:["You have successfully posted your requirement",(0,t.jsx)("span",{className:"d-inline d-md-block",children:"on GetDistributors.com"})]})]})]})}),N=i.ZP.div.withConfig({componentId:"sc-ea16437d-0"})(j());var k=r(5862),O=r(8357);function C(){let e=(0,a.Z)(["\n  /* background: ","; */\n  /* border: 1px solid ",'; */\n  border-radius: 16px;\n  width: 100%;\n  padding: 16px 25px 20px 25px;\n  .mainHeading {\n    font-family: "Urbanist", sans-serif;\n    font-weight: 600;\n    font-size: 20px;\n    line-height: 24px;\n    color: ',";\n  }\n  .subTitle {\n    font-weight: 400;\n    font-size: 14px;\n    line-height: 24px;\n    color: ",";\n  }\n  .send-proposal-btn button {\n    background: #f35b04;\n  }\n  input,\n  textarea {\n    color: ",";\n    font-size: 14px;\n    padding: 10px 16px;\n    display: block;\n    width: 100%;\n    height: 56px;\n    background-color: ",';\n    box-sizing: border-box;\n    border: 1px solid rgba(145, 163, 169, 0.4);\n    resize: none;\n    outline: none;\n    border-radius: 8px;\n    &.textareaHeight {\n      height: 110px;\n    }\n  }\n  .bg-one {\n    background-image: url(/images/dummy/sub-head/not-checked.png);\n    background-repeat: no-repeat;\n    background-position: 8px 4px;\n    width: 117px;\n    height: 34px;\n    padding: 6px 0 6px 6px;\n    color: #68778d;\n    padding-left: 37px;\n    margin-bottom: 12px;\n    cursor: pointer;\n  }\n  .bg-one.bg-two {\n    background-image: url(/images/dummy/sub-head/checked.png);\n    color: #323a43;\n    border: 1px solid #68778d;\n    border-radius: 100px;\n    background-color: rgba(185, 181, 227, 0.4);\n    font-weight: 500;\n  }\n  .error {\n    color: #c12727;\n    font-size: 14px;\n  }\n  .select-package-main {\n    position: relative;\n  }\n  .font-fm {\n    font-family: "Urbanist";\n  }\n  .select-pkg {\n    background-color: #f7f7f7;\n    padding: 6px 10px;\n    cursor: pointer;\n    border-radius: 10px;\n  }\n  @media only screen and (min-width: 1024px) {\n    padding: 18px 40px 25px 25px;\n  }\n  .overflow-height {\n    height: 400px;\n    overflow: auto;\n  }\n']);return C=function(){return e},e}function _(){let e=(0,a.Z)(["\n  display: flex;\n  justify-content: flex-start;\n  position: relative;\n\n  .country-drop {\n    border: 1px solid rgba(80, 128, 142, 0.3);\n    display: block;\n    width: 100px;\n    height: 58px;\n    border-radius: 8px;\n    padding: 0 10px;\n    box-sizing: border-box;\n    margin-bottom: 6px;\n    margin-right: 10px;\n    background: #fff;\n    /* background: rgba(241, 245, 249, 0.4); */\n    overflow: hidden;\n  }\n  .mob-input {\n    width: auto;\n    margin-right: 0px;\n  }\n  /* .mob-input input {\n    border-radius: 0px;\n  } */\n  @media (min-width: 768px) {\n    /* .mob-input {\n      width: 298px;\n      margin-right: 20px;\n    } */\n  }\n"]);return _=function(){return e},e}function Z(){let e=(0,a.Z)(["\n  background-image: url(/images/icons/select-arrow.svg);\n  background-repeat: no-repeat;\n  background-position: calc(100% - 0px) center;\n  .selected_value {\n    display: flex;\n    align-items: center;\n    height: 56px;\n    width: 66px;\n  }\n  .code {\n    font-size: 14px;\n    color: ",";\n    font-weight: 500;\n  }\n"]);return Z=function(){return e},e}let S=e=>{let[n,r]=(0,o.useState)(!0),[a,i]=(0,o.useState)(!0),[g,f]=(0,o.useState)(!1),[y,v]=(0,o.useState)(!1),[j,N]=(0,o.useState)("Select Package"),[C,_]=(0,o.useState)(!1),[Z,S]=(0,o.useState)(k.x[0]),P=(0,l.I0)(),R=()=>{i(!0),f(!1)},D=()=>{f(!0),i(!1)},T=(0,s.TA)({initialValues:{name:"",message:"",email:"",contact:"",companyName:"",userName:"",pin:"",cityName:"",frequency:""},validationSchema:d.qK,onSubmit:()=>{if(A){let n="1 star";"1 star package"==j?n="1 star":"2 star package"==j?n="1 star":"3 star package"==j?n="3 star":"4 star package"==j?n="4 star":"5 star package"==j&&(n="5 star");let r={services_package:n,name:W.name,mobile:Z.code+W.contact,email:W.email,want_to_appoint:g?"Franchise":"Distributer",requirement:W.message,co_name:W.companyName,pin_code:W.pin,product_name:W.name,city:W.cityName,requirement_type:W.frequency};P({type:c.i4.POST_SEND_PROPOSAL_REQUEST,data:r}),e.setPopup(!1)}}}),{errors:q,touched:B,values:W,handleSubmit:L,isValid:A,setFieldValue:H}=T;return(0,t.jsxs)(z,{withPopup:e.withPopup,children:[(0,t.jsxs)("div",{children:["Record successfully inserted. "!=e.errorpopup&&(0,t.jsx)("div",{className:"mainHeading",children:"What are you looking ?"}),"Record successfully inserted. "!=e.errorpopup&&(0,t.jsx)("div",{className:"subTitle",children:"Fast Track Your Business"}),"Record successfully inserted. "!=e.errorpopup&&(0,t.jsxs)("div",{className:"d-flex mt-3 mb-2",children:[(0,t.jsx)(p.o0,{className:"".concat(a?"bg-two":""," Body4R bg-one "),color:m.Z.colors.theme_secondary[100],onClick:R,children:"Distributor"}),(0,t.jsx)(p.o0,{className:"".concat(g?"bg-two":""," Body4R bg-one ml-3"),color:m.Z.colors.theme_secondary[100],onClick:D,children:"Franchise"})]}),"Record successfully inserted. "!=e.errorpopup&&(0,t.jsxs)("div",{className:"d-flex justify-content-between align-items-center select-package-main mb-3",children:[(0,t.jsx)(p.o0,{className:"Body3R font-fm",mfontWeight:500,dfontWeight:500,color:m.Z.colors.theme_secondary[200],children:"Service package"}),(0,t.jsxs)(p.o0,{mfontWeight:500,dfontWeight:500,className:"Body3R select-pkg font-fm d-flex align-items-center",color:m.Z.colors.theme_secondary[100],onClick:()=>_(!C),children:[j," ",(0,t.jsx)(b.Z,{width:14,height:14,className:"ml-1"})]}),C&&(0,t.jsx)(x,{selectPackage:j,setSelectPackage:N,setShowDropDown:_,showDropDown:C})]}),"Record successfully inserted. "!=e.errorpopup&&(0,t.jsxs)("form",{onSubmit:L,noValidate:!0,className:"overflow-height",children:[(0,t.jsxs)("div",{className:"d-block d-md-flex mb-1",children:[(0,t.jsx)("div",{children:(0,t.jsx)(u.Z,{label:g?" I am looking for franchise":" I am looking for distributor",Id:"Onetimesp",name:"frequency",variant:"Circle",className:"mr-3 d-flex align-items-center",value:g?"LOOKING_FRANCHISE":"LOOKING_DISTRIBUTOR",onChange:e=>H("frequency",e.target.value)})}),(0,t.jsx)("div",{children:(0,t.jsx)(u.Z,{label:g?" I want to become a franchise":" I want to become a distributor",Id:"Recurringsp",name:"frequency",variant:"Circle",className:"mr-3",value:g?"BECOME_FRANCHISE":"BECOME_DISTRIBUTOR",onChange:e=>{H("frequency",e.target.value)}})})]}),q.frequency&&B.frequency&&(0,t.jsx)("span",{className:"error mb-2 d-block",children:q.frequency}),(0,t.jsxs)("div",{className:"row",children:[(0,t.jsx)("div",{className:"col-12 mt-2",children:(0,t.jsxs)("div",{className:"row mb-3",children:[(0,t.jsxs)("div",{className:"col-12 col-md-6 mb-3 mb-md-0",children:[(0,t.jsx)("input",{type:"mail",value:W.email,onChange:e=>H("email",e.target.value),placeholder:"Email Address"}),q.email&&B.email&&(0,t.jsx)("span",{className:"error",children:q.email})]}),(0,t.jsx)("div",{className:"col-12 col-md-6",children:(0,t.jsx)("div",{className:"mob-input-cont",children:(0,t.jsxs)(I,{children:[(0,t.jsx)("div",{className:"country-drop",children:(0,t.jsx)(O.Z,{selectField:(0,t.jsxs)(E,{children:[(0,t.jsxs)("div",{className:"selected_value",children:[(0,t.jsx)("img",{loading:"lazy",decoding:"async",className:"mr-2",height:"20",width:"20",src:Z.flag,alt:"flag"}),(0,t.jsx)("span",{className:"code",children:Z.code})]}),(0,t.jsx)("label",{className:"city_label d-none",children:"country"}),(0,t.jsx)("span",{className:"down_icon"})]}),handleOnchange:e=>{S(e)},list:k.x,isCountrySelect:!0})}),(0,t.jsxs)("div",{style:{flex:1},className:"mob-input",children:[(0,t.jsx)("input",{type:"number",value:W.contact,onChange:e=>H("contact",e.target.value),placeholder:"Mobile Number"}),q.contact&&B.contact&&(0,t.jsx)("span",{className:"error",children:q.contact})]})]})})})]})}),(0,t.jsx)("div",{className:"col-12 ",children:(0,t.jsxs)("div",{className:"row mb-3",children:[(0,t.jsxs)("div",{className:"col-12 col-md-6 mb-3 mb-md-0",children:[(0,t.jsx)("input",{type:"text",value:W.companyName,onChange:e=>H("companyName",e.target.value),placeholder:"Company Name"}),q.companyName&&B.companyName&&(0,t.jsx)("span",{className:"error",children:q.companyName})]}),(0,t.jsxs)("div",{className:"col-12 col-md-6",children:[(0,t.jsx)("input",{type:"name",value:W.userName,onChange:e=>H("userName",e.target.value),placeholder:"Your Name"}),q.userName&&B.userName&&(0,t.jsx)("span",{className:"error",children:q.userName})]})]})}),(0,t.jsx)("div",{className:"col-12 ",children:(0,t.jsxs)("div",{className:"row mb-3",children:[(0,t.jsxs)("div",{className:"col-12 col-md-6 mb-3 mb-md-0",children:[(0,t.jsx)("input",{type:"number",value:W.pin,onChange:e=>H("pin",e.target.value),placeholder:"Pin Code"}),q.pin&&B.pin&&(0,t.jsx)("span",{className:"error",children:q.pin})]}),(0,t.jsxs)("div",{className:"col-12 col-md-6",children:[(0,t.jsx)("input",{type:"name",value:W.cityName,onChange:e=>H("cityName",e.target.value),placeholder:"City Name"}),q.cityName&&B.cityName&&(0,t.jsx)("span",{className:"error",children:q.cityName})]})]})}),(0,t.jsxs)("div",{className:"col-12 col-lg-12 mb-3",children:[(0,t.jsx)("input",{type:"text",value:W.name,onChange:e=>H("name",e.target.value),placeholder:"Enter Product Name"}),q.name&&B.name&&(0,t.jsx)("span",{className:"error",children:q.name})]}),(0,t.jsxs)("div",{className:"col-12 mb-3",children:[(0,t.jsx)("textarea",{name:"message",value:W.message,onChange:e=>H("message",e.target.value),placeholder:"Type your requirment",className:"textareaHeight"}),q.message&&B.message&&(0,t.jsx)("span",{className:"error",children:q.message}),e.errorpopup&&(0,t.jsx)("span",{className:"error",children:e.errorpopup})]}),(0,t.jsx)("div",{className:"col-12 mb-5 pb-5 send-proposal-btn",children:(0,t.jsx)(h.WC,{size:"default",type:"submit",children:"Send Proposal"})})]})]})]}),(0,t.jsx)("div",{children:(0,t.jsx)(w,{})})]})};var P=S;let z=i.ZP.div.withConfig({componentId:"sc-761a53e1-0"})(C(),m.Z.colors.theme_card_2.background,m.Z.colors.theme_card_2.border,m.Z.colors.black,m.Z.colors.theme_info.text_color.dark_gray,m.Z.colors.theme_info.text_color.light_gray,m.Z.colors.theme_background.white),I=i.ZP.div.withConfig({componentId:"sc-761a53e1-1"})(_()),E=i.ZP.div.withConfig({componentId:"sc-761a53e1-2"})(Z(),m.Z.colors.theme_secondary.dark)},2802:function(e,n,r){var a=r(7294),t=r(5697),o=r.n(t);function i(){return(i=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var r=arguments[n];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e}).apply(this,arguments)}var s=(0,a.forwardRef)(function(e,n){var r=e.color,t=e.size,o=void 0===t?24:t,s=function(e,n){if(null==e)return{};var r,a,t=function(e,n){if(null==e)return{};var r,a,t={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],n.indexOf(r)>=0||(t[r]=e[r]);return t}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],!(n.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(t[r]=e[r])}return t}(e,["color","size"]);return a.createElement("svg",i({ref:n,xmlns:"http://www.w3.org/2000/svg",width:o,height:o,viewBox:"0 0 24 24",fill:"none",stroke:void 0===r?"currentColor":r,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},s),a.createElement("polyline",{points:"18 15 12 9 6 15"}))});s.propTypes={color:o().string,size:o().oneOfType([o().string,o().number])},s.displayName="ChevronUp",n.Z=s},4856:function(e,n,r){var a=r(7294),t=r(5697),o=r.n(t);function i(){return(i=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var r=arguments[n];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e}).apply(this,arguments)}var s=(0,a.forwardRef)(function(e,n){var r=e.color,t=e.size,o=void 0===t?24:t,s=function(e,n){if(null==e)return{};var r,a,t=function(e,n){if(null==e)return{};var r,a,t={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],n.indexOf(r)>=0||(t[r]=e[r]);return t}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],!(n.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(t[r]=e[r])}return t}(e,["color","size"]);return a.createElement("svg",i({ref:n,xmlns:"http://www.w3.org/2000/svg",width:o,height:o,viewBox:"0 0 24 24",fill:"none",stroke:void 0===r?"currentColor":r,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},s),a.createElement("path",{d:"M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"}),a.createElement("circle",{cx:"12",cy:"10",r:"3"}))});s.propTypes={color:o().string,size:o().oneOfType([o().string,o().number])},s.displayName="MapPin",n.Z=s},329:function(e,n,r){var a=r(7294),t=r(5697),o=r.n(t);function i(){return(i=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var r=arguments[n];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e}).apply(this,arguments)}var s=(0,a.forwardRef)(function(e,n){var r=e.color,t=e.size,o=void 0===t?24:t,s=function(e,n){if(null==e)return{};var r,a,t=function(e,n){if(null==e)return{};var r,a,t={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],n.indexOf(r)>=0||(t[r]=e[r]);return t}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],!(n.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(t[r]=e[r])}return t}(e,["color","size"]);return a.createElement("svg",i({ref:n,xmlns:"http://www.w3.org/2000/svg",width:o,height:o,viewBox:"0 0 24 24",fill:"none",stroke:void 0===r?"currentColor":r,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},s),a.createElement("path",{d:"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"}))});s.propTypes={color:o().string,size:o().oneOfType([o().string,o().number])},s.displayName="Phone",n.Z=s}}]);