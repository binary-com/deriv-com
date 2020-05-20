import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { localize } from 'components/localization'
import { LinkButton } from 'components/form'
import { Header, Text } from 'components/elements'
import { Container, SectionContainer } from 'components/containers'
import device from 'themes/device'

const ContentWrapper = styled(SectionContainer)`
    padding: 8rem 0;

    ${Container} {
        max-width: 99.6rem;
    }

    @media ${device.tablet} {
        padding: 8rem 10rem;
    }
`

const ButtonWrapper = styled.div`
    margin-top: 3.9rem;

    ${LinkButton} {
        width: 17.2rem;
    }
    @media ${device.tablet} {
        * {
            margin-top: 1rem;
            margin-right: 0;
        }
    }
`
export const WhatTrade = ({ header, sub_header }) => {
    return (
        <ContentWrapper>
            <Container direction="column">
                <Header mb="1.6rem" align="center" size="3.6rem">
                    {header}
                </Header>
                {sub_header.map((prop, idx) => {
                    return (
                        <Text mb="1.5rem" align="center" key={idx}>
                            {prop.text}
                        </Text>
                    )
                })}
                <ButtonWrapper>
                    <LinkButton to="/signup/" secondary="true">
                        {localize('Create free demo account')}
                    </LinkButton>
                </ButtonWrapper>
            </Container>
        </ContentWrapper>
    )
}
WhatTrade.propTypes = {
    header: PropTypes.string,
    sub_header: PropTypes.object,
}
