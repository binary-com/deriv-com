import React from 'react'
import { graphql, useStaticQuery } from "gatsby"
import HomePage from 'features/pages/home'
import { SEO } from 'components/containers'
import { TGatsbyHead } from 'features/types'
import { WithIntl } from 'components/localization'

const Home = ({ pageContext }: TGatsbyHead) => {
    const {region} = pageContext
    const useInternalPaths = () => {
        const {
          pages: { nodes },
        } = useStaticQuery(graphql`
          {
            pages: allSitePage {
              nodes {
                path
              }
            }
          }
        `)
      
        return nodes.map(node => node.path)
      }
    const urls = useInternalPaths()
    console.log("==>", useInternalPaths())
    return (
        <ul>
            {urls?.map(url => <li key={url}>{url}</li>)}
        </ul>
    )
    return <HomePage region={region}/>
}

export default WithIntl()(Home)

export const Head = ({ pageContext }: TGatsbyHead) => (
    <SEO
        title="_t_Trade forex, stocks, crypto, gold & commodities | Deriv_t_"
        description="_t_Award-winning online broker, rated excellent on Trustpilot. Sign up for a demo trading account to trade forex, stocks, and other financial markets._t_"
        has_organization_schema
        pageContext={pageContext}
    />
)
