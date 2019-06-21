import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

/*
 * This component is built using `gatsby-image` to automatically serve optimized
 * images with lazy loading and reduced file sizes. The image is loaded using a
 * `StaticQuery`, which allows us to load the image from directly within this
 * component, rather than having to pass the image data down from pages.
 *
 * For more information, see the docs:
 * - `gatsby-image`: https://gatsby.dev/gatsby-image
 * - `StaticQuery`: https://gatsby.dev/staticquery
 */

const Image = ({ img_name, alt }) => (
    <StaticQuery
        query={graphql`
        query {
            allImageSharp {
                edges {
                    node {
                        fluid(maxWidth: 1920, srcSetBreakpoints: [ 400, 600, 960, 1280, 1920 ] ) {
                            ...GatsbyImageSharpFluid
                            originalName
                        }
                    }
                }
            }
        }
        `}
        render={data => {
            const image = data.allImageSharp.edges.find(edge => edge.node.fluid.originalName === img_name);
            if (!image) return null;

            return <Img alt={alt} fluid={image.node.fluid} />
        }
        }
    />
)
export default Image
