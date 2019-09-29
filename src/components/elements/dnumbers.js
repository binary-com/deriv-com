import React from 'react'
import styled from 'styled-components'
import Container, { SectionContainer } from 'components/containers/container.js'


const StyledContainer = styled(Container)`
    display: flex;
    justify-content: space-between;
`
const Numbers = props => {
    return (
        <SectionContainer padding="4.3rem">
            <StyledContainer>{props.children}</StyledContainer>
        </SectionContainer>
    )
}

export default Numbers
