import React from 'react'
import { Container, SectionContainer } from 'components/containers'
import { Header, Text } from 'components/elements'
import { localize } from 'components/localization'

const SubmitABugReport = () => {
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
            </Container>
        </SectionContainer>
    )
}

export default SubmitABugReport
