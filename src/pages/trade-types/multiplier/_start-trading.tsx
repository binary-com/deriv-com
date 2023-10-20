import React from 'react'
import { SmallContainer } from '../components/_style'
import CommonHeaderSection from 'components/elements/common-header-section'
import { StepperView } from 'components/elements'
import Button from 'components/custom/_button'
import useHandleSignup from 'components/hooks/use-handle-signup'
import { TString } from 'types/generics'

const MultipliersItems: { title: TString; subtitle: TString }[] = [
    {
        title: '_t_Practise_t_',
        subtitle:
            '_t_Open a demo account on Deriv and practise with an unlimited amount of virtual funds on our award-winning platforms._t_',
    },
    {
        title: '_t_Trade_t_',
        subtitle:
            '_t_Open a real account, make a deposit, and start trading multipliers for real._t_',
    },
    {
        title: '_t_Withdraw_t_',
        subtitle:
            '_t_Conveniently withdraw your funds through any of our supported withdrawal methods._t_',
    },
]

const StartTrading = () => {
    const handleSignup = useHandleSignup()

    return (
        <SmallContainer direction="column" ai="flex-start">
            <CommonHeaderSection
                title="_t_Start trading multipliers on Deriv_t_"
                title_font_size="3.2rem"
                margin_title="15rem 0 7rem 0"
            />
            <StepperView items={MultipliersItems} />
            <Button onClick={handleSignup} label="_t_Create free demo account_t_" primary />
        </SmallContainer>
    )
}

export default StartTrading
