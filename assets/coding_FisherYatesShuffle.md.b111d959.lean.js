import{_ as r,c as e,b as s,e as o,a as n,d as a,o as p,r as t}from"./app.7bf40c82.js";const W=JSON.parse('{"title":"Fisher\u2013Yates shuffle","description":"","frontmatter":{},"headers":[{"level":2,"title":"Shuffle an Array","slug":"shuffle-an-array"},{"level":2,"title":"\u5BE6\u4F5C","slug":"\u5BE6\u4F5C"},{"level":3,"title":"\u76F4\u89BA\u7684\u505A\u6CD5","slug":"\u76F4\u89BA\u7684\u505A\u6CD5"},{"level":3,"title":"\u76F4\u89BA\u7684\u512A\u5316\u505A\u6CD5","slug":"\u76F4\u89BA\u7684\u512A\u5316\u505A\u6CD5"},{"level":3,"title":"Fisher-Yates Shuffle","slug":"fisher-yates-shuffle"},{"level":2,"title":"\u5206\u6790","slug":"\u5206\u6790"},{"level":3,"title":"\u66B4\u529B\u5C55\u958B","slug":"\u66B4\u529B\u5C55\u958B"},{"level":3,"title":"\u7A0B\u5F0F\u9A57\u8B49","slug":"\u7A0B\u5F0F\u9A57\u8B49"},{"level":2,"title":"\u5FC3\u5F97","slug":"\u5FC3\u5F97"},{"level":2,"title":"reference","slug":"reference"},{"level":2,"title":"\u65B0\u767B\u5834\u4EBA\u7269","slug":"\u65B0\u767B\u5834\u4EBA\u7269"}],"relativePath":"coding/FisherYatesShuffle.md"}'),c={name:"coding/FisherYatesShuffle.md"},i=n("",16),D=a("\u5176\u5BE6\u9019\u9EBC\u505A\u4E5F\u6C92\u554F\u984C\uFF0C\u5C31\u662F\u6548\u7387\u5DEE\u4E86\u9EDE\uFF0C\u56E0\u70BA array \u7684 delete \u70BA "),y={class:"MathJax",jax:"SVG",style:{direction:"ltr"}},F={style:{overflow:"visible","min-height":"1px","min-width":"1px","vertical-align":"-0.566ex"},xmlns:"http://www.w3.org/2000/svg",width:"4.844ex",height:"2.262ex",role:"img",focusable:"false",viewBox:"0 -750 2141 1000"},d=n("",1),A=[d],h=a(" \uFF0C\u9019\u6A23\u5B50\u7684\u6642\u9593\u8907\u96DC\u5EA6\u5C31\u70BA "),C={class:"MathJax",jax:"SVG",style:{direction:"ltr"}},T={style:{overflow:"visible","min-height":"1px","min-width":"1px","vertical-align":"-0.566ex"},xmlns:"http://www.w3.org/2000/svg",width:"5.832ex",height:"2.452ex",role:"img",focusable:"false",viewBox:"0 -833.9 2577.6 1083.9"},Q=n("",1),_=[Q],m=a(" \uFF0C\u90A3\u518D\u4F86\u8A66\u8A66\u770B\u80FD\u4E0D\u80FD\u512A\u5316\u4E00\u4E0B"),b=s("h3",{id:"\u76F4\u89BA\u7684\u512A\u5316\u505A\u6CD5",tabindex:"-1"},[a("\u76F4\u89BA\u7684\u512A\u5316\u505A\u6CD5 "),s("a",{class:"header-anchor",href:"#\u76F4\u89BA\u7684\u512A\u5316\u505A\u6CD5","aria-hidden":"true"},"#")],-1),f=a("\u60F3\u6CD5\u5927\u81F4\u4E0A\u5C31\u662F\u5F9E\u7B2C\u4E00\u5F35\u724C\u958B\u59CB\uFF0C\u96A8\u6A5F\u7684\u8DDF\u5176\u4ED6\u5F35\u724C\u4EA4\u63DB\uFF0C\u9019\u6A23\u4E00\u76F4\u63DB\u5230\u6700\u5F8C\u4E00\u5F35\u724C\uFF0C\u9019\u4E9B\u64CD\u4F5C\u90FD\u5728\u540C\u500B array \u4E2D\u5B8C\u6210\uFF0C\u6240\u4EE5\u5C31\u80FD\u5C07\u6642\u9593\u8907\u96DC\u5EA6\u512A\u5316\u5230 "),u={class:"MathJax",jax:"SVG",style:{direction:"ltr"}},g={style:{overflow:"visible","min-height":"1px","min-width":"1px","vertical-align":"-0.566ex"},xmlns:"http://www.w3.org/2000/svg",width:"4.844ex",height:"2.262ex",role:"img",focusable:"false",viewBox:"0 -750 2141 1000"},B=n("",1),x=[B],k=a(" \u4E86\uFF01"),E=n("",12),v=a("\u6B63\u5E38\u6253\u4E82 123 \u7684\u7D50\u679C\u53EF\u80FD\u6709 3 x 2 x 1 = 3! = "),w=s("font",{color:"#c2534c"},"6 \u7A2E\u53EF\u80FD",-1),S=a("\uFF0C\u5206\u5225\u70BA 123\u3001132\u3001213\u3001231\u3001321\u3001312\u3002"),V=s("br",null,null,-1),M=a(" \u4F46\u662F\u7528\u6211\u5011\u4E0A\u9762\u7684\u65B9\u6CD5\u4F86\u505A\u7684\u8A71\uFF0C\u53EF\u80FD\u7684\u63DB\u6CD5\u70BA "),L={class:"MathJax",jax:"SVG",style:{direction:"ltr"}},H={style:{overflow:"visible","min-height":"1px","min-width":"1px","vertical-align":"-0.05ex"},xmlns:"http://www.w3.org/2000/svg",width:"2.119ex",height:"1.935ex",role:"img",focusable:"false",viewBox:"0 -833.2 936.6 855.2"},P=n("",1),I=[P],Z=a(" = "),j=s("font",{color:"#c2534c"},"27 \u7A2E\uFF0C\u4F46\u662F\u5BE6\u969B\u4E0A\u4E0D\u4E00\u6A23\u7684\u7D44\u5408\u53EA\u6709 6 \u7A2E\uFF0C\u9019\u6A23\u5C31\u6703\u9020\u6210\u67D0\u7A2E\u7D44\u5408\u6BD4\u8F03\u5BB9\u6613\u51FA\u73FE\uFF0C\u6A5F\u7387\u4E0D\u5E73\u5747\u7684\u554F\u984C\u3002",-1),N=n("",5),R=n("",6),Y=s("p",null,[a("\u7B2C\u4E09\u6B21\u63DB"),s("br"),a(" \uFF08\u9019\u908A\u56E0\u70BA\u6574\u68F5\u6A39\u6703\u592A\u5927\uFF0C\u6211\u628A\u6839\u7BC0\u9EDE\u62FF\u6389\u4E14\u62C6\u6210\u4E09\u9846\u5B50\u6A39\u4F86\u770B\uFF09")],-1),J=n("",18);function q(X,G,$,z,O,K){const l=t("Mermaid");return p(),e("div",null,[i,s("p",null,[D,s("mjx-container",y,[(p(),e("svg",F,A))]),h,s("mjx-container",C,[(p(),e("svg",T,_))]),m]),b,s("p",null,[f,s("mjx-container",u,[(p(),e("svg",g,x))]),k]),E,s("p",null,[v,w,S,V,M,s("mjx-container",L,[(p(),e("svg",H,I))]),Z,j]),N,o(l,{id:"mermaid_64a570a2",graph:"graph%20TD%3B%0A0%5B123%5D--%3Ea1%5B123%5D%0A0%5B123%5D--%3Ea2%5B213%5D%0A0%5B123%5D--%3Ea3%5B321%5D"}),R,o(l,{id:"mermaid_64a56f72",graph:"graph%20TD%3B%0A%0A0%5B123%5D--%3Ea1%5B123%5D%0A0%5B123%5D--%3Ea2%5B213%5D%0A0%5B123%5D--%3Ea3%5B321%5D%0A%0Aa1%5B123%5D--%3Eb1%5B213%5D%0Aa1%5B123%5D--%3Eb2%5B123%5D%0Aa1%5B123%5D--%3Eb3%5B132%5D%0A%0Aa2%5B213%5D--%3Eb4%5B123%5D%0Aa2%5B213%5D--%3Eb5%5B213%5D%0Aa2%5B213%5D--%3Eb6%5B231%5D%0A%0Aa3%5B321%5D--%3Eb7%5B213%5D%0Aa3%5B321%5D--%3Eb8%5B321%5D%0Aa3%5B321%5D--%3Eb9%5B312%5D"}),Y,o(l,{id:"mermaid_64a56f6a",graph:"graph%20TD%3B%0Aa1%5B123%5D--%3Eb1%5B213%5D%0Aa1%5B123%5D--%3Eb2%5B123%5D%0Aa1%5B123%5D--%3Eb3%5B132%5D%0A%0Ab1%5B213%5D--%3Ec1%5B312%5D%0Ab1%5B213%5D--%3Ec2%5B231%5D%0Ab1%5B213%5D--%3Ec3%5B213%5D%0Ab2%5B123%5D--%3Ec4%5B321%5D%0Ab2%5B123%5D--%3Ec5%5B132%5D%0Ab2%5B123%5D--%3Ec6%5B123%5D%0Ab3%5B132%5D--%3Ec7%5B231%5D%0Ab3%5B132%5D--%3Ec8%5B123%5D%0Ab3%5B132%5D--%3Ec9%5B132%5D"}),o(l,{id:"mermaid_64a56f68",graph:"graph%20TD%3B%0Aa1%5B213%5D--%3Eb1%5B123%5D%0Aa1%5B213%5D--%3Eb2%5B213%5D%0Aa1%5B213%5D--%3Eb3%5B231%5D%0A%0Ab1%5B123%5D--%3Ec1%5B321%5D%0Ab1%5B123%5D--%3Ec2%5B132%5D%0Ab1%5B123%5D--%3Ec3%5B123%5D%0Ab2%5B213%5D--%3Ec4%5B312%5D%0Ab2%5B213%5D--%3Ec5%5B231%5D%0Ab2%5B213%5D--%3Ec6%5B213%5D%0Ab3%5B231%5D--%3Ec7%5B132%5D%0Ab3%5B231%5D--%3Ec8%5B213%5D%0Ab3%5B231%5D--%3Ec9%5B231%5D"}),o(l,{id:"mermaid_64a56f66",graph:"graph%20TD%3B%0Aa1%5B321%5D--%3Eb1%5B123%5D%0Aa1%5B321%5D--%3Eb2%5B312%5D%0Aa1%5B321%5D--%3Eb3%5B321%5D%0A%0Ab1%5B123%5D--%3Ec1%5B321%5D%0Ab1%5B123%5D--%3Ec2%5B132%5D%0Ab1%5B123%5D--%3Ec3%5B123%5D%0Ab2%5B312%5D--%3Ec4%5B213%5D%0Ab2%5B312%5D--%3Ec5%5B321%5D%0Ab2%5B312%5D--%3Ec6%5B312%5D%0Ab3%5B321%5D--%3Ec7%5B123%5D%0Ab3%5B321%5D--%3Ec8%5B312%5D%0Ab3%5B321%5D--%3Ec9%5B321%5D"}),J])}var ss=r(c,[["render",q]]);export{W as __pageData,ss as default};