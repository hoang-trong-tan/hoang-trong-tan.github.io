$(document).ready(function(){
    MSIE8 = ($.browser.msie) && ($.browser.version == 8),
	$.fn.ajaxJSSwitch({
		topMargin: 194,//mandatory property for decktop
		bottomMargin: 117,//mandatory property for decktop
		topMarginMobileDevices: 194,//mandatory property for mobile devices
		bottomMarginMobileDevices: 117,//mandatory property for mobile devices
        delaySubMenuHide: 300,
        bodyMinHeight: 986,
		menuInit:function (classMenu, classSubMenu){
		},
		buttonOver:function (item){
            $('>strong',item).stop().animate({'height':'0','top':'100%'},500,'easeOutCubic')
        },
		buttonOut:function (item){
            $('>strong',item).stop().animate({'height':'100%','top':'0'},600,'easeInOutCubic')
        },
		subMenuButtonOver:function (item){
		    item.siblings('span').stop().animate({'backgroundPosition':'0px 0px'},500,'easeOutCubic')
		},
		subMenuButtonOut:function (item){
            item.siblings('span').stop().animate({'backgroundPosition':'-5px 0px'},500,'easeOutCubic')
		},
		subMenuShow:function(subMenu){
        	subMenu.stop(true,true).animate({"height":"show"}, 400, "easeOutCubic");
		},
		subMenuHide:function(subMenu){
        	subMenu.stop(true,true).animate({"height":"hide"}, 500, "easeOutCubic");
		},
		pageInit:function (pages){
		},
		currPageAnimate:function (page){
		    $('footer').stop().animate({'paddingTop':24,'backgroundPosition':'0px -4px'})
                .find('>div>div>div').not(':first-child').stop().animate({'top':0});
            $('.banners').stop().animate({'top':'270px'})
            
            page.css({"top":$(window).height()}).stop(true).delay(400).animate({"top":0}, 1500, "easeOutCubic", function (){ $(window).trigger('resize');});
            $('.mainBg').stop().animate({'height':'100%'})
		},
		prevPageAnimate:function (page){
            page.stop(true).animate({"display":"block", "top":-$(window).height()}, 700, "easeInCubic");
		},
		backToSplash:function (){
            $('footer').stop().animate({'paddingTop':136,'backgroundPosition':'0px 0px'})
                .find('>div>div>div').not(':first-child').stop().animate({'top':250});
            $('.banners').stop().animate({'top':'0px'})
            $('.mainBg').stop().animate({'height':'0'}, 500, "easeInCubic")
        },
		pageLoadComplete:function (){
            if ($(".slider>ul").length) {
                $('.slider>ul').cycle({
                    fx: 'scrollHorz',
                    speed: 800,
            		timeout: 0,        
            		easing: 'easeOutCubic',
            		cleartypeNoBg: true ,
                    rev:0,
                    startingSlide: 0,
                    wrap: true
          		})
            };
            
            if ($(".sliderGall").length) {
                $('.sliderGall').cycle({
                    fx: 'scrollHorz',
                    speed: 800,
            		timeout: 0,
                    next: '.next2',
  		            prev: '.prev2',        
            		easing: 'easeOutCubic',
            		cleartypeNoBg: true ,
                    rev:0,
                    startingSlide: 0,
                    wrap: true
          		})
            };
            
            $('.list2 a').attr('rel','index').fancybox();
        }
	});
})
$(window).load(function(){
    setTimeout(function (){ $(window).trigger('resize') },600)
    
    $("#galleryHolder").gallerySplash({
        autoPlayState:'true',
        paginationDisplay: 'true',
        autoPlayTime: 12,
        alignIMG: 'center'
    });
    
	$("#webSiteLoader").delay(500).animate({opacity:0}, 600, "easeInCubic", function(){$("#webSiteLoader").remove()});
});
function windowH() {
	return (($(window).height()>=parseInt($('body').css('minHeight')))?$(window).height():parseInt($('body').css('minHeight')));
}
$(window).resize(function (){
    var newH = $('header').outerHeight(true) + $('#wrapper section').outerHeight(true) + $('footer').outerHeight(true);
    newH = windowH() - newH;
    var margin = parseInt($('header').css('marginTop')) + newH +4;    
    $('header').stop().animate({'marginTop': margin},400);
})