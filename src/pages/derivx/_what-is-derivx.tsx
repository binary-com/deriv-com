import React from 'react'
import styled from 'styled-components'
import { Localize } from 'components/localization'
import { SectionContainer, Container, Flex } from 'components/containers'
import { Header, Text } from 'components/elements/typography'
import CommonHeaderSection from 'components/elements/common-header-section'
import device from 'themes/device'

const StyledHeader = styled(Header)`
    @media ${device.tablet} {
        font-size: 24px;
    }
`

const StyledSectionContainer = styled(SectionContainer)`
    border-bottom: solid 1px var(--color-grey-2);

    @media ${device.tablet} {
        border-bottom: unset;
    }
`

const WhatIsDeriv = () => {
    return (
        <StyledSectionContainer>
            <Container>
                <Flex width="792px" fd="column" ai="center" jc="center">
                    <CommonHeaderSection
                        title="_t_What is Deriv X_t_"
                        subtitle="_t_Deriv X is a customisable multi-asset trading platform. Offering CFDs on forex, commodities, stocks & indices, cryptocurrencies, and derived, Deriv X gives you a versatile trading experience that lets you customise your trading environment._t_"
                        title_font_size="4.8rem"
                        subtitle_font_size="1.6rem"
                        margin_title="0 0 2.5rem 0"
                        align_title="center"
                        align_subtitle="center"
                        line_height="24px"
                    />
                </Flex>
            </Container>
        </StyledSectionContainer>
    )
}

export default WhatIsDeriv
