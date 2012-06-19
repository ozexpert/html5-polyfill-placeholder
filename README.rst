========================================
HTML 5 polyfill for placholder attribute
========================================

-------------------
Example usage in js
-------------------
Code Example::

$(function(){
	if(!Modernizr.placeholder){
		$("form").placeholder();
	}
});
