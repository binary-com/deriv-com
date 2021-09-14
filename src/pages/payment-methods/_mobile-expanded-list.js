import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { Flex } from 'components/containers'
import { Header } from 'components/elements'
import { localize } from 'components/localization'
import { Button } from 'components/form/'
import PDF from 'images/svg/pdf-icon-black.svg'
import device from 'themes/device.js'
import Chevron from 'images/svg/chevron-thick.svg'

const StyledItemWrapper = styled(Flex)`
    border-bottom: ${(props) => (props.is_expanded ? '1px solid var(--color-grey-8)' : 'none')};
`
const StyledIconWrapper = styled.div`
    width: 100%;
    max-width: 128px;
    height: 80px;
    margin-left: 16px;
`
const StyledChevron = styled.img`
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
    @media ${device.mobileM} {
        width: 130px;
    }
`
const StyledKeyDiv = styled.div`
    width: 50%;

    @media ${device.mobileM} {
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
const BoldText = styled(Header)`
    font-weight: bold;
`
const ValueText = styled(Header)`
    text-align: right;

    @media ${device.mobileM} {
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

const MobileExpandedList = ({ is_crypto, is_fiat_onramp, is_dp2p, locale, payment_data }) => {
    const [is_expanded, setIsExpanded] = React.useState(false)
    const toggleExpand = () => {
        setIsExpanded(!is_expanded)
    }

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
                            <BoldText type="subtitle-2">{localize('Currencies')}</BoldText>
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
                                <BoldText type="subtitle-2">{localize('Min deposit')}</BoldText>
                            ) : is_dp2p ? (
                                <BoldText type="subtitle-2">
                                    {localize('Supported Deriv accounts')}
                                </BoldText>
                            ) : (
                                <>
                                    <BoldText type="subtitle-2">{localize('Min-max')}</BoldText>
                                    <BoldText type="subtitle-2">{localize('deposit')}</BoldText>
                                </>
                            )}
                        </StyledItemDiv>
                        <StyledKeyDiv>
                            <ValueText type="subtitle-2" weight="normal">
                                {payment_data.min_max_deposit}
                            </ValueText>
                        </StyledKeyDiv>
                    </StyledRow>

                    {/* third row */}
                    {!is_fiat_onramp && (
                        <>
                            <StyledRow jc="space-between" ai="center">
                                <StyledItemDiv>
                                    {is_crypto ? (
                                        <BoldText type="subtitle-2">
                                            {localize('Min withdrawal')}
                                        </BoldText>
                                    ) : is_dp2p ? (
                                        <BoldText type="subtitle-2">
                                            {localize('Daily deposit limits')}
                                        </BoldText>
                                    ) : (
                                        <>
                                            <BoldText type="subtitle-2">
                                                {localize('Min-max')}
                                            </BoldText>
                                            <BoldText type="subtitle-2">
                                                {localize('withdrawal')}
                                            </BoldText>
                                        </>
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
                                <BoldText type="subtitle-2">
                                    {localize('Deposit processing time')}
                                </BoldText>
                            ) : is_dp2p ? (
                                <BoldText type="subtitle-2">
                                    {localize('Daily withdrawal limits')}
                                </BoldText>
                            ) : (
                                <BoldText type="subtitle-2">
                                    <BoldText type="subtitle-2">{localize('Deposit')}</BoldText>
                                    <BoldText type="subtitle-2">
                                        {localize('processing time')}
                                    </BoldText>
                                </BoldText>
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
                                <BoldText type="subtitle-2">{localize('Withdrawal')}</BoldText>
                                <BoldText type="subtitle-2">{localize('processing time')}</BoldText>
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
                                <BoldText type="subtitle-2">{localize('Processing time')}</BoldText>
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
                            <BoldText type="subtitle-2">{localize('Reference')}</BoldText>
                        </StyledItemDiv>
                        <StyledKeyDiv>
                            <>
                                {payment_data.reference ? (
                                    <RefIcon
                                        href={`/payment-methods/${
                                            payment_data.locales?.includes(locale.locale.language)
                                                ? locale.locale.language +
                                                  '/' +
                                                  payment_data.reference
                                                : payment_data.reference
                                        }`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <StyledPDF src={PDF} alt="PDF" />
                                    </RefIcon>
                                ) : payment_data.reference_link ? (
                                    <Flex jc="flex-end">{payment_data.reference_link}</Flex>
                                ) : (
                                    <ValueText type="subtitle-2" weight="normal">
                                        -
                                    </ValueText>
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
                                    {localize('More detail')}
                                </StyledButton>
                            )}
                        </Flex>
                    )}
                </Flex>
            </DetailsWrapper>
        </>
    )
}

MobileExpandedList.propTypes = {
    crypto_config: PropTypes.object,
    is_crypto: PropTypes.bool,
    is_dp2p: PropTypes.bool,
    is_fiat_onramp: PropTypes.bool,
    locale: PropTypes.object,
    payment_data: PropTypes.object,
}

export default MobileExpandedList
