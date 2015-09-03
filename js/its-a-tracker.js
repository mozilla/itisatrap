function toggleStatus(trackerType, loaded) {
    var status = window.document.getElementById(trackerType + "-" + loaded);
    var waiting = window.document.getElementById(trackerType + "-waiting");
    waiting.className = "hidden";
    status.className = "";
}

var blacklisted = window.document.getElementById("blacklisted-script");
blacklisted.onload = function () {
    toggleStatus("blacklisted", "loaded");
};
blacklisted.onerror = function () {
    toggleStatus("blacklisted", "blocked");
};
blacklisted.src = "https://trackertest.org/tracker.js";

var whitelisted = window.document.getElementById("whitelisted-script");
whitelisted.onload = function () {
    toggleStatus("whitelisted", "loaded");
};
whitelisted.onerror = function () {
    toggleStatus("whitelisted", "blocked");
};
whitelisted.src = "https://itisatracker.org/tracker.js";
