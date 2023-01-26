import React from 'react'
import styled from 'styled-components'
import { graphql, useStaticQuery } from 'gatsby'
import { TString } from 'types/generics'
import { Header, QueryImage } from 'components/elements'
import { SectionContainer, Container, Flex } from 'components/containers'
import { Localize } from 'components/localization'
import { LinkButton } from 'components/form'
import device from 'themes/device'

const query = graphql`
    query {
        community: file(relativePath: { eq: "community.png" }) {
            ...fadeIn
        }
        help: file(relativePath: { eq: "help.png" }) {
            ...fadeIn
        }
    }
`

const StyledLinkButton = styled(LinkButton)`
    border-radius: 4px;

    @media ${device.tabletL} {
        font-size: 14px;
        padding: 12px 16px;
    }
`

const header_text: TString = '_t_Ask everyone_t_'
const answers_text: TString = '_t_Our Deriv support community can help you find answers._t_'
const ask_the_community_text: TString = '_t_Ask the community_t_'
const help_text: TString = '_t_We’re here to help_t_'
const frequently_asked_questions_text: TString =
    '_t_See frequently asked questions on popular topics to get quick answers._t_'
const visit_text: TString = '_t_Visit our Help centre_t_'

const contactways = [
    {
        name: 'community',
        header: <Localize translate_text={header_text} />,
        text: <Localize translate_text={answers_text} />,
        image: 'community',
        img_alt: "Deriv's support community",
        button: (
            <StyledLinkButton
                secondary
                external
                to=""
                type="community"
                target="_blank"
                rel="noopener noreferrer"
            >
                <Localize translate_text={ask_the_community_text} />
            </StyledLinkButton>
        ),
    },
    {
        name: 'help',
        header: <Localize translate_text={help_text} />,
        text: <Localize translate_text={frequently_asked_questions_text} />,
        image: 'help',
        img_alt: "Deriv's help centre",
        button: (
            <StyledLinkButton secondary to="/help-centre/">
                <Localize translate_text={visit_text} />
            </StyledLinkButton>
        ),
    },
]

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

const ContactWays = () => {
    const data = useStaticQuery(query)
    return (
        <SectionContainer padding="4rem 0" background="var(--color-grey-25)">
            <Container>
                <GridLayout>
                    {contactways.map((item, idx) => {
                        return (
                            <ContactWrapper key={idx}>
                                <ImgWrapper>
                                    <QueryImage
                                        data={data[item.image]}
                                        alt={item.img_alt}
                                        width="100%"
                                        loading="eager"
                                    />
                                </ImgWrapper>

                                <Header mt="2.4rem" as="h3" type="section-title" align="center">
                                    {item.header}
                                </Header>
                                <Header
                                    as="h4"
                                    type="sub-section-title"
                                    weight="normal"
                                    mb="2.4rem"
                                    mt="0.8rem"
                                    align="center"
                                >
                                    {item.text}
                                </Header>
                                {item.button}
                            </ContactWrapper>
                        )
                    })}
                </GridLayout>
            </Container>
        </SectionContainer>
    )
}

export default ContactWays
