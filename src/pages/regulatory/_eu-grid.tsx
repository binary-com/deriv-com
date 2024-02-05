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
import { WithIntl, Localize } from 'components/localization'

const EUgrid = () => {
    return (
        <div className="grid grid-cols-2 md:grid-cols-8">
            <CustomLink href="/regulatory/countries/Austria.pdf" className=" inline pr-800 pb-800">
                <div className="flex flex-row items-center">
                    <FlagAustriaIcon className="mr-400" iconSize="md" fill="#000000b8" />
                    <Text className="text-base">
                        <Localize translate_text="_t_Austria_t_" />
                    </Text>
                </div>
            </CustomLink>
            <CustomLink href="/regulatory/countries/Bulgaria.pdf" className=" inline pr-800 pb-800">
                <div className="flex flex-row items-center">
                    <FlagBulgariaIcon className="mr-400" iconSize="md" fill="#000000b8" />
                    <Text className="text-base">
                        <Localize translate_text="_t_Bulgaria_t_" />
                    </Text>
                </div>
            </CustomLink>
            <CustomLink href="/regulatory/countries/Croatia.pdf" className=" inline pr-800 pb-800">
                <div className="flex flex-row items-center">
                    <FlagCroatiaIcon className="mr-400" iconSize="md" fill="#000000b8" />
                    <Text className="text-base">
                        <Localize translate_text="_t_Croatia_t_" />
                    </Text>
                </div>
            </CustomLink>
            <CustomLink href="/regulatory/countries/Cyprus.pdf" className=" inline pr-800 pb-800">
                <div className="flex flex-row items-center">
                    <FlagCyprusIcon className="mr-400" iconSize="md" fill="#000000b8" />
                    <Text className="text-base">
                        <Localize translate_text="_t_Cyprus_t_" />
                    </Text>
                </div>
            </CustomLink>
            <CustomLink
                href="/regulatory/countries/CzechRepublic.pdf"
                className=" inline pr-800 pb-800"
            >
                <div className="flex flex-row items-center">
                    <FlagCzechRepublicIcon className="mr-400" iconSize="md" fill="#000000b8" />
                    <Text className="text-base">
                        <Localize translate_text="_t_Czech Republic_t_" />
                    </Text>
                </div>
            </CustomLink>
            <CustomLink href="/regulatory/countries/Denmark.pdf" className=" inline pr-800 pb-800">
                <div className="flex flex-row items-center">
                    <FlagDenmarkIcon className="mr-400" iconSize="md" fill="#000000b8" />
                    <Text className="text-base">
                        <Localize translate_text="_t_Denmark_t_" />
                    </Text>
                </div>
            </CustomLink>
            <CustomLink href="/regulatory/countries/Estonia.pdf" className=" inline pr-800 pb-800">
                <div className="flex flex-row items-center">
                    <FlagEstoniaIcon className="mr-400" iconSize="md" fill="#000000b8" />
                    <Text className="text-base">
                        <Localize translate_text="_t_Estonia_t_" />
                    </Text>
                </div>
            </CustomLink>
            <CustomLink href="/regulatory/countries/Finland.pdf" className=" inline pr-800 pb-800">
                <div className="flex flex-row items-center">
                    <FlagFinlandIcon className="mr-400" iconSize="md" fill="#000000b8" />
                    <Text className="text-base">
                        <Localize translate_text="_t_Finland_t_" />
                    </Text>
                </div>
            </CustomLink>
            <CustomLink href="/regulatory/countries/France.pdf" className=" inline pr-800 pb-800">
                <div className="flex flex-row items-center">
                    <FlagFranceIcon className="mr-400" iconSize="md" fill="#000000b8" />
                    <Text className="text-base">
                        <Localize translate_text="_t_France_t_" />
                    </Text>
                </div>
            </CustomLink>
            <CustomLink href="/regulatory/countries/Germany.pdf" className=" inline pr-800 pb-800">
                <div className="flex flex-row items-center">
                    <FlagGermanyIcon className="mr-400" iconSize="md" fill="#000000b8" />
                    <Text className="text-base">
                        <Localize translate_text="_t_Germany_t_" />
                    </Text>
                </div>
            </CustomLink>
            <CustomLink href="/regulatory/countries/Greece.pdf" className=" inline pr-800 pb-800">
                <div className="flex flex-row items-center">
                    <FlagGreeceIcon className="mr-400" iconSize="md" fill="#000000b8" />
                    <Text className="text-base">
                        <Localize translate_text="_t_Greece_t_" />
                    </Text>
                </div>
            </CustomLink>
            <CustomLink href="/regulatory/countries/Hungary.pdf" className=" inline pr-800 pb-800">
                <div className="flex flex-row items-center">
                    <FlagHungaryIcon className="mr-400" iconSize="md" fill="#000000b8" />
                    <Text className="text-base">
                        <Localize translate_text="_t_Hungary_t_" />
                    </Text>
                </div>
            </CustomLink>
            <CustomLink href="/regulatory/countries/Italy.pdf" className=" inline pr-800 pb-800">
                <div className="flex flex-row items-center">
                    <FlagItalyIcon className="mr-400" iconSize="md" fill="#000000b8" />
                    <Text className="text-base">
                        <Localize translate_text="_t_Italy_t_" />
                    </Text>
                </div>
            </CustomLink>
            <CustomLink href="/regulatory/countries/Ireland.pdf" className=" inline pr-800 pb-800">
                <div className="flex flex-row items-center">
                    <FlagIrelandIcon className="mr-400" iconSize="md" fill="#000000b8" />
                    <Text className="text-base">
                        <Localize translate_text="_t_Ireland_t_" />
                    </Text>
                </div>
            </CustomLink>
            <CustomLink href="/regulatory/countries/Latvia.pdf" className=" inline pr-800 pb-800">
                <div className="flex flex-row items-center">
                    <FlagLatviaIcon className="mr-400" iconSize="md" fill="#000000b8" />
                    <Text className="text-base">
                        <Localize translate_text="_t_Latvia_t_" />
                    </Text>
                </div>
            </CustomLink>
            <CustomLink
                href="/regulatory/countries/Lithuania.pdf"
                className=" inline pr-800 pb-800"
            >
                <div className="flex flex-row items-center">
                    <FlagLithuaniaIcon className="mr-400" iconSize="md" fill="#000000b8" />
                    <Text className="text-base">
                        <Localize translate_text="_t_Lithuania_t_" />
                    </Text>
                </div>
            </CustomLink>
            <CustomLink
                href="/regulatory/countries/Luxembourg.pdf"
                className=" inline pr-800 pb-800"
            >
                <div className="flex flex-row items-center">
                    <FlagLuxembourgIcon className="mr-400" iconSize="md" fill="#000000b8" />
                    <Text className="text-base">
                        <Localize translate_text="_t_Luxembourg_t_" />
                    </Text>
                </div>
            </CustomLink>
            <CustomLink
                href="/regulatory/countries/Netherlands.pdf"
                className=" inline pr-800 pb-800"
            >
                <div className="flex flex-row items-center">
                    <FlagNetherlandIcon className="mr-400" iconSize="md" fill="#000000b8" />
                    <Text className="text-base">
                        <Localize translate_text="_t_Netherlands_t_" />
                    </Text>
                </div>
            </CustomLink>
            <CustomLink href="/regulatory/countries/Poland.pdf" className=" inline pr-800 pb-800">
                <div className="flex flex-row items-center">
                    <FlagPolandIcon className="mr-400" iconSize="md" fill="#000000b8" />
                    <Text className="text-base">
                        <Localize translate_text="_t_Poland_t_" />
                    </Text>
                </div>
            </CustomLink>
            <CustomLink href="/regulatory/countries/Portugal.pdf" className=" inline pr-800 pb-800">
                <div className="flex flex-row items-center">
                    <FlagPortugalIcon className="mr-400" iconSize="md" fill="#000000b8" />
                    <Text className="text-base">
                        <Localize translate_text="_t_Portugal_t_" />
                    </Text>
                </div>
            </CustomLink>
            <CustomLink href="/regulatory/countries/Romania.pdf" className=" inline pr-800 pb-800">
                <div className="flex flex-row items-center">
                    <FlagRomaniaIcon className="mr-400" iconSize="md" fill="#000000b8" />
                    <Text className="text-base">
                        <Localize translate_text="_t_Romania_t_" />
                    </Text>
                </div>
            </CustomLink>
            <CustomLink href="/regulatory/countries/Slovakia.pdf" className=" inline pr-800 pb-800">
                <div className="flex flex-row items-center">
                    <FlagSlovakiaIcon className="mr-400" iconSize="md" fill="#000000b8" />
                    <Text className="text-base">
                        <Localize translate_text="_t_Slovakia_t_" />
                    </Text>
                </div>
            </CustomLink>
            <CustomLink href="/regulatory/countries/Slovenia.pdf" className=" inline pr-800 pb-800">
                <div className="flex flex-row items-center">
                    <FlagSloveniaIcon className="mr-400" iconSize="md" fill="#000000b8" />
                    <Text className="text-base">
                        <Localize translate_text="_t_Slovenia_t_" />
                    </Text>
                </div>
            </CustomLink>
            <CustomLink href="/regulatory/countries/Spain.pdf" className=" inline pr-800 pb-800">
                <div className="flex flex-row items-center">
                    <FlagSpainIcon className="mr-400" iconSize="md" fill="#000000b8" />
                    <Text className="text-base">
                        <Localize translate_text="_t_Spain_t_" />
                    </Text>
                </div>
            </CustomLink>
            <CustomLink href="/regulatory/countries/Sweden.pdf" className=" inline pr-800 pb-800">
                <div className="flex flex-row items-center">
                    <FlagSwedenIcon className="mr-400" iconSize="md" fill="#000000b8" />
                    <Text className="text-base">
                        <Localize translate_text="_t_Sweden_t_" />
                    </Text>
                </div>
            </CustomLink>
        </div>
    )
}

export default WithIntl()(EUgrid)
