import React from 'react'
import styled from 'styled-components'
import { SectionContainer, FlexGridContainer } from 'components/containers'
import { Card } from 'components/elements'
import { localize } from 'components/localization'
import device from 'themes/device'
import VisionSVG from 'images/svg/vision.svg'
import FuseeSVG from 'images/svg/fusee.svg'

const OurGoalsWrapper = styled(SectionContainer)`
    background-image: linear-gradient(
        to bottom,
        var(--color-grey-2),
        var(--color-white)
    );

    @media ${device.tabletL} {
        padding-bottom: 3rem;
        background-image: unset;
        background-color: var(--color-grey-1);

        ${FlexGridContainer} {
            article:first-child {
                margin-top: 0;
            }
        }
    }
`

export const OurGoals = () => (
    <OurGoalsWrapper>
        <FlexGridContainer justify="center" content_width="32rem">
            <Card
                Icon={VisionSVG}
                title={localize('Our vision')}
                content={localize(
                    'Our vision is to be the world’s most customer-centric, online trading company; a place where traders come to find and discover any derivative they want to trade.',
                )}
                width="32rem"
            />
            <Card
                Icon={FuseeSVG}
                title={localize('Our mission')}
                content={localize(
                    'Our mission is to offer traders competitive prices along with the broadest selection of derivatives to trade with the utmost convenience.',
                )}
                width="32rem"
            />
        </FlexGridContainer>
    </OurGoalsWrapper>
)
