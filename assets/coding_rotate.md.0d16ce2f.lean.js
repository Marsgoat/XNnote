import{_ as p,c as l,b as s,d as a,a as n,o}from"./app.daeb93e6.js";const G=JSON.parse('{"title":"旋轉棋盤","description":"","frontmatter":{"outline":"deep"},"headers":[{"level":2,"title":"旋轉棋盤","slug":"旋轉棋盤-1","link":"#旋轉棋盤-1","children":[]},{"level":2,"title":"SGF 資料格式","slug":"sgf-資料格式","link":"#sgf-資料格式","children":[]},{"level":2,"title":"實作過程","slug":"實作過程","link":"#實作過程","children":[{"level":3,"title":"耍寶心路歷程","slug":"耍寶心路歷程","link":"#耍寶心路歷程","children":[]},{"level":3,"title":"修正版本","slug":"修正版本","link":"#修正版本","children":[]},{"level":3,"title":"最終版本","slug":"最終版本","link":"#最終版本","children":[]},{"level":3,"title":"原理","slug":"原理","link":"#原理","children":[]}]},{"level":2,"title":"心得","slug":"心得","link":"#心得","children":[]}],"relativePath":"coding/rotate.md"}'),t={name:"coding/rotate.md"},e=n("",37),r=s("br",null,null,-1),c=s("a",{href:"https://en.wikipedia.org/wiki/Rotation_(mathematics)",target:"_blank",rel:"noreferrer"},"旋轉",-1),D={class:"MathJax",jax:"SVG",style:{direction:"ltr"}},y={style:{overflow:"visible","min-height":"1px","min-width":"1px","vertical-align":"-0.566ex"},xmlns:"http://www.w3.org/2000/svg",width:"5.169ex",height:"2.262ex",role:"img",focusable:"false",viewBox:"0 -750 2284.7 1000"},F=n("",1),i=[F],Q={class:"MathJax",jax:"SVG",style:{direction:"ltr"}},T={style:{overflow:"visible","min-height":"1px","min-width":"1px","vertical-align":"-0.566ex"},xmlns:"http://www.w3.org/2000/svg",width:"6.424ex",height:"2.283ex",role:"img",focusable:"false",viewBox:"0 -759 2839.6 1009"},d=n("",1),A=[d],m={class:"MathJax",jax:"SVG",display:"true",style:{direction:"ltr",display:"block","text-align":"center",margin:"1em 0"}},C={style:{overflow:"visible","min-height":"1px","min-width":"1px","vertical-align":"-2.149ex"},xmlns:"http://www.w3.org/2000/svg",width:"29.727ex",height:"5.43ex",role:"img",focusable:"false",viewBox:"0 -1450 13139.1 2400"},h=n("",1),g=[h],b=s("br",null,null,-1),_={class:"MathJax",jax:"SVG",style:{direction:"ltr"}},f={style:{overflow:"visible","min-height":"1px","min-width":"1px","vertical-align":"-0.464ex"},xmlns:"http://www.w3.org/2000/svg",width:"7.808ex",height:"2.181ex",role:"img",focusable:"false",viewBox:"0 -759 3451 964"},u=n("",1),H=[u],w=s("br",null,null,-1),v={class:"MathJax",jax:"SVG",style:{direction:"ltr"}},V={style:{overflow:"visible","min-height":"1px","min-width":"1px","vertical-align":"-0.464ex"},xmlns:"http://www.w3.org/2000/svg",width:"6.048ex",height:"2.181ex",role:"img",focusable:"false",viewBox:"0 -759 2673 964"},k=n("",1),x=[k],L=s("br",null,null,-1),M=s("br",null,null,-1),Z=s("br",null,null,-1),B=n("",3);function W(S,E,j,P,q,I){return o(),l("div",null,[e,s("p",null,[a("其實這邊就是高中數學嗎?!我已經全忘光了，我先承認我數學超爛，所以我一直很崇拜念數學系的人，念數學系的根本都是鬼，我身邊念數學系或是數學系轉資工所的那些人，根本都是只能仰望的存在。"),r,a(" 平面上的座標"),c,a("，如果以原點為中心，逆時鐘旋轉 θ 度後，原座標為"),s("mjx-container",D,[(o(),l("svg",y,i))]),a("、新座標為"),s("mjx-container",Q,[(o(),l("svg",T,A))]),a("，以矩陣的方式表示如下：")]),s("mjx-container",m,[(o(),l("svg",C,g))]),s("p",null,[a("那棋盤就是以天元(棋盤正中央那個點)為中心做旋轉，因為只會轉 90、180、270，所以其實就很簡單，以旋轉 90 度來看，cosθ 為 0、sinθ 為 1"),b,s("mjx-container",_,[(o(),l("svg",f,H))]),w,s("mjx-container",v,[(o(),l("svg",V,x))]),L,a(" 這邊可以去 google 一下，轉一些奇怪的角度要怎麼寫，還蠻有趣的，我這就不展開了。"),M,a(" 反正圍棋應該是沒有人要轉 45 度之類的吧?!這樣轉很多棋子都被轉出棋盤外了..."),Z,a(" 如果有，那你自己寫。")]),B])}const N=p(t,[["render",W]]);export{G as __pageData,N as default};