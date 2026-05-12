"use strict";(self.webpackChunk_sihm_cms=self.webpackChunk_sihm_cms||[]).push([[2904],{62904(H,T,t){t.d(T,{ProtectedListPage:()=>ct});var s=t(84636),c=t(10144),x=t(18009),M=t(29095),C=t(80829),b=t(38732),W=t(29381),g=t(46365),i=t(48571),o=t(85462),h=t(55549),d=t(32809),f=t(51400),p=t(28159),D=t(57769),l=t(3427),P=t(84791),O=t(44893),k=t(92153),I=t(95885),J=t(93467);const R=J.Ay.div`
  background: ${({theme:n})=>n.colors.danger500};
  border: none;
  border-radius: 16px;
  position: relative;
  height: ${24/16}rem;
  width: ${40/16}rem;

  & span {
    font-size: ${({visibleLabels:n})=>n?"1rem":0};
  }

  &:before {
    content: '';
    background: ${({theme:n})=>n.colors.neutral0};
    width: 1rem;
    height: 1rem;
    border-radius: 50%;
    position: absolute;
    transition: all 0.5s;
    left: ${({theme:n})=>n.spaces[1]};
    top: ${({theme:n})=>n.spaces[1]};
  }

  @media (prefers-reduced-motion: reduce) {
    &:before {
      transition: none;
    }
  }
`,st=J.Ay.button`
  background: transparent;
  padding: 0;
  border: none;

  &[aria-checked='true'] ${R} {
    background: ${({theme:n})=>n.colors.success500};
  }

  &[aria-checked='true'] ${R}:before {
    transform: translateX(1rem);
  }
`,ot=c.forwardRef(({label:n,onChange:u,onLabel:L="On",offLabel:E="Off",selected:j,visibleLabels:m=!1,...F},a)=>(0,s.jsx)(st,{ref:a,role:"switch","aria-checked":j,"aria-label":n,onClick:u,visibleLabels:m,type:"button",...F,children:(0,s.jsxs)(I.s,{children:[(0,s.jsxs)(R,{children:[(0,s.jsx)("span",{children:L}),(0,s.jsx)("span",{children:E})]}),m&&(0,s.jsx)(h.a,{as:"span","aria-hidden":!0,paddingLeft:2,color:j?"success600":"danger600",children:j?L:E})]})}));var V=t(8113),et=t(84811),at=t(50342),v=t(9314),U=t(59674),Y=t(12580),nt=t(53381),rt=t(40465),dt=t(60470),Z=t(68671),it=t(95125),w=t(49175),lt=t(71702),Ct=t(90206),bt=t(92363),Wt=t(56414),Et=t(33808),St=t(25715),At=t(16646),Dt=t(79693),Pt=t(75255),Lt=t(72534),$t=t(90683),Bt=t(5871),pt=t(61193),Ot=t(27578),kt=t(6656),It=t(58436),Rt=t(85246),Ut=t(47944),Ft=t(57866),Kt=t(97304),Nt=t(42005),zt=t(35225),Qt=t(47010),Xt=t(80571),Gt=t(17988),Ht=t(41324),Jt=t(29165),Vt=t(35334),Yt=t(70584),Zt=t(78982),wt=t(63698),qt=t(30272),_t=t(89396),ts=t(58029),ss=t(52393),os=t(62027),es=t(37360),as=t(20709),ns=t(41395),rs=t(92117),ds=t(93835),is=t(3346),ls=t(34789),hs=t(10258),cs=t(94665),gs=t(44653);const ht=()=>{const[n,u]=c.useState(!1),[L,E]=c.useState(!1),[j,m]=c.useState([]),F=(0,w.j)(e=>e.admin_app.permissions.settings?.webhooks),{formatMessage:a}=(0,dt.A)(),{_unstableFormatAPIError:$}=(0,v.wq)(),y=(0,v.hN)();(0,v.L4)();const{push:gt}=(0,Z.W6)(),{pathname:q}=(0,Z.zy)(),{isLoading:mt,allowedActions:{canCreate:K,canUpdate:N,canDelete:_}}=(0,v.ec)(F),{notifyStatus:tt}=(0,x.W)(),{isLoading:vt,webhooks:S,error:z,updateWebhook:ut,deleteManyWebhooks:xt}=(0,lt.u)();c.useEffect(()=>{if(z){y({type:"warning",message:$(z)});return}S&&tt(a({id:"Settings.webhooks.list.loading.success",defaultMessage:"Webhooks have been loaded"}))},[S,z,y,a,tt,$]);const ft=async e=>{try{const r=await ut(e);"error"in r&&y({type:"warning",message:$(r.error)})}catch{y({type:"warning",message:{id:"notification.error",defaultMessage:"An error occurred"}})}},jt=async()=>{try{E(!0);const e=await xt({ids:j});if("error"in e){y({type:"warning",message:$(e.error)});return}m([])}catch{y({type:"warning",message:{id:"notification.error",defaultMessage:"An error occurred"}})}finally{E(!1),u(!1)}},yt=e=>m(e?S?.map(r=>r.id)??[]:[]),Tt=(e,r)=>m(e?G=>[...G,r]:G=>G.filter(Mt=>Mt!==r)),Q=e=>()=>gt(`${q}/${e}`),X=mt||vt,B=S?.length??0,A=j.length;return(0,s.jsxs)(M.P,{children:[(0,s.jsx)(v.x7,{name:"Webhooks"}),(0,s.jsxs)(C.g,{"aria-busy":X,children:[(0,s.jsx)(b.Q,{title:a({id:"Settings.webhooks.title",defaultMessage:"Webhooks"}),subtitle:a({id:"Settings.webhooks.list.description",defaultMessage:"Get POST changes notifications"}),primaryAction:K&&!X&&(0,s.jsx)(at.z,{as:it.k2,startIcon:(0,s.jsx)(U.A,{}),variant:"default",to:`${q}/create`,size:"S",children:a({id:"Settings.webhooks.list.button.add",defaultMessage:"Create new webhook"})})}),A>0&&_&&(0,s.jsx)(W.B,{startActions:(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(g.o,{variant:"epsilon",textColor:"neutral600",children:a({id:"Settings.webhooks.to.delete",defaultMessage:"{webhooksToDeleteLength, plural, one {# webhook} other {# webhooks}} selected"},{webhooksToDeleteLength:A})}),(0,s.jsx)(i.$,{onClick:()=>u(!0),startIcon:(0,s.jsx)(Y.A,{}),size:"L",variant:"danger-light",children:a({id:"global.delete",defaultMessage:"Delete"})})]})}),(0,s.jsx)(o.s,{children:X?(0,s.jsx)(h.a,{background:"neutral0",padding:6,shadow:"filterShadow",hasRadius:!0,children:(0,s.jsx)(v.Bl,{})}):B>0?(0,s.jsxs)(d.X,{colCount:5,rowCount:B+1,footer:(0,s.jsx)(f.S,{onClick:Q("create"),icon:(0,s.jsx)(U.A,{}),children:a({id:"Settings.webhooks.list.button.add",defaultMessage:"Create new webhook"})}),children:[(0,s.jsx)(p.d,{children:(0,s.jsxs)(D.Tr,{children:[(0,s.jsx)(l.Th,{children:(0,s.jsx)(P.J,{"aria-label":a({id:"global.select-all-entries",defaultMessage:"Select all entries"}),indeterminate:A>0&&A<B,value:A===B,onValueChange:yt})}),(0,s.jsx)(l.Th,{width:"20%",children:(0,s.jsx)(g.o,{variant:"sigma",textColor:"neutral600",children:a({id:"global.name",defaultMessage:"Name"})})}),(0,s.jsx)(l.Th,{width:"60%",children:(0,s.jsx)(g.o,{variant:"sigma",textColor:"neutral600",children:a({id:"Settings.webhooks.form.url",defaultMessage:"URL"})})}),(0,s.jsx)(l.Th,{width:"20%",children:(0,s.jsx)(g.o,{variant:"sigma",textColor:"neutral600",children:a({id:"Settings.webhooks.list.th.status",defaultMessage:"Status"})})}),(0,s.jsx)(l.Th,{children:(0,s.jsx)(O.s,{children:a({id:"Settings.webhooks.list.th.actions",defaultMessage:"Actions"})})})]})}),(0,s.jsx)(k.N,{children:S?.map(e=>(0,s.jsxs)(D.Tr,{onClick:N?Q(e.id):void 0,style:{cursor:N?"pointer":"default"},children:[(0,s.jsx)(l.Td,{onClick:r=>r.stopPropagation(),children:(0,s.jsx)(P.J,{"aria-label":`${a({id:"global.select",defaultMessage:"Select"})} ${e.name}`,value:j?.includes(e.id),onValueChange:r=>Tt(r,e.id),name:"select"})}),(0,s.jsx)(l.Td,{children:(0,s.jsx)(g.o,{fontWeight:"semiBold",textColor:"neutral800",children:e.name})}),(0,s.jsx)(l.Td,{children:(0,s.jsx)(g.o,{textColor:"neutral800",children:e.url})}),(0,s.jsx)(l.Td,{children:(0,s.jsx)(I.s,{children:(0,s.jsx)(ot,{onLabel:a({id:"global.enabled",defaultMessage:"Enabled"}),offLabel:a({id:"global.disabled",defaultMessage:"Disabled"}),label:`${e.name} ${a({id:"Settings.webhooks.list.th.status",defaultMessage:"Status"})}`,selected:e.isEnabled,onChange:r=>{r.stopPropagation(),ft({...e,isEnabled:!e.isEnabled})},visibleLabels:!0})})}),(0,s.jsx)(l.Td,{children:(0,s.jsxs)(I.s,{gap:1,children:[N&&(0,s.jsx)(V.K,{label:a({id:"Settings.webhooks.events.update",defaultMessage:"Update"}),icon:(0,s.jsx)(nt.A,{}),noBorder:!0}),_&&(0,s.jsx)(V.K,{onClick:r=>{r.stopPropagation(),m([e.id]),u(!0)},label:a({id:"Settings.webhooks.events.delete",defaultMessage:"Delete webhook"}),icon:(0,s.jsx)(Y.A,{}),noBorder:!0})]})})]},e.id))})]}):(0,s.jsx)(et.p,{icon:(0,s.jsx)(rt.A,{width:"160px"}),content:a({id:"Settings.webhooks.list.empty.description",defaultMessage:"No webhooks found"}),action:(0,s.jsx)(i.$,{variant:"secondary",startIcon:(0,s.jsx)(U.A,{}),disabled:!K,onClick:K?Q("create"):void 0,children:a({id:"Settings.webhooks.list.button.add",defaultMessage:"Create new webhook"})})})})]}),(0,s.jsx)(v.TM,{isOpen:n,onToggleDialog:()=>u(e=>!e),onConfirm:jt,isConfirmButtonLoading:L})]})},ct=()=>{const n=(0,w.j)(u=>u.admin_app.permissions.settings?.webhooks.main);return(0,s.jsx)(v.kz,{permissions:n,children:(0,s.jsx)(ht,{})})}},71702(H,T,t){t.d(T,{u:()=>g});var s=t(49175);const c=s.n.injectEndpoints({endpoints:i=>({getWebhooks:i.query({query:o=>({url:`/admin/webhooks/${o?.id??""}`,method:"GET"}),transformResponse:o=>Array.isArray(o.data)?o.data:[o.data],providesTags:(o,h,d)=>typeof d=="object"&&"id"in d?[{type:"Webhook",id:d.id}]:[...o?.map(({id:f})=>({type:"Webhook",id:f}))??[],{type:"Webhook",id:"LIST"}]}),createWebhook:i.mutation({query:o=>({url:"/admin/webhooks",method:"POST",data:o}),transformResponse:o=>o.data,invalidatesTags:[{type:"Webhook",id:"LIST"}]}),updateWebhook:i.mutation({query:({id:o,...h})=>({url:`/admin/webhooks/${o}`,method:"PUT",data:h}),transformResponse:o=>o.data,invalidatesTags:(o,h,{id:d})=>[{type:"Webhook",id:d}]}),triggerWebhook:i.mutation({query:o=>({url:`/admin/webhooks/${o}/trigger`,method:"POST"}),transformResponse:o=>o.data}),deleteManyWebhooks:i.mutation({query:o=>({url:"/admin/webhooks/batch-delete",method:"POST",data:o}),transformResponse:o=>o.data,invalidatesTags:(o,h,{ids:d})=>d.map(f=>({type:"Webhook",id:f}))})}),overrideExisting:!1}),{useGetWebhooksQuery:x,useCreateWebhookMutation:M,useUpdateWebhookMutation:C,useTriggerWebhookMutation:b,useDeleteManyWebhooksMutation:W}=c,g=(i=void 0,o)=>{const{data:h,isLoading:d,error:f}=x(i,o),[p,{error:D}]=M(),[l,{error:P}]=C(),[O]=b(),[k]=W();return{webhooks:h,isLoading:d,error:f||D||P,createWebhook:p,updateWebhook:l,triggerWebhook:O,deleteManyWebhooks:k}}},51400(H,T,t){t.d(T,{S:()=>i});var s=t(84636),c=t(93467),x=t(55549),M=t(95581),C=t(95885),b=t(46365);const W=(0,c.Ay)(x.a)`
  height: ${24/16}rem;
  width: ${24/16}rem;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;

  svg {
    height: ${10/16}rem;
    width: ${10/16}rem;
  }

  svg path {
    fill: ${({theme:o})=>o.colors.primary600};
  }
`,g=(0,c.Ay)(x.a)`
  border-radius: 0 0 ${({theme:o})=>o.borderRadius} ${({theme:o})=>o.borderRadius};
  display: block;
  width: 100%;
  border: none;
`,i=({children:o,icon:h,...d})=>(0,s.jsxs)("div",{children:[(0,s.jsx)(M.c,{}),(0,s.jsx)(g,{as:"button",background:"primary100",padding:5,...d,children:(0,s.jsxs)(C.s,{children:[(0,s.jsx)(W,{"aria-hidden":!0,background:"primary200",children:h}),(0,s.jsx)(x.a,{paddingLeft:3,children:(0,s.jsx)(b.o,{variant:"pi",fontWeight:"bold",textColor:"primary600",children:o})})]})})]})}}]);
