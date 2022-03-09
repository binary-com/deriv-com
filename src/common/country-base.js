const uk_countries = ['gb']

const eu_countries = [
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
    'mt',
    ...uk_countries,
]

const p2p_allowed_countries = [
    'ng',
    'za',
    'zw',
    'tz',
    'gh',
    'zm',
    'bw',
    'na',
    'ke',
    'aq',
    'so',
    'pk',
    'in',
    'bd',
    'ik',
    'ci',
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

export const isUK = (country) => uk_countries.includes(country)

export const isEU = (country) => eu_countries.includes(country)

export const isEUAndNotUK = (country) => isEU(country) && !isUK(country)

export const isP2PAllowedCountry = (clients_country) =>
    p2p_allowed_countries.includes(clients_country)

/**
 * @deprecated Use isEU instead.
 */
export const isEuCountry = (clients_country) => eu_countries.includes(clients_country)
