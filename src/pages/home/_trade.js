import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { StaticImage } from 'gatsby-plugin-image'
import { TraderCard, BotCard, DMT5Card } from 'components/custom/other-platforms.js'
import { localize } from 'components/localization'
import { SectionContainer, Container, Flex, CssGrid } from 'components/containers'
import { Header } from 'components/elements'

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

const Trade = ({ is_ppc_redirect }) => {
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
                                <StaticImage
                                    src="../../images/common/dtrader_trade_home.png"
                                    alt={localize('DTrader')}
                                />
                            </ImageWrapper>
                            <ImageWrapper is_selected={selected === platforms.bot}>
                                <StaticImage
                                    src="../../images/common/dbot_trade_home.png"
                                    alt={localize('DBot')}
                                />
                            </ImageWrapper>
                            <ImageWrapper is_selected={selected === platforms.mt5}>
                                <StaticImage
                                    src="../../images/common/dmt5_trade_home.png"
                                    alt={localize('DMT5')}
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
                                <DMT5Card is_ppc_redirect={is_ppc_redirect} />
                            </div>
                        </CssGrid>
                    </div>
                </Flex>
            </Container>
        </StyledSection>
    )
}

Trade.propTypes = {
    is_ppc_redirect: PropTypes.bool,
}

export default Trade
