import React from 'react'
import styled, { css } from 'styled-components'
import { PaymentProps } from './index'
import { Button } from 'components/form/'
import { Text } from 'components/elements'
import { localize } from 'components/localization'
import Chevron from 'images/svg/custom/chevron-thick.svg'
import PDF from 'images/svg/regulatory/pdf-icon-black.svg'

type ExpandListType = {
    is_expanded?: boolean
    is_fiat_onramp?: boolean
}

const StyledButton = styled(Button)`
    padding: 6px 16px;
    width: 112px;
`
const StyledChevron = styled.img<ExpandListType>`
    height: 16px;
    width: 16px;
    margin: 26px 0 32px;
    transform: ${(props) => (props.is_expanded ? 'inherit' : 'rotate(-180deg)')};
    transition: transform 0.25s ease-out;
`
const StyledPDF = styled.img`
    height: 32px;
    width: 32px;
`
const ExpandedContent = styled.td`
    text-align: left;
`
const Tr = styled.tr<ExpandListType>`
    border-bottom: ${(props) => (props.is_expanded ? 'none' : '1px solid var(--color-grey-8)')};
`
const Td = styled.td`
    vertical-align: middle;
    padding: 16px 0 16px 24px;
    position: relative;

    :first-child {
        position: sticky;
        /* stylelint-disable-next-line value-no-vendor-prefix */
        position: -webkit-sticky;
        left: -5px;
        background-color: var(--color-white);
        z-index: 2;
        width: 128px;
        padding: 16px 0 16px 16px;
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
    display: flex;
    justify-content: center;
`

const Description = styled.div<ExpandListType>`
    max-height: 0;
    overflow: hidden;
    transition: max-height 0.3s, padding 0.3s;
    background: var(--color-white);
    width: 100%;
    padding: 0 3.2rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
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
const StyleCurrencyText = styled(Text)`
    white-space: pre-line;
`
const Deposit = styled(Td)<ExpandListType>`
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

const ExpandList = ({ payment_data, is_fiat_onramp, locale }: PaymentProps) => {
    const [is_expanded, setIsExpanded] = React.useState(false)
    const parse_to_integer = parseInt('2')

    const toggleExpand = () => {
        setIsExpanded(!is_expanded)
    }

    return (
        <>
            <Tr is_expanded={is_expanded}>
                <Td>{payment_data.method}</Td>
                <Td colSpan={is_fiat_onramp && parse_to_integer}>
                    <StyleCurrencyText>{payment_data.currencies}</StyleCurrencyText>
                </Td>
                <Td>
                    {Array.isArray(payment_data.min_max_deposit) ? (
                        payment_data.min_max_deposit.map((md, idx) => <Text key={idx}>{md}</Text>)
                    ) : (
                        <Text>{payment_data.min_max_deposit}</Text>
                    )}
                </Td>
                {!is_fiat_onramp && (
                    <Td>
                        <>
                            {Array.isArray(payment_data.min_max_withdrawal) ? (
                                payment_data.min_max_withdrawal.map((md, idx) => (
                                    <Text key={idx}>{md}</Text>
                                ))
                            ) : (
                                <Text>{payment_data.min_max_withdrawal}</Text>
                            )}
                        </>
                    </Td>
                )}
                <Deposit
                    colSpan={is_fiat_onramp && parse_to_integer}
                    is_fiat_onramp={is_fiat_onramp}
                >
                    <Text>{payment_data.deposit_time}</Text>
                </Deposit>

                {!is_fiat_onramp && (
                    <Withdrawal>
                        <Text>{payment_data.withdrawal_time}</Text>
                    </Withdrawal>
                )}

                <Td>
                    <>
                        {payment_data.reference ? (
                            <CenterIcon
                                href={`/payment-methods/${
                                    payment_data.locales?.includes(locale?.locale?.language)
                                        ? locale?.locale?.language + '/' + payment_data.reference
                                        : payment_data.reference
                                }`}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <StyledPDF src={PDF} alt="PDF" />
                            </CenterIcon>
                        ) : payment_data.reference_link ? (
                            payment_data.reference_link
                        ) : (
                            <Text align="center">-</Text>
                        )}
                    </>
                </Td>
                {payment_data.description && (
                    <HoverTd onClick={toggleExpand}>
                        <StyledChevron src={Chevron} alt="chevron" is_expanded={is_expanded} />
                    </HoverTd>
                )}
            </Tr>
            {payment_data.description && (
                <Tr>
                    <ExpandedContent colSpan={8}>
                        <Description is_expanded={is_expanded}>
                            <StyledText is_expanded={is_expanded}>
                                {payment_data.description}
                            </StyledText>
                            {payment_data.url && (
                                <StyledButton
                                    onClick={() => window.open(payment_data.url, '_blank')}
                                    tertiary
                                >
                                    {localize('Learn more')}
                                </StyledButton>
                            )}
                        </Description>
                    </ExpandedContent>
                </Tr>
            )}
        </>
    )
}

export default ExpandList
