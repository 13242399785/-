(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-f726b6d4"],{1125:function(t,e,r){},9649:function(t,e,r){var i=r("7c46");t.exports=function(t){if("number"!=typeof t&&"Number"!=i(t))throw TypeError("Incorrect invocation");return+t}},bb2d:function(t,e,r){"use strict";var i=r("058c"),n=r("d588"),s=r("9649"),a=r("c3a2"),c=r("a394"),o=1..toFixed,u=Math.floor,l=function(t,e,r){return 0===e?r:e%2===1?l(t,e-1,r*t):l(t*t,e/2,r)},f=function(t){var e=0,r=t;while(r>=4096)e+=12,r/=4096;while(r>=2)e+=1,r/=2;return e},h=function(t,e,r){var i=-1,n=r;while(++i<6)n+=e*t[i],t[i]=n%1e7,n=u(n/1e7)},d=function(t,e){var r=6,i=0;while(--r>=0)i+=t[r],t[r]=u(i/e),i=i%e*1e7},p=function(t){var e=6,r="";while(--e>=0)if(""!==r||0===e||0!==t[e]){var i=String(t[e]);r=""===r?i:r+a.call("0",7-i.length)+i}return r},g=o&&("0.000"!==8e-5.toFixed(3)||"1"!==.9.toFixed(0)||"1.25"!==1.255.toFixed(2)||"1000000000000000128"!==(0xde0b6b3a7640080).toFixed(0))||!c((function(){o.call({})}));i({target:"Number",proto:!0,forced:g},{toFixed:function(t){var e,r,i,c,o=s(this),u=n(t),g=[0,0,0,0,0,0],v="",b="0";if(u<0||u>20)throw RangeError("Incorrect fraction digits");if(o!=o)return"NaN";if(o<=-1e21||o>=1e21)return String(o);if(o<0&&(v="-",o=-o),o>1e-21)if(e=f(o*l(2,69,1))-69,r=e<0?o*l(2,-e,1):o/l(2,e,1),r*=4503599627370496,e=52-e,e>0){h(g,0,r),i=u;while(i>=7)h(g,1e7,0),i-=7;h(g,l(10,i,1),0),i=e-1;while(i>=23)d(g,1<<23),i-=23;d(g,1<<i),h(g,1,1),d(g,2),b=p(g)}else h(g,0,r),h(g,1<<-e,0),b=p(g)+a.call("0",u);return u>0?(c=b.length,b=v+(c<=u?"0."+a.call("0",u-c)+b:b.slice(0,c-u)+"."+b.slice(c-u))):b=v+b,b}})},c0d7:function(t,e,r){"use strict";r("1125")},c3a2:function(t,e,r){"use strict";var i=r("d588"),n=r("8f57");t.exports=function(t){var e=String(n(this)),r="",s=i(t);if(s<0||s==1/0)throw RangeError("Wrong number of repetitions");for(;s>0;(s>>>=1)&&(e+=e))1&s&&(r+=e);return r}},ed95:function(t,e,r){"use strict";r.d(e,"a",(function(){return n}));var i=r("1bab");function n(){return Object(i["a"])({url:"/heros"})}},edc3:function(t,e,r){"use strict";r.d(e,"a",(function(){return n})),r.d(e,"e",(function(){return s})),r.d(e,"b",(function(){return a})),r.d(e,"h",(function(){return c})),r.d(e,"d",(function(){return o})),r.d(e,"g",(function(){return u})),r.d(e,"i",(function(){return l})),r.d(e,"c",(function(){return f})),r.d(e,"f",(function(){return h}));var i=r("1bab");function n(){return Object(i["a"])({url:"/strategy/ads"})}function s(){return Object(i["a"])({url:"/strategy/hotvideos"})}function a(){return Object(i["a"])({url:"/strategy/boutique_section"})}function c(){return Object(i["a"])({url:"/strategy/heros"})}function o(t){return Object(i["a"])({url:"/strategy/hero_strategies/".concat(t)})}function u(){return Object(i["a"])({url:"/strategy/race_outique"})}function l(){return Object(i["a"])({url:"/strategy/videos"})}function f(t){return Object(i["a"])({url:"/strategy/graphics",params:t})}function h(t){return Object(i["a"])({url:"/strategy/more",params:t})}},fae2:function(t,e,r){"use strict";r.r(e);var i=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("div",{staticClass:"nav"},[r("ul",{staticClass:"d-flex jc-between"},t._l(t.moreStrategies,(function(e,i){return r("li",{key:e._id,staticClass:"flex1 t-center fs13",on:{click:function(e){return t.navClick(i)}}},[r("span",{style:t.currentNavIndex===i?{"border-color":"#d59b40",color:"#d59b40"}:{}},[t._v(t._s(e.name))])])})),0)]),r("swiper",{ref:"swiper",attrs:{options:{autoHeight:!0}}},t._l(t.moreStrategies,(function(e,i){return r("swiper-slide",{key:e._id,class:t.isNoSwiping?"swiper-no-swiping":"",nativeOn:{touchstart:function(e){return t.touchstart(e)},touchend:function(e){return t.ontouchend(e)}}},[e.heros?r("div",{staticStyle:{position:"relative"}},[r("ul",{staticClass:"hero-intr clearfix"},[t._l(e.heros,(function(e,i){return r("li",{key:e._id,staticClass:"l",style:t.currentHero===i?{"border-color":"#db9e3f"}:{},on:{click:function(r){return t.heroClick(e._id,i)}}},[r("div",[r("img",{attrs:{src:e.avatar}})]),r("span",[t._v(t._s(t._f("heroType")(i)))])])})),r("li",{staticClass:"l",on:{click:t.moreHeros}},[t._v(t._s("收起"))])],2),t.heroStrategyInfo?r("div",{staticClass:"hero-intr-location"},[r("p",{staticClass:"l"},[r("span",[t._v(t._s(t.heroStrategyInfo.name))]),r("span",[t._v(t._s(t.heroStrategyInfo.cate[0].name))]),r("span",[t._v("登场排名 "+t._s(t.heroStrategyInfo.appearance_rank))]),r("span",[t._v("胜率排名 "+t._s(t.heroStrategyInfo.win_rate_rank))])]),r("span",{staticClass:"r"},[t._v("查看英雄详细介绍>")])]):t._e(),t.heroList?r("div",{directives:[{name:"show",rawName:"v-show",value:t.isMoreHeros,expression:"isMoreHeros"}],staticClass:"hero-dropdown"},[r("scroll",{ref:"heroListScroll",refInFor:!0,staticClass:"herolist",attrs:{"probe-type":2,click:"","stop-propagation":""}},[r("ul",{staticClass:"clearfix"},t._l(t.currentHeroList,(function(e){return r("li",{key:e._id,staticClass:"l t-center",on:{click:function(r){return t.heroClick(e._id)}}},[r("img",{attrs:{src:e.avatar}}),r("span",[t._v(t._s(e.name))])])})),0)]),r("ul",{staticClass:"hero_type"},t._l(t.heroList,(function(e,i){return r("li",{key:e._id,staticClass:"t-center",style:t.currentHeroType===i?{"background-color":"#db9e3f",color:"#fff"}:{},on:{click:function(e){return t.heroTypeClick(i)}}},[t._v(t._s(e.name))])})),0)],1):t._e(),t.heroStrategies?r("div",{staticStyle:{"background-color":"#fff"}},[r("ul",{staticClass:"hero-intr-list"},[t._l(t.heroStrategies.graphics,(function(e){return r("li",{key:e._id,staticClass:"clearfix"},[r("a",{attrs:{href:e.url}},[r("img",{staticClass:"l",attrs:{src:e.img}}),r("div",{staticClass:"r"},[r("p",{staticClass:"t-ellipsis fs15 fc-3"},[t._v(t._s(e.title))]),r("p",{staticClass:"fc-7"},[t._v("刚刚")])])])])})),t._l(t.heroStrategies.videos,(function(e){return r("li",{key:e._id,staticClass:"clearfix"},[r("a",{attrs:{href:e.url}},[r("img",{staticClass:"l",attrs:{src:e.img}}),r("div",{staticClass:"r"},[r("p",{staticClass:"t-ellipsis fs15 fc-3"},[t._v(t._s(e.title))]),r("p",{staticClass:"fc-7"},[t._v("刚刚")])])])])}))],2)]):t._e()]):t._e(),e.children?r("div",[r("div",{staticClass:"sub-nav"},[r("ul",{staticClass:"d-flex fc-7"},t._l(e.children,(function(e,i){return r("li",{key:e._id,style:t.activeSubCates(i)?{color:"#d59b40"}:{},on:{click:function(e){return t.subCatesClick(i)}}},[t._v(t._s(e.name))])})),0)]),r("swiper",{ref:"subSwiper"+i,refInFor:!0,attrs:{options:{autoHeight:!0}},on:{"slide-change":t.slideChange}},t._l(e.children,(function(e,i){return r("swiper-slide",{key:i},[r("ul",{staticClass:"strategy-list"},t._l(e.strategy_list,(function(e){return r("li",{key:e._id},[r("a",{staticClass:"clearfix",attrs:{href:e.url}},[r("div",{staticClass:"strategy-pic l"},[r("i"),r("img",{attrs:{src:e.img}})]),r("div",{staticClass:"strategy-info r"},[r("p",{staticClass:"fs13 fc-3 t-ellipsis-2"},[t._v(t._s(e.title))]),r("div",{staticClass:"fs12 pt7"},[r("span",{staticClass:"v-num"},[r("i"),t._v(" "+t._s(t._f("playVolume")(e.play_volume))+" ")]),r("span",{staticClass:"v-time"},[r("i"),t._v(" "+t._s(e.time)+" ")])])])])])})),0)])})),1)],1):t._e()])})),1)],1)},n=[],s=r("4833"),a=(r("6a61"),r("bb2d"),r("edc3")),c=r("ed95"),o=r("5d17"),u={name:"MoreStrategies",data:function(){return{moreStrategies:null,isNoSwiping:!1,currentNavIndex:0,isMoreHeros:!1,heroList:null,currentHeroType:0,strategyHeros:null,heroStrategyInfo:null,heroStrategies:null,currentHero:"",currentBoutiqueSection:0,currentRaceOutique:0,currentVideos:0,graphics:0}},filters:{heroType:function(t){return t+1<=3?"热门":t+1>=3&&t+1<=5?"限免":"最新"},playVolume:function(t){return(t+"").length>=5?parseFloat(t/1e4).toFixed(1)+"万":t}},computed:{currentHeroList:function(){return this.heroList?this.heroList[this.currentHeroType].hero_list:[]}},components:{Scroll:o["a"]},methods:{activeSubCates:function(t){return 1===this.currentNavIndex?this.currentBoutiqueSection===t:2===this.currentNavIndex?this.currentRaceOutique===t:3===this.currentNavIndex?this.currentVideos===t:4===this.currentNavIndex?this.graphics===t:void 0},getMore:function(){var t=this;return Object(s["a"])(regeneratorRuntime.mark((function e(){var r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(a["f"])();case 2:if(r=e.sent,r){e.next=5;break}return e.abrupt("return");case 5:t.moreStrategies=r.data,console.log(r.data);case 7:case"end":return e.stop()}}),e)})))()},getHeroList:function(){var t=this;return Object(s["a"])(regeneratorRuntime.mark((function e(){var r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(c["a"])();case 2:if(r=e.sent,r){e.next=5;break}return e.abrupt("return");case 5:t.heroList=r.data;case 6:case"end":return e.stop()}}),e)})))()},getStrategyHeros:function(){var t=this;return Object(s["a"])(regeneratorRuntime.mark((function e(){var r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(a["h"])();case 2:if(r=e.sent,r){e.next=5;break}return e.abrupt("return");case 5:t.strategyHeros=r.data,t.getHeroStrategies(t.strategyHeros[0]._id);case 7:case"end":return e.stop()}}),e)})))()},getHeroStrategies:function(t){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function r(){var i;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.next=2,Object(a["d"])(t);case 2:if(i=r.sent,i){r.next=5;break}return r.abrupt("return");case 5:if(0!==i.data.videos.length){r.next=7;break}return r.abrupt("return",e.heroStrategyInfo=i.data);case 7:e.heroStrategyInfo=i.data,e.heroStrategies=i.data;case 9:case"end":return r.stop()}}),r)})))()},touchstart:function(){this.isNoSwiping=!0},ontouchend:function(){this.isNoSwiping=!1},navClick:function(t){this.currentNavIndex=t,this.$refs.swiper.swiper.slideTo(t)},moreHeros:function(){this.isMoreHeros=!this.isMoreHeros},heroClick:function(t,e){this.getHeroStrategies(t),this.isMoreHeros=!1,this.currentHero=e},heroTypeClick:function(t){this.currentHeroType=t,this.$refs.heroListScroll[0].refresh()},subCatesClick:function(t){return 1===this.currentNavIndex?(this.currentBoutiqueSection=t,this.$refs.subSwiper1[0].swiper.slideTo(t)):2===this.currentNavIndex?(this.currentRaceOutique=t,this.$refs.subSwiper2[0].swiper.slideTo(t)):3===this.currentNavIndex?(this.currentVideos=t,this.$refs.subSwiper3[0].swiper.slideTo(t)):4===this.currentNavIndex?(this.graphics=t,this.$refs.subSwiper4[0].swiper.slideTo(t)):void 0},slideChange:function(){return 1===this.currentNavIndex?this.currentBoutiqueSection=this.$refs.subSwiper1[0].swiper.realIndex:2===this.currentNavIndex?this.currentRaceOutique=this.$refs.subSwiper2[0].swiper.realIndex:3===this.currentNavIndex?this.currentVideos=this.$refs.subSwiper3[0].swiper.realIndex:4===this.currentNavIndex?this.graphics=this.$refs.subSwiper4[0].swiper.realIndex:void 0}},created:function(){this.$store.commit("hideNavBbar"),this.getMore(),this.getHeroList(),this.getStrategyHeros()}},l=u,f=(r("c0d7"),r("5d22")),h=Object(f["a"])(l,i,n,!1,null,"8b67ed3a",null);e["default"]=h.exports}}]);
//# sourceMappingURL=chunk-f726b6d4.8499b629.js.map