import React from 'react'
import {
    NumberWrapper,
    SectionContainerWrapper,
    StyledContainer,
    StyledSectionContainer,
    StyledText,
    SubtitleHeader,
} from './_style'
import { Container } from 'components/containers'
import { Localize } from 'components/localization'
import { Header } from 'components/elements'
import { TString } from 'types/generics'
import { usePageLoaded } from 'components/hooks/use-page-loaded'

type NumbersProps = {
    earn_text: TString
}

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

const Numbers = ({ earn_text }: NumbersProps) => {
    const [is_mounted] = usePageLoaded()

    if (!is_mounted) return null

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
                                <StyledText align="center">
                                    <Localize translate_text={subtitle} />
                                </StyledText>
                            </NumberWrapper>
                        ))}
                    </StyledContainer>
                </SectionContainerWrapper>
            </Container>
        </StyledSectionContainer>
    )
}

export default Numbers
