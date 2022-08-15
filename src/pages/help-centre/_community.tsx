import React from 'react'
import styled from 'styled-components'
import { graphql, useStaticQuery } from 'gatsby'
import { Text, Header, QueryImage } from 'components/elements'
import { LinkButton } from 'components/form'
import { localize } from 'components/localization'
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

    @media ${device.tablet} {
        font-size: 14px;
        padding: 10px 16px;
    }
`
const StyledHeader = styled(Header)`
    @media ${device.tablet} {
        text-align: center;
    }
`

const StyledFlex = styled(Flex)`
    @media ${device.tablet} {
        margin-left: unset;

        ${Text} {
            text-align: center;
        }
    }
`

export const Community = () => {
    const data = useStaticQuery(query)
    return (
        <SectionContainer padding="4rem" background="var(--color-grey-25)">
            <Container>
                <Flex tablet_direction="column" tablet_ai="center" max_width="92rem">
                    <QueryImage alt="community" data={data['community']} width="41rem" />
                    <StyledFlex tablet_ai="center" ml="5rem" direction="column">
                        <StyledHeader mt="1rem" as="h3" type="section-title">
                            {localize('Have a question?')}
                        </StyledHeader>
                        <Text size="var(--text-size-m)" pt="0.8rem" pb="3.4rem">
                            {localize('Our Deriv support community can help you find answers.')}
                        </Text>
                        <StyledLinkButton
                            secondary
                            to=""
                            type="community"
                            external
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            {localize('Ask the community')}
                        </StyledLinkButton>
                    </StyledFlex>
                </Flex>
            </Container>
        </SectionContainer>
    )
}

export default Community
