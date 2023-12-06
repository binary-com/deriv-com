import React from 'react'
import styled from 'styled-components'
import { SmallContainer } from '../components/_style'
import { cfdItems } from '../content/static/_start-trading'
import CommonHeaderSection from 'components/elements/common-header-section'
import Button from 'components/custom/_button'
import { StepperView } from 'components/elements'
import useRegion from 'components/hooks/use-region'
import useHandleSignup from 'components/hooks/use-handle-signup'
import { useBrowserResize } from 'components/hooks/use-browser-resize'
import useVisibleContent from 'components/hooks/use-visible-content'

const ButtonContainer = styled.div`
    margin-left: -1rem;
`
const StepperContainer = styled.div`
    margin-left: 1rem;
`

const StartTrading = () => {
    const { is_eu } = useRegion()
    const [is_mobile] = useBrowserResize()
    const handleSignup = useHandleSignup()
    const visible_items = useVisibleContent({ content: cfdItems, config: { is_eu } })

    return (
        <SmallContainer direction="column" ai="flex-start">
            <CommonHeaderSection
                title="_t_Start trading CFDs on Deriv_t_"
                title_font_size="3.2rem"
                margin_title={is_mobile ? '40px 0 30px 0' : '120px 0 50px 0'}
            />
            <StepperContainer>
                <StepperView items={visible_items} />
            </StepperContainer>
            <ButtonContainer>
                <Button onClick={handleSignup} label="_t_Create free demo account_t_" primary />
            </ButtonContainer>
        </SmallContainer>
    )
}

export default StartTrading
