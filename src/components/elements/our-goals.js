import React from 'react'
import styled from 'styled-components'
import Container from '../containers/container'
import VisionSVG from 'images/svg/vision.svg'
import FuseeSVG from 'images/svg/fusee.svg'

const Wrapper = styled.section`
    width: 100%;
    background-image: linear-gradient(to bottom, #e8e8e8, var(--color-white));
`
const OurGoals = styled(Container)`
    margin: 0 auto;
    display: flex;
    flex-direction: row;
    justify-content: center;
    padding: 8rem 0;
    flex-wrap: wrap;
`
const OurGoalsCard = styled.article`
    width: 328px;
    min-height: 356px;
    box-sizing: border-box;
    border-radius: 4px;
    box-shadow: 0 16px 20px 0 rgba(0, 0, 0, 0.1);
    background-color: --color-white;
    margin: 0 1rem;
    padding: 4rem 5.6rem 4.6rem 5.6rem;
    position: relative;

    div {
        max-width: 216px;
        bottom: 4.6rem;
        color: #333333;
        margin-top: 4rem;

        p {
            font-size: 16px;
            line-height: 24px;
            margin-top: 8px;
        }
        span {
            font-size: 24px;
            line-height: 30px;
            font-weight: 500;
        }
    }
    @media (max-width: 768px) {
        margin: 1rem;
    }
`

const OurGoalsWrapper = () => (
    <Wrapper>
        <OurGoals>
            <OurGoalsCard>
                <VisionSVG />
                <div>
                    <span>Our vision</span>
                    <p>
                        Our vision is to be the world’s most customer-centric,
                        online trading company; a place where traders come to
                        find and discover any derivative they want to trade.
                    </p>
                </div>
            </OurGoalsCard>
            <OurGoalsCard>
                <FuseeSVG />
                <div>
                    <span>Our mission</span>
                    <p>
                        Our mission is to offer traders competitive prices along
                        with the broadest selection of derivatives to trade with
                        the utmost convenience.
                    </p>
                </div>
            </OurGoalsCard>
        </OurGoals>
    </Wrapper>
)
export default OurGoalsWrapper
