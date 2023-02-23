import React, { ReactElement } from 'react'
import styled from 'styled-components'
import option_icon from '../../images/svg/home/option_icon.svg'
import cfd_icon from '../../images/svg/home/cfd_icon.svg'
import multipliers_icon from '../../images/svg/home/multipliers_icon.svg'
import { localize, Localize, LocalizedLink } from 'components/localization'
import { Flex, SectionContainer } from 'components/containers'
import { useBrowserResize } from 'components/hooks/use-browser-resize'
import useRegion from 'components/hooks/use-region'
import { useLangDirection } from 'components/hooks/use-lang-direction'
import { FullWidthMultiColumn } from 'components/elements/full-width-multicolumn'
import { StyledBox } from 'pages/markets/static/style/_markets-style'

type TradeTypesProps = {
    class_name: string
    image_url: string
    image_alt: ReactElement
    header: ReactElement
    desc: ReactElement
    link: string
    link_text: ReactElement
    alt: string
}

const items_details_row: TradeTypesProps[] = [
    {
        class_name: 'cfds',
        image_url: cfd_icon,
        image_alt: <Localize translate_text="CFDs" />,
        header: <Localize translate_text="CFDs" />,
        desc: (
            <Localize translate_text="Trade with leverage and low spreads for better returns on successful trades." />
        ),
        link: '/trade-types/cfds/',
        link_text: <Localize translate_text="Learn More >" />,
        alt: 'cfd',
    },
    {
        class_name: 'multipliers',
        image_url: multipliers_icon,
        image_alt: <Localize translate_text="Multipliers" />,
        header: <Localize translate_text="Multipliers" />,
        desc: (
            <Localize translate_text="Multiply potential profit without risking more than your initial stake." />
        ),
        link: '/trade-types/multiplier/',
        link_text: <Localize translate_text="Learn More >" />,
        alt: 'multipliers',
    },
    {
        class_name: 'options',
        image_url: option_icon,
        image_alt: <Localize translate_text="Options" />,
        header: <Localize translate_text="Options" />,
        desc: (
            <Localize translate_text="Earn a range of payouts by correctly predicting market movements." />
        ),
        link: '/trade-types/options/',
        link_text: <Localize translate_text="Learn More >" />,
        alt: 'options',
    },
]

const items_details_eu: TradeTypesProps[] = [
    {
        class_name: 'cfds',
        image_url: cfd_icon,
        image_alt: <Localize translate_text="CFDs" />,
        header: <Localize translate_text="CFDs" />,
        desc: (
            <Localize translate_text="Trade with leverage and low spreads for better returns on successful trades." />
        ),
        link: '/trade-types/cfds/',
        link_text: <Localize translate_text="Learn More >" />,
        alt: 'cfd',
    },
    {
        class_name: 'multipliers',
        image_url: multipliers_icon,
        image_alt: <Localize translate_text="Multipliers" />,
        header: <Localize translate_text="Multipliers" />,
        desc: (
            <Localize translate_text="Multiply your potential profit without risking more than your stake." />
        ),
        link: '/trade-types/multiplier/',
        link_text: <Localize translate_text="Learn More >" />,
        alt: 'multipliers',
    },
]

const TradeTypes = (): React.ReactNode => {
    const { is_eu } = useRegion()

    const getRegionalData = is_eu ? items_details_eu : items_details_row
    const sub_header_text = is_eu
        ? 'Trade the way you want with 2 flexible trade types.'
        : 'Trade the way you want with 3 exciting trade types.'

    return (
        <FullWidthMultiColumn
            multiple_row={true}
            header={<Localize translate_text="Trade types" />}
            sub_header={<Localize translate_text={sub_header_text} />}
        >
            {getRegionalData.map((content, index) => (
                <StyledBox
                    item_title={content.header}
                    key={index}
                    text={content.desc}
                    icon={<img src={content.image_url} alt={content.alt} />}
                    link={content.link}
                    link_text={content.link_text}
                />
            ))}
        </FullWidthMultiColumn>
    )
}

export default TradeTypes
