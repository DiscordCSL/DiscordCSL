//META{"name":"cslp"}*//

const container_class = "container-1-ERn5";
const plugid_bd = "serverlogos-bd";

var oldURL = "";
var currentURL = window.location.href;
var clearURLChange = () => {};
function checkURLchange(currentURL) {
    if (currentURL != oldURL) {
        oldURL = currentURL;
    }

    oldURL = window.location.href;
    let timeoutID = setTimeout(() => {
        checkURLchange(window.location.href);
        document.getElementsByClassName(container_class)[0].setAttribute('data-guild-id', window.location.pathname.split('/')[2]);
    }, 1);
    
    clearURLChange = () => clearTimeout(timeoutID);
}

class cslp {
    // Constructor
    constructor() {
        this.initialized = false;
    }

    // Meta
    getName() { return "Custom Server Logos"; }
    getShortName() { return "CSLP"; }
    getDescription() { return "A plugin that allows Custom Server Logos to work as intended"; }
    getVersion() { return "3.0.1"; }
    getAuthor() { return "KayoticCarnige"; }

    // Load/Unload
    load() {
    }

    unload() {
    }

    // Events

    onMessage() {
        // Called when a message is received
    };

    onSwitch() {
        // Called when a server or channel is switched
    };

    observer(e) {
        // raw MutationObserver event for each mutation
    };

    // Start/Stop
    start() {
        checkURLchange();
        document.getElementsByClassName(container_class)[0].setAttribute('id', plugid_bd);
    }

    stop() {
        clearURLChange();
        document.getElementById(plugid_bd).removeAttribute("data-guild-id")
        document.getElementById(plugid_bd).removeAttribute("id");
        PluginUtilities.showToast(this.getName() + " " + this.getVersion() + " has stopped.");
    }

    //  Initialize
    initialize() {
        this.initialized = true;
        PluginUtilities.showToast(this.getName() + " " + this.getVersion() + " has started.");

    }
}
