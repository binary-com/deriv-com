import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'
import ReactTooltip from 'react-tooltip'
import { Button } from 'components/form/'
import Chevron from 'images/svg/chevron-thick.svg'
import { Text } from 'components/elements'
import { localize } from 'components/localization'

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
    position: relative;
`

const HoverTd = styled(Td)`
    transition: background 0.25s;
    cursor: pointer;

    &:hover {
        background: var(--color-grey-8);
    }
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

const StyledText = styled(Text)`
    font-size: 0;
    ${props =>
        props.is_expanded &&
        css`
            font-size: var(--text-size-s);
        `}
`

const HoverText = styled(Text)`
    cursor: pointer;

    &:hover {
        font-weight: bold;
    }
    & > .tooltip {
        padding: 0.8rem;
        border-radius: 4px;
        font-weight: normal;
        color: var(--color-black-3);
        background: var(--color-grey-7);
    }
`

const ExpandList = ({ data, is_crypto }) => {
    const [is_expanded, setIsExpanded] = React.useState(false)

    const toggleExpand = () => {
        setIsExpanded(!is_expanded)
    }
    return (
        <>
            <Tr>
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
                    <>
                        {Array.isArray(data.min_max_withdrawal) ? (
                            data.min_max_withdrawal.map((md, idx) => <Text key={idx}>{md}</Text>)
                        ) : (
                            <>
                                {is_crypto ? (
                                    <HoverText>
                                        <span data-tip={data.tooltip} data-for={data.name}>
                                            {data.min_max_withdrawal}
                                        </span>
                                        {data.tooltip && (
                                            <ReactTooltip
                                                className="tooltip"
                                                id={data.name}
                                                effect="solid"
                                                arrowColor="var(--color-grey-7)"
                                            />
                                        )}
                                    </HoverText>
                                ) : (
                                    <Text>{data.min_max_withdrawal}</Text>
                                )}
                            </>
                        )}
                    </>
                </Td>
                <Td>
                    <Text>{data.deposit_time}</Text>
                </Td>
                <Td>
                    <Text>{data.withdrawal_time}</Text>
                </Td>
                <HoverTd onClick={toggleExpand}>
                    <StyledChevron expanded={is_expanded} />
                </HoverTd>
            </Tr>
            <tr>
                <ExpandedContent colSpan="7">
                    <Description is_expanded={is_expanded}>
                        <StyledText is_expanded={is_expanded}>{data.description}</StyledText>
                        {data.url && (
                            <StyledButton onClick={() => window.open(data.url, '_blank')} tertiary>
                                {localize('Learn more')}
                            </StyledButton>
                        )}
                    </Description>
                </ExpandedContent>
            </tr>
        </>
    )
}

ExpandList.propTypes = {
    data: PropTypes.object,
    is_crypto: PropTypes.bool,
}

export default ExpandList
