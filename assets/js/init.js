(function($){
  $(function(){

    M.AutoInit();
    $('.sidenav').sidenav();
    $('.modal').modal();

    InitImage();

  }); // end of document ready

  function InitImage() {
    var loc = window.location.href;
    $("#chemnitz-banner").attr("src", loc + "/assets/img/banner_" + Random(1,4) + ".jpg");

    function Random(min, max) {
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min + 1)) + min;
    }
  }
 

})(jQuery); // end of jQuery name space