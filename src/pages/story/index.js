import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { OurStory } from './_our-story'
import { Container, SEO, Show } from 'components/containers'
import { getWindowWidth, isBrowser } from 'common/utility'
import Layout from 'components/layout/layout'
import { localize, WithIntl } from 'components/localization'
import { Header, Text } from 'components/elements'
import device, { size } from 'themes/device'

const Background = styled.div`
    background: var(--color-black);
    width: 100%;
    height: 100%;
`

const StyledContainer = styled(Container)`
    padding: 12rem 19rem;
    white-space: nowrap;

    @media ${device.laptopL} {
        padding: 12rem 4rem;
    }
    @media ${device.tabletL} {
        padding: 5rem 2rem;
        width: 100%;

        > h1 {
            font-size: 4.5rem;
        }
    }
`
const ContentWrapper = styled.div`
    margin-top: ${(props) => props.margin_top || 'none'};
    white-space: normal;
    max-width: 79.8rem;

    @media ${device.mobileL} {
        max-width: 42.8rem;
    }
`

const Story = () => {
    const [is_mobile, setMobile] = useState(false)

    useEffect(() => {
        setMobile(isBrowser() && getWindowWidth() <= size.tablet)
    }, [getWindowWidth()])

    return (
        <Layout>
            <SEO
                title={localize('About Us | An Online Trading Platform | Deriv.com')}
                description={localize(
                    'Deriv.com - A Binary.com brand, is a pioneer and award-winning online trading platform in the trading market.',
                )}
            />
            <Background>
                <StyledContainer direction="column">
                    <Header as="h1" type="display-title" color="white" align="center">
                        {localize('Our story')}
                    </Header>

                    <ContentWrapper margin_top="5rem">
                        <Show.Desktop>
                            <Text mb="1.5rem" size="var(--text-size-s)" secondary color="white">
                                {localize(
                                    'The story of Deriv starts in 1999. Regent Markets Group, the founding company, was established with a mission to make online trading accessible to the masses. The Group has since rebranded and evolved, but its founding mission remains unchanged.',
                                )}
                            </Text>

                            <Text secondary color="white">
                                {localize(
                                    'Our evolution is powered by over 20 years of customer focus and innovation.',
                                )}
                            </Text>
                        </Show.Desktop>

                        <Show.Mobile>
                            <Text mb="1.5rem" size="2rem" secondary color="white">
                                {localize(
                                    'The story of Deriv starts in 1999. Regent Markets Group, the founding company, was established with a mission to make online trading accessible to the masses. The Group has since rebranded and evolved, but its founding mission remains unchanged.',
                                )}
                            </Text>

                            <Text size="2rem" secondary color="white">
                                {localize(
                                    'Our evolution is powered by over 20 years of customer focus and innovation.',
                                )}
                            </Text>
                        </Show.Mobile>
                    </ContentWrapper>
                </StyledContainer>
            </Background>
            <OurStory is_mobile_menu={is_mobile} />

        </Layout>
    )
}

export default WithIntl()(Story)
