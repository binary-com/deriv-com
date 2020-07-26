import React from 'react'
import styled from 'styled-components'
import Show from 'components/containers/show'
import { Container, Flex, CssGrid, Box } from 'components/containers'
import { Header, Text } from 'components/elements'
import { localize } from 'components/localization'
import device from 'themes/device'
import Teamwork from 'images/svg/teamwork.svg'
import Competence from 'images/svg/competence.svg'
import CustomerFocus from 'images/svg/customer-focus.svg'
import Integrity from 'images/svg/integrity.svg'

const OurValuesWrapper = styled.section`
    width: 100%;
    margin: auto;
    background-color: rgba(242, 243, 244, 0.32);

    @media ${device.tablet} {
        padding-top: 8rem;
    }
`
const OurValuesContainer = styled(Container)`
    flex-direction: column;
    justify-content: center;
    padding: 8rem 0;
    flex-wrap: wrap;

    @media ${device.tabletL} {
        padding: 3rem 0;
    }
`
const Card = styled(Flex)`
    max-width: 38.4rem;
    justify-content: flex-start;
    flex-direction: column;
`
const OurValues = () => (
    <OurValuesWrapper>
        <OurValuesContainer>
            <Show.Mobile>
                <Header as="h6" size="4.5rem" color="black-2" align="center">
                    {localize('Our values')}
                </Header>
            </Show.Mobile>
            <Show.Desktop>
                <Header mb="4rem" as="h2" color="black-2" align="center">
                    {localize('Our values')}
                </Header>
            </Show.Desktop>
            <Box>
                <CssGrid
                    columns="repeat(2, 1fr)"
                    column_gap="12.6rem"
                    row_gap="4rem"
                    tablet_columns="repeat(2, 1fr)"
                    mobile_columns="1fr"
                    mobile_row_gap="10rem"
                >
                    <Card>
                        <Integrity />
                        <Header mt="2.4rem" mb="0.8rem" as="h4">
                            {localize('Integrity')}
                        </Header>
                        <Text>
                            {localize(
                                'We believe that we should always do the right thing. This includes serving our customers with honesty and transparency, settling all contracts by the book, and communicating in plain language that can be easily understood.',
                            )}
                        </Text>
                    </Card>
                    <Card>
                        <CustomerFocus />
                        <Header mt="2.4rem" mb="0.8rem" as="h4">
                            {localize('Customer focus')}
                        </Header>
                        <Text>
                            {localize(
                                'We always put our customers first and dedicate ourselves to building products and services that give them the best trading experience possible.',
                            )}
                        </Text>
                    </Card>
                    <Card>
                        <Competence />
                        <Header mt="2.4rem" mb="0.8rem" as="h4">
                            {localize('Competence')}
                        </Header>
                        <Text>
                            {localize(
                                'We love to work with smart and talented people who are eager to roll up their sleeves and get things done.',
                            )}
                        </Text>
                    </Card>
                    <Card>
                        <Teamwork />
                        <Header mt="2.4rem" mb="0.8rem" as="h4">
                            {localize('Teamwork')}
                        </Header>
                        <Text>
                            {localize(
                                'We value positive team players who can work together to overcome challenges and achieve common goals.',
                            )}
                        </Text>
                    </Card>
                </CssGrid>
            </Box>
        </OurValuesContainer>
    </OurValuesWrapper>
)

export default OurValues
