import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import device from 'themes/device'
import { Text } from 'components/elements'
import { localize } from 'components/localization'
// Icons
import Spam from 'images/svg/spam.svg'
import Typo from 'images/svg/typo.svg'
import WorkEmail from 'images/svg/work-email.svg'
import Firewalls from 'images/svg/firewalls.svg'
import { Container } from 'components/containers'

const Grid = styled(Container)`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 3rem;
    margin: 4rem 0;
    width: 100%;

    @media ${device.tablet} {
        grid-template-columns: none;
    }
`
const GridCol = styled.article`
    display: grid;
    grid-template-columns: 6.5rem 1fr;
    column-gap: 2.4rem;
    align-items: center;
    height: 100%;

    ${Text} {
        margin-top: 0.8rem;
        font-size: 1.6rem;

        @media ${device.tabletL} {
            font-size: 2rem;
        }
    }
`
const Col = ({ Icon, content }) => (
    <GridCol>
        <Icon />
        <Text color="black-3" lh="1.55">
            {content}
        </Text>
    </GridCol>
)
Col.propTypes = {
    content: PropTypes.string,
    Icon: PropTypes.func,
}

export const IconGrid = () => (
    <Grid>
        <Col
            Icon={Spam}
            content={localize(
                'The email is in your spam folder (Sometimes things get lost there).',
            )}
        />
        <Col
            Icon={Typo}
            content={localize(
                'The email address you entered had a mistake or typo (happens to the best of us).',
            )}
        />
        <Col
            Icon={WorkEmail}
            content={localize(
                'You accidentally gave us another email address (Usually a work or a personal one instead of the one you meant).',
            )}
        />
        <Col
            Icon={Firewalls}
            content={localize(
                'We can’t deliver the email to this address (Usually because of firewalls or filtering).',
            )}
        />
    </Grid>
)
