function toggleStatus(trackerType, loaded) {
    var status = window.document.getElementById(trackerType + "-" + loaded);
    var waiting = window.document.getElementById(trackerType + "-waiting");
    waiting.classList.add("hidden");
    status.classList.remove("hidden");
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

var dntcompliant = window.document.getElementById("dntcompliant-loaded");
var dntcompliantLoaded = false;
dntcompliant.onload = function () {
    dntcompliantLoaded = true;
    toggleStatus("dntcompliant", "loaded");
};
setTimeout(function () {
    if (!dntcompliantLoaded) {
        toggleStatus("dntcompliant", "blocked");
    }
}, 3000);
dntcompliant.src = "https://dntcompliant.org/check-dnt.html";

if (navigator.doNotTrack == "yes" || navigator.doNotTrack == "1") {
  var test = window.document.getElementById("dntcompliant-test");
  var warning = window.document.getElementById("dntcompliant-warning");
  test.classList.add("hidden");
  warning.classList.remove("hidden");
}
