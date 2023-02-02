import React from 'react'
import styled from 'styled-components'
import { ContainerWrapper } from './components/_elements'
import { Flex } from 'components/containers'
import { Header } from 'components/elements'
import { Button } from 'components/form'
import { Localize } from 'components/localization'
import useAuthCheck from 'components/hooks/use-auth-check'
import useHandleLogin from 'components/hooks/use-handle-login'
import { handleRedirectToTradersHub } from 'components/layout/nav/util/nav-methods'
import MarketTab from 'components/elements/market-tab'

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
    window.open('/trading-specification')
}

const LivePricing = () => {
    const [is_logged_in] = useAuthCheck()
    const handleLogin = useHandleLogin()

    return (
        <LivePricingSection id="live-pricing">
            <MarketTab is_home={true} />

            <ContainerWrapper>
                <DisclaimerText>
                    <Localize translate_text="All spreads are indicative. To view real-time spreads, please refer to your terminal." />
                </DisclaimerText>

                <StyledFlex>
                    <StyledButton onClick={handleTradingSpec} primary>
                        <Localize translate_text="See trading specifications" />
                    </StyledButton>
                    {is_logged_in ? (
                        <StyledButton onClick={handleRedirectToTradersHub} secondary>
                            <Localize translate_text="Trade now" />
                        </StyledButton>
                    ) : (
                        <StyledButton onClick={handleLogin} secondary>
                            <Localize translate_text="Trade now" />
                        </StyledButton>
                    )}
                </StyledFlex>
            </ContainerWrapper>
        </LivePricingSection>
    )
}

export default LivePricing
