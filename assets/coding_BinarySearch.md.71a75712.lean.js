import{_ as o,c as l,b as s,d as n,a,o as p}from"./app.f042065e.js";const X=JSON.parse('{"title":"Binary Search","description":"","frontmatter":{"outline":"deep"},"headers":[{"level":3,"title":"基礎題","slug":"基礎題","link":"#基礎題","children":[]},{"level":3,"title":"變化題","slug":"變化題","link":"#變化題","children":[]},{"level":3,"title":"應用題","slug":"應用題","link":"#應用題","children":[]},{"level":3,"title":"Template","slug":"template","link":"#template","children":[]},{"level":3,"title":"心得","slug":"心得","link":"#心得","children":[]},{"level":3,"title":"參考解答","slug":"參考解答","link":"#參考解答","children":[]}],"relativePath":"coding/BinarySearch.md"}'),e={name:"coding/BinarySearch.md"},t=s("h1",{id:"binary-search",tabindex:"-1"},[n("Binary Search "),s("a",{class:"header-anchor",href:"#binary-search","aria-hidden":"true"},"#")],-1),r=s("p",null,[s("code",null,"2023/9/11")],-1),c=s("div",{class:"warning custom-block"},[s("p",{class:"custom-block-title"},[s("div")]),s("p",null,"本篇會以已經知道 Binary Search 的前提下分享解題心得、練習順序以及模板分享。 如果還沒有學過的人請先去找資源學習。")],-1),y={class:"MathJax",jax:"SVG",style:{direction:"ltr"}},F={style:{overflow:"visible","min-height":"1px","min-width":"1px","vertical-align":"-0.566ex"},xmlns:"http://www.w3.org/2000/svg",width:"4.844ex",height:"2.262ex",role:"img",focusable:"false",viewBox:"0 -750 2141 1000"},D=a("",1),i=[D],C={class:"MathJax",jax:"SVG",style:{direction:"ltr"}},A={style:{overflow:"visible","min-height":"1px","min-width":"1px","vertical-align":"-0.566ex"},xmlns:"http://www.w3.org/2000/svg",width:"4.618ex",height:"2.262ex",role:"img",focusable:"false",viewBox:"0 -750 2041 1000"},m=a("",1),d=[m],b=a("",7),T=s("br",null,null,-1),u={class:"MathJax",jax:"SVG",style:{direction:"ltr"}},Q={style:{overflow:"visible","min-height":"1px","min-width":"1px","vertical-align":"-0.566ex"},xmlns:"http://www.w3.org/2000/svg",width:"4.618ex",height:"2.262ex",role:"img",focusable:"false",viewBox:"0 -750 2041 1000"},h=a("",1),f=[h],g=s("br",null,null,-1),_=a("",40),k=s("br",null,null,-1),v=s("code",null,"k",-1),E={class:"MathJax",jax:"SVG",style:{direction:"ltr"}},w={style:{overflow:"visible","min-height":"1px","min-width":"1px","vertical-align":"-0.798ex"},xmlns:"http://www.w3.org/2000/svg",width:"12.14ex",height:"2.72ex",role:"img",focusable:"false",viewBox:"0 -849.5 5365.9 1202.3"},B=a("",1),x=[B],H=a("",5),S=s("br",null,null,-1),M={class:"MathJax",jax:"SVG",style:{direction:"ltr"}},L={style:{overflow:"visible","min-height":"1px","min-width":"1px","vertical-align":"-0.439ex"},xmlns:"http://www.w3.org/2000/svg",width:"19.169ex",height:"1.934ex",role:"img",focusable:"false",viewBox:"0 -661 8472.9 855"},Z=a("",1),V=[Z],P=s("br",null,null,-1),I=s("code",null,"[left, right)",-1),j=s("code",null,"right",-1),N=a("",1);function R(G,q,U,K,J,O){return p(),l("div",null,[t,r,c,s("p",null,[n("如果在面試時你已經解出了一個 "),s("mjx-container",y,[(p(),l("svg",F,i))]),n(" 的解，面試官仍然不滿意，那 99%就是要你使用 Binary Search 了，除非是有 "),s("mjx-container",C,[(p(),l("svg",A,d))]),n(" 的解，但我覺得這比較少見，有些可能都是用數學解，比較不容易在面試時出現(吧)。")]),b,s("p",null,[n("其實二維陣列跟旋轉的題目都是讓你練習陣列的操作而已，可以各挑一題練一下即可。"),T,n(" 數學類有些題目都有很神奇的解法 (比如 "),s("mjx-container",u,[(p(),l("svg",Q,f))]),n(" 解) ，用 Binary Search 反而有點搞笑，所以我就挑了幾題我自己覺得比較有意義的題目。"),g]),_,s("p",null,[n("思路："),k,n(" 暴力解的話就是任選 "),v,n(" 個糖果，分別計算最大的美味度，這樣時間複雜度是 "),s("mjx-container",E,[(p(),l("svg",w,x))]),n("。")]),H,s("ol",null,[s("li",null,[n("定義邊界："),S,n(" 有可能的最小差值為 0(所有糖果價格都一樣)，最大差值就是 "),s("mjx-container",M,[(p(),l("svg",L,V))]),n("。"),P,n(" 如果是套用上面模板的人要注意一下，因爲區間是 "),I,n(" 實作時要將 "),j,n(" + 1 才會把所有可能涵蓋進去。")])]),N])}const z=o(e,[["render",R]]);export{X as __pageData,z as default};
