import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { StyledSubHeader } from './_headers'
import { Header, Text, SideTab } from 'components/elements'
import { localize } from 'components/localization'
import { Container, SectionContainer } from 'components/containers'
// Icons
import liquidMarket from 'images/svg/liquid-market.svg'
import tff from 'images/svg/tff.svg'
import tfs from 'images/svg/tfs.svg'
import Ncm from 'images/svg/no-centralised-market.svg'
import RiskDiversification from 'images/svg/risk-diversification.svg'
import MarketCondition from 'images/svg/market-condition.svg'
import PredictMarketTrends from 'images/svg/predict-market-trends.svg'
import Portfolio from 'images/svg/portfolio-diversification.svg'
import StockMarket from 'images/svg/stock-market.svg'
import InflationProtection from 'images/svg/inflation-protection.svg'
import RealWorld from 'images/svg/real-world.svg'
import MarketRisk from 'images/svg/market-risk.svg'
import SmallStakes from 'images/svg/small-stakes.svg'
import HighReturns from 'images/svg/volatility-indices.svg'
import ContractDurations from 'images/svg/contract-durations.svg'

const StyledSection = styled.section`
    padding-left: 8rem;
    width: 80rem;

    p {
        font-size: var(--text-size-sm);
    }
`

const StyledContainer = styled(SectionContainer)`
    height: 71.1rem;
`

const Markettabs = styled.div`
    margin-top: 4rem;
`
const TabGrid = styled.div`
    margin-top: 2.4rem;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-column-gap: 12rem;
    grid-row-gap: 2rem;
`
const TabGridCol = styled.article`
    padding: 0;

    p {
        margin-top: 0.8rem;
        font-size: var(--text-size-s);
    }
`
const TabCol = ({ Icon, content }) => {
    return (
        <TabGridCol>
            <Icon />
            <Text color="black-3" lh="1.55">
                {content}
            </Text>
        </TabGridCol>
    )
}
TabCol.propTypes = {
    content: PropTypes.string,
    Icon: PropTypes.func,
}
const Forex = () => (
    <StyledSection>
        <Text color="black-3" lh="1.55">
            {localize(
                'A global market for buying, selling, and exchanging currencies.',
            )}
        </Text>
        <TabGrid>
            <TabCol
                Icon={liquidMarket}
                content={localize('World’s largest and most liquid market')}
            />
            <TabCol
                Icon={tff}
                content={localize('Available for trading 24/5')}
            />
            <TabCol
                Icon={Ncm}
                content={localize(
                    'Over-the-counter market with no centralised exchange',
                )}
            />
        </TabGrid>
    </StyledSection>
)
const Indices = () => (
    <StyledSection>
        <Text color="black-3" lh="1.55">
            {localize(
                'Selected group of assets used to measure the overall performance of a specific market.',
            )}
        </Text>
        <TabGrid>
            <TabCol
                Icon={RiskDiversification}
                content={localize('Risk diversification')}
            />
            <TabCol
                Icon={MarketCondition}
                content={localize('Movement correlates with market conditions')}
            />
            <TabCol
                Icon={PredictMarketTrends}
                content={localize(
                    'Predict overall market trends, rather than individual performances',
                )}
            />
        </TabGrid>
    </StyledSection>
)
const Commodities = () => (
    <StyledSection>
        <Text color="black-3" lh="1.55">
            {localize(
                'Raw natural resources that can be bought or sold commercially.',
            )}
        </Text>
        <TabGrid>
            <TabCol
                Icon={Portfolio}
                content={localize('Portfolio diversification')}
            />
            <TabCol
                Icon={StockMarket}
                content={localize('Hedge against the stock market')}
            />
            <TabCol
                Icon={InflationProtection}
                content={localize('Inflation protection')}
            />
        </TabGrid>
    </StyledSection>
)
const Synthetic = () => (
    <StyledSection>
        <Text color="black-3" lh="1.55">
            {localize(
                'A unique, synthetic market that simulates real-world volatility. Trade with small, fixed stakes for high returns with durations as short as one tick.',
            )}
        </Text>
        <TabGrid>
            <TabCol
                Icon={tfs}
                content={localize('Available for trading 24/7')}
            />
            <TabCol
                Icon={RealWorld}
                content={localize('Unaffected by real-world news events')}
            />
            <TabCol
                Icon={MarketRisk}
                content={localize('Emulates market risks')}
            />
            <TabCol
                Icon={SmallStakes}
                content={localize('Small, fixed stakes')}
            />
            <TabCol Icon={HighReturns} content={localize('High returns')} />
            <TabCol
                Icon={ContractDurations}
                content={localize('Contract durations from one tick')}
            />
        </TabGrid>
    </StyledSection>
)

export const Markets = () => (
    <StyledContainer>
        <Container direction="column">
            <Header as="h2" align="center">
                {localize('Markets')}
            </Header>
            <StyledSubHeader as="h4" align="center" weight="500">
                {localize(
                    'Over 100 assets available across four leading markets.',
                )}
            </StyledSubHeader>
            <Markettabs>
                <SideTab>
                    <Forex label="forex" text={localize('Forex')} />
                    <Indices label="indices" text={localize('Indices')} />
                    <Commodities
                        label="commodities"
                        text={localize('Commodities')}
                    />
                    <Synthetic
                        label="synthetic"
                        text={localize('Synthetic Indices')}
                    />
                </SideTab>
            </Markettabs>
        </Container>
    </StyledContainer>
)
