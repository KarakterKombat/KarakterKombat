"use strict";(self.webpackChunkkarakter_fi=self.webpackChunkkarakter_fi||[]).push([[217],{7217:(e,t,n)=>{n.r(t),n.d(t,{default:()=>w});var a=n(7360),i=n(7410),r=n(5043),s=n(9662),o=n(579);const l=(0,s.A)((0,o.jsx)("path",{d:"M11 15h2v2h-2zm0-8h2v6h-2zm.99-5C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2M12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8"}),"ErrorOutline");var c=n(6446),d=n(6930),p=n(1700),m=n(1637),x=n(4681);const g=e=>{let{task:t,axios:n,theme:i,friendLength:s,setSnackBar:g,tasks:h,setTasks:u,setUpgradeDrawer:b,setBalance:k,balance:f}=e;const[j,y]=(0,r.useState)(!1),w=(0,o.jsx)(a.A,{xs:12,marginTop:3.5,display:"flex",justifyContent:"center",children:(0,o.jsx)(a.A,{container:"true",rowGap:1,columnGap:.5,maxWidth:"100%",display:"flex",justifyContent:"center",alignItems:"center",children:t.prize.map(((e,n)=>(0,o.jsx)(a.A,{xs:3,width:"20%",padding:.4,className:t.level==n?"magic-blink":"",sx:{backgroundImage:"url(/assets/images/covers/purple-1.png) !important",backgroundRepeat:"no-repeat !important",backgroundPosition:"center center !important",backgroundSize:"4.6rem !important",backgroundOrigin:"padding-box !important",imageRendering:"pixelated !important",filter:t.level-1<n?"grayscale(100%)":"none",WebkitFilter:t.level-1<n?"grayscale(100%)":"none"},children:(0,o.jsxs)(c.A,{sx:{backgroundImage:"url(/assets/particles/purple-cloud.gif)",backgroundRepeat:"no-repeat",backgroundPosition:t.level-1<n?"50% 85%":"51% 100%",backgroundSize:t.level-1<n?"10rem":"12rem",backgroundOrigin:"padding-box",imageRendering:"pixelated",width:"100%",height:"100%",zIndex:-1},children:[(0,o.jsx)(c.A,{display:"flex",justifyContent:"center",padding:1,sx:{},children:(0,o.jsx)("img",{height:"40px",src:"/assets/images/logo1.png",alt:"",style:{marginTop:"-5px"}})}),(0,o.jsx)("div",{style:{marginTop:"-.6rem",fontFamily:"mortal-kombat",textAlign:"center",letterSpacing:"2px",textDecoration:t.level-1<n?"unset":"line-through",color:t.level-1<n?"white":x.A[400]},children:e>1e3?A(e):e.toLocaleString()})]})},n)))})});return(0,o.jsxs)("div",{style:{padding:4},children:[(0,o.jsx)("div",{hidden:!0,children:w}),(0,o.jsxs)(a.A,{marginTop:2,container:"true",children:[(0,o.jsxs)(a.A,{xs:12,display:"flex",justifyContent:"center",alignItems:"center",children:[(0,o.jsx)("img",{height:"70px",src:"/assets/images/logo1.png",alt:""}),(0,o.jsx)("span",{style:{fontSize:"35px"},children:1==t.prize.length?t.prize[0]:t.prize[t.level]})]}),t.prize.length>1?w:""]}),(0,o.jsx)("br",{}),(0,o.jsxs)("div",{style:{letterSpacing:"1px"},children:[t.description,3==t.type?(0,o.jsx)("div",{children:(0,o.jsx)("center",{children:(0,o.jsx)(d.A,{value:s/t.data.minimum*100>=100?100:s/t.data.minimum*100,color:s/t.data.minimum*100?"warning":"success",variant:"determinate",style:{maxWidth:"20rem"}})})}):"",(0,o.jsx)("br",{}),2!=t.type&&(0,o.jsx)(p.A,{style:{textAlign:"start"},variant:"outlined",color:"error",icon:(0,o.jsx)(l,{}),children:(0,o.jsxs)("span",{style:{color:"white",fontFamily:"sans-serif",fontSize:"14px"},children:[(0,o.jsx)("b",{children:"Attention"}),": Our system diligently reviews your claim history. Please refrain from making false claims; doing so will result in a ",(0,o.jsx)("b",{children:"twofold"})," ","reduction of your account balance."]})})]}),(0,o.jsx)("br",{}),(0,o.jsx)("button",{className:j?"btn white blink":t.claimed?"btn grey":"btn ".concat(i),onClick:()=>{y(!0),n.post("/task/submit",{id:t.id}).then((e=>{let{data:n}=e;const a=h.findIndex((e=>e.id==t.id));k(f+t.prize[2!=t.type?0:t.level]),h[a].claimed=!0;const i=[...h];h[a].level>=0&&(i[a].level+=1,u(i)),g(["Task completed.","success",!0]),b([!1])})).catch((e=>{var n,a,i,r,s,o;if(console.log(e),null!==(n=e.response)&&void 0!==n&&n.reset){const e=h.findIndex((e=>e.id==t.id)),n=[...h];n[e].level=0,u(n)}if(409==(null===(a=e.response)||void 0===a?void 0:a.status)&&null!==(i=e.response)&&void 0!==i&&null!==(r=i.data)&&void 0!==r&&r.status){const e=h.findIndex((e=>e.id==t.id)),n=[...h];n[e].claimed=!0,u(n)}g([(null===(s=e.response)||void 0===s||null===(o=s.data)||void 0===o?void 0:o.message)||"Error fetching data. Plese check your connection.","error",!0])})).finally((()=>{y(!1)}))},style:{padding:"10px",color:"white",fontSize:"30px",fontFamily:"mortal-kombat",marginBottom:"7px",textAlign:"center"},disabled:j||t.claimed||3==t.type&&t.data.minimum>s,children:(0,o.jsxs)("div",{style:{display:"flex",alignItems:"center"},children:[j?(0,o.jsx)(m.A,{}):"",(0,o.jsx)("span",{style:j?{marginLeft:"8px"}:{},children:j?"Fetching data":3==t.type&&t.data.minimum>s?"".concat(s," / ").concat(t.data.minimum):t.claimed?"Claimed":"Claim"})]})})]});function A(e){return new Intl.NumberFormat("en",{notation:"compact",compactDisplay:"short",maximumSignificantDigits:3}).format(e)}},h=e=>{let{task:t,setUpgradeDrawer:n,theme:i,axios:r,friendLength:s,setSnackBar:l,tasks:c,setTasks:d,setBalance:p,balance:m,colors:h}=e;const u=window.Telegram.WebApp;return(0,o.jsx)(a.A,{xs:12,sx:{backdropFilter:"blur(4.5px)",WebkitBackdropFilter:"blur(4.5px)"},children:(0,o.jsxs)(a.A,{container:"true",sx:{borderRadius:"10px",background:"rgba(50, 50, 50, 0.20) !important",boxShadow:"0 4px 30px rgba( 25, 25, 25, 0.8) !important",height:"100%",padding:".5rem .1rem .5rem .1rem",width:"100%",display:"flex",justifyContent:"center",alignItems:"center"},className:t.upcoming?"btn white blink":t.claimed?"btn grey":"btn ".concat(i),children:[(0,o.jsx)(a.A,{xs:3,sx:{display:"flex",alignItems:"center"},children:(0,o.jsx)("img",{height:"55rem",style:{imageRendering:t.pixelated?"pixelated":"auto"},src:t.image,alt:""})}),(0,o.jsx)(a.A,{xs:5.7,children:(0,o.jsx)("span",{style:{textAlign:"center",fontSize:"14px",letterSpacing:"1px",textDecoration:t.claimed?"line-through":"unset",color:t.claimed?x.A[400]:"white"},children:t.title})}),(0,o.jsx)(a.A,{xs:3,display:"flex",justifyContent:"center",children:(0,o.jsx)("button",{className:t.upcoming?"btn white blink":t.claimed?"btn grey":"btn "+i,disabled:(t.claimed||t.upcoming)&&2!=t.type,onClick:()=>{switch(t.type){case 0:u.openTelegramLink(t.data.url);break;case 1:u.openLink(t.data.url)}n([!0,(0,o.jsx)(g,{setBalance:p,balance:m,setUpgradeDrawer:n,theme:i,setSnackBar:l,task:t,friendLength:s,axios:r,tasks:c,setTasks:d})])},style:{padding:"7px 10px 7px 10px",color:"white",fontWeight:600,fontFamily:"sans-serif",letterSpacing:"1px",fontSize:"1.05rem"},children:t.upcoming?"Soon...":t.claimed?"\u2705":3==t.type?s>=t.data.minimum?"Claim":"".concat(s," / ").concat(t.data.minimum):2==t.type?"Claim":"Start"})})]})})};var u=n(4836),b=n(3336),k=n(6258),f=n(6489),j=n(2038),y=n(3216);const w=e=>{let{theme:t,transition:n,P:s,colors:l,friendLength:c,axios:d,setSnackBar:p,setBalance:m,balance:g,tasks:w,setTasks:A}=e;const v=(0,r.useMemo)((()=>(0,o.jsx)(i.Ay,{options:s})),[]),[S,B]=(0,r.useState)([!1,(0,o.jsx)(o.Fragment,{})]),T=window.Telegram.WebApp,z=(0,y.Zp)();return T.BackButton.show(),T.BackButton.onClick((()=>{z("/click-game"),T.BackButton.hide()})),(0,o.jsxs)("div",{children:[v,(0,o.jsxs)(a.A,{container:"true",sx:{height:"100vh",bottom:0,display:"flex",justifyContent:"center",padding:".7rem .7rem 5rem .7rem",background:"none",border:"1px solid rgb(".concat(l[t],")"),boxShadow:"inset 0 5px 20px rgb(".concat(l[t],")"),zIndex:1,overflow:"hidden"},children:[(0,o.jsx)(u.A,{in:n,style:{position:"fixed",top:0,zIndex:2},children:(0,o.jsx)(b.A,{elevation:12,sx:{display:"flex",alignItems:"center",justifyContent:"center",background:x.A[900],width:"100%",borderBottom:"1px solid rgb(".concat(l[t],")")},children:(0,o.jsxs)("h1",{style:{width:"100%",fontSize:30,textAlign:"center"},children:[(0,o.jsx)("span",{style:{color:"rgb(".concat(l[t],")")},children:(0,o.jsx)(j.d,{sequence:["Explore",1500,"Earn",1500,"Level-up",1500],repeat:1/0,speed:10,deletionSpeed:10})}),"!"]})})}),(0,o.jsx)(k.A,{in:n,children:(0,o.jsxs)(b.A,{sx:{background:"rgba(50, 50, 50, 0.20)",borderRadius:"10px",boxShadow:"0 4px 30px rgba( 25, 25, 25, 0.8)",backdropFilter:"blur(1.5px)",WebkitBackdropFilter:"blur(1.5px)",width:"100%",height:"87%",padding:1.5,border:"1px solid rgba(".concat(l[t],", 0.6)"),marginTop:"5.5rem",overflow:"auto"},children:[(0,o.jsxs)(a.A,{container:"true",rowGap:1.2,width:"100%",children:[w.some((e=>2==e.type&&!e.upcoming))?(0,o.jsx)("span",{style:{color:"white",fontSize:"24px",textAlign:"center",letterSpacing:"2px",marginBottom:"-0.6rem",marginTop:"-.3rem"},children:"Daily Tasks"}):"",w.filter((e=>2==e.type&&!e.upcoming)).map(((e,n)=>(0,o.jsx)(h,{setBalance:m,balance:g,tasks:w,setTasks:A,setSnackBar:p,axios:d,task:e,setUpgradeDrawer:B,colors:l,theme:t,friendLength:c},n)))]}),(0,o.jsxs)(a.A,{container:"true",rowGap:1.2,width:"100%",children:[w.some((e=>2!=e.type&&!e.claimed&&!e.upcoming))?(0,o.jsx)("span",{style:{color:"white",fontSize:"24px",textAlign:"center",letterSpacing:"2px",marginBottom:"-0.6rem",marginTop:"1.3rem"},children:"Other Tasks"}):"",w.filter((e=>2!=e.type&&!e.claimed&&!e.upcoming)).map(((e,n)=>(0,o.jsx)(h,{setBalance:m,balance:g,tasks:w,setTasks:A,setSnackBar:p,axios:d,task:e,setUpgradeDrawer:B,colors:l,theme:t,friendLength:c},n)))]}),(0,o.jsxs)(a.A,{container:"true",rowGap:1.2,width:"100%",children:[w.some((e=>!!e.claimed&&!e.upcoming))?(0,o.jsx)("span",{style:{color:"white",fontSize:"24px",textAlign:"center",letterSpacing:"2px",marginBottom:"-0.6rem",marginTop:"1.3rem"},children:"Completed Tasks"}):"",w.filter((e=>!!e.claimed&&!e.upcoming)).map(((e,n)=>(0,o.jsx)(h,{setBalance:m,balance:g,tasks:w,setTasks:A,setSnackBar:p,axios:d,task:e,setUpgradeDrawer:B,colors:l,theme:t,friendLength:c},n)))]}),(0,o.jsxs)(a.A,{container:"true",rowGap:1.2,width:"100%",children:[w.some((e=>!!e.upcoming))?(0,o.jsx)("span",{style:{color:"white",fontSize:"24px",textAlign:"center",letterSpacing:"2px",marginBottom:"-0.6rem",marginTop:"1.3rem"},children:"Upcoming Tasks"}):"",w.filter((e=>!!e.upcoming)).map(((e,n)=>(0,o.jsx)(h,{setBalance:m,balance:g,tasks:w,setTasks:A,setSnackBar:p,axios:d,task:e,setUpgradeDrawer:B,colors:l,theme:t,friendLength:c},n)))]})]})}),(0,o.jsx)(f.A,{keepMounted:!0,PaperProps:{sx:{background:x.A[900],borderRadius:"12px 12px 0 0",boxShadow:"0 -3px 18px rgb(".concat(l[t],")"),borderTop:"1px solid rgb(".concat(l[t],")"),textAlign:"center",padding:"5px",paddingBottom:"0px"}},slotProps:{backdrop:{sx:{bgcolor:"rgba(15, 15, 15, .90)"}}},anchor:"bottom",sx:{zIndex:999999},allowSwipeInChildren:!0,disableSwipeToOpen:!0,open:S[0],onOpen:()=>{},title:"Upgrade",onClose:()=>{B([!1,(0,o.jsx)(o.Fragment,{})])},children:S[1]})]})]})}}}]);
//# sourceMappingURL=217.a23c4755.chunk.js.map