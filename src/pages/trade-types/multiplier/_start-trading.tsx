import React from 'react'
import styled from 'styled-components'
import Timeline from '../components/_timeline'
import { SmallContainer } from '../components/_style'
import { SectionContainer } from 'components/containers'
import CommonHeaderSection from 'components/elements/common-header-section'
import { StepperView } from 'components/elements'
import Button from 'components/custom/_button'
import Pattern from 'images/common/trade-types/pattern-section-small.png'
import useHandleSignup from 'components/hooks/use-handle-signup'

const StartTrading = () => {
    const handleSignup = useHandleSignup()

    return (
        <SmallContainer direction="column" ai="flex-start">
            <CommonHeaderSection
                title="_t_Start trading multipliers on Deriv_t_"
                title_font_size="3.2rem"
                margin_title="15rem 0 7rem 0"
            />
            <StepperView
                first_step_title="_t_Practise_t_"
                first_step_subtitle={
                    '_t_Open a demo account on Deriv and practise with an unlimited amount of virtual funds on our award-winning platforms._t_'
                }
                second_step_title="_t_Trade_t_"
                second_step_subtitle={
                    '_t_Open a real account, make a deposit, and start trading multipliers for real._t_'
                }
                third_step_title="_t_Withdraw_t_"
                third_step_subtitle="_t_Conveniently withdraw your funds through any of our supported withdrawal methods._t_"
            />
            <Button onClick={handleSignup} label="Create free demo account" primary />
        </SmallContainer>
    )
}

export default StartTrading
