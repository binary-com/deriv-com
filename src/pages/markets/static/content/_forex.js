import React from 'react'
import styled from 'styled-components'
import { Text } from 'components/elements'
import { Flex } from 'components/containers'
import { Localize } from 'components/localization'
import AdvancedCharting from 'images/svg/markets/advanced-charting-widgets.svg'
import Deposit from 'images/svg/markets/deposit-and-withdrawal.svg'
import FriendlySupport from 'images/svg/markets/friendly-support.svg'
import Leverage from 'images/svg/markets/leverage.svg'
import ResponsiveWebsite from 'images/svg/markets/responsive-website.svg'
import { DerivStore } from 'store'
import device from 'themes/device'

const Item = styled(Flex)`
    max-width: 18rem;
    width: 100%;

    img {
        width: 48px;
        height: 48px;
    }

    @media ${device.tabletL} {
        max-width: 27rem;
        margin-top: 24px;

        ${Text} {
            font-size: 2rem;
        }
    }
`

export const ForexContent = () => {
    const { is_eu_country } = React.useContext(DerivStore)

    const forex_content = [
        {
            src: Leverage,
            alt: 'leverage',
            text: is_eu_country ? (
                <Localize translate_text="Tight spreads" />
            ) : (
                <Localize translate_text="High leverage, tight spreads" />
            ),
        },
        {
            src: ResponsiveWebsite,
            alt: 'responsive website',
            text: <Localize translate_text="Responsive, easy-to-use platforms" />,
        },
        {
            src: AdvancedCharting,
            alt: 'advanced charting widgets',
            text: <Localize translate_text="Advanced charting widgets" />,
        },
        {
            src: Deposit,
            alt: 'deposit and withdrawal',
            text: <Localize translate_text="Convenient deposit and withdrawal methods" />,
        },
        {
            src: FriendlySupport,
            alt: 'friendly support',
            text: <Localize translate_text="Smart and friendly support, 7 days a week" />,
        },
    ]

    return (
        <>
            {forex_content.map((content, index) => {
                const { text, src } = content
                return (
                    <Item key={index} ai="center" direction="column">
                        <img src={src} width="48px" height="48px" />
                        {
                            <Text align="center" mt="1.6rem">
                                {text}
                            </Text>
                        }
                    </Item>
                )
            })}
        </>
    )
}
