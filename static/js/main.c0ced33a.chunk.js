(this["webpackJsonpquiz-up"]=this["webpackJsonpquiz-up"]||[]).push([[0],{43:function(n,e,t){"use strict";t.r(e);var r,i,o,a=t(0),c=t.n(a),s=t(26),d=t.n(s),m=t(2),l=t(13),u=t.n(l),p=t(18),f=t(12),b=t(11),j=t(1),x=c.a.createContext({}),g=function(n){var e=n.children,t=Object(a.useState)(!1),r=Object(b.a)(t,2),i=r[0],o=r[1],c=Object(a.useState)([]),s=Object(b.a)(c,2),d=s[0],m=s[1],l=Object(a.useState)(0),u=Object(b.a)(l,2),p=u[0],g=u[1],h=Object(a.useState)([]),O=Object(b.a)(h,2),y=O[0],w=O[1],v=Object(a.useState)(0),k=Object(b.a)(v,2),z=k[0],M=k[1],N=Object(a.useState)(!0),A=Object(b.a)(N,2),S=A[0],C=A[1];return Object(j.jsx)(x.Provider,{value:{questions:d,setQuestions:m,loading:i,setLoading:o,number:p,setNumber:g,userAnswer:y,setUserAnswer:w,score:z,setScore:M,gameOver:S,setGameOver:C,nextQuery:function(){var n=p+1;10===n?C(!0):g(n)},checkAnswer:function(n){if(!S){var e=n.currentTarget.value,t=d[p].correct_answer===e;t&&M((function(n){return n+1}));var r={question:d[p].question,answer:e,correct:t,correctAnswer:d[p].correct_answer};w((function(n){return[].concat(Object(f.a)(n),[r])}))}}},children:e})},h=t(9),O=t(7),y=t(8),w=y.b.div(r||(r=Object(O.a)(["\nposition: relative;\ndisplay: flex;\nmax-width: 80vw;\nflex-direction: row;\n\n.card{\n    position: relative;\n    max-width: 600px;\n    max-height: 800px;\n    margin: 15px;\n    color: #333;\n    overflow: hidden;\n    border-radius: 1rem;\n\n}\n\n.imgBx, . contentBx {\n    position: absolute;\n    top: 0;\n    left: 0;\n    height: 100%;\n    width: 100%;\n}\n\nimg{\n    position: absolute;\n    top: 0;\n    left: 0;\n    height: 100%;\n    width: 100%;\n    object-fit: cover;\n}\n\n.contentBx::before{\n  content: '';\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background: #fff;\n  transform: scaleX(0);\n  transition: transform 0.2s ease-in-out;\n  transform-origin: right;\n}\n\n  .card:hover .contentBx::before{\n    transform: scaleX(1);\n    transition: transform 0.2s ease-in-out;\n    transform-origin: left;\n  }\n\n  .card .contentBx{\n    display: flex;\n    justify-content: center;\n    align-items: center;\n  }\n\n  .card .contentBx .content{\n    position: relative;\n    padding: 3rem;\n    z-index: 1;\n    transition: .2s;\n    transform: translateX(-600px);\n  }\n\n  .card .contentBx .content h3{\n    font-weight: bolder;\n  }\n\n  .card:hover .contentBx .content{\n    transition: .2s;\n    transform: translateX(0);\n  }\n\n  .card .contentBx .content .start{\n    margin: .5rem 0;\n    padding: .5rem 2rem;\n    font-weight: 700;\n    font-size: 1rem;\n    color: #fff;\n    background: #32CD32;\n    border-radius: 1rem;\n    cursor: pointer;\n  }\n\n  .card .contentBx .content .start:hover{\n    background: orange;\n  }\n\n  "]))),v=t(25);!function(n){n.EASY="easy",n.MEDIUM="medium",n.HARD="hard"}(i||(i={})),function(n){n[n.General=9]="General",n[n.Computers=18]="Computers",n[n.Geography=22]="Geography",n[n.History=23]="History",n[n.Politics=24]="Politics",n[n.Arts=25]="Arts"}(o||(o={}));var k,z,M,N,A,S=function(){var n=Object(p.a)(u.a.mark((function n(e,t,r){var i,o;return u.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return i="https://opentdb.com/api.php?amount=".concat(e,"&category=").concat(t,"&difficulty=").concat(r,"&type=multiple"),n.next=3,fetch(i);case 3:return n.next=5,n.sent.json();case 5:return o=n.sent,n.abrupt("return",o.results.map((function(n){return Object(v.a)(Object(v.a)({},n),{},{answers:(e=[n.correct_answer].concat(Object(f.a)(n.incorrect_answers)),Object(f.a)(e).sort((function(){return Math.random()-.5})))});var e})));case 7:case"end":return n.stop()}}),n)})));return function(e,t,r){return n.apply(this,arguments)}}(),C=10,B=function(n){var e=n.title,t=n.description,r=n.image,c=n.category,s=n.link,d=Object(a.useContext)(x),m=d.setQuestions,l=d.setLoading,f=d.gameOver,b=d.setGameOver,g=d.setNumber,O=d.setUserAnswer,y=d.setScore,v=function(){var n=Object(p.a)(u.a.mark((function n(e){var t;return u.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:l(!0),b(!1),n.t0=e,n.next="General"===n.t0?5:"CS"===n.t0?9:"Geography"===n.t0?13:"Arts"===n.t0?17:"History"===n.t0?21:"Politics"===n.t0?25:29;break;case 5:return n.next=7,S(C,o.General,i.MEDIUM);case 7:return t=n.sent,n.abrupt("break",29);case 9:return n.next=11,S(C,o.Computers,i.MEDIUM);case 11:return t=n.sent,n.abrupt("break",29);case 13:return n.next=15,S(C,o.Geography,i.MEDIUM);case 15:return t=n.sent,n.abrupt("break",29);case 17:return n.next=19,S(C,o.Arts,i.MEDIUM);case 19:return t=n.sent,n.abrupt("break",29);case 21:return n.next=23,S(C,o.History,i.MEDIUM);case 23:return t=n.sent,n.abrupt("break",29);case 25:return n.next=27,S(C,o.Politics,i.MEDIUM);case 27:return t=n.sent,n.abrupt("break",29);case 29:m(t),console.log(t),g(0),y(0),O([]),l(!1);case 35:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}();return Object(j.jsx)(j.Fragment,{children:Object(j.jsx)(w,{children:f?Object(j.jsxs)("div",{className:"card",children:[Object(j.jsx)("div",{className:"imgBx",children:Object(j.jsx)("img",{src:r,alt:""})}),Object(j.jsx)("div",{className:"contentBx",children:Object(j.jsxs)("div",{className:"content",children:[Object(j.jsx)("h3",{children:e}),Object(j.jsx)("p",{children:t}),Object(j.jsx)(h.b,{to:s,children:Object(j.jsx)("button",{className:"start",onClick:function(){return v(c)},children:"Start"})})]})})]}):null})})},G=t.p+"static/media/history-img.2a5fc10a.jpg",q=t.p+"static/media/geo-img.603776a8.jpg",Q=t.p+"static/media/general-img.6f1d8480.jpg",I=t.p+"static/media/CS-img.a53de674.jpg",L=t.p+"static/media/politics-img.246a790e.jpg",U=t.p+"static/media/religion-img.e1705431.jpg",D=y.b.div(k||(k=Object(O.a)(["\n.title{\n    display: flex;\n    justify-content: center;\n    flex-direction: column;\n    margin: 2rem 0;\n}\n\n.title-span{\n    font-size: 1.5rem;\n    padding: 0 4rem;\n}\n\n.sign {\n    font-size: 6rem;\n    color: #ffe6ff;\n    text-shadow: 0 0 0.6rem #ffe6ff, 0 0 1.5rem #ff65bd,\n      -0.2rem 0.1rem 1rem #ff65bd, 0.2rem 0.1rem 1rem #ff65bd,\n      0 -0.5rem 2rem #ff2483, 0 0.5rem 3rem #ff2483;\n    animation: shine 2s forwards, flicker 3s infinite;\n  }\n\n  @media (max-width: 425px) {\n    .sign{\n      font-size: 3rem;\n    }\n    .title-span{\n      font-size: 1rem;\n\n    }\n    .title{\n      margin: 1rem 0;\n\n    }\n  }\n  @keyframes blink {\n    0%,\n    22%,\n    36%,\n    75% {\n      color: #ffe6ff;\n      text-shadow: 0 0 0.6rem #ffe6ff, 0 0 1.5rem #ff65bd,\n        -0.2rem 0.1rem 1rem #ff65bd, 0.2rem 0.1rem 1rem #ff65bd,\n        0 -0.5rem 2rem #ff2483, 0 0.5rem 3rem #ff2483;\n    }\n    28%,\n    33% {\n      color: #ff65bd;\n      text-shadow: none;\n    }\n    82%,\n    97% {\n      color: #ff2483;\n      text-shadow: none;\n    }\n  }\n  \n \n  .flicker {\n    animation: shine 2s forwards, blink 3s 2s infinite;\n  }\n  \n  .fast-flicker {\n    animation: shine 2s forwards, blink 10s 1s infinite;\n \n  }\n  \n  @keyframes shine {\n    0% {\n      color: #6b1839;\n      text-shadow: none;\n    }\n    100% {\n      color: #ffe6ff;\n      text-shadow: 0 0 0.6rem #ffe6ff, 0 0 1.5rem #ff65bd,\n        -0.2rem 0.1rem 1rem #ff65bd, 0.2rem 0.1rem 1rem #ff65bd,\n        0 -0.5rem 2rem #ff2483, 0 0.5rem 3rem #ff2483;\n    }\n  }\n  \n  @keyframes flicker {\n    from {\n      opacity: 1;\n    }\n  \n    4% {\n      opacity: 0.9;\n    }\n  \n    6% {\n      opacity: 0.85;\n    }\n  \n    8% {\n      opacity: 0.95;\n    }\n  \n    10% {\n      opacity: 0.9;\n    }\n  \n    11% {\n      opacity: 0.922;\n    }\n  \n    12% {\n      opacity: 0.9;\n    }\n  \n    14% {\n      opacity: 0.95;\n    }\n  \n    16% {\n      opacity: 0.98;\n    }\n  \n    17% {\n      opacity: 0.9;\n    }\n  \n    19% {\n      opacity: 0.93;\n    }\n  \n    20% {\n      opacity: 0.99;\n    }\n  \n    24% {\n      opacity: 1;\n    }\n  \n    26% {\n      opacity: 0.94;\n    }\n  \n    28% {\n      opacity: 0.98;\n    }\n  \n    37% {\n      opacity: 0.93;\n    }\n  \n    38% {\n      opacity: 0.5;\n    }\n  \n    39% {\n      opacity: 0.96;\n    }\n  \n    42% {\n      opacity: 1;\n    }\n  \n    44% {\n      opacity: 0.97;\n    }\n  \n    46% {\n      opacity: 0.94;\n    }\n  \n    56% {\n      opacity: 0.9;\n    }\n  \n    58% {\n      opacity: 0.9;\n    }\n  \n    60% {\n      opacity: 0.99;\n    }\n  \n    68% {\n      opacity: 1;\n    }\n  \n    70% {\n      opacity: 0.9;\n    }\n  \n    72% {\n      opacity: 0.95;\n    }\n  \n    93% {\n      opacity: 0.93;\n    }\n  \n    95% {\n      opacity: 0.95;\n    }\n  \n    97% {\n      opacity: 0.93;\n    }\n  \n    to {\n      opacity: 1;\n    }\n  }\n"]))),E=function(){return Object(j.jsx)(D,{children:Object(j.jsxs)("div",{className:"title",children:[Object(j.jsxs)("div",{className:"sign",children:[Object(j.jsx)("span",{className:"fast-flicker",children:"Bru"}),"sh  ",Object(j.jsx)("span",{className:"flicker",children:"  U"}),"p"]}),Object(j.jsx)("div",{children:Object(j.jsx)("span",{className:"title-span",children:"your IQ"})})]})})},H=Object(y.a)(z||(z=Object(O.a)(["\nhtml {\n    height: 100%;\n  }\n  body {\n    margin: 0;\n    padding-top: 2rem;\n    display: grid;\n    place-items: center;\n    background: #222;\n    color: #fff;\n    font-size: 1rem;\n  }\n  * {\n    font-family: 'Kiwi Maru', serif;\n    box-sizing: border-box;\n  }\n"]))),_=function(){return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)(H,{}),Object(j.jsx)(E,{}),Object(j.jsx)(B,{title:"General Knowledge",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.",image:Q,category:"General",link:"/general"}),Object(j.jsx)(B,{title:"History",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.",image:G,category:"History",link:"/history"}),Object(j.jsx)(B,{title:"Geography",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.",image:q,category:"Geography",link:"/geography"}),Object(j.jsx)(B,{title:"Computer Science",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.",image:I,category:"CS",link:"/computer-science"}),Object(j.jsx)(B,{title:"Politics",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.",image:L,category:"Politics",link:"/politics"}),Object(j.jsx)(B,{title:"Arts",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.",image:U,category:"Arts",link:"/arts"})]})},P=y.b.div(M||(M=Object(O.a)([" \nwidth: 80vw;\nmin-height: 60vh;\nbackground: #333;\nborder-radius: 10px;\nborder: 1em solid #555;\npadding: 2rem;\nbox-shadow: 0px 5px 10px rgba(0, 0, 0, 0.25);\ntext-align: center;\ndisplay: flex;\nflex-direction: column;\njustify-content: center;\nalign-items: center;\nmargin: 2rem;\nposition: relative;\n\n.score{\n  position: absolute;\n  top: 5%;\n  right: 10%;\n  font-size: 2rem;\n  color: #9eb5ff;\n}\n\n.next{\n  position: absolute;\n  bottom: 5%;\n  right: 40%;\n  padding: .5rem 2rem;\n  border-radius: 1rem;\n}\n\n@media (max-width: 770px) {\n  .next{\n    right: 40%;\n\n  }\n  .score{\n    font-size: 1.5rem;\n    top: 10%;\n    right: 20%;\n  }\n}\n\n@media (max-width: 425px) {\n  .next{\n    bottom: -15%;\n    right: 20%;\n\n  }\n  .score{\n    font-size: 1.5rem;\n    top: -6%;\n  }\n}\n\n@media (max-width: 375px) {\n  .next{\n    bottom: -15%;\n    right: 20%;\n\n  }\n  .score{\n    font-size: 1.5rem;\n    top: -5%;\n  }\n\n"]))),F=y.b.div(N||(N=Object(O.a)(["\n  background: transparent;\n  :hover {\n    opacity: 0.8;\n  }\n  button {\n    cursor: pointer;\n    font-size: 1rem;\n    font-weight: 700;\n    width: 40vw;\n    max-height: 5rem;\n    min-height:1rem;\n    margin: 5px 0;\n    background: ",";\n    border: 3px solid #ffffff;\n    box-shadow: 1px 2px 0 rgba(0, 0, 0, 0.1);\n    border-radius: 1rem;\n    color: #fff;\n    text-shadow: 0 1px 0 rgba(0, 0, 0, 0.25);\n  }\n  @media (max-width: 425px) {\n    font-size: .5rem;\n\n    button{\n      font-size: .7rem;\n    }\n  \n  }\n  "])),(function(n){var e=n.correct,t=n.userClicked;return e?"linear-gradient(90deg, #5aff15, #00b712)":!e&&t?"linear-gradient(90deg, #a71d31, #3f0d12)":"linear-gradient(90deg, #fc575e, #f7b42c)"})),X=function(n){var e=n.question,t=n.answers,r=n.userAnswer,i=n.questionNr,o=n.totalQuestions,a=n.score,c=n.nextQuery,s=n.callback;return Object(j.jsxs)(P,{children:[Object(j.jsxs)("p",{className:"question",children:["Question: ",i," / ",o]}),Object(j.jsxs)("p",{className:"score",children:["Score : ",a]}),Object(j.jsx)("p",{dangerouslySetInnerHTML:{__html:e}}),Object(j.jsx)("div",{children:t&&t.map((function(n){return Object(j.jsx)(F,{correct:(null===r||void 0===r?void 0:r.correctAnswer)===n,userClicked:(null===r||void 0===r?void 0:r.answer)===n,children:Object(j.jsx)("button",{disabled:!!r,value:n,onClick:s,children:Object(j.jsx)("p",{dangerouslySetInnerHTML:{__html:n}})})},n)}))}),Object(j.jsx)("button",{className:"next",onClick:c,children:"Next Question"})]})},K=t(30),T=Object(y.a)(A||(A=Object(O.a)(["\nhtml {\n    height: 100%;\n  }\n  body {\n    margin: 0;\n    padding-top: 2rem;\n    background: #222;\n    color: #fff;\n    font-size: 1rem;\n    display: grid;\n    place-items: center;\n  }\n  * {\n    font-family: 'Kiwi Maru', serif;\n    box-sizing: border-box;\n  }\n\n  .log-out{\n    position: absolute;\n    right: 5%;\n    background: #777;\n    padding: .5rem 2rem;\n    border-radius: 1rem;\n  }\n\n  .log-icon{\n    font-size: 1rem;\n\n}\n"]))),J=function(){var n=Object(a.useContext)(x),e=n.gameOver,t=n.loading,r=n.score,i=n.questions,o=n.number,c=n.userAnswer,s=n.checkAnswer,d=n.nextQuery;return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)(T,{}),Object(j.jsxs)("div",{children:[t?Object(j.jsx)("p",{children:"Loading Queries..."}):null,!t&&!e&&Object(j.jsx)(X,{questionNr:o+1,totalQuestions:10,question:i[o].question,answers:i[o].answers,userAnswer:c?c[o]:void 0,callback:s,score:r,nextQuery:d}),!e&&9===o&&Object(j.jsx)(h.b,{className:"log-out",to:"/",children:Object(j.jsx)(K.a,{})})]})]})},R=function(){return Object(j.jsx)(j.Fragment,{children:Object(j.jsx)(g,{children:Object(j.jsxs)(m.c,{children:[Object(j.jsx)(m.a,{exact:!0,path:"/",component:_}),Object(j.jsx)(m.a,{exact:!0,path:"/general",component:J}),Object(j.jsx)(m.a,{exact:!0,path:"/computer-science",component:J}),Object(j.jsx)(m.a,{exact:!0,path:"/history",component:J}),Object(j.jsx)(m.a,{exact:!0,path:"/geography",component:J}),Object(j.jsx)(m.a,{exact:!0,path:"/arts",component:J}),Object(j.jsx)(m.a,{exact:!0,path:"/politics",component:J})]})})})};d.a.render(Object(j.jsx)(c.a.StrictMode,{children:Object(j.jsx)(h.a,{children:Object(j.jsx)(R,{})})}),document.getElementById("root"))}},[[43,1,2]]]);
//# sourceMappingURL=main.c0ced33a.chunk.js.map