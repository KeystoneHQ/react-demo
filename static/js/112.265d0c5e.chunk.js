(window["webpackJsonponboard-notify-react"]=window["webpackJsonponboard-notify-react"]||[]).push([[112],{189:function(n,t,e){"use strict";e.r(t);var r=e(2),a=e.n(r),c=(e(60),e(61));e(27),e(49),e(48);function i(n,t,e,r,a,c,i){try{var o=n[c](i),u=o.value}catch(s){return void e(s)}o.done?t(u):Promise.resolve(u).then(r,a)}function o(n){return function(){var t=this,e=arguments;return new Promise((function(r,a){var c=n.apply(t,e);function o(n){i(c,r,a,o,u,"next",n)}function u(n){i(c,r,a,o,u,"throw",n)}o(void 0)}))}}t.default=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{minimumBalance:"0"},t=n.minimumBalance,e=n.heading,r=n.description,i=n.icon,u=n.html,s=n.button;return function(){var n=o(a.a.mark((function n(o){var l,f,b,p;return a.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(l=o.balance,f=o.BigNumber,b=o.stateSyncStatus,p=o.stateStore,null!==l){n.next=10;break}if(!b.balance){n.next=10;break}return n.prev=3,n.next=6,b.balance;case 6:n.next=10;break;case 8:n.prev=8,n.t0=n.catch(3);case 10:if(!f(p.balance.get()).lt(f(t))){n.next=12;break}return n.abrupt("return",{heading:e||"Get Some ETH",description:r||"Your current account has less than the necessary minimum balance of ".concat(f(t).div(f("1000000000000000000")).toString(10)," ETH."),eventCode:"nsfFail",icon:i||c.j,html:u,button:s});case 12:case"end":return n.stop()}}),n,null,[[3,8]])})));return function(t){return n.apply(this,arguments)}}()}}}]);
//# sourceMappingURL=112.265d0c5e.chunk.js.map