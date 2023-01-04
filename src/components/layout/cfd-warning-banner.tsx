import React from 'react'
import styled from 'styled-components'
import { Container } from 'components/containers'
import { loss_percent } from 'common/constants'
import device from 'themes/device'
import { Localize } from 'components/localization'
import { Text } from 'components/elements'
import { RegionContext } from 'store/region-context'

type TProps = {
    is_ppc: boolean
}

const CFDWrapper = styled.section`
    background-color: var(--color-grey-25);
    background-size: cover;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    min-height: 7.4rem;
    height: fit-content;
    padding: 1.7rem 0 1.5rem;
    box-shadow: inset 0 1px 0 0 var(--color-grey-21);
    @media (max-width: 826px) {
        padding: 0.8rem 0;
        height: 12.4rem;
    }
    @media (max-width: 710px) {
        height: 10.8rem;
    }
    @media (max-width: 538px) {
        height: 14rem;
    }
`

const CFDContainer = styled(Container)`
    @media ${device.bp1060} {
        width: 90%;
    }
    @media ${device.tabletL} {
        width: 95%;
    }
    @media ${device.tabletS} {
        margin: 1rem auto;
    }
    @media ${device.mobileL} {
        margin: 2rem auto;
    }
    @media ${device.mobileM} {
        margin: 1rem auto;
    }
`

const CFDText = styled(Text)`
    font-size: 14px;

    @media ${device.tablet} {
        font-size: 12px;
    }
    @media ${device.mobileL} {
        font-size: 10px;
    }
`

const CFDWarningBanner = ({ is_ppc }: TProps) => {
    const { is_eu } = React.useContext(RegionContext)

    if (is_ppc || is_eu) {
        return (
            <CFDWrapper>
                <CFDContainer>
                    <CFDText>
                        <Localize
                            translate_text="CFDs are complex instruments and come with a high risk of losing money rapidly due to leverage. <0>{{loss_percent}}% of retail investor accounts lose money when trading CFDs with this provider.</0> You should consider whether you understand how CFDs work and whether you can afford to take the high risk of losing your money."
                            values={{ loss_percent }}
                            components={[<strong key={0} />]}
                        />
                    </CFDText>
                </CFDContainer>
            </CFDWrapper>
        )
    }

    return <></>
}

export default CFDWarningBanner
