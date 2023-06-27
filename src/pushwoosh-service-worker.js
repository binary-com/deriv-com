// Check if Pushwoosh service worker is already active
if (!self.registration.active) {
    if (self.registration.active.state === 'redundant') {
        // eslint-disable-next-line no-undef
        importScripts('https://cdn.pushwoosh.com/webpush/v3/pushwoosh-service-worker.js')
    }
}
