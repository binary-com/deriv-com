import React from 'react'
import styled from 'styled-components'
import Show from 'components/containers/show'
import { Container, Flex, CssGrid } from 'components/containers'
import { Header, Text } from 'components/elements'
import { localize } from 'components/localization'
import device from 'themes/device'
import Experience from 'images/svg/experience.svg'
import ActiveClients from 'images/svg/active-clients.svg'
import Transactions from 'images/svg/transactions.svg'
import Withdrawal from 'images/svg/withdrawal.svg'
import Turnover from 'images/svg/turnover.svg'

const OurNumbersWrapper = styled.section`
    width: 100%;
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

const Card = styled(Flex)`
    max-width: 48.6rem;
    height: 48.8rem;
    justify-content: center;
    flex-wrap: wrap;
`
// const Span = styled.span`
//     color: ${(props) => props.color};
//     margin-right: ${(props) => props.mr || 'unset'};
//     font-size: var(--text-size-l);
//     font-weight: bold;
//     width: auto;
// `

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

            <Show.Desktop>
                <Header mb="1.2rem" as="h2" color="black-2" align="center">
                    {localize('Our numbers')}
                </Header>
                <StyledText align="center" lh="2.4rem">
                    {localize(
                        'Deriv.com is the next step in the evolution of Binary.com. With Binary.com, we have a proven record of delivering market-leading products that are trusted around the world. ',
                    )}
                </StyledText>
            </Show.Desktop>
            <Flex mb="4rem" ai="center" mt="5.4rem">
                <Experience />
                <Text size="var(--text-size-m)" weight="bold" ml="1.6rem" color="orange-2">
                    {localize('20 years of industry experience')}
                </Text>
            </Flex>

            <CssGrid
                columns="repeat(2, 1fr)"
                column_gap="2.4rem"
                row_gap="2.4rem"
                tablet_columns="repeat(2, 1fr)"
                mobile_columns="1fr"
                mobile_row_gap="10rem"
            >
                <Card>
                    <ActiveClients />
                    {/* <Span mr="8px" color="var(--color-orange-2)">
                        {localize('175K+')}
                    </Span>
                    <Span>{localize('active trading')}</Span>
                    <Flex mt="1.2rem">
                        <Span>{localize('clients')}</Span>
                    </Flex> */}
                </Card>
                <Card>
                    <Transactions />
                    {/* <Span mr="8px" color="var(--color-orange-2)">
                        {localize('377M+')}
                    </Span>
                    <Span>{localize('transactions')}</Span> */}
                </Card>
                <Card>
                    <Withdrawal />
                    {/* <Span mr="8px" color="var(--color-orange-2)">
                        {localize('6M+ USD')}
                    </Span>
                    <Span>{localize('total withdrawal ')}</Span>
                    <Flex mt="1.2rem">
                        <Span>{localize('per month')}</Span>
                    </Flex> */}
                </Card>
                <Card>
                    <Turnover />
                    {/* <Span mr="8px" color="var(--color-orange-2)">
                        {localize('2B+ USD ')}
                    </Span>
                    <Span>{localize('trade turnover')}</Span> */}
                </Card>
            </CssGrid>
        </OurNumbersContainer>
    </OurNumbersWrapper>
)

export default OurNumbers
