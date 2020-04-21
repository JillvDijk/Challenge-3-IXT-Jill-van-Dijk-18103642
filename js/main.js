var tabs = document.querySelector(".tabs");
var tabsContent = document.querySelector(".tabs-content");
var activeTab = "map-active";

var mapLink = document.querySelector(".map-link");
var weatherLink = document.querySelector(".weather-link");
var discoverLink = document.querySelector(".discover-link");

mapLink.addEventListener("click", function() {
    switchTab("map-active");  
});

weatherLink.addEventListener("click", function() {
    switchTab("weather-active");
});

discoverLink.addEventListener("click", function() {
    switchTab("discover-active");
});

function switchTab(tabName){
    tabs.classList.remove(activeTab);
    tabsContent.classList.remove(activeTab);
    activeTab = tabName;
    tabs.classList.add(activeTab);
    tabsContent.classList.add(activeTab);
}

