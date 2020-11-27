import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { localize } from 'components/localization'
import { LinkButton } from 'components/form'
import { Header, Text } from 'components/elements'
import { Container, SectionContainer, Flex, Show } from 'components/containers'
import device from 'themes/device'
import Pattern from 'images/svg/pattern.svg'
import PatternMobile from 'images/svg/pattern-mobile.svg'

const StyledSection = styled(SectionContainer)`
    position: relative;

    ${Container} {
        ${Header} {
            z-index: 1;
        }
    }
    @media ${device.tabletL} {
        padding: 40px 0;
    }
`
const StyledFlex = styled(Flex)`
    margin: 4rem 0 0 0;

    article:first-child {
        margin-left: 0;
    }

    @media ${device.tabletL} {
        flex-direction: column;
        align-items: center;

        article {
            margin: 16px auto 0;
        }
        article:first-child {
            margin-left: auto;
        }
        article:last-child {
            margin-bottom: 32px;
        }
    }
`
const StyledHeader = styled(Header)`
    @media ${device.tabletL} {
        font-size: 16px;
    }
`

const ClientCard = styled.article`
    margin: 0 0 0 2rem;
    background-color: var(--color-white);
    border-radius: 4px;
    box-shadow: 0 4px 8px 0 rgba(14, 14, 14, 0.1);
    width: 31.6rem;
    padding: 3.2rem 2.4rem;
    height: 100%;
    position: relative;

    ${Flex} {
        padding-bottom: 0.8rem;
    }

    @media (max-width: 1185px) {
        margin: 2rem;
        order: ${(props) => (props.order ? props.order : '')};
    }
    @media ${device.tabletL} {
        width: 100%;
        max-width: 328px;
        margin-top: 0;
        padding: 24px;

        ${Text} {
            font-size: 2rem;
        }
        ${Flex} {
            padding-bottom: 8px;
        }
    }
`
const BackgroundPattern = styled.img`
    z-index: 0;
    position: absolute;
    width: 100%;
    height: 100%;
    max-width: 1440px;
    max-height: 497px;
    margin-left: auto;
    margin-right: auto;
    left: 0;
    right: 0;
    bottom: 0;
`
const MobileBackgroundPattern = styled.img`
    z-index: 0;
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
`
const LinkButtonWrapper = styled.div`
    margin-top: 4.2rem;
    text-align: center;
    height: 3rem;

    ${LinkButton} {
        position: relative;
    }

    @media ${device.tabletL} {
        margin-top: 1rem;
    }
`
const SimpleSteps = ({ header, content, sign_up }) => (
    <StyledSection>
        <Show.Desktop>
            <BackgroundPattern src={Pattern} alt="pattern" />
        </Show.Desktop>
        <Show.Mobile>
            <MobileBackgroundPattern src={PatternMobile} alt="pattern mobile" />
        </Show.Mobile>
        <Container direction="column">
            <Header align="center" as="h3" type="section-title">
                {header}
            </Header>
        </Container>
        <StyledFlex wrap="wrap">
            {content.map((item, idx) => {
                return (
                    <ClientCard key={idx}>
                        <Flex ai="center">
                            <StyledHeader as="h4" type="sub-section-title">
                                {item.header}
                            </StyledHeader>
                            {item.icon}
                        </Flex>
                        <Text>{item.text}</Text>
                    </ClientCard>
                )
            })}
        </StyledFlex>
        {sign_up && (
            <LinkButtonWrapper>
                <LinkButton to="/signup/" secondary="true">
                    {localize('Sign up now')}
                </LinkButton>
            </LinkButtonWrapper>
        )}
    </StyledSection>
)
SimpleSteps.propTypes = {
    content: PropTypes.array.isRequired,
    header: PropTypes.object.isRequired,
    sign_up: PropTypes.bool,
}
export default SimpleSteps
