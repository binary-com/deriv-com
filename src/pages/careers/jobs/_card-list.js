import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { NormalCard } from '../_layout-components/_team-card'
// import { team_names } from '../_controller/_teams'
// import { locations } from '../_model/_locations/_locations'
import device from 'themes/device'
import { Flex, Show } from 'components/containers'
import { Text, Header, Divider } from 'components/elements'
import { LinkButton } from 'components/form'
// import { toHashFormat } from 'common/utility'
// SVG
import Location from 'images/svg/small-location.svg'

const StyledLocation = styled(Location)`
    margin-right: 0.8rem;

    & path {
        fill: var(--color-black);
    }
`

const JobCard = styled(NormalCard)`
    padding: 3.2rem;
    margin-bottom: 2.4rem;

    &:last-child {
        margin-bottom: 0;
    }
    > ${Flex} {
        margin-top: 1.6rem;

        @media ${device.tabletL} {
            margin-bottom: 1.6rem;
        }
    }
`

// const Ul = styled.ul`
//     list-style-type: disc;
//     font-size: var(--text-size-s);
//     padding-left: 2rem;
//     color: var(--color-black);
//     margin-top: 1.6rem;
//     margin-bottom: 2.8rem;
// `

// const Li = styled.li`
//     margin-bottom: 1.6rem;

//     &:last-child {
//         margin-bottom: 0;
//     }
// `

const StyledDivider = styled(Divider)`
    margin-top: 1.6rem;
    margin-bottom: 1.6rem;
`
const StyledFlex = styled(Flex)`
    margin: 0 2.4rem;

    @media ${device.tabletL} {
        margin: 0;
    }
`

const CardList = ({ position }) => {
    return (
        <JobCard to={`careers/jobs/job#${position['JOBOPENINGID']}`}>
            <Header size="var(--text-size-sm)">{position['Posting Title']}</Header>
            <Flex jc="flex-start" ai="center" tablet_ai="flex-start" tablet_direction="column">
                <Text>{position['Department Name']}</Text>
                <StyledFlex width="auto" height="auto" ai="center">
                    <StyledLocation />
                    <Text>{position['Territory']}</Text>
                </StyledFlex>
                <Show.Desktop>
                    <Text>{position['Job Type']}</Text>
                </Show.Desktop>
            </Flex>
            <Show.Desktop>
                <StyledDivider height="2px" />
                <Text weight="bold">Job description:</Text>
                <div dangerouslySetInnerHTML={{ __html: position['Job Description'] }} />
                {/* <Ul>
                    {position.qualifications &&
                        position.qualifications.map((qualification, idx) => (
                            <Li key={idx}>
                                <Text>{qualification}</Text>
                            </Li>
                        ))}
                </Ul> */}
            </Show.Desktop>
            <Flex>
                <LinkButton flat="true" to={`/careers/jobs/job#${position['JOBOPENINGID']}`}>
                    View more
                </LinkButton>
            </Flex>
        </JobCard>
    )
}

CardList.propTypes = {
    position: PropTypes.object,
}

export default CardList
