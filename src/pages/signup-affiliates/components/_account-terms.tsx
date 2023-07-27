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
    name: string
    optional?: boolean
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
    const [terms_of_use, setTermsOfUse] = useState(affiliate_terms_of_use)

    const AgreementData: AgreementDataType[] = [
        {
            link_text: '_t_I am not a PEP, and I have not been a PEP in the last 12 months._t_',
            name: 'non_pep_declaration',
        },
        {
            link_text: '_t_I have read and accepted <0>Deriv’s terms and conditions</0>_t_',
            name: 'tnc_accepted',
        },
        {
            link_text:
                '_t_I have read and accepted <0>Deriv’s general terms of use and affiliates and introducing brokers’ terms and conditions</0>_t_',
            name: 'general_terms',
        },
        {
            link_text:
                '_t_I consent to receive promotional materials and notifications regarding your partnership program._t_',
            name: 'is_partner_checked',
            optional: true,
        },
        {
            link_text: '_t_I’m going to promote Deriv in the EU._t_',
            name: 'is_eu_checked',
            optional: true,
        },
    ]

    const validate =
        terms_of_use['non_pep_declaration'] &&
        terms_of_use['tnc_accepted'] &&
        terms_of_use['general_terms']

    useEffect(() => {
        onValidate(validate)
    }, [onValidate, validate])

    useEffect(() => {
        updateData({
            ...terms_of_use,
        })
    }, [terms_of_use])

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
            {AgreementData.map(({ link_text, link_url, name, optional }, index) => {
                return (
                    <>
                        <Flex.Box key={name} align={'center'} pb={'8x'}>
                            <CheckBox
                                type={'checkbox'}
                                checked={terms_of_use[name]}
                                onClick={() =>
                                    setTermsOfUse({
                                        ...terms_of_use,
                                        [name]: !affiliate_terms_of_use[name],
                                    })
                                }
                            />
                            <Flex.Box direction={'col'} align={'start'}>
                                <Typography.Paragraph size={'large'}>
                                    <Localize
                                        translate_text={link_text}
                                        components={[
                                            <LocalizedLinkText
                                                key={0}
                                                href="/terms-and-conditions/#clients"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                color="red"
                                            />,
                                        ]}
                                    />
                                </Typography.Paragraph>
                                {optional && (
                                    <Typography.Paragraph size={'small'} style={{ color: 'grey' }}>
                                        <Localize translate_text={'_t_[Optional]_t_'} />
                                    </Typography.Paragraph>
                                )}
                            </Flex.Box>
                        </Flex.Box>
                        {index !== AgreementData.length - 1 && <Line />}
                    </>
                )
            })}
        </MainWrapper>
    )
}
export default AccountTerms
