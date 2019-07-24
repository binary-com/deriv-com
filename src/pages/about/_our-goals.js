import React from 'react'
import styled from 'styled-components'
import Container from 'components/containers/container.js'
import { Card } from 'components/elements/card.js'
import { localize } from 'components/localization'

import VisionSVG from 'images/svg/vision.svg'
import FuseeSVG from 'images/svg/fusee.svg'

const OurGoalsWrapper = styled.section`
    width: 100%;
    background-image: linear-gradient(
        to bottom,
        var(--color-grey-2),
        var(--color-white)
    );
`
const OurGoalsContainer = styled(Container)`
    padding: 8rem 0;
    justify-content: center;
    flex-direction: row;
    flex-wrap: wrap;

    article:first-child {
        margin-left: 0;
    }
    article:last-child {
        margin-right: 0;
    }
`

export const OurGoals = () => (
    <OurGoalsWrapper>
        <OurGoalsContainer>
            <Card
                Icon={VisionSVG}
                title={localize('Our vision')}
                content={localize(
                    'Our vision is to be the world’s most customer-centric, online trading company; a place where traders come to find and discover any derivative they want to trade.',
                )}
            />
            <Card
                Icon={FuseeSVG}
                title={localize('Our mission')}
                content={localize(
                    'Our mission is to offer traders competitive prices along with the broadest selection of derivatives to trade with the utmost convenience.',
                )}
            />
        </OurGoalsContainer>
    </OurGoalsWrapper>
)
