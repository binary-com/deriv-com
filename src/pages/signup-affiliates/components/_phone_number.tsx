import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import validation from '../validations/_affiliate_validation'
import OtpVerification from 'images/svg/signup-affiliates/code.svg'
import { Header } from 'components/elements'
import { localize } from 'components/localization'
import { Input, Button } from 'components/form'

type PhoneNumberProps = {
    onValidate: (e) => void
    affiliate_phone_number: string
    updatedData: (e) => void
}

const PhoneNumber = ({ onValidate, affiliate_phone_number, updatedData }: PhoneNumberProps) => {
    const [phone, setPhone] = useState(affiliate_phone_number)
    const [phone_error_msg, setPhoneErrorMsg] = useState('')
    const [phonecode, setPhoneCode] = useState('44')

    useEffect(() => {
        updatedData(phone)
    }, [phone])

    const handlePhoneNumber = (e) => {
        const { value } = e.target
        setPhone(value)
        setPhoneErrorMsg(validation.phone(value))
    }

    const ImageContainer = styled.div`
        display: flex;
        justify-content: center;
    `

    const CodeWrapper = styled.div`
        width: 58px;
        height: 40px;
        background: var(--color-grey-8);
        border: 1px solid var(--color-grey-7);
        border-radius: 4px 0;
        align-items: center;
        display: flex;
        justify-content: center;
    `
    const CodeContainer = styled.div`
        display: flex;
        flex-direction: row;
        justify-content: center;
        padding-top: 20px;
    `

    const ButtonCode = styled(Button)`
        border-radius: 0 4px;
    `
    const PhoneNumberInput = styled(Input)`
        border-radius: 0;
        width: 240px;
    `

    const CountryCode = styled.div`
        font-weight: 400;
        font-size: 14px;
        line-height: 20px;
        color: var(--color-grey-5);
    `

    const OtpCard = styled.input`
        height: 40px;
        width: 40px;
        display: flex;
        text-align: center;
        color: var(--color-grey-7);
        border: 1px solid var(--color-grey-7);
        margin-left: 15px;
    `

    const OtpContainer = styled.form`
        display: none;
        flex-direction: row;
        justify-content: center;
        padding-top: 15px;
    `
    const validate = !(!phone || phone_error_msg)

    useEffect(() => {
        onValidate(validate)
    }, [onValidate, validate])

    const OtpNumbers: number[] = [4, 3, 1, 2]
    return (
        <>
            <Header as="h2" align="center" type="paragraph-1" pb="24px" weight="normal">
                {localize('Please enter a valid phone number')}
            </Header>
            <ImageContainer>
                <img src={OtpVerification} width={240} height={192} />
            </ImageContainer>

            <CodeContainer>
                <CodeWrapper>
                    <CountryCode>{phonecode && <span>{`+${phonecode}`}</span>}</CountryCode>
                </CodeWrapper>

                <PhoneNumberInput
                    required
                    id="phone"
                    value={phone}
                    name="phone"
                    onChange={handlePhoneNumber}
                    error={phone_error_msg}
                    height="40px"
                    autoFocus={true}
                    autoComplete="off"
                    focus_border="var(--color-grey-7)"
                />

                <ButtonCode disabled tertiary="true">
                    {localize('Send code')}
                </ButtonCode>
            </CodeContainer>

            <OtpContainer>
                {OtpNumbers.map((index) => {
                    return <OtpCard key={`option-number-${index}`} value={index} />
                })}
            </OtpContainer>
        </>
    )
}
export default PhoneNumber
