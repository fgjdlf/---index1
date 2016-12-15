function banner(argument) {
	var div = document.createElement("div");
	div.className = "banner_cen";
	div.title = argument.title;
	div.href = argument.href;
	div.style.background = "url("+argument.url+") no-repeat";
	return div;
}
var banners = [
	{
		href:"",
		title:"",
		url:"images/.jpg"
	},
	{
		href:"",
		title:"",
		url:"images/33.jpg"
	},
	{
		href:"",
		title:"",
		url:"images/54.jpg"
	},
]
banners.forEach(function(item){
	var get = banner(item);
	document.getElementById("banner").appendChild(get);
})