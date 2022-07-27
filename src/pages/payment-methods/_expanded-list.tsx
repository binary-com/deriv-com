import React, { ReactElement } from 'react'
import styled, { css } from 'styled-components'
import { Button } from 'components/form/'
import { Text } from 'components/elements'
import { localize } from 'components/localization'
import Chevron from 'images/svg/custom/chevron-thick.svg'
import PDF from 'images/svg/regulatory/pdf-icon-black.svg'

type StyledChevronType = {
    expanded: boolean
}
type TrType = {
    is_expanded?: boolean
}
type DepositType = {
    is_fiat_onramp: boolean
}

const StyledButton = styled(Button)`
    padding: 6px 16px;
    width: 112px;
`
const StyledChevron = styled.img<StyledChevronType>`
    height: 16px;
    width: 16px;
    margin: 26px 0 32px;
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
const Tr = styled.tr<TrType>`
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

const Description = styled.div<TrType>`
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
const Deposit = styled(Td)<DepositType>`
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
type ExpandListProps = {
    data?: {
        method?: string | ReactElement
        currencies?: string | ReactElement
        min_max_deposit?: string | ReactElement
        min_max_withdrawal?: string | ReactElement
        deposit_time?: string | ReactElement
        withdrawal_time?: string | ReactElement
        description?: string | ReactElement
        name?: string
        reference?: string
        locales?: string[]
        url?: string
        reference_link?: string | ReactElement
    }
    is_fiat_onramp: boolean
    locale?: {
        locale?: { language: string }
    }
}

const ExpandList = ({ data, is_fiat_onramp, locale }: ExpandListProps) => {
    const [is_expanded, setIsExpanded] = React.useState(false)
    const toggleExpand = () => {
        setIsExpanded(!is_expanded)
    }

    return (
        <>
            <Tr is_expanded={is_expanded}>
                <Td>{data.method}</Td>
                <Td colSpan={is_fiat_onramp && parseInt('2')}>
                    <StyleCurrencyText>{data.currencies}</StyleCurrencyText>
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
                            ) : (
                                <Text>{data.min_max_withdrawal}</Text>
                            )}
                        </>
                    </Td>
                )}
                <Deposit colSpan={is_fiat_onramp && parseInt('2')} is_fiat_onramp={is_fiat_onramp}>
                    <Text>{data.deposit_time}</Text>
                </Deposit>

                {!is_fiat_onramp && (
                    <Withdrawal>
                        <Text>{data.withdrawal_time}</Text>
                    </Withdrawal>
                )}

                <Td>
                    <>
                        {data.reference ? (
                            <CenterIcon
                                href={`/payment-methods/${
                                    data.locales?.includes(locale?.locale?.language)
                                        ? locale.locale.language + '/' + data.reference
                                        : data.reference
                                }`}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <StyledPDF src={PDF} alt="PDF" />
                            </CenterIcon>
                        ) : data.reference_link ? (
                            data.reference_link
                        ) : (
                            <Text align="center">-</Text>
                        )}
                    </>
                </Td>
                {data.description && (
                    <HoverTd onClick={toggleExpand}>
                        <StyledChevron src={Chevron} alt="chevron" expanded={is_expanded} />
                    </HoverTd>
                )}
            </Tr>
            {data.description && (
                <Tr>
                    <ExpandedContent colSpan={8}>
                        <Description is_expanded={is_expanded}>
                            <StyledText is_expanded={is_expanded}>{data.description}</StyledText>
                            {data.url && (
                                <StyledButton
                                    onClick={() => window.open(data.url, '_blank')}
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
