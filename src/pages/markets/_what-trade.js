import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { localize } from 'components/localization'
import { LinkButton } from 'components/form'
import { Header, Text } from 'components/elements'
import { Container } from 'components/containers'
import device from 'themes/device'

const ContentWrapper = styled.section`
    display: flex;
    flex-direction: column;
    width: 100%;
    padding: 8rem 22.2rem;

    ${Container} {
        max-width: 99.6rem;
    }

    @media ${device.tablet} {
        padding: 8rem 10rem;
    }
`

const ButtonWrapper = styled.div`
    display: flex;
    flex-direction: row;
    margin-top: 1.7rem;

    ${LinkButton} {
        width: 23.7rem;
    }
    * {
        margin-right: 1.6rem;
    }
    @media ${device.tablet} {
        flex-direction: column;

        * {
            margin-top: 1rem;
            margin-right: 0;
        }
    }
`
export const WhatTrade = ({ header, sub_header }) => {
    // const handleScrollToElement = () => {
    //     learn_more_section.current.scrollIntoView()
    // }
    return (
        <ContentWrapper>
            <Container direction="column">
                <Header mb="1.6rem" align="center" size="3.6rem">
                    {localize(header)}
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
                        {localize('Create demo account')}
                    </LinkButton>

                    {/* <Button tertiary onClick={handleScrollToElement}>
                        {localize('Learn more about forex')}
                    </Button> */}
                </ButtonWrapper>
            </Container>
        </ContentWrapper>
    )
}
WhatTrade.propTypes = {
    header: PropTypes.string,
    learn_more_section: PropTypes.object,
    sub_header: PropTypes.object,
}
