import React from 'react'
import styled from 'styled-components'
import {
    wrap_container,
    array_wrapper,
    heading,
    country,
    box,
    heading_countries,
} from '../_premium_agent.module.scss'
import { TString } from 'types/generics'
import Container from 'features/components/atoms/container'
import { Localize } from 'components/localization'
import Image from 'features/components/atoms/image'
import Typography from 'features/components/atoms/typography'
import FlexBox from 'features/components/atoms/flex-box'
import useScreenSize from 'components/hooks/use-screen-size'
import Botswana from 'images/svg/flags/botswana.svg'
import Brazil from 'images/svg/flags/brazil.svg'
import India from 'images/svg/flags/india.svg'
import Kenya from 'images/svg/flags/kenya.svg'
import Nigeria from 'images/svg/flags/nigeria.svg'
import SouthAfrica from 'images/svg/flags/south-africa.svg'
import SriLanka from 'images/svg/flags/sri-lanka.svg'
import Tanzania from 'images/svg/flags/tanzania.svg'
import Zimbabwe from 'images/svg/flags/zimbabwe.svg'

interface CountryProps {
    name: TString
    flag: string
}

const countries: CountryProps[] = [
    { name: '_t_Brazil_t_', flag: Brazil },
    { name: '_t_Botswana_t_', flag: Botswana },
    { name: '_t_India_t_', flag: India },
    { name: '_t_Kenya_t_', flag: Kenya },
    { name: '_t_Nigeria_t_', flag: Nigeria },
    { name: '_t_Sri Lanka_t_', flag: SriLanka },
    { name: '_t_South Africa_t_', flag: SouthAfrica },
    { name: '_t_Tanzania_t_', flag: Tanzania },
    { name: '_t_Zimbabwe_t_', flag: Zimbabwe },
]

const PremiumPaymentAgent = () => {
    const { is_mobile } = useScreenSize()

    return (
        <FlexBox.Box
            justify="start"
            align="start"
            margin_inline={'10x'}
            margin_block={'20x'}
            direction="col"
            md={{ direction: 'row', align: 'center', justify: 'center', margin: '25x' }}
        >
            <FlexBox.Box className={box} direction={'col'} mr={is_mobile ? '0x' : '40x'}>
                <Typography.Heading className={heading} size={'large'} mb="2x">
                    <Localize translate_text="_t_Premium payment agent_t_" />
                </Typography.Heading>
                <Typography.Paragraph mt="5x" mb="2x">
                    <Localize translate_text="_t_Payment agents with good transaction volumes are selected to join an exclusive network of partners who can transfer funds with each other via their Deriv accounts. If an agent needs help with cash flow, others may pitch in to help. Only a limited number of payment agents are selected per country._t_" />
                </Typography.Paragraph>
                <Typography.Paragraph mt="5x" mb="2x">
                    <Localize translate_text="_t_For more info, contact your country manager_t_" />
                </Typography.Paragraph>
            </FlexBox.Box>
            <FlexBox.Box className={box} direction={'col'}>
                <Typography.Paragraph weight={'bold'} mt="14x" mb="2x">
                    <Localize translate_text="_t_Only available in these countries:_t_" />
                </Typography.Paragraph>
                <FlexBox.Box direction={'col'}>
                    <FlexBox.Item className={array_wrapper}>
                        {countries.map(({ name, flag }) => (
                            <FlexBox.Box key={name} className={country}>
                                <Image src={flag} alt={`${name} flag`} />
                                <Typography.Paragraph
                                    className={heading_countries}
                                    size="large"
                                    weight="normal"
                                >
                                    <Localize translate_text={name} />
                                </Typography.Paragraph>
                            </FlexBox.Box>
                        ))}
                    </FlexBox.Item>
                </FlexBox.Box>
            </FlexBox.Box>
        </FlexBox.Box>
    )
}

export default PremiumPaymentAgent
