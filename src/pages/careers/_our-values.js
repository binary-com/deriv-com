import React from 'react'
import styled from 'styled-components'
import { Container, CssGrid, CssGridColumn, SectionContainer, Flex } from 'components/containers'
import { Header, Text } from 'components/elements'
import { localize } from 'components/localization'
// SVG
import Integrity from 'images/svg/career-integrity.svg'
import Customer from 'images/svg/career-customer.svg'
import Competence from 'images/svg/career-competence.svg'
import Teamwork from 'images/svg/career-teamwork.svg'

const StyledHeader = styled(Header)`
    margin-bottom: 6.4rem;
`

const GridItem = styled(Flex)`
    justify-content: flex-start;
`

const MiddleText = styled(Header)`
    margin-top: 1.6rem;
    margin-bottom: 0.8rem;
`

const OurValues = () => (
    <SectionContainer background="grey-2">
        <Container direction="column">
            <StyledHeader as="h3" align="center">
                {localize('Our values')}
            </StyledHeader>
            <CssGrid
                columns="repeat(2, 38.4rem)"
                rows="repeat(2, auto)"
                row_gap="4rem"
                column_gap="12.6rem"
                justify="center"
                align="center"
            >
                <GridItem direction="column">
                    <Integrity />
                    <MiddleText as="h4">{localize('Integrity')}</MiddleText>
                    <Text>
                        {localize(
                            'We believe that we should always do the right thing. This includes serving our customers with honesty and transparency, settling all contracts by the book, and communicating in plain language that can be easily understood.',
                        )}
                    </Text>
                </GridItem>
                <GridItem direction="column">
                    <Competence />
                    <MiddleText as="h4">{localize('Competence')}</MiddleText>
                    <Text>
                        {localize(
                            'We love to work with smart and talented people who are eager to roll up their sleeves and get things done.',
                        )}
                    </Text>
                </GridItem>
                <GridItem direction="column">
                    <Customer />
                    <MiddleText as="h4">{localize('Customer focus')}</MiddleText>
                    <Text>
                        {localize(
                            'We always put our customers first and dedicate ourselves to building products and services that give them the best trading experience possible.',
                        )}
                    </Text>
                </GridItem>
                <GridItem direction="column">
                    <Teamwork />
                    <MiddleText as="h4">{localize('Teamwork')}</MiddleText>
                    <Text>
                        {localize(
                            'We value positive team players who can work together to overcome challenges and achieve common goals.',
                        )}
                    </Text>
                </GridItem>
            </CssGrid>
        </Container>
    </SectionContainer>
)

export default OurValues
