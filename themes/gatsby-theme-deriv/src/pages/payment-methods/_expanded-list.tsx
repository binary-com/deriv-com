import React from 'react'
import styled, { css } from 'styled-components'
import { PaymentProps } from './_payment-data'
import { Button } from 'components/form/'
import { Text } from 'components/elements'
import { Localize } from 'components/localization'
import { useIsRtl } from 'components/hooks/use-isrtl'
import { TString } from 'types/generics'

type ExpandListType = {
    is_expanded?: boolean
    is_fiat_onramp?: boolean
}

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
            padding: 8px 14px 24px 14px;
            border-bottom: 1px solid var(--color-grey-8);
        `}
`

const StyledText = styled(Text)<ExpandListType>`
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

const LtrText = styled(Text)<{ is_rtl: boolean }>`
    direction: ltr;
    ${({ is_rtl }) =>
        is_rtl
            ? css`
                  text-align: end;
              `
            : css`
                  text-align: start;
              `}
`

const ExpandList = ({ payment_data, is_fiat_onramp, locale }: PaymentProps) => {
    const [is_expanded, setIsExpanded] = React.useState(false)
    const parse_to_integer = parseInt('2')
    const is_rtl = useIsRtl()

    const toggleExpand = () => {
        setIsExpanded(!is_expanded)
    }

    return (
        <>
            <Tr is_expanded={is_expanded}>
                <Td>{payment_data.method}</Td>
                <Td colSpan={is_fiat_onramp && parse_to_integer}>
                    <StyleCurrencyText>
                        {payment_data.currencies.includes('_t_') ? (
                            <Localize translate_text={payment_data.currencies as TString} />
                        ) : (
                            payment_data.currencies
                        )}
                    </StyleCurrencyText>
                </Td>
                <Td>
                    <>
                        {payment_data?.minimum_deposit ? (
                            <LtrText is_rtl={is_rtl}>{payment_data?.minimum_deposit}</LtrText>
                        ) : (
                            payment_data?.min_max_deposit && (
                                <LtrText is_rtl={is_rtl}>
                                    <Localize
                                        translate_text={payment_data.min_max_deposit}
                                        components={payment_data.min_max_deposit_components}
                                    />
                                </LtrText>
                            )
                        )}
                    </>
                </Td>
                {!is_fiat_onramp && (
                    <Td>
                        <>
                            {payment_data?.minimum_withdrawal ? (
                                <LtrText is_rtl={is_rtl}>
                                    {payment_data?.minimum_withdrawal}
                                </LtrText>
                            ) : (
                                payment_data?.min_max_withdrawal && (
                                    <LtrText is_rtl={is_rtl}>
                                        <Localize
                                            translate_text={payment_data.min_max_withdrawal}
                                            components={payment_data.min_max_withdrawal_components}
                                        />
                                    </LtrText>
                                )
                            )}
                        </>
                    </Td>
                )}
                <Deposit
                    colSpan={is_fiat_onramp && parse_to_integer}
                    is_fiat_onramp={is_fiat_onramp}
                >
                    <LtrText is_rtl={is_rtl}>
                        {payment_data?.deposit_time && (
                            <Localize translate_text={payment_data.deposit_time} />
                        )}
                    </LtrText>
                </Deposit>

                {!is_fiat_onramp && (
                    <Withdrawal>
                        <LtrText is_rtl={is_rtl}>
                            {payment_data?.withdrawal_time && (
                                <Localize translate_text={payment_data.withdrawal_time} />
                            )}
                        </LtrText>
                    </Withdrawal>
                )}
                {payment_data.reference_link && <Td>{payment_data.reference_link}</Td>}
            </Tr>
        </>
    )
}

export default ExpandList
