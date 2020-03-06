import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { all_queries } from '../_controller/_teams'
import { Flex } from 'components/containers'
import { Text } from 'components/elements'
import CrossIcon from 'images/svg/cross.svg'

const CrossIconStyled = styled(CrossIcon)`
    height: 16px;
    width: 16px;

    g {
        g {
            g {
                fill: var(--color-black);
            }
        }
    }
`

const BadgeContainer = styled.div`
    border-radius: 12px;
    background-color: var(--color-grey-11);
    padding: 3px 8px;
    margin: 0.4rem;
    display: flex;
    align-items: center;

    svg {
        margin-left: 8px;
        cursor: pointer;
    }
`

const BadgeWrapper = styled(Flex)`
    margin-bottom: 5.4rem;
    flex-wrap: wrap;

    > *:not(:last-child) {
        margin-right: 0.8rem;
    }
`

const Badge = ({ text, onClick }) => {
    return (
        <BadgeContainer>
            <Text size="var(--text-size-xxs)">{text}</Text>
            <CrossIconStyled onClick={onClick} />
        </BadgeContainer>
    )
}
Badge.propTypes = {
    onClick: PropTypes.func,
    text: PropTypes.string,
}

const Badges = ({ filters, setFilters }) => {
    const removeFilter = name => {
        setFilters(filters.filter(filter => filter !== name))
    }
    return (
        <>
            {filters.length ? (
                <BadgeWrapper jc="unset">
                    {filters.map((filter, idx) => (
                        <Badge
                            onClick={() => removeFilter(filter)}
                            key={idx}
                            text={all_queries[filter]}
                        />
                    ))}
                </BadgeWrapper>
            ) : null}
        </>
    )
}

Badges.propTypes = {
    filters: PropTypes.array,
    setFilters: PropTypes.func,
}

export default Badges
