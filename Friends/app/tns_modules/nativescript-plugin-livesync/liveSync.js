module.exports = (function() {
    var liveSyncPlugin = {
        sync: function() {
            TNSAppManager.liveSyncUsingURL(null);
        },
        enable: function(enableLiveSync) {
            enableLiveSync = typeof enableLiveSync === "undefined" ? true : !!enableLiveSync;
            TNSAppManager.sharedManager().enableLiveSync = enableLiveSync;
        }
    };
    return liveSyncPlugin;
})();