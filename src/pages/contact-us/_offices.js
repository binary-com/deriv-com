import React, { useEffect } from 'react'
import styled from 'styled-components'
import { Text } from '../../components/elements/typography'
import { Header, Image } from 'components/elements'
import { getLocationHash } from 'common/utility'
import { localize } from 'components/localization'
import MapSVG from 'images/svg/map.svg'
import PhoneSVG from 'images/svg/phone.svg'
import { Container } from 'components/containers'
import device from 'themes/device'

const Wrapper = styled.section`
    border-top: 1px solid #d8d8d8;
    width: 100%;
    height: 181.3rem;
    background-color: var(--color-white);
    padding: 8rem 23rem;

    @media ${device.tabletL} {
        height: auto;
    }
`
const OfficesWrapper = styled(Container)`
    display: flex;
    flex-direction: column;
`
const Office = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    width: 100%;
    height: 27.5rem;
    margin-top: 6.3rem;

    :first-child {
        margin-top: 4rem;
    }

    @media ${device.tabletL} {
        flex-direction: column;
        height: auto;
    }
    @media ${device.laptopL} {
        justify-content: space-between;
    }
`
const StyledHeader = styled(Header)`
    margin-bottom: 0.8rem;
`
const Content = styled.div`
    width: 50%;

    :nth-child(even) {
        margin-left: 8rem;
    }
    
    @media ${device.tablet} {
        width: 100%;

        :nth-child(even) {
            margin-left: 0;
        }
    }

`
const MapIcon = styled(MapSVG)`
    margin-right: 0.8rem;
`
const PhoneIcon = styled(PhoneSVG)`
    margin-right: 0.8rem;
`
const ImageWrapper = styled.div`
    width: 50%;
    height: 21.2rem;

    @media ${device.tablet} {
        display: none;
    }
`
const StyledText = styled(Text)`
    margin-bottom: ${props => props.marginBttom || '0.8rem'};
    color: ${props => props.color || 'var(--color-black-3)'};
    text-indent: ${props => props.textIndent || '0'};
`
const Splitter = styled.div`
    background-color: #d8d8d8;
    height: 0.1rem;
    width: 98rem;
