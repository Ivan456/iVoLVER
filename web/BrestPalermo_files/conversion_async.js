(function(){var f=this;var k=/^true$/.test("false")?!0:!1;var p=function(a){p[" "](a);return a};p[" "]=function(){};var q=function(a,b){for(var d in a)Object.prototype.hasOwnProperty.call(a,d)&&b.call(void 0,a[d],d,a)};var r=String.prototype.trim?function(a){return a.trim()}:function(a){return a.replace(/^[\s\xa0]+|[\s\xa0]+$/g,"")},t=function(a,b){return a<b?-1:a>b?1:0};var y;a:{var z=f.navigator;if(z){var A=z.userAgent;if(A){y=A;break a}}y=""};var B=-1!=y.indexOf("Opera")||-1!=y.indexOf("OPR"),C=-1!=y.indexOf("Trident")||-1!=y.indexOf("MSIE"),D=-1!=y.indexOf("Edge"),E=-1!=y.indexOf("Gecko")&&!(-1!=y.toLowerCase().indexOf("webkit")&&-1==y.indexOf("Edge"))&&!(-1!=y.indexOf("Trident")||-1!=y.indexOf("MSIE"))&&-1==y.indexOf("Edge"),F=-1!=y.toLowerCase().indexOf("webkit")&&-1==y.indexOf("Edge"),G=function(){var a=y;if(E)return/rv\:([^\);]+)(\)|;)/.exec(a);if(D)return/Edge\/([\d\.]+)/.exec(a);if(C)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);
if(F)return/WebKit\/(\S+)/.exec(a)},H=function(){var a=f.document;return a?a.documentMode:void 0},I=function(){if(B&&f.opera){var a;var b=f.opera.version;try{a=b()}catch(d){a=b}return a}a="";(b=G())&&(a=b?b[1]:"");return C&&(b=H(),b>parseFloat(a))?String(b):a}(),J={},K=function(a){if(!J[a]){for(var b=0,d=r(String(I)).split("."),c=r(String(a)).split("."),e=Math.max(d.length,c.length),g=0;0==b&&g<e;g++){var h=d[g]||"",l=c[g]||"",v=RegExp("(\\d*)(\\D*)","g"),w=RegExp("(\\d*)(\\D*)","g");do{var m=v.exec(h)||
["","",""],n=w.exec(l)||["","",""];if(0==m[0].length&&0==n[0].length)break;b=t(0==m[1].length?0:parseInt(m[1],10),0==n[1].length?0:parseInt(n[1],10))||t(0==m[2].length,0==n[2].length)||t(m[2],n[2])}while(0==b)}J[a]=0<=b}},L=f.document,M=L&&C?H()||("CSS1Compat"==L.compatMode?parseInt(I,10):5):void 0;var N;if(!(N=!E&&!C)){var O;if(O=C)O=9<=M;N=O}N||E&&K("1.9.1");C&&K("9");var P=function(a){this.b=[];this.a={};for(var b=0,d=arguments.length;b<d;++b)this.a[arguments[b]]=""},aa=function(){var a=Q,b=a.b.concat([]);q(a.a,function(a){""!=a&&b.push(a)});return b};var Q,R="google_conversion_id google_conversion_format google_conversion_type google_conversion_order_id google_conversion_language google_conversion_value google_conversion_currency google_conversion_domain google_conversion_label google_conversion_color google_disable_viewthrough google_remarketing_only google_remarketing_for_search google_conversion_items google_custom_params google_conversion_date google_conversion_time google_conversion_js_version onload_callback opt_image_generator google_is_call google_conversion_page_url google_conversion_referrer_url".split(" ");
function S(a){return null!=a?escape(a.toString()):""}function T(a){return null!=a?a.toString().substring(0,512):""}function U(a,b){var d=S(b);if(""!=d){var c=S(a);if(""!=c)return"&".concat(c,"=",d)}return""}function V(a){var b=typeof a;return null==a||"object"==b||"function"==b?null:String(a).replace(/,/g,"\\,").replace(/;/g,"\\;").replace(/=/g,"\\=")}
function ba(a){var b;if((a=a.google_custom_params)&&"object"==typeof a&&"function"!=typeof a.join){var d=[];for(b in a)if(Object.prototype.hasOwnProperty.call(a,b)){var c=a[b];if(c&&"function"==typeof c.join){for(var e=[],g=0;g<c.length;++g){var h=V(c[g]);null!=h&&e.push(h)}c=0==e.length?null:e.join(",")}else c=V(c);(e=V(b))&&null!=c&&d.push(e+"="+c)}b=d.join(";")}else b="";return""==b?"":"&".concat("data=",encodeURIComponent(b))}
function W(a){return"number"!=typeof a&&"string"!=typeof a?"":S(a.toString())}function ca(a){if(!a)return"";a=a.google_conversion_items;if(!a)return"";for(var b=[],d=0,c=a.length;d<c;d++){var e=a[d],g=[];e&&(g.push(W(e.value)),g.push(W(e.quantity)),g.push(W(e.item_id)),g.push(W(e.adwords_grouping)),g.push(W(e.sku)),b.push("("+g.join("*")+")"))}return 0<b.length?"&item="+b.join(""):""}
function da(a,b,d){var c=[];if(a){var e=a.screen;e&&(c.push(U("u_h",e.height)),c.push(U("u_w",e.width)),c.push(U("u_ah",e.availHeight)),c.push(U("u_aw",e.availWidth)),c.push(U("u_cd",e.colorDepth)));a.history&&c.push(U("u_his",a.history.length))}d&&"function"==typeof d.getTimezoneOffset&&c.push(U("u_tz",-d.getTimezoneOffset()));b&&("function"==typeof b.javaEnabled&&c.push(U("u_java",b.javaEnabled())),b.plugins&&c.push(U("u_nplug",b.plugins.length)),b.mimeTypes&&c.push(U("u_nmime",b.mimeTypes.length)));
return c.join("")}function X(a,b,d,c){var e="";if(b){var g;if(a.top==a)g=0;else{var h=a.location.ancestorOrigins;if(h)g=h[h.length-1]==a.location.origin?1:2;else{h=a.top;try{var l;if(l=!!h&&null!=h.location.href)c:{try{p(h.foo);l=!0;break c}catch(v){}l=!1}g=l}catch(w){g=!1}g=g?1:2}}l="";l=d?d:1==g?a.top.location.href:a.location.href;e+=U("frm",g);e+=U("url",T(l));e+=U("ref",T(c||b.referrer))}return e}
function Y(a){return!k&&!ea.test(navigator.userAgent)||a&&a.location&&a.location.protocol&&"https:"==a.location.protocol.toString().toLowerCase()?"https:":"http:"}var ea=/Android ([01]\.|2\.[01])/i;function fa(){return new Image}function Z(a,b,d){var c=fa;"function"===typeof a.opt_image_generator&&(c=a.opt_image_generator);c=c();b+=U("async","1");c.src=b;c.onload=d&&"function"===typeof a.onload_callback?a.onload_callback:function(){}}
function ga(a){for(var b=window,d={},c=function(c){d[c]=a&&null!=a[c]?a[c]:b[c]},e=0;e<R.length;e++)c(R[e]);c("onload_callback");return d};window.google_trackConversion=function(a){a=ga(a);a.google_conversion_format=3;var b;var d=window,c=navigator,e=document,g=!1;if(a&&3==a.google_conversion_format){try{var h;"landing"==a.google_conversion_type||!a.google_conversion_id||a.google_remarketing_only&&a.google_disable_viewthrough?h=!1:(a.google_conversion_date=new Date,a.google_conversion_time=a.google_conversion_date.getTime(),a.google_conversion_snippets="number"==typeof a.google_conversion_snippets&&0<a.google_conversion_snippets?a.google_conversion_snippets+
1:1,"number"!=typeof a.google_conversion_first_time&&(a.google_conversion_first_time=a.google_conversion_time),a.google_conversion_js_version="8",0!=a.google_conversion_format&&1!=a.google_conversion_format&&2!=a.google_conversion_format&&3!=a.google_conversion_format&&(a.google_conversion_format=1),Q=new P(1),h=!0);if(h){h="/?";"landing"==a.google_conversion_type&&(h="/extclk?");var l,v=[a.google_remarketing_only?"viewthroughconversion/":"conversion/",S(a.google_conversion_id),h,"random=",S(a.google_conversion_time)].join(""),
w=a.google_remarketing_only?"googleads.g.doubleclick.net":a.google_conversion_domain||"www.googleadservices.com";l=Y(d)+"//"+w+"/pagead/"+v;var m;b:{var n=a.google_conversion_language;if(null!=n){var u=n.toString();if(2==u.length){m=U("hl",u);break b}if(5==u.length){m=U("hl",u.substring(0,2))+U("gl",u.substring(3,5));break b}}m=""}b=[U("cv",a.google_conversion_js_version),U("fst",a.google_conversion_first_time),U("num",a.google_conversion_snippets),U("fmt",a.google_conversion_format),U("value",a.google_conversion_value),
U("currency_code",a.google_conversion_currency),U("label",a.google_conversion_label),U("oid",a.google_conversion_order_id),U("bg",a.google_conversion_color),m,U("guid","ON"),U("disvt",a.google_disable_viewthrough),U("is_call",a.google_is_call),U("eid",aa().join()),ca(a),da(d,c,a.google_conversion_date),ba(a),X(d,e,a.google_conversion_page_url,a.google_conversion_referrer_url),a.google_remarketing_for_search&&!a.google_conversion_domain?"&srr=n":""].join("");Z(a,l+b,!0);if(a.google_remarketing_for_search&&
!a.google_conversion_domain){var x,ha=[S(a.google_conversion_id),"/?random=",Math.floor(1E9*Math.random())].join("");x=Y(d)+"//www.google.com/ads/user-lists/"+ha;x+=[U("label",a.google_conversion_label),U("fmt","3"),X(d,e,a.google_conversion_page_url,a.google_conversion_referrer_url)].join("");Z(a,x,!1)}g=!0}}catch(ia){}b=g}else b=!1;return b};}).call(this);
