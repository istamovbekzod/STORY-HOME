$(document).ready((function(){$(window).outerWidth(),$(window).outerHeight();var t=window.navigator.userAgent,e=(t.indexOf("MSIE "),{Android:function(){return navigator.userAgent.match(/Android/i)},BlackBerry:function(){return navigator.userAgent.match(/BlackBerry/i)},iOS:function(){return navigator.userAgent.match(/iPhone|iPad|iPod/i)},Opera:function(){return navigator.userAgent.match(/Opera Mini/i)},Windows:function(){return navigator.userAgent.match(/IEMobile/i)},any:function(){return e.Android()||e.BlackBerry()||e.iOS()||e.Opera()||e.Windows()}});function o(){return(t=navigator.userAgent).indexOf("MSIE ")>-1||t.indexOf("Trident/")>-1}if(o()&&$("body").addClass("ie"),e.any()&&$("body").addClass("touch"),(e={Android:function(){return navigator.userAgent.match(/Android/i)},BlackBerry:function(){return navigator.userAgent.match(/BlackBerry/i)},iOS:function(){return navigator.userAgent.match(/iPhone|iPad|iPod/i)},Opera:function(){return navigator.userAgent.match(/Opera Mini/i)},Windows:function(){return navigator.userAgent.match(/IEMobile/i)},any:function(){return e.Android()||e.BlackBerry()||e.iOS()||e.Opera()||e.Windows()}}).any(),location.hash){var n=location.hash.replace("#","");$(".popup-"+n).length>0?u(n):$("div."+n).length>0&&$("body,html").animate({scrollTop:$("div."+n).offset().top},500,(function(){}))}let i=document.querySelector(".icon-menu"),s=document.querySelector("body"),r=document.querySelector(".menu__body");function a(t){""==t.val()&&(t.inputmask("remove"),t.val(t.attr("data-value")),t.removeClass("focus"),t.parent().removeClass("focus"))}function u(t,o){$(".popup").removeClass("active").hide(),$(".header-menu").hasClass("active")||$("body").data("scroll",$(window).scrollTop()),e.any()?setTimeout((function(){$("body").addClass("lock")}),300):($("body").css({paddingRight:$(window).outerWidth()-$(".wrapper").outerWidth()}).addClass("lock"),$(".pdb").css({paddingRight:$(window).outerWidth()-$(".wrapper").outerWidth()})),history.pushState("","","#"+t),""!=o&&null!=o&&$(".popup-"+t+" .popup-video__value").html('<iframe src="https://www.youtube.com/embed/'+o+'?autoplay=1"  allow="autoplay; encrypted-media" allowfullscreen></iframe>'),$(".popup-"+t).fadeIn(300).delay(300).addClass("active"),$(".popup-"+t).find(".slick-slider").length>0&&$(".popup-"+t).find(".slick-slider").slick("setPosition")}function l(){$(".popup").removeClass("active").fadeOut(300),$(".header-menu").hasClass("active")||(e.any()?($("body").removeClass("lock"),$("body,html").scrollTop(parseInt($("body").data("scroll")))):(setTimeout((function(){$("body").css({paddingRight:0}),$(".pdb").css({paddingRight:0})}),200),setTimeout((function(){$("body").removeClass("lock"),$("body,html").scrollTop(parseInt($("body").data("scroll")))}),200))),$(".popup-video__value").html(""),history.pushState("","",window.location.href.split("#")[0])}function c(){var t=$(window).outerWidth();$(window).outerHeight();!function(t,e){var o=$(".header__logos"),n=$(".header__address");t<576?n.hasClass("done")||n.addClass("done").appendTo(o):n.hasClass("done")&&n.removeClass("done").prependTo($(".header__body"))}(t)}i&&i.addEventListener("click",(function(){s.classList.toggle("lock"),i.classList.toggle("active"),r.classList.toggle("active")})),function(){if(o()){let e=document.querySelectorAll(".ibg");for(var t=0;t<e.length;t++)e[t].querySelector("img")&&null!=e[t].querySelector("img").getAttribute("src")&&(e[t].style.backgroundImage="url("+e[t].querySelector("img").getAttribute("src")+")")}}(),$((function(){window.innerWidth<576&&$(document).ready((function(){$(".about__toggle").click((function(){return $(".more").slideToggle(300,(function(){$(this).is(":hidden")?$(".about__toggle").html("Читать далее..."):$(".about__toggle").html("Скрыть")})),!1}))}))})),$.each($("input.phone"),(function(t,e){$(this).attr("type","tel"),$(this).focus((function(){$(this).inputmask("+375(99)999-99-99",{clearIncomplete:!0,clearMaskOnLostFocus:!0,onincomplete:function(){a($(this))}}),$(this).addClass("focus"),$(this).parent().addClass("focus"),$(this).parent().removeClass("err"),$(this).removeClass("err")}))})),$("input.phone").focusout((function(t){a($(this))})),$.each($("input.num"),(function(t,e){$(this).focus((function(){$(this).inputmask("9{1,1000}",{clearIncomplete:!0,placeholder:"",clearMaskOnLostFocus:!0,onincomplete:function(){a($(this))}}),$(this).addClass("focus"),$(this).parent().addClass("focus"),$(this).parent().removeClass("err"),$(this).removeClass("err")}))})),$("input.num").focusout((function(t){a($(this))})),$(".pl").click((function(t){return u($(this).attr("href").replace("#",""),$(this).data("vid")),!1})),$(".popup-close,.popup__close").click((function(t){return l(),!1})),$(".popup").click((function(t){if(!$(t.target).is(".popup>.popup-table>.cell *")||$(t.target).is(".popup-close")||$(t.target).is(".popup__close"))return l(),!1})),$(document).on("keydown",(function(t){27==t.which&&l()})),$(window).resize((function(t){c()})),c(),$(".mainslider").length>0&&$(".mainslider").slick({infinite:!1,dots:!1,arrows:!0,slidesToShow:3,accessibility:!1,autoplaySpeed:3e3,nextArrow:'<button type="button" class="slick-next"></button>',prevArrow:'<button type="button" class="slick-prev"></button>',responsive:[{breakpoint:1300,settings:{arrows:!1,dots:!0},breakpoint:991,settings:{arrows:!1,dots:!0,slidesToShow:2},breakpoint:576,settings:{arrows:!1,dots:!0,slidesToShow:1}}]}),$((function(){window.innerWidth<991&&$(".work-slider").length>0&&$(".work-slider").slick({infinite:!1,dots:!0,arrows:!1,slidesToShow:2,accessibility:!1,autoplaySpeed:3e3,nextArrow:'<button type="button" class="slick-next"></button>',prevArrow:'<button type="button" class="slick-prev"></button>',responsive:[{breakpoint:576,settings:{dots:!0,slidesToShow:1}}]})})),$(".popup-slider").length>0&&$(".popup-slider").slick({infinite:!1,dots:!0,arrows:!0,slidesToShow:1,accessibility:!1,autoplaySpeed:3e3,nextArrow:'<button type="button" class="slick-next"></button>',prevArrow:'<button type="button" class="slick-prev"></button>',responsive:[{breakpoint:1300,settings:{}}]})}));