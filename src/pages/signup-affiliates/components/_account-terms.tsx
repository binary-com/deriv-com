import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { Localize } from 'components/localization'
import { Header, LocalizedLinkText } from 'components/elements'
import Flex from 'features/components/atoms/flex-box'
import Typography from 'features/components/atoms/typography'
import { TString } from 'types/generics'

type AgreementDataType = {
    link_text: TString
    link_url?: string
    setCheck: React.Dispatch<React.SetStateAction<boolean>>
    name: string
}
type AccountTermsProps = {
    updateData: (e) => void
    affiliate_terms_of_use: {
        non_pep_declaration: boolean
        tnc_accepted: boolean
        general_terms: boolean
        is_eu_checked: boolean
        is_partner_checked: boolean
    }
    onValidate: (e) => void
}

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
const CheckBox = styled.input`
    accent-color: var(--color-red);
    min-block-size: 16px;
    min-inline-size: 16px;
    margin-inline-end: 8px;
`

const AccountTerms = ({ affiliate_terms_of_use, updateData, onValidate }: AccountTermsProps) => {
    const [non_pep_declaration, setNonPepDeclaration] = useState(false)
    const [tnc_accepted, setTncAccepted] = useState(false)
    const [general_terms, setGeneralTermsAccepted] = useState(false)
    const [is_eu_checked, setEuChecked] = useState(false)
    const [is_partner_checked, setPartnerChecked] = useState(false)

    const AgreementData: AgreementDataType[] = [
        {
            link_text: '_t_I am not a PEP, and I have not been a PEP in the last 12 months._t_',
            setCheck: setNonPepDeclaration,
            name: 'non_pep_declaration',
        },
        {
            link_text: '_t_I have read and accepted <0>Deriv’s terms and conditions</0>_t_',
            setCheck: setTncAccepted,
            name: 'tnc_accepted',
        },
        {
            link_text:
                '_t_I have read and accepted <0>Deriv’s general terms of use and affiliates and introducing brokers’ terms and conditions</0>_t_',
            setCheck: setGeneralTermsAccepted,
            name: 'general_terms',
        },
        {
            link_text: '_t_Please send me information regarding your partnership program._t_',
            setCheck: setPartnerChecked,
            name: 'is_partner_checked',
        },
        {
            link_text: '_t_I’m going to promote Deriv in the EU._t_',
            setCheck: setEuChecked,
            name: 'is_eu_checked',
        },
    ]

    useEffect(() => {
        onValidate(
            non_pep_declaration &&
                tnc_accepted &&
                general_terms &&
                is_eu_checked &&
                is_partner_checked,
        )
    }, [onValidate, affiliate_terms_of_use])

    useEffect(() => {
        updateData({
            ...affiliate_terms_of_use,
            non_pep_declaration,
            tnc_accepted,
            general_terms,
            is_eu_checked,
            is_partner_checked,
        })
    }, [non_pep_declaration, tnc_accepted, general_terms, is_eu_checked, is_partner_checked])

    return (
        <MainWrapper>
            <Header type="sub-paragraph" weight="bold" pb="8px">
                <Localize
                    translate_text={
                        '_t_Real accounts are not available to politically exposed persons (PEPs)._t_'
                    }
                />
            </Header>
            <Header type="sub-paragraph" weight="normal" pb="16px">
                <Localize
                    translate_text={
                        '_t_A politically exposed person (PEP) is someone appointed with a prominent public position. Close associates and family members of a PEP are also considered to be PEPs._t_'
                    }
                />
            </Header>
            {AgreementData.map(({ link_text, link_url, setCheck, name }, index) => {
                return (
                    <>
                        <Flex.Box key={name} align={'center'} pb={'8x'} md={{ pb: '8x' }}>
                            <CheckBox type={'checkbox'} onClick={() => setCheck(true)} />
                            <Typography.Paragraph size={'large'}>
                                <Localize
                                    translate_text={link_text}
                                    components={[
                                        <LocalizedLinkText
                                            key={0}
                                            target="_blank"
                                            href="/terms-and-conditions/#clients"
                                            rel="noopener noreferrer"
                                            color="red"
                                        />,
                                    ]}
                                />
                            </Typography.Paragraph>
                        </Flex.Box>
                        {index !== AgreementData.length - 1 && <Line />}
                    </>
                )
            })}
        </MainWrapper>
    )
}
export default AccountTerms
