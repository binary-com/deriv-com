import React from 'react'
import PropTypes from 'prop-types'
import Dbanner from './_DBanner'
// import Layout from 'components/layout/layout'
import { Flex } from 'components/containers'
// import { WithIntl } from 'components/localization'

const MainVidDetails = [
    {
        type: 'Trade types',
        title: 'What’s multipliers',
        description:
            'Combine the higher returns of margin trading with the simplicity of options. With multipliers, you can leverage your trades to maximise returns for correctly predicting market movements, without risking more than your initial stake.',
        published_date: '21 Apr 2021',
        duration: '2:40',
        bg_img_url:
            'https://blog.deriv.com/content/images/size/w1000/2021/04/deriv-weekly-market-report-06042021.jpg',
    },
]

const DVideoBanner = ({ video_details, video_list_data }) => {
    const details = video_details || MainVidDetails
    return (
        <Flex>
            <Dbanner video_details={details} video_list={video_list_data} />
        </Flex>
    )
}

DVideoBanner.propTypes = {
    video_details: PropTypes.array,
    video_list_data: PropTypes.array,
}

export default DVideoBanner
