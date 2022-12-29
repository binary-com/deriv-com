import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import AgreementLabel from 'components/custom/_agreement-label'
import { localize } from 'components/localization'
import { Header } from 'components/elements'
import { StyledLink } from 'components/elements/link'

type TAffiliateTerms = {
    non_pep_declaration: boolean
    tnc_accepted: boolean
    is_brokers_checked: boolean
    is_eu_checked: boolean
    is_partner_checked: boolean
}

type AccountTermsProps = {
    updatedData: (configs: TAffiliateTerms) => void
    onValidate: (validatex: boolean) => void
    affiliate_terms_data: TAffiliateTerms
}

const AccountTerms = ({ affiliate_terms_data, updatedData, onValidate }: AccountTermsProps) => {
    const [non_pep_declaration, setNonPepDeclaration] = useState(
        affiliate_terms_data.non_pep_declaration,
    )
    const [tnc_accepted, setTncAccepted] = useState(affiliate_terms_data.tnc_accepted)
    const [is_brokers_checked, setBrokersChecked] = useState(
        affiliate_terms_data.is_brokers_checked,
    )
    const [is_eu_checked, setEuChecked] = useState(affiliate_terms_data.is_eu_checked)
    const [is_partner_checked, setPartnerChecked] = useState(
        affiliate_terms_data.is_partner_checked,
    )

    useEffect(() => {
        updatedData({
            non_pep_declaration,
            tnc_accepted,
            is_brokers_checked,
            is_eu_checked,
            is_partner_checked,
        })
    }, [non_pep_declaration, tnc_accepted, is_brokers_checked, is_eu_checked, is_partner_checked])

    const validate = !(!non_pep_declaration || !tnc_accepted || !is_brokers_checked)

    useEffect(() => {
        onValidate(validate)
    }, [onValidate, validate])

    const MainWrapper = styled.div`
        margin: 0 60px;
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
            case 'is_brokers_checked': {
                setBrokersChecked(event.currentTarget.checked)
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
            link_text: localize('I have read and accepted <0> Deriv’s terms and conditions </0>'),
            is_checked: tnc_accepted,
            name: 'tnc_accepted',
            url: '/terms-and-conditions/#clients',
        },
        {
            link_text: localize(
                'I have read and accepted <0>Deriv’s general terms of use and affiliates and introducing brokers’ terms and conditions </0>',
            ),
            is_checked: is_brokers_checked,
            name: 'is_brokers_checked',
            url: '/tnc/business-partners-affiliates-and-introducing-brokers.pdf',
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
            {AgreementData.map(({ link_text, is_checked, name, url }, index) => {
                return (
                    <>
                        <AgreementLabel
                            key={index}
                            isChecked={is_checked}
                            handleChangeCheckbox={(value) => handleChange(value, name)}
                            link_text={link_text}
                            color="var(--color-black-3)"
                        >
                            <StyledLink
                                external
                                size="1.5rem"
                                to={url}
                                target="_blank"
                                rel="noopener noreferrer"
                            />
                        </AgreementLabel>

                        {index !== AgreementData.length - 1 && <Line />}
                    </>
                )
            })}
        </MainWrapper>
    )
}
export default AccountTerms
