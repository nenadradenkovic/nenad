var playButton = document.getElementById("play");
var iframe = document.getElementById("videoiframe");
var overlay = document.getElementById("overlay");



if (navigator && navigator.userAgent && navigator.userAgent != null) {

	var strUserAgent = navigator.userAgent.toLowerCase();
	if (strUserAgent.match(/(iphone|ipod|ipad)/i)) {
		iframe.src = "//www.youtube.com/embed/yhOUIbDqwsc?rel=0&showinfo=0&controls=0";
		overlay.style.display = "none";
	}else if (strUserAgent.match(/(android)/i)) {
		iframe.src = "//www.youtube.com/embed/vy_tyPSvovQ?rel=0&showinfo=0&controls=0";
		overlay.style.display = "none";
	}else {
		if (playButton.addEventListener) {
			playButton.addEventListener("click", function() {
				iframe.src += "&autoplay=1";
				$( "#overlay" ).fadeOut(1600);
				playButton.style.display = "none";
			});
		}
		else {
			playButton.attachEvent("click", function() {
				iframe.src += "&autoplay=1";
				$( "#overlay" ).fadeOut(1600);
				playButton.style.display = "none";
			});
		}
	}
} 




