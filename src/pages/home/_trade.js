import React from 'react'
import styled from 'styled-components'
import { TraderCard, BotCard, DMT5Card } from 'components/custom/other-platforms.js'
import { localize } from 'components/localization'
import { SectionContainer, Container, Flex, CssGrid } from 'components/containers'
import { Header, Image } from 'components/elements'

const SubHeaderWrapper = styled.div`
    margin: 1.6rem 0 6rem 0;
`

const platforms = Object.freeze({
    trader: 'dtrader',
    bot: 'dbot',
    mt5: 'dmt5',
})

const ImageWrapper = styled.div`
    height: 100%;
    width: 100%;
    visibility: ${props => (props.is_selected ? 'initial' : 'hidden')};
    opacity: ${props => (props.is_selected ? '1' : '0')};
    z-index: ${props => (props.is_selected ? '0' : '10')};
    position: absolute;
    top: -1.3rem;
    transition: all 0.25s;
`

const ImageContainer = styled.div`
    position: relative;
    height: 100%;
    width: 100%;
`

export const Trade = () => {
    // one option always has to be selected
    const [selected, setSelected] = React.useState(null)

    return (
        <SectionContainer>
            <Container direction="column">
                <Header font_size="3.6rem" as="h2" align="center">
                    {localize('Trade the way you like')}
                </Header>
                <SubHeaderWrapper>
                    <Header weight="500" lh="1.5" as="h4" align="center">
                        {localize(
                            'Whether you’re a beginner or a seasoned trader, we’ve got you covered.',
                        )}
                    </Header>
                </SubHeaderWrapper>
                <Flex>
                    <div style={{ width: '60%' }}>
                        <ImageContainer>
                            <ImageWrapper is_selected={!selected || selected === platforms.trader}>
                                <Image
                                    img_name="trade_dtrader.png"
                                    alt={localize('DTrader platform')}
                                    width="90%"
                                />
                            </ImageWrapper>
                            <ImageWrapper is_selected={selected === platforms.bot}>
                                <Image
                                    img_name="trade_dbot.png"
                                    alt={localize('DBot platform')}
                                    width="90%"
                                />
                            </ImageWrapper>
                            <ImageWrapper is_selected={selected === platforms.mt5}>
                                <Image
                                    img_name="trade_dmt5.png"
                                    alt={localize('DMT5 platform')}
                                    width="90%"
                                />
                            </ImageWrapper>
                        </ImageContainer>
                    </div>
                    <div style={{ width: '40%' }}>
                        <CssGrid rowgap="1.6rem" height="0%">
                            <div
                                onMouseEnter={() => setSelected(platforms.trader)}
                                onMouseLeave={() => setSelected('')}
                            >
                                <TraderCard is_selected={selected === platforms.trader} />
                            </div>
                            <div
                                onMouseEnter={() => setSelected(platforms.bot)}
                                onMouseLeave={() => setSelected('')}
                            >
                                <BotCard is_selected={selected === platforms.bot} />
                            </div>
                            <div
                                onMouseEnter={() => setSelected(platforms.mt5)}
                                onMouseLeave={() => setSelected('')}
                            >
                                <DMT5Card is_selected={selected === platforms.mt5} />
                            </div>
                        </CssGrid>
                    </div>
                </Flex>
            </Container>
        </SectionContainer>
    )
}
