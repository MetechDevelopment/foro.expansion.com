import{_ as q}from"./Logo.3a2170ae.js";import T from"./Icon.df1c552c.js";import{u as A,_ as O}from"./programa.71b6fb12.js";import{v as $,c as R,Q as V}from"./entry.71be11f0.js";import{u as j}from"./index.e034fb80.js";import{G as B,w as y,H as S,N as r,a6 as i,a1 as d,ad as o,ah as E,A as c,C as I,a7 as N,a9 as m,ae as b,_ as C,R as P,O as H,Q as F,af as L,$ as D,ab as G,ac as M,ag as U}from"./_plugin-vue_export-helper.a7d94cf6.js";import{_ as Y}from"./layout.8c03e4e9.js";import{u as z}from"./composables.5f4dc0a5.js";import"./logo-foro-2023.655ad4e7.js";const J=()=>new Date().toLocaleTimeString("es-ES",{hour:"2-digit",minute:"2-digit",second:"2-digit"}),W={class:"qrestion qrestion--is-mini"},K={class:"field"},X={class:"control"},Z=["placeholder"],ee=["placeholder"],te=B({__name:"Qrestion",setup(u){const w=y(!1),_=y(!1),f=J(),t=y(""),n=y(""),s=y(!1),l=S(()=>_.value?"QRESTION.mensaje_ok":"QRESTION.mensaje_ko"),v=S(()=>_.value?"alert--is-success":"alert--has-error"),h=j().$db,g=()=>{const a=R(h,"2023");console.log(a),t.value&&n.value.length>=5?V(a,{fecha:f,nombre:t.value,pregunta:n.value,mark:!1,source:"online"}).then(()=>{_.value=!0,t.value="",n.value=""}).catch(e=>{e.value=!1,console.error("Error writing document: ",e)}):_.value=!1,s.value=!0};return(a,e)=>{const k=T;return r(),i("section",W,[d(k,{name:"clarity:talk-bubbles-line",onClick:e[0]||(e[0]=p=>w.value=!0)}),o("div",{class:N(["qrestion__container",{"qrestion__container--is-visible":c(w)}])},[d(k,{name:"mdi:close-circle-outline",onClick:e[1]||(e[1]=p=>w.value=!1)}),o("div",K,[o("div",X,[E(o("input",{class:"input","onUpdate:modelValue":e[2]||(e[2]=p=>I(t)?t.value=p:null),type:"text",placeholder:a.$t("QRESTION.nombre")},null,8,Z),[[$,c(t)]])])]),E(o("textarea",{class:"textarea","onUpdate:modelValue":e[3]||(e[3]=p=>I(n)?n.value=p:null),rows:"10",placeholder:a.$t("QRESTION.pregunta")},null,8,ee),[[$,c(n)]]),c(s)?(r(),i("div",{key:0,class:N(["alert",c(v)])},[o("span",{class:"closebtn",onClick:e[4]||(e[4]=p=>s.value=!c(s))},"×"),o("span",null,m(a.$t(c(l))),1)],2)):b("",!0),o("button",{class:"button button has-border-danger-dark is-medium is-fullwidth mt-4",onClick:g},m(a.$t("QRESTION.boton")),1)],2)])}}});const ae=C(te,[["__scopeId","data-v-64209e8b"]]);const Q=u=>(G("data-v-15602b97"),u=u(),M(),u),oe={class:"Ponentes"},ne=Q(()=>o("div",{class:"Ponentes__container"},[U(" \\ "),o("h1",{class:"title--page-title"},"Streaming")],-1)),se=Q(()=>o("section",{class:"embed-responsive"},[o("iframe",{class:"embed-responsive-item",width:"560",height:"315",src:"https://www.youtube.com/embed/JD5fE1YOSuE",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",allowfullscreen:""})],-1)),re={key:0,class:"agenda section-description"},ie={key:0,class:"text-center"},le={key:1,class:"text-center"},ce={key:2},ue={__name:"streaming",setup(u){const _=A().getAgenda;z({script:[{src:"https://www.expansion.com/apw.js?v=2%22%3E%3C/script%3E"},{src:"https://www.expansion.com/apw.js?f=mod&v=2%22%3E%3C/script%3E"}]});const f=t=>{const n=t.target.closest(".programa__container--day"),s=n.querySelector(".programa__container-day"),l=n.querySelector(".section-wrapper");s.classList.toggle("programa__container-day--is-open"),l.classList.toggle("section-wrapper--is-open")};return P(()=>{window.ueDataLayer=window.ueDataLayer||{},window.ueDataLayer.be_page_url="https://foro.expansion.com/",window.ueDataLayer.be_page_url_qs="https://foro.expansion.com/",window.ueDataLayer.be_page_article_title="streaming",window.ueDataLayer.be_page_section="streaming",window.ueDataLayer.be_page_subsection1="",window.ueDataLayer.be_page_subsection2="",window.ueDataLayer.be_page_subsection3="",window.ueDataLayer.be_page_subsection4="",window.ueDataLayer.be_page_subsection5="",window.ueDataLayer.be_page_subsection6="",window.ueDataLayer.be_page_domain="expansion.com",window.ueDataLayer.be_page_subdomain="foro",window.ueDataLayer.be_page_hierarchy="expansion.com|foro|streaming||||||",window.ueDataLayer.be_text_seoTags="",window.ueDataLayer.be_page_site_version="",window.ueDataLayer.be_page_cms_template="otros - IV Foro Internacional Expansión",window.ueDataLayer.be_page_content_type="otros",window.ueDataLayer.be_navigation_type="origen",window.ueDataLayer.be_content_premium_detail="abierto",window.ueDataLayer.be_content_premium="0",window.ueDataLayer.be_content_signwall_detail="abierto",window.ueDataLayer.be_content_signwall="0",typeof window.utag_data>"u"&&(window.utag_data={},function(t,n,s,l){t="https://tags.tiqcdn.com/utag/unidadeditorial/expansion/prod/utag.js",n=document,s="script",l=n.createElement(s),l.src=t,l.type="text/java"+s,l.async=!0,t=n.getElementsByTagName(s)[0],t.parentNode.insertBefore(l,t)}()),typeof window.ueDataLayer.sendAnalyticsPage<"u"&&window.ueDataLayer.sendAnalyticsPage()}),(t,n)=>{const s=q,l=T,v=O,x=ae,h=Y;return r(),H(h,null,{default:F(()=>[o("div",oe,[d(s),ne,se,(r(!0),i(D,null,L(c(_).timeZones,g=>(r(),i("section",{key:g.title,class:"programa__container--day"},[o("h2",{class:"programa__container-day",onClick:f},[o("span",null,m(t.$t(g.title)),1),d(l,{name:"mdi:chevron-double-right"})]),(r(!0),i(D,null,L(g.sections,a=>(r(),i("section",{key:a.title,class:"agenda section-wrapper"},[a.title?(r(),i("div",re,[a.title!=""?(r(),i("h4",ie," ¸ "+m(t.$t(a.title)),1)):b("",!0),a.subtitle!=""?(r(),i("h5",le,m(t.$t(a.subtitle)),1)):b("",!0),a.caption!=""?(r(),i("p",ce,m(t.$t(a.caption)),1)):b("",!0)])):b("",!0),(r(!0),i(D,null,L(a.events,e=>(r(),i("article",{key:e.time,class:"agenda event-item"},[d(v,{time:e.time,title:e.title,content:e.content,speakers:e.speaker,moderator:e.moderator,translate:e.translate,people:e.people,open:e.open},null,8,["time","title","content","speakers","moderator","translate","people","open"])]))),128))]))),128))]))),128)),d(x)])]),_:1})}}},ve=C(ue,[["__scopeId","data-v-15602b97"]]);export{ve as default};