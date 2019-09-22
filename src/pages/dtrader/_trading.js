import React from 'react'
import styled from 'styled-components'
import Container, { SectionContainer } from 'components/containers/container.js'

const StyledContainer = styled(SectionContainer)`
    background-color: var(--color-white);
`
const StyledContainer = styled(Container)`
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    grid-template-rows: auto;
    grid-column-gap: 2rem;
    grid-template-areas: '';
`

const MakeSmarter = styled.div`
    grid-area: ms;
`
const MakeSmarterImage = styled.div`
    grid-area: msi;
`
const TradeWhatYouWant = styled.div`
    grid-area: twyw;
`
const TradeWhatYouWantImage = styled.div`
    grid-area: twywi;
`
const 
const Trading = () => {}

export default Trading
