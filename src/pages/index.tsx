import React from 'react'
import { WithIntl } from 'components/localization'
import HomePage from 'features/pages/home'

const Home = () => {
    return <HomePage />
}

export default WithIntl()(Home)
