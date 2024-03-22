import React, { useState } from 'react'
import styled from 'styled-components'
import { graphql, useStaticQuery } from 'gatsby'
import { TraderCard, BotCard } from 'components/custom/other-platforms'
import { Localize, localize } from 'components/localization'
import { SectionContainer, Container, Flex, CssGrid } from 'components/containers'
import { Header, QueryImage } from 'components/elements'
import useBuildVariant from 'features/hooks/use-build-variant'

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
    }
`

type TradeProps = {
    is_ppc_redirect: boolean
}

const Trade = ({ is_ppc_redirect }: TradeProps) => {
    const { region } = useBuildVariant()
    const data = useStaticQuery(query)
    // one option always has to be selected
    const [selected, setSelected] = useState(null)

    return (
        <StyledSection>
            <Container direction="column">
                <Header as="h3" type="section-title" align="center">
                    <Localize translate_text="_t_Trade the way you like_t_" />
                </Header>
                <Header
                    weight="normal"
                    as="h4"
                    type="sub-section-title"
                    align="center"
                    m="1.6rem 0 6rem"
                >
                    <Localize translate_text="_t_Choose from three powerful platforms — designed with you in mind_t_" />
                </Header>
                <Flex width="100%" direction="flex-start">
                    <div style={{ width: '100%', maxWidth: '65.7rem', marginRight: '6rem' }}>
                        <ImageContainer>
                            <ImageWrapper is_selected={!selected || selected === platforms.trader}>
                                <QueryImage
                                    data={data['dtrader_trade']}
                                    alt={localize('_t_Dtrader trading platform at Deriv_t_')}
                                />
                            </ImageWrapper>
                            <ImageWrapper is_selected={selected === platforms.bot}>
                                <QueryImage
                                    data={data['dbot_trade']}
                                    alt={localize('_t_Dbot trading platform at Deriv_t_')}
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
                            {region !== "eu" && (
                                <div
                                    onMouseEnter={() => setSelected(platforms.bot)}
                                    onMouseLeave={() => setSelected('')}
                                >
                                    <BotCard />
                                </div>
                            )}
                        </CssGrid>
                    </div>
                </Flex>
            </Container>
        </StyledSection>
    )
}

export default Trade
