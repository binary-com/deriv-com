import React from 'react'
import styled from 'styled-components'
import IconEasyAccess from 'images/svg/deriv-go/easy-access.svg'
import { SectionContainer, Container } from 'components/containers'
import { Localize } from 'components/localization'
import { Header } from 'components/elements/typography'
import device from 'themes/device'
import Icon24_7 from 'images/svg/deriv-go/24-7.svg'
import IconUserFriendly from 'images/svg/deriv-go/user-friendly.svg'
import BoxStyledGrid from 'components/custom/_box-styled-grid'

const StyledHeader = styled(Header)`
    color: var(--color-black-9);
    margin: 0 0 80px;

    @media ${device.mobileL} {
        font-size: 32px;
        padding: 0 35px;
        margin: 0 0 40px;
    }
    @media ${device.mobileM} {
        padding: 0 20px;
        margin: 0 0 40px;
    }
`

const trade_data: React.ComponentProps<typeof BoxStyledGrid>['items'] = [
    {
        icon: Icon24_7,
        title: '_t_24/7 trading_t_',
        subtitle:
            '_t_Trade synthetics and cryptocurrencies round the clock and forex during regular market hours._t_',
        image_alt: '_t_Trade 24/7 with DerivGO_t_',
    },
    {
        icon: IconUserFriendly,
        title: '_t_User-friendly features_t_',
        subtitle:
            '_t_Enjoy a smooth trading experience with easy-to-use charts and a pleasant dark theme._t_',
        image_alt: '_t_Easy to use trading features_t_',
    },
    {
        icon: IconEasyAccess,
        title: '_t_Easy access_t_',
        subtitle: '_t_Get instant access to your trades wherever you are whenever you want._t_',
        image_alt: '_t_Instant and easy access for trading_t_',
    },
]

const WhyTradeDerivGo = () => {
    return (
        <div>
            <SectionContainer>
                <Container fd="column">
                    <StyledHeader as="h2" type="heading-2" align="center">
                        <Localize translate_text="_t_Why trade with Deriv GO_t_" />
                    </StyledHeader>
                    <BoxStyledGrid items={trade_data} />
                </Container>
            </SectionContainer>
        </div>
    )
}

export default WhyTradeDerivGo
