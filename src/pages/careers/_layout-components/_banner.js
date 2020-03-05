import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { EmailButton } from './_email-button'
import { Text, Header } from 'components/elements'
import { Flex } from 'components/containers'
import { localize } from 'components/localization'

const Section = styled.section`
    background-color: var(--color-black-3);
    padding: 3.2rem 0;

    ${Header} {
        padding-bottom: 0.8rem;
    }
    ${Text} {
        max-width: 55.9rem;
        padding-bottom: 2.4rem;
    }
`

export const Banner = ({ header, text, button_text }) => (
    <Section>
        <Flex direction="column" ai="center">
            <Header align="center" as="h3" color="white">
                {header}
            </Header>
            <Text align="center" color="white">
                {text}
            </Text>
            <EmailButton text={button_text} />
        </Flex>
    </Section>
)

export const RoleBanner = () => (
    <Banner
        header={localize('Don’t see your role listed?')}
        text={localize(
            'Even if you don’t see a role that interests you, please send us your resume. We will contact you if a job that matches your background becomes available.',
        )}
        button_text={localize('Send us your CV')}
    />
)

Banner.propTypes = {
    button_text: PropTypes.string,
    header: PropTypes.string,
    text: PropTypes.string,
}
