cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "id": "cordova-plugin-leancloud.LeanPush",
        "file": "plugins/cordova-plugin-leancloud/www/LeanPush.js",
        "pluginId": "cordova-plugin-leancloud",
        "clobbers": [
            "LeanPush"
        ]
    },
    {
        "id": "cordova-plugin-leancloud.LeanAnalytics",
        "file": "plugins/cordova-plugin-leancloud/www/LeanAnalytics.js",
        "pluginId": "cordova-plugin-leancloud",
        "clobbers": [
            "LeanAnalytics"
        ]
    }
];
module.exports.metadata = 
// TOP OF METADATA
{
    "cordova-plugin-leancloud": "0.3.4",
    "cordova-plugin-whitelist": "1.3.2"
};
// BOTTOM OF METADATA
});