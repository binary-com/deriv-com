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

const p2p_allowed_countries = [
    'ad',
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
    'ax',
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
    'by',
    'bz',
    'cc',
    'cd',
    'cf',
    'cg',
    'ch',
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
    'cx',
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
    'gi',
    'gl',
    'gm',
    'gn',
    'gp',
    'gq',
    'gs',
    'gt',
    'gw',
    'gy',
    'hm',
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
    'li',
    'lk',
    'lr',
    'ls',
    'ly',
    'ma',
    'mc',
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
    'nf',
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
    'sm',
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
    'va',
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
