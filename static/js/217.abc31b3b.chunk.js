"use strict";(self.webpackChunkkarakter_fi=self.webpackChunkkarakter_fi||[]).push([[217],{7217:(e,t,n)=>{n.r(t),n.d(t,{default:()=>k});var s=n(7360),a=n(7410),i=n(5043),r=n(9662),l=n(579);const o=(0,r.A)((0,l.jsx)("path",{d:"M11 15h2v2h-2zm0-8h2v6h-2zm.99-5C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2M12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8"}),"ErrorOutline");var d=n(6930),c=n(1700),x=n(1637);const p=e=>{let{task:t,axios:n,theme:a,friendLength:r,setSnackBar:p,tasks:m,setTasks:h,setUpgradeDrawer:g,setBalance:b,balance:u}=e;const[j,k]=(0,i.useState)(!1),f=t.prize.map(((e,n)=>(0,l.jsxs)(s.A,{xs:3,className:t.level-1<n?"btn white":"btn ".concat(a),width:"30%",padding:.7,children:[(0,l.jsx)("img",{height:"35px",src:"/assets/images/logo1.png",alt:""}),(0,l.jsx)("div",{style:{marginTop:"-.5rem"},children:e.toLocaleString()})]},n)));return(0,l.jsxs)("div",{style:{padding:4},children:[(0,l.jsxs)(s.A,{marginTop:2,container:"true",children:[(0,l.jsxs)(s.A,{xs:12,display:"flex",justifyContent:"center",alignItems:"center",children:[(0,l.jsx)("img",{height:"70px",src:"/assets/images/logo1.png",alt:""}),(0,l.jsx)("span",{style:{fontSize:"35px"},children:1==t.prize.length?t.prize[0]:t.prize[t.level]})]}),t.prize.length>1?(0,l.jsx)(s.A,{xs:12,marginTop:3.5,display:"flex",justifyContent:"center",children:(0,l.jsx)(s.A,{container:"true",gap:1.1,maxWidth:"70%",display:"flex",justifyContent:"center",alignItems:"center",children:f})}):""]}),(0,l.jsx)("br",{}),(0,l.jsxs)("div",{style:{letterSpacing:"1px"},children:[t.description,3==t.type?(0,l.jsx)("div",{children:(0,l.jsx)("center",{children:(0,l.jsx)(d.A,{value:r/t.data.minimum*100>=100?100:r/t.data.minimum*100,color:r/t.data.minimum*100?"warning":"success",variant:"determinate",style:{maxWidth:"20rem"}})})}):"",(0,l.jsx)("br",{}),(0,l.jsx)(c.A,{style:{textAlign:"start"},variant:"outlined",color:"error",icon:(0,l.jsx)(o,{}),children:(0,l.jsxs)("span",{style:{color:"white",fontFamily:"sans-serif",fontSize:"14px"},children:[(0,l.jsx)("b",{children:"Attention"}),": Our system diligently reviews your claim history. Please refrain from making false claims; doing so will result in a ",(0,l.jsx)("b",{children:"twofold"})," reduction of your account balance."]})})]}),(0,l.jsx)("br",{}),(0,l.jsx)("button",{className:t.claimed||j?"btn white":"btn ".concat(a),onClick:()=>{k(!0),n.post("/task/submit",{id:t.id}).then((e=>{let{data:n}=e;const s=m.findIndex((e=>e.id==t.id));m[s].claimed=!0;const a=[...m];m[s].level&&(a[s].level+=1,h(a)),p(["Task completed.","success",!0]),g([!1]),b(u+t.prize[2!=t.type?0:t.level-1])})).catch((e=>{var n,s,a,i,r,l;if(console.log(e),null!==(n=e.response)&&void 0!==n&&n.reset){const e=m.findIndex((e=>e.id==t.id)),n=[...m];n[e].level=0,h(n)}if(409==(null===(s=e.response)||void 0===s?void 0:s.status)&&null!==(a=e.response)&&void 0!==a&&null!==(i=a.data)&&void 0!==i&&i.status){const e=m.findIndex((e=>e.id==t.id)),n=[...m];n[e].claimed=!0,h(n)}p([(null===(r=e.response)||void 0===r||null===(l=r.data)||void 0===l?void 0:l.message)||"Error fetching data. Plese check your connection.","error",!0])})).finally((()=>{k(!1)}))},style:{padding:"10px",color:"white",fontSize:"30px",fontFamily:"mortal-kombat",marginBottom:"7px",textAlign:"center"},disabled:j||t.claimed||3==t.type&&t.data.minimum>r,children:(0,l.jsxs)("div",{style:{display:"flex",alignItems:"center"},children:[j?(0,l.jsx)(x.A,{}):"",(0,l.jsx)("span",{style:j?{marginLeft:"8px"}:{},children:j?"Fetching data":3==t.type&&t.data.minimum>r?"".concat(r," / ").concat(t.data.minimum):t.claimed?"Claimed":"Claim"})]})})]})},m=e=>{let{task:t,setUpgradeDrawer:n,theme:a,axios:i,friendLength:r,setSnackBar:o,tasks:d,setTasks:c,setBalance:x,balance:m,colors:h}=e;const g=window.Telegram.WebApp;return(0,l.jsx)(s.A,{xs:12,children:(0,l.jsxs)(s.A,{container:"true",sx:{background:"rgba(50, 50, 50, 0.20)",borderRadius:"10px",boxShadow:"0 4px 30px rgba( 25, 25, 25, 0.8)",backdropFilter:"blur(3px)",WebkitBackdropFilter:"blur(3px)",width:"100%",height:"100%",padding:.3,border:"1px solid "+(t.claimed?"white":"rgb(".concat(h[a],")")),display:"flex",justifyContent:"center",alignItems:"center"},children:[(0,l.jsx)(s.A,{xs:3,sx:{display:"flex",alignItems:"center"},children:(0,l.jsx)("img",{height:"60rem",src:t.image,alt:""})}),(0,l.jsx)(s.A,{xs:5.7,children:(0,l.jsx)("span",{style:{textAlign:"center",fontSize:"14px",letterSpacing:"1px"},children:t.title})}),(0,l.jsx)(s.A,{xs:3,children:(0,l.jsx)("button",{className:t.claimed?"btn white":"btn "+a,disabled:t.claimed&&2!=t.type,onClick:()=>{switch(t.type){case 0:g.openTelegramLink(t.data.url);break;case 1:g.openLink(t.data.url)}n([!0,(0,l.jsx)(p,{setBalance:x,balance:m,setUpgradeDrawer:n,theme:a,setSnackBar:o,task:t,friendLength:r,axios:i,tasks:d,setTasks:c})])},style:{padding:"7px 10px 7px 10px",color:"white",fontWeight:600,fontFamily:"sans-serif",letterSpacing:"1px",fontSize:"1.05rem"},children:t.claimed?"Done":3==t.type?r>=t.data.minimum?"Claim":"".concat(r," / ").concat(t.data.minimum):2==t.type?"Claim":"Start"})})]})})};var h=n(4836),g=n(3336),b=n(6489),u=n(4681),j=n(2038);const k=e=>{let{theme:t,transition:n,P:r,colors:o,friendLength:d,axios:c,setSnackBar:x,setBalance:p,balance:k,tasks:f,setTasks:y}=e;const w=(0,i.useMemo)((()=>(0,l.jsx)(a.Ay,{options:r})),[]),[v,A]=(0,i.useState)([!1,(0,l.jsx)(l.Fragment,{})]);return(0,l.jsxs)("div",{children:[w,(0,l.jsxs)(s.A,{container:"true",sx:{height:"100vh",bottom:0,display:"flex",justifyContent:"center",padding:".7rem .7rem 5rem .7rem",background:"none",backdropFilter:"blur(0px)",WebkitBackdropFilter:"blur(0px)",border:"1px solid "+"rgb(".concat(o[t],")"),boxShadow:"inset 0 5px 20px "+"rgb(".concat(o[t],")"),zIndex:1,overflow:"hidden"},children:[(0,l.jsx)(h.A,{in:n,style:{position:"fixed",top:0,zIndex:2},children:(0,l.jsx)(g.A,{elevation:12,sx:{display:"flex",alignItems:"center",justifyContent:"center",background:u.A[900],width:"100%",borderBottom:"1px solid "+"rgb(".concat(o[t],")")},children:(0,l.jsxs)("h1",{style:{width:"100%",fontSize:30,textAlign:"center"},children:[(0,l.jsx)("span",{style:{color:"rgb(".concat(o[t],")")},children:(0,l.jsx)(j.d,{sequence:["Explore",1500,"Earn",1500,"Level-up",1500],repeat:1/0,speed:10,deletionSpeed:10})}),"!"]})})}),(0,l.jsx)(g.A,{sx:{background:"rgba(50, 50, 50, 0.20)",borderRadius:"10px",boxShadow:"0 4px 30px rgba( 25, 25, 25, 0.8)",backdropFilter:"blur(2px)",WebkitBackdropFilter:"blur(2px)",width:"100%",height:"87%",padding:1.2,border:"1px solid "+"rgb(".concat(o[t],")"),marginTop:"5.5rem",overflow:"auto"},children:(0,l.jsx)(s.A,{container:"true",rowGap:1.2,width:"100%",children:f.map(((e,n)=>(0,l.jsx)(m,{setBalance:p,balance:k,tasks:f,setTasks:y,setSnackBar:x,axios:c,task:e,setUpgradeDrawer:A,colors:o,theme:t,friendLength:d},n)))})}),(0,l.jsx)(b.A,{keepMounted:!0,PaperProps:{sx:{background:u.A[900],borderRadius:"12px 12px 0 0",boxShadow:"0 -3px 18px rgb(".concat(o[t],")"),borderTop:"1px solid rgb(".concat(o[t],")"),textAlign:"center",padding:"5px",paddingBottom:"0px"}},slotProps:{backdrop:{sx:{bgcolor:"rgba(15, 15, 15, .90)"}}},anchor:"bottom",sx:{zIndex:999999},allowSwipeInChildren:!0,disableSwipeToOpen:!0,open:v[0],onOpen:()=>{},title:"Upgrade",onClose:()=>{A([!1,(0,l.jsx)(l.Fragment,{})])},children:v[1]})]})]})}}}]);
//# sourceMappingURL=217.abc31b3b.chunk.js.map