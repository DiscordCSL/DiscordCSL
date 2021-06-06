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
  getVersion() { return "1.0.0"; }
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
      document.getElementsByClassName("header-2V-4Sw")[0].setAttribute('data-guild-id', window.location.pathname.split('/')[2]);
  };

  observer(e) {
      // raw MutationObserver event for each mutation
  };
  
  // Start/Stop
  start() {}
     
  stop() {
      PluginUtilities.showToast(this.getName() + " " + this.getVersion() + " has stopped.");
  };

  //  Initialize
  initialize() {
      this.initialized = true;
      PluginUtilities.showToast(this.getName() + " " + this.getVersion() + " has started.");

  }
}