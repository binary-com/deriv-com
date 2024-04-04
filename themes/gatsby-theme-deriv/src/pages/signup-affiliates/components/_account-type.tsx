import React, { useEffect, useState } from 'react'
import { WizardStepProps } from '../_types'
import { StyledHeader } from '../utils/_affiliate-header'
import AccountCard, { AccountCardProps, MainWrapper } from '../utils/_account-card'
import { Localize } from 'components/localization'
import { useIsRtl } from 'components/hooks/use-isrtl'
import IndividualIcon from 'images/svg/signup-affiliates/individual.svg'
import BusinessIcon from 'images/svg/signup-affiliates/company.svg'

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
const AccountType = ({
    affiliate_account,
    updateData,
    onValidate,
}: WizardStepProps<'account_type'>) => {
    const [account_type, setAccountType] = useState(affiliate_account.account_type)
    const is_rtl = useIsRtl()

    useEffect(() => {
        updateData(account_type)
        onValidate(!!account_type)
    }, [account_type])

    return (
        <MainWrapper>
            <StyledHeader
                as="h3"
                align="center"
                type="paragraph-1"
                pb="8px"
                weight="normal"
                is_rtl={is_rtl}
            >
                <Localize translate_text="_t_Choose the type of partner account you want to register_t_" />
            </StyledHeader>
            <ul>
                {types.map(({ value, icon, title, description }) => {
                    return (
                        <AccountCard
                            key={`account-type-${value}`}
                            icon={icon}
                            title={title}
                            description={description}
                            selected={account_type == value}
                            onClick={() => setAccountType(value)}
                        />
                    )
                })}
            </ul>
        </MainWrapper>
    )
}
export default AccountType
