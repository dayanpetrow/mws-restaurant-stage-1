/**
 * Register Service Worker
 */
if('serviceWorker' in navigator) {
  window.addEventListener('load', function() {
    navigator.serviceWorker.register('../sw.js').then(function(reg) {
      console.log('Service Worker registered with scope ', reg.scope);
    }, function(err) {
      console.log('ServiceWorker registration failed: ', err);
    });
  });
}
