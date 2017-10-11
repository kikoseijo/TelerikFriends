var app = require("application");


/*
 * Define constants which we will use across the application
 */
global.APP_ID = "u4s1wvptmfy3h6zn";
global.BS_SCHEME = "https";
global.BS_URL = "";
global.TOKEN_DATA_KEY = "authenticationToken";
global.USER_ID = "userId";
global.EVERLIVE = null;
global.MONITOR = null;

app.onLaunch = function (context) {
    // For Android apps, the context is an android.content.Intent class.
    // For iOS apps, the context is undefined.
    if (app.android) {
        console.log("Launched Android app with the following intent: " + context + ".");
    }
    else if (app.ios) {
        console.log("Launched iOS app.");
        // Workaround for a bug in the iOS runtime version 1.2.2, should be fixed with next version
        // This constant is used in the location module but must be referenced earlier on so that the appropriate iOS framework can be loaded
        kCLDistanceFilterNone;
    }
};

app.onSuspend = function () {
    console.log("Application suspended.");
};

app.onResume = function () {
    console.log("Application resumed.");
};

app.onExit = function () {
    console.log("Application will exit.");
    if(MONITOR !== null){
        MONITOR.stop();
    }
};

app.onLowMemory = function () {
    console.log("Memory is low.");
};

app.onUncaughtError = function (error) {
    console.log("Application error: " + error.name + "; " + error.message + "; " + error.nativeError);
};

app.start({ moduleName: "./views/main-page" });
