import React from 'react'
import { Box, Container } from 'components/containers'
import { Text } from 'components/elements'
import { localize } from 'components/localization'
import { ReactComponent as CopyrightIc } from 'images/svg/copyright.svg'

const Copyright = () => {
    return (
        <Box bg="var(--color-black)">
            <Container jc="flex-start" p="1.5rem 0" ai="center">
                <CopyrightIc width="1.6rem" />
                <Text color="white" ml="0.4rem">
                    {localize('2020 Deriv | All rights reserved')}
                </Text>
            </Container>
        </Box>
    )
}

export default Copyright
