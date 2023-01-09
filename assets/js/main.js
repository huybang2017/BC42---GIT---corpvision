// back to top
// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
	scrollFunction()
};

function scrollFunction() {
	if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
		document.getElementById("button").style.display = "block";
	} else {
		document.getElementById("button").style.display = "none";
	}
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
	document.body.scrollTop = 0;
	document.documentElement.scrollTop = 0;
}


// menu
$(window).on("scroll", function () {
	var scroll = $(window).scrollTop();

	if (scroll >= 80) {
		$("#site-header").addClass("nav-fixed");
	} else {
		$("#site-header").removeClass("nav-fixed");
	}
});

//Main navigation Active Class Add Remove
$(".navbar-toggler").on("click", function () {
	$("header").toggleClass("active");
});
$(document).on("ready", function () {
	if ($(window).width() > 991) {
		$("header").removeClass("active");
	}
	$(window).on("resize", function () {
		if ($(window).width() > 991) {
			$("header").removeClass("active");
		}
	});
});

$(function () {
	$('.navbar-toggler').click(function () {
		$('body').toggleClass('noscroll');
	})
});
