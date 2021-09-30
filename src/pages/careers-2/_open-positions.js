import React from 'react'
import styled from 'styled-components'
import { SectionContainer, Container, Flex } from 'components/containers'
import { Header } from 'components/elements'
import { LocalizedLink } from 'components/localization'
import RightArrow from 'images/svg/career-right-arrow.svg'

const PositionLink = styled(LocalizedLink)`
    text-decoration: none;
`

const JobWrapper = styled.div`
    width: 996px;
    border-bottom: 1px solid #f2f3f4;
    display: grid;
    grid-template-columns: 2fr 5fr auto;
    padding: 24px 35px 24px 18px;
`

const OpenPos = () => {
    return (
        <SectionContainer>
            <Container fd="column">
                <Header mb="40px" align="center" type="heading-3" as="h3">
                    Open positions
                </Header>
                <PositionLink to="/">
                    <JobWrapper>
                        <Flex ai="center">
                            <Header type="subtitle-1" as="h">
                                Job Title
                            </Header>
                        </Flex>
                        <Flex ai="center">
                            <Header
                                max_width="274px"
                                align="center"
                                type="paragraph-1"
                                as="p"
                                weight="400"
                            >
                                City, Country
                            </Header>
                        </Flex>
                        <Flex ai="center">
                            <img src={RightArrow}></img>
                        </Flex>
                    </JobWrapper>
                </PositionLink>
            </Container>
        </SectionContainer>
    )
}

export default OpenPos
