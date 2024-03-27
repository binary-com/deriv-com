import React from 'react'
import DP2PVideo from './video'
import P2PItem from './item'
import { p2p_items } from './data'
import Container from 'features/components/atoms/container'
import Typography from 'features/components/atoms/typography'
import useBreakpoints from 'components/hooks/use-breakpoints'
import { Localize } from 'components/localization'

const DP2P = () => {
    const { is_mobile } = useBreakpoints()
    return (
        <Container.Fixed as="section" pt="20x" md={{ pt: '40x' }}>
            <Container.Fluid>
                <Typography.Paragraph align="center" size={is_mobile ? 'xlarge' : 'xxl'} mb="40x">
                    <Localize
                        translate_text="_t_Deriv P2P is Deriv’s peer-to-peer deposit and withdrawal service that offers an
                    easy way to get money in and out of your Deriv account. Connect with fellow
                    traders and transfer money in minutes._t_"
                    />
                </Typography.Paragraph>
                <Typography.Heading as="h2" align="center" size="small" mb="19x">
                    <Localize translate_text="_t_Find out how Deriv P2P works_t_" />
                </Typography.Heading>
                <DP2PVideo />
                {p2p_items.map(({ id, data }, index) => {
                    const is_even = (index + 1) % 2 === 0
                    return <P2PItem key={id} item={data} is_even={is_even} />
                })}
            </Container.Fluid>
        </Container.Fixed>
    )
}

export default DP2P
