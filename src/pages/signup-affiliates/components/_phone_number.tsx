import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import OtpVerification from 'images/svg/signup-affiliates/code.svg'
import { Header } from 'components/elements'
import { localize } from 'components/localization'
import { Input, Button } from 'components/form'

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
const CodeText = styled(Header)`
    padding-right: 95px;
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
    display: flex;
    flex-direction: row;
    justify-content: center;
    padding-top: 15px;
`

type PhoneNumberProps = {
    updatedData: (e) => void
    onValidate: (e) => void
    affiliate_phone_number: { phone: number; prefix: string }
}

const PhoneNumber = ({ updatedData, onValidate, affiliate_phone_number }: PhoneNumberProps) => {
    const [phone, setPhone] = useState(affiliate_phone_number.phone)
    const [phonecode, setPhoneCode] = useState(affiliate_phone_number.prefix)

    useEffect(() => {
        updatedData({
            phone,
            phonecode,
        })
    }, [phone, phonecode])

    // need to initialize a type of current wizard
    // in future can pass or set phone prefix
    useEffect(() => {
        onValidate(phone)
    }, [onValidate, phone])

    const handlePhoneNumber = (e) => {
        const { value } = e.target
        setPhone(value)
    }

    const OtpNumbers: number[] = [4, 3, 1, 2]
    return (
        <>
            <Header as="h2" align="center" type="paragraph-1" pb="24px" weight="normal">
                {localize('We will send you a one-time verification code')}
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
                    onChange={handlePhoneNumber}
                    height="40px"
                    autoFocus={true}
                    autoComplete="off"
                    focus_border="var(--color-grey-7)"
                />

                <ButtonCode disabled tertiary>
                    {localize('Send code')}
                </ButtonCode>
            </CodeContainer>
            <CodeText align="center" color="grey" type="paragraph-2" weight="400">
                {localize('Didn’t receive your code? Try again in 59 seconds')}
            </CodeText>

            <OtpContainer>
                {OtpNumbers.map((index) => {
                    return <OtpCard key={`option-number-${index}`} value={index} />
                })}
            </OtpContainer>
        </>
    )
}
export default PhoneNumber
