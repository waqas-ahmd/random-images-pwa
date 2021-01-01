let cacheData = "cache1";

this.addEventListener("install", (e) => {
  e.waitUntil(
    caches.open(cacheData).then((cache) =>
      cache.addAll([
        // these files can be found in the network tab inside the DEV Tools
        //localhost:
        // "/static/js/bundle.js",
        // "/static/js/0.chunk.js",
        // "/static/js/main.chunk.js",
        // "/index.html",
        // "/",

        // "manifest.json",
        // "logo192.png",
        // "/favicon.ico",

        //deployed site:
        "https://cocky-galileo-58f5a9.netlify.app/",
        "/static/css/",
        "/static/js/",
        "manifest.json",
        "sw.js",
        "logo192.png",
        "/favicon.ico",
      ])
    )
  );
});

this.addEventListener("fetch", function (event) {
  event.respondWith(
    caches.open(cacheData).then(function (cache) {
      return cache.match(event.request).then((response) => {
        return (
          response ||
          fetch(event.request).then((response) => {
            // cache.put(event.request, response.clone());
            return response;
          })
        );
      });
    })
  );
});
