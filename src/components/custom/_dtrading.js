import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import device from 'themes/device'
import { Container, SectionContainer } from 'components/containers'
import { Header, Text, Image } from 'components/elements'

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

    div:first-child {
        margin-top: 0;
    }
`
const Content = styled.div`
    width: 100%;
    max-width: 58.8rem;
    display: flex;
    flex-direction: column;
    margin-right: ${props => props.margin_right};

    ${Text} {
        margin-top: 0.8rem;
    }

    @media ${device.tabletL} {
        margin: 0 auto;
    }
`

const ImageWrapper = styled.div`
    max-width: 58.8rem;
    width: 100%;
    max-height: 30rem;
    margin-right: ${props => props.margin_right};

    @media ${device.tabletL} {
        margin: 2rem auto;
    }
`
const StyledHeader = styled(Header)`
    margin-top: ${props => props.second_title_margin ? '2.4rem' : '4rem'};
    font-size: 3.6rem;
    line-height: 1.25;

    @media ${device.tabletL} {
        margin-top: 0;
    }
`
const Row = styled.div`
    flex-direction: ${props => props.flex_direction};
    width: 100%;
    display: flex;
    margin-top: 4rem;

    @media ${device.tabletL} {
        flex-direction: column;
    }
`
const DTrading = ({ trading, reverse, two_title }) => {
    return (
        <StyledSection>
            <StyledContainer>
                {trading.map((item, index) => {
                    let is_even = reverse ? (index + 1) % 2 : index % 2
                    return (<Row flex_direction={!is_even ? 'row' : 'row-reverse'} key={index}>
                        <Content margin_right={!is_even ? '2.4rem' : '0'}>
                            <StyledHeader>
                                {item.title}
                            </StyledHeader>
                            <Text>{item.subtitle}</Text>
                            {two_title ? (<>
                                <StyledHeader second_title_margin='true'>
                                    {item.second_title}
                                </StyledHeader>
                                <Text>{item.second_subtitle}</Text>
                            </>) : null}
                        </Content>
                        <ImageWrapper margin_right={!is_even ? '0' : '2.4rem'}>
                            <Image img_name={item.image_name} alt={item.image_alt} width='100%' />
                        </ImageWrapper>
                    </Row>)
                })}
            </StyledContainer>
        </StyledSection >
    )
}

DTrading.propTypes = {
    reverse: PropTypes.bool,
    trading: PropTypes.array,
    two_title: PropTypes.bool,
}

export default DTrading