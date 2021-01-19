import React from 'react'
import styled from 'styled-components'
import { Text } from 'components/elements'
import { Flex } from 'components/containers'
import { localize, Localize } from 'components/localization'
import device from 'themes/device'

const DetailsContainer = styled(Flex)`
    flex-direction: column;

    ${Text} {
        font-size: 14px;
        margin-top: 1.6rem;

        @media ${device.tabletL} {
            margin-top: 10px;
        }
    }
`

export const SmartFXDetails = () => (
    <DetailsContainer>
        <Text>
            <Localize
                translate_text="<0>AUD Index</0> measures the value of the Australian dollar against a basket of five global currencies (USD, EUR, GBP, JPY, CAD), each weighted by 20%."
                components={[<strong key={0} />]}
            />
        </Text>
        <Text>
            <Localize
                translate_text="<0>EUR Index</0> measures the value of the Euro against a basket of five global currencies (USD, AUD, GBP, JPY, CAD), each weighted by 20%."
                components={[<strong key={0} />]}
            />
        </Text>
        <Text>
            <Localize
                translate_text="<0>GBP Index</0> measures the value of the British Pound against a basket of five global currencies (USD, EUR, AUD, JPY, CAD), each weighted by 20%."
                components={[<strong key={0} />]}
            />
        </Text>
        <Text>
            <Localize
                translate_text="<0>USD Index</0> measures the value of the US dollar against a basket of five global currencies (EUR, GBP, JPY, CAD, AUD), each weighted by 20%."
                components={[<strong key={0} />]}
            />
        </Text>
    </DetailsContainer>
)

export const SmartGoldIndexDetails = () => (
    <DetailsContainer>
        <Text>
            {localize(
                'Measures the value of gold against a basket of five global currencies (EUR, GBP, JPY, AUD, USD), each weighted by 20%.',
            )}
        </Text>
    </DetailsContainer>
)

export const StepFXDetails = () => (
    <DetailsContainer>
        <Text>
            {localize(
                'The market price moves up or down at a fixed step size (0.001) based on the price movement of the underlying instrument.',
            )}
        </Text>
    </DetailsContainer>
)
