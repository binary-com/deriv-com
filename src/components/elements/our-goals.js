import React from 'react'
import styled from 'styled-components'
import Container from '../containers/container'
import { Box } from '@rebass/grid'

const Wrapper = styled.div`
    width: 100%;
    background-image: linear-gradient(to bottom, #e8e8e8, #ffffff);
`
const OurGoals = styled(Container)`
    margin: 0 auto;
    display: flex;
    flex-direction: row;
    justify-content: center;
    padding: 5rem 0;
    flex-wrap: wrap;
`
const OurGoalsCard = styled(Box)`
    max-width: 328px;
    height: 356px;
    border-radius: 4px;
    box-shadow: 0 16px 20px 0 rgba(0, 0, 0, 0.1);
    background-color: #ffffff;
    margin: 0 10px;
    @media (max-width: 831px) {
        margin: 1rem;
    }
`

const OurGoalsWrapper = () => (
    <Wrapper>
        <OurGoals>
                <OurGoalsCard width={[1, 1, 4 / 12]}>
                </OurGoalsCard>
                <OurGoalsCard width={[1, 1, 4 / 12]}>
                </OurGoalsCard>
        </OurGoals>
    </Wrapper>
)
export default OurGoalsWrapper
