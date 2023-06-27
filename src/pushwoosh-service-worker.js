// Check if Pushwoosh service worker is already active
if (self.registration.active) console.log(self.registration, 13)
if (!self.registration.active || !self.registration.scriptURL.includes('cache_clean')) {
    // eslint-disable-next-line no-undef
    importScripts('https://cdn.pushwoosh.com/webpush/v3/pushwoosh-service-worker.js')
}
