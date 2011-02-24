/**
 * Custom jQuery command for redirects
 * Command to redirect the browser.
 */
(function($){
 $.fn.redirect= function(url) {
  window.location.replace(url);
 };
})(jQuery);

/**
 *  Spawns modal dialog window for login
 */
Drupal.behaviors.modal_login = {
  attach: function(context) {
    jQuery('#modal_login_link').click(function() {
      jQuery('#modal_login').show();
      jQuery('#modal_login').dialog({modal: true, title: "Please Log In", draggable: false});
      //jQuery('#scf_login form').submit(function() { return false; }); 
      return false;
    });
  }
}

/** 
 * Intercepts enter key
 */
Drupal.behaviors.modal_login_submit = {
  attach: function(context) {
    jQuery('#modal_login input').bind('keypress', function(e) {
      var code = (e.keyCode ? e.keyCode : e.which);
      if(code == 13) {
        jQuery('#modal_login input:submit').trigger('mousedown');
        return false;
      }
    });
  }
}
