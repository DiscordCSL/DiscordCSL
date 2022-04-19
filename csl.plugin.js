//META{"name":"cslp"}*//

/**
 * @name Custom Server Logos Patch
 * @version 3.0.1
 * @description A plugin that allows Custom Server Logos to work as intended by injecting the "data-guild-id" attribute!
 * @author KayoticCarnige
 * @website https://github.com/kckarnige/custom-server-logos
*/

const container_class = "container-1-ERn5";
const plugid_bd = "serverlogos-bd";

window.onloadedmetadata, function () {
  if (!document.getElementsByClassName(container_class)[0].hasAttribute('data-guild-id')) {
    document.getElementsByClassName(container_class)[0].setAttribute('data-guild-id', window.location.pathname.split('/')[2]);
    console.log("[CSL] Injected attribute!");
  }
};

module.exports = class cslp {
    start() {
        this.initialized = true;
        document.getElementsByClassName(container_class)[0].setAttribute('id', plugid_bd);
        PluginUtilities.showToast(this.getName() + " " + this.getVersion() + " has started.");
    }
    stop() {
        this.initialized = false;
        clearURLChange();
        document.getElementById(plugid_bd).removeAttribute("data-guild-id")
        document.getElementById(plugid_bd).removeAttribute("id");
        PluginUtilities.showToast(this.getName() + " " + this.getVersion() + " has stopped.");
    }
}
