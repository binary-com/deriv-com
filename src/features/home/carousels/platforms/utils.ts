import { TOSPlatforms } from './types'
import Browser from 'images/svg/app-download/web-browser.svg'
import AppStore from 'images/svg/app-download/app-store.svg'
import GooglePlay from 'images/svg/app-download/google-play.svg'
import Linux from 'images/svg/app-download/linux.svg'
import APK from 'images/svg/app-download/apk.svg'
import Windows from 'images/svg/app-download/app-store-windows.svg'
import MacAppStore from 'images/svg/app-download/app-store-mac.svg'
import AppGallery from 'images/svg/app-download/app-store-app-gallery.svg'

export const getOsIconPlatform = (type: TOSPlatforms) => {
    switch (type) {
        case 'browser':
            return Browser
        case 'app_store':
            return AppStore
        case 'google_play':
            return GooglePlay
        case 'linux':
            return Linux
        case 'apk':
            return APK
        case 'windows':
            return Windows
        case 'mac_app_store':
            return MacAppStore
        case 'app_gallery':
            return AppGallery
        default:
            return Browser
    }
}
