import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { StyledCard } from '../_layout-components/_team-card'
import { QueryImage, Text, Header, Divider } from 'components/elements'
// SVG
import Chevron from 'images/svg/chevron.svg'

const ImageWrapper = styled.div`
    height: 144px;
    width: 100%;
`

const StyledContent = styled.div`
    padding: 3.2rem;
    width: 100%;
`

const StyledChevron = styled(Chevron)`
    transform: rotate(90deg);
    position: absolute;
    right: -2.4rem;
    top: 0.5rem;

    & polyline {
        stroke-width: 2;
    }
`

const ViewSection = styled.div`
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    padding: 0 3.2rem 3.2rem;
`

const StyledText = styled(Text)`
    color: var(--color-red);
    font-weight: bold;
    text-decoration: none;
    position: relative;
    font-size: var(--text-size-s);
    max-width: fit-content;
    opacity: ${(props) => (props.disabled ? '0.32' : '1')};

    &:hover {
        text-decoration: ${(props) => (props.disabled ? '' : 'underline')};
    }
`

const StyledDivider = styled(Divider)`
    margin-bottom: 3.2rem;
`

const Card = ({ img_data, to, display_team_name, tagline, position_count }) => (
    <StyledCard height="463px" to={to}>
        <ImageWrapper>
            <QueryImage data={img_data} width="100%" height="145px" alt={display_team_name} />
        </ImageWrapper>
        <StyledContent>
            <Text size="var(--text-size-xs)">{`${position_count} ${
                position_count === 1 ? 'position' : 'positions'
            }`}</Text>
            <Header as="h4" size="var(--text-size-sm)" m="1.6rem 0">
                {display_team_name}
            </Header>
            <Text>{tagline}</Text>
            <ViewSection>
                <StyledDivider height="2px" />
                <StyledText disabled={position_count === 0}>
                    View openings
                    <StyledChevron />
                </StyledText>
            </ViewSection>
        </StyledContent>
    </StyledCard>
)

Card.propTypes = {
    display_team_name: PropTypes.string,
    img_data: PropTypes.object,
    position_count: PropTypes.number,
    tagline: PropTypes.string,
    team_name: PropTypes.string,
    to: PropTypes.string,
}

export default Card
