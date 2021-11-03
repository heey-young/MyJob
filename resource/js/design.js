//GNB메뉴
$(function () {
    $menu = $('#gnb');
    $menuItem = $menu.find('> li > a');
    $subMenu = $('#gnb .sub');
    $subMenuItem = $subMenu.find('> li > a');
    $submenuLastItem = $subMenu.find('> li:last-child > a');
    $menuItem.bind({
        focus: function () {
            $subMenu.removeClass('is-show');
            if ($(this).next($subMenu)) {
                $(this).next($subMenu).addClass('is-show');
            }
        }
        , blur: function () {
            $subMenu.removeClass('is-show');
        }
    });
    $subMenuItem.bind({
        focus: function () {
            $(this).parent().parent().addClass('is-show');
        }
    });
    $submenuLastItem.bind({
        blur: function () {
            $subMenu.removeClass('is-show');
        }
    });
});
$(function () {
    $(document).click(function () {
        if ($subMenu.hasClass('is-show')) {
            $subMenu.removeClass('is-show');
        }
    });
});
//슬라이드메뉴
$(function () {
    $('.btn-sidebar-toggle').on('click', function () {
        if ($('#lnb').is(':visible')) {
            $('#lnb').animate({
                'width': '0'
            }, 'slow', function () {
                $('#lnb').hide();
            });
            $('#container').animate({
                'margin-left': '0'
            }, 'slow');
            $('.btn-sidebar-toggle').addClass('close');
        }
        else {
            $('#lnb').show();
            $('#lnb').animate({
                'width': '200px'
            }, 'slow');
            $('#container').animate({
                'margin-left': '200px'
            }, 'slow');
            $('.btn-sidebar-toggle').removeClass('close');
        }
    });
});
//검색박스 토글
$(function () {
    $('.btn-toggle').click(function (e) {
        e.preventDefault();
        var collapse_content_selector = $(this).attr('href');
        var toggle_switch = $(this);
        $(collapse_content_selector).slideToggle(function () {
            if ($(this).css('display') == 'none') {
                toggle_switch.removeClass('expend');
            }
            else {
                toggle_switch.addClass('expend');
            }
        });
    });
});

//탭
        $(function () {
            //탭(ul) onoff
            $('.tabsBox .tabs-contents').children().css('display', 'none');
            $('.tabsBox .tabs-contents div:first-child').css('display', 'block');
            $('.tabsBox .tabs-menu li:first-child').addClass('active');
            $('.tabsBox').delegate('.tabs-menu li', 'click', function (e) {
                e.preventDefault();
                var index = $(this).parent().children().index(this);
                $(this).siblings().removeClass();
                $(this).addClass('active');
                $(this).parent().next('.tabs-contents').children().hide().eq(index).show();
            });
        });


//component - dropdown
$(function () {
    $(".dropdown dt a").click(function () {
        $(".dropdown dd ul").toggle();
    });
    $(".dropdown dd ul li a").click(function () {
        var text = $(this).html();
        $(".dropdown dt a span").html(text);
        $(".dropdown dd ul").hide();
    });
    $(document).bind('click', function (e) {
        var $clicked = $(e.target);
        if (!$clicked.parents().hasClass("dropdown")) $(".dropdown dd ul").hide();
    });
});