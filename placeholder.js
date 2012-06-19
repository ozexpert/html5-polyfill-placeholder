/*
 * Author: Young K. Park (youngkeunpark@gmail.com)
 * example usage: $("form").placeholder();
*/

(function($){
	$.fn.placeholder = function(options){

        var opts = $.extend({}, $.fn.placeholder.defaults, options);

        //for each input, textarea find placeholder attr and treat it as value
        $.each(this.find("input, textarea"), function(i, val){
            var $originalColor = $(this).css("color");

            if($(this).attr("placeholder") && $(this).val().length == 0){
                setPlaceholder($(this));
            }

            $(this).on("focus", function(e){
                if($(this).data('init-placeholder')=='true'){
                    $(this).val("").css({'font-style':'normal', 'color':$originalColor}).removeData("init-placeholder");
                }
            });

            $(this).on("change", function(e){
                if($(this).val().length == 0){
                    setPlaceholder($(this));
                }
            });
        });
    
        function setPlaceholder(elem){
            elem.val(elem.attr("placeholder")).css({'font-style':$.fn.placeholder.defaults.fontStyle, 
                    'color':$.fn.placeholder.defaults.watermarkColor}).data('init-placeholder', 'true');
        }
	};

    $.fn.placeholder.defaults = {
        watermarkColor: '#ccc',
        fontStyle: 'italic'
    };
})(jQuery);
