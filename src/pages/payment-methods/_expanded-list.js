import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'
import { Button } from 'components/form/'
import Chevron from 'images/svg/chevron-thick.svg'
import { Text } from 'components/elements'
import { Localize } from 'components/localization'

const StyledButton = styled(Button)`
    margin-top: 1.6rem;
`

const StyledChevron = styled(Chevron)`
    height: 16px;
    width: 16px;
    transform: ${props => (props.expanded ? 'inherit' : 'rotate(-180deg)')};
    transition: transform 0.25s ease-out;
`

const ExpandedContent = styled.td`
    text-align: left;
`

const Tr = styled.tr`
    border-bottom: 1px solid var(--color-grey-2);
`

const Td = styled.td`
    vertical-align: middle;
    padding: 0 2rem;
`

const Description = styled.div`
    max-height: 0;
    overflow: hidden;
    transition: all 0.3s;
    background: var(--color-grey-8);
    width: 100%;
    padding: 0 3.2rem;
    ${props =>
        props.is_expanded &&
        css`
            max-height: 40rem;
            margin-bottom: 4rem;
            padding: 2.6rem 3.2rem;
        `}
`

const ExpandList = ({ data }) => {
    const [is_expanded, setIsExpanded] = React.useState(false)

    const toggleExpand = () => {
        setIsExpanded(!is_expanded)
    }
    return (
        <>
            <Tr onClick={toggleExpand}>
                <Td>{data.method}</Td>
                <Td>
                    <Text>{data.currencies}</Text>
                </Td>
                <Td>
                    {Array.isArray(data.min_max_deposit) ? (
                        data.min_max_deposit.map((md, idx) => <Text key={idx}>{md}</Text>)
                    ) : (
                        <Text>{data.min_max_deposit}</Text>
                    )}
                </Td>
                <Td>
                    {Array.isArray(data.min_max_withdrawal) ? (
                        data.min_max_withdrawal.map((md, idx) => <Text key={idx}>{md}</Text>)
                    ) : (
                        <Text>{data.min_max_withdrawal}</Text>
                    )}
                </Td>
                <Td>
                    <Text>{data.deposit_time}</Text>
                </Td>
                <Td>
                    <Text>{data.withdrawal_time}</Text>
                </Td>
                <Td>
                    <StyledChevron expanded={is_expanded} />
                </Td>
            </Tr>
            <ExpandedContent colSpan="7">
                <Description is_expanded={is_expanded}>
                    <Text>{data.description}</Text>
                    {data.url && (
                        <StyledButton onClick={() => window.open(data.url, '_blank')} tertiary>
                            <Localize
                                translate_text="Learn more about {{name}}"
                                values={{ name: data.name }}
                            />
                        </StyledButton>
                    )}
                </Description>
            </ExpandedContent>
        </>
    )
}

ExpandList.propTypes = {
    data: PropTypes.object,
}

export default ExpandList
