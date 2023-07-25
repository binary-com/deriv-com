import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import validation from '../validations/_validations'
import AffiliateInput from '../utils/_affiliate-input'
import { Header } from 'components/elements'
import { Localize } from 'components/localization'
import OtpVerification from 'images/svg/signup-affiliates/code.svg'

const ImageContainer = styled.div`
    display: flex;
    justify-content: center;
`
const CodeWrapper = styled.div`
    display: flex;
    align-items: flex-start;
    justify-content: center;
    padding-block: 10px;
    padding-inline: 16px;
    border-radius: 4px 0px 0px 4px;
    background: var(--color-grey-8);
    border: 1px solid var(--color-grey-7);
`
const CountryCode = styled.div`
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
    color: var(--color-grey-5);
`
const CodeContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: center;
    padding-top: 24px;
    border-radius: 4px;
`
const PhoneNumberInput = styled(AffiliateInput)`
    padding-block: 10px;
    padding-inline: 16px;
    min-inline-size: 192px;
    border-radius: 0px;
`

// const ButtonCode = styled(Button)`
//     border-radius: 0 4px;
// `
// const CodeText = styled(Header)`
//     padding-right: 95px;
// `

type PhoneNumberProps = {
    updatedData: (value: { phone: string; prefix: string }) => void
    onValidate: (valid: number | true) => void
    affiliate_phone_number: { phone: string; prefix: string }
}

const PhoneNumber = ({ updatedData, onValidate, affiliate_phone_number }: PhoneNumberProps) => {
    const [phone, setPhone] = useState(affiliate_phone_number.phone)
    const [phone_error_msg, setPhoneErrorMsg] = useState('')

    useEffect(() => {
        updatedData({
            ...affiliate_phone_number,
            phone,
        })
    }, [phone])

    // need to initialize a type of current wizard
    // in future can pass or set phone prefix
    const validate = phone && !phone_error_msg
    useEffect(() => {
        onValidate(validate)
    }, [onValidate, validate])

    const handlePhoneNumber = (e) => {
        const { value } = e.target
        setPhone(value)
        setPhoneErrorMsg(validation.phone(value))
    }

    return (
        <>
            <Header as="h2" align="center" type="paragraph-1" pb="24px" weight="normal">
                <Localize translate_text={'_t_We will send you a one-time verification code_t_'} />
            </Header>
            <ImageContainer>
                <img src={OtpVerification} width={240} height={192} />
            </ImageContainer>

            <CodeContainer>
                <CodeWrapper>
                    <CountryCode>
                        <span>{`+${affiliate_phone_number.prefix}`}</span>
                    </CountryCode>
                </CodeWrapper>

                <PhoneNumberInput
                    id="phone"
                    value={phone}
                    error={phone_error_msg}
                    onChange={handlePhoneNumber}
                    handleError={() => {
                        setPhone('')
                        setPhoneErrorMsg('')
                    }}
                    focus_border="var(--color-grey-7)"
                    autoComplete="off"
                    autoFocus
                    required
                />

                {/*<ButtonCode disabled tertiary>*/}
                {/*    <Localize translate_text={'_t_Send code_t_'} />*/}
                {/*</ButtonCode>*/}
            </CodeContainer>
            {/*<CodeText align="center" color="grey" type="paragraph-2" weight="400">*/}
            {/*    <Localize*/}
            {/*        translate_text={'_t_Didn’t receive your code? Try again in 59 seconds_t_'}*/}
            {/*    />*/}
            {/*</CodeText>*/}
        </>
    )
}
export default PhoneNumber
