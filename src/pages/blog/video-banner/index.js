import React from 'react'
import Dbanner from './_DBanner'
import Layout from 'components/layout/layout'
import { Flex } from 'components/containers'
import { WithIntl } from 'components/localization'

const MainVidDetails = [
    {
        type: 'Trade types',
        title: 'What’s multipliers',
        description:
            'Combine the higher returns of margin trading with the simplicity of options. With multipliers, you can leverage your trades to maximise returns for correctly predicting market movements, without risking more than your initial stake.',
        published_date: '21 Apr 2021',
        duration: '2:40',
    },
]

const DVideoBanner = () => {
    return (
        <Layout>
            <Flex>
                <Dbanner video_data={MainVidDetails} />
            </Flex>
        </Layout>
    )
}

export default WithIntl()(DVideoBanner)
