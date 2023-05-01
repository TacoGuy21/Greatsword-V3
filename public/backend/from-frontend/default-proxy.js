var proxy=localStorage.getItem("proxy");
if (proxy==undefined) {
 proxy="Corrosion";
}
var fontsize1=2560/screen.width*18;
var fontsize2=2560/screen.width*6;

title1.style.fontSize = fontsize1+"px";
search.style.fontSize = fontsize2+"px";
 
document.addEventListener("keypress", function onEvent(event) {
   if (event.key === "Enter") {
     var url=search.value;
     window.location.href=window.location.href+"service/gateway?url=" + url;
   }
});