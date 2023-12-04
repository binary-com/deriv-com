import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { WizardStepProps } from '../_types'
import AccountCard, { AccountCardProps, MainWrapper } from '../utils/_account-card'
import { Header } from 'components/elements'
import { Localize } from 'components/localization'
import IndividualIcon from 'images/svg/signup-affiliates/individual.svg'
import BusinessIcon from 'images/svg/signup-affiliates/company.svg'
import device from 'themes/device'

const StyledHeader = styled(Header)`
    @media ${device.tabletL} {
        text-align: left;
        inline-size: 328px;
        margin: 0 auto;
    }
`

const types: AccountCardProps[] = [
    {
        value: 1,
        icon: IndividualIcon,
        title: '_t_Individual_t_',
        description: '_t_Register for an individual account._t_',
    },
    {
        value: 2,
        icon: BusinessIcon,
        title: '_t_Company_t_',
        description: '_t_Register for a company account._t_',
    },
]
const AccountType = ({ updateData, affiliate_account, onValidate }: WizardStepProps) => {
    const [account_type, setAccountType] = useState(affiliate_account.account_type)

    useEffect(() => {
        onValidate(!!account_type)
    }, [onValidate, account_type])

    useEffect(() => {
        updateData(account_type)
    }, [account_type])

    return (
        <MainWrapper>
            <StyledHeader as={'h3'} align="center" type="paragraph-1" pb="8px" weight="normal">
                <Localize
                    translate_text={'_t_Choose the type of partner account you want to register_t_'}
                />
            </StyledHeader>
            {types.map(({ value, icon, title, description }) => {
                return (
                    <AccountCard
                        key={value}
                        icon={icon}
                        title={title}
                        description={description}
                        selected={account_type == value}
                        onClick={() => setAccountType(value)}
                    />
                )
            })}
        </MainWrapper>
    )
}
export default AccountType
