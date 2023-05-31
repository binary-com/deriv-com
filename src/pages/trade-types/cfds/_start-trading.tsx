import React from 'react'
import styled from 'styled-components'
import { SmallContainer } from '../components/_style'
import CommonHeaderSection from 'components/elements/common-header-section'
import Button from 'components/custom/_button'
import { StepperView } from 'components/elements'
import useRegion from 'components/hooks/use-region'
import useHandleSignup from 'components/hooks/use-handle-signup'
import { useBrowserResize } from 'components/hooks/use-browser-resize'

const ButtonContainer = styled.div`
    margin-left: -1rem;
`

const StepperContainer = styled.div`
    margin-left: 1rem;
`

const StartTrading = () => {
    const { is_eu } = useRegion()
    const [is_mobile] = useBrowserResize()

    const CfdItems = [
        {
            title: 'Practise',
            subtitle: is_eu
                ? 'Open a demo CFDs account and practise with an unlimited amount of virtual funds.'
                : 'Open a demo Deriv MT5 or demo Deriv X account and practise with an unlimited amount of virtual funds.',
        },
        {
            title: 'Trade',
            subtitle: is_eu
                ? 'Trade with a real CFDs account. Get access to leverage and trade positions larger than your existing capital.'
                : 'Trade with a real Deriv MT5 or real Deriv X account and get access to high leverage to trade positions larger than your existing capital.',
        },
        {
            title: 'Withdraw',
            subtitle:
                'Conveniently withdraw your funds through any of our supported withdrawal methods.',
        },
    ]

    const handleSignup = useHandleSignup()
    return (
        <>
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
                    <Button onClick={handleSignup} label="Create free demo account" primary />
                </ButtonContainer>
            </SmallContainer>
        </>
    )
}

export default StartTrading
