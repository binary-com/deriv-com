import React from 'react'
import { SmallContainer, Grid, Ul, WhyTradeItem } from '../components/_style'
import accumulator_content from '../content/static/_accumulator'
import { FullWidthMultiColumn } from 'components/elements/full-width-multicolumn'
import { SectionContainer } from 'components/containers'
import { Header, Text } from 'components/elements'
import { localize, Localize } from 'components/localization'
import { StyledBox } from 'pages/markets/static/style/_markets-style'
// Icon

const WhatAreAccumulators = () => {
    return (
        <>
            <SectionContainer background="white" padding="8rem 0 4rem">
                <SmallContainer direction="column" ai="flex-start">
                    <Header as="h2" type="heading-2" mb="1.2rem">
                        {localize('What are accumulators?')}
                    </Header>
                    <Text mb="4rem">
                        {localize(
                            'Accumulators (or accumulator options) allow you to heighten your potential profit exponentially without risking more than your stake. Your potential profit will increase regardless of market movement, as long as the price moves within the trade barriers.',
                        )}
                    </Text>
                </SmallContainer>
            </SectionContainer>
            <FullWidthMultiColumn
                header={<Localize translate_text="Why trade accumulators on Deriv" />}
                button_title={<Localize translate_text="Don't have a Deriv account yet?" />}
                button_text={<Localize translate_text="_t_Create free demo account_t_" />}
                multiple_row
                gap="7rem"
            >
                {accumulator_content.map((content, index) => (
                    <StyledBox
                        key={index}
                        item_title={content.item_title}
                        text={content.text}
                        icon={<img src={content.src} alt="" />}
                    ></StyledBox>
                ))}
            </FullWidthMultiColumn>
        </>
    )
}

export default WhatAreAccumulators
