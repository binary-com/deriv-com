import React from 'react'
import styled, { css } from 'styled-components'
import { CryptoType } from './_mobile-accordian-item'
import { LocaleType } from './index'
import { Button } from 'components/form/'
import { Text } from 'components/elements'
import { localize } from 'components/localization'
import Chevron from 'images/svg/custom/chevron-thick.svg'
import PDF from 'images/svg/regulatory/pdf-icon-black.svg'

export type DataType = {
    method?: string | React.ReactNode
    currencies?: string | React.ReactElement
    min_max_deposit?: React.ReactElement
    min_max_withdrawal?: React.ReactElement
    deposit_time?: React.ReactElement
    withdrawal_time?: React.ReactElement
    reference?: string
    reference_link?: string | React.ReactElement
    description?: React.ReactElement
    name?: string
    url?: string
    locales?: string[]
    is_fiat_onramp?: boolean
}

export type ExpandListProps = {
    expanded?: boolean
    is_expanded?: boolean
    colSpan?: any
    data?: DataType
    is_crypto?: boolean
    is_fiat_onramp?: boolean
    locale?: LocaleType
    config?: CryptoType
}

const StyledButton = styled(Button)`
    padding: 6px 16px;
    width: 112px;
`

const StyledChevron = styled.img<ExpandListProps>`
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
const ExpandedContent = styled.td<ExpandListProps>`
    text-align: left;
`
const Tr = styled.tr<ExpandListProps>`
    border-bottom: ${(props) => (props.is_expanded ? 'none' : '1px solid var(--color-grey-8)')};
`
const Td = styled.td<ExpandListProps>`
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

const description = css`
    max-height: 40rem;
    padding: 2.4rem 3.2rem;
    border-bottom: 1px solid var(--color-grey-8);
`

const Description = styled.div<ExpandListProps>`
    max-height: 0;
    overflow: hidden;
    transition: max-height 0.3s, padding 0.3s;
    background: var(--color-white);
    width: 100%;
    padding: 0 3.2rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    ${(props) => props.is_expanded && description}
`

const StyledText = styled(Text)`
    font-size: ${(props) => (props.is_expanded ? 'var(--text-size-s)' : '0')};
`
const StyleCurrencyText = styled(Text)`
    white-space: pre-line;
`
const Deposit = styled(Td)<ExpandListProps>`
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

const ExpandList = ({ data = {}, is_fiat_onramp = false, locale }: ExpandListProps) => {
    const [is_expanded, setIsExpanded] = React.useState(false)
    const toggleExpand = () => {
        setIsExpanded(!is_expanded)
    }

    const payment_method = `/payment-methods/${
        data.locales?.includes(locale.locale.language)
            ? locale.locale.language + '/' + data.reference
            : data.reference
    }`

    const reference_link = data.reference_link ? data.reference_link : <Text align="center">-</Text>

    return (
        <>
            <Tr is_expanded={is_expanded}>
                <Td>{data.method}</Td>
                <Td colSpan={is_fiat_onramp && '2'}>
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
                <Deposit colSpan={is_fiat_onramp && '2'} is_fiat_onramp={is_fiat_onramp}>
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
                                href={payment_method}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <StyledPDF src={PDF} alt="PDF" />
                            </CenterIcon>
                        ) : (
                            reference_link
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
                    <ExpandedContent colSpan="8">
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
