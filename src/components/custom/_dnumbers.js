import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { localize } from 'components/localization'
import { Container, SectionContainer } from 'components/containers'
import { Header, Text } from 'components/elements'

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
                {items.map((item, index) => (
                    <NumberWrapper key={index}>
                        <Header as="h2" align="center">
                            {item.title}
                        </Header>
                        <Text align="center">{item.subtitle}</Text>
                    </NumberWrapper>
                ))}
            </StyledContainer>
        </SectionContainer>
    )
}

DNumbers.propTypes = {
    items: PropTypes.array,
    justify: PropTypes.string,
}
export default DNumbers
