import React from 'react'
import styled from 'styled-components'
import Container from '../containers/container'
import DubaiSVG from '../../images/svg/dubai.svg'
import KualaLumpurSVG from '../../images/svg/kuala-lumpur.svg'
import LabuanSVG from '../../images/svg/labuan.svg'
import MaltaSVG from '../../images/svg/malta.svg'
import ParaguaySVG from '../../images/svg/paraguay.svg'
import Button from '../form/button'

const Wrapper = styled.div`
    width: 100%;
    background-color: --color-white;
    text-align: center;
    padding: 8rem 0;

    h1 {
        height: 60px;
        font-size: 48px;
        font-weight: bold;
        line-height: 1.25;
        color: #2a2a2a;
    }
    button {
        margin-top: 4rem;
        width: 30rem;
        height: 4.8rem;
        font-size: 16px;
    }
`
const OurLocations = styled(Container)`
    margin: 0 auto;
    padding: 4rem 0 0 0;
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    grid-template-rows: auto;
    grid-column-gap: 20px;
    grid-template-areas:
        'kll kll kll kll dl dl dl dl pl pl pl pl'
        '. . ml ml ml ml ll ll ll ll . .';
`

const Location = styled.div`
    grid-area: ${props => props.location};

    h3 {
        margin-top: 0.5rem;
        font-size: 20px;
        line-height: 1.5;
        color: #2a2a2a;
    }
`

const OurLocationsWrapper = () => {
    return (
        <Wrapper>
            <h1>Our Locations</h1>
            <OurLocations>
                <Location location="kll">
                    <KualaLumpurSVG />
                    <h3>
                        Kuala Lumpur,
                        <br />
                        Malaysia
                    </h3>
                </Location>
                <Location location="dl">
                    <DubaiSVG />
                    <h3>Dubai</h3>
                </Location>
                <Location location="pl">
                    <ParaguaySVG />
                    <h3>
                        Asunción,
                        <br />
                        Paraguay
                    </h3>
                </Location>
                <Location location="ml">
                    <MaltaSVG />
                    <h3>
                        Birkirkara,
                        <br />
                        Malta
                    </h3>
                </Location>
                <Location location="ll">
                    <LabuanSVG />
                    <h3>
                        Labuan,
                        <br />
                        Malaysia
                    </h3>
                </Location>
            </OurLocations>
            <Button type="secondary">Start with free practice account</Button>
        </Wrapper>
    )
}

export default OurLocationsWrapper
