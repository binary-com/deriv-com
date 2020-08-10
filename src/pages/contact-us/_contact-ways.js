import React from 'react'
import styled from 'styled-components'
import { graphql, useStaticQuery } from 'gatsby'
import { Text } from '../../components/elements/typography'
import { Header, QueryImage } from 'components/elements'
import { SectionContainer, Container, Flex } from 'components/containers'
import { localize, Localize } from 'components/localization'
import { LinkButton } from 'components/form'
import device from 'themes/device'
import { community_url } from 'common/utility'

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
    height: 4rem;
    margin-top: 3.2rem;

    @media ${device.tabletL} {
        font-size: 1.75rem;
    }
`
const contactways = [
    {
        name: 'community',
        header: <Localize translate_text="Ask everyone" />,
        text: <Localize translate_text="Our Deriv support community can help you find answers." />,
        image: 'community',
        button: (
            <StyledLinkButton secondary="true" to={community_url} target="_blank">
                {localize('Ask the community')}
            </StyledLinkButton>
        ),
    },
    {
        name: 'help',
        header: <Localize translate_text="We’re here to help" />,
        text: (
            <Localize translate_text="See frequently asked questions on popular topics to get quick answers." />
        ),
        image: 'help',
        button: (
            <StyledLinkButton secondary="true" to="/help-centre">
                {localize('Visit our Help centre')}
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
    }
`

const ContactWrapper = styled.article`
    margin: 1.2rem;
    width: 48.6rem;
    height: 100%;
    min-height: 22rem;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    ${Text} {
        text-align: center;
    }
    ${Header} {
        text-align: center;
    }

    @media ${device.tabletL} {
        width: 100%;
        max-width: 55rem;
        margin-top: 0;
        padding: 3rem;

        ${Text} {
            font-size: 2rem;
        }
        ${Header} {
            font-size: 3rem;
        }
        ${Flex} {
            padding-bottom: 2rem;
            align-items: center;
        }
    }

    @media ${device.mobileL} {
        ${Header} {
            font-size: 1.9rem;
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
                                <QueryImage
                                    data={data[item.image]}
                                    alt={item.header}
                                    width="28.2rem"
                                />
                                <Header mt="2.4rem" as="h3">
                                    {item.header}
                                </Header>
                                <Header as="h4" weight="normal" mb="3.4rem" mt="0.8rem">
                                    {item.text}
                                </Header>
                                <div>{item.button}</div>
                            </ContactWrapper>
                        )
                    })}
                </GridLayout>
            </Container>
        </SectionContainer>
    )
}

export default ContactWays
