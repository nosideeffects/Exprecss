function toggleModal(){$("#modal-example").on("click",function(n){n.preventDefault(),$("body").append('<div class="modal-overlay"></div>'),$(".modal").toggleClass("modal-hide modal-open")})}function responsiveNavOpen(){$(".btn-responsive-nav").on("click",function(n){$(".navbar ul").toggleClass("nav-close nav-open"),n.preventDefault()})}function responsiveNavClose(){$(".btn-responsive-nav-close").on("click",function(n){$(".navbar ul").toggleClass("nav-close nav-open"),n.preventDefault()})}function dropdownMenu(){$(".dropdown-menu").addClass("dropdown-menu-inactive"),$("body").on("click",".btn-dropdown",function(n){var e=$(this),o=$("#"+e.data("for"));o.toggleClass("dropdown-menu-inactive dropdown-menu-active"),e.focus(),n.preventDefault()}),$("body").on("blur",".btn-dropdown",function(n){var e=$(this),o=$("#"+e.data("for"));o.toggleClass("dropdown-menu-inactive dropdown-menu-active")})}$(document).ready(function(){"use strict";dropdownMenu(),responsiveNavOpen(),responsiveNavClose(),toggleModal()}),function(){"use strict";var n=angular.module("exprecss",[]);n.directive("exMask",function(n){var e=/[\(\)\[\]0-9\-\s]+/,o=/[\(\)\[\]\s\-]/g,t=/[\(\)\[\]\s\-]/,i=function(n,e){var o=0,i=n.length,a="";for(var r in e){var s=e.charAt(r);if(t.test(s))a+=s;else{if(o>=i)break;a+=n[o++]}}return a},a=function(n){return n.replace(o,"").split("")},r=function(n){var e=[];for(var o in n)t.test(n[o])||e.push(+o);return e.push(e[e.length-1]+1),e.shift(),e},s=function(n){var e=0,o=[];for(var i in n)o.push(e),t.test(n[i])||e++;return o.push(o[o.length-1]),o};return{restrict:"A",scope:!0,link:function(o,t,l){var c=l.exMask,u=r(c),v=s(c);console.log(u,v),e.test(c)||n.error("Invalid mask for input");var d=function(n){};t.on("keydown",function(n){if(8===n.which){n.preventDefault();var e=t[0].selectionStart,o=t[0].selectionEnd,r=o-e,s=t.val(),l,u;0===r?((l=s.split("")).splice(e-1,1),s=l.join(""),u=e-1):((l=s.split("")).splice(e,r),s=l.join(""),u=e),t.val(i(a(s),c)),t[0].selectionStart=t[0].selectionEnd=u}}),t.on("keypress",function(n){n.preventDefault();var e=t[0].selectionStart,o=t[0].selectionEnd,r=o-e,s=t.val(),l,d=String.fromCharCode(n.which);/[0-9]/.test(d)&&(0===r?((l=s.split("")).splice(e,0,d),s=l.join("")):((l=s.split("")).splice(e,r,d),s=l.join(""))),t.val(i(a(s),c)),t[0].selectionStart=t[0].selectionEnd=u[v[e]]})}}})}();