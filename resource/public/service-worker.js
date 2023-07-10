// self.registration.unregister();


self.addEventListener('install', event => {
    event.waitUntil(
        caches.open('chatgpt-mirror-server-cache').then(function (cache) {
            return cache.addAll([
                '/ulp/react-components/1.66.5/css/main.cdn.min.css',
                '/fonts/colfax/ColfaxAIRegular.woff2',
                '/fonts/colfax/ColfaxAIRegular.woff',
                '/fonts/colfax/ColfaxAIRegularItalic.woff2',
                '/fonts/colfax/ColfaxAIRegularItalic.woff',
                '/fonts/colfax/ColfaxAIBold.woff2',
                '/fonts/colfax/ColfaxAIBold.woff',
                '/fonts/colfax/ColfaxAIBoldItalic.woff2',
                '/fonts/colfax/ColfaxAIBoldItalic.woff',
                '/fonts/soehne/soehne-buch-kursiv.woff2',
                '/fonts/soehne/soehne-buch.woff2',
                '/fonts/soehne/soehne-halbfett-kursiv.woff2',
                '/fonts/soehne/soehne-halbfett.woff2',
                '/fonts/soehne/soehne-kraftig-kursiv.woff2',
                '/fonts/soehne/soehne-kraftig.woff2',
                '/fonts/soehne/soehne-mono-buch-kursiv.woff2',
                '/fonts/soehne/soehne-mono-buch.woff2',
                '/fonts/soehne/soehne-mono-halbfett.woff2',
            ]);
        })
    );
});

self.addEventListener('fetch', function (event) {
    event.respondWith(
        caches.match(event.request)
            .then(function (response) {
                    if (response) {
                        return response;
                    }
                    return fetch(event.request);
                }
            )
    );
});
