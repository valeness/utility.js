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

// Function for string formatting. Use like
// 'This is a {0} string that can be {1} {2}.'.format('Cool', 'formatted')
// Output >> This is a Cool string that can be formatted {2}.
if (!String.prototype.format) {
    String.prototype.format = function() {
        var args = arguments;
        return this.replace(/{(\d+)}/g, function(match, number) {
            return typeof args[number] != 'undefined'
                ? args[number] : match;
        });
    };
}

// ToggleText helper
$.fn.toggleText = function(t1, t2){
    if (this.text() == t1) this.text(t2);
    else                   this.text(t1);
    return this;
};

/** Jquery **/
