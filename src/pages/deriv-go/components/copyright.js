import React from 'react'
import { Box, Container } from 'components/containers'
import { Text } from 'components/elements'
import { localize } from 'components/localization'
import CopyrightIc from 'images/svg/copyright-white.svg'

const Copyright = () => {
    return (
        <Box bg="var(--color-black)">
            <Container jc="flex-start" p="1.4rem">
                <img src={CopyrightIc} alt="copyright ic" width="16" height="16" />
                <Text color="white" size="12px" margin="0 0 0 4px">
                    {localize('2021 Deriv | All rights reserved')}
                </Text>
            </Container>
        </Box>
    )
}

export default Copyright