`
export const Offices = () => {
    useEffect(() => {
        if (getLocationHash()) {
            setTimeout(() => {
                document
                    .querySelector('#' + getLocationHash())
                    .scrollIntoView({ behavior: 'smooth', block: 'start' })
            }, 10)
        }
    })
    return (
        <Wrapper>
            <StyledHeader as="h3" align="center" color="--color-black-3" id="our_offices">
                {localize('Our offices')}
            </StyledHeader>
            <OfficesWrapper>
                <Office>
                    <ImageWrapper>
                        <Image
                            img_name="map-malta.png"
                            alt={localize('Malta Office')}
                            width="100%"
                            height="100%"
                        />
                    </ImageWrapper>
                    <Content>
                        <StyledHeader as="h4" color="--color-black-3" align="left">
                            {localize('Malta')}
                        </StyledHeader>
                        <StyledText marginBttom="2.1rem">{localize('Office')}</StyledText>
                        <StyledText width="29.9rem">
                            <MapIcon></MapIcon>
                            {localize('Level 3, W Business Centre,')}
                        </StyledText>
                        <StyledText marginBttom="1.6rem" textIndent="1.5em">
                            {localize('Triq Dun Karm Birkirkara BKR9033 Malta.')}
                        </StyledText>
                        <StyledText>
                            <PhoneIcon></PhoneIcon>
                            {localize('+35621316105')}
                        </StyledText>
                    </Content>
                </Office>
                <Splitter></Splitter>
                <Office>
                    <Content>
                        <StyledHeader as="h4" color="--color-black-3" align="left">
                            {localize('Malaysia')}
                        </StyledHeader>
                        <StyledText marginBttom="2.1rem">{localize('Cyberjaya office')}</StyledText>
                        <StyledText>
                            <MapIcon></MapIcon>
                            {localize('C-13, iTech Tower, Jalan Impact, Cyber 6,')}
                        </StyledText>
                        <StyledText marginBttom="1.6rem" textIndent="1.5em">
                            {localize('63000Cyberjaya, Selangor, Malaysia.')}
                        </StyledText>
                        <StyledText>
                            <PhoneIcon></PhoneIcon>
                            {localize('+603-8322 8178')}
                        </StyledText>
                    </Content>
                    <ImageWrapper>
                        <Image
                            img_name="map-cyberjaya.png"
                            alt={localize('Malaysia Office')}
                            width="100%"
                            height="100%"
                        />
                    </ImageWrapper>
                </Office>
                <Splitter></Splitter>
                <Office>
                    <ImageWrapper>
                        <Image
                            img_name="map-labuan.png"
                            alt={localize('Labuan Office')}
                            width="100%"
                            height="100%"
                        />
                    </ImageWrapper>
                    <Content>
                        <StyledHeader as="h4" color="--color-black-3" align="left">
                            {localize('Malaysia')}
                        </StyledHeader>
                        <StyledText marginBttom="2.1rem">{localize('Labuan office')}</StyledText>
                        <StyledText>
                            <MapIcon></MapIcon>
                            {localize('F16, 1st Floor, Paragon Labuan, Jalan Tun')}
                        </StyledText>
                        <StyledText marginBttom="1.6rem" textIndent="1.5em">
                            {localize('Mustapha, 87000, Labuan')}
                        </StyledText>
                        <StyledText>
                            <PhoneIcon></PhoneIcon>
                            {localize('+6087-504126')}
                        </StyledText>
                    </Content>
                </Office>
                <Splitter></Splitter>
                <Office>
                    <Content>
                        <StyledHeader as="h4" color="--color-black-3" align="left">
                            {localize('Dubai')}
                        </StyledHeader>
                        <StyledText marginBttom="2.1rem">{localize('Office')}</StyledText>
                        <StyledText>
                            <MapIcon></MapIcon>
                            {localize('Unit 3004, 1 Lake Plaza, Cluster T, Jumeirah Lake ')}
                        </StyledText>
                        <StyledText marginBttom="1.6rem" textIndent="1.5em">
                            {localize('Towers, Dubai, UAE.')}
                        </StyledText>
                        <StyledText>
                            <PhoneIcon></PhoneIcon>
                            {localize('+971 4 399 0404')}
                        </StyledText>
                    </Content>
                    <ImageWrapper>
                        <Image
                            img_name="map-dubai.png"
                            alt={localize('Dubai Office')}
                            width="100%"
                            height="100%"
                        />
                    </ImageWrapper>
                </Office>
                <Splitter></Splitter>
                <Office>
                    <ImageWrapper>
                        <Image
                            img_name="map-paraguay.png"
                            alt={localize('paraguay Office')}
                            width="100%"
                            height="100%"
                        />
                    </ImageWrapper>
                    <Content>
                        <StyledHeader as="h4" color="--color-black-3" align="left">
                            {localize('Paraguay')}
                        </StyledHeader>
                        <StyledText marginBttom="2.1rem">{localize('Office')}</StyledText>
                        <StyledText>
                            <MapIcon></MapIcon>
                            {localize('886, Edificio Australia, Calle Herib, Campos Cervera')}
                        </StyledText>
                        <StyledText textIndent="1.5em">
                            {localize('y Tregnaghi, Distriti de Stma, Trinidad, Asuncion,')}
                        </StyledText>
                        <StyledText marginBttom="1.6rem" textIndent="1.5em">
                            {localize('Paraguay')}
                        </StyledText>
                        <StyledText>
                            <PhoneIcon></PhoneIcon>
                            {localize('+603-8322 8178')}
                        </StyledText>
                    </Content>
                </Office>
            </OfficesWrapper>
        </Wrapper>
    )
}
