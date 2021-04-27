import React from 'react'
import styled from 'styled-components'
import Show from 'components/containers/show'
import { Container, FlexGridContainer } from 'components/containers'
import { Header, Text } from 'components/elements'
import { localize } from 'components/localization'
import device from 'themes/device'

const OurNumbersWrapper = styled.section`
    width: 100%;
    background-color: var(--color-grey-8);
    margin: auto;

    @media ${device.tablet} {
        padding-top: 8rem;
    }
`

const StyledHeader = styled(Header)`
    margin-top: 0.8rem;
    max-width: 98.4rem;
`

const NumberHeader = styled(Text)`
    font-weight: bold;
    line-height: 6rem;
    text-align: center;
    margin-bottom: 0.8rem;
`
const OurNumbersContainer = styled(Container)`
    flex-direction: row;
    justify-content: center;
    padding: 8rem 0;
    flex-wrap: wrap;

    @media ${device.tabletL} {
        padding: 3rem 0;
    }
`

const StyledGridContainer = styled(FlexGridContainer)`
    margin-top: 4rem;
`

const OurNumbers = () => (
    <OurNumbersWrapper>
        <OurNumbersContainer>
            <Show.Mobile>
                <Header as="h6" size="4.5rem" color="black-2" align="center">
                    {localize('Our numbers')}
                </Header>
                <StyledHeader as="h6" size="3rem" align="center" weight="400">
                    {localize(
                        'Deriv is the next step in the evolution of Binary.com. With Binary.com, we have a proven record of delivering market-leading products that are trusted around the world.',
                    )}
                </StyledHeader>
            </Show.Mobile>
            <Show.Desktop>
                <Header size="3.6rem" as="h2" color="black-2" align="center">
                    {localize('Our numbers')}
                </Header>
                <StyledHeader
                    as="h3"
                    type="sub-section-title"
                    align="center"
                    weight="500"
                    lh="3.6rem"
                >
                    {localize(
                        'Deriv is the next step in the evolution of Binary.com. With Binary.com, we have a proven record of delivering market-leading products that are trusted around the world.',
                    )}
                </StyledHeader>
            </Show.Desktop>
            <StyledGridContainer
                content_width="21.5rem"
                mobile_content_width="26rem"
                gap="1.6rem 0.8rem"
                mobile_gap="4rem 1rem"
                grid="5"
                justify="center"
            >
                <article>
                    <Show.Desktop>
                        <NumberHeader size="3.6rem">{localize('20')}</NumberHeader>
                        <Text align="center">{localize('Years of industry experience')}</Text>
                    </Show.Desktop>

                    <Show.Mobile>
                        <NumberHeader size="4.5rem">{localize('20')}</NumberHeader>
                        <Text size="2rem" align="center">
                            {localize('Years of industry experience')}
                        </Text>
                    </Show.Mobile>
                </article>
                <article>
                    <Show.Desktop>
                        <NumberHeader size="3.6rem">{localize('2.9M+')}</NumberHeader>
                        <Text align="center">{localize('Trading accounts opened')}</Text>
                    </Show.Desktop>

                    <Show.Mobile>
                        <NumberHeader size="4.5rem">{localize('USD 8B+')}</NumberHeader>
                        <Text size="2rem" align="center">
                            {localize('Total trade turnover')}
                        </Text>
                    </Show.Mobile>
                </article>
                <article>
                    <Show.Desktop>
                        <NumberHeader size="3.6rem">{localize('USD 8B+')}</NumberHeader>
                        <Text align="center">{localize('Total trade turnover')}</Text>
                    </Show.Desktop>
                    <Show.Mobile>
                        <NumberHeader size="4.5rem">{localize('2.9M+')}</NumberHeader>
                        <Text size="2rem" align="center">
                            {localize('Trading accounts opened')}
                        </Text>
                    </Show.Mobile>
                </article>
                <article>
                    <Show.Desktop>
                        <NumberHeader size="3.6rem">{localize('65M+')}</NumberHeader>
                        <Text align="center">{localize('Trades last month')}</Text>
                    </Show.Desktop>

                    <Show.Mobile>
                        <NumberHeader size="4.5rem">{localize('65M+')}</NumberHeader>
                        <Text size="2rem" align="center">
                            {localize('Trades last month')}
                        </Text>
                    </Show.Mobile>
                </article>
                <article>
                    <Show.Desktop>
                        <NumberHeader size="3.6rem">{localize('USD 19M+')}</NumberHeader>
                        <Text align="center">{localize('Withdrawal last month')}</Text>
                    </Show.Desktop>

                    <Show.Mobile>
                        <NumberHeader size="4.5rem">{localize('USD 19M+')}</NumberHeader>
                        <Text size="2rem" align="center">
                            {localize('Withdrawal last month')}
                        </Text>
                    </Show.Mobile>
                </article>
            </StyledGridContainer>
        </OurNumbersContainer>
    </OurNumbersWrapper>
)

export default OurNumbers
