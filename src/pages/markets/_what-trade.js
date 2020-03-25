import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { localize, LocalizedLink } from 'components/localization'
import { Header, Text } from 'components/elements'
import { Container } from 'components/containers'
import { Button } from 'components/form'
import device from 'themes/device'

const ContentWrapper = styled.section`
    display: flex;
    flex-direction: column;
    width: 100%;
    padding: 8rem 22.2rem;

    @media ${device.tablet} {
        padding: 8rem 14rem;
    }
`
const DemoButon = styled(Button)`
    font-size: 1.4rem;
    width: 18.9rem;
    height: 4rem;
    border-radius: 4px;
`
const ButtonWrapper = styled.div`
    display: flex;
    flex-direction: row;

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
export const WhatTrade = ({ header, sub_header, learn_more_section }) => {
    const handleScrollToElement = () => {
        learn_more_section.current.scrollIntoView()
    }
    return (
        <ContentWrapper>
            <Container direction="column">
                <Header margin="0 0 1.6rem 0" align="center" font_size="3.6rem">
                    {localize(header)}
                </Header>
                {sub_header.map((prop, idx) => {
                    return (
                        <Text margin="0 0 1.5rem 0" align="center" key={idx}>
                            {prop.text}
                        </Text>
                    )
                })}
                <ButtonWrapper>
                    <LocalizedLink to="/signup/">
                        <DemoButon type="submit" secondary="true">
                            {localize('Create demo account')}
                        </DemoButon>
                    </LocalizedLink>
                    <Button tertiary onClick={handleScrollToElement}>
                        {localize('Learn more about forex')}
                    </Button>
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
