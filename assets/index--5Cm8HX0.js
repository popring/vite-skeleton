import{j as e,r as t}from"./index-ByQtCaKr.js";const l=()=>e.jsx("header",{className:"header",children:e.jsx("div",{className:"logo",children:"电商平台"})}),a=["https://via.placeholder.com/600x200/FF5733/FFFFFF?text=Promotions-1","https://via.placeholder.com/600x200/33CFFF/FFFFFF?text=Promotions-2","https://via.placeholder.com/600x200/FFC300/FFFFFF?text=Promotions-3"],n=()=>{const[s,r]=t.useState(0);return t.useEffect(()=>{const c=setInterval(()=>{r(i=>(i+1)%a.length)},3e3);return()=>clearInterval(c)},[]),e.jsx("div",{className:"banner",children:e.jsx("img",{src:a[s],alt:`促销图片${s+1}`,className:"banner-image"})})},o=({product:s})=>e.jsxs("div",{className:"product-item",children:[e.jsx("img",{src:s.imageUrl,alt:s.name,className:"product-image"}),e.jsxs("div",{className:"product-info",children:[e.jsx("h3",{children:s.name}),e.jsxs("p",{children:["￥",s.price]})]})]}),m=[{id:1,name:"iPhone 16",price:6999,imageUrl:"https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/iphone-16-pro-finish-select-202409-6-3inch-deserttitanium?wid=5120&hei=2880&fmt=webp&qlt=70&.v=eUdsd0dIb3VUOXdtWkY0VFUwVE8vbEdkZHNlSjBQRklnaFB2d3I5MW94Nm1neGR3bXRIczEyZHc4WTk0RkR4VEY3eHJKR1hDaEJCS2hmc2czazlldHlSTUMybCtXNXZpclhWeFpYZUcvRk80dEcwRGlZdHZNUlUyQVJ1QXFtSFFsOE8xQ2Rxc3QzeElocmgrcU1DbFJnPT0=&traceId=1"},{id:2,name:"MacBook Air",price:9999,imageUrl:"https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/mba13-midnight-select-202402?wid=904&hei=840&fmt=jpeg&qlt=90&.v=1708367688034"},{id:3,name:"Apple Watch Series 7",price:2999,imageUrl:"https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/s10-case-unselect-gallery-1-202409?wid=5120&hei=3280&fmt=p-jpg&qlt=80&.v=1724620940808"},{id:4,name:"AirPods Pro",price:1999,imageUrl:"https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/airpods-4-anc-select-202409_FV1?wid=976&hei=916&fmt=jpeg&qlt=90&.v=1725502554118"}],d=()=>(console.log("ProductList render"),e.jsx("div",{className:"product-list",children:m.map(s=>e.jsx(o,{product:s},s.id))})),h=()=>e.jsxs("div",{className:"app",children:[e.jsx(l,{}),e.jsx(n,{}),e.jsx(d,{})]});export{h as default};
