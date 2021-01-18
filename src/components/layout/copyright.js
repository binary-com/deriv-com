import React from 'react'
import { Box, Container } from 'components/containers'
import { Text } from 'components/elements'
import { localize } from 'components/localization'
import CopyrightIc from 'images/svg/copyright-white.svg'

const Copyright = () => {
    const current_year = new Date().getFullYear()

    return (
        <Box bg="var(--color-black)">
            <Container jc="flex-start" p="1.5rem 0" ai="center">
                <img src={CopyrightIc} alt="copyright ic" width="16" height="16" />
                <Text color="white" ml="0.4rem">
                    {current_year} {localize(' Deriv | All rights reserved')}
                </Text>
            </Container>
        </Box>
    )
}

export default Copyright
