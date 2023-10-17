import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { WizardStepProps } from '../_types'
import affiliate_validation from '../validations/_affilaite_validation'
import AffiliateInput from '../utils/_affiliate-input'
import Image from 'features/components/atoms/image'
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
    border-radius: 4px 0 0 4px;
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
    border-radius: 0;
`

const PhoneNumber = ({ updateData, onValidate, affiliate_account }: WizardStepProps) => {
    const [phone, setPhone] = useState(affiliate_account.phone_number.phone)
    const [phone_error_msg, setPhoneErrorMsg] = useState('')

    useEffect(() => {
        updateData({
            ...affiliate_account.phone_number,
            phone,
        })
    }, [phone])

    const validate = phone && !phone_error_msg
    useEffect(() => {
        onValidate(validate)
    }, [onValidate, validate])

    const handlePhoneNumber = (e) => {
        const { value } = e.target
        setPhone(value)
        setPhoneErrorMsg(affiliate_validation.phone(value))
    }

    const input = document.getElementById('phone')
    input?.addEventListener('keydown', function (e) {
        if (['.', ',', '-', '+', 'e'].includes(e.key)) {
            e.preventDefault()
        }
    })

    return (
        <>
            <Header as="div" align="center" type="paragraph-1" pb="24px" weight="normal">
                <Localize translate_text={'_t_Please provide your phone number_t_'} />
            </Header>
            <ImageContainer>
                <Image src={OtpVerification} width={240} height={192} />
            </ImageContainer>
            <CodeContainer>
                <CodeWrapper>
                    <CountryCode>
                        <span>{`+${affiliate_account.phone_number.prefix}`}</span>
                    </CountryCode>
                </CodeWrapper>
                <PhoneNumberInput
                    required
                    id="phone"
                    type="number"
                    value={phone}
                    error={phone_error_msg}
                    onChange={handlePhoneNumber}
                    handleError={() => {
                        setPhone('')
                        setPhoneErrorMsg('')
                    }}
                />
            </CodeContainer>
        </>
    )
}
export default PhoneNumber
