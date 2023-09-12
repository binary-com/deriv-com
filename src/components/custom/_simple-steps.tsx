import React from 'react'
import styled from 'styled-components'
import Button from './_button'
import { Header, Text } from 'components/elements'
import { Container, SectionContainer, Flex } from 'components/containers'
import device from 'themes/device'
import useHandleSignup from 'components/hooks/use-handle-signup'
import { TString } from 'types/generics'
import { Localize } from 'components/localization'
import { usePlatformQueryParam } from 'components/hooks/use-platform-query-param'

type TContent = {
    header?: TString
    icon?: React.ReactElement
    text?: TString
}

type SimpleStepsProps = {
    content?: TContent[]
    header?: TString
}

type ClientCardProps = {
    order?: string
}

const StyledSection = styled(SectionContainer)`
    position: relative;
    background-color: #f9fbff;

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
            font-size: 1.4rem;
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

const SimpleSteps = ({ header, content }: SimpleStepsProps) => {
    const handleSignup = useHandleSignup()
    const { is_deriv_go } = usePlatformQueryParam()

    return (
        <StyledSection>
            <Container direction="column">
                <TitleHeader align="center" as="h2" type="section-title">
                    {header && <Localize translate_text={header} />}
                </TitleHeader>
            </Container>
            <StyledFlex wrap="wrap">
                {content?.map(({ header, icon, text }) => {
                    return (
                        <ClientCard key={text}>
                            <Flex ai="center" height="fit-content">
                                <StyledHeader as="h3" type="sub-section-title">
                                    {header && <Localize translate_text={header} />}
                                </StyledHeader>
                                {icon}
                            </Flex>
                            {text && (
                                <Text>
                                    <Localize translate_text={text} />
                                </Text>
                            )}
                        </ClientCard>
                    )
                })}
            </StyledFlex>
            {!is_deriv_go ? (
                <LinkButtonWrapper>
                    <Button label="_t_Sign up now_t_" onClick={handleSignup} primary />
                </LinkButtonWrapper>
            ) : null}
        </StyledSection>
    )
}

export default SimpleSteps
