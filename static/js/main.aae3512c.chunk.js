(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{21:function(e,t,a){e.exports=a.p+"static/media/christian.6aa1333d.png"},22:function(e,t,a){e.exports=a.p+"static/media/didit.6ff85da0.png"},23:function(e,t,a){e.exports=a.p+"static/media/fahmi.8a505c77.png"},24:function(e,t,a){e.exports=a.p+"static/media/fiqri.f5658b77.png"},25:function(e,t,a){e.exports=a.p+"static/media/irfan.71823052.png"},26:function(e,t,a){e.exports=a.p+"static/media/iwang.e6ec42b5.png"},27:function(e,t,a){e.exports=a.p+"static/media/izzan.5bfeaeb2.png"},28:function(e,t,a){e.exports=a.p+"static/media/munir.a29f5ae8.png"},29:function(e,t,a){e.exports=a.p+"static/media/ody.c111a91c.png"},30:function(e,t,a){e.exports=a.p+"static/media/timothy.5dfe4982.png"},31:function(e,t,a){e.exports=a.p+"static/media/yonas.59090e23.png"},33:function(e,t,a){e.exports=a(63)},51:function(e,t,a){},52:function(e,t,a){},53:function(e,t,a){},54:function(e,t,a){},57:function(e,t,a){},58:function(e,t,a){},59:function(e,t,a){},63:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),s=a(19),c=a.n(s),r=a(66),m=a(67),l=a(68),o=a(20),u=a.n(o);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var p=a(5),h=a(6),d=a(8),b=a(7),f=a(9),E=a(11),g=(a(51),function(e){function t(){var e;return Object(p.a)(this,t),(e=Object(d.a)(this,Object(b.a)(t).call(this))).state={quoteIdx:0},e}return Object(f.a)(t,e),Object(h.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.setState(function(t){return{quoteIdx:Math.floor(Math.random()*e.props.quotes.length)}}),this.timeout=setInterval(function(){var t=e.state.quoteIdx;e.setState({quoteIdx:(t+1)%e.props.quotes.length})},5e3)}},{key:"componentWillUnmount",value:function(){clearInterval(this.timeout)}},{key:"renderQuote",value:function(e,t){console.log(this.state.quoteIdx);var a="quote";return this.state.quoteIdx===t&&(a+=" active"),(this.state.quoteIdx+1)%this.props.quotes.length===t&&(a+=" right"),(this.state.quoteIdx+this.props.quotes.length-1)%this.props.quotes.length===t&&(a+=" left"),i.a.createElement("div",{key:t,className:a},i.a.createElement("div",{className:"big-text font-weight-bold mb-3"},e.text),i.a.createElement("div",{className:"division mb-5"},i.a.createElement("div",{className:"line"}),i.a.createElement("span",{className:"font-weight-semibold"},e.source)))}},{key:"render",value:function(){for(var e=[],t=0;t<this.props.quotes.length;t++)e.push(this.renderQuote(this.props.quotes[t],t));return i.a.createElement("div",{className:"quotes"},e)}}]),t}(n.Component)),v=(a(52),[{text:i.a.createElement("span",null,"We nurture people to get internships. ",i.a.createElement("br",null),"We care. We build. ",i.a.createElement("span",{className:"big-underline"},"You achieve.")),source:"Careers & Issues"},{text:i.a.createElement("span",null,"We build winners. ",i.a.createElement("br",null),"We build ",i.a.createElement("span",{className:"big-underline"},"champions"),"."),source:"Competition & Community"},{text:i.a.createElement("span",null,"The best part of learning is ",i.a.createElement("span",{className:"big-underline"},"sharing")," ",i.a.createElement("br",null),"what you know."),source:"#HMIFTech"}]),x=function(e){function t(){return Object(p.a)(this,t),Object(d.a)(this,Object(b.a)(t).apply(this,arguments))}return Object(f.a)(t,e),Object(h.a)(t,[{key:"render",value:function(){return i.a.createElement("div",{className:"home"},i.a.createElement(E.Helmet,null,i.a.createElement("title",null,"HMIF Tech")),i.a.createElement("div",{className:"page welcome"},i.a.createElement("div",{className:"tech mb-5"},i.a.createElement("span",{className:"font-weight-bold"},"#HMIF"),i.a.createElement("span",{className:"font-weight-thin"},"TECH")),i.a.createElement(g,{quotes:v}),i.a.createElement("div",{className:"register font-weight-semibold"},"let's act, ",i.a.createElement("a",{href:"//bit.ly/pemimpi-n"},"register here."))))}}]),t}(n.Component),N=(a(53),function(e){function t(){return Object(p.a)(this,t),Object(d.a)(this,Object(b.a)(t).apply(this,arguments))}return Object(f.a)(t,e),Object(h.a)(t,[{key:"render",value:function(){return i.a.createElement("div",{className:"home"},i.a.createElement(E.Helmet,null,i.a.createElement("title",null," Join HMIF Tech ")),i.a.createElement("div",{className:"page join"},i.a.createElement("h1",{className:"font-weight-bold text-center"},"Join #HMIF",i.a.createElement("span",{className:"text-white"},"Tech"),"!"),i.a.createElement("div",{className:"text-center font-italic"},"Dare to contribute?"),i.a.createElement("a",{href:"https://bit.ly/pemimpi-n"},i.a.createElement("div",{className:"button font-weight-bold"},"Click here!")),i.a.createElement("div",{className:"border"})))}}]),t}(n.Component)),y=a(69),w=(a(54),function(e){function t(){return Object(p.a)(this,t),Object(d.a)(this,Object(b.a)(t).apply(this,arguments))}return Object(f.a)(t,e),Object(h.a)(t,[{key:"renderMenu",value:function(){for(var e=[{text:"Home",to:"/"},{text:"About",to:"/about-us"}],t=[],a=0;a<e.length;a++){var n=e[a],s=i.a.createElement(y.a,{key:a,to:n.to},i.a.createElement("div",{className:"menu"},n.text));n.text===this.props.activeMenu&&(s=i.a.createElement("div",{key:a,className:"menu active"},n.text)),t.push(s)}return t}},{key:"render",value:function(){return i.a.createElement("div",{className:"navbar"},this.renderMenu())}}]),t}(n.Component)),j=a(21),O=a.n(j),I=a(22),k=a.n(I),q=a(23),C=a.n(q),z=a(24),S=a.n(z),H=a(25),M=a.n(H),W=a(26),A=a.n(W),F=a(27),T=a.n(F),D=a(28),J=a.n(D),B=a(29),U=a.n(B),Y=a(30),P=a.n(Y),Q=a(31),V=a.n(Q),G=(a(57),function(e){function t(){return Object(p.a)(this,t),Object(d.a)(this,Object(b.a)(t).apply(this,arguments))}return Object(f.a)(t,e),Object(h.a)(t,[{key:"render",value:function(){return i.a.createElement("div",{className:"photo "+this.props.className+" "+this.props.size},i.a.createElement("div",{className:"photo-wrapper mb-2 "+this.props.size},i.a.createElement("img",{src:this.props.imageSrc,alt:"foto anggota"})),i.a.createElement("div",{className:"font-weight-bold text-center"},this.props.name),i.a.createElement("div",{className:"font-italic text-xsmall text-center"},this.props.title))}}]),t}(n.Component)),K=(a(58),function(e){function t(){return Object(p.a)(this,t),Object(d.a)(this,Object(b.a)(t).apply(this,arguments))}return Object(f.a)(t,e),Object(h.a)(t,[{key:"render",value:function(){return i.a.createElement("div",{className:"about pb-5"},i.a.createElement(E.Helmet,null,i.a.createElement("title",null,"Who We Are")),i.a.createElement(w,{activeMenu:"About"}),i.a.createElement("div",{className:"row my-5"},i.a.createElement("h1",{className:"text-center"},"Kenalan Yuk!")),i.a.createElement("div",{className:"row mb-3"},i.a.createElement(G,{imageSrc:T.a,name:"Ahmad Izzan",title:"Head of HMIF Tech",size:"large"})),i.a.createElement("div",{className:"division mb-3"},i.a.createElement("div",{className:"row"},i.a.createElement(G,{className:"mx-3 mb-3",imageSrc:U.a,name:"Adylan Roaffa",title:"Head of Careers & Issues",size:"medium"}),i.a.createElement(G,{className:"mx-3 mb-3",imageSrc:k.a,name:"Aditya Hilmy",title:"Vice of Careers & Issues",size:"small"})),i.a.createElement("div",{className:"row"},i.a.createElement(G,{className:"mx-3 mb-3",imageSrc:V.a,name:"Yonas Adiel",title:"Head of Competition & Community",size:"medium"}),i.a.createElement(G,{className:"mx-3 mb-3",imageSrc:A.a,name:"Adyaksa Wisanggeni",title:"Vice of Competition & Community",size:"small"}))),i.a.createElement("div",{className:"community mb-3"},i.a.createElement("div",{className:"row"},i.a.createElement(G,{className:"mx-3 mb-3",imageSrc:M.a,name:"Irfan Sofyana",title:"Competitive Programming",size:"xsmall"}),i.a.createElement(G,{className:"mx-3 mb-3",imageSrc:J.a,name:"Abdullah Munir",title:"Capture The Flag",size:"xsmall"}),i.a.createElement(G,{className:"mx-3 mb-3",imageSrc:O.a,name:"Christian W",title:"Data Science",size:"xsmall"})),i.a.createElement("div",{className:"row"},i.a.createElement(G,{className:"mx-3 mb-3",imageSrc:C.a,name:"Ahmad Fahmi",title:"UI / UX",size:"xsmall"}),i.a.createElement(G,{className:"mx-3 mb-3",imageSrc:P.a,name:"Timothy T S",title:"Business Plan",size:"xsmall"}),i.a.createElement(G,{className:"mx-3 mb-3",imageSrc:S.a,name:"Fiqri Fatriansyah",title:"Game Development",size:"xsmall"}))))}}]),t}(n.Component)),R=(a(59),u()());c.a.render(i.a.createElement(r.a,{history:R},i.a.createElement(m.a,null,i.a.createElement(l.a,{path:"/about-us",component:K}),i.a.createElement(l.a,{path:"/join-us",component:N}),i.a.createElement(l.a,{path:"/",component:x}))),document.getElementById("app")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[33,1,2]]]);
//# sourceMappingURL=main.aae3512c.chunk.js.map