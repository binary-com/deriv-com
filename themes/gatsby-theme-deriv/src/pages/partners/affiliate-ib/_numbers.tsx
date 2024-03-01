import React from 'react'
import {
    NumberWrapper,
    SectionContainerWrapper,
    StyledContainer,
    StyledSectionContainer,
    SubtitleHeader,
    StyledNumberText,
} from './_style'
import { Container } from 'components/containers'
import { Header } from 'components/elements'
import { Localize } from 'components/localization'
import { TString } from 'types/generics'
import useBuildVariant from 'features/hooks/use-build-variant'

type ItemsType = {
    title: string
    subtitle: TString
}[]

const items: ItemsType = [
    { title: '60K+', subtitle: '_t_members_t_' },
    { title: '$47M+', subtitle: '_t_paid out since inception_t_' },
    { title: '190+', subtitle: '_t_countries_t_' },
    { title: '1M+', subtitle: '_t_clients_t_' },
]

const Numbers = () => {
    const { region } = useBuildVariant()
    const earn_text = region === "row" ? '_t_Earn up to 45% lifetime commission with an online trading provider that enables anyone to trade on several popular financial markets with the utmost convenience. Deriv Group Ltd — the owner of Deriv.com — has a proven track record of running successful referral programmes with prompt payouts._t_' : "_t_Earn commissions on your referrals' deposits, relying on our track record of prompt payouts and a successful affiliate programme. Your referred clients will enjoy a seamless experience, advanced trading tools, and a wide range of financial instruments on our platforms._t_";

    return (
        <StyledSectionContainer padding="8rem 0 4rem">
            <Container direction="column">
                <SubtitleHeader as="p" type="sub-section-title" weight="normal" align="center">
                    <Localize translate_text={earn_text} />
                </SubtitleHeader>
                <SectionContainerWrapper>
                    <StyledContainer justify="space-around">
                        {items.map(({ title, subtitle }, index) => (
                            <NumberWrapper key={index}>
                                <Header as="p" type="page-title" align="center">
                                    {title}
                                </Header>
                                <StyledNumberText align="center">
                                    <Localize translate_text={subtitle} />
                                </StyledNumberText>
                            </NumberWrapper>
                        ))}
                    </StyledContainer>
                </SectionContainerWrapper>
            </Container>
        </StyledSectionContainer>
    )
}

export default Numbers
