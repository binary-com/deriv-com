import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import device from 'themes/device'
import { Container, SectionContainer } from 'components/containers'
import { Header, Text } from 'components/elements'

const NumberWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 32.8rem;

    ${Text} {
        padding-top: 0.8rem;
    }
`
const StyledContainer = styled(Container)`
    display: flex;
    width: 100%;
    justify-content: ${props => props.justify || 'space-between'};

    @media ${device.tabletL} {
        flex-direction: column;
    }
`

const DNumbers = ({ items, justify }) => {
    return (
        <SectionContainer padding="4rem">
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
