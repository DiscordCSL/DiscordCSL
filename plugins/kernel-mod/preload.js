const {contextBridge} = require("electron");
const index = require("./index.json");

contextBridge.exposeInMainWorld("kernelDiscordCSL", {
    index: () => {return index}
});