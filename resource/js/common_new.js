//(function () { 
     //var ui = {
        //init:function(){            
            //this.selectbox(); // custom select box            
        //}
        //ui.init();
//}());
// SelectBox 


//selectbox:function(){
            //var thisSelect
            //$(document).on('click', '.fs_selected', function(){
                //thisSelect = $(this).parent();
                //if(thisSelect.hasClass('readonly')){
                    //return false;
                //}
                //if($('.form_selectbox.open').not($(this).parent()).length){
                   //$('.form_selectbox.open').removeClass('open')
                //}
                //thisSelect.toggleClass('open');
            //});
            //$(document).on('click', '.fs_list li button', function(){
                //thisSelect.find('.fs_selected').text($(this).text()).attr('data-selected-value', $(this).attr('data-value'));
                //thisSelect.removeClass('open')
            //});
            //$(document).on('focusout', '.fs_list li:last', function(){
                //if($('.form_selectbox.open').not($(this).parent()).length){
                   // $('.form_selectbox.open').removeClass('open')
                //}
            //});
            //$('body').on("click", function(e){
                //if($('.form_selectbox.open').not($(this).parent()).length){
                   //$('.form_selectbox.open').removeClass('open')
                //}
            //});
        //},
            
            
$(function(){
  var close = function() {
    $("ul").each(function() {
      var $thisUl = $(this);    
      if($thisUl.find("li > .click").length == 0) {
       
      }
      else {
        $thisUl.find("li > .click").addClass("visible");
      }
      $thisUl.find("li:has(> button:not(.click))").hide();
     
    });
  };

  var sentinel = function() {      
      $('.list li').each(function (index, item) { 
          $(item).addClass('li_0' + index); 
      });          
          
    $("ul").each(function(){
      var $thisUl = $(this);
      $($thisUl).find("li > button").click(function(event){
        if($(event.target).is('ul li .visible')) {
          event.preventDefault();
          $thisUl.find("li:has(> button:not(.click))").show();
          $thisUl.find("li > .selectable").hide();
          $thisUl.find("li > .click").removeClass("visible");
        }
        else {
          $thisUl.find("li").each(function(){
            $(this).find("button").removeClass("click selectable visible");
            $(this).find(".selectable").remove();
          });
          $(this).addClass("click visible");
          close();
        }
      });
    });
  };

  var reconnaissance = function() {
    $(document).click(function(event) {
      if(!$(event.target).is('ul li button')) {
        close();
      }
    });
  };

  close();
  sentinel();
  reconnaissance();
});