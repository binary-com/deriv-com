import React from 'react'
import styled from 'styled-components'
import { OpenPositionsProps } from './_dept-layout.types'
import { SectionContainer, Container, Flex } from 'components/containers'
import { Header } from 'components/elements'
import { LocalizedLink } from 'components/localization'
import RightArrow from 'images/svg/career-right-arrow.svg'
import device from 'themes/device'

const getLink = (id) => {
    return `https://deriv.zohorecruit.eu/jobs/Careers/${id}?source=CareerSite`
}

const PositionLink = styled(LocalizedLink)`
    text-decoration: none;
    width: 100%;
    max-width: 996px;
`

const JobWrapper = styled.div`
    border-bottom: 1px solid #f2f3f4;
    display: grid;
    grid-template-columns: 3fr 5fr auto;
    padding: 24px 35px 24px 18px;

    @media ${device.tablet} {
        grid-template-columns: 6fr 5fr auto;
    }
`
const StyledVacancies = styled(Flex)`
    @media ${device.tablet} {
        max-width: 144px;
        word-break: break-word;
    }
`

const StyledHeader = styled(Header)`
    @media (max-width: 340px) {
        font-size: 16px;
    }
`

type DataProps = {
    data: OpenPositionsProps[]
}

const OpenPositions = (data: DataProps) => {
    const hidden = data.data == undefined
    return (
        <SectionContainer padding="0">
            <Container fd="column">
                <Header mb="40px" align="center" type="heading-3" as="h3">
                    Open positions
                </Header>
                {!hidden &&
                    data.data?.map((item, idx) => {
                        return (
                            <PositionLink key={idx} external to={getLink(item.id)} target="_blank">
                                <JobWrapper>
                                    <StyledVacancies ai="center">
                                        <StyledHeader type="subtitle-1" as="h1">
                                            {item.title}
                                        </StyledHeader>
                                    </StyledVacancies>
                                    <Flex ai="center">
                                        <Header
                                            p="15px"
                                            max_width="274px"
                                            align="left"
                                            type="paragraph-1"
                                            as="p"
                                            weight="400"
                                        >
                                            {item.location}
                                        </Header>
                                    </Flex>
                                    <Flex ai="center">
                                        <img src={RightArrow}></img>
                                    </Flex>
                                </JobWrapper>
                            </PositionLink>
                        )
                    })}
            </Container>
        </SectionContainer>
    )
}

export default OpenPositions
