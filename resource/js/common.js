//사이드 메뉴
var $sideMenu = $('.side_menu'), 
    $layerMenu = $('.layer_menu'), 
    $inner = $layerMenu.find('.menu_area'), 
    $dimmed = $layerMenu.find(".dimmed"), 
    $menuClose = $layerMenu.find(".menu_close"), 
    wh = $(window).height(), opened = false;
$dimmed.hide();
$inner.css({'transition': 'transform 300ms ease', 'transform': 'translate3d(100%, 0, 0)'});
$sideMenu.on('click', function (e) {
    var $this = jQuery(this);
    opened ? close() : open();
});
$dimmed.on('click', function () {close();});
$menuClose.on('click', function () {close();});
$(window).on('resize', function () {opened && open();});
function open() {
    opened = true;
    bodyFreezing();
    $layerMenu.attr('tabindex', 0).addClass("show");
    $dimmed.fadeIn('fast');
    $inner.css({'transition': 'transform 300ms ease', 'transform': 'translate3d(0, 0, 0)'});    
}
function close() {
    opened = false;
    $inner.css({'visibility': 'visible', 'transition': 'transform 300ms ease', 'transform': 'translate3d(100%, 0, 0)' });
    $dimmed.fadeOut('fast');
    $layerMenu.removeAttr('tabindex').removeClass("show").blur();
    $sideMenu.focus();
    bodyUnfreezing();
}
function bodyFreezing() {  
    $('body').addClass('layer_pop_on');
}
function bodyUnfreezing() {
    $('body').removeClass('layer_pop_on');
}

//레이어 열고접기
$('.btn_toggle').click(function(){ 
        var state = $('.layer_toggle').css('display'); 
        if(state == 'none'){ 
            $('.layer_toggle').show();
            $('.btn_toggle').addClass("active");
        }else{ 
            $('.layer_toggle').hide(); 
            $('.btn_toggle').removeClass("active");
        }
 });

//탭 
$(document).on('click', '[data-click="tab"]', function (e) {
    e.preventDefault();
    var thisTab = $(this)
        , thisContents = $('#' + $(this).attr('href'));
    thisTab.parent().addClass('active').siblings().removeClass('active');
    thisContents.addClass('active').siblings().removeClass('active');
});

//위로가기 버튼           
var screenH = screen.height/10;
$(window).scroll(function () {
    if ($(window).scrollTop() > screenH) {
        $('.footer_btn_area').fadeIn().addClass('on');
    }
    else {
        $('.footer_btn_area').fadeOut().removeClass('on');
    }
});
$('.btn_top').click(function () {
    $('html,body').stop().animate({scrollTop: 0}, 200);
});
$('input[type="text"], input[type="number"], input[type="password"]').on('focusin',function(){
    $('.btn_top').attr('style', 'visibility: hidden');
})
$('input[type="text"], input[type="number"], input[type="password"]').on('focusout',function(){
    $('.btn_top').attr('style', 'visibility: visible');
})

//레이어 팝업 : TYPE1(MODAL)
 window.modalLayer = {
        init:function(){this.closeBtnEvent();},
        closeBtnEvent:function(){
            $(document).on('click', '[data-dismiss="modal"]', function(e){
                e.preventDefault();
                $(this).closest('.mlayer_pop');                
                modalLayer.hideEvent($(this).closest('.mlayer_pop'));                
            })
        },
        show:function(target){
            var showLayer = $('#' + target);            
            $('body').addClass('layer_pop_on');            
            showLayer.attr('tabindex',0).slideUp().fadeIn(); 
            $('body').find('.mlayer_pop').addClass('modal_up');   
            $('body').find('.mlayer_pop').removeClass('modal_down');   
            $('body').append('<div class="dimmed"></div>');           
        },
        hide:function(target){
            var hideLayer = $('#' + target);
            this.hideEvent(hideLayer);
        },
        hideEvent:function(target){            
            target.attr('tabindex',-1).slideDown().fadeOut();         
            $('body').removeClass('layer_pop_on');            
            $('body').find('.mlayer_pop').addClass('modal_down');    
            $('body').find('.mlayer_pop').removeClass('modal_up'); 
            $('.dimmed').length && $('.dimmed').remove();  
        }
};
modalLayer.init();

