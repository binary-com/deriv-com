import React from 'react'
import styled from 'styled-components'
import { CryptoType } from './_mobile-accordian-item'
import { DataType, ExpandListProps } from './_expanded-list'
import { LocaleType } from './index'
import Chevron from 'images/svg/custom/chevron-thick.svg'
import PDF from 'images/svg/regulatory/pdf-icon-black.svg'
import { Flex } from 'components/containers'
import { Header } from 'components/elements'
import { localize } from 'components/localization'
import { Button } from 'components/form/'
import device from 'themes/device.js'

type MobileExpandedListType = {
    is_crypto?: boolean
    is_fiat_onramp?: boolean
    is_dp2p?: boolean
    locale?: LocaleType
    payment_data?: DataType
    crypto_config?: CryptoType
}

const StyledItemWrapper = styled(Flex)`
    border-bottom: ${(props) => (props.is_expanded ? '1px solid var(--color-grey-8)' : 'none')};
`
const StyledIconWrapper = styled.div`
    width: 100%;
    max-width: 128px;
    margin-left: 16px;
`
const StyledChevron = styled.img<ExpandListProps>`
    height: 16px;
    width: 16px;
    margin: 26px 0 32px;
    transform: ${(props) => (props.expanded ? 'inherit' : 'rotate(-180deg)')};
    transition: transform 0.25s ease-out;
`
const HoverChevron = styled.div`
    transition: background 0.25s;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 16px;
`
const DetailsWrapper = styled(Flex)`
    display: ${(props) => (props.is_expanded ? 'flex' : 'none')};
`

const StyledItemDiv = styled.div`
    width: 50%;
    margin-right: 8px;
    @media ${device.mobileL} {
        width: 130px;
    }
`
const StyledKeyDiv = styled.div`
    width: 50%;

    @media ${device.mobileL} {
        max-width: 120px;
        display: flex;
        justify-content: flex-start;
    }
`
const StyledRow = styled(Flex)`
    padding: 16px 18.5px;
    border-bottom: 1px solid var(--color-grey-8);

    :last-child {
        border-bottom: none;
    }
`
const ValueText = styled(Header)`
    text-align: right;
    white-space: pre-line;

    @media ${device.mobileL} {
        text-align: left;
    }
`
const RefIcon = styled.a`
    display: flex;
    justify-content: flex-end;
`
const StyledPDF = styled.img`
    height: 32px;
    width: 32px;
`
const StyledButton = styled(Button)`
    margin-top: 8px;
    max-width: 120px;
`
const StyledRefLink = styled(Flex)`
    @media ${device.mobileL} {
        justify-content: flex-start;
    }
`

