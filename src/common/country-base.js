export const eu_countries = [
    'it',
    'de',
    'fr',
    'lu',
    'gr',
    'mf',
    'es',
    'sk',
    'lt',
    'nl',
    'at',
    'bg',
    'si',
    'cy',
    'be',
    'ro',
    'hr',
    'pt',
    'pl',
    'lv',
    'ee',
    'cz',
    'fi',
    'hu',
    'dk',
    'se',
    'ie',
    'im',
    'gb',
    'mt',
]
export const latam_countries = [
    'ag',
    'aw',
    'bs',
    'bb',
    'ky',
    'cu',
    'dm',
    'do',
    'gd',
    'gp',
    'ht',
    'jm',
    'mq',
    'pr',
    'kn',
    'lc',
    'vc',
    'tt',
    'tc',
    'vg',
    'bz',
    'cr',
    'sv',
    'gt',
    'hn',
    'mx',
    'ni',
    'pa',
    'ar',
    'bo',
    'cl',
    'co',
    'ec',
    'gf',
    'gy',
    'py',
    'pe',
    'sr',
    'uy',
    've',
]

const p2p_allowed_countries = [
    'af',
    'ag',
    'ai',
    'al',
    'am',
    'an',
    'ao',
    'aq',
    'ar',
    'aw',
    'az',
    'ba',
    'bb',
    'bd',
    'bf',
    'bh',
    'bi',
    'bj',
    'bl',
    'bm',
    'bn',
    'bo',
    'bq',
    'br',
    'bs',
    'bt',
    'bv',
    'bw',
    'bz',
    'cd',
    'cf',
    'cg',
    'ci',
    'ck',
    'cl',
    'cm',
    'cn',
    'co',
    'cr',
    'cu',
    'cv',
    'cw',
    'dj',
    'dm',
    'do',
    'dz',
    'ec',
    'eg',
    'eh',
    'er',
    'et',
    'fj',
    'fk',
    'fm',
    'fo',
    'ga',
    'gd',
    'ge',
    'gf',
    'gh',
    'gl',
    'gm',
    'gn',
    'gp',
    'gq',
    'gs',
    'gt',
    'gw',
    'gy',
    'hn',
    'ht',
    'id',
    'in',
    'io',
    'iq',
    'is',
    'jm',
    'jo',
    'ke',
    'kg',
    'kh',
    'ki',
    'km',
    'kn',
    'kr',
    'kw',
    'ky',
    'kz',
    'la',
    'lb',
    'lc',
    'lk',
    'lr',
    'ls',
    'ly',
    'ma',
    'md',
    'me',
    'mf',
    'mg',
    'mh',
    'mk',
    'ml',
    'mm',
    'mn',
    'mo',
    'mq',
    'mr',
    'ms',
    'mu',
    'mv',
    'mw',
    'mx',
    'mz',
    'na',
    'nc',
    'ne',
    'ng',
    'ni',
    'np',
    'nr',
    'nu',
    'om',
    'pa',
    'pe',
    'pf',
    'pg',
    'ph',
    'pk',
    'pm',
    'pn',
    'ps',
    'pw',
    'qa',
    're',
    'rs',
    'ru',
    'sa',
    'sb',
    'sc',
    'sd',
    'sg',
    'sh',
    'sj',
    'sl',
    'sn',
    'so',
    'sr',
    'ss',
    'st',
    'sv',
    'sx',
    'sy',
    'sz',
    'tc',
    'td',
    'tf',
    'tg',
    'th',
    'tj',
    'tk',
    'tl',
    'tm',
    'tn',
    'to',
    'tr',
    'tt',
    'tv',
    'tw',
    'tz',
    'ua',
    'ug',
    'uy',
    'uz',
    'vc',
    've',
    'vg',
    'vn',
    'wf',
    'ws',
    'ye',
    'yt',
    'za',
    'zm',
    'zw',
]

export const isEuCountry = (clients_country) => eu_countries.includes(clients_country)

export const isP2PAllowedCountry = (clients_country) =>
    p2p_allowed_countries.includes(clients_country)

export const isUK = (clients_country) => clients_country === 'gb'
