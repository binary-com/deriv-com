import React from 'react'
import styled from 'styled-components'
import device from 'themes/device'
import { Container, SectionContainer } from 'components/containers'
import { Header, Text, Image } from 'components/elements'
import { localize } from 'components/localization'

const StyledSection = styled(SectionContainer)`
    background-color: var(--color-white);
    box-shadow: inset 1px 0 0 1px var(--color-grey-2);

    @media ${device.tabletL} {
        padding: 1.74rem 0 4rem 0;
    }
`
const StyledContainer = styled(Container)`
    display: flex;
    flex-direction: column;
`
const Content = styled.div`
    width: 100%;
    max-width: 58.8rem;
    display: flex;
    flex-direction: column;
    margin-right: 2.4rem;
`
const ImageWrapper = styled.div`
    display: grid;
`
const StyledHeader = styled(Header)`
    font-size: 3.6rem;
    line-height: 1.25;
`
const Row = styled.div`
    flex-direction: ${props => props.flex_direction};
    width: 100%;
    display: flex;
`
export const DTradingSingle = ({ trading }) => {
    return (
        <StyledSection>
            <StyledContainer>
                {trading.map((item, index) => (<>
                    <Row flex_direction={index % 2 === 0 ? 'row' : 'row-reverse'}>
                        <Content>
                            <StyledHeader>
                                {item.title}
                            </StyledHeader>
                            <Text>{item.subtitle}</Text>
                        </Content>
                        <ImageWrapper>
                            <Image img_name={item.image_name} alt={item.image_alt} />
                        </ImageWrapper>
                    </Row>
                </>))}
            </StyledContainer>
        </StyledSection >
    )
}
