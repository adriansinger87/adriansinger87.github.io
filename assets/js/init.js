(function ($) {
  $(function () {
    M.AutoInit();
    $('.sidenav').sidenav();
    $('.modal').modal();
    $('.materialboxed').materialbox();

    $('.tap-target').tapTarget();

    $("#cookie-btn").on("click", function() {
      $('.tap-target').tapTarget('open');
    });         

  }); // end of document ready

})(jQuery); // end of jQuery name space