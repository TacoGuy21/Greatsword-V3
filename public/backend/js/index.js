window.addEventListener('load', function() {
var title = localStorage.getItem("title")
var favicon = localStorage.getItem("favicon")

if (title !== null) {document.title = title}
if (favicon !== null) {document.querySelector("link[rel='shortcut icon']").href = favicon}

})