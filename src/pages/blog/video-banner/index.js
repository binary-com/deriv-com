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

const carouselItem = [
    {
        image: 'video_banner_1',
        title: 'The weekly market report, 07.06.2021 - 13.06.2021',
        date: 'April 7, 2021',
        duration: '14:09',
        img_url:
            'https://blog.deriv.com/content/images/size/w1000/2021/06/shutterstock_1220527444.jpg',
    },
    {
        image: 'video_banner_2',
        title: 'Open a new DMT5 Real Synthetic account on our new servers',
        date: 'April 7, 2021',
        duration: '14:09',
        img_url:
            'https://blog.deriv.com/content/images/size/w1000/2021/05/Weekly-market-report-with-Deriv.jpg',
    },
    {
        image: 'video_banner_3',
        title: '7 traits of successful financial traders',
        date: 'April 7, 2021',
        duration: '14:09',
        img_url:
            'https://blog.deriv.com/content/images/size/w1000/2021/05/Market-report-with-Deriv.jpg',
    },
    {
        image: 'video_banner_4',
        title: 'How To Trade Forex',
        date: 'April 7, 2021',
        duration: '14:09',
        img_url:
            'https://blog.deriv.com/content/images/size/w1000/2021/05/Deriv-weekly-market-report.jpg',
    },
    {
        image: 'video_banner_5',
        title: '5 Golden Rules to Follow When Trading Stock CFDs',
        date: 'April 7, 2021',
        duration: '14:09',
        img_url:
            'https://blog.deriv.com/content/images/size/w1000/2021/05/Deriv-weekly-market-report.jpg',
    },
    {
        image: 'video_banner_1',
        title: 'Strategies to Trade Synthetic Indices',
        date: 'April 7, 2021',
        duration: '14:09',
        img_url: 'https://blog.deriv.com/content/images/size/w1000/2021/05/BeSquare-by-Deriv.png',
    },
    {
        image: 'video_banner_3',
        title: 'Multipliers: Leverage without losing your shirt',
        date: 'April 7, 2021',
        duration: '14:09',
        img_url: 'https://blog.deriv.com/content/images/size/w1000/2021/04/Changelly2-1.jpg',
    },
]

const DVideoBanner = () => {
    return (
        <Layout>
            <Flex>
                <Dbanner video_details={MainVidDetails} video_list={carouselItem} />
            </Flex>
        </Layout>
    )
}

export default WithIntl()(DVideoBanner)
