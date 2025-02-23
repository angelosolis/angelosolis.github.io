import{c as h,r,j as e,m as l,C as g,B as n,G as b,a as x,b as f,A as v,d as y}from"./index-DwKxx2hG.js";/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const j=h("ChevronUp",[["path",{d:"m18 15-6-6-6 6",key:"153udz"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const w=h("ExternalLink",[["path",{d:"M15 3h6v6",key:"1q9fwt"}],["path",{d:"M10 14 21 3",key:"gplh6r"}],["path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",key:"a6xqqp"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const N=h("Filter",[["polygon",{points:"22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3",key:"1yg77f"}]]),k=[{id:1,title:"AdminEvolved",description:"A comprehensive file management system built with Next.js and AWS S3. Features real-time collaboration, advanced search, and role-based access control.",tags:["Next.js","AWS","TypeScript","Tailwind"],image:"https://placehold.co/600x400/png",github:"https://github.com/angelosolis/adminevolved",demo:"https://adminevolved.demo",featured:!0},{id:2,title:"Cloud Analytics Hub",description:"Enterprise-grade analytics platform leveraging Snowflake for data warehousing. Includes customizable dashboards and automated reporting features.",tags:["Python","Snowflake","React","D3.js"],image:"https://placehold.co/600x400/png",github:"https://github.com/angelosolis/analytics-hub",demo:"https://analytics-hub.demo",featured:!0},{id:3,title:"DevPortfolio Ninja",description:"Modern developer portfolio template with dark mode, animations, and CMS integration. Built with Next.js and Tailwind CSS.",tags:["Next.js","React","Tailwind","Framer"],image:"https://placehold.co/600x400/png",github:"https://github.com/angelosolis/portfolio",demo:"https://angelosolis.dev",featured:!0},{id:4,title:"SmartInventory Pro",description:"Inventory management system with barcode scanning, real-time tracking, and predictive analytics for stock optimization.",tags:["ASP.NET","SQL","Angular","ML.NET"],image:"https://placehold.co/600x400/png",github:"https://github.com/angelosolis/inventory",featured:!1},{id:5,title:"HealthTrack API",description:"RESTful API for health monitoring applications with real-time data processing and FHIR compliance.",tags:["Node.js","Express","MongoDB","WebSocket"],image:"https://placehold.co/600x400/png",github:"https://github.com/angelosolis/health-api",demo:"https://health-api.demo",featured:!0},{id:6,title:"EduLearn Platform",description:"E-learning platform with video streaming, interactive quizzes, and progress tracking. Supports multiple course formats.",tags:["Vue.js","Firebase","Node.js","WebRTC"],image:"https://placehold.co/600x400/png",github:"https://github.com/angelosolis/edulearn",featured:!1},{id:7,title:"CryptoTrader Bot",description:"Automated cryptocurrency trading bot with machine learning-based predictions and risk management.",tags:["Python","TensorFlow","FastAPI","Redis"],image:"https://placehold.co/600x400/png",github:"https://github.com/angelosolis/crypto-bot",featured:!1},{id:8,title:"Social Media Dashboard",description:"Unified dashboard for managing multiple social media accounts with analytics and scheduling features.",tags:["React","Redux","Node.js","OAuth"],image:"https://placehold.co/600x400/png",github:"https://github.com/angelosolis/social-dash",demo:"https://social-dash.demo",featured:!0},{id:9,title:"IoT Home Hub",description:"Smart home automation system supporting multiple IoT protocols and devices with mobile app control.",tags:["Flutter","MQTT","ESP32","GraphQL"],image:"https://placehold.co/600x400/png",github:"https://github.com/angelosolis/iot-hub",featured:!1},{id:10,title:"AI Content Generator",description:"Content generation tool using GPT-3 for creating blog posts, social media content, and marketing copy.",tags:["OpenAI","React","Node.js","MongoDB"],image:"https://placehold.co/600x400/png",github:"https://github.com/angelosolis/ai-content",demo:"https://ai-content.demo",featured:!0}],A=[{value:"all",label:"All Projects"},{value:"featured",label:"Featured"},{value:"web",label:"Web Apps"},{value:"mobile",label:"Mobile"},{value:"api",label:"APIs"},{value:"ml",label:"ML/AI"}],m=r.memo(({project:a,index:d})=>e.jsx(l.div,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},transition:{delay:Math.min(d*.1,.3)},viewport:{once:!0,margin:"-50px"},className:"group",children:e.jsxs(g,{className:"overflow-hidden h-full bg-card/50 backdrop-blur-sm border-primary/10 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5 hover:-translate-y-1",children:[e.jsx("div",{className:"relative overflow-hidden",children:e.jsxs("div",{className:"relative",children:[e.jsx("img",{src:a.image,alt:a.title,className:"w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105",loading:"lazy"}),e.jsxs("div",{className:"absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-between p-4",children:[e.jsx(n,{variant:"ghost",size:"icon",className:"rounded-full bg-background/20 backdrop-blur-sm hover:bg-background/40",asChild:!0,children:e.jsx("a",{href:a.github,target:"_blank",rel:"noopener noreferrer",children:e.jsx(b,{className:"h-5 w-5"})})}),a.demo&&e.jsx(n,{variant:"ghost",size:"icon",className:"rounded-full bg-background/20 backdrop-blur-sm hover:bg-background/40",asChild:!0,children:e.jsx("a",{href:a.demo,target:"_blank",rel:"noopener noreferrer",children:e.jsx(w,{className:"h-5 w-5"})})})]})]})}),e.jsxs(x,{className:"p-6 space-y-4",children:[e.jsxs("div",{children:[e.jsx("h3",{className:"text-xl font-semibold mb-2 group-hover:text-primary transition-colors",children:a.title}),e.jsx("p",{className:"text-muted-foreground text-sm leading-relaxed",children:a.description})]}),e.jsx("div",{className:"flex flex-wrap gap-2 pt-2",children:a.tags.map(o=>e.jsx("span",{className:"px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-medium",children:o},o))})]})]})},a.id));m.displayName="ProjectCard";function S(){const[a,d]=r.useState("featured"),[o,p]=r.useState(!1),c=r.useMemo(()=>{let t=[...k];switch(a){case"featured":return t.filter(i=>i.featured);case"web":return t.filter(i=>i.tags.some(s=>["React","Vue.js","Next.js","Angular"].includes(s)));case"mobile":return t.filter(i=>i.tags.some(s=>["Flutter","React Native","Mobile"].includes(s)));case"api":return t.filter(i=>i.tags.some(s=>["API","Node.js","Express","FastAPI"].includes(s)));case"ml":return t.filter(i=>i.tags.some(s=>["ML","AI","TensorFlow","Python"].includes(s)));default:return t}},[a]),u=o?c:c.slice(0,6);return e.jsxs("section",{id:"projects",className:"py-20 relative overflow-hidden",children:[e.jsx("div",{className:"absolute inset-0 z-0",children:e.jsx("div",{className:"absolute w-full h-full opacity-5",children:e.jsx("div",{className:"grid grid-cols-12 gap-4 h-full",children:[...Array(48)].map((t,i)=>e.jsx(l.div,{className:"h-4 bg-primary rounded-full transform",initial:{opacity:0,scale:0},animate:{opacity:Math.random()*.5+.1,scale:1,rotate:[45,45+Math.random()*10]},transition:{duration:1,delay:i*.05,rotate:{duration:3,repeat:1/0,repeatType:"reverse"}},style:{gridColumn:`span ${Math.floor(Math.random()*2)+1}`}},i))})})}),e.jsxs("div",{className:"container px-4 relative z-10",children:[e.jsxs(l.div,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},transition:{duration:.3},viewport:{once:!0},className:"text-center mb-12",children:[e.jsx("h2",{className:"text-4xl font-light tracking-tight mb-4",children:"Featured Projects"}),e.jsx("div",{className:"h-1 w-20 bg-primary mx-auto rounded-full"})]}),e.jsx("div",{className:"flex flex-wrap justify-center gap-3 mb-12",children:A.map(t=>e.jsxs(n,{variant:a===t.value?"default":"outline",size:"sm",onClick:()=>d(t.value),className:f("rounded-full transition-all duration-300",a===t.value&&"shadow-md shadow-primary/20"),children:[t.value==="all"&&e.jsx(N,{className:"w-4 h-4 mr-2"}),t.label]},t.value))}),e.jsx(v,{mode:"wait",children:e.jsx(l.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},exit:{opacity:0,y:-20},transition:{duration:.3},className:"grid md:grid-cols-2 lg:grid-cols-3 gap-8",children:u.map((t,i)=>e.jsx(m,{project:t,index:i},t.id))},a)}),c.length>6&&e.jsx(l.div,{initial:{opacity:0},animate:{opacity:1},transition:{delay:.3},className:"mt-12 text-center",children:e.jsx(n,{variant:"outline",onClick:()=>p(!o),className:"rounded-full",children:o?e.jsxs(e.Fragment,{children:["Show Less ",e.jsx(j,{className:"ml-2 h-4 w-4"})]}):e.jsxs(e.Fragment,{children:["Show More ",e.jsx(y,{className:"ml-2 h-4 w-4"})]})})})]})]})}export{S as Projects};
