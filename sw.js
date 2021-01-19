importScripts("precache-manifest.502f51fc96b5be0b4a1b853bce0bb6d2.js", "https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js");

workbox.precaching.precacheAndRoute(self.__precacheManifest || []);

workbox.googleAnalytics.initialize({
    parameterOverrides: {
        dimension1: 'offline',
    },
    hitFilter: (params) => {
        const queueTimeInSeconds = Math.round(params.get('qt') / 1000);
        params.set('metric1', queueTimeInSeconds);
    },
});

