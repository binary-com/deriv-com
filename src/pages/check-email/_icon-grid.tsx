import React from 'react'
import styled from 'styled-components'
import device from 'themes/device'
import { Text } from 'components/elements'
import { localize } from 'components/localization'
// Icons
import Spam from 'images/svg/check-email/spam.svg'
import Typo from 'images/svg/check-email/typo.svg'
import WorkEmail from 'images/svg/check-email/work-email.svg'
import Firewalls from 'images/svg/check-email/firewalls.svg'
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

const GridContent = [
    {
        Icon: Spam,
        content: localize('The email is in your spam folder (Sometimes things get lost there).'),
    },
    {
        Icon: Typo,
        content: localize(
            'The email address you entered had a mistake or typo (happens to the best of us).',
        ),
    },
    {
        Icon: WorkEmail,
        content: localize(
            'You accidentally gave us another email address (Usually a work or a personal one instead of the one you meant).',
        ),
    },
    {
        Icon: Firewalls,
        content: localize(
            'We can’t deliver the email to this address (Usually because of firewalls or filtering).',
        ),
    },
]

export const IconGrid = () => (
    <Grid>
        {GridContent.map((item, index) => (
            <GridCol key={`key-${index}`}>
                <Img src={item.Icon} alt="" />
                <StyledText color="black-3" lh="1.55" mt="0.8rem">
                    {item.content}
                </StyledText>
            </GridCol>
        ))}
    </Grid>
)
