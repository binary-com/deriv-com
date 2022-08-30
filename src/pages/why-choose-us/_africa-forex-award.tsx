import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import { QueryImage } from 'components/elements'
import { WithIntl } from 'components/localization'
import { Desktop, Mobile } from 'components/containers'

const query = graphql`
    query {
        africa_award: file(relativePath: { eq: "choose-us/africa_award.png" }) {
            ...fadeIn
        }
        africa_award_mobile: file(relativePath: { eq: "choose-us/africa_award_mobile.png" }) {
            ...fadeIn
        }
    }
`
const AfricaAward = () => {
    const data = useStaticQuery(query)

    return (
        <>
            <Desktop>
                <QueryImage data={data.africa_award} alt={'Africa Forex Award'} />
            </Desktop>
            <Mobile>
                <QueryImage data={data.africa_award_mobile} alt={'Africa Forex Award'} />
            </Mobile>
        </>
    )
}

export default WithIntl()(AfricaAward)
