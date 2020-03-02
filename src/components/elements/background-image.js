import React from 'react'
import styled from 'styled-components'
import { StaticQuery, graphql } from 'gatsby'
import BackgroundImage from 'gatsby-background-image'
import PropTypes from 'prop-types'

const StyledBackground = styled(BackgroundImage)`
    &::before,
    &::after {
        filter: brightness(${props => (props.dark ? props.dark : '1')});
    }
`

const Background = ({ children, img_name, style, ...props }) => (
    <StaticQuery
        query={graphql`
            query {
                allImageSharp {
                    edges {
                        node {
                            fluid(quality: 90, maxWidth: 4160) {
                                ...GatsbyImageSharpFluid_withWebp
                                originalName
                            }
                        }
                    }
                }
            }
        `}
        render={data => {
            const image = data.allImageSharp.edges.find(
                edge => edge.node.fluid.originalName === img_name,
            )
            if (!image) return null

            return (
                <StyledBackground Tag="div" style={style} fluid={image.node.fluid} {...props}>
                    {children}
                </StyledBackground>
            )
        }}
    />
)

Background.propTypes = {
    brightness: PropTypes.string,
    children: PropTypes.node,
    img_name: PropTypes.string,
    style: PropTypes.object,
}
export default Background
