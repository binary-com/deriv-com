import React from 'react'
import styled from 'styled-components'
import { graphql, useStaticQuery } from 'gatsby'
import { Header, QueryImage } from 'components/elements'
import { LinkButton } from 'components/form'
import { Localize } from 'components/localization'
import { Container, SectionContainer, Flex } from 'components/containers'
import device from 'themes/device'

const query = graphql`
    query {
        community: file(relativePath: { eq: "community.png" }) {
            ...fadeIn
        }
    }
`
const StyledLinkButton = styled(LinkButton)`
    border-radius: 4px;
    width: fit-content;

    @media ${device.tabletL} {
        font-size: 14px;
        padding: 10px 16px;
    }
`
const StyledHeader = styled(Header)`
    @media ${device.tabletL} {
        text-align: center;
    }
`

const StyledFlex = styled(Flex)`
    @media ${device.tabletL} {
        margin-left: unset;
    }
`

const Community = () => {
    const data = useStaticQuery(query)

    return (
        <SectionContainer
            padding="4rem"
            background="var(--color-white)"
            style={{ borderTop: '1px solid var(--color-grey-8)' }}
        >
            <Container>
                <Flex tablet_direction="column" tablet_ai="center" max_width="92rem">
                    <QueryImage alt="community" data={data['community']} width="41rem" />
                    <StyledFlex tablet_ai="center" ml="5rem" direction="column">
                        <StyledHeader mt="1rem" as="h3" type="section-title">
                            <Localize translate_text="_t_Have a question?_t_" />
                        </StyledHeader>

                        <StyledHeader
                            size="var(--text-size-m)"
                            pt="0.8rem"
                            pb="3.4rem"
                            weight="normal"
                        >
                            <Localize translate_text="_t_Our Deriv support community can help you find answers._t_" />
                        </StyledHeader>

                        <StyledLinkButton
                            secondary
                            to=""
                            type="community"
                            external
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <Localize translate_text="_t_Ask the community_t_" />
                        </StyledLinkButton>
                    </StyledFlex>
                </Flex>
            </Container>
        </SectionContainer>
    )
}

export default Community
