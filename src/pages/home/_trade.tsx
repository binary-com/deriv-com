import React from 'react'
import styled from 'styled-components'
import { graphql, useStaticQuery } from 'gatsby'
import { TraderCard, BotCard, DMT5Card } from 'components/custom/other-platforms'
import { localize } from 'components/localization'
import { SectionContainer, Container, Flex, CssGrid } from 'components/containers'
import { Header, QueryImage } from 'components/elements'
import { useCountryRule } from 'components/hooks/use-country-rule'

const platforms = Object.freeze({
    trader: 'dtrader',
    bot: 'dbot',
    mt5: 'dmt5',
})

const ImageWrapper = styled.div<{ is_selected: boolean }>`
    height: 100%;
    width: 100%;
    max-width: 65.7rem;
    visibility: ${({ is_selected }) => (is_selected ? 'initial' : 'hidden')};
    opacity: ${({ is_selected }) => (is_selected ? '1' : '0')};
    z-index: ${({ is_selected }) => (is_selected ? '0' : '10')};
    position: absolute;
    transition: opacity 0.25s;
`

const ImageContainer = styled.div`
    position: relative;
    height: 100%;
    width: 100%;
`
const StyledSection = styled(SectionContainer)`
    background-image: linear-gradient(to bottom, var(--color-grey-30), rgba(238, 238, 238, 0));
    min-height: 69rem;
`
const query = graphql`
    query {
        dtrader_trade: file(relativePath: { eq: "home/dtrader_trade_home.png" }) {
            ...fadeIn
        }
        dbot_trade: file(relativePath: { eq: "home/dbot_trade_home.png" }) {
            ...fadeIn
        }
        dmt5_trade: file(relativePath: { eq: "home/dmt5_trade_home.png" }) {
            ...fadeIn
        }
    }
`

type TradeProps = {
    is_ppc_redirect: boolean
}

const Trade = ({ is_ppc_redirect }: TradeProps) => {
    const { is_non_eu } = useCountryRule()
    const data = useStaticQuery(query)
    // one option always has to be selected
    const [selected, setSelected] = React.useState(null)

    return (
        <StyledSection>
            <Container direction="column">
                <Header as="h3" type="section-title" align="center">
                    {localize('Trade the way you like')}
                </Header>
                <Header
                    weight="normal"
                    as="h4"
                    type="sub-section-title"
                    align="center"
                    m="1.6rem 0 6rem"
                >
                    {localize('Choose from three powerful platforms — designed with you in mind')}
                </Header>
                <Flex width="100%" direction="flex-start">
                    <div style={{ width: '100%', maxWidth: '65.7rem', marginRight: '6rem' }}>
                        <ImageContainer>
                            <ImageWrapper is_selected={!selected || selected === platforms.trader}>
                                <QueryImage
                                    data={data['dtrader_trade']}
                                    alt={localize('Dtrader trading platform at Deriv')}
                                />
                            </ImageWrapper>
                            <ImageWrapper is_selected={selected === platforms.bot}>
                                <QueryImage
                                    data={data['dbot_trade']}
                                    alt={localize('Dbot trading platform at Deriv')}
                                />
                            </ImageWrapper>
                            <ImageWrapper is_selected={selected === platforms.mt5}>
                                <QueryImage
                                    data={data['dmt5_trade']}
                                    alt={localize('DMT5 trading platform at Deriv')}
                                />
                            </ImageWrapper>
                        </ImageContainer>
                    </div>
                    <div style={{ width: '100%', maxWidth: '38.4rem' }}>
                        <CssGrid row_gap="1.6rem" height="0%">
                            <div
                                onMouseEnter={() => setSelected(platforms.trader)}
                                onMouseLeave={() => setSelected('')}
                            >
                                <TraderCard />
                            </div>
                            {is_non_eu && (
                                <div
                                    onMouseEnter={() => setSelected(platforms.bot)}
                                    onMouseLeave={() => setSelected('')}
                                >
                                    <BotCard />
                                </div>
                            )}
                            <div
                                onMouseEnter={() => setSelected(platforms.mt5)}
                                onMouseLeave={() => setSelected('')}
                            >
                                <DMT5Card is_ppc_redirect={is_ppc_redirect} />
                            </div>
                        </CssGrid>
                    </div>
                </Flex>
            </Container>
        </StyledSection>
    )
}

export default Trade
