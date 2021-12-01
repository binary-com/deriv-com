import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import { Container, Flex, SectionContainer } from 'components/containers'
import { Header, Text, BackgroundImage } from 'components/elements'
import { localize } from 'components/localization'

const query = graphql`
    query {
        form_background: file(relativePath: { eq: "security/security_form_submission.jpg" }) {
            ...submissionFormImage
        }
    }
`

const SubmitABugReport = () => {
    const data = useStaticQuery(query)

    return (
        <SectionContainer>
            <Container direction="column">
                <Header type="heading-2" as="h2" align="center" mb="8px">
                    {localize('Submit a bug report')}
                </Header>
                <Text>
                    {localize(
                        'Send us a report using the form below. We’ll contact you after we’ve reviewed your report.',
                    )}
                </Text>

                <Flex>
                    <BackgroundImage data={data}></BackgroundImage>
                </Flex>
            </Container>
        </SectionContainer>
    )
}

export default SubmitABugReport
