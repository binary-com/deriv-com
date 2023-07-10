self.addEventListener('activate', function(e) {
    self.registration.unregister().then(function() {
      return self.clients.matchAll();
    }).then(function(clients) {
      clients.forEach(client => client.navigate(client.url))
    }).then(function() {
      // Register the new service worker
      // eslint-disable-next-line no-undef
      importScripts('https://cdn.pushwoosh.com/webpush/v3/pushwoosh-service-worker.js' + self.location.search);
    }).catch(function(error) {
        return error
    });
});
  