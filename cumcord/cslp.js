/// From StackOverflow: https://stackoverflow.com/questions/6390341/how-to-detect-if-url-has-changed-after-hash-in-javascript
var oldURL = "";
var currentURL = window.location.href;
function checkURLchange(currentURL) {
    if (currentURL != oldURL) {
        oldURL = currentURL;
    }

    oldURL = window.location.href;
    setTimeout(function () {
        checkURLchange(window.location.href);
        document.getElementsByClassName("container-3w7J-x")[0].setAttribute('data-guild-id', window.location.pathname.split('/')[2]);
    }, 1);
}

checkURLchange();

var injectStyle = function () {
    const style = document.createElement('style');
    style.textContent = "@import url('https://kckarnige.is-a.dev/custom-server-logos/base.css');";
    document.head.append(style);
};

injectStyle();