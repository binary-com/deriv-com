import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
//import { EmailButton } from './_email-button'
import { localize } from 'components/localization'
import { Text, Header, LocalizedLinkText } from 'components/elements'
import { Flex } from 'components/containers'
import Email from 'images/svg/career-email.svg'

const MailLink = styled(LocalizedLinkText)`
    color: var(--color-red);
`

const Section = styled.section`
    background-color: var(--color-black-3);
    padding: 3.2rem 0;

    ${Header} {
        padding-bottom: 0.8rem;
    }
    ${Text} {
        max-width: 55.9rem;
    }
`
const JobMailSection = styled.section`
    background-color: var(--color-black-3);
    padding: 3.2rem 0;
    margin-top: 6rem;
    margin-bottom: 7rem;

    ${Text} {
        max-width: 55.9rem;
    }
`

export const Banner = ({ header, p1, p2, p3 }) => (
    <Section>
        <Flex direction="column" ai="center" justify-content="center">
            <Header align="center" as="h3" color="white">
                {header}
            </Header>
            <Text align="center" color="white">
                {p1}
            </Text>
            <Text align="center" color="white" style={{ marginBottom: '2.4rem' }}>
                {p2}
            </Text>
            <Text align="center" color="white" style={{ marginBottom: '2.4rem' }}>
                {p3}
                <MailLink to="mailto:recruitment@deriv.hr" external>
                    {localize('recruitment@deriv.hr')}
                </MailLink>
            </Text>
        </Flex>
    </Section>
)

export const JobMailBanner = () => (
    <JobMailSection>
        <Flex direction="row" ai="center">
            <Email />
            <Text align="center" color="white" style={{ marginLeft: '2.4rem' }}>
                {localize('To apply, send your CV to ')}
                <MailLink to="mailto:recruitment@deriv.hr" external>
                    recruitment@deriv.hr
                </MailLink>
            </Text>
        </Flex>
    </JobMailSection>
)

export const RoleBanner = () => (
    <Banner
        header={'Don’t see your role listed?'}
        p1={'Even if you don’t see a role that interests you, please send us your CV.'}
        p2={'We will contact you if a job that matches your background becomes available.'}
        p3={'Send your CV to '}
    />
)

Banner.propTypes = {
    button_text: PropTypes.string,
    header: PropTypes.string,
    p1: PropTypes.string,
    p2: PropTypes.string,
    p3: PropTypes.string,
}

JobMailBanner.propTypes = {
    p1: PropTypes.string,
}
