import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { SectionContainer } from 'components/containers'
import { Header, Text, Image } from 'components/elements'
import { localize } from 'components/localization'
import device from 'themes/device'

const StyledContainer = styled(SectionContainer)`
    section:last-child {
        padding-bottom: 0;
    }
`
const Row = styled(SectionContainer)`
    display: flex;
    flex-direction: ${props => props.flex_direction};
    justify-content: space-between;
    padding: 4rem 0;

    div {
        width: 100%;
        max-width: 58.8rem;
    }

    @media ${device.tabletL} {
        flex-direction: column;

        div {
            max-width: unset;
        }
    }
`
const Content = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 4rem;

    @media ${device.tabletL} {
        ${Text, Header} {
            text-align: center;
        }
    }
`
const WhyUs = ({ items }) => {
    return (
        <StyledContainer>
            <Header font_size='3.6rem' align='center'>
                {localize('Why partner with us')}
            </Header>
            {items.map((item, index) => {
                let is_even = index % 2
                return (
                    <Row flex_direction={is_even ? 'row-reverse' : 'row'} key={index}>
                        <Content>
                            <Header font_size='2.8rem'>{item.title}</Header>
                            <Text>{item.subtitle}</Text>
                        </Content>
                        <Image
                            img_name={item.image_name}
                            alt={item.image_alt}
                            width="100%"
                        />
                    </Row>
                )
            })}
        </StyledContainer>
    )
}
WhyUs.propTypes = {
    items: PropTypes.array
}
export default WhyUs