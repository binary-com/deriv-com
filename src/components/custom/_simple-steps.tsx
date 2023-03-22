import React, { ReactElement, ReactNode } from 'react'
import styled from 'styled-components'
import Button from './_button'
import { localize } from 'components/localization'
import { Header, Text } from 'components/elements'
import { Container, SectionContainer, Flex, Desktop, Mobile } from 'components/containers'
import device from 'themes/device'
import useHandleSignup from 'components/hooks/use-handle-signup'
import useAuthCheck from 'components/hooks/use-auth-check'
import { usePlatformQueryParam } from 'components/hooks/use-platform-query-param'

type SimpleStepsProps = {
    content?: { header?: ReactNode; icon?: HTMLImageElement; text?: ReactElement }[]
    header?: string
    sign_up?: boolean
}

type ClientCardProps = {
    order?: string
}

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
        margin: 2rem 0 0 0;

        article {
            margin: 16px auto 0;
        }
        article:first-child {
            margin-left: auto;
        }
    }
`
const StyledHeader = styled(Header)`
    @media ${device.tabletL} {
        font-size: 16px;
    }
`

const TitleHeader = styled(Header)`
    @media ${device.tabletL} {
        font-size: 24px;
        line-height: 1.5;
    }
`

const ClientCard = styled.article<ClientCardProps>`
    margin: 0 0 0 2rem;
    background-color: var(--color-white);
    border-radius: 4px;
    box-shadow: 0 4px 8px 0 rgba(14, 14, 14, 0.1);
    width: 31.6rem;
    padding: 3.2rem 2.4rem;
    height: auto;
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

const LinkButtonWrapper = styled(Flex)`
    margin-top: 32px;
    text-align: center;
    justify-content: center;
`

const StyledLinkButton = styled(Button)`
    height: 40px;
    width: auto;
    border-radius: 4px;
    position: relative;
    white-space: nowrap;
`

const SimpleSteps = ({ header, content, sign_up }: SimpleStepsProps) => {
    const handleSignup = useHandleSignup()
    const [is_logged_in] = useAuthCheck()
    const { is_deriv_go } = usePlatformQueryParam()

    return (
        <StyledSection>
            <Container direction="column">
                <TitleHeader align="center" as="h2" type="section-title">
                    {header}
                </TitleHeader>
            </Container>
            <StyledFlex wrap="wrap">
                {content.map((item, idx) => {
                    return (
                        <ClientCard
                            key={
                                typeof item.text === 'string'
                                    ? item.text
                                    : item.text.props.translate_text
                            }
                        >
                            <Flex ai="center" height="fit-content">
                                <StyledHeader as="h3" type="sub-section-title">
                                    {item.header}
                                </StyledHeader>
                                {item.icon}
                            </Flex>
                            <Text>{item.text}</Text>
                        </ClientCard>
                    )
                })}
            </StyledFlex>
            <LinkButtonWrapper>
                <Button label="_t_Sign up now_t_" onClick={handleSignup} primary />
            </LinkButtonWrapper>
        </StyledSection>
    )
}

export default SimpleSteps
