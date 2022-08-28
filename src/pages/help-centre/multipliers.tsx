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
                translate_text="_t_Multipliers (also known as multiplier options) is a trade type that gives you an opportunity to amplify your profit without risking more than your stake. To find out more, visit <0>the Multipliers page</0>._t_"
                components={[
                    <StyledLink
                        to={'/trade-types/multiplier'}
                        target="_blank"
                        external="true"
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
                translate_text="_t_Watch <0>this video</0> to know more about trading multipliers._t_"
                components={[
                    <StyledLink
                        to={'https://www.youtube.com/watch?v=viS-dhJuHek&t=1s&ab_channel=Deriv'}
                        target="_blank"
                        external="true"
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
                title={localize('_t_Help centre | Frequently asked questions | Multipliers | Deriv_t_')}
                description={localize('_t_Frequently asked questions - Multipliers_t_')}
            >
                <WhatAreMultipliers
                    text={localize('_t_What are multipliers?_t_')}
                    label="what-are-multipliers"
                    is_mounted={is_mounted}
                />
                <HowTradeMultipliers
                    text={localize('_t_How do I trade multipliers?_t_')}
                    label="how-trade-multipliers"
                    is_mounted={is_mounted}
                />
            </Article>
        </div>
    )
}

export default WithIntl()(MultipliersArticle)
