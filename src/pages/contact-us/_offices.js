import React from 'react'
import styled from 'styled-components'
import { Text } from '../../components/elements/typography'
import { Header, Image } from 'components/elements'
import { localize } from 'components/localization'
import MapSVG from 'images/svg/map.svg'
import PhoneSVG from 'images/svg/phone.svg'
import device from 'themes/device'

const Wrapper = styled.section`
    border-top: 1px solid #d8d8d8;
    width: 100%;
    height: 181.3rem;
    background-color: var(--color-white);
    padding: 8rem 23rem;

    @media ${device.laptopL} {
        height: auto;
        padding: 8rem 1rem;
    }
`
const OfficesWrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
`

const OfficeWrapper = styled.div`
    margin: auto;
    height: 100%;

    @media ${device.tabletL} {
        margin: 0;
        width: auto;
    }
`

const Office = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    height: 27.5rem;
    margin-top: 6.3rem;
    width: 100%;

    :first-child {
        margin-top: 4rem;
    }

    @media ${device.laptop} {
        flex-direction: column;
        height: auto;
    }
`
const StyledHeader = styled(Header)`
    margin-bottom: 0.8rem;
`
const Content = styled.div`
    width: 50%;

    :nth-child(even) {
        margin-left: 2.4rem;
        width: 100%;
    }

    @media ${device.laptop} {
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
    height: 21rem;

    @media ${device.mobileL} {
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

    @media ${device.tabletL} {
        width: auto;
    }
`
export const Offices = () => {
    return (
        <Wrapper>
            <StyledHeader as="h3" align="center">
                {localize('Our offices')}
            </StyledHeader>
            <OfficesWrapper>
                <OfficeWrapper>
                    <Office>
                        <ImageWrapper>
                            <Image
                                img_name="map-malta.png"
                                alt={localize('Malta Office')}
                                width="49rem"
                                height="100%"
                            />
                        </ImageWrapper>
                        <Content>
                            <StyledHeader as="h4" align="left">
                                {localize('Malta')}
                            </StyledHeader>
                            <br />
                            <StyledText width="29.9rem">
                                <MapIcon />
                                {localize('Level 3, W Business Centre,')}
                            </StyledText>
                            <StyledText marginBttom="1.6rem" textIndent="1.5em">
                                {localize('Triq Dun Karm Birkirkara BKR9033 Malta.')}
                            </StyledText>
                            <StyledText>
                                <PhoneIcon />
                                +35621316105
                            </StyledText>
                        </Content>
                    </Office>
                    <Splitter></Splitter>
                    <Office>
                        <Content>
                            <StyledHeader as="h4" align="left">
                                {localize('Malaysia')}
                            </StyledHeader>
                            <br />
                            <StyledText>
                                <MapIcon />
                                {localize('C-13, iTech Tower, Jalan Impact, Cyber 6,')}
                            </StyledText>
                            <StyledText marginBttom="1.6rem" textIndent="1.5em">
                                {localize('63000 Cyberjaya, Selangor, Malaysia.')}
                            </StyledText>
                            <StyledText>
                                <PhoneIcon /> +603-8322 8178
                            </StyledText>
                        </Content>
                        <ImageWrapper>
                            <Image
                                img_name="map-cyberjaya.png"
                                alt={localize('Malaysia Office')}
                                width="49rem"
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
                                width="49rem"
                                height="100%"
                            />
                        </ImageWrapper>
                        <Content>
                            <StyledHeader as="h4" align="left">
                                {localize('Labuan')}
                            </StyledHeader>
                            <br />
                            <StyledText>
                                <MapIcon />
                                {localize('F16, 1st Floor, Paragon Labuan, Jalan Tun')}
                            </StyledText>
                            <StyledText marginBttom="1.6rem" textIndent="1.5em">
                                {localize('Mustapha, 87000, Labuan')}
                            </StyledText>
                            <StyledText>
                                <PhoneIcon />
                                +6087-504126
                            </StyledText>
                        </Content>
                    </Office>
                    <Splitter></Splitter>
                    <Office>
                        <Content>
                            <StyledHeader as="h4" align="left">
                                {localize('Dubai')}
                            </StyledHeader>
                            <br />
                            <StyledText>
                                <MapIcon />
                                {localize('Unit 3004, 1 Lake Plaza, Cluster T, Jumeirah Lake ')}
                            </StyledText>
                            <StyledText marginBttom="1.6rem" textIndent="1.5em">
                                {localize('Towers, Dubai, UAE.')}
                            </StyledText>
                            <StyledText>
                                <PhoneIcon />
                                +971 4 399 0404
                            </StyledText>
                        </Content>
                        <ImageWrapper>
                            <Image
                                img_name="map-dubai.png"
                                alt={localize('Dubai Office')}
                                width="49rem"
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
                                width="49rem"
                                height="100%"
                            />
                        </ImageWrapper>
                        <Content>
                            <StyledHeader as="h4" align="left">
                                {localize('Paraguay')}
                            </StyledHeader>
                            <br />
                            <StyledText>
                                <MapIcon />
                                {localize('886, Edificio Australia, Calle Herib, Campos Cervera')}
                            </StyledText>
                            <StyledText textIndent="1.5em">
                                {localize('y Tregnaghi, Distriti de Stma, Trinidad, Asuncion,')}
                            </StyledText>
                            <StyledText marginBttom="1.6rem" textIndent="1.5em">
                                {localize('Paraguay')}
                            </StyledText>
                            <StyledText>
                                <PhoneIcon />
                                +603-8322 8178
                            </StyledText>
                        </Content>
                    </Office>
                </OfficeWrapper>
            </OfficesWrapper>
        </Wrapper>
    )
}
