import React from 'react'
import styled from 'styled-components'
import { Article, ArticleProps } from './_article'
import { ArticleWrapper, ExternalLink, StyledHeader, StyledText } from './_help-centre-style'
import device from 'themes/device'
import { usePageLoaded } from 'components/hooks/use-page-loaded'
import { Text } from 'components/elements'
import { localize, Localize, WithIntl } from 'components/localization'
import { DerivStore } from 'store'

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
                translate_text="<0>DTrader</0> is one of our trading platforms. It offers digital options and multipliers on a variety of assets in financial and synthetic markets. "
                components={[
                    <StyledLink
                        to={'/dtrader/'}
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

const DTraderMarkets = ({ text }: ArticleProps) => {
    const { is_eu_country } = React.useContext(DerivStore)

    return (
        <ArticleWrapper>
            <StyledHeader as="h4">{text}</StyledHeader>
            <Text>
                {is_eu_country
                    ? localize(
                          'You can trade forex, stocks, stock indices, commodities, cryptocurrencies, and derived on DTrader. Some markets may not be available in certain countries.',
                      )
                    : localize(
                          'You can trade forex, stocks, stock indices, commodities, cryptocurrencies, and derived indices on DTrader. Some markets may not be available in certain countries.',
                      )}
            </Text>
        </ArticleWrapper>
    )
}

const DTraderContracts = ({ text }: ArticleProps) => (
    <ArticleWrapper>
        <StyledHeader as="h4">{text}</StyledHeader>
        <Text>{localize('These contracts are available on DTrader:')}</Text>
        <StyledList listStyle="disc" paddingLeft="5rem">
            <StyledListItem marginTop="0.3rem">
                <Text>{localize('Multipliers')}</Text>
            </StyledListItem>
            <StyledListItem marginTop="0.3rem">
                <Text>{localize('Ups & Downs')}</Text>
                <StyledList listStyle="circle" paddingLeft="5rem">
                    <StyledListItem marginTop="0.3rem">
                        <Text>{localize('Rise/Fall')}</Text>
                    </StyledListItem>
                </StyledList>
            </StyledListItem>
            <StyledListItem marginTop="0.3rem">
                <Text>{localize('Highs & Lows')}</Text>
                <StyledList listStyle="circle" paddingLeft="5rem">
                    <StyledListItem marginTop="0.3rem">
                        <Text>{localize('Higher/Lower')}</Text>
                    </StyledListItem>
                    <StyledListItem marginTop="0.3rem">
                        <Text>{localize('Touch/No Touch')}</Text>
                    </StyledListItem>
                </StyledList>
            </StyledListItem>
            <StyledListItem marginTop="0.3rem">
                <Text>{localize('Digits')}</Text>
                <StyledList listStyle="circle" paddingLeft="5rem">
                    <StyledListItem marginTop="0.3rem">
                        <Text>{localize('Matches/Differs')}</Text>
                    </StyledListItem>
                    <StyledListItem marginTop="0.3rem">
                        <Text>{localize('Even/Odd')}</Text>
                    </StyledListItem>
                    <StyledListItem marginTop="0.3rem">
                        <Text>{localize('Over/Under')}</Text>
                    </StyledListItem>
                </StyledList>
            </StyledListItem>
        </StyledList>
        <StyledText>
            {localize('Some trade types may not be available in certain countries.')}
        </StyledText>
    </ArticleWrapper>
)

const DownloadtheChartonDTrader = ({ text }: ArticleProps) => (
    <ArticleWrapper>
        <StyledHeader as="h4">{text}</StyledHeader>
        <Text>
            <Localize
                translate_text="Yes, you can download the chart on DTrader (in .csv and .png) by clicking <0>Download</0> on the toolbar on the left. "
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
                title={localize('Help centre | Frequently asked questions | DTrader | Deriv')}
                description={localize('Frequently asked questions - DTrader')}
            >
                <WhatIsDMT5
                    text={localize('What is DTrader?')}
                    label="what-is-dtrader"
                    is_mounted={is_mounted}
                />
                <DTraderMarkets
                    text={localize('What markets can I trade on DTrader?')}
                    label="markets-on-dtrader"
                    is_mounted={is_mounted}
                />
                <DTraderContracts
                    text={localize('What contract types do you offer on DTrader?')}
                    label="contracts-on-dtrader"
                    is_mounted={is_mounted}
                />
                <DownloadtheChartonDTrader
                    text={localize('Can I download the chart on DTrader?')}
                    label="download-the-chart-on-DTrader"
                    is_mounted={is_mounted}
                />
            </Article>
        </div>
    )
}

export default WithIntl()(DTraderArticle)
