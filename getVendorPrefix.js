//getVendorPrefix
var prefix=(function(ua){
 var s=ua.toLowerCase();
 return /webkit/.test(s)?'-webkit-':/mozilla/.test(s)?'-moz-':/msie/.test(s)?'-ms-':/opera/.test(s)?'-o-':'';
})(navigator.userAgent);
log(prefix);
