import React from 'react'
import styled from 'styled-components'
import { ContainerWrapper } from './components/_elements'
import { Flex } from 'components/containers'
import { Header } from 'components/elements'
import { Button } from 'components/form'
import { Localize } from 'components/localization'
import useAuthCheck from 'components/hooks/use-auth-check'
import useHandleLogin from 'components/hooks/use-handle-login'
import MarketTab from 'components/elements/market-tab'
import { TString } from 'types/generics'

const LivePricingSection = styled.section`
    background-color: var(--color-white);
    min-height: 780px;
    display: flex;
    flex-direction: column;
    padding: 40px 0 80px;
`
const StyledFlex = styled(Flex)`
    gap: 20px;
`
const StyledButton = styled(Button)`
    border-radius: 16px;
`
const DisclaimerText = styled(Header)`
    color: var(--color-grey-5);
    font-weight: 400;
    text-align: center;
    font-size: 1.6rem;
`
const handleTradingSpec = () => {
    window.location.href = '/trading-specification'
}

const LivePricing = () => {
    const [is_logged_in] = useAuthCheck()
    const handleLogin = useHandleLogin()
    const disclaimer_text: TString =
        '_t_All spreads are indicative. To view real-time spreads, please refer to your terminal._t_'
    const button_text: TString = '_t_Check trading specs_t_'
    const trade_now_button: TString = '_t_Trade now_t_'

    return (
        <LivePricingSection id="live-pricing">
            <MarketTab is_home={true} />

            <ContainerWrapper>
                <DisclaimerText as="p">
                    <Localize translate_text={disclaimer_text} />
                </DisclaimerText>

                <StyledFlex>
                    <StyledButton onClick={handleTradingSpec} primary>
                        <Localize translate_text={button_text} />
                    </StyledButton>
                    {is_logged_in ? (
                        <StyledButton secondary>
                            <Localize translate_text={trade_now_button} />
                        </StyledButton>
                    ) : (
                        <StyledButton onClick={handleLogin} secondary>
                            <Localize translate_text={trade_now_button} />
                        </StyledButton>
                    )}
                </StyledFlex>
            </ContainerWrapper>
        </LivePricingSection>
    )
}

export default LivePricing
