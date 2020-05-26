import React from 'react'
import styled from 'styled-components'
import { graphql, useStaticQuery } from 'gatsby'
import { TraderCard, BotCard, DMT5Card } from 'components/custom/other-platforms.js'
import { localize } from 'components/localization'
import { SectionContainer, Container, Flex, CssGrid } from 'components/containers'
import { Header, QueryImage } from 'components/elements'

const query = graphql`
    query {
        dtrader_trade: file(relativePath: { eq: "dtrader_trade_home.png" }) {
            childImageSharp {
                fluid(maxWidth: 794) {
                    ...GatsbyImageSharpFluid_withWebp_noBase64
                    originalName
                }
            }
        }
        dmt5_trade: file(relativePath: { eq: "dmt5_trade_home.png" }) {
            childImageSharp {
                fluid(maxWidth: 794) {
                    ...GatsbyImageSharpFluid_withWebp_noBase64
                    originalName
                }
            }
        }
        dbot_trade: file(relativePath: { eq: "dbot_trade_home.png" }) {
            childImageSharp {
                fluid(maxWidth: 794) {
                    ...GatsbyImageSharpFluid_withWebp_noBase64
                    originalName
                }
            }
        }
    }
`
const platforms = Object.freeze({
    trader: 'dtrader',
    bot: 'dbot',
    mt5: 'dmt5',
})

const ImageWrapper = styled.div`
    height: 100%;
    width: 100%;
    max-width: 65.7rem;
    visibility: ${(props) => (props.is_selected ? 'initial' : 'hidden')};
    opacity: ${(props) => (props.is_selected ? '1' : '0')};
    z-index: ${(props) => (props.is_selected ? '0' : '10')};
    position: absolute;
    transition: all 0.25s;
`

const ImageContainer = styled.div`
    position: relative;
    height: 100%;
    width: 100%;
`
const StyledSection = styled(SectionContainer)`
    background-image: linear-gradient(to bottom, var(--color-grey-11), rgba(238, 238, 238, 0));
`

export const Trade = () => {
    // one option always has to be selected
    const [selected, setSelected] = React.useState(null)
    const data = useStaticQuery(query)
    return (
        <StyledSection>
            <Container direction="column">
                <Header as="h2" align="center">
                    {localize('Trade the way you like')}
                </Header>
                <Header weight="normal" as="h4" align="center" m="1.6rem 0 6rem">
                    {localize('Choose from three powerful platforms — designed with you in mind')}
                </Header>
                <Flex width="100%" direction="flex-start">
                    <div style={{ width: '100%', maxWidth: '65.7rem', marginRight: '6rem' }}>
                        <ImageContainer>
                            <ImageWrapper is_selected={!selected || selected === platforms.trader}>
                                <QueryImage
                                    data={data['dtrader_trade']}
                                    alt={localize('DTrader')}
                                    width="100%"
                                />
                            </ImageWrapper>
                            <ImageWrapper is_selected={selected === platforms.bot}>
                                <QueryImage
                                    data={data['dbot_trade']}
                                    alt={localize('DBot')}
                                    width="100%"
                                />
                            </ImageWrapper>
                            <ImageWrapper is_selected={selected === platforms.mt5}>
                                <QueryImage
                                    data={data['dmt5_trade']}
                                    alt={localize('DMT5')}
                                    width="100%"
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
                            <div
                                onMouseEnter={() => setSelected(platforms.bot)}
                                onMouseLeave={() => setSelected('')}
                            >
                                <BotCard />
                            </div>
                            <div
                                onMouseEnter={() => setSelected(platforms.mt5)}
                                onMouseLeave={() => setSelected('')}
                            >
                                <DMT5Card />
                            </div>
                        </CssGrid>
                    </div>
                </Flex>
            </Container>
        </StyledSection>
    )
}
