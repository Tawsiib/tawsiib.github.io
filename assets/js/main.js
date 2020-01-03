;(function($){
	$(document).ready(function(){
		let showMenu = false;
		$(".menu-btn").click(function(event) {
			if (!showMenu) {
				$(".menu-btn").addClass('close');
				$(".menu").addClass('show');
				$(".nav-menu").addClass('show');
				$(".menu-brand").addClass('show');
				$(".nav-item").addClass('show');
				showMenu = true;
			}else{
				$(".menu-btn").removeClass('close');
				$(".menu").removeClass('show');
				$(".nav-menu").removeClass('show');
				$(".menu-brand").removeClass('show');
				$(".nav-item").removeClass('show');
				showMenu = false;
			}
		});;
	});
})(jQuery);
	
