import React, { useState } from 'react'
import Signup, { Appearances } from 'components/custom/signup'
import CtraderWrapper from 'components/custom/_ctrader-wrapper'

const CtraderSignup = () => {
    const [submit_state, setSubmitState] = useState('')
    const [email, setEmail] = useState('')

    const updateSubmitState = (
        status_arg: React.SetStateAction<string>,
        email_arg: React.SetStateAction<string>,
    ) => {
        setSubmitState(status_arg)
        setEmail(email_arg)
    }

    return (
        <CtraderWrapper>
            <Signup
                appearance={Appearances.cTrader}
                bgColor="grey-14"
                onSubmit={updateSubmitState}
                submit_state={submit_state}
                email={email}
                autofocus={true}
            />
        </CtraderWrapper>
    )
}

export default CtraderSignup
