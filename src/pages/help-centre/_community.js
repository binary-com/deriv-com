import React from 'react'
import styled from 'styled-components'
import { graphql, useStaticQuery } from 'gatsby'
import { Text, Header, QueryImage } from 'components/elements'
import { LinkButton } from 'components/form'
import { localize } from 'components/localization'
import { Container, SectionContainer, Flex } from 'components/containers'
import { community_url } from 'common/utility'

const query = graphql`
    query {
        community: file(relativePath: { eq: "community.png" }) {
            ...fadeIn
        }
    }
`
const StyledLinkButton = styled(LinkButton)`
    border-radius: 4px;
    height: 4rem;
    width: fit-content;
`

export const Community = () => {
    const data = useStaticQuery(query)
    return (
        <SectionContainer padding="4rem" background="var(--color-grey-25)">
            <Container>
                <Flex max_width="92rem">
                    <QueryImage data={data['community']} width="41rem" />
                    <Flex ml="5rem" direction="column">
                        <Header mt="1rem" as="h3">
                            {localize('Have a question?')}
                        </Header>
                        <Text size="var(--text-size-m)" pt="0.8rem" pb="3.4rem">
                            {localize('Our Deriv support community can help you find answers.')}
                        </Text>
                        <StyledLinkButton secondary="true" to={community_url}>
                            {localize('Ask the community')}
                        </StyledLinkButton>
                    </Flex>
                </Flex>
            </Container>
        </SectionContainer>
    )
}
