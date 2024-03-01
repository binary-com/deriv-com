import React from 'react'
import { array_wrapper, heading, box, heading_countries } from '../_premium_agent.module.scss'
import { TString } from 'types/generics'
import { Localize } from 'components/localization'
import Image from 'features/components/atoms/image'
import Typography from 'features/components/atoms/typography'
import FlexBox from 'features/components/atoms/flex-box'
import Botswana from 'images/svg/flags/botswana.svg'
import India from 'images/svg/flags/india.svg'
import Nigeria from 'images/svg/flags/nigeria.svg'
import SriLanka from 'images/svg/flags/sri-lanka.svg'
import Tanzania from 'images/svg/flags/tanzania.svg'
import Zimbabwe from 'images/svg/flags/zimbabwe.svg'

type CountryProps = {
    name: TString
    flag: string
}

const countries: CountryProps[] = [
    { name: '_t_Botswana_t_', flag: Botswana },
    { name: '_t_India_t_', flag: India },
    { name: '_t_Nigeria_t_', flag: Nigeria },
    { name: '_t_Sri Lanka_t_', flag: SriLanka },
    { name: '_t_Tanzania_t_', flag: Tanzania },
    { name: '_t_Zimbabwe_t_', flag: Zimbabwe },
]

const PremiumPaymentAgent = () => {
    return (
        <FlexBox.Box
            justify="center"
            align="start"
            margin_inline={'10x'}
            margin_block={'20x'}
            direction="col"
            md={{
                direction: 'row',
                align: 'center',
                justify: 'center',
                margin_block: '40x',
                gap: '40x',
            }}
        >
            <FlexBox.Box className={box} direction={'col'}>
                <Typography.Heading className={heading} size={'large'} mb="2x">
                    <Localize translate_text="_t_Premium payment agent_t_" />
                </Typography.Heading>
                <Typography.Paragraph mt="5x" mb="2x">
                    <Localize translate_text="_t_Payment agents with good transaction volumes are selected to join an exclusive network of partners who can transfer funds with each other via their Deriv accounts. If an agent needs help with cash flow, others may pitch in to help. Only a limited number of payment agents are selected per country._t_" />
                </Typography.Paragraph>
                <Typography.Paragraph mt="5x" mb="2x">
                    <Localize translate_text="_t_For more info, contact your country manager._t_" />
                </Typography.Paragraph>
            </FlexBox.Box>
            <FlexBox.Box className={box} direction={'col'}>
                <Typography.Paragraph
                    weight={'bold'}
                    margin_block="7x"
                    mb="2x"
                    md={{ padding_inline: '4x', margin_block: '0x' }}
                >
                    <Localize translate_text="_t_Only available in these countries:_t_" />
                </Typography.Paragraph>
                <FlexBox.Box wrap="wrap" className={array_wrapper} direction={'row'}>
                    {countries.map(({ name, flag }) => (
                        <FlexBox.Box
                            basis={'1-2'}
                            padding_block="6x"
                            key={name}
                            align_self="center"
                            gap="5x"
                            md={{ basis: '1-3', padding_block: '10x', padding_inline: '5x' }}
                        >
                            <Image src={flag} alt={`${name} flag`} />
                            <Typography.Paragraph className={heading_countries} size="large">
                                <Localize translate_text={name} />
                            </Typography.Paragraph>
                        </FlexBox.Box>
                    ))}
                </FlexBox.Box>
            </FlexBox.Box>
        </FlexBox.Box>
    )
}

export default PremiumPaymentAgent
