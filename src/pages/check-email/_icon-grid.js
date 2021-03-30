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

    @media ${device.mobileL} {
        grid-template-columns: 4rem 1fr;
    }
`
const Img = styled.img`
    @media ${device.tabletL} {
        width: 40px;
        height: 40px;
    }
`

const StyledText = styled(Text)`
    @media ${device.tabletL} {
        font-size: 2rem;
    }
`

const Col = ({ Icon, alt, content }) => (
    <GridCol>
        <Img src={Icon} alt={alt} />
        <StyledText color="black-3" lh="1.55" mt="0.8rem">
            {content}
        </StyledText>
    </GridCol>
)
Col.propTypes = {
    alt: PropTypes.string,
    content: PropTypes.string,
    Icon: PropTypes.any,
}

export const IconGrid = () => (
    <Grid>
        <Col
            Icon={Spam}
            alt="spam"
            content={localize(
                'The email is in your spam folder (Sometimes things get lost there).',
            )}
        />
        <Col
            Icon={Typo}
            alt="typo"
            content={localize(
                'The email address you entered had a mistake or typo (happens to the best of us).',
            )}
        />
        <Col
            Icon={WorkEmail}
            alt="work email"
            content={localize(
                'You accidentally gave us another email address (Usually a work or a personal one instead of the one you meant).',
            )}
        />
        <Col
            Icon={Firewalls}
            alt="firewalls"
            content={localize(
                'We can’t deliver the email to this address (Usually because of firewalls or filtering).',
            )}
        />
    </Grid>
)
