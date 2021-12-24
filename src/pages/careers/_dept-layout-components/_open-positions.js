import React from 'react'
import styled from 'styled-components'
import { zoho_career_url } from '../../../common/constants'
import { SectionContainer, Container, Flex } from 'components/containers'
import { Header } from 'components/elements'
import { LocalizedLink } from 'components/localization'
import { LinkButton } from 'components/form'
import RightArrow from 'images/svg/career-right-arrow.svg'
import device from 'themes/device'

const getLink = (id) => {
    return `https://deriv.zohorecruit.com/jobs/Careers/${id}`
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

const OpenPositions = (showJob, data) => {
    const hidden = data.data == undefined
    return (
        <SectionContainer padding="0">
            <Container fd="column">
                <Header mb="40px" align="center" type="heading-3" as="h3">
                    Open positions
                </Header>
                {showJob && (
                    <div className="embed_jobs_head embed_jobs_with_style_3 embed_jobs_with_style">
                        <div className="embed_jobs_head2">
                            <div className="embed_jobs_head3">
                                <div id="rec_job_listing_div"> </div>
                            </div>
                        </div>
                    </div>
                )}
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

                {!hidden && (
                    <LinkButton external mt="35px" to={zoho_career_url} secondary target="_blank">
                        See all
                    </LinkButton>
                )}

                {hidden && (
                    <Header type="subtitle-1" align="center" color="grey-5">
                        Sorry, there are currently no open positions.
                    </Header>
                )}
            </Container>
        </SectionContainer>
    )
}

export default OpenPositions
