import React from 'react'
import styled from 'styled-components'
import { Article, ArticleProps } from './_article'
import { ArticleWrapper, ExternalLink, StyledHeader, StyledText } from './_help-centre-style'
import device from 'themes/device'
import { usePageLoaded } from 'components/hooks/use-page-loaded'
import { Text } from 'components/elements'
import { Localize, WithIntl } from 'components/localization'

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
            {
                <Localize translate_text="You can trade forex, stocks, stock indices, commodities, cryptocurrencies, and synthetic indices on DTrader. Some markets may not be available in certain countries." />
            }
        </Text>
    </ArticleWrapper>
)

const DTraderContracts = ({ text }: ArticleProps) => (
    <ArticleWrapper>
        <StyledHeader as="h4">{text}</StyledHeader>
        <Text>{<Localize translate_text="These contracts are available on DTrader:" />}</Text>
        <StyledList listStyle="disc" paddingLeft="5rem">
            <StyledListItem marginTop="0.3rem">
                <Text>{<Localize translate_text="Multipliers" />}</Text>
            </StyledListItem>
            <StyledListItem marginTop="0.3rem">
                <Text>{<Localize translate_text="Ups & Downs" />}</Text>
                <StyledList listStyle="circle" paddingLeft="5rem">
                    <StyledListItem marginTop="0.3rem">
                        <Text>{<Localize translate_text="Rise/Fall" />}</Text>
                    </StyledListItem>
                </StyledList>
            </StyledListItem>
            <StyledListItem marginTop="0.3rem">
                <Text>{<Localize translate_text="Highs & Lows" />}</Text>
                <StyledList listStyle="circle" paddingLeft="5rem">
                    <StyledListItem marginTop="0.3rem">
                        <Text>{<Localize translate_text="Higher/Lower" />}</Text>
                    </StyledListItem>
                    <StyledListItem marginTop="0.3rem">
                        <Text>{<Localize translate_text="Touch/No Touch" />}</Text>
                    </StyledListItem>
                </StyledList>
            </StyledListItem>
            <StyledListItem marginTop="0.3rem">
                <Text>{<Localize translate_text="Digits" />}</Text>
                <StyledList listStyle="circle" paddingLeft="5rem">
                    <StyledListItem marginTop="0.3rem">
                        <Text>{<Localize translate_text="Matches/Differs" />}</Text>
                    </StyledListItem>
                    <StyledListItem marginTop="0.3rem">
                        <Text>{<Localize translate_text="Even/Odd" />}</Text>
                    </StyledListItem>
                    <StyledListItem marginTop="0.3rem">
                        <Text>{<Localize translate_text="Over/Under" />}</Text>
                    </StyledListItem>
                </StyledList>
            </StyledListItem>
        </StyledList>
        <StyledText>
            {
                <Localize translate_text="Some trade types may not be available in certain countries." />
            }
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
                title={
                    <Localize translate_text="Help centre | Frequently asked questions | DTrader | Deriv" />
                }
                description={<Localize translate_text="Frequently asked questions - DTrader" />}
            >
                <WhatIsDMT5
                    text={<Localize translate_text="What is DTrader?" />}
                    label="what-is-dtrader"
                    is_mounted={is_mounted}
                />
                <DTraderMarkets
                    text={<Localize translate_text="What markets can I trade on DTrader?" />}
                    label="markets-on-dtrader"
                    is_mounted={is_mounted}
                />
                <DTraderContracts
                    text={
                        <Localize translate_text="What contract types do you offer on DTrader?" />
                    }
                    label="contracts-on-dtrader"
                    is_mounted={is_mounted}
                />
                <DownloadtheChartonDTrader
                    text={<Localize translate_text="Can I download the chart on DTrader?" />}
                    label="download-the-chart-on-DTrader"
                    is_mounted={is_mounted}
                />
            </Article>
        </div>
    )
}

export default WithIntl()(DTraderArticle)
