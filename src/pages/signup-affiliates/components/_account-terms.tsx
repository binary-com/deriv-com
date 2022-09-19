import React, { useState } from 'react'
import styled from 'styled-components'
import AgreementLabel from 'components/custom/_agreement-label'
import { localize } from 'components/localization'
import { Header } from 'components/elements'

const AccountTerms = () => {
    const [non_pep_declaration, setNonPepDeclaration] = useState(false)
    const [tnc_accepted, setTncAccepted] = useState(false)
    const [is_eu_checked, setEuChecked] = useState(false)
    const [is_partner_checked, setPartnerChecked] = useState(false)

    const MainWrapper = styled.div`
        margin: 0 80px;
        display: flex;
        flex-direction: column;

        label {
            padding-bottom: 16px !important;
            line-height: 20px !important;
            display: flex;
        }
    `

    const Line = styled.div`
        width: 100%;
        height: 1px;
        background-color: var(--color-grey-8);
        margin-bottom: 16px;
    `

    const handleChange = (event, type) => {
        switch (type) {
            case 'non_pep_declaration': {
                setNonPepDeclaration(event.currentTarget.checked)
                break
            }
            case 'tnc_accepted': {
                setTncAccepted(event.currentTarget.checked)
                break
            }
            case 'is_partner_checked': {
                setPartnerChecked(event.currentTarget.checked)
                break
            }
            case 'is_eu_checked': {
                setEuChecked(event.currentTarget.checked)
                break
            }
        }
    }
    const AgreementData = [
        {
            link_text: localize('I am not a PEP, and I have not been a PEP in the last 12 months.'),
            is_checked: non_pep_declaration,
            name: 'non_pep_declaration',
        },
        {
            link_text: localize(
                'I have read and accepted Deriv’s terms and conditions, general terms of use and affiliates and intoducing brokers’ terms and conditions.',
            ),
            is_checked: tnc_accepted,
            name: 'tnc_accepted',
        },
        {
            link_text: localize('Please send me information regarding your partnership program.'),
            is_checked: is_partner_checked,
            name: 'is_partner_checked',
        },
        {
            link_text: localize('I’m going to promote Deriv in the EU.'),
            is_checked: is_eu_checked,
            name: 'is_eu_checked',
        },
    ]
    return (
        <MainWrapper>
            <Header type="sub-paragraph" weight="bold" pb="8px">
                {localize('Real accounts are not available to politically exposed persons (PEPs).')}
            </Header>
            <Header type="sub-paragraph" weight="normal" pb="16px">
                {localize(
                    'A politically exposed person (PEP) is someone appointed with a prominent public position. Close associates and family members of a PEP are also considered to be PEPs.',
                )}
            </Header>
            {AgreementData.map(({ link_text, is_checked, name }, index) => {
                return (
                    <>
                        <AgreementLabel
                            key={name}
                            isChecked={is_checked}
                            handleChangeCheckbox={(value) => handleChange(value, name)}
                            link_text={link_text}
                            color="var(--color-black-3)"
                        />

                        {index !== AgreementData.length - 1 && <Line />}
                    </>
                )
            })}
        </MainWrapper>
    )
}
export default AccountTerms
