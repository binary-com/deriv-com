import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { StyledCard } from '../_layout-components/_team-card'
import { Image, Text, Header, Divider } from 'components/elements'
import { localize, LocalizedLink } from 'components/localization'
// SVG
import Chevron from 'images/svg/chevron.svg'

const ImageWrapper = styled.div`
    height: 14.5rem;
    width: 100%;
`

const StyledContent = styled.div`
    padding: 3.2rem;
    width: 100%;
`

const StyledChevron = styled(Chevron)`
    transform: rotate(-90deg);
    right: -1.2rem;
`

const StyledDivider = styled(Divider)`
    margin-top: 4.6rem;
    margin-bottom: 3.2rem;
`

const LocalizedLinkText = styled(props => <LocalizedLink {...props} />)`
    color: var(--color-red);
    font-weight: bold;
    text-decoration: none;
    position: relative;

    &:hover {
        text-decoration: underline;
    }
`

const Card = ({ img_name, team_name, display_team_name, tagline, position_count }) => (
    <StyledCard height="46.3rem">
        <ImageWrapper>
            <Image img_name={img_name} width="100%" alt={img_name} />
        </ImageWrapper>
        <StyledContent>
            <Text font_size="var(--text-size-xs)">
                {`${position_count} ${localize('position')}`}
            </Text>
            <Header as="h4" font_size="var(--text-size-sm)" margin="1.6rem 0">
                {display_team_name}
            </Header>
            <Text>{tagline}</Text>
            <StyledDivider height="2px" />
            <LocalizedLinkText to={`teams/${team_name}/`}>
                {localize('View openings')}
                <StyledChevron />
            </LocalizedLinkText>
        </StyledContent>
    </StyledCard>
)

Card.propTypes = {
    display_team_name: PropTypes.string,
    img_name: PropTypes.string,
    position_count: PropTypes.number,
    tagline: PropTypes.string,
    team_name: PropTypes.string,
}

export default Card
