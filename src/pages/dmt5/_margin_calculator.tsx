import React from 'react'
import styled from 'styled-components'
import { Box, Flex, SectionContainer } from 'components/containers'
import { Header, LinkText, Text } from 'components/elements'
import { Localize } from 'components/localization'
import device from 'themes/device'
import { useCountryRule } from 'components/hooks/use-country-rule'
import CalculatorsCarousel from 'features/dmt5/caclculators-carousel'

const MainHeader = styled(Header)`
    margin: 0 0 12px;
    @media ${device.tabletL} {
        font-size: 28px;
        margin-bottom: 24px;
        padding: 0 16px;
        text-align: center;
    }
`

const StyledBox = styled(Box)`
    max-width: 508px;
    margin: 11.9rem 4rem 0 16rem;
    @media ${device.tabletL} {
        max-width: 100%;
        margin: 40px 16px 24px;
    }
`

const StyledText = styled(Text)`
    margin-bottom: 24px;
`

const StyledFlexContainer = styled(Flex)`
    width: 100%;
    flex-wrap: nowrap;
    border: 1px solid var(--color-grey-34);
    @media ${device.tabletL} {
        flex-wrap: wrap;
        border: none;
    }
`

const StyledFlex = styled(Flex)<{ has_color?: boolean }>`
    width: 50%;
    min-height: 694px;
    margin-right: 2.4rem;
    background-color: ${(props) => (props.has_color ? 'var(--color-grey-25)' : 'inherit')};
    @media ${device.tabletL} {
        width: 100%;
        min-height: 340px;
        margin-right: 0;
    }
`

const MarginCalculator = () => {
    const { is_uk_eu } = useCountryRule()
    return (
        <SectionContainer>
            <StyledFlexContainer>
                <StyledFlex
                    ai="center"
                    jc="flex-start"
                    tablet_jc="center"
                    fd="column"
                    wrap="wrap"
                    has_color={true}
                >
                    <StyledBox max_width="100%">
                        <MainHeader as="h2" type="page-title" lh="1.25" align="left">
                            <Localize translate_text="Take control of your trades on Deriv MT5" />
                        </MainHeader>
                        <StyledText>
                            {is_uk_eu && (
                                <>
                                    <Localize
                                        translate_text="Explore <0>CFDs</0> on Deriv MT5 (DMT5) and enjoy low spreads to increase your returns when the market moves in your favour."
                                        components={[
                                            <LinkText
                                                color="red"
                                                key={0}
                                                target="_blank"
                                                href="/trade-types/cfds/"
                                                rel="noopener noreferrer"
                                            />,
                                        ]}
                                    />
                                </>
                            )}
                            {!is_uk_eu && (
                                <>
                                    <Localize
                                        translate_text="Explore <0>CFDs</0> on Deriv MT5, and enjoy high leverage and low spreads to increase your returns when the market moves in your favour."
                                        components={[
                                            <LinkText
                                                color="red"
                                                key={0}
                                                target="_blank"
                                                href="/trade-types/cfds/"
                                                rel="noopener noreferrer"
                                            />,
                                        ]}
                                    />
                                </>
                            )}
                        </StyledText>
                        <StyledText>
                            <Localize translate_text="With the calculators and numerous analytical tools available on the Deriv MT5 platform, you’ll be able to manage your capital and trading positions better." />
                        </StyledText>
                    </StyledBox>
                </StyledFlex>
                <StyledFlex
                    fd="row"
                    jc="center"
                    tablet_jc="center"
                    wrap="wrap"
                    ml="2.4rem"
                    tabletL={{ ml: '0px', pt: '24px', pl: '16px', pr: '16px' }}
                >
                    <CalculatorsCarousel />
                </StyledFlex>
            </StyledFlexContainer>
        </SectionContainer>
    )
}

export default MarginCalculator
