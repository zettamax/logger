var userData={internalIPs:[],externalIPs:{ipv4:[],ipv6:[]},fingerprintHash:"",userAgent:navigator.userAgent};getIPs(function(a){a.match(/^(192\.168\.|169\.254\.|10\.|172\.(1[6-9]|2\d|3[01]))/)?userData.internalIPs.push(a):a.match(/^[a-f0-9]{1,4}(:[a-f0-9]{1,4}){7}$/)?userData.externalIPs.ipv6.push(a):userData.externalIPs.ipv4.push(a)});(new Fingerprint2).get(function(a,b){userData.fingerprintHash=a});
var sendInfo=function(a){setTimeout(function(){var b=new XMLHttpRequest;b.open("POST",a,!0);b.setRequestHeader("Content-Type","application/json; charset=UTF-8");b.send(JSON.stringify(userData));b.onloadend=function(){}},3E3)};
