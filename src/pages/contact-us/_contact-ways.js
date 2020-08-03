import React from 'react'
import styled from 'styled-components'
import { graphql, useStaticQuery } from 'gatsby'
import { Text } from '../../components/elements/typography'
import { Header, QueryImage } from 'components/elements'
import { SectionContainer, Flex } from 'components/containers'
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
        header: <Localize translate_text="Ask everyone" />,
        text: <Localize translate_text="Our Deriv support community can help you find answers." />,
        image: 'community',
        button: (
            <StyledLinkButton secondary="true" to={community_url}>
                {localize('Ask the community')}
            </StyledLinkButton>
        ),
    },
    {
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

const StyledFlex = styled(Flex)`
    margin: auto;
    max-width: 110rem;

    @media ${device.tabletL} {
        flex-direction: column;
        align-items: center;

        article {
            margin: 16px auto 0;
        }
        article:last-child {
            margin-bottom: 32px;
        }
    }
`
const ContactWrapper = styled.article`
    margin: 2rem;
    width: 38.4rem;
    padding: 3.2rem 2.4rem;
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
        <SectionContainer padding="unset" background="var(--color-grey-25)">
            <StyledFlex wrap="wrap">
                {contactways.map((item, idx) => {
                    return (
                        <ContactWrapper key={idx}>
                            <QueryImage data={data[item.image]} alt={item.header} width="24rem" />
                            <Header mt="2.4rem" size="2.4rem">
                                {item.header}
                            </Header>
                            <Text mb="3.4rem" mt="0.8rem">
                                {item.text}
                            </Text>
                            <div>{item.button}</div>
                        </ContactWrapper>
                    )
                })}
            </StyledFlex>
        </SectionContainer>
    )
}

export default ContactWays
