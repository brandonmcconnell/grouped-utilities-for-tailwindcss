!function(e,i){"object"==typeof exports&&"undefined"!=typeof module?module.exports=i(require("tailwindcss/plugin")):"function"==typeof define&&define.amd?define(["tailwindcss/plugin"],i):(e||self).tailwindcssMulti=i(e.plugin)}(this,function(e){function i(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}/*#__PURE__*/
return i(e).default(function(e){(0,e.matchUtilities)({multi:function(e){var i,t=e.slice(1,-1).split(/;(?![^[]*\])/).map(function(e){return e.replace(/_/g,"\\_").replace(/ /g,"_")}).join(" ");return t.trim()?((i={})["@apply "+t]={},i):{}}})})});
//# sourceMappingURL=index.umd.js.map
