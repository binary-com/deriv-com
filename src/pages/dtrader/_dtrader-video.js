import React from 'react'
import styled from 'styled-components'
import { Header } from 'components/elements/typography.js'

const Wrapper = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-top: 4rem;
`
const Step = styled(Header)`
    color: var(--color-red);
    font-weight: 500;
    border-bottom: 1px solid var(--color-red);
`
const StepWrapper = styled.div`
    width: 26rem;
`
const DtraderTabs = () => {
    return (
        <>
            <Wrapper>
                <StepWrapper>
                    <Step as="h4" lh="1.5" align="center">
                        1. Select your asset
                    </Step>
                </StepWrapper>
                <StepWrapper>
                    <Step as="h4" lh="1.5" align="center">
                        2. Follow the chart
                    </Step>
                </StepWrapper>
                <StepWrapper>
                    <Step as="h4" lh="1.5" align="center">
                        3. Purchase your option
                    </Step>
                </StepWrapper>
            </Wrapper>
        </>
    )
}
export default DtraderTabs
