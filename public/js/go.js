window.addEventListener("load", function() {
var search = document.getElementById("search")
search.addEventListener("keyup", function(event) {
    event.preventDefault()
    if (event.keyCode == 13)
        if (this.value !== "") {
             go(this.value)
             this.value = ""
        }
});

function go(url) {
var web = document.getElementById("web");
var webnav = document.getElementById("webnav");
var settingsbtn = document.getElementById("settingsbtn");
web.src = "/service/gateway?url=" + url;
web.style.display = "initial";
webnav.style.display = "flex";
settingsbtn.style.display = "none";
}

function closeweb() {
var web = document.getElementById("web")
var webnav = document.getElementById("webnav")
var settingsbtn = document.getElementById("settingsbtn")
var search = document.getElementById("search")
web.src = ""
web.style.display = "none"
webnav.style.display = "none"
settingsbtn.style.display = "initial"
search.focus()
}

function reloadweb() {
var web = document.getElementById("web")
web.contentWindow.location.reload()
}

function settings() {
var settings = document.getElementById("settings")
if (settings.style.display == "none") {
settings.style.display = "initial"
} else if (settings.style.display == "initial") {
settings.style.display = "none"
} else {
settings.style.display = "initial"
}
}

function settitle(text) {
  if (text !== "") {
  document.title = text
  localStorage.setItem("title", text)
  } else {
  document.title = "Shadow"
  localStorage.removeItem("title")
  }
}

function seticon(url) {
  if (url !== "") {
  document.querySelector("link[rel='shortcut icon']").href = url
  localStorage.setItem("favicon", url)
  } else {
  document.querySelector("link[rel='shortcut icon']").href = "/img/logo.png"
  localStorage.removeItem("favicon")
  }
}

window.addEventListener('load', function() {
var title = localStorage.getItem("title")
var favicon = localStorage.getItem("favicon")
var settitle = document.getElementsByClassName("settab")[0]
var setfav = document.getElementsByClassName("settab")[1]

if (title !== null) {settitle.value = title}
if (favicon !== null) {setfav.value = favicon}
})

function hidesettings(){
if(window.event.srcElement.id !== "settings"  && window.event.srcElement.id !== "settingsbtn" && window.event.srcElement.className !== "settitle" && window.event.srcElement.className !== "settab"){
document.getElementById("settings").style.display = "none";
}
}

document.onclick = hidesettings