//레이어 팝업 : TYPE2(공지사항)
 window.noticeLayer = {
        init:function(){this.closeBtnEvent();},
        closeBtnEvent:function(){
            $(document).on('click', '[data-dismiss="modal"]', function(e){
                e.preventDefault();
                $(this).closest('.notilayer_pop');                
                modalLayer.hideEvent($(this).closest('.notilayer_pop'));                
            })
        },
        show:function(target){
            var showLayer = $('#' + target);            
            $('body').addClass('layer_pop_on');            
            showLayer.attr('tabindex',0).fadeIn(); 
            $('body').find('.notilayer_pop').css({'display': 'block'});            
            $('body').append('<div class="dimmed"></div>');           
        },
        hide:function(target){
            var hideLayer = $('#' + target);
            this.hideEvent(hideLayer);
        },
        hideEvent:function(target){            
            target.attr('tabindex',-1).fadeOut('fast');         
            $('body').removeClass('layer_pop_on');
            $('.dimmed').length && $('.dimmed').remove();   
            $('body').find('.notilayer_pop').css({'display': 'none'});            
        }
};
noticeLayer.init();

//레이어 팝업 : TYPE3(FULL)
window.fullLayer = {
        init:function(){this.closeBtnEvent();},
        closeBtnEvent:function(){
             $(document).on('click', '[data-dismiss="modal"]', function(e){
                e.preventDefault();
                $(this).closest('.flayer_pop');                
                modalLayer.hideEvent($(this).closest('.flayer_pop'));               
            })
        },              
        show:function(target){
            var showLayer = $('#' + target); 
            $('body').addClass('layer_pop_on');          
            showLayer.attr('tabindex',0).show();             
        },
        hide:function(target){
            var hideLayer = $('#' + target);
            this.hideEvent(hideLayer);
        },
        hideEvent:function(target){
             $('body').removeClass('layer_pop_on');
             $('body').find('.flayer_pop').hide();
        }
    }
fullLayer.init();

//달력선택
$.datepicker.setDefaults({
    prevText: "이전달", 
    nextText: "다음달", 
    currentText: "오늘", 
    monthNames: ["1월", "2월", "3월", "4월", "5월", "6월", "7월", "8월", "9월", "10월", "11월", "12월"], 
    monthNamesShort: ["1월", "2월", "3월", "4월", "5월", "6월", "7월", "8월", "9월", "10월", "11월", "12월"], 
    dayNames: ['일', '월', '화', '수', '목', '금', '토'], 
    dayNamesShort: ['일', '월', '화', '수', '목', '금', '토'], 
    dayNamesMin: ['일', '월', '화', '수', '목', '금', '토'], 
    //weekHeader: "Wk", 
    dateFormat: "yy.mm.dd", 
    //firstDay: 0, 
    //isRTL: false, 
    showMonthAfterYear: true, 
    yearSuffix: "년",     
    changeYear:true,
    changeMonth:true,
    showOn: 'button',
    buttonText: "날짜선택",   
});

//카드선택




//카드,계좌선택 후 팝업 호출 레이어
$(document).on("click", ".btn_toggle_c", function(){
    var state = $(".lyr_menu").css("display");
    if(state == 'none'){ 
        $(".lyr_menu").show(); 
    }else{ 
        $(".lyr_menu").hide(); 
    }
});
$(document).on("click", ".payway_list button", function(){
    $('.lyr_menu').hide(); 
});

//공지사항
var accordion = {
    click: function (target) {
        var _self = this
            , $target = $(target)
        $target.on('click', function () {
            if ($(this).next('.notice_content').css('display') == 'none') {
                $('.notice_content').slideUp();
                _self.onremove($target);
                $(this).addClass('on');
                $(this).next().slideDown();
            }
            else {
                $('.notice_content').slideUp();
                _self.onremove($target);
            }
        });
    }
    , onremove: function ($target) {
        $target.removeClass('on');
    }
};
accordion.click('.notice_title');


//전화번호 선택 레이어
$(document).on("click", ".num_init", function () {
    $(this).parent().find('>li:not(.num_init)').toggle();
});
var li_options = $(".lyr_num_list ul").children('li:not(.num_init)');
$(".lyr_num_list ul").on("click", "li:not(.num_init)", function () {
    li_options.removeClass('selected');
    $(this).addClass('selected');
    $('.phone_selectbox').children().find('.num_default').text($(this).text().trim());
    $(this).parent().find('li:not(.num_init)').toggle();
});

// disabled 일 경우
$("label>input:disabled").parent().addClass('disabled');

// 요금제 조회/변경 로밍 무료서비스
$(document).ready(function () {
    $("input.aa24:checkbox").on('click', function () {
        if ($(this).prop('checked')) {
            $(this).parent().parent().addClass("on");
        }
        else {
            $(this).parent().parent().removeClass("on");
        }
    });
});

// 요금제 조회/변경 로밍 이용기간
$(document).ready(function () {
    $("li.aa23").each(function () {
        $(this).click(function () {
            $(this).addClass("on"); //클릭된 부분을 상단에 정의된 CCS인 selected클래스로 적용
            $(this).siblings().removeClass("on"); //siblings:형제요소들,    removeClass:선택된 클래스의 특성을 없앰
        });
    });
});

