import React from 'react'
import {
    FlagAustriaIcon,
    FlagBulgariaIcon,
    FlagCroatiaIcon,
    FlagCyprusIcon,
    FlagCzechRepublicIcon,
    FlagDenmarkIcon,
    FlagEstoniaIcon,
    FlagFinlandIcon,
    FlagFranceIcon,
    FlagGermanyIcon,
    FlagGreeceIcon,
    FlagHungaryIcon,
    FlagItalyIcon,
    FlagIrelandIcon,
    FlagLatviaIcon,
    FlagLithuaniaIcon,
    FlagLuxembourgIcon,
    FlagNetherlandIcon,
    FlagPolandIcon,
    FlagPortugalIcon,
    FlagRomaniaIcon,
    FlagSlovakiaIcon,
    FlagSloveniaIcon,
    FlagSpainIcon,
    FlagSwedenIcon, // eslint-disable-next-line import/no-unresolved
} from '@deriv/quill-icons/Flags'
import { Text } from '@deriv/quill-design'
import { CustomLink } from '@deriv-com/components'
import * as styles from './eu_grid.module.scss'
import { WithIntl, Localize } from 'components/localization'

const countries = [
    { href: '/regulatory/countries/Austria.pdf', icon: <FlagAustriaIcon />, text: '_t_Austria_t_' },
    {
        href: '/regulatory/countries/Bulgaria.pdf',
        icon: <FlagBulgariaIcon />,
        text: '_t_Bulgaria_t_',
    },
    { href: '/regulatory/countries/Croatia.pdf', icon: <FlagCroatiaIcon />, text: '_t_Croatia_t_' },
    { href: '/regulatory/countries/Cyprus.pdf', icon: <FlagCyprusIcon />, text: '_t_Cyprus_t_' },
    {
        href: '/regulatory/countries/CzechRepublic.pdf',
        icon: <FlagCzechRepublicIcon />,
        text: '_t_Czech Republic_t_',
    },
    { href: '/regulatory/countries/Denmark.pdf', icon: <FlagDenmarkIcon />, text: '_t_Denmark_t_' },
    { href: '/regulatory/countries/Estonia.pdf', icon: <FlagEstoniaIcon />, text: '_t_Estonia_t_' },
    { href: '/regulatory/countries/Finland.pdf', icon: <FlagFinlandIcon />, text: '_t_Finland_t_' },
    { href: '/regulatory/countries/France.pdf', icon: <FlagFranceIcon />, text: '_t_France_t_' },
    { href: '/regulatory/countries/Germany.pdf', icon: <FlagGermanyIcon />, text: '_t_Germany_t_' },
    { href: '/regulatory/countries/Greece.pdf', icon: <FlagGreeceIcon />, text: '_t_Greece_t_' },
    { href: '/regulatory/countries/Hungary.pdf', icon: <FlagHungaryIcon />, text: '_t_Hungary_t_' },
    { href: '/regulatory/countries/Italy.pdf', icon: <FlagItalyIcon />, text: '_t_Italy_t_' },
    { href: '', icon: <FlagIrelandIcon />, text: '_t_Ireland_t_' },
    { href: '/regulatory/countries/Latvia.pdf', icon: <FlagLatviaIcon />, text: '_t_Latvia_t_' },
    {
        href: '/regulatory/countries/Lithuania.pdf',
        icon: <FlagLithuaniaIcon />,
        text: '_t_Lithuania_t_',
    },
    {
        href: '/regulatory/countries/Luxembourg.pdf',
        icon: <FlagLuxembourgIcon />,
        text: '_t_Luxembourg_t_',
    },
    {
        href: '/regulatory/countries/Netherlands.pdf',
        icon: <FlagNetherlandIcon />,
        text: '_t_Netherlands_t_',
    },
    { href: '/regulatory/countries/Poland.pdf', icon: <FlagPolandIcon />, text: '_t_Poland_t_' },
    {
        href: '/regulatory/countries/Portugal.pdf',
        icon: <FlagPortugalIcon />,
        text: '_t_Portugal_t_',
    },
    { href: '/regulatory/countries/Romania.pdf', icon: <FlagRomaniaIcon />, text: '_t_Romania_t_' },
    {
        href: '/regulatory/countries/Slovakia.pdf',
        icon: <FlagSlovakiaIcon />,
        text: '_t_Slovakia_t_',
    },
    {
        href: '/regulatory/countries/Slovenia.pdf',
        icon: <FlagSloveniaIcon />,
        text: '_t_Slovenia_t_',
    },
    { href: '/regulatory/countries/Spain.pdf', icon: <FlagSpainIcon />, text: '_t_Spain_t_' },
    { href: '/regulatory/countries/Sweden.pdf', icon: <FlagSwedenIcon />, text: '_t_Sweden_t_' },
]

const EUgrid = () => {
    return (
        <div className={styles.eu_grid}>
            {countries.map((country, index) => (
                <div key={index} className="inline">
                    {country.href ? (
                        <a href={country.href} target="_blank" rel="noreferrer">
                            <div className={styles.country_container}>
                                {country.icon && <div className={styles.icon}>{country.icon}</div>}
                                <Text className="text-base text-solid-slate-1400 leading-200 text-75 underline lg:!no-underline lg:hover:!underline">
                                    <Localize translate_text={country.text} />
                                </Text>
                            </div>
                        </a>
                    ) : (
                        <div className={styles.country_container}>
                            {country.icon && <div className={styles.icon}>{country.icon}</div>}
                            <Text className="text-base text-solid-slate-1400 leading-200 text-75 ">
                                <Localize translate_text={country.text} />
                            </Text>
                        </div>
                    )}
                </div>
            ))}
        </div>
    )
}

export default WithIntl()(EUgrid)
