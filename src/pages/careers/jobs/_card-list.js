import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { NormalCard } from '../_layout-components/_team-card'
import { team_names } from '../_controller/_teams'
import { locations } from '../_model/_locations/_locations'
import { Flex } from 'components/containers'
import { Text, Header, Divider } from 'components/elements'
import { LinkButton } from 'components/form'
import { localize } from 'components/localization'
import { toHashFormat } from 'common/utility'
// SVG
import Location from 'images/svg/small-location.svg'

const StyledLocation = styled(Location)`
    margin-right: 0.8rem;

    & path {
        fill: var(--color-blac);
    }
`

const JobCard = styled(NormalCard)`
    padding: 3.2rem;
    margin-bottom: 2.4rem;

    &:last-child {
        margin-bottom: 0;
    }
`

const Ul = styled.ul`
    list-style-type: disc;
    font-size: var(--text-size-s);
    padding-left: 2rem;
    color: var(--color-black);
    margin-top: 1.6rem;
    margin-bottom: 2.8rem;
`

const Li = styled.li`
    margin-bottom: 1.6rem;

    &:last-child {
        margin-bottom: 0;
    }
`

const StyledDivider = styled(Divider)`
    margin-top: 1.6rem;
    margin-bottom: 1.6rem;
`

const CardList = ({ position }) => {
    return (
        <JobCard to={`careers/jobs/job#${toHashFormat(position.id)}`}>
            <Header font_size="var(--text-size-sm)">{position.title}</Header>
            <Flex jc="flex-start" ai="center" mt="1.6rem">
                <Text>{team_names[position.team]}</Text>
                <Flex width="auto" height="auto" ai="center" m="0 2.4rem">
                    <StyledLocation />
                    <Text>{locations[position.location]}</Text>
                </Flex>
                <Text>{position.type}</Text>
            </Flex>
            <StyledDivider height="2px" />
            <Text weight="bold">{localize('Qualifications:')}</Text>
            <Ul>
                {position.qualifications &&
                    position.qualifications.map((qualification, idx) => (
                        <Li key={idx}>
                            <Text>{qualification}</Text>
                        </Li>
                    ))}
            </Ul>
            <Flex>
                <LinkButton flat to={`careers/jobs/job#${toHashFormat(position.id)}`}>
                    {localize('View more')}
                </LinkButton>
            </Flex>
        </JobCard>
    )
}

CardList.propTypes = {
    position: PropTypes.object,
}

export default CardList
