import React from 'react'
import { StyledCard, StyledCalculatedButton, StyledButtonWrap } from '../_style'
import { Localize } from 'components/localization'
import { Header } from 'components/elements/typography'

const DefaultCard = ({ toggleCalculated }: { toggleCalculated: () => void }) => {
    return (
        <StyledCard height="auto" tabletHeight="auto" padding="2.4rem">
            <div>
                <Header as="h4" type="sub-section-title" mb="0.8rem">
                    <Localize translate_text="_t_Master affiliate_t_" />
                </Header>
                <Header as="p" weight="normal" type="paragraph-1">
                    <Localize translate_text="_t_Earn based on your sub-affiliate’s commission._t_" />
                </Header>
                <Header as="p" weight="normal" type="paragraph-1" mt="2.4rem">
                    <Localize translate_text="_t_You will earn 20% flat rate of what your sub-affiliate generates from their commission._t_" />
                </Header>
                <Header as="p" type="paragraph-1" mb="0.8rem" mt="2.4rem">
                    <Localize translate_text="_t_Disclaimer:_t_" />
                </Header>
                <Header as="p" type="paragraph-1">
                    <Localize translate_text="_t_Only affiliates with Revenue share and/or Turnover plans are eligible to apply to become Master Affiliate._t_" />
                </Header>
            </div>
            <StyledButtonWrap>
                <StyledCalculatedButton flat onClick={toggleCalculated}>
                    <Localize translate_text="_t_How it’s calculated_t_" />
                </StyledCalculatedButton>
            </StyledButtonWrap>
        </StyledCard>
    )
}

export default DefaultCard
