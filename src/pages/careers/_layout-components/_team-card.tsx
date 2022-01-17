import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import type { ImageDataLike } from 'gatsby-plugin-image'
import { QueryImage, Text, Header } from 'components/elements'
import { LocalizedLink } from 'components/localization'
import device from 'themes/device'

type NormalCardProps = {
    height?: string
}

export const StyledCard = styled(LocalizedLink)`
    text-decoration: none;
    position: relative;
    height: ${(props) => (props.height ? props.height : 'auto')};
    width: 100%;
    border-radius: 6px;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    background: var(--color-white);
    overflow: hidden;
    cursor: pointer;
    border: 1px solid #e6e9e9;
    margin-bottom: 1.5rem;

    &:hover {
        box-shadow: 0 0 11px rgba(33, 33, 33, 0.2);
    }
`

export const NormalCard = styled.article<NormalCardProps>`
    position: relative;
    height: ${(props) => (props.height ? props.height : 'auto')};
    width: 100%;
    box-shadow: 0 16px 20px 0 rgba(0, 0, 0, 0.05), 0 0 20px 0 rgba(0, 0, 0, 0.05);
    border-radius: 4px;
    background: var(--color-white);
`

const ImageWrapper = styled.div`
    height: 100%;
    width: 194px;
`

const StyledContent = styled.div`
    padding: 16px;
    width: 100%;
`

const StyledHeader = styled(Header)`
    font-size: 16px;
    line-height: 24px;

    @media ${device.tablet} {
        font-size: 14px;
        line-height: 20px;
    }
`
const StyledText = styled(Text)`
    font-size: 14px;
    line-height: 20px;

    @media ${device.tablet} {
        font-size: 12px;
        line-height: 18px;
    }
`

type TeamCardProps = {
    display_team_name: string
    to: string
    img_data: ImageDataLike
    img_alt: string
    tagline: string
}

const TeamCard = ({ to, img_data, img_alt, display_team_name, tagline }: TeamCardProps) => (
    <StyledCard height="144px" to={to}>
        <ImageWrapper>
            <QueryImage data={img_data} height="144px" width="100%" alt={img_alt} />
        </ImageWrapper>
        <StyledContent>
            <StyledHeader as="h5">{display_team_name}</StyledHeader>
            <StyledText>{tagline}</StyledText>
        </StyledContent>
    </StyledCard>
)

TeamCard.propTypes = {
    display_team_name: PropTypes.string,
    img_alt: PropTypes.string,
    img_data: PropTypes.object,
    tagline: PropTypes.string,
    team_name: PropTypes.string,
    to: PropTypes.string,
}

export default TeamCard
