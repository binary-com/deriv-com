import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { QueryImage, Text, Header } from 'components/elements'
import { LocalizedLink, localize } from 'components/localization'
import device from 'themes/device'

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

export const NormalCard = styled.article`
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

const TeamCard = ({ to, img_data, display_team_name, tagline }) => (
    <StyledCard height="144px" to={to}>
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
            <StyledText>{tagline}</StyledText>
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
