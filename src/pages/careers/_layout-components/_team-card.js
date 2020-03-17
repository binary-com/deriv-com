import React from 'react'
import PropTypes from 'prop-types'
import styled, { keyframes } from 'styled-components'
import { QueryImage, Text, Header } from 'components/elements'
import { LocalizedLink } from 'components/localization'
// SVG
import Chevron from 'images/svg/carousel-chevron.svg'

const ChevronRight = styled(Chevron)`
    transform: rotate(180deg);
    width: 16px;
    height: 16px;
`
const Bounce = keyframes`
    0%, 20%, 80%, 100% {
        transform: translateX(0) rotate(180deg);
    }
    40% {
        transform: translateX(18px) rotate(180deg);
    }
    50% {
        transform: translateX(0) rotate(180deg);
    }
    60% {
        transform: translateX(9px) rotate(180deg);
    }
`

export const StyledCard = styled(LocalizedLink)`
    text-decoration: none;
    position: relative;
    height: ${props => (props.height ? props.height : 'auto')};
    width: 100%;
    box-shadow: 0 16px 20px 0 rgba(0, 0, 0, 0.05), 0 0 20px 0 rgba(0, 0, 0, 0.05);
    border-radius: 4px;
    background: var(--color-white);
    transition: all 0.3s;
    overflow: hidden;
    cursor: pointer;

    &:hover {
        transform: translateY(-1.1rem) scale(1.02);

        #carousel-chevron-icon-svg {
            g {
                fill: var(--color-red);
            }

            animation: ${Bounce} 1.2s infinite;
        }
    }
`

export const NormalCard = styled.article`
    position: relative;
    height: ${props => (props.height ? props.height : 'auto')};
    width: 100%;
    box-shadow: 0 16px 20px 0 rgba(0, 0, 0, 0.05), 0 0 20px 0 rgba(0, 0, 0, 0.05);
    border-radius: 4px;
    background: var(--color-white);
`

const ImageWrapper = styled.div`
    height: 14.4rem;
    width: 100%;
`

const StyledContent = styled.div`
    padding: 3.2rem;
    width: 100%;
`

const StyledHeader = styled(Header)`
    margin-bottom: 0.8rem;
    font-size: var(--text-size-sm);
`

const StyledLink = styled.div`
    position: absolute;
    bottom: 3.2rem;
    right: 3.2rem;
`

const TeamCard = ({ to, img_data, display_team_name, tagline }) => (
    <StyledCard height="38.8rem" to={to}>
        <ImageWrapper>
            <QueryImage data={img_data} height="14.4rem" width="100%" alt={display_team_name} />
        </ImageWrapper>
        <StyledContent>
            <StyledHeader as="h5">{display_team_name}</StyledHeader>
            <Text>{tagline}</Text>
            <StyledLink>
                <ChevronRight />
            </StyledLink>
        </StyledContent>
    </StyledCard>
)

TeamCard.propTypes = {
    display_team_name: PropTypes.string,
    img_data: PropTypes.object,
    tagline: PropTypes.string,
    team_name: PropTypes.string,
    to: PropTypes.string,
}

export default TeamCard
