/**
 *  base64.ts
 *
 *  Licensed under the BSD 3-Clause License.
 *    http://opensource.org/licenses/BSD-3-Clause
 *
 *  References:
 *    http://en.wikipedia.org/wiki/Base64
 *
 * @author Dan Kogai (https://github.com/dankogai)
 */
/* eslint-disable */
const _hasatob = typeof atob === 'function'
const _hasbtoa = typeof btoa === 'function'
const _hasBuffer = typeof Buffer === 'function'
const _TD = typeof TextDecoder === 'function' ? new TextDecoder() : undefined
const _TE = typeof TextEncoder === 'function' ? new TextEncoder() : undefined
const b64ch = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/='
const b64chs = Array.prototype.slice.call(b64ch)
const b64tab = ((a) => {
    const tab = {}
    a.forEach((c, i) => (tab[c] = i))
    return tab
})(b64chs)
const b64re = /^(?:[A-Za-z\d+\/]{4})*?(?:[A-Za-z\d+\/]{2}(?:==)?|[A-Za-z\d+\/]{3}=?)?$/
const _fromCC = String.fromCharCode.bind(String)
const _U8Afrom =
    typeof Uint8Array.from === 'function'
        ? Uint8Array.from.bind(Uint8Array)
        : (it, fn: (any) => number = (x) => x) =>
              new Uint8Array(Array.prototype.slice.call(it, 0).map(fn))
const _mkUriSafe = (src: string) =>
    src.replace(/=/g, '').replace(/[+\/]/g, (m0) => (m0 == '+' ? '-' : '_'))
const _tidyB64 = (s: string) => s.replace(/[^A-Za-z0-9\+\/]/g, '')

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
            b64chs[(u32 >> 18) & 63] +
            b64chs[(u32 >> 12) & 63] +
            b64chs[(u32 >> 6) & 63] +
            b64chs[u32 & 63]
    }
    return pad ? asc.slice(0, pad - 3) + '==='.substring(pad) : asc
}

const _btoa = _hasbtoa
    ? (bin: string) => btoa(bin)
    : _hasBuffer
    ? (bin: string) => Buffer.from(bin, 'binary').toString('base64')
    : btoaPolyfill
const _fromUint8Array = _hasBuffer
    ? (u8a: Uint8Array) => Buffer.from(u8a).toString('base64')
    : (u8a: Uint8Array) => {
          const maxargs = 0x1000
          const strs: string[] = []
          for (let i = 0, l = u8a.length; i < l; i += maxargs) {
              strs.push(_fromCC.apply(null, u8a.subarray(i, i + maxargs)))
          }
          return _btoa(strs.join(''))
      }
const cb_utob = (c: string) => {
    if (c.length < 2) {
        const cc = c.charCodeAt(0)
        return cc < 0x80
            ? c
            : cc < 0x800
            ? _fromCC(0xc0 | (cc >>> 6)) + _fromCC(0x80 | (cc & 0x3f))
            : _fromCC(0xe0 | ((cc >>> 12) & 0x0f)) +
              _fromCC(0x80 | ((cc >>> 6) & 0x3f)) +
              _fromCC(0x80 | (cc & 0x3f))
    } else {
        const cc = 0x10000 + (c.charCodeAt(0) - 0xd800) * 0x400 + (c.charCodeAt(1) - 0xdc00)
        return (
            _fromCC(0xf0 | ((cc >>> 18) & 0x07)) +
            _fromCC(0x80 | ((cc >>> 12) & 0x3f)) +
            _fromCC(0x80 | ((cc >>> 6) & 0x3f)) +
            _fromCC(0x80 | (cc & 0x3f))
        )
    }
}
const re_utob = /[\uD800-\uDBFF][\uDC00-\uDFFFF]|[^\x00-\x7F]/g

const utob = (u: string) => u.replace(re_utob, cb_utob)

const _encode = _hasBuffer
    ? (s: string) => Buffer.from(s, 'utf8').toString('base64')
    : _TE
    ? (s: string) => _fromUint8Array(_TE.encode(s))
    : (s: string) => _btoa(utob(s))

const re_btou = /[\xC0-\xDF][\x80-\xBF]|[\xE0-\xEF][\x80-\xBF]{2}|[\xF0-\xF7][\x80-\xBF]{3}/g
const cb_btou = (cccc: string) => {
    switch (cccc.length) {
        case 4:
            const cp =
                ((0x07 & cccc.charCodeAt(0)) << 18) |
                ((0x3f & cccc.charCodeAt(1)) << 12) |
                ((0x3f & cccc.charCodeAt(2)) << 6) |
                (0x3f & cccc.charCodeAt(3))
            const offset = cp - 0x10000
            return _fromCC((offset >>> 10) + 0xd800) + _fromCC((offset & 0x3ff) + 0xdc00)
        case 3:
            return _fromCC(
                ((0x0f & cccc.charCodeAt(0)) << 12) |
                    ((0x3f & cccc.charCodeAt(1)) << 6) |
                    (0x3f & cccc.charCodeAt(2)),
            )
        default:
            return _fromCC(((0x1f & cccc.charCodeAt(0)) << 6) | (0x3f & cccc.charCodeAt(1)))
    }
}
const btou = (b: string) => b.replace(re_btou, cb_btou)

const atobPolyfill = (asc: string) => {
    asc = asc.replace(/\s+/g, '')
    if (!b64re.test(asc)) throw new TypeError('malformed base64.')
    asc += '=='.slice(2 - (asc.length & 3))
    let u24,
        bin = ''
    let r1
    let r2
    for (let i = 0; i < asc.length; ) {
        u24 =
            (b64tab[asc.charAt(i++)] << 18) |
            (b64tab[asc.charAt(i++)] << 12) |
            ((r1 = b64tab[asc.charAt(i++)]) << 6) |
            (r2 = b64tab[asc.charAt(i++)])
        bin +=
            r1 === 64
                ? _fromCC((u24 >> 16) & 255)
                : r2 === 64
                ? _fromCC((u24 >> 16) & 255, (u24 >> 8) & 255)
                : _fromCC((u24 >> 16) & 255, (u24 >> 8) & 255, u24 & 255)
    }
    return bin
}

const _atob = _hasatob
    ? (asc: string) => atob(_tidyB64(asc))
    : _hasBuffer
    ? (asc: string) => Buffer.from(asc, 'base64').toString('binary')
    : atobPolyfill

const _toUint8Array = _hasBuffer
    ? (a: string) => _U8Afrom(Buffer.from(a, 'base64'))
    : (a: string) => _U8Afrom(_atob(a), (c) => c.charCodeAt(0))

const _decode = _hasBuffer
    ? (a: string) => Buffer.from(a, 'base64').toString('utf8')
    : _TD
    ? (a: string) => _TD.decode(_toUint8Array(a))
    : (a: string) => btou(_atob(a))
const _unURI = (a: string) => _tidyB64(a?.replace(/[-_]/g, (m0) => (m0 == '-' ? '+' : '/')))

const encode = (src: string, urlsafe = false) => (urlsafe ? _mkUriSafe(_encode(src)) : _encode(src))

const decode = (src: string) => _decode(_unURI(src))

const isValid = (src: any) => {
    if (typeof src !== 'string') return false
    const s = src.replace(/\s+/g, '').replace(/={0,2}$/, '')
    return !/[^\s0-9a-zA-Z\+/]/.test(s) || !/[^\s0-9a-zA-Z\-_]/.test(s)
}
export { decode as fromBase64 }
export { encode as toBase64 }
export { encode }
export { decode }
export { isValid }
