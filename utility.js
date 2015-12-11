/** Vanilla JS **/

// Capitalize the first letter of each word
function toTitleCase(str) {
    return str.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
}

// Opens url in new tab and focuses on it
function OpenInNewTab(url) {
    var tab = window.open(url, '_blank');
    tab.focus();
}

/** Jquery **/