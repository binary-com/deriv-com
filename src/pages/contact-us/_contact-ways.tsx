import React from 'react'
import styled from 'styled-components'
import { TSupport } from './_types'
import { Header } from 'components/elements'
import { SectionContainer, Container, Flex } from 'components/containers'
import { Localize } from 'components/localization'
import { LinkButton } from 'components/form'
import device from 'themes/device'

const StyledLinkButton = styled(LinkButton)`
    border-radius: 4px;

    @media ${device.tabletL} {
        font-size: 14px;
        padding: 12px 16px;
    }
`

const GridLayout = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 2.4rem;

    @media ${device.tablet} {
        grid-template-columns: 1fr;
        grid-gap: 40px;
    }
`

const ImgWrapper = styled.div`
    width: 28.2rem;

    @media ${device.mobileL} {
        width: 100%;
    }
`

const ContactWrapper = styled.article`
    width: 48.6rem;
    height: 100%;
    min-height: 22rem;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;

    @media ${device.tabletL} {
        width: 100%;
        max-width: 55rem;
        margin-top: 0;

        ${Flex} {
            padding-bottom: 2rem;
            align-items: center;
        }
    }

    @media ${device.tablet} {
        h4 {
            height: auto;
        }
    }
`

const ContactWays = ({ support_section }: TSupport) => {
    return (
        <SectionContainer padding="4rem 0" background="var(--color-grey-25)">
            <Container>
                <GridLayout>
                    {support_section.map(
                        (
                            {
                                header,
                                sub_header,
                                image,
                                link_title,
                                link_url,
                                alt_image,
                                button_type,
                            },
                            idx,
                        ) => {
                            return (
                                <ContactWrapper key={idx}>
                                    <ImgWrapper>
                                        <img
                                            src={image?.localFile?.publicURL}
                                            alt={alt_image}
                                            width="100%"
                                            loading="eager"
                                        />
                                    </ImgWrapper>

                                    <Header mt="2.4rem" as="h3" type="section-title" align="center">
                                        <Localize translate_text={header} />
                                    </Header>
                                    <Header
                                        as="h4"
                                        type="sub-section-title"
                                        weight="normal"
                                        mb="2.4rem"
                                        mt="0.8rem"
                                        align="center"
                                    >
                                        <Localize translate_text={sub_header} />
                                    </Header>
                                    {button_type === 'community' ? (
                                        <StyledLinkButton
                                            secondary
                                            external
                                            to=""
                                            type="community"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            <Localize translate_text={link_title} />
                                        </StyledLinkButton>
                                    ) : (
                                        <StyledLinkButton secondary to={link_url}>
                                            <Localize translate_text={link_title} />
                                        </StyledLinkButton>
                                    )}
                                </ContactWrapper>
                            )
                        },
                    )}
                </GridLayout>
            </Container>
        </SectionContainer>
    )
}

export default ContactWays
