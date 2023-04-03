import{_ as m,N as t,a6 as e,ad as i,a9 as s,$ as c,af as d,ae as _,ag as l,a1 as h}from"./_plugin-vue_export-helper.a7d94cf6.js";import{H as f}from"./index.e034fb80.js";const E={name:"MaterialSymbolsGTranslate"},G={xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",viewBox:"0 0 24 24"},y=i("path",{fill:"#cc6e09",d:"m12 22l-1-3H4q-.825 0-1.412-.587Q2 17.825 2 17V4q0-.825.588-1.413Q3.175 2 4 2h6l.875 3H20q.875 0 1.438.562Q22 6.125 22 7v13q0 .825-.562 1.413Q20.875 22 20 22Zm-4.85-7.4q1.725 0 2.838-1.112Q11.1 12.375 11.1 10.6q0-.2-.012-.363q-.013-.162-.063-.337h-3.95v1.55H9.3q-.2.7-.763 1.087q-.562.388-1.362.388q-.975 0-1.675-.7q-.7-.7-.7-1.725q0-1.025.7-1.725q.7-.7 1.675-.7q.45 0 .85.162q.4.163.725.488L9.975 7.55Q9.45 7 8.713 6.7q-.738-.3-1.563-.3q-1.675 0-2.862 1.187Q3.1 8.775 3.1 10.5q0 1.725 1.188 2.912Q5.475 14.6 7.15 14.6Zm6.7.5l.55-.525q-.35-.425-.637-.825q-.288-.4-.563-.85Zm1.25-1.275q.7-.825 1.063-1.575q.362-.75.487-1.175h-3.975l.3 1.05h1q.2.375.475.813q.275.437.65.887ZM13 21h7q.45 0 .725-.288Q21 20.425 21 20V7q0-.45-.275-.725Q20.45 6 20 6h-8.825l1.175 4.05h1.975V9h1.025v1.05H19v1.025h-1.275q-.25.95-.75 1.85q-.5.9-1.175 1.675l2.725 2.675L17.8 18l-2.7-2.7l-.9.925L15 19Z"},null,-1),D=[y];function $(o,u,n,A,q,g){return t(),e("svg",G,D)}const v=m(E,[["render",$]]),k={name:"FluentMdl2Streaming"},w={xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",viewBox:"0 0 2048 2048"},S=i("path",{fill:"#cc6e09",d:"M1024 779q51 0 95 19t78 53t52 77t20 96q0 51-19 95t-53 78t-77 52t-96 20q-51 0-95-19t-78-53t-52-77t-20-96q0-51 19-95t53-78t77-52t96-20zm0 384q29 0 54-11t44-29t30-44t11-55q0-29-11-54t-29-44t-44-30t-55-11q-29 0-54 11t-44 29t-30 44t-11 55q0 29 11 54t29 44t44 30t55 11zm716-855q72 71 127 154t93 174t57 189t20 199q0 101-19 199t-58 189t-93 174t-127 154l-75-75q64-64 113-138t83-156t51-169t18-178q0-90-17-177t-51-170t-83-156t-114-138l75-75zM383 383q-64 64-113 138t-84 156t-51 169t-18 178q0 90 17 177t52 170t83 156t114 138l-75 75q-72-71-127-154t-93-174t-57-189t-20-199q0-101 19-199t58-189t93-174t127-154l75 75zm1086 196q89 90 136 204t48 241q0 126-47 240t-137 205l-75-75q74-74 113-169t40-201q0-105-39-200t-114-170l75-75zm-815 75q-74 74-113 169t-40 201q0 105 39 200t114 170l-75 75q-89-90-136-204t-48-241q0-126 47-240t137-205l75 75z"},null,-1),Q=[S];function x(o,u,n,A,q,g){return t(),e("svg",w,Q)}const z=m(k,[["render",x]]);const B={props:{time:{type:String,default:""},title:{type:String,default:""},content:{type:Array,default(){return[]}},img:{type:String,default:""},imgAlt:{type:String,default:""},speakers:{type:Array,default(){return[]}},moderator:{type:Array,default(){return[]}},people:{type:Array,default(){return[]}},translate:{type:Boolean,default:!1},open:{type:Boolean,default:!1}}},V={class:"agenda-item"},Z={class:"agenda-item__time"},b={class:"programa__container-hour"},H={class:"agenda-item__content"},M={class:"agenda-item__title"},I={key:0,class:"agenda-item__list agenda-item__list--content-list"},L={class:"agenda-item__list agenda-item__list--unbullet"},T={key:0},F={class:"agenda-item__list agenda-item__list--speaker-list"},P={key:0},C={key:1},j={key:1,class:"agenda-item__addons"},J={key:2,class:"agenda-item__addons"};function K(o,u,n,A,q,g){const N=v,p=z;return t(),e("div",V,[i("section",Z,[i("h3",b,s(n.time),1)]),i("section",H,[i("h4",M,s(o.$t(n.title)),1),n.content&&n.content!=""?(t(),e("ul",I,[(t(!0),e(c,null,d(n.content,a=>(t(),e("li",null,s(o.$t(a)),1))),256))])):_("",!0),i("ul",L,[(t(!0),e(c,null,d(n.people,(a,r)=>(t(),e("li",{key:"m"+r},[a.special?(t(),e("span",T,[i("em",null,s(o.$t(a.special))+":",1)])):_("",!0),l("  "),i("strong",null,s(a.name),1),l(". "+s(a.title),1)]))),128))]),i("ul",F,[n.moderator.length>0?(t(),e("h5",P,s(o.$t("AGENDA.modera"))+":",1)):_("",!0),(t(!0),e(c,null,d(n.moderator,(a,r)=>(t(),e("li",{key:"m"+r},[i("strong",null,s(a.name),1),l(". "+s(a.title),1)]))),128)),n.speakers.length>0?(t(),e("h5",C,s(o.$t("AGENDA.ponentes"))+":",1)):_("",!0),(t(!0),e(c,null,d(n.speakers,(a,r)=>(t(),e("li",{key:"s"+r},[i("strong",null,s(a.name),1),l(". "+s(a.title),1)]))),128))]),n.translate?(t(),e("span",j,[l("* "),h(N),l(" "+s(o.$t("GEN.traduccion")),1)])):_("",!0),n.open?(t(),e("span",J,[l("** "),h(p),l(" "+s(o.$t("GEN.streaming")),1)])):_("",!0)])])}const U=m(B,[["render",K],["__scopeId","data-v-2808be43"]]),W=f("ProgramaStore",{state:()=>({agenda:{timeZones:[{title:"AGENDA.dia_1",sections:[{events:[{time:"8:45 – 9:15",title:"AGENDA.llegada"},{time:"9:15 – 9:30",title:"AGENDA.bienvenida"},{time:"9:30 – 10:00",title:"AGENDA.apertura"},{time:"10:00 – 11:30",title:"AGENDA.sesion_1.title",content:["AGENDA.sesion_1.1","AGENDA.sesion_1.2","AGENDA.sesion_1.3"]},{time:"11:30 – 12:00",title:"AGENDA.cafe"},{time:"12:00 – 13:30",title:"AGENDA.sesion_2.title",content:["AGENDA.sesion_2.1","AGENDA.sesion_2.2","AGENDA.sesion_2.3"]},{time:"13:30 – 15:00",title:"AGENDA.almuerzo"},{time:"15:00 – 16:30",title:"AGENDA.sesion_3.title",content:["AGENDA.sesion_3.1","AGENDA.sesion_3.2","AGENDA.sesion_3.3"]},{time:"16:30 – 17:00",title:"AGENDA.cafe"},{time:"17:00 – 18:00",title:"AGENDA.sesion_4.title",content:["AGENDA.sesion_4.1"]},{time:"18:00 – 18:30	",title:"AGENDA.dialogo"},{time:"18:30 – 19:00",title:"AGENDA.clausura"},{time:"19:30 – 22:30",title:"AGENDA.cena"}]}]}]}}),actions:{},getters:{getAgenda:o=>o.agenda}});export{U as _,W as u};
