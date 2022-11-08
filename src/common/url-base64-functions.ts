// Simple version of js-base64 framework https://github.com/dankogai/js-base64/blob/main/base64.ts

/* eslint-disable */
const is_atob = typeof atob === 'function'
const is_btoa = typeof btoa === 'function'
const is_buffer = typeof Buffer === 'function'
const is_text_decoder = typeof TextDecoder === 'function' ? new TextDecoder() : undefined
const is_text_encoder = typeof TextEncoder === 'function' ? new TextEncoder() : undefined

const b64_chars = Array.prototype.slice.call(
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=',
)

const defendURI = (src: string) =>
    src.replace(/=/g, '').replace(/[+\/]/g, (m0) => (m0 == '+' ? '-' : '_'))

const btoaPolyfill = (bin: string) => {
    let u32, c0, c1, c2
    let asc = ''
    const pad = bin.length % 3
    for (let i = 0; i < bin.length; ) {
        if (
            (c0 = bin.charCodeAt(i++)) > 255 ||
            (c1 = bin.charCodeAt(i++)) > 255 ||
            (c2 = bin.charCodeAt(i++)) > 255
        )
            throw new TypeError('invalid character found')
        u32 = (c0 << 16) | (c1 << 8) | c2
        asc +=
            b64_chars[(u32 >> 18) & 63] +
            b64_chars[(u32 >> 12) & 63] +
            b64_chars[(u32 >> 6) & 63] +
            b64_chars[u32 & 63]
    }
    return pad ? asc?.slice(0, pad - 3) + '==='.substring(pad) : asc
}

// https://developer.mozilla.org/en-US/docs/Web/API/btoa
const btoa = is_btoa
    ? (bin: string) => btoa(bin)
    : is_buffer
    ? (bin: string) => Buffer.from(bin, 'binary').toString('base64')
    : btoaPolyfill

const _fromCharCode = String.fromCharCode.bind(String)

const fromUint8Array = is_buffer
    ? (u8a: Uint8Array) => Buffer.from(u8a).toString('base64')
    : (u8a: Uint8Array) => {
          const maxargs = 0x1000
          const strs: string[] = []
          for (let i = 0, l = u8a.length; i < l; i += maxargs) {
              strs?.push(_fromCharCode.apply(null, u8a.subarray(i, i + maxargs)))
          }
          return btoa(strs?.join(''))
      }

const encodeUTF16 = (c: string) => {
    if (c.length < 2) {
        const char_code = c?.charCodeAt(0)
        return char_code < 0x80
            ? c
            : char_code < 0x800
            ? _fromCharCode(0xc0 | (char_code >>> 6)) + _fromCharCode(0x80 | (char_code & 0x3f))
            : _fromCharCode(0xe0 | ((char_code >>> 12) & 0x0f)) +
              _fromCharCode(0x80 | ((char_code >>> 6) & 0x3f)) +
              _fromCharCode(0x80 | (char_code & 0x3f))
    } else {
        const char_code =
            0x10000 + (c?.charCodeAt(0) - 0xd800) * 0x400 + (c?.charCodeAt(1) - 0xdc00)
        return (
            _fromCharCode(0xf0 | ((char_code >>> 18) & 0x07)) +
            _fromCharCode(0x80 | ((char_code >>> 12) & 0x3f)) +
            _fromCharCode(0x80 | ((char_code >>> 6) & 0x3f)) +
            _fromCharCode(0x80 | (char_code & 0x3f))
        )
    }
}
const fromUTF8toUTF16 = (u: string) => {
    u?.replace(/[\uD800-\uDBFF][\uDC00-\uDFFFF]|[^\x7F]/g, encodeUTF16)
}

const encodeString = is_buffer
    ? (s: string) => Buffer?.from(s, 'utf8').toString('base64')
    : is_text_encoder
    ? (s: string) => fromUint8Array(is_text_encoder.encode(s))
    : (s: string) => btoa(fromUTF8toUTF16(s))

