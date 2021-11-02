//META{"name":"cslp"}*//

class cslp {
    // Constructor
    constructor() {
        this.initialized = false;
    }

    // Meta
    getName() { return "Custom Server Logos Patch"; }
    getShortName() { return "CSL Patch"; }
    getDescription() { return "A patch that adds 'data-guild-id' and allows Custom Server Logos to work as intended"; }
    getVersion() { return "2.0.0"; }
    getAuthor() { return "KayoticCarnige"; }

    // Load/Unload
    load() { }

    unload() { }

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
    }

    stop() {
        PluginUtilities.showToast(this.getName() + " " + this.getVersion() + " has stopped.");
    };

    //  Initialize
    initialize() {
        this.initialized = true;
        PluginUtilities.showToast(this.getName() + " " + this.getVersion() + " has started.");

    }
}
