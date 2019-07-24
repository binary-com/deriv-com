import React from 'react'
import PropTypes from 'prop-types'
import device from 'themes/device'
import styled from 'styled-components'
import Button from 'components/form/button'
import Container from 'components/containers/container'
import { Card } from 'components/elements/card'
import { Header } from 'components/elements/typography.js'
import { localize } from 'components/localization'

import SuperiorPlatform from 'images/svg/superior-trading-platform.svg'
import PatentedTech from 'images/svg/patented-technology.svg'
import Intuitive from 'images/svg/intuitive.svg'

const DtraderSectionContainer = styled.section`
    width: 100%;
    padding: 2rem 0;
    background-image: linear-gradient(
        to bottom,
        var(--color-grey-2),
        var(--color-white)
    );
    border-bottom: 1px solid var(--color-grey-2);

    h2 {
        text-align: center;

        &::before {
            content: url("data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='54' height='34' viewBox='0 0 38 36' aria-labelledby='deriv-icon-title'%3E%3Ctitle id='deriv-icon-title'%3EDeriv icon%3C/title%3E%3Cdefs%3E%3ClinearGradient id='deriv_a' x1='50%25' x2='50%25' y1='0%25' y2='100%25'%3E%3Cstop offset='0%25' stop-color='%23FF6544'/%3E%3Cstop offset='100%25' stop-color='%23FF4449'/%3E%3C/linearGradient%3E%3C/defs%3E%3Cg fill='none' fill-rule='nonzero'%3E%3Cpath fill='url(%23deriv_a)' d='M8.244 0v.039L21.94 18 0 35.961V36h22.154c6.466 0 12.076-4.498 13.53-10.848l1.833-8.01a14.081 14.081 0 0 0-2.663-11.859A13.843 13.843 0 0 0 23.99 0H8.244z'/%3E%3Cpath fill='%23B51A31' d='M21.93 18.036L12.298 36H0z'/%3E%3C/g%3E%3C/svg%3E");
            width: 14rem;
        }
    }
`
const Dtrader = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: minmax(3rem, auto);
    grid-gap: 2rem;
    padding: 0;

    h5 {
        margin-bottom: 1.2rem;
    }
    @media ${device.laptop} {
        grid-template-columns: 1fr;
        grid-row-gap: 3rem;
    }
`
const Cta = styled.div`
    display: block;
    margin: 0 auto;
    text-align: center;
    padding: 2rem 0;

    button {
        padding: 1.6rem 2rem;
        font-weight: bold;
        margin: 2rem 0;
    }
`
const StyledContainer = styled(Container)`
    padding: 2rem 0;
`
const StyledSubHeader = styled(Header)`
    margin-top: 0.8rem;
`
const SectionHeader = styled.div`
    margin-top: 8rem;
    margin-bottom: 2rem;
    text-align: center;
`

export const DtraderSection = ({ toggleModal }) => (
    <DtraderSectionContainer>
        <SectionHeader>
            <Header as="h2" align="center" lh="6rem">
                {localize('DTrader')}
            </Header>
            <StyledSubHeader as="h4" align="center" weight="500">
                {localize('All you need to get started')}
            </StyledSubHeader>
        </SectionHeader>
        <StyledContainer>
            <Dtrader>
                <Card
                    title={localize('Superior trading platform')}
                    Icon={SuperiorPlatform}
                    content={[
                        localize('A revolutionary platform for all traders.'),
                        localize(
                            'Access the world’s most traded markets and assets.',
                        ),
                        localize('100+ instruments.'),
                    ]}
                />

                <Card
                    title={localize('Patented pricing technology')}
                    Icon={PatentedTech}
                    content={[
                        localize('Real-time, two-way pricing.'),
                        localize('Powered by our patented algorithms.'),
                        localize('Transparency guaranteed.'),
                    ]}
                />
                <Card
                    title={localize('Intuitive and customisable')}
                    Icon={Intuitive}
                    content={[
                        localize(
                            'Easy-to-use and powerful trading environment.',
                        ),
                        localize(
                            'Trade the way you want with customisable charts, analytic tools, and themes.',
                        ),
                    ]}
                />
            </Dtrader>
        </StyledContainer>
        <Cta>
            <Button onClick={toggleModal} secondary>
                {localize('Create a free account')}
            </Button>
        </Cta>
    </DtraderSectionContainer>
)

DtraderSection.propTypes = {
    toggleModal: PropTypes.func,
}
