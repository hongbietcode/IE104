// loadHomePage();
loadCasiPage();
function loadHomePage() {
	$.ajax({
		url: "./pages/home.html",
		success: function (result) {
			$("#body").html(result);
		},
	});
}

function loadBXHpage() {
	$.ajax({
		url: "./pages/bxh.html",
		success: function (result) {
			$("#body").html(result);
		},
	});
}

function loadChudePage() {
	$.ajax({
		url: "./pages/chude.html",
		success: function (result) {
			$("#body").html(result);
		},
	});
}

function loadCasiPage() {
	$.ajax({
		url: "./pages/casi.html",
		success: function (result) {
			$("#body").html(result);
		},
	});
}