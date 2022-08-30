import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import { QueryImage } from 'components/elements'
import { WithIntl } from 'components/localization'
import { Desktop, Mobile } from 'components/containers'

const query = graphql`
    query {
        latam_award: file(relativePath: { eq: "choose-us/latam-award.png" }) {
            ...fadeIn
        }
        latam_award_mobile: file(relativePath: { eq: "choose-us/latam-award-mobile.png" }) {
            ...fadeIn
        }
    }
`
const LatamAward = () => {
    const data = useStaticQuery(query)

    return (
        <>
            <Desktop>
                <QueryImage data={data.latam_award} alt={'Latam Forex Award'} />
            </Desktop>
            <Mobile>
                <QueryImage data={data.latam_award_mobile} alt={'Latam Forex Award'} />
            </Mobile>
        </>
    )
}

export default WithIntl()(LatamAward)
