import React from 'react'
import styled from 'styled-components'
import { Article, ArticleProps } from './_article'
import { ArticleWrapper, ExternalLink, StyledHeader } from './_help-centre-style'
import device from 'themes/device'
import { usePageLoaded } from 'components/hooks/use-page-loaded'
import { Text } from 'components/elements'
import { localize, Localize, WithIntl } from 'components/localization'

const StyledLink = styled(ExternalLink)`
    @media ${device.tabletL} {
        font-size: 16px;
    }
`

const WhatAreMultipliers = ({ text }: ArticleProps) => (
    <ArticleWrapper>
        <StyledHeader as="h4">{text}</StyledHeader>
        <Text>
            <Localize
                translate_text="Multipliers (also known as multiplier options) is a trade type that gives you an opportunity to amplify your profit without risking more than your stake. To find out more, visit <0>the Multipliers page</0>."
                components={[
                    <StyledLink
                        to={'/trade-types/multiplier'}
                        target="_blank"
                        external
                        weight="bold"
                        rel="noopener noreferrer"
                        key={0}
                    />,
                ]}
            />
        </Text>
    </ArticleWrapper>
)

const HowTradeMultipliers = ({ text }: ArticleProps) => (
    <ArticleWrapper>
        <StyledHeader as="h4">{text}</StyledHeader>
        <Text>
            <Localize
                translate_text="Watch <0>this video</0> to know more about trading multipliers."
                components={[
                    <StyledLink
                        to={'https://www.youtube.com/watch?v=viS-dhJuHek&t=1s&ab_channel=Deriv'}
                        target="_blank"
                        external
                        weight="bold"
                        rel="noopener noreferrer"
                        key={0}
                    />,
                ]}
            />
        </Text>
    </ArticleWrapper>
)

const MultipliersArticle = () => {
    const [is_mounted] = usePageLoaded(false) // needed to fix tab highlighting not being rerendered during first load

    return (
        <div>
            <Article
                header="Multipliers"
                title={localize('Help centre | Frequently asked questions | Multipliers | Deriv')}
                description={localize('Frequently asked questions - Multipliers')}
            >
                <WhatAreMultipliers
                    text={localize('What are multipliers?')}
                    label="what-are-multipliers"
                    is_mounted={is_mounted}
                />
                <HowTradeMultipliers
                    text={localize('How do I trade multipliers?')}
                    label="how-trade-multipliers"
                    is_mounted={is_mounted}
                />
            </Article>
        </div>
    )
}

export default WithIntl()(MultipliersArticle)
