// Check if Pushwoosh service worker is already active
if (self.registration && self.registration.active) {
    console.log(self.registration, 13)
    if (self.registration.active.state === 'redundant') {
        // eslint-disable-next-line no-undef
        importScripts('https://cdn.pushwoosh.com/webpush/v3/pushwoosh-service-worker.js')
    }
}
