import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { localize } from 'components/localization'
import { Container, Flex, SectionContainer } from 'components/containers'
import { Header } from 'components/elements'
import device from 'themes/device.js'
import Info from 'images/svg/trade-types/info.svg'

const StyledSectionContainer = styled(SectionContainer)`
    padding: 9.1rem 0 7.7rem 0;
    background-color: var(--color-grey-25);

    @media ${device.tabletL} {
        padding: 29px 0 40px 0;
    }
`

const StyledHeader = styled(Header)`
    text-align: center;
    font-size: 4.8rem;

    @media ${device.tabletL} {
        margin-bottom: 17px;
        font-size: 24px;
    }
`

const NoticeWrapper = styled(Flex)`
    width: 50%;
    margin: 3.2rem 0 0 2.4rem;
    justify-self: flex-start;
    justify-content: flex-start;

    @media ${device.tabletL} {
        width: 100%;
    }
`

const HowTo = ({ Steps, active_tab }) => {
    return (
        <StyledSectionContainer>
            <Container justify="center" direction="column">
                <StyledHeader as="h2">{localize('How to subscribe to an MT5 signal')}</StyledHeader>
                <Steps active_tab={active_tab} />
                <NoticeWrapper>
                    <Info />
                </NoticeWrapper>
            </Container>
        </StyledSectionContainer>
    )
}

HowTo.propTypes = {
    active_tab: PropTypes.string,
    Steps: PropTypes.func,
    title: PropTypes.object,
}
export default HowTo
