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
    @media ${device.tabletL} {
        padding: 1.2rem;
        width: auto;
    }
`
const StyledText = styled(Text)`
    padding-top: 8px;

    @media ${device.tabletL} {
        padding-top: 0;
        margin: 12px 0;
    }
`

const StyledContainer = styled(Container)`
    display: flex;
    width: 100%;
    @media ${device.tabletL} {
        flex-wrap: wrap;
        margin: 2rem 1.2rem 0;
    }
`

const SectionContainerWrapper = styled(SectionContainer)`
    padding: 4rem;
    @media ${device.tabletL} {
        padding: 0;
    }
`

const DNumbers = ({ items, justify }) => {
    return (
        <SectionContainerWrapper>
            <StyledContainer justify={justify || 'space-between'}>
                {items.map((item, index) => (
                    <NumberWrapper key={index}>
                        <Header as="h2" type="page-title" align="center">
                            {item.title}
                        </Header>
                        <StyledText align="center">{item.subtitle}</StyledText>
                    </NumberWrapper>
                ))}
            </StyledContainer>
        </SectionContainerWrapper>
    )
}

DNumbers.propTypes = {
    items: PropTypes.array,
    justify: PropTypes.string,
}
export default DNumbers
