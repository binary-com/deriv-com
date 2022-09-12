import Cookies from 'js-cookie'
import { deriv_cookie_domain } from 'common/constants'
import { getPropertyValue, isEmptyObject, isBrowser } from 'common/utility'

const getObject = function (key) {
    return JSON.parse(this.getItem(key) || '{}')
}

const setObject = function (key, value) {
    if (value && value instanceof Object) {
        this.setItem(key, JSON.stringify(value))
    }
}

if (typeof Storage !== 'undefined') {
    Storage.prototype.getObject = getObject
    Storage.prototype.setObject = setObject
}

const isStorageSupported = (storage) => {
    if (typeof storage === 'undefined') {
        return false
    }

    const test_key = 'test'
    try {
        storage.setItem(test_key, '1')
        storage.removeItem(test_key)
        return true
    } catch (e) {
        return false
    }
}

const Store = function (storage) {
    this.storage = storage
    this.storage.getObject = getObject
    this.storage.setObject = setObject
}

Store.prototype = {
    get(key) {
        return this.storage.getItem(key) || undefined
    },
    set(key, value) {
        if (typeof value !== 'undefined') {
            this.storage.setItem(key, value)
        }
    },
    getObject(key) {
        return typeof this.storage.getObject === 'function' // Prevent runtime error in IE
            ? this.storage.getObject(key)
            : JSON.parse(this.storage.getItem(key) || '{}')
    },
    setObject(key, value) {
        if (typeof this.storage.setObject === 'function') {
            // Prevent runtime error in IE
            this.storage.setObject(key, value)
        } else {
            this.storage.setItem(key, JSON.stringify(value))
        }
    },
    remove(key) {
        this.storage.removeItem(key)
    },
    clear() {
        this.storage.clear()
    },
}

const InScriptStore = function (object) {
    this.store = typeof object !== 'undefined' ? object : {}
}

InScriptStore.prototype = {
    get(key) {
        return getPropertyValue(this.store, key)
    },
    set(k, value, obj = this.store) {
        let key = k
        if (!Array.isArray(key)) key = [key]
        if (key.length > 1) {
            if (!(key[0] in obj) || isEmptyObject(obj[key[0]])) obj[key[0]] = {}
            this.set(key.slice(1), value, obj[key[0]])
        } else {
            obj[key[0]] = value
        }
    },
    getObject(key) {
        return JSON.parse(this.get(key) || '{}')
    },
    setObject(key, value) {
        this.set(key, JSON.stringify(value))
    },
    remove(...keys) {
        keys.forEach((key) => {
            delete this.store[key]
        })
    },
    clear() {
        this.store = {}
    },
    has(key) {
        return this.get(key) !== undefined
    },
    keys() {
        return Object.keys(this.store)
    },
    call(key) {
        if (typeof this.get(key) === 'function') this.get(key)()
    },
}

const State = new InScriptStore({})
State.prototype = InScriptStore.prototype
/**
 * Shorthand function to get values from response object of State
 *
 * @param {String} pathname
 *     e.g. getResponse('authorize.currency') == get(['response', 'authorize', 'authorize', 'currency'])
 */
State.prototype.getResponse = function (pathname) {
    let path = pathname
    if (typeof path === 'string') {
        const keys = path.split('.')
        path = ['response', keys[0]].concat(keys)
    }
    return this.get(path)
}
State.set('response', {})

const CookieStorage = function (cookie_name, cookie_domain = '') {
    const hostname = isBrowser() && window.location.hostname
    const is_deriv_com = String(hostname).includes('deriv.com')
    const is_binary_sx = String(hostname).includes('binary.sx')

    this.initialized = false
    this.cookie_name = cookie_name
    if (is_deriv_com) {
        this.domain = deriv_cookie_domain
    } else if (is_binary_sx) {
        this.domain = 'binary.sx'
    } else {
        this.domain = cookie_domain ?? String(hostname)
    }
    this.path = '/'
    this.same_site = 'none'
    this.is_secure = true
    this.expires = new Date('Thu, 1 Jan 2037 12:00:00 GMT')
    this.value = {}
}

CookieStorage.prototype = {
    initialize() {
        const cookie_value = Cookies.get(this.cookie_name)
        try {
            this.value = cookie_value ? JSON.parse(cookie_value) : {}
        } catch (e) {
            this.value = {}
        }
        this.initialized = true
    },
    write(val, expiry_date, is_secure, sameSite) {
        if (!this.initialized) this.initialize()
        this.value = val
        if (expiry_date) this.expires = expiry_date
        Cookies.set(this.cookie_name, this.value, {
            expires: this.expires,
            path: this.path,
            domain: this.domain,
            secure: !!is_secure,
            sameSite: sameSite || 'strict',
        })
    },
    get(key) {
        if (!this.initialized) this.initialize()
        return this.value[key]
    },
    set(key, val, options) {
        if (!this.initialized) this.initialize()
        this.value[key] = val
        Cookies.set(this.cookie_name, this.value, {
            expires: new Date(this.expires),
            path: this.path,
            domain: this.domain,
            secure: this.is_secure,
            sameSite: this.same_site,
            ...options,
        })
    },
    remove() {
        Cookies.remove(this.cookie_name, {
            path: this.path,
            domain: this.domain,
        })
    },
}

let SessionStore, LocalStore

if (isBrowser()) {
    if (isStorageSupported(window.localStorage)) {
        LocalStore = new Store(window.localStorage)
    }
    if (isStorageSupported(window.sessionStorage)) {
        SessionStore = new Store(window.sessionStorage)
    }

    if (!LocalStore) {
        LocalStore = new InScriptStore({})
    }
    if (!SessionStore) {
        SessionStore = new InScriptStore({})
    }
}

export { CookieStorage, isStorageSupported, LocalStore, SessionStore, State }
