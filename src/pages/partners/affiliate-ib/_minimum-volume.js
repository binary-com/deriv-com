import React from 'react'
import styled from 'styled-components'
import { graphql, useStaticQuery } from 'gatsby'
import { Header, Text } from 'components/elements/typography'
import { SectionContainer, Flex } from 'components/containers'
import { QueryImage } from 'components/elements'
import { localize, Localize } from 'components/localization'
import device from 'themes/device'

const query = graphql`
    query {
        minimum_volume_top_one: file(
            relativePath: { eq: "affiliate-and-ib/minimum-volume-top-one.png" }
        ) {
            ...fadeIn
        }
        minimum_volume_top_two: file(
            relativePath: { eq: "affiliate-and-ib/minimum-volume-top-two.png" }
        ) {
            ...fadeIn
        }
        minimum_volume_bottom_one: file(
            relativePath: { eq: "affiliate-and-ib/minimum-volume-bottom-one.png" }
        ) {
            ...fadeIn
        }
        minimum_volume_bottom_two: file(
            relativePath: { eq: "affiliate-and-ib/minimum-volume-bottom-two.png" }
        ) {
            ...fadeIn
        }
    }
`

const StyledSection = styled(SectionContainer)`
    padding: 0;
    margin-top: 80px;
    @media ${device.tabletL} {
        padding: 40px 0;
    }
`

const TitleWrapper = styled(Flex)`
    max-width: 120rem;
    margin: 0 auto 2.4rem;
`
const ExampleWrapper = styled(Flex)`
    max-width: 120rem;
    margin: 0 auto;
    flex-direction: column;
`
const CalculationWrapper = styled(Flex)`
    @media ${device.tabletL} {
        flex-direction: column;
    }
`
const LeftWrapper = styled(Flex)`
    width: 588px;
    padding: 6.6rem 4rem 7.8rem;
    background-color: var(--color-grey-39);
    margin-right: 2.4rem;

    @media ${device.tabletL} {
        margin-right: 0;
    }
`
const RightWrapper = styled(Flex)`
    width: 588px;
    flex-direction: column;
`
const TopImage = styled(QueryImage)`
    margin-bottom: 2rem;
`

const MinimumVolume = () => {
    const data = useStaticQuery(query)

    return (
        <StyledSection>
            <TitleWrapper direction="column">
                <Header type="page-title" align="center" mb="0.8rem">
                    {localize('Minimum volume requirement')}
                </Header>
                <Text size="1.6rem" align="center">
                    <Localize
                        translate_text="To receive the minimum commission (0.01 in any currency) allowed by the system, the minimum volume <0/>requirement is calculated based on the following formulas:"
                        components={[<br key={0} />]}
                    />
                </Text>
            </TitleWrapper>
            <ExampleWrapper>
                <Header type="main-paragraph" mb="2.4rem">
                    {localize('Example:')}
                </Header>
                <CalculationWrapper ai="center" mb="2.4rem">
                    <LeftWrapper>
                        <Text size="1.6rem">
                            {localize(
                                'A deal for 1 lot of BTC/USD (with a BTC to USD exchange rate of USD 50,000) per USD 100,000 turnover will pay out a commission of USD 20. The minimum volume required to receive the minimum commission of USD 0.01 is determined using the following formula:',
                            )}
                        </Text>
                    </LeftWrapper>
                    <RightWrapper>
                        <TopImage
                            data={data['minimum_volume_top_one']}
                            alt="Minimum volume formula 1"
                            width="100%"
                        />
                        <QueryImage
                            data={data['minimum_volume_top_two']}
                            alt="Minimum volume formula 2"
                            width="100%"
                        />
                    </RightWrapper>
                </CalculationWrapper>
                <CalculationWrapper ai="center">
                    <LeftWrapper>
                        <Text size="1.6rem">
                            {localize(
                                'A deal for 1 lot of the Volatility Index 75 for a price of USD 500,000 per USD 100,000 turnover will pay out a commission of USD 5. The minimum volume required to receive the minimum commission of USD 0.01 is determined using the following formula:',
                            )}
                        </Text>
                    </LeftWrapper>
                    <RightWrapper>
                        <TopImage
                            data={data['minimum_volume_bottom_one']}
                            alt="Minimum volume formula 3"
                            width="100%"
                        />
                        <QueryImage
                            data={data['minimum_volume_bottom_two']}
                            alt="Minimum volume formula 4"
                            width="100%"
                        />
                    </RightWrapper>
                </CalculationWrapper>
            </ExampleWrapper>
        </StyledSection>
    )
}

export default MinimumVolume
