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

const EUgrid = () => {
    return (
        <div className={styles.eu_grid}>
            <CustomLink href="/regulatory/countries/Austria.pdf" className=" inline">
                <div className={styles.country_container}>
                    <FlagAustriaIcon className={styles.icon} fill="#000000b8" />
                    <Text className="text-base">
                        <Localize translate_text="_t_Austria_t_" />
                    </Text>
                </div>
            </CustomLink>
            <CustomLink href="/regulatory/countries/Bulgaria.pdf" className=" inline">
                <div className={styles.country_container}>
                    <FlagBulgariaIcon className={styles.icon} iconSize="md" fill="#000000b8" />
                    <Text className="text-base">
                        <Localize translate_text="_t_Bulgaria_t_" />
                    </Text>
                </div>
            </CustomLink>
            <CustomLink href="/regulatory/countries/Croatia.pdf" className=" inline">
                <div className={styles.country_container}>
                    <FlagCroatiaIcon className={styles.icon} iconSize="md" fill="#000000b8" />
                    <Text className="text-base">
                        <Localize translate_text="_t_Croatia_t_" />
                    </Text>
                </div>
            </CustomLink>
            <CustomLink href="/regulatory/countries/Cyprus.pdf" className=" inline">
                <div className={styles.country_container}>
                    <FlagCyprusIcon className={styles.icon} iconSize="md" fill="#000000b8" />
                    <Text className="text-base">
                        <Localize translate_text="_t_Cyprus_t_" />
                    </Text>
                </div>
            </CustomLink>
            <CustomLink href="/regulatory/countries/CzechRepublic.pdf" className=" inline">
                <div className={styles.country_container}>
                    <FlagCzechRepublicIcon className={styles.icon} iconSize="md" fill="#000000b8" />
                    <Text className="text-base">
                        <Localize translate_text="_t_Czech Republic_t_" />
                    </Text>
                </div>
            </CustomLink>
            <CustomLink href="/regulatory/countries/Denmark.pdf" className=" inline">
                <div className={styles.country_container}>
                    <FlagDenmarkIcon className={styles.icon} iconSize="md" fill="#000000b8" />
                    <Text className="text-base">
                        <Localize translate_text="_t_Denmark_t_" />
                    </Text>
                </div>
            </CustomLink>
            <CustomLink href="/regulatory/countries/Estonia.pdf" className=" inline">
                <div className={styles.country_container}>
                    <FlagEstoniaIcon className={styles.icon} iconSize="md" fill="#000000b8" />
                    <Text className="text-base">
                        <Localize translate_text="_t_Estonia_t_" />
                    </Text>
                </div>
            </CustomLink>
            <CustomLink href="/regulatory/countries/Finland.pdf" className=" inline">
                <div className={styles.country_container}>
                    <FlagFinlandIcon className={styles.icon} iconSize="md" fill="#000000b8" />
                    <Text className="text-base">
                        <Localize translate_text="_t_Finland_t_" />
                    </Text>
                </div>
            </CustomLink>
            <CustomLink href="/regulatory/countries/France.pdf" className=" inline">
                <div className={styles.country_container}>
                    <FlagFranceIcon className={styles.icon} iconSize="md" fill="#000000b8" />
                    <Text className="text-base">
                        <Localize translate_text="_t_France_t_" />
                    </Text>
                </div>
            </CustomLink>
            <CustomLink href="/regulatory/countries/Germany.pdf" className=" inline">
                <div className={styles.country_container}>
                    <FlagGermanyIcon className={styles.icon} iconSize="md" fill="#000000b8" />
                    <Text className="text-base">
                        <Localize translate_text="_t_Germany_t_" />
                    </Text>
                </div>
            </CustomLink>
            <CustomLink href="/regulatory/countries/Greece.pdf" className=" inline">
                <div className={styles.country_container}>
                    <FlagGreeceIcon className={styles.icon} iconSize="md" fill="#000000b8" />
                    <Text className="text-base">
                        <Localize translate_text="_t_Greece_t_" />
                    </Text>
                </div>
            </CustomLink>
            <CustomLink href="/regulatory/countries/Hungary.pdf" className=" inline">
                <div className={styles.country_container}>
                    <FlagHungaryIcon className={styles.icon} iconSize="md" fill="#000000b8" />
                    <Text className="text-base">
                        <Localize translate_text="_t_Hungary_t_" />
                    </Text>
                </div>
            </CustomLink>
            <CustomLink href="/regulatory/countries/Italy.pdf" className=" inline">
                <div className={styles.country_container}>
                    <FlagItalyIcon className={styles.icon} iconSize="md" fill="#000000b8" />
                    <Text className="text-base">
                        <Localize translate_text="_t_Italy_t_" />
                    </Text>
                </div>
            </CustomLink>
            <CustomLink href="/regulatory/countries/Ireland.pdf" className=" inline">
                <div className={styles.country_container}>
                    <FlagIrelandIcon className={styles.icon} iconSize="md" fill="#000000b8" />
                    <Text className="text-base">
                        <Localize translate_text="_t_Ireland_t_" />
                    </Text>
                </div>
            </CustomLink>
            <CustomLink href="/regulatory/countries/Latvia.pdf" className=" inline">
                <div className={styles.country_container}>
                    <FlagLatviaIcon className={styles.icon} iconSize="md" fill="#000000b8" />
                    <Text className="text-base">
                        <Localize translate_text="_t_Latvia_t_" />
                    </Text>
                </div>
            </CustomLink>
            <CustomLink href="/regulatory/countries/Lithuania.pdf" className=" inline">
                <div className={styles.country_container}>
                    <FlagLithuaniaIcon className={styles.icon} iconSize="md" fill="#000000b8" />
                    <Text className="text-base">
                        <Localize translate_text="_t_Lithuania_t_" />
                    </Text>
                </div>
            </CustomLink>
            <CustomLink href="/regulatory/countries/Luxembourg.pdf" className=" inline">
                <div className={styles.country_container}>
                    <FlagLuxembourgIcon className={styles.icon} iconSize="md" fill="#000000b8" />
                    <Text className="text-base">
                        <Localize translate_text="_t_Luxembourg_t_" />
                    </Text>
                </div>
            </CustomLink>
            <CustomLink href="/regulatory/countries/Netherlands.pdf" className=" inline">
                <div className={styles.country_container}>
                    <FlagNetherlandIcon className={styles.icon} iconSize="md" fill="#000000b8" />
                    <Text className="text-base">
                        <Localize translate_text="_t_Netherlands_t_" />
                    </Text>
                </div>
            </CustomLink>
            <CustomLink href="/regulatory/countries/Poland.pdf" className=" inline">
                <div className={styles.country_container}>
                    <FlagPolandIcon className={styles.icon} iconSize="md" fill="#000000b8" />
                    <Text className="text-base">
                        <Localize translate_text="_t_Poland_t_" />
                    </Text>
                </div>
            </CustomLink>
            <CustomLink href="/regulatory/countries/Portugal.pdf" className=" inline">
                <div className={styles.country_container}>
                    <FlagPortugalIcon className={styles.icon} iconSize="md" fill="#000000b8" />
                    <Text className="text-base">
                        <Localize translate_text="_t_Portugal_t_" />
                    </Text>
                </div>
            </CustomLink>
            <CustomLink href="/regulatory/countries/Romania.pdf" className=" inline">
                <div className={styles.country_container}>
                    <FlagRomaniaIcon className={styles.icon} iconSize="md" fill="#000000b8" />
                    <Text className="text-base">
                        <Localize translate_text="_t_Romania_t_" />
                    </Text>
                </div>
            </CustomLink>
            <CustomLink href="/regulatory/countries/Slovakia.pdf" className=" inline">
                <div className={styles.country_container}>
                    <FlagSlovakiaIcon className={styles.icon} iconSize="md" fill="#000000b8" />
                    <Text className="text-base">
                        <Localize translate_text="_t_Slovakia_t_" />
                    </Text>
                </div>
            </CustomLink>
            <CustomLink href="/regulatory/countries/Slovenia.pdf" className=" inline">
                <div className={styles.country_container}>
                    <FlagSloveniaIcon className={styles.icon} iconSize="md" fill="#000000b8" />
                    <Text className="text-base">
                        <Localize translate_text="_t_Slovenia_t_" />
                    </Text>
                </div>
            </CustomLink>
            <CustomLink href="/regulatory/countries/Spain.pdf" className=" inline">
                <div className={styles.country_container}>
                    <FlagSpainIcon className={styles.icon} iconSize="md" fill="#000000b8" />
                    <Text className="text-base">
                        <Localize translate_text="_t_Spain_t_" />
                    </Text>
                </div>
            </CustomLink>
            <CustomLink href="/regulatory/countries/Sweden.pdf" className=" inline">
                <div className={styles.country_container}>
                    <FlagSwedenIcon className={styles.icon} iconSize="md" fill="#000000b8" />
                    <Text className="text-base">
                        <Localize translate_text="_t_Sweden_t_" />
                    </Text>
                </div>
            </CustomLink>
        </div>
    )
}

export default WithIntl()(EUgrid)
