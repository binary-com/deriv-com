import React from 'react'
import styled from 'styled-components'
import { TraderCard, BotCard, DMT5Card } from 'components/custom/other-platforms.js'
import { localize } from 'components/localization'
import { SectionContainer, Container, Flex, CssGrid } from 'components/containers'
import { Header } from 'components/elements'

const SubHeaderWrapper = styled.div`
    margin: 1.6rem 0 4rem 0;
`

const platforms = {
    trader: 'dtrader',
    bot: 'dbot',
    mt5: 'dmt5',
}
export const Trade = () => {
    // one option always has to be selected
    const [selected, setSelected] = React.useState(platforms.trader)

    return (
        <SectionContainer>
            <Container direction="column">
                <Flex>
                    <div style={{ width: '60%' }}>
                        {selected === platforms.trader && <div>Dtrader animation</div>}
                        {selected === platforms.bot && <div>Dbot animation</div>}
                        {selected === platforms.mt5 && <div>dmt5 animation</div>}
                    </div>
                    <div style={{ width: '40%' }}>
                        <Header font_size="3.6rem" as="h2">
                            {localize('Trade the way you like')}
                        </Header>
                        <SubHeaderWrapper>
                            <Header weight="500" lh="1.5" as="h4">
                                {localize(
                                    'Whether you’re a beginner or a seasoned trader, our trading experience is something you’ll love.',
                                )}
                            </Header>
                        </SubHeaderWrapper>
                        <CssGrid rowgap="1.6rem" height="0%">
                            <div onMouseEnter={() => setSelected(platforms.trader)}>
                                <TraderCard is_selected={selected === platforms.trader} />
                            </div>
                            <div onMouseEnter={() => setSelected(platforms.bot)}>
                                <BotCard is_selected={selected === platforms.bot} />
                            </div>
                            <div onMouseEnter={() => setSelected(platforms.mt5)}>
                                <DMT5Card is_selected={selected === platforms.mt5} />
                            </div>
                        </CssGrid>
                    </div>
                </Flex>
            </Container>
        </SectionContainer>
    )
}
