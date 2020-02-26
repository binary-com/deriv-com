import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Image, Text, Header } from 'components/elements'
import { LocalizedLink } from 'components/localization'
// SVG
import Chevron from 'images/svg/chevron-bottom.svg'

const StyledCard = styled.article`
    box-shadow: 0 16px 20px 0 rgba(0, 0, 0, 0.05), 0 0 20px 0 rgba(0, 0, 0, 0.05);
    border-radius: 4px;
`

const ImageWrapper = styled.div`
    height: 14.4rem;
    width: 100%;
`

const StyledContent = styled.div`
    position: relative;
    padding: 3.2rem;
    width: 100%;
`

const StyledHeader = styled(Header)`
    margin-bottom: 0.8rem;
    font-size: var(--text-size-sm);
`

const StyledLink = styled(LocalizedLink)`
    position: relative;
    bottom: 0;
    right: 0;
`

const StyledChevron = styled(Chevron)`
    cursor: pointer;
    transform: rotate(-90deg);
`

export const TeamCard = ({ img_name, team_name, display_team_name, tagline }) => (
    <StyledCard>
        <ImageWrapper>
            <Image img_name={img_name} width="100%" alt={img_name} />
        </ImageWrapper>
        <StyledContent>
            <StyledHeader as="h5">{display_team_name}</StyledHeader>
            <Text>{tagline}</Text>
            <StyledLink to={`/teams/${team_name}`}>
                <StyledChevron />
            </StyledLink>
        </StyledContent>
    </StyledCard>
)

TeamCard.propTypes = {
    display_team_name: PropTypes.string,
    img_name: PropTypes.string,
    tagline: PropTypes.string,
    team_name: PropTypes.string,
}
