(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{208:function(e,t,a){e.exports=a(430)},213:function(e,t,a){},430:function(e,t,a){"use strict";a.r(t);var l=a(75),n=a(76),s=a(81),i=a(77),o=a(43),c=a(82),u=a(0),d=a.n(u),m=a(16),r=a.n(m),g=(a(213),a(483)),b=a(201),p=a(476),h=a(475),E=(a(214),a(52)),y=a(89),_=a(202),f=a(477),T=a(467),C=a(469),k=a(199),N=a.n(k),B=a(200),I=a.n(B),v=a(470),O=a(482),j=a(480),D=a(471),x=a(472),S=a(481);var R=function(e){var t=d.a.useState(!1),a=Object(_.a)(t,2),l=a[0],n=a[1],s="tuileDoubleRebondOri",i="doubleRebondTulletIcon",o="",c=function(){n(!1)};return e.keyId?(o=e.keyId,s="tuileDoubleRebond"+e.keyId,i="doubleRebondTulletIcon"+e.keyId):o="original",d.a.createElement("div",{className:"tuileDoubleRebond contentManage"},d.a.createElement("h2",null,e.title),d.a.createElement(T.a,null,d.a.createElement(C.a,null,e.hasText&&d.a.createElement(f.a,{fullWidth:!0,className:s+" fieldTuileDoubleRebond",keyid:o,onChange:function(t){e.handleChangeInput(t,!1,"text")},onFocus:function(){document.getElementsByClassName(i)[0].style.backgroundColor="rgb(92, 183, 216)"},onBlur:function(e){document.getElementsByClassName(i)[0].style.backgroundColor=""},label:"Text",value:e.static_double?e.static_double.text:""}),d.a.createElement(f.a,{fullWidth:!0,className:s+" fieldTuileDoubleRebond",keyid:o,onChange:function(t){e.handleChangeInput(t,!1,"image")},onFocus:function(){document.getElementsByClassName(i)[0].style.backgroundColor="rgb(92, 183, 216)"},onBlur:function(e){document.getElementsByClassName(i)[0].style.backgroundColor=""},label:e.title.indexOf("Top")>-1?"Image 600*318px":"Image 621*397px",value:e.static_double?e.static_double.image:"",InputProps:{endAdornment:d.a.createElement(O.a,{position:"end"},d.a.createElement(v.a,{edge:"end","aria-label":"Toggle Image",onClick:function(){n(!0)}},d.a.createElement(N.a,{size:"small"})))}}),d.a.createElement(j.a,{"aria-labelledby":"simple-modal-title","aria-describedby":"simple-modal-description",open:l,onClose:c},d.a.createElement(D.a,{container:!0,spacing:0,direction:"row",alignItems:"center",justify:"center",style:{minHeight:"100vh",maxHeight:"100%",overflow:"auto"}},d.a.createElement(D.a,{className:"displayPreviewImage",item:!0,sm:9,xs:10},d.a.createElement("img",{src:e.static_double?e.static_double.image:"",alt:e.static_double?e.static_double.image:""}),d.a.createElement("div",{className:"closeButton"},d.a.createElement(x.a,{color:"secondary",onClick:c,size:"small",className:"fabWrapperCloseButton"},d.a.createElement(I.a,{className:"closeColor"})))))),d.a.createElement(f.a,{fullWidth:!0,className:s+" fieldTuileDoubleRebond",keyid:e.keyId,onChange:function(t){e.handleChangeInput(t,!1,"link")},onFocus:function(){document.getElementsByClassName(i)[0].style.backgroundColor="rgb(92, 183, 216)"},onBlur:function(e){document.getElementsByClassName(i)[0].style.backgroundColor=""},label:"Lien",onClick:c,value:e.static_double?e.static_double.link:"",InputProps:{endAdornment:d.a.createElement(O.a,{position:"end"},d.a.createElement(S.a,{checked:!!e.static_double&&e.static_double.target_blank,onChange:function(){e.handleTargetBlank(o)},value:"target_blank",inputProps:{"aria-label":"primary checkbox"}}))}}))))},w=function(e){return d.a.createElement("div",{className:"tuileDouble contentManage"},d.a.createElement("h2",null,"Tuile double"),d.a.createElement(T.a,null,d.a.createElement(C.a,null,d.a.createElement(f.a,{className:"fieldTuileDouble",fullWidth:!0,onChange:function(t){e.handleChangeInput(t)},onFocus:function(){document.getElementsByClassName("doublesimpleTulletIcon")[0].style.backgroundColor="rgb(92, 183, 216)"},onBlur:function(e){document.getElementsByClassName("doublesimpleTulletIcon")[0].style.backgroundColor=""},label:"Course_id: 9",value:e.double?e.double:""}))))},L=function(e){return d.a.createElement("div",{className:"tuilesSimple contentManage"},d.a.createElement("h2",null,"Tuiles simples"),d.a.createElement(T.a,{className:"card"},d.a.createElement(C.a,{className:"inputLilTuile"},e.single.map(function(t,a){return d.a.createElement(f.a,{className:"fieldSingle",key:a,fullWidth:!0,onChange:function(t){e.handleChangeInput(t,a)},label:"Course_id: "+parseInt(a+1),onFocus:function(){document.getElementsByClassName("simpleTulletIcon")[a].style.backgroundColor="rgb(92, 183, 216)"},onBlur:function(e){document.getElementsByClassName("simpleTulletIcon")[a].style.backgroundColor=""},value:t})}))))},W=a(473),H=a(431),F=function(e){function t(){return Object(l.a)(this,t),Object(s.a)(this,Object(i.a)(t).apply(this,arguments))}return Object(c.a)(t,e),Object(n.a)(t,[{key:"render",value:function(){var e=this;return d.a.createElement(T.a,{id:"cardSidebar"},d.a.createElement(C.a,null,d.a.createElement(D.a,{className:"sidebarTulletWrapper",container:!0,direction:"row",justify:"space-between",alignItems:"stretch"},d.a.createElement(D.a,{item:!0,xs:4},d.a.createElement(H.a,{className:" doubleRebondTulletIcon1 sidebarTullet noselect",onClick:function(e){document.getElementsByClassName("tuileDoubleRebond1")[0].getElementsByTagName("input")[0].focus()}},"Tuile Top 1")),d.a.createElement(D.a,{item:!0,xs:4},d.a.createElement(H.a,{className:"doubleRebondTulletIcon2 sidebarTullet noselect",onClick:function(e){document.getElementsByClassName("tuileDoubleRebond2")[0].getElementsByTagName("input")[0].focus()}},"Tuile Top 2")),d.a.createElement(D.a,{item:!0,xs:4},d.a.createElement(H.a,{className:"doubleRebondTulletIcon3 sidebarTullet noselect",onClick:function(e){document.getElementsByClassName("tuileDoubleRebond3")[0].getElementsByTagName("input")[0].focus()}},"Tuile Top 3")),d.a.createElement(D.a,{item:!0,xs:3},d.a.createElement(H.a,{className:"simpleTulletIcon sidebarTullet noselect",onClick:function(e){document.getElementsByClassName("fieldSingle")[0].getElementsByTagName("input")[0].focus()}},"Tuile 1")),d.a.createElement(D.a,{item:!0,xs:3},d.a.createElement(H.a,{className:"simpleTulletIcon sidebarTullet noselect",onClick:function(e){document.getElementsByClassName("fieldSingle")[1].getElementsByTagName("input")[0].focus()}},"Tuile 2")),d.a.createElement(D.a,{item:!0,xs:6},d.a.createElement(H.a,{className:"doubleRebondTulletIcon sidebarTullet noselect",onClick:function(e){document.getElementsByClassName("tuileDoubleRebondOri")[0].getElementsByTagName("input")[0].focus()}},"Double rebond")),d.a.createElement(D.a,{item:!0,xs:3},d.a.createElement(H.a,{className:"simpleTulletIcon sidebarTullet noselect",onClick:function(e){document.getElementsByClassName("fieldSingle")[2].getElementsByTagName("input")[0].focus()}},"Tuile  3")),d.a.createElement(D.a,{item:!0,xs:3},d.a.createElement(H.a,{className:"simpleTulletIcon sidebarTullet noselect",onClick:function(e){document.getElementsByClassName("fieldSingle")[3].getElementsByTagName("input")[0].focus()}},"Tuile 4")),d.a.createElement(D.a,{item:!0,xs:6},d.a.createElement(H.a,{className:"doublesimpleTulletIcon sidebarTullet noselect",onClick:function(e){document.getElementsByClassName("fieldTuileDouble")[0].getElementsByTagName("input")[0].focus()}},"Double")),d.a.createElement(D.a,{item:!0,xs:3},d.a.createElement(H.a,{className:"simpleTulletIcon sidebarTullet noselect",onClick:function(e){document.getElementsByClassName("fieldSingle")[4].getElementsByTagName("input")[0].focus()}},"Tuile 5")),d.a.createElement(D.a,{item:!0,xs:3},d.a.createElement(H.a,{className:"simpleTulletIcon sidebarTullet noselect",onClick:function(e){document.getElementsByClassName("fieldSingle")[5].getElementsByTagName("input")[0].focus()}},"Tuile 6")),d.a.createElement(D.a,{item:!0,xs:3},d.a.createElement(H.a,{className:"simpleTulletIcon sidebarTullet noselect",onClick:function(e){document.getElementsByClassName("fieldSingle")[6].getElementsByTagName("input")[0].focus()}},"Tuile 7")),d.a.createElement(D.a,{item:!0,xs:3},d.a.createElement(H.a,{className:"simpleTulletIcon sidebarTullet noselect",onClick:function(e){document.getElementsByClassName("fieldSingle")[7].getElementsByTagName("input")[0].focus()}},"Tuile 8")))),d.a.createElement("div",{id:"buttonWrapper"},this.props.hasValidated&&d.a.createElement("div",null,d.a.createElement("p",null,"Your changes were saved."),d.a.createElement("p",null,"It may take time for the homepage to update due to caching policy."),d.a.createElement("p",null,"Please be patient to see your changes reflected.")),d.a.createElement(W.a,{className:"submitJson",color:"primary",size:"small",variant:"outlined",onClick:function(t){e.props.handleSubmit(t)}},"Submit"),d.a.createElement("div",{id:"cancel"},d.a.createElement(W.a,{className:"reinitJson",color:"secondary",size:"small",variant:"outlined",onClick:function(t){e.props.handleCancel(e.props.handleInputLang)}},"Cancel"),d.a.createElement("p",{id:"warningChange"},"Modifications in progress."))))}}]),t}(d.a.Component),M=a(119),P=a.n(M),J=a(479),V=a(474),z=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(s.a)(this,Object(i.a)(t).call(this,e))).handleChangeInput=a.handleChangeInput.bind(Object(o.a)(a)),a.handleCancel=a.handleCancel.bind(Object(o.a)(a)),a.handleSubmit=a.handleSubmit.bind(Object(o.a)(a)),a.handleChangeLang=a.handleChangeLang.bind(Object(o.a)(a)),a.hightlight=a.hightlight.bind(Object(o.a)(a)),a.handleTargetBlank=a.handleTargetBlank.bind(Object(o.a)(a)),a.state={lang:"fr",static_double_top:[],single:[],double:"",static_double:{},hasValidated:!1},a}return Object(c.a)(t,e),Object(n.a)(t,[{key:"handleChangeInput",value:function(e,t,a){if(t||0===t){var l=this.state.single;l[t]=e.target.value,this.setState({single:l})}else if(a){if(Object(y.a)(e.target.parentNode.parentNode.classList).includes("tuileDoubleRebondOri")){var n=this.state.static_double,s=e.target.value;this.setState(function(e){return Object.assign({},e.static_double),n[a]=s,{static_double:n}})}else{var i=Object(y.a)(e.target.parentNode.parentNode.attributes)[1].value,o=e.target.value,c=this.state.static_double_top;this.setState(function(e){return Object.assign(c,e.static_double_top),c[parseInt(i)-1][a]=o,{static_double_top:c}})}}else this.setState({double:e.target.value})}},{key:"handleSubmit",value:function(){var e=this.props.data,t=!1,a=!1,l=!1;"undefined"!==typeof this.state.static_double_top[0].target_blank&&(t=this.state.static_double_top[0].target_blank),"undefined"!==typeof!this.state.static_double_top[1].target_blank&&(a=this.state.static_double_top[1].target_blank),"undefined"!==typeof!this.state.static_double_top[2].target_blank&&(l=this.state.static_double_top[2].target_blank);var n={static_double_top:[{text:this.state.static_double_top[0].text,image:this.state.static_double_top[0].image,link:this.state.static_double_top[0].link,target_blank:t},{text:this.state.static_double_top[1].text,image:this.state.static_double_top[1].image,link:this.state.static_double_top[1].link,target_blank:a},{text:this.state.static_double_top[2].text,image:this.state.static_double_top[2].image,link:this.state.static_double_top[2].link,target_blank:l}],single:this.state.single,double:this.state.double,static_double:{image:this.state.static_double.image,link:this.state.static_double.link,target_blank:this.state.static_double.target_blank}};e[this.state.lang]=n,this.updateHomepageData(e)}},{key:"updateHomepageData",value:function(e){var t=this;fetch("/tma_cms_apps/api/v1/microsite_manager/"+window.props.siteID+"/homepage/",{credentials:"same-origin",method:"PUT",body:JSON.stringify(e),headers:{Accept:"application/json","Content-Type":"application/json","X-CSRFToken":window.csrf}}).then(function(e){return e.json()}).then(function(e){console.log("success"),t.setState({hasValidated:!0})})}},{key:"handleCancel",value:function(){this.setState({static_double_top:[Object(E.a)({},this.props.data[this.state.lang].static_double_top[0]),Object(E.a)({},this.props.data[this.state.lang].static_double_top[1]),Object(E.a)({},this.props.data[this.state.lang].static_double_top[2])],single:Object(y.a)(this.props.data[this.state.lang].single),double:this.props.data[this.state.lang].double,static_double:Object(E.a)({},this.props.data[this.state.lang].static_double)})}},{key:"handleChangeLang",value:function(e,t){var a="";if("en"===t)a="en";else{if("fr"!==t)return;a="fr"}this.setState({lang:a,static_double_top:[Object(E.a)({},this.props.data[a].static_double_top[0]),Object(E.a)({},this.props.data[a].static_double_top[1]),Object(E.a)({},this.props.data[a].static_double_top[2])],single:Object(y.a)(this.props.data[a].single),double:this.props.data[a].double,static_double:Object(E.a)({},this.props.data[a].static_double)})}},{key:"handleTargetBlank",value:function(e){if("original"===e){var t=this.state.static_double;this.setState(function(e){return Object.assign({},e.static_double),e.static_double.target_blank?t.target_blank=!1:t.target_blank=!0,{static_double:t}})}else{var a=this.state.static_double_top;this.setState(function(t){return Object.assign({},t.static_double_top[e-1]),t.static_double_top[e-1].target_blank?a[e-1].target_blank=!1:a[e-1].target_blank=!0,{static_double_top:a}})}}},{key:"hightlight",value:function(e,t){var a=this;for(var l in this.state.single.filter(function(e,t){return a.props.data[a.state.lang].single[t]===e?(document.getElementsByClassName("fieldSingle")[t].getElementsByTagName("input")[0].style.color="",null):(document.getElementsByClassName("fieldSingle")[t].getElementsByTagName("input")[0].style.color="orange",null)}),this.state.double!==this.props.data[this.state.lang].double?document.getElementsByClassName("fieldTuileDouble")[0].getElementsByTagName("input")[0].style.color="orange":document.getElementsByClassName("fieldTuileDouble")[0].getElementsByTagName("input")[0].style.color="",this.state.static_double.image!==this.props.data[this.state.lang].static_double.image?document.getElementsByClassName("tuileDoubleRebondOri")[0].getElementsByTagName("input")[0].style.color="orange":document.getElementsByClassName("tuileDoubleRebondOri")[0].getElementsByTagName("input")[0].style.color="",this.state.static_double.link!==this.props.data[this.state.lang].static_double.link?document.getElementsByClassName("tuileDoubleRebondOri")[1].getElementsByTagName("input")[0].style.color="orange":document.getElementsByClassName("tuileDoubleRebondOri")[1].getElementsByTagName("input")[0].style.color="",this.state.static_double_top)this.state.static_double_top[l].text!==this.props.data[this.state.lang].static_double_top[l].text?document.getElementById("tuileTop").getElementsByClassName("tuileDoubleRebond")[l].getElementsByTagName("input")[0].style.color="orange":document.getElementById("tuileTop").getElementsByClassName("tuileDoubleRebond")[l].getElementsByTagName("input")[0].style.color="",this.state.static_double_top[l].image!==this.props.data[this.state.lang].static_double_top[l].image?document.getElementById("tuileTop").getElementsByClassName("tuileDoubleRebond")[l].getElementsByTagName("input")[1].style.color="orange":document.getElementById("tuileTop").getElementsByClassName("tuileDoubleRebond")[l].getElementsByTagName("input")[1].style.color="",this.state.static_double_top[l].link!==this.props.data[this.state.lang].static_double_top[l].link?document.getElementById("tuileTop").getElementsByClassName("tuileDoubleRebond")[l].getElementsByTagName("input")[2].style.color="orange":document.getElementById("tuileTop").getElementsByClassName("tuileDoubleRebond")[l].getElementsByTagName("input")[2].style.color=""}},{key:"componentDidUpdate",value:function(e,t,a){t.single.length>0&&(P.a.isEqual(P.a.omit(this.state,["lang"]),this.props.data[this.state.lang])?document.getElementById("cancel").style.display="none":document.getElementById("cancel").style.display="block"),this.hightlight(this.props.data[this.state.lang],P.a.omit(t,["lang","lang"]))}},{key:"componentDidMount",value:function(){this.handleCancel()}},{key:"render",value:function(){return d.a.createElement("div",{className:"wrapper-hp"},this.props.data&&this.state.static_double_top.length>1&&d.a.createElement("div",{id:"mainWrapper"},d.a.createElement(J.a,{value:this.state.lang,indicatorColor:"primary",textColor:"primary",onChange:this.handleChangeLang},d.a.createElement(V.a,{label:"Fr",value:"fr"}),d.a.createElement(V.a,{label:"En",value:"en"})),d.a.createElement("div",{id:"tuileTop"},d.a.createElement(R,{handleTargetBlank:this.handleTargetBlank,handleChangeInput:this.handleChangeInput,keyId:1,static_double:this.state.static_double_top[0],title:"Tuile Top 1",hasText:!0}),d.a.createElement(R,{handleTargetBlank:this.handleTargetBlank,handleChangeInput:this.handleChangeInput,keyId:2,static_double:this.state.static_double_top[1],title:"Tuile Top 2",hasText:!0}),d.a.createElement(R,{handleTargetBlank:this.handleTargetBlank,handleChangeInput:this.handleChangeInput,keyId:3,static_double:this.state.static_double_top[2],title:"Tuile Top 3",hasText:!0})),d.a.createElement(L,{handleChangeInput:this.handleChangeInput,single:this.state.single}),d.a.createElement(R,{handleTargetBlank:this.handleTargetBlank,handleChangeInput:this.handleChangeInput,static_double:this.state.static_double,title:"Tuile double rebond",hasText:!1}),d.a.createElement(w,{handleChangeInput:this.handleChangeInput,double:this.state.double})),d.a.createElement(F,{handleSubmit:this.handleSubmit,handleCancel:this.handleCancel,handleInputLang:this.state.lang,hasValidated:this.state.hasValidated}))}}]),t}(d.a.Component),A=Object(b.a)({palette:{primary:{main:"#5cb7d8"},secondary:h.a},background:"#5cb7d8"}),U=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(s.a)(this,Object(i.a)(t).call(this,e))).fetchHomepageData=a.fetchHomepageData.bind(Object(o.a)(a)),a.state={data:null,isLoaded:!1},a}return Object(c.a)(t,e),Object(n.a)(t,[{key:"fetchHomepageData",value:function(){var e=this,t={};fetch("/tma_cms_apps/api/v1/microsite_manager/"+window.props.siteID+"/homepage/",{credentials:"same-origin",method:"GET"}).then(function(e){return e.json()}).then(function(a){t=a,e.setState({data:t,isLoaded:!0})})}},{key:"componentDidMount",value:function(){this.fetchHomepageData()}},{key:"render",value:function(){return d.a.createElement("div",null,d.a.createElement("h1",{className:"title"},"Administration",d.a.createElement("a",{id:"manageImage",href:"https://studio-new.phileasamundi.com/assets/course-v1:global+000+2019/"},"Manage images")),this.state.isLoaded&&d.a.createElement(z,{data:this.state.data}))}}]),t}(d.a.Component);r.a.render(d.a.createElement(p.a,{theme:A},d.a.createElement(g.a,null),d.a.createElement(U,null)),document.getElementById("root"))}},[[208,1,2]]]);
//# sourceMappingURL=main.c08b9757.chunk.js.map