import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { WizardStepProps } from '../_types'
import { Localize, LocalizedLink } from 'components/localization'
import { Header } from 'components/elements'
import { useIsRtl } from 'components/hooks/use-isrtl'
import Flex from 'features/components/atoms/flex-box'
import Typography from 'features/components/atoms/typography'
import { TString } from 'types/generics'
import device from 'themes/device'

type AgreementDataType = {
    link_text: TString
    name: string
}
const StyledHeader = styled(Header)<{ is_rtl?: boolean }>`
    @media ${device.tabletL} {
        text-align: ${({ is_rtl }) => (is_rtl ? 'right' : 'left')};
        margin: 0 auto;
    }
`
const MainWrapper = styled.div`
    margin: 0 80px;
    display: flex;
    flex-direction: column;

    @media ${device.tabletL} {
        margin: 0 auto;
        inline-size: 95%;
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

const AccountTerms = ({ affiliate_account, updateData, onValidate }: WizardStepProps) => {
    const affiliate_data = affiliate_account.terms_of_use
    const [terms_of_use, setTermsOfUse] = useState(affiliate_data)

    const is_rtl = useIsRtl()

    const AgreementData: AgreementDataType[] = [
        {
            link_text: '_t_I am not a PEP, and I have not been a PEP in the last 12 months._t_',
            name: 'non_pep_declaration_accepted',
        },
        {
            link_text: '_t_I have read and accepted <0>Deriv’s terms and conditions</0>_t_',
            name: 'tnc_accepted',
        },
        {
            link_text:
                '_t_I have read and accepted <0>Deriv’s general terms of use and affiliates and introducing brokers’ terms and conditions</0>_t_',
            name: 'general_terms_accepted',
        },
        {
            link_text:
                '_t_I consent to receive promotional materials and notifications regarding your partnership program._t_',
            name: 'is_partner_checked',
        },
    ]

    const validate =
        terms_of_use['non_pep_declaration_accepted'] &&
        terms_of_use['tnc_accepted'] &&
        terms_of_use['general_terms_accepted']

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
            <StyledHeader as={'h3'} align="center" type="paragraph-1" pb="8px" is_rtl={is_rtl}>
                <Localize
                    translate_text={
                        '_t_Real accounts are not available to politically exposed persons (PEPs)._t_'
                    }
                />
            </StyledHeader>
            <Header as={'h4'} type="paragraph-1" weight="normal" pb="16px">
                <Localize
                    translate_text={
                        '_t_A politically exposed person (PEP) is someone appointed with a prominent public position. Close associates and family members of a PEP are also considered to be PEPs._t_'
                    }
                />
            </Header>

            {AgreementData.map(({ link_text, name }, index) => {
                return (
                    <>
                        <Flex.Box key={name} align={'center'} pb={'8x'}>
                            <CheckBox
                                type={'checkbox'}
                                checked={terms_of_use[name]}
                                onClick={() =>
                                    setTermsOfUse({
                                        ...terms_of_use,
                                        [name]: !affiliate_data[name],
                                    })
                                }
                            />
                            <Flex.Box direction={'col'} align={'start'}>
                                <Typography.Paragraph>
                                    <Localize
                                        translate_text={link_text}
                                        components={[
                                            <LocalizedLink
                                                style={{ color: 'red', textDecoration: 'none' }}
                                                key={0}
                                                to="/terms-and-conditions/#business-partners"
                                                target="_blank"
                                                external
                                                rel="noopener noreferrer"
                                            />,
                                        ]}
                                    />
                                </Typography.Paragraph>
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
