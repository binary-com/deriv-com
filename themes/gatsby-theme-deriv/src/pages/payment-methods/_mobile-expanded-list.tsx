import React from 'react'
import styled, { css } from 'styled-components'
import { PaymentProps } from './_payment-data'
import Chevron from 'images/svg/custom/chevron-thick.svg'
import { Flex } from 'components/containers'
import { Header } from 'components/elements'
import { Localize } from 'components/localization'
import { Button } from 'components/form/'
import device from 'themes/device'
import { useIsRtl } from 'components/hooks/use-isrtl'
import { TString } from 'types/generics'

type StyledProps = {
    expanded?: boolean
    is_expanded?: boolean
}
const StyledItemWrapper = styled(Flex)<StyledProps>`
    border-bottom: ${(props) => (props.is_expanded ? '1px solid var(--color-grey-8)' : 'none')};
`
const StyledIconWrapper = styled.div`
    width: 100%;
    max-width: 128px;
    margin-left: 16px;
`
const StyledChevron = styled.img<StyledProps>`
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
const DetailsWrapper = styled(Flex)<StyledProps>`
    display: ${(props) => (props.is_expanded ? 'flex' : 'none')};
`
const StyledHeader = styled(Header)`
    font-size: 14px;
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
    display: flex;
    justify-content: flex-end;

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
const ValueText = styled(Header)<{ is_rtl: boolean }>`
    font-size: 14px;
    text-align: end;
    white-space: pre-line;
    direction: ltr;
    ${({ is_rtl }) =>
        is_rtl
            ? css`
                  text-align: start;
              `
            : css`
                  text-align: end;
              `}

    @media ${device.mobileL} {
        text-align: start;
    }
`
const StyledButton = styled(Button)`
    margin-top: 8px;
    max-width: 120px;
`
const StyledRefLink = styled(Flex)`
    @media ${device.mobileL} {
        justify-content: flex-start;
    }

    @media ${device.tabletM} {
        width: 65%;
    }
`
const MobileExpandedList = ({ is_crypto, is_fiat_onramp, is_dp2p, payment_data }: PaymentProps) => {
    const [is_expanded, setExpanded] = React.useState(false)
    const is_rtl = useIsRtl()
    const toggleExpand = () => {
        setExpanded(!is_expanded)
    }

    return (
        <>
            <StyledItemWrapper
                jc="space-between"
                ai="center"
                onClick={toggleExpand}
                is_expanded={is_expanded}
            >
                <StyledIconWrapper>{payment_data?.method}</StyledIconWrapper>
                <HoverChevron>
                    <StyledChevron src={Chevron} alt="chevron" expanded={is_expanded} />
                </HoverChevron>
            </StyledItemWrapper>
            <DetailsWrapper is_expanded={is_expanded}>
                <Flex fd="column">
                    {/* first row */}
                    <StyledRow jc="space-between" ai="center">
                        <StyledItemDiv>
                            <StyledHeader type="subtitle-2">
                                <Localize translate_text="_t_Currencies_t_" />
                            </StyledHeader>
                        </StyledItemDiv>
                        <StyledKeyDiv>
                            <ValueText as="p" is_rtl={is_rtl} type="subtitle-2" weight="normal">
                                {payment_data.currencies.includes('_t_') ? (
                                    <Localize translate_text={payment_data.currencies as TString} />
                                ) : (
                                    payment_data.currencies
                                )}
                            </ValueText>
                        </StyledKeyDiv>
                    </StyledRow>

                    {/* second row */}
                    <StyledRow jc="space-between" ai="center">
                        <StyledItemDiv>
                            {is_crypto || is_fiat_onramp ? (
                                <StyledHeader type="subtitle-2">
                                    <Localize translate_text="_t_Min deposit_t_" />
                                </StyledHeader>
                            ) : is_dp2p ? (
                                <StyledHeader type="subtitle-2">
                                    <Localize translate_text="_t_Supported Deriv accounts_t_" />
                                </StyledHeader>
                            ) : (
                                <>
                                    <StyledHeader type="subtitle-2">
                                        <Localize translate_text="_t_Min-max_t_" />
                                    </StyledHeader>
                                    <StyledHeader type="subtitle-2">
                                        <Localize translate_text="_t_deposit_t_" />
                                    </StyledHeader>
                                </>
                            )}
                        </StyledItemDiv>
                        <StyledKeyDiv>
                            {payment_data.minimum_deposit ? (
                                <ValueText as="p" is_rtl={is_rtl} type="subtitle-2" weight="normal">
                                    {payment_data.minimum_deposit}
                                </ValueText>
                            ) : (
                                payment_data?.min_max_deposit && (
                                    <ValueText
                                        as="p"
                                        is_rtl={is_rtl}
                                        type="subtitle-2"
                                        weight="normal"
                                    >
                                        <Localize
                                            translate_text={payment_data.min_max_deposit}
                                            components={payment_data.min_max_deposit_components}
                                        />
                                    </ValueText>
                                )
                            )}
                        </StyledKeyDiv>
                    </StyledRow>

                    {/* third row */}
                    {!is_fiat_onramp && (
                        <>
                            <StyledRow jc="space-between" ai="center">
                                <StyledItemDiv>
                                    {is_crypto ? (
                                        <StyledHeader type="subtitle-2">
                                            <Localize translate_text="_t_Min withdrawal_t_" />
                                        </StyledHeader>
                                    ) : is_dp2p ? (
                                        <StyledHeader type="subtitle-2">
                                            <Localize translate_text="_t_Daily deposit limits_t_" />
                                        </StyledHeader>
                                    ) : (
                                        <>
                                            <StyledHeader type="subtitle-2">
                                                <Localize translate_text="_t_Min-max_t_" />
                                            </StyledHeader>
                                            <StyledHeader type="subtitle-2">
                                                <Localize translate_text="_t_withdrawal_t_" />
                                            </StyledHeader>
                                        </>
                                    )}
                                </StyledItemDiv>
                                <StyledKeyDiv>
                                    {payment_data.minimum_withdrawal ? (
                                        <ValueText
                                            as="p"
                                            is_rtl={is_rtl}
                                            type="subtitle-2"
                                            weight="normal"
                                        >
                                            {payment_data.minimum_withdrawal}
                                        </ValueText>
                                    ) : (
                                        payment_data?.min_max_withdrawal && (
                                            <ValueText
                                                as="p"
                                                is_rtl={is_rtl}
                                                type="subtitle-2"
                                                weight="normal"
                                            >
                                                <Localize
                                                    translate_text={payment_data.min_max_withdrawal}
                                                    components={
                                                        payment_data.min_max_withdrawal_components
                                                    }
                                                />
                                            </ValueText>
                                        )
                                    )}
                                </StyledKeyDiv>
                            </StyledRow>
                        </>
                    )}

                    {/* 4th row */}
                    <StyledRow jc="space-between" ai="center">
                        <StyledItemDiv>
                            {is_fiat_onramp ? (
                                <StyledHeader type="subtitle-2">
                                    <Localize translate_text="_t_Deposit processing time_t_" />
                                </StyledHeader>
                            ) : is_dp2p ? (
                                <StyledHeader type="subtitle-2">
                                    <Localize translate_text="_t_Daily withdrawal limits_t_" />
                                </StyledHeader>
                            ) : (
                                <>
                                    <StyledHeader type="subtitle-2">
                                        <Localize translate_text="_t_Deposit_t_" />
                                    </StyledHeader>
                                    <StyledHeader type="subtitle-2">
                                        <Localize translate_text="_t_processing time_t_" />
                                    </StyledHeader>
                                </>
                            )}
                        </StyledItemDiv>
                        <StyledKeyDiv>
                            <ValueText as="p" is_rtl={is_rtl} type="subtitle-2" weight="normal">
                                {payment_data?.deposit_time && (
                                    <Localize translate_text={payment_data.deposit_time} />
                                )}
                            </ValueText>
                        </StyledKeyDiv>
                    </StyledRow>

                    {/* 5th row */}
                    {!is_fiat_onramp && !is_dp2p && (
                        <StyledRow jc="space-between" ai="center">
                            <StyledItemDiv>
                                <StyledHeader type="subtitle-2">
                                    <Localize translate_text="_t_Withdrawal_t_" />
                                </StyledHeader>
                                <StyledHeader type="subtitle-2">
                                    <Localize translate_text="_t_processing time_t_" />
                                </StyledHeader>
                            </StyledItemDiv>
                            <StyledKeyDiv>
                                <ValueText as="p" is_rtl={is_rtl} type="subtitle-2" weight="normal">
                                    {payment_data?.withdrawal_time && (
                                        <Localize translate_text={payment_data.withdrawal_time} />
                                    )}
                                </ValueText>
                            </StyledKeyDiv>
                        </StyledRow>
                    )}
                    {is_dp2p && (
                        <StyledRow jc="space-between" ai="center">
                            <StyledItemDiv>
                                <StyledHeader type="subtitle-2">
                                    <Localize translate_text="_t_Processing time_t_" />
                                </StyledHeader>
                            </StyledItemDiv>
                            <StyledKeyDiv>
                                <ValueText as="p" is_rtl={is_rtl} type="subtitle-2" weight="normal">
                                    {payment_data?.withdrawal_time && (
                                        <Localize translate_text={payment_data.withdrawal_time} />
                                    )}
                                </ValueText>
                            </StyledKeyDiv>
                        </StyledRow>
                    )}

                    {/* reference row */}
                    {payment_data?.reference_link && (
                        <StyledRow jc="space-between" ai="center">
                            <StyledItemDiv>
                                <StyledHeader type="subtitle-2">
                                    <Localize translate_text="_t_More info_t_" />
                                </StyledHeader>
                            </StyledItemDiv>

                            <StyledKeyDiv>
                                <StyledRefLink jc="flex-end">
                                    {payment_data.reference_link}
                                </StyledRefLink>
                            </StyledKeyDiv>
                        </StyledRow>
                    )}
                    {payment_data.description && (
                        <Flex p="16px 0" fd="column">
                            <Header as="p" type="paragraph-1" weight="normal">
                                <Localize translate_text={payment_data.description} />
                            </Header>
                            {payment_data.url && (
                                <StyledButton
                                    onClick={() => window.open(payment_data.url, '_blank')}
                                    tertiary
                                >
                                    <Localize translate_text="_t_Learn more_t_" />
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