//FAQ
var accordion_faq = {
    click: function (target) {
        var _self = this
            , $target = $(target)
        $target.on('click', function () {
            if ($(this).next('.faq_content').css('display') == 'none') {
                $('.faq_content').slideUp();
                _self.onremove($target);
                $(this).addClass('on');
                $(this).next().slideDown();
            }
            else {
                $('.faq_content').slideUp();
                _self.onremove($target);
            }
        });
    }
    , onremove: function ($target) {
        $target.removeClass('on');
    }
};
accordion_faq.click('.faq_title');

// 요금제 선택
var accordion_charge = {
    click: function (target) {
        var _self = this
            , $target = $(target)
        $target.on('click', function () {
            if ($(this).next('.charge_lte_inner').css('display') == 'none' && $(this).next().next('.charge_lte_inner').css('display') == 'none')  {
                $('.charge_lte_inner').slideUp();
                _self.onremove($target);
                $(this).addClass('on');
                if($('.prod li button').hasClass('on') == true && $("#fiveGChrgPln").hasClass('on') == false){
                    $(this).next('').slideDown();
                }else{
                    $(this).next().next().slideDown();
            }
        }
            else {
                $('.charge_lte_inner').slideUp();
                _self.onremove($target);
            }
        });
    }
    , onremove: function ($target) {
        $target.removeClass('on');
    }
};
accordion_charge.click('.charge_lte');

// 요금제 선택-이용안내
var accordion_info99 = {
    click: function (target) {
        var _self = this
            , $target = $(target)
        $target.on('click', function () {
            if ($(this).next('.user_info_inner').css('display') == 'none') {
                $('.user_info_inner').slideUp();
                _self.onremove($target);
                $(this).addClass('on');
                $(this).next().slideDown();
            }
            else {
                $('.user_info_inner').slideUp();
                _self.onremove($target);
            }
        });
    }
    , onremove: function ($target) {
        $target.removeClass('on');
    }
};
accordion_info99.click('.user_info');

// 카드 본인 인증 약관
var accordion_card01 = {
    click: function (target) {
        var _self = this
            , $target = $(target)
        $target.on('click', function () {
            if ($(this).parent().parent().next('.role_02').css('display') == 'none') {
                $('.role_02').slideUp();
                _self.onremove($target);
                $(this).addClass('on');
                $(this).parent().parent().next().slideDown();
            }
            else {
                $('.role_02').slideUp();
                _self.onremove($target);
            }
        });
    }
    , onremove: function ($target) {
        $target.removeClass('on');
    }
};
accordion_card01.click('.pass01');

// 요금제 조회/변경 로밍 데이타 용량 선택
$(document).ready(function () {
    $("li.normal99").each(function () {
        $(this).click(function () {
            $(this).addClass("on");
            $(this).siblings().removeClass("on"); 
        });
    });
});

//  어코디언메뉴 공통 
$(".btn_accordion").click(function(e){  
    e.preventDefault();  
    if ($(this).hasClass('active')) {
        slideUp();       
    }
    else {
        slideUp(); 
        $(this).addClass('active').next().slideDown();        
    }
    function slideUp() {
            $('.btn_accordion').removeClass('active').next().slideUp()
        };        
});

// 맞춤법 체크 해제 
$(function(){$("input[type='text']").attr('spellcheck',false);});

// 마스킹 처리일 경우(카드/주민번호) INPUT FOCUS IN/OUT 일 때 DIV COLOR 변경
var focusChg = $('.type_masking'),
    juminDiv = $('.juminno_wrap'),  
    juminForm = $('.juminno_wrap input'), 
    cardDiv = $('.cardno_wrap'),
    cardForm = $('.cardno_wrap input');
if ($(focusChg).hasClass('juminno_wrap')) {     
    $(juminForm).on('focusin',function(){
        $(juminDiv).attr('style', 'border-bottom: 2px solid #31aae6');
    })
    $(juminForm).on('focusout',function(){
        $(juminDiv).attr('style', '');
    })    
} 
$(cardForm).on('focusin',function(){
    $(cardDiv).attr('style', 'border-bottom: 2px solid #31aae6');
})
$(cardForm).on('focusout',function(){
    $(cardDiv).attr('style', '');
})  

// ios 마스킹 폰트 
$(document).ready(function(){
	if (navigator.userAgent.match(/iPhone|ipad/i)) {
		$.each($('.txt_security'),function() {
			$(this).css('font-size','1.2rem');
		});
	} else if (navigator.userAgent.match(/android/i)) {
        $.each($('.txt_security'),function() {
			$(this).css('font-size','1.6rem');
		});
    } else {    
        $('.txt_security').prop("type", "password");
    }
});