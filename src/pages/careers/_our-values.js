import React from 'react'
import styled from 'styled-components'
import { Container, CssGrid, SectionContainer, Flex } from 'components/containers'
import { Header, Text } from 'components/elements'
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
    align-items: flex-start;

    img {
        width: 6.4rem;
        height: 6.4rem;
    }
`

const MiddleText = styled(Header)`
    margin-top: 1.6rem;
    margin-bottom: 0.8rem;
`

const OurValues = () => (
    <SectionContainer style={{ backgroundColor: 'rgba(242,243,244,0.3)' }}>
        <Container direction="column" style={{ display: 'grid' }}>
            <StyledHeader as="h3" type="section-title" align="center">
                Our values
            </StyledHeader>
            <CssGrid
                columns="repeat(2, 38.4rem)"
                rows="repeat(2, auto)"
                row_gap="4rem"
                column_gap="12.6rem"
                justify="center"
                align="center"
                tablet_columns="38.4rem"
                mobile_columns="38.4rem"
            >
                <GridItem direction="column">
                    <img src={Integrity} alt="integrity" />
                    <MiddleText as="h4" type="sub-section-title">
                        Integrity
                    </MiddleText>
                    <Text>
                        We believe that we should always do the right thing. This includes serving
                        our customers with honesty and transparency, settling all contracts by the
                        book, and communicating in plain language that can be easily understood.
                    </Text>
                </GridItem>
                <GridItem direction="column">
                    <img src={Customer} alt="customer" />
                    <MiddleText as="h4" type="sub-section-title">
                        Customer focus
                    </MiddleText>
                    <Text>
                        We always put our customers first and dedicate ourselves to building
                        products and services that give them the best trading experience possible.
                    </Text>
                </GridItem>
                <GridItem direction="column">
                    <img src={Competence} alt="competence" />
                    <MiddleText as="h4" type="sub-section-title">
                        Competence
                    </MiddleText>
                    <Text>
                        We love to work with smart and talented people who are eager to roll up
                        their sleeves and get things done.
                    </Text>
                </GridItem>
                <GridItem direction="column">
                    <img src={Teamwork} alt="teamwork" />
                    <MiddleText as="h4" type="sub-section-title">
                        Teamwork
                    </MiddleText>
                    <Text>
                        We value positive team players who can work together to overcome challenges
                        and achieve common goals.
                    </Text>
                </GridItem>
            </CssGrid>
        </Container>
    </SectionContainer>
)

export default OurValues
