import React from 'react'
import styled from 'styled-components'
import { graphql, useStaticQuery } from 'gatsby'
import { Container, SectionContainer, Flex } from 'components/containers'
import { Localize } from 'components/localization'
import { Header, QueryImage } from 'components/elements'
import { useBrowserResize } from 'components/hooks/use-browser-resize'
import device from 'themes/device'

const Wrapper = styled(Flex)`
    background-image: linear-gradient(216deg, #122734 20.14%, #060c11 86.24%, #060c11 86.24%);
    border-radius: 10px;
    width: 100%;
    padding: 0 32px 0 100px;
    align-items: flex-end;

    @media ${device.tabletL} {
        flex-direction: column;
        padding: 32px 24px;
    }
`

type LinkTextProps = {
    sm?: boolean
}

const LinkText = styled.a<LinkTextProps>`
    color: var(--color-red);
    text-decoration: none;
    font-size: ${({ sm }) => (sm ? '14px' : '4.8rem')};

    @media ${device.tabletL} {
        font-size: ${({ sm }) => (sm ? '14px' : '28px')};
    }
`

const TextWrap = styled.div`
    padding: 83px 0;
    width: 570px;
    margin-right: 60px;

    @media ${device.tabletL} {
        width: 100%;
        padding: 0;
        margin-right: 0;

        p {
            text-align: center;
        }
    }
`

const ImageWrap = styled.div`
    width: 320px;
    margin: 32px 0 0 32px;

    @media ${device.tabletL} {
        padding: 24px 0 0;
        margin: 0 auto;
    }

    @media ${device.tablet} {
        width: 280px;
    }

    @media ${device.mobileM} {
        width: 240px;
    }
`

const query = graphql`
    query {
        bug_report_desktop: file(relativePath: { eq: "bug-bounty/bug-report-desktop.png" }) {
            ...heroImage
        }
        bug_report_mobile: file(relativePath: { eq: "bug-bounty/bug-report-mobile.png" }) {
            ...heroImage
        }
    }
`

const SubmitABugReport = () => {
    const data = useStaticQuery(query)
    const [is_mobile] = useBrowserResize()
    const bug_report_image = is_mobile ? data['bug_report_mobile'] : data['bug_report_desktop']

    return (
        <SectionContainer>
            <Container direction="column">
                <Wrapper>
                    <TextWrap>
                        <Header type="heading-2" color="white" as="p" weight="700">
                            <Localize
                                translate_text="Send your reports to our <0>Bug Bounty Platform</0>"
                                components={[
                                    <LinkText
                                        key={0}
                                        href="https://hackerone.com/binary"
                                        target="_blank"
                                    />,
                                ]}
                            />
                        </Header>
                    </TextWrap>

                    <ImageWrap>
                        <QueryImage
                            data={bug_report_image}
                            alt="Try Deriv’s trading platforms and trading apps on your laptop or mobile phones."
                            width="100%"
                        />
                    </ImageWrap>
                </Wrapper>

                <Header
                    p="0 18px"
                    align="center"
                    type="paragraph-2"
                    mt="16px"
                    as="p"
                    weight="normal"
                >
                    <Localize
                        translate_text="Please read and understand the Deriv Bug Bounty Program’s <0>terms and conditions</0> before you participate in the program."
                        components={[
                            <LinkText key={0} href="/terms-and-conditions/#business-partners" sm />,
                        ]}
                    />
                </Header>
            </Container>
        </SectionContainer>
    )
}

export default SubmitABugReport
