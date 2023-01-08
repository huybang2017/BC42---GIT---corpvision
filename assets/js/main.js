// search
let formControl = document.getElementById("form-control")
let search = document.getElementById("searchEl")
search.onclick = function () {
	formControl.focus();
}

// THEME
/**
Solution: 
Khi click vào nút moon 🌙 , thẻ body sẽ được thêm class dark.
Dựa vào class dark, ta viết css dành riêng cho dark theme.

Ngược lại, khi click vào nút sun ☀️, ta sẽ xóa class dark để css light theme hiện lại

*/

//gọi thẻ button có id là switchButton
// gắn chức năng click cho switchButton
document.getElementById("switchButton").onclick = function () {
	//khi button được click thì tìm đến thẻ body có id là myBody
	// dùng classlist để gọi thuộc tính class của thẻ body
	//Sử dụng toggle() để thêm hoặc xóa 1 class của thẻ html. Nếu thẻ body không có class dark thì toggle sẽ thêm class dark vào body. Ngược lại, nếu thẻ body đang có class dark thì toogle sẽ xóa class dark đi.
	document.getElementById("myBody").classList.toggle("dark");
};


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
