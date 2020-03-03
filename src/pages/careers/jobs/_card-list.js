import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { StyledCard } from '../_layout-components/_team-card'
import { Flex } from 'components/containers'
import { Text, Header, Divider } from 'components/elements'
import { localize } from 'components/localization'
import { toHashFormat } from 'common/utility'
// SVG
import Location from 'images/svg/small-location.svg'

const StyledLocation = styled(Location)`
    & path {
        fill: var(--color-blac);
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

const CardList = ({ title, team, location, type, qualifications }) => {
    return (
        <StyledCard to={`careers/jobs/job#${toHashFormat(title)}`}>
            <Header font_size="var(--text-size-sm)">{title}</Header>
            <Flex>
                <Text>{team}</Text>
                <Flex width="auto" height="auto">
                    <StyledLocation />
                    <Text>{location}</Text>
                </Flex>
                <Text>{type}</Text>
            </Flex>
            <Divider height="4px" />
            <Text>{localize('Qualifications:')}</Text>
            <Ul>
                {qualifications &&
                    qualifications.map((qualification, idx) => (
                        <Li key={idx}>
                            <Text>{qualification}</Text>
                        </Li>
                    ))}
            </Ul>
        </StyledCard>
    )
}

CardList.propTypes = {
    location: PropTypes.string,
    qualifications: PropTypes.object,
    team: PropTypes.string,
    title: PropTypes.string,
    type: PropTypes.string,
}

export default CardList
