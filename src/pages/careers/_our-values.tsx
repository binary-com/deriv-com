import React from 'react'
import styled from 'styled-components'
import { Container, CssGrid, SectionContainer, Flex, Desktop, Mobile } from 'components/containers'
import { Header, Text } from 'components/elements'
import device from 'themes/device'
// SVG
import Integrity from 'images/svg/careers/career-integrity.svg'
import Customer from 'images/svg/careers/career-customer.svg'
import Competence from 'images/svg/careers/career-competence.svg'
import Teamwork from 'images/svg/careers/career-teamwork.svg'

const StyledHeader = styled(Header)`
    font-style: normal;
    font-weight: bold;
    font-size: 48px;
    line-height: 60px;

    @media ${device.tablet} {
        font-size: 28px;
        line-height: 34px;
        text-align: center;

        & br {
            display: none;
        }
    }

    & span {
        color: var(--color-red);
    }
`

const GridItem = styled(Flex)`
    justify-content: flex-start;
    align-items: flex-start;
    background: #ffffff;
    border-radius: 8px;
    padding: 32px;
    margin-bottom: 24px;

    img {
        width: 6.4rem;
        height: 6.4rem;
    }
`

const MiddleText = styled(Header)`
    margin-top: 1.6rem;
    margin-bottom: 0.8rem;
`
const StyledSectionContainer = styled(SectionContainer)`
    padding: 5rem 0 7rem 0;
    background-color: rgba(243, 246, 250, 0.64);

    @media ${device.tablet} {
        padding-bottom: 4rem;
    }
`

const FirstColumn = styled.div`
    @media ${device.tablet} {
        width: 38.4rem;
    }
`
const ThirdColumn = styled.div`
    padding-top: 13.6rem;

    @media ${device.tablet} {
        padding-top: 0;
    }
`

const OurValues = () => (
    <StyledSectionContainer>
        <Container direction="column" style={{ display: 'grid' }}>
            <CssGrid
                columns="repeat(3, 33%)"
                rows="repeat(1.3, auto)"
                row_gap="4rem"
                laptop_columns="repeat(3, 32%)"
                column_gap="24px"
                justify="center"
                align="center"
                tablet_columns="100%"
                mobile_columns="100%"
            >
                <FirstColumn>
                    <StyledHeader as="h3" type="section-title">
                        Everything is built around <br /> <span>our values</span>
                    </StyledHeader>
                </FirstColumn>
                <div>
                    <GridItem direction="column">
                        <img src={Integrity} alt="" />
                        <MiddleText as="h4" type="sub-section-title">
                            Integrity
                        </MiddleText>
                        <Text>
                            We believe that we should always do the right thing. This includes
                            serving our customers with honesty and transparency, settling all
                            contracts by the book, and communicating in plain language that can be
                            easily understood.
                        </Text>
                    </GridItem>
                    <GridItem direction="column" style={{ marginBottom: 0 }}>
                        <Desktop>
                            <img src={Competence} alt="" />
                            <MiddleText as="h4" type="sub-section-title">
                                Competence
                            </MiddleText>
                            <Text>
                                We love to work with smart and talented people who are eager to roll
                                up their sleeves and get things done.
                            </Text>
                        </Desktop>
                        <Mobile>
                            <img src={Customer} alt="" />
                            <MiddleText as="h4" type="sub-section-title">
                                Customer focus
                            </MiddleText>
                            <Text>
                                We always put our customers first and dedicate ourselves to building
                                products and services that give them the best trading experience
                                possible.
                            </Text>
                        </Mobile>
                    </GridItem>
                </div>
                <ThirdColumn>
                    <GridItem direction="column">
                        <Desktop>
                            <img src={Customer} alt="" />
                            <MiddleText as="h4" type="sub-section-title">
                                Customer focus
                            </MiddleText>
                            <Text>
                                We always put our customers first and dedicate ourselves to building
                                products and services that give them the best trading experience
                                possible.
                            </Text>
                        </Desktop>
                        <Mobile>
                            <img src={Competence} alt="" />
                            <MiddleText as="h4" type="sub-section-title">
                                Competence
                            </MiddleText>
                            <Text>
                                We love to work with smart and talented people who are eager to roll
                                up their sleeves and get things done.
                            </Text>
                        </Mobile>
                    </GridItem>
                    <GridItem direction="column" style={{ marginBottom: 0 }}>
                        <img src={Teamwork} alt="" />
                        <MiddleText as="h4" type="sub-section-title">
                            Teamwork
                        </MiddleText>
                        <Text>
                            We value positive team players who can work together to overcome
                            challenges and achieve common goals.
                        </Text>
                    </GridItem>
                </ThirdColumn>
            </CssGrid>
        </Container>
    </StyledSectionContainer>
)

export default OurValues
