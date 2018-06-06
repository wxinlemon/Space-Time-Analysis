/*
 * jQuery UA plugin
 *
 * based on jquery.browser.addEnvClass.js
 * https://gist.github.com/373298
 */
(function ($) {

    $.ua = {
        platform: {},
        browser: {},
        engine: {}
    };

    var ua = navigator.userAgent,
        uaPlatform = $.ua.platform,
        uaBrowser = $.ua.browser,
        uaEngine = $.ua.engine;

    // detect platform
    if (/Windows/.test(ua)) {
        uaPlatform.name = 'win';
        uaPlatform.win = true;
    } else if (/Mac/.test(ua)) {
        uaPlatform.name = 'mac';
        uaPlatform.mac = true;
    } else if (/Linux/.test(ua)) {
        uaPlatform.name = 'linux';
        uaPlatform.linux = true;
    } else if (/iPhone|iPod/.test(ua)) {
        uaPlatform.name = 'iphone';
        uaPlatform.iphone = true;
    } else if (/iPad/.test(ua)) {
        uaPlatform.name = 'ipad';
        uaPlatform.ipad = true;
    } else if (/Android/.test(ua)) {
        uaPlatform.name = 'android';
        uaPlatform.android = true;
    } else {
        uaPlatform.name = 'unknown-platform';
        uaPlatform.unknown = true;
    }

    // detect browser
    if (/MSIE/.test(ua)) {
        uaBrowser.name = 'msie';
        uaBrowser.msie = true;
    } else if (/Firefox/.test(ua)) {
        uaBrowser.name = 'firefox';
        uaBrowser.firefox = true;
    } else if (/Safari/.test(ua)) {
        uaBrowser.name = 'safari';
        uaBrowser.safari = true;
    } else if (/Opera/.test(ua)) {
        uaBrowser.name = 'opera';
        uaBrowser.opera = true;
    } else {
        uaBrowser.name = 'unknown-browser';
        uaBrowser.unknown = true;
    }

    // chrome override
    if (/Chrome/.test(ua)) {
        uaBrowser.name = 'chrome';
        uaBrowser.chrome = true;
        uaBrowser.safari = false;
    }

    // detect browser version
    if (uaBrowser.msie) {
        uaBrowser.version = /MSIE (\d+(\.\d+)*)/.exec(ua)[1];
    } else if (uaBrowser.firefox) {
        uaBrowser.version = /Firefox\/(\d+(\.\d+)*)/.exec(ua)[1];
    } else if (uaBrowser.opera) {
        uaBrowser.version = /Version\/? ?(\d+(\.\d+)*)/.exec(ua)[1];
    } else if (uaBrowser.safari) {
        uaBrowser.version = /Version\/(\d+(\.\d+)*)/.exec(ua)[1];
    } else if (uaBrowser.chrome) {
        uaBrowser.version = /Chrome\/(\d+(\.\d+)*)/.exec(ua)[1];
    } else {
        uaBrowser.version = 0;
    }

    // detect engine
    if (/Trident/.test(ua) || uaBrowser.msie) {
        uaEngine.name = 'trident';
        uaEngine.trident = true;
    } else if (/Gecko/.test(ua)) {
        uaEngine.name = 'gecko';
        uaEngine.gecko = true;
    } else if (/Presto/.test(ua)) {
        uaEngine.name = 'presto';
        uaEngine.presto = true;
    } else {
        uaEngine.name = 'unknown-engine';
        uaEngine.unknown = true;
    }

    // override WebKit
    if (/WebKit/.test(ua)) {
        uaEngine.name = 'webkit';
        uaEngine.gecko = false;
        uaEngine.webkit = true;
    }

    // detect engine version
    if (uaEngine.trident) {
        uaEngine.version = /Trident/.test(ua) ? /Trident\/(\d+(\.\d+)*)/.exec(ua)[1] : 0;
    } else if (uaEngine.gecko) {
        uaEngine.version = /rv:(\d+(\.\d+)*)/.exec(ua)[1];
    } else if (uaEngine.webkit) {
        uaEngine.version = /WebKit\/(\d+(\.\d+)*)/.exec(ua)[1];
    } else if (uaEngine.presto) {
        uaEngine.version = /Presto\/(\d+(\.\d+)*)/.exec(ua)[1];
    } else {
        uaEngine.version = 0;
    }

    // add classes to html element
    $('html').addClass([
        uaPlatform.name,
        uaBrowser.name,
        uaBrowser.name + parseInt(uaBrowser.version, 10),
        uaEngine.name,
        uaEngine.name + parseInt(uaEngine.version, 10)
    ].join(' '));

})(jQuery);
/*  |xGv00|fb90c0d449ea420f61b6d41a3ef2adf2 */