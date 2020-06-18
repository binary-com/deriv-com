import React from 'react'
import styled from 'styled-components'
import Show from 'components/containers/show'
import { Container, Flex } from 'components/containers'
import { Header, Text } from 'components/elements'
import { localize } from 'components/localization'
import device from 'themes/device'
import Experience from 'images/svg/experience.svg'

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
const StyledText = styled(Text)`
    max-width: 79.2rem;
`

const Card = styled.div`
    max-width: 48.6rem;
    max-height: 48.8rem;
    width: 100%;
    height: 100%;
    box-shadow: 0 4px 7px 0 rgba(14, 14, 14, 0.1);
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

const OurNumbers = () => (
    <OurNumbersWrapper>
        <OurNumbersContainer>
            <Show.Mobile>
                <Header as="h6" size="4.5rem" color="black-2" align="center">
                    {localize('Our numbers')}
                </Header>
                <StyledHeader as="h6" size="3rem" align="center" weight="400">
                    {localize(
                        'Deriv.com is the next step in the evolution of Binary.com. With Binary.com, we have a proven record of delivering market-leading products that are trusted around the world. ',
                    )}
                </StyledHeader>
            </Show.Mobile>

            <Header mb="1.2rem" as="h2" color="black-2" align="center">
                {localize('Our numbers')}
            </Header>
            <StyledText align="center" lh="2.4rem">
                {localize(
                    'Deriv.com is the next step in the evolution of Binary.com. With Binary.com, we have a proven record of delivering market-leading products that are trusted around the world. ',
                )}
            </StyledText>
            <Flex ai="center" mt="5.4rem">
                <Experience />
                <Text size="var(--text-size-m)" weight="bold" ml="1.6rem" color="orange-2">
                    {localize('20 years of industry experience')}
                </Text>
            </Flex>
            <Flex>
                <Card>
                    <Header align="center" as="h3">
                        {localize('175K+ active trading clients')}
                    </Header>
                </Card>
                <Card>
                    <Header as="h3" align="center">
                        {localize('377M+ transactions')}
                    </Header>
                </Card>
            </Flex>
        </OurNumbersContainer>
    </OurNumbersWrapper>
)

export default OurNumbers
