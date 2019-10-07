import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Link } from 'gatsby'
import {
    SectionContainer,
    FlexGridContainer,
} from 'components/containers/container'
import { Card } from 'components/elements/card'
import { Header } from 'components/elements/typography.js'
import { localize } from 'components/localization'
import DTrader from 'images/svg/dtrader-48.svg'
import DMT5 from 'images/svg/dmt5-48.svg'
import device from 'themes/device'

const HeaderWrapper = styled.div`
    margin-bottom: 4rem;
`
const StyledHeader = styled(Header)`
    @media ${device.tabletS} {
        font-size: 3.6rem;
    }
`

const StyledLink = styled(Link)`
    text-decoration: none;
`

const StyledSubHeader = styled(Header)`
    margin: 0.8rem auto;
    max-width: ${props => props.maxWidth || ''};
`

export const OtherPlatform = ({ header, subHeader }) => (
    <SectionContainer>
        <HeaderWrapper>
            <StyledHeader font_size="4.8rem" align="center" lh="5rem">
                {header ? header : localize('Check out our other platforms')}
            </StyledHeader>
            {subHeader && (
                <StyledSubHeader
                    as="h4"
                    align="center"
                    weight="500"
                    maxWidth="67.6rem"
                >
                    {localize(
                        'Whether you’re a beginner or a seasoned trader, our trading experience is something you’ll love.',
                    )}
                </StyledSubHeader>
            )}
        </HeaderWrapper>
        <FlexGridContainer
            content_width="32.8rem"
            gap="1rem"
            grid="3"
            justify="center"
        >
            <StyledLink to="/dtrader">
                <Card
                    title={localize('DTrader')}
                    Icon={DTrader}
                    content={[
                        localize(
                            'Start trading now with a powerful, yet easy-to-use platform.',
                        ),
                    ]}
                    is_inline_icon
                    width="32.8rem"
                    min_height="22.4rem"
                />
            </StyledLink>
            <StyledLink to="/dtrader">
                <Card
                    title={localize('DBot')}
                    Icon={DTrader}
                    content={[
                        localize('Automate your trading ideas without coding.'),
                    ]}
                    is_inline_icon
                    width="32.8rem"
                    min_height="22.4rem"
                />
            </StyledLink>
            <StyledLink to="/dmt5">
                <Card
                    title={localize('DMT5')}
                    Icon={DMT5}
                    content={[
                        localize(
                            'Trade with the platform of choice for professionals.',
                        ),
                    ]}
                    is_inline_icon
                    width="32.8rem"
                    min_height="22.4rem"
                />
            </StyledLink>
        </FlexGridContainer>
    </SectionContainer>
)

OtherPlatform.propTypes = {
    header: PropTypes.string,
    subHeader: PropTypes.string,
}