const MobileExpandedList = ({
    is_crypto = false,
    is_fiat_onramp = false,
    is_dp2p = false,
    locale,
    payment_data,
}: MobileExpandedListType) => {
    const [is_expanded, setExpanded] = React.useState(false)
    const toggleExpand = () => {
        setExpanded(!is_expanded)
    }
    const accounts = is_dp2p ? (
        <Header type="subtitle-2">{localize('Supported Deriv accounts')}</Header>
    ) : (
        <>
            <Header type="subtitle-2">{localize('Min-max')}</Header>
            <Header type="subtitle-2">{localize('deposit')}</Header>
        </>
    )
    const deposit_limits = is_dp2p ? (
        <Header type="subtitle-2">{localize('Daily deposit limits')}</Header>
    ) : (
        <>
            <Header type="subtitle-2">{localize('Min-max')}</Header>
            <Header type="subtitle-2">{localize('withdrawal')}</Header>
        </>
    )

    const daily_withdrawal = is_dp2p ? (
        <Header type="subtitle-2">{localize('Daily withdrawal limits')}</Header>
    ) : (
        <Header type="subtitle-2">
            <Header type="subtitle-2">{localize('Deposit')}</Header>
            <Header type="subtitle-2">{localize('processing time')}</Header>
        </Header>
    )
    const reference = payment_data.locales?.includes(locale.locale.language)
        ? locale.locale.language + '/' + payment_data.reference
        : payment_data.reference
    const reference_link = payment_data.reference_link ? (
        <StyledRefLink jc="flex-end">{payment_data.reference_link}</StyledRefLink>
    ) : (
        <ValueText type="subtitle-2" weight="normal">
            -
        </ValueText>
    )
    return (
        <>
            <StyledItemWrapper
                jc="space-between"
                ai="center"
                onClick={toggleExpand}
                is_expanded={is_expanded}
            >
                <StyledIconWrapper>{payment_data.method}</StyledIconWrapper>
                <HoverChevron>
                    <StyledChevron src={Chevron} alt="chevron" expanded={is_expanded} />
                </HoverChevron>
            </StyledItemWrapper>
            <DetailsWrapper is_expanded={is_expanded}>
                <Flex fd="column">
                    {/* first row */}
                    <StyledRow jc="space-between" ai="center">
                        <StyledItemDiv>
                            <Header type="subtitle-2">{localize('Currencies')}</Header>
                        </StyledItemDiv>
                        <StyledKeyDiv>
                            <ValueText type="subtitle-2" weight="normal">
                                {payment_data.currencies}
                            </ValueText>
                        </StyledKeyDiv>
                    </StyledRow>

                    {/* second row */}
                    <StyledRow jc="space-between" ai="center">
                        <StyledItemDiv>
                            {is_crypto || is_fiat_onramp ? (
                                <Header type="subtitle-2">{localize('Min deposit')}</Header>
                            ) : (
                                accounts
                            )}
                        </StyledItemDiv>
                        <StyledKeyDiv>
                            <ValueText type="subtitle-2" weight="normal">
                                {payment_data.min_max_deposit}
                            </ValueText>
                        </StyledKeyDiv>
                    </StyledRow>

                    {!is_fiat_onramp && (
                        <>
                            <StyledRow jc="space-between" ai="center">
                                <StyledItemDiv>
                                    {is_crypto ? (
                                        <Header type="subtitle-2">
                                            {localize('Min withdrawal')}
                                        </Header>
                                    ) : (
                                        deposit_limits
                                    )}
                                </StyledItemDiv>
                                <StyledKeyDiv>
                                    {Array.isArray(payment_data.min_max_withdrawal) ? (
                                        payment_data.min_max_withdrawal.map((md, idx) => (
                                            <ValueText type="subtitle-2" weight="normal" key={idx}>
                                                {md}
                                            </ValueText>
                                        ))
                                    ) : (
                                        <ValueText type="subtitle-2" weight="normal">
                                            {payment_data.min_max_withdrawal}
                                        </ValueText>
                                    )}
                                </StyledKeyDiv>
                            </StyledRow>
                        </>
                    )}

                    {/* 4th row */}
                    <StyledRow jc="space-between" ai="center">
                        <StyledItemDiv>
                            {is_fiat_onramp ? (
                                <Header type="subtitle-2">
                                    {localize('Deposit processing time')}
                                </Header>
                            ) : (
                                daily_withdrawal
                            )}
                        </StyledItemDiv>
                        <StyledKeyDiv>
                            <ValueText type="subtitle-2" weight="normal">
                                {payment_data.deposit_time}
                            </ValueText>
                        </StyledKeyDiv>
                    </StyledRow>

                    {/* 5th row */}
                    {!is_fiat_onramp && !is_dp2p && (
                        <StyledRow jc="space-between" ai="center">
                            <StyledItemDiv>
                                <Header type="subtitle-2">{localize('Withdrawal')}</Header>
                                <Header type="subtitle-2">{localize('processing time')}</Header>
                            </StyledItemDiv>
                            <StyledKeyDiv>
                                <ValueText type="subtitle-2" weight="normal">
                                    {payment_data.withdrawal_time}
                                </ValueText>
                            </StyledKeyDiv>
                        </StyledRow>
                    )}
                    {is_dp2p && (
                        <StyledRow jc="space-between" ai="center">
                            <StyledItemDiv>
                                <Header type="subtitle-2">{localize('Processing time')}</Header>
                            </StyledItemDiv>
                            <StyledKeyDiv>
                                <ValueText type="subtitle-2" weight="normal">
                                    {payment_data.withdrawal_time}
                                </ValueText>
                            </StyledKeyDiv>
                        </StyledRow>
                    )}

                    {/* reference row */}
                    <StyledRow jc="space-between" ai="center">
                        <StyledItemDiv>
                            <Header type="subtitle-2">{localize('Reference')}</Header>
                        </StyledItemDiv>
                        <StyledKeyDiv>
                            <>
                                {payment_data.reference ? (
                                    <RefIcon
                                        href={`/payment-methods/${reference}`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <StyledPDF src={PDF} alt="PDF" />
                                    </RefIcon>
                                ) : (
                                    reference_link
                                )}
                            </>
                        </StyledKeyDiv>
                    </StyledRow>
                    {payment_data.description && (
                        <Flex p="16px 0" fd="column">
                            <Header type="paragraph-1" weight="normal">
                                {payment_data.description}
                            </Header>
                            {payment_data.url && (
                                <StyledButton
                                    onClick={() => window.open(payment_data.url, '_blank')}
                                    tertiary
                                >
                                    {localize('Learn more')}
                                </StyledButton>
                            )}
                        </Flex>
                    )}
                </Flex>
            </DetailsWrapper>
        </>
    )
}

export default MobileExpandedList
