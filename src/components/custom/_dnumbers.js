import React from 'react'
import styled from 'styled-components'
import { localize } from 'components/localization'
import { Container, SectionContainer } from 'components/containers'
import { Header, Text } from 'components/elements'
import PropTypes from 'prop-types'

const NumberWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 32.8rem;
`
const StyledContainer = styled(Container)`
    display: flex;
    justify-content: ${props => props.justify || 'space-between'};
`

const DNumbers = ({ items, justify }) => {
    return (
        <SectionContainer padding="4.3rem">
            <StyledContainer justify={justify}>
                {items.map(item => (
                    <NumberWrapper>
                        <Header as="h2" align="center">
                            {localize(item.title)}
                        </Header>
                        <Text align="center">{localize(item.subtitle)}</Text>
                    </NumberWrapper>))}
            </StyledContainer>
        </SectionContainer>
    )
}

DNumbers.prototype = {
    items: PropTypes.array,
    justify: PropTypes.string,
}
export default DNumbers
