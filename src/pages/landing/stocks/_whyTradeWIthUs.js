import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { Container, Flex, SectionContainer } from 'components/containers'
import { Header, Text } from 'components/elements'
import device from 'themes/device.js'

const Wrapper = styled(Flex)`
    flex-wrap: wrap;
    flex-direction: row;
    @media ${device.tabletL} {
        flex-direction: column;
        justify-content: center;
    }
`

const StyledImage = styled.img`
    margin: 0 auto 1.6rem;
    width: 64px;
    height: 64px;
`

const Card = styled(Flex)`
    max-width: 38.4rem;
    margin: 3.6rem 1.2rem;
    justify-content: flex-start;
    flex-wrap: wrap;

    @media ${device.tabletL} {
        width: 100%;
        max-width: 58.8rem;
        margin: 2rem auto;
        justify-content: center;
    }
`

const WhyTradeWithUs = ({ itemsArr, mainTitle, columnPerRow }) => {
    let CardWidth = 100 / columnPerRow - 3 + '%'

    return (
        <SectionContainer background="white">
            <Container direction="column">
                <Header as="h2" type="page-title" align="center" mb="4rem">
                    {mainTitle}
                </Header>
                <Wrapper>
                    {itemsArr.map((item, index) => {
                        return (
                            <Card direction="column" key={index} width={CardWidth}>
                                <StyledImage src={item.icon} alt={item.image_alt} />
                                <Header as="h4" type="sub-section-title" mb="0.8rem" align="center">
                                    {item.title}
                                </Header>
                                {item.desc && <Text align="center">{item.desc}</Text>}
                            </Card>
                        )
                    })}
                </Wrapper>
            </Container>
        </SectionContainer>
    )
}

WhyTradeWithUs.propTypes = {
    columnPerRow: PropTypes.number,
    itemsArr: PropTypes.array,
    mainTitle: PropTypes.string,
}

export default WhyTradeWithUs