const encodeUTF8 = (context: string) => {
    switch (context.length) {
        case 4:
            const cp =
                ((0x07 & context.charCodeAt(0)) << 18) |
                ((0x3f & context.charCodeAt(1)) << 12) |
                ((0x3f & context.charCodeAt(2)) << 6) |
                (0x3f & context.charCodeAt(3))
            const offset = cp - 0x10000
            return (
                _fromCharCode((offset >>> 10) + 0xd800) + _fromCharCode((offset & 0x3ff) + 0xdc00)
            )
        case 3:
            return _fromCharCode(
                ((0x0f & context.charCodeAt(0)) << 12) |
                    ((0x3f & context.charCodeAt(1)) << 6) |
                    (0x3f & context.charCodeAt(2)),
            )
        default:
            return _fromCharCode(
                ((0x1f & context.charCodeAt(0)) << 6) | (0x3f & context.charCodeAt(1)),
            )
    }
}
const fromUTF16toUTF8 = (b: string) =>
    b.replace(
        /[\xC0-\xDF][\x80-\xBF]|[\xE0-\xEF][\x80-\xBF]{2}|[\xF0-\xF7][\x80-\xBF]{3}/g,
        encodeUTF8,
    )

const b64_regexp = /^(?:[A-Za-z\d+\/]{4})*?(?:[A-Za-z\d+\/]{2}(?:==)?|[A-Za-z\d+\/]{3}=?)?$/

const b64_tab = ((a) => {
    const tab = {}
    a.forEach((c, i) => (tab[c] = i))
    return tab
})(b64_chars)

const atobPolyfill = (asc: string) => {
    asc = asc.replace(/\s+/g, '')
    if (!b64_regexp.test(asc)) throw new TypeError('malformed base64.')
    asc += '=='.slice(2 - (asc.length & 3))
    let bin = '',
        r1,
        r2,
        u24
    for (let i = 0; i < asc.length; ) {
        u24 =
            (b64_tab[asc.charAt(i++)] << 18) |
            (b64_tab[asc.charAt(i++)] << 12) |
            ((r1 = b64_tab[asc.charAt(i++)]) << 6) |
            (r2 = b64_tab[asc.charAt(i++)])
        bin +=
            r1 === 64
                ? _fromCharCode((u24 >> 16) & 255)
                : r2 === 64
                ? _fromCharCode((u24 >> 16) & 255, (u24 >> 8) & 255)
                : _fromCharCode((u24 >> 16) & 255, (u24 >> 8) & 255, u24 & 255)
    }
    return bin
}

const cleanB64 = (s: string) => s?.replace(/[^A-Za-z0-9\+\/]/g, '')

const toU8A =
    typeof Uint8Array.from === 'function'
        ? Uint8Array.from.bind(Uint8Array)
        : (it, fn: (any) => number = (x) => x) =>
              new Uint8Array(Array.prototype.slice.call(it, 0).map(fn))

// https://developer.mozilla.org/en-US/docs/Web/API/atob
const atob = is_atob
    ? (asc: string) => atob(cleanB64(asc))
    : is_buffer
    ? (asc: string) => Buffer.from(asc, 'base64').toString('binary')
    : atobPolyfill

const toUint8Array = is_buffer
    ? (a: string) => toU8A(Buffer.from(a, 'base64'))
    : (a: string) => toU8A(atob(a), (c) => c?.charCodeAt(0))

const toUTF8 = is_buffer
    ? (a: string) => Buffer.from(a, 'base64').toString('utf8')
    : is_text_decoder
    ? (a: string) => is_text_decoder.decode(toUint8Array(a))
    : (a: string) => fromUTF16toUTF8(atob(a))
const _unURI = (a: string) => cleanB64(a?.replace(/[-_]/g, (m0) => (m0 == '-' ? '+' : '/')))

const encode = (src: string, urlsafe = false) =>
    urlsafe ? defendURI(encodeString(src)) : encodeString(src)

const decode = (src: string) => toUTF8(_unURI(src))

const isValid = (src: any) => {
    if (typeof src !== 'string') return false
    const s = src?.replace(/\s+/g, '')?.replace(/={0,2}$/, '')
    return !/[^\s0-9a-zA-Z\+/]/.test(s) || !/[^\s0-9a-zA-Z\-_]/.test(s)
}
export { decode as fromBase64 }
export { encode as toBase64 }
export { encode }
export { decode }
export { isValid }
