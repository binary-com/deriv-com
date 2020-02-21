import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import BackgroundImage from 'gatsby-background-image'
import PropTypes from 'prop-types'

const Background = ({ children, img_name, style, ...props }) => (
    <StaticQuery
        query={graphql`
            query {
                allImageSharp {
                    edges {
                        node {
                            fluid(quality: 90, maxWidth: 4160) {
                                ...GatsbyImageSharpFluid_withWebp_noBase64
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
            const fluidStack = [image.node.fluid]

            return (
                <BackgroundImage Tag="div" style={style} fluid={fluidStack.reverse()} {...props}>
                    {children}
                </BackgroundImage>
            )
        }}
    />
)

Background.propTypes = {
    children: PropTypes.node,
    img_name: PropTypes.string,
    style: PropTypes.object,
}
export default Background
