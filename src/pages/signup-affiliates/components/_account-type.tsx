import React, { useState } from 'react'
import styled from 'styled-components'
import IndividualIcon from 'images/svg/signup-affiliates/individual 2.svg'
import BusinessIcon from 'images/svg/signup-affiliates/company 2.svg'
import Card, { CardProps } from 'components/custom/_card'
import { localize, Localize } from 'components/localization'
import { Header } from 'components/elements'

type AccountTypeProps = {
    updateData: (e) => void
    cardSelected: number
}
const AccountType = ({ updateData, cardSelected }: AccountTypeProps) => {
    const MainWrapper = styled.div`
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    `
    const [selected_item, setSelectedItem] = useState(cardSelected)

    const cards: CardProps[] = [
        {
            icon: IndividualIcon,
            title: <Localize translate_text="Individual" />,
            description: <Localize translate_text="Register as individual enterpreneur" />,
        },
        {
            icon: BusinessIcon,
            title: <Localize translate_text="Business/Corporate" />,
            description: <Localize translate_text="Register as a company or business unit" />,
        },
    ]

    return (
        <MainWrapper>
            <Header align="center" type="paragraph-1" pb="8px" weight="normal">
                {localize('Choose which plan you would like to subscribe to:')}
            </Header>
            {cards.map(({ icon, title, description }, index) => {
                return (
                    <Card
                        key={`selectedkey-${index}`}
                        icon={icon}
                        title={title}
                        description={description}
                        selected={selected_item === index ? true : false}
                        onClick={() => {
                            setSelectedItem(index)
                            updateData(index)
                        }}
                    />
                )
            })}
        </MainWrapper>
    )
}
export default AccountType
