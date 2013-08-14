(function($){
    if ($.fn.py == undefined) {
        $.py = {
            defaults: {},
            val: $.fn.val
        };

        $.fn.py = function(fn,options){
            var opts = $.extend(true, {}, $.py.defaults, options);
        }
    }
})(jQuery);
