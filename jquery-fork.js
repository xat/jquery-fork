!function($) {

  $.fn.fork = function() {
    var that = this;
    $.each($.makeArray(arguments), function(idx, fn) {
      if (!$.isFunction(fn)) return;
      fn.call(that);
    });
    return this;
  };

}(jQuery);