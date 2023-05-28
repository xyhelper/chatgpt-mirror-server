// self.addEventListener('install', event => {
//     event.waitUntil(
//         caches.open('pandora-cloud-cache').then(function (cache) {
//             return cache.addAll([
//                 '/ulp/react-components/1.66.5/css/main.cdn.min.css',
//                 '/fonts/colfax/ColfaxAIRegular.woff2',
//                 '/fonts/colfax/ColfaxAIRegular.woff',
//                 '/fonts/colfax/ColfaxAIRegularItalic.woff2',
//                 '/fonts/colfax/ColfaxAIRegularItalic.woff',
//                 '/fonts/colfax/ColfaxAIBold.woff2',
//                 '/fonts/colfax/ColfaxAIBold.woff',
//                 '/fonts/colfax/ColfaxAIBoldItalic.woff2',
//                 '/fonts/colfax/ColfaxAIBoldItalic.woff',
//                 '/fonts/soehne/soehne-buch-kursiv.woff2',
//                 '/fonts/soehne/soehne-buch.woff2',
//                 '/fonts/soehne/soehne-halbfett-kursiv.woff2',
//                 '/fonts/soehne/soehne-halbfett.woff2',
//                 '/fonts/soehne/soehne-kraftig-kursiv.woff2',
//                 '/fonts/soehne/soehne-kraftig.woff2',
//                 '/fonts/soehne/soehne-mono-buch-kursiv.woff2',
//                 '/fonts/soehne/soehne-mono-buch.woff2',
//                 '/fonts/soehne/soehne-mono-halbfett.woff2',
//                 '/_next/static/chunks/pages/app-16b8642aca9f7fea.js',
//                 '/_next/static/MYarkpkg17PeZHlffaxc-/buildManifest1.js',
//                 '/_next/static/MYarkpkg17PeZHlffaxc-/ssgManifest.js',
//                 '/_next/static/chunks/pages/c/[chatId]-ec4e8336fb15f89f.js',
//                 '/_next/static/chunks/1f110208-cda4026aba1898fb.js',
//                 '/_next/static/chunks/012ff928-bcfa62e3ac82441c.js',
//                 '/_next/static/chunks/58-107b19eac1b472e5.js',
//                 '/_next/static/chunks/68a27ff6-a453fd719d5bf767.js',
//                 '/_next/static/chunks/588-439179c71d396f90.js',
//                 '/_next/static/chunks/734-f1cef41ade2ec244.js',
//                 '/_next/static/chunks/bd26816a-981e1ddc27b37cc6.js',
//                 '/_next/static/chunks/framework-e23f030857e925d4.js',
//                 '/_next/static/chunks/pages/index-bb8fda2bb300c73d.js',
//                 '/_next/static/chunks/main-2f10fecca4c74462.js',
//                 '/_next/static/chunks/webpack-347e5b868a9f07a5.js',
//                 '/_next/static/css/0ba7ad504b2624b8.css',
//                 '/_next/static/chunks/pages/error-433a1bbdb23dd341.js',
//                 '/_next/static/chunks/pages/account/cancel-63cd9f049103272b.js',
//                 '/_next/static/chunks/pages/account/manage-6ac6d4f0510ced68.js',
//                 '/_next/static/chunks/pages/account/upgrade-d6b322741680e2b4.js',
//                 '/_next/static/chunks/pages/aip/[pluginId]/oauth/callback-389963a554a230d2.js',
//                 '/_next/static/chunks/pages/auth/error-c7951a77c5f4547f.js',
//                 '/_next/static/chunks/pages/auth/ext_callback-927659025ea31258.js',
//                 '/_next/static/chunks/pages/auth/ext_callback_refresh-478ebccc4055d75b.js',
//                 '/_next/static/chunks/pages/auth/login-f4fdb51b436aaaf4.js',
//                 '/_next/static/chunks/pages/auth/logout-47cc26eb7b585e67.js',
//                 '/_next/static/chunks/pages/auth/mocked_login-d5fbb97bc5d39e59.js',
//                 '/_next/static/chunks/pages/bypass-338530f42d5b2105.js',
//                 '/_next/static/chunks/pages/payments/business-e449df976df219cb.js',
//                 '/_next/static/chunks/pages/payments/success-66b11e86067b001d.js',
//                 '/_next/static/chunks/pages/share/[[...shareParams]]-0233e94d3495a1c6.js',
//                 '/_next/static/chunks/pages/status-6557d60655b68492.js',
//                 '/_next/static/chunks/259-c6320349d8f3ff4a.js',
//             ]);
//         })
//     );
// });

// self.addEventListener('fetch', function (event) {
//     event.respondWith(
//         caches.match(event.request)
//             .then(function (response) {
//                     if (response) {
//                         return response;
//                     }
//                     return fetch(event.request);
//                 }
//             )
//     );
// });

self.registration.unregister();