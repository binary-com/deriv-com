import React from 'react'
import styled from 'styled-components'
import { Article, ArticleProps } from './_article'
import { ArticleWrapper, ExternalLink, StyledHeader, StyledText } from './_help-centre-style'
import device from 'themes/device'
import { usePageLoaded } from 'components/hooks/use-page-loaded'
import { Text } from 'components/elements'
import { localize, Localize, WithIntl } from 'components/localization'

const StyledLink = styled(ExternalLink)`
    @media ${device.tabletL} {
        font-size: 16px;
    }
`

const StyledList = styled.ul<{ listStyle: string; paddingLeft: string }>`
    list-style: ${(props) => props.listStyle};
    padding-left: ${(props) => props.paddingLeft};
`

const StyledListItem = styled.li<{ marginTop: string }>`
    color: var(--color-black-3);
    margin-top: ${(props) => props.marginTop};
`

const WhatIsDMT5 = ({ text }: ArticleProps) => (
    <ArticleWrapper>
        <StyledHeader as="h4">{text}</StyledHeader>
        <Text>
            <Localize
                translate_text="_t_<0>DTrader</0> is one of our trading platforms. It offers digital options and multipliers on a variety of assets in financial and synthetic markets. _t_"
                components={[
                    <StyledLink
                        to={'/dtrader/'}
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

const DTraderMarkets = ({ text }: ArticleProps) => (
    <ArticleWrapper>
        <StyledHeader as="h4">{text}</StyledHeader>
        <Text>
            {localize(
                '_t_You can trade forex, stocks, stock indices, commodities, cryptocurrencies, and synthetic indices on DTrader. Some markets may not be available in certain countries._t_',
            )}
        </Text>
    </ArticleWrapper>
)

const DTraderContracts = ({ text }: ArticleProps) => (
    <ArticleWrapper>
        <StyledHeader as="h4">{text}</StyledHeader>
        <Text>{localize('_t_These contracts are available on DTrader:_t_')}</Text>
        <StyledList listStyle="disc" paddingLeft="5rem">
            <StyledListItem marginTop="0.3rem">
                <Text>{localize('_t_Multipliers_t_')}</Text>
            </StyledListItem>
            <StyledListItem marginTop="0.3rem">
                <Text>{localize('_t_Ups & Downs_t_')}</Text>
                <StyledList listStyle="circle" paddingLeft="5rem">
                    <StyledListItem marginTop="0.3rem">
                        <Text>{localize('_t_Rise/Fall_t_')}</Text>
                    </StyledListItem>
                </StyledList>
            </StyledListItem>
            <StyledListItem marginTop="0.3rem">
                <Text>{localize('_t_Highs & Lows_t_')}</Text>
                <StyledList listStyle="circle" paddingLeft="5rem">
                    <StyledListItem marginTop="0.3rem">
                        <Text>{localize('_t_Higher/Lower_t_')}</Text>
                    </StyledListItem>
                    <StyledListItem marginTop="0.3rem">
                        <Text>{localize('_t_Touch/No Touch_t_')}</Text>
                    </StyledListItem>
                </StyledList>
            </StyledListItem>
            <StyledListItem marginTop="0.3rem">
                <Text>{localize('_t_Digits_t_')}</Text>
                <StyledList listStyle="circle" paddingLeft="5rem">
                    <StyledListItem marginTop="0.3rem">
                        <Text>{localize('_t_Matches/Differs_t_')}</Text>
                    </StyledListItem>
                    <StyledListItem marginTop="0.3rem">
                        <Text>{localize('_t_Even/Odd_t_')}</Text>
                    </StyledListItem>
                    <StyledListItem marginTop="0.3rem">
                        <Text>{localize('_t_Over/Under_t_')}</Text>
                    </StyledListItem>
                </StyledList>
            </StyledListItem>
        </StyledList>
        <StyledText>
            {localize('_t_Some trade types may not be available in certain countries._t_')}
        </StyledText>
    </ArticleWrapper>
)

const DownloadtheChartonDTrader = ({ text }: ArticleProps) => (
    <ArticleWrapper>
        <StyledHeader as="h4">{text}</StyledHeader>
        <Text>
            <Localize
                translate_text="_t_Yes, you can download the chart on DTrader (in .csv and .png) by clicking <0>Download</0> on the toolbar on the left. _t_"
                components={[<strong key={0} />]}
            />
        </Text>
    </ArticleWrapper>
)

const DTraderArticle = () => {
    const [is_mounted] = usePageLoaded(false) // needed to fix tab highlighting not being rerendered during first load

    return (
        <div>
            <Article
                header="DTrader"
                title={localize('_t_Help centre | Frequently asked questions | DTrader | Deriv_t_')}
                description={localize('_t_Frequently asked questions - DTrader_t_')}
            >
                <WhatIsDMT5
                    text={localize('_t_What is DTrader?_t_')}
                    label="what-is-dtrader"
                    is_mounted={is_mounted}
                />
                <DTraderMarkets
                    text={localize('_t_What markets can I trade on DTrader?_t_')}
                    label="markets-on-dtrader"
                    is_mounted={is_mounted}
                />
                <DTraderContracts
                    text={localize('_t_What contract types do you offer on DTrader?_t_')}
                    label="contracts-on-dtrader"
                    is_mounted={is_mounted}
                />
                <DownloadtheChartonDTrader
                    text={localize('_t_Can I download the chart on DTrader?_t_')}
                    label="download-the-chart-on-DTrader"
                    is_mounted={is_mounted}
                />
            </Article>
        </div>
    )
}

export default WithIntl()(DTraderArticle)
