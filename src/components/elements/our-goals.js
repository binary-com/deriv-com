import React from 'react'
import styled from 'styled-components'
import Container from '../containers/container'
import VisionSVG from 'images/svg/vision.svg'
import FuseeSVG from 'images/svg/fusee.svg'
import Card from './card.js'

const OurGoalsWrapper = styled.section`
    width: 100%;
    background-image: linear-gradient(to bottom, #e8e8e8, var(--color-white));
`
const OurGoalsContainer = styled(Container)`
    padding: 8rem 0;
    justify-content: center;
    flex-direction: row;
    flex-wrap: wrap;
`

const OurGoals = () => (
    <OurGoalsWrapper>
        <OurGoalsContainer>
            <Card
                Icon={VisionSVG}
                title="Our vision"
                content="Our vision is to be the world’s most customer-centric,
                        online trading company; a place where traders come to
                        find and discover any derivative they want to trade."
                firstCard
            />
            <Card
                Icon={FuseeSVG}
                title="Our mission"
                content="Our mission is to offer traders competitive prices along
                with the broadest selection of derivatives to trade with
                the utmost convenience."
                lastCard
            />
        </OurGoalsContainer>
    </OurGoalsWrapper>
)
export default OurGoals
