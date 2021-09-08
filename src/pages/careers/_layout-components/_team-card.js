import React from 'react'
import PropTypes from 'prop-types'
import styled, { keyframes } from 'styled-components'
import device from 'themes/device.js'
import { QueryImage, Text, Header } from 'components/elements'
import { LocalizedLink, localize } from 'components/localization'
import { LinkButton } from 'components/form'

const GoViewTeam = styled(LinkButton)`
    border-color: var(--color-black-5);
    padding: 12px 16px;
    border-radius: 3px;

    @media ${device.tablet} {
        display: block;
        width: 100%;
    }
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
    height: ${(props) => (props.height ? props.height : 'auto')};
    width: 100%;
    border-radius: 6px;
    background: var(--color-white);
    transition: transform 0.3s;
    overflow: hidden;
    cursor: pointer;
    padding: 16px;
    border: 1px solid #e6e9e9;
    margin-bottom: 2.4rem;

    @media ${device.laptopL} {
        height: 100%;
    }

    @media ${device.tablet} {
        height: 388px;
    }

    &:hover {
        transform: translateY(-1.1rem) scale(1.02);
        box-shadow: 0 16px 20px 0 rgba(0, 0, 0, 0.05), 0 0 20px 0 rgba(0, 0, 0, 0.05);

        svg {
            path {
                fill: var(--color-red);
            }

            animation: ${Bounce} 1.2s infinite;
        }
    }
`

export const NormalCard = styled.article`
    position: relative;
    height: ${(props) => (props.height ? props.height : 'auto')};
    width: 100%;
    box-shadow: 0 16px 20px 0 rgba(0, 0, 0, 0.05), 0 0 20px 0 rgba(0, 0, 0, 0.05);
    border-radius: 4px;
    background: var(--color-white);
`

const ImageWrapper = styled.div`
    height: 144px;
    width: 100%;
`

const StyledContent = styled.div`
    padding: 2.7rem 0;
    width: 100%;
`

const StyledHeader = styled(Header)`
    margin-bottom: 0.8rem;
    font-size: 20px;
    line-height: 30px;
`
const StyledLink = styled.div`
    position: absolute;
    bottom: 3.2rem;

    @media ${device.tablet} {
        width: 91%;
    }
`
const TeamCard = ({ to, img_data, display_team_name, tagline }) => (
    <StyledCard height="388px" to={to}>
        <ImageWrapper>
            <QueryImage
                data={img_data}
                height="144px"
                width="100%"
                alt={localize('Team ') + display_team_name}
            />
        </ImageWrapper>
        <StyledContent>
            <StyledHeader as="h5">{display_team_name}</StyledHeader>
            <Text>{tagline}</Text>
            <StyledLink>
                <GoViewTeam tertiary external target="_blank" rel="noopener noreferrer nofollow">
                    {localize('View Team')}
                </GoViewTeam>
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
