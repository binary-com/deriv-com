import React, { useState } from 'react'
import styled from 'styled-components'
import { Header } from 'components/elements'
import { localize } from 'components/localization'
import OtpVerification from 'images/svg/signup-affiliates/code 2.svg'
import { Input, Button } from 'components/form'

const PhoneNumber = () => {
    const [name, setName] = React.useState('')
    const [name_error_msg, setNameErrorMsg] = React.useState('')

    const handleInputNameChange = (e) => {
        const { value } = e.target
        setName(value)
    }
    const ImageContainer = styled.div`
        display: flex;
        justify-content: center;
    `
    const InputWrapper = styled.div`
        position: relative;
        width: 100%;
        margin: 2.4rem 0;
    `
    return (
        <>
            <Header as="h2" align="center" type="paragraph-1" pb="24px" weight="normal">
                {localize('We will send you a one-time verification code')}
            </Header>
            <ImageContainer>
                <img src={OtpVerification} width={240} height={192} />
            </ImageContainer>

            <InputWrapper>
                <Input
                    required
                    id="name"
                    name="number"
                    type="text"
                    error={name_error_msg}
                    value={name}
                    onChange={handleInputNameChange}
                    autoComplete="off"
                    maxLength="70"
                    height="40px"
                    focus_border="var(--color-grey-7)"
                />
            </InputWrapper>
        </>
    )
}
export default PhoneNumber
