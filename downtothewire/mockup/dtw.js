function showRecording(){
	$("#marketing").hide();
	$("#artists").hide();
	$("#about").hide();
	$("#contact").hide();
	$("#priceQuote").hide();
	$("#recording").show(500);
}
function showMarketing(){
	$("#recording").hide();
	$("#artists").hide();
	$("#about").hide();
	$("#contact").hide();
	$("#priceQuote").hide();
	$("#marketing").show(500);
}
function showArtists(){
	$("#recording").hide();
	$("#marketing").hide();
	$("#about").hide();
	$("#contact").hide();
	$("#priceQuote").hide();
	$("#artists").show(500);
}
function showAbout(){
	$("#recording").hide();
	$("#marketing").hide();
	$("#artists").hide();
	$("#contact").hide();
	$("#priceQuote").hide();
	$("#about").show(500);
}
function showContact(){
	$("#recording").hide();
	$("#marketing").hide();
	$("#artists").hide();
	$("#about").hide();
	$("#priceQuote").hide();
	$("#contact").show(500);
}
function showPriceQuote(){
	$("#recording").hide();
	$("#marketing").hide();
	$("#artists").hide();
	$("#about").hide();
	$("#contact").hide();
	$("#priceQuote").show(500);
}
jQuery(document).ready(function(){ 
	showAbout();
});