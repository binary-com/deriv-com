import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'
import { Button } from 'components/form/'
import { Text } from 'components/elements'
import { localize } from 'components/localization'
import { getCryptoDecimals } from 'common/utility'
// SVG
import Chevron from 'images/svg/chevron-thick.svg'
import PDF from 'images/svg/pdf-icon-black.svg'

const StyledButton = styled(Button)`
    margin-top: 1.6rem;
`

const StyledChevron = styled.img`
    height: 16px;
    width: 16px;
    transform: ${(props) => (props.expanded ? 'inherit' : 'rotate(-180deg)')};
    transition: transform 0.25s ease-out;
`
const StyledPDF = styled.img`
    height: 32px;
    width: 32px;
`

const ExpandedContent = styled.td`
    text-align: left;
`

const Tr = styled.tr`
    border-bottom: ${(props) => (props.is_expanded ? 'none' : '1px solid var(--color-grey-8)')};
`

const Td = styled.td`
    vertical-align: middle;
    padding: 0.8rem 2rem;
    position: relative;

    :first-child {
        position: sticky;
        /* stylelint-disable-next-line value-no-vendor-prefix */
        position: -webkit-sticky;
        left: -5px;
        background-color: white;
        z-index: 2;
    }
    & .tooltip {
        padding: 0.8rem;
        border-radius: 4px;
        font-weight: normal;
        color: var(--color-black-3);
        background: var(--color-grey-7);
    }
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
    transition: max-height 0.3s, padding 0.3s;
    background: var(--color-white);
    width: 100%;
    padding: 0 3.2rem;
    ${(props) =>
        props.is_expanded &&
        css`
            max-height: 40rem;
            padding: 2.4rem 3.2rem;
            border-bottom: 1px solid var(--color-grey-8);
        `}
`

const StyledText = styled(Text)`
    font-size: ${(props) => (props.is_expanded ? 'var(--text-size-s)' : '0')};
`

const Deposit = styled(Td)`
    & > p {
        max-width: ${(props) => (props.is_fiat_onramp ? '21rem' : '12rem')};
    }
`

const CenterIcon = styled.a`
    display: flex;
    justify-content: center;
`

const Withdrawal = styled(Td)`
    & > p {
        max-width: 14rem;
    }
`

const ExpandList = ({ data, config, is_crypto, is_fiat_onramp, locale }) => {
    const [is_expanded, setIsExpanded] = React.useState(false)
    const toggleExpand = () => {
        setIsExpanded(!is_expanded)
    }
    const getCryptoConfig = (name) => {
        return config == undefined ? null : getCryptoDecimals(config[name].minimum_withdrawal)
    }
    return (
        <>
            <Tr is_expanded={is_expanded}>
                <Td>{data.method}</Td>
                <Td colSpan={is_fiat_onramp && '3'}>
                    <Text>{data.currencies}</Text>
                </Td>
                <Td>
                    {Array.isArray(data.min_max_deposit) ? (
                        data.min_max_deposit.map((md, idx) => <Text key={idx}>{md}</Text>)
                    ) : (
                        <Text>{data.min_max_deposit}</Text>
                    )}
                </Td>
                {!is_fiat_onramp && (
                    <Td>
                        <>
                            {Array.isArray(data.min_max_withdrawal) ? (
                                data.min_max_withdrawal.map((md, idx) => (
                                    <Text key={idx}>{md}</Text>
                                ))
                            ) : is_crypto ? (
                                <Text>{getCryptoConfig(data.name)}</Text>
                            ) : (
                                <Text>{data.min_max_withdrawal}</Text>
                            )}
                        </>
                    </Td>
                )}
                <Deposit colSpan={is_fiat_onramp && '2'} is_fiat_onramp={is_fiat_onramp}>
                    <Text>{data.deposit_time}</Text>
                </Deposit>

                {!is_fiat_onramp && (
                    <Withdrawal>
                        <Text>{data.withdrawal_time}</Text>
                    </Withdrawal>
                )}

                <Td>
                    {data.reference ? (
                        <CenterIcon
                            href={`/payment-methods/${
                                data.locales?.includes(locale.locale.language)
                                    ? locale.locale.language + '/' + data.reference
                                    : data.reference
                            }`}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <StyledPDF src={PDF} alt="PDF" />
                        </CenterIcon>
                    ) : (
                        <Text align="center">-</Text>
                    )}
                </Td>
                <HoverTd onClick={toggleExpand}>
                    <StyledChevron src={Chevron} alt="chevron" expanded={is_expanded} />
                </HoverTd>
            </Tr>
            <tr>
                <ExpandedContent colSpan="8">
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
    config: PropTypes.oneOfType([PropTypes.bool, PropTypes.object]),
    data: PropTypes.object,
    is_crypto: PropTypes.bool,
    is_fiat_onramp: PropTypes.bool,
    locale: PropTypes.object,
}

export default ExpandList
