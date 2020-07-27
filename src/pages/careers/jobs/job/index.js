import React from 'react'
import styled from 'styled-components'
import { JobMailBanner } from '../../_layout-components/_banner'
import { getJobPositionById, team_names } from '../../_controller/_teams'
import { locations } from '../../_model/_locations/_locations'
import { SEO, Flex } from 'components/containers'
import { Text, Header } from 'components/elements'
import Layout from 'components/layout/layout'
import { WithIntl } from 'components/localization'
import { getLocationHash, isBrowser } from 'common/utility'
import device from 'themes/device'
// SVG
import Location from 'images/svg/small-location.svg'
import Chevron from 'images/svg/chevron-bottom.svg'

const Banner = styled.section`
    background-color: var(--color-black);
    padding: 8rem 0;
`

const StyledContainer = styled.div`
    max-width: 79.2rem;
    width: 80%;
    height: 100%;
    flex-direction: column;
    margin: auto;
    justify-content: center;
    display: flex;

    @media ${device.mobileL} {
        width: 83%;
    }
`

const BackText = styled.div`
    text-decoration: none;
    display: flex;
    align-items: center;
    margin-top: 4rem;
    margin-bottom: 8rem;
    cursor: pointer;

    &:hover {
        text-decoration: underline;
    }
`

const LeftChevron = styled(Chevron)`
    transform: rotate(90deg);
    margin-right: 0.8rem;
`

const DescHeader = styled(Header)`
    margin-top: 4rem;
    margin-bottom: 2.4rem;

    &:first-child {
        margin-top: 0;
    }
`

const DescText = styled(Text)`
    margin-bottom: 2rem;

    &:last-child {
        margin-bottom: 0;
    }
`

const Ul = styled.ul`
    list-style-type: disc;
    font-size: var(--text-size-s);
    padding-left: 2rem;
`

const Li = styled.li`
    margin-bottom: 1.6rem;

    &:last-child {
        margin-bottom: 0;
    }
`

const StyledHeader = styled(Header)`
    word-break: break-word;

    @media ${device.mobileL} {
        max-width: 300px;
    }
`

const Job = () => {
    const position_name = getLocationHash()
    if (!position_name) return null
    const job = getJobPositionById(position_name)

    const handleBack = () => {
        isBrowser() && window.history.go(-1)
    }

    return (
        <Layout type="careers" padding_top="10rem">
            <SEO title={'Job'} />
            <Banner>
                <StyledContainer>
                    <Text color="white">{team_names[job.team]}</Text>
                    <StyledHeader as="h2" color="white" m="1.6rem 0 0.8rem">
                        {job.title}
                    </StyledHeader>
                    <Flex height="auto" jc="flex-start" ai="center">
                        <Location />
                        <Text color="white" m="0 2.4rem 0 0.8rem">
                            {locations[job.location]}
                        </Text>
                        <Text color="white">{job.type.join(', ')}</Text>
                    </Flex>
                </StyledContainer>
            </Banner>
            <StyledContainer>
                <BackText onClick={handleBack}>
                    <LeftChevron />
                    <Text weight="bold">{'Back'}</Text>
                </BackText>

                <DescHeader as="h4">{'Description'}</DescHeader>
                {job.description &&
                    job.description.map((desc, idx) => <DescText key={idx}>{desc}</DescText>)}

                <DescHeader as="h4">{'Responsibilities'}</DescHeader>
                <Ul>
                    {job.responsibilities &&
                        job.responsibilities.map((responsibility, idx) => (
                            <Li key={idx}>
                                <Text>{responsibility}</Text>
                            </Li>
                        ))}
                </Ul>

                <DescHeader as="h4">
                    {job.qualifications.length > 1
                        ? 'Minimum qualifications'
                        : 'Minimum qualification'}
                </DescHeader>
                <Ul>
                    {job.qualifications &&
                        job.qualifications.map((qualification, idx) => (
                            <Li key={idx}>
                                <Text>{qualification}</Text>
                            </Li>
                        ))}
                </Ul>
                {job.preferences && (
                    <>
                        <DescHeader as="h4">
                            {job.preferences.length > 1
                                ? 'Preferred qualifications'
                                : 'Preferred qualification'}
                        </DescHeader>
                        <Ul>
                            {job.preferences &&
                                job.preferences.map((preference, idx) => (
                                    <Li key={idx}>
                                        <Text>{preference}</Text>
                                    </Li>
                                ))}
                        </Ul>
                    </>
                )}
                <JobMailBanner />
            </StyledContainer>
        </Layout>
    )
}

export default WithIntl()(Job)
