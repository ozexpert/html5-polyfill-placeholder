========================================
HTML 5 polyfill for placholder attribute
========================================

-------------------
Example usage in js
-------------------
::
$(function(){
	if(!Modernizr.placeholder){
		$("form").placeholder();
	}
});
