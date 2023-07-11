// Unregister all previous service workers
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.getRegistrations().then(function(registrations) {
    for (let registration of registrations) {
      registration.unregister();
    }
  });
}

// Register the new service worker
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('https://cdn.pushwoosh.com/webpush/v3/pushwoosh-service-worker.js' + self.location.search)
    .then(function(registration) {
      console.log('Pushwoosh service worker registered:', registration);
    })
    .catch(function(error) {
      console.error('Error registering Pushwoosh service worker:', error);
    });
}
