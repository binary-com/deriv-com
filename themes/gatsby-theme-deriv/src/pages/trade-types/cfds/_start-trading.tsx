import React from 'react'
import styled from 'styled-components'
import { SmallContainer } from '../components/_style'
import CommonHeaderSection from 'components/elements/common-header-section'
import Button from 'components/custom/_button'
import { StepperView } from 'components/elements'
import useHandleSignup from 'components/hooks/use-handle-signup'
import { useBrowserResize } from 'components/hooks/use-browser-resize'
import { TString } from 'types/generics'
import useBuildVariant from 'features/hooks/use-build-variant'

const ButtonContainer = styled.div`
    margin-left: -1rem;
`
const StepperContainer = styled.div`
    margin-left: 1rem;
`

const StartTrading = () => {
    const { region } = useBuildVariant()
    const [is_mobile] = useBrowserResize()
    const handleSignup = useHandleSignup()
    const CfdItems: { title: TString; subtitle: TString }[] = [
        {
            title: '_t_Practise_t_',
            subtitle: region === "eu"
                ? '_t_Open a demo CFDs account and practise with an unlimited amount of virtual funds._t_'
                : '_t_Open a demo Deriv MT5, Deriv X, or Deriv cTrader account and practise with an unlimited amount of virtual funds._t_',
        },
        {
            title: '_t_Trade_t_',
            subtitle: region === "eu"
                ? '_t_Trade with a real CFDs account. Get access to leverage and trade positions larger than your existing capital._t_'
                : '_t_Trade with a real Deriv MT5, Deriv X, or Deriv cTrader account and get access to high leverage to trade positions larger than your existing capital._t_',
        },
        {
            title: '_t_Withdraw_t_',
            subtitle:
                '_t_Conveniently withdraw your funds through any of our supported withdrawal methods._t_',
        },
    ]

    return (
        <SmallContainer direction="column" ai="flex-start">
            <CommonHeaderSection
                title="_t_Start trading CFDs on Deriv_t_"
                title_font_size="3.2rem"
                margin_title={is_mobile ? '40px 0 30px 0' : '120px 0 50px 0'}
            />
            <StepperContainer>
                <StepperView items={CfdItems} />
            </StepperContainer>
            <ButtonContainer>
                <Button onClick={handleSignup} label="_t_Create free demo account_t_" primary />
            </ButtonContainer>
        </SmallContainer>
    )
}

export default StartTrading
