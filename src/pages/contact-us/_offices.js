import React from 'react'
import styled from 'styled-components'
import { Text, LinkText } from 'components/elements/typography'
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
// const AddressContainer = styled.div`
//     :hover {
//         text-decoration: underline;
//         cursor: pointer;
//     }
// `
const StyledParagraph = styled.p`
    text-indent: 1.5em;
`
const StyledText = styled(Text)`
    margin-top: 1.6rem;
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
                            <LinkText
                                color="black-3"
                                size="var(--text-size-s)"
                                href="https://www.google.com/maps/search/?api=1&query=35.903559,14.460707"
                            >
                                <MapIcon />
                                {localize('Level 3, W Business Centre,')}
                                <StyledParagraph>
                                    {localize('Triq Dun Karm Birkirkara BKR9033 Malta.')}
                                </StyledParagraph>
                            </LinkText>
                            <StyledText>
                                <PhoneIcon />
                                +356 2131 6105
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
                            <LinkText
                                color="black-3"
                                size="var(--text-size-s)"
                                href="https://www.google.com/maps/search/?api=1&query=2.922786,101.661404"
                            >
                                <MapIcon />
                                {localize('C-13, iTech Tower, Jalan Impact, Cyber 6,')}
                                <StyledParagraph>
                                    {localize('63000 Cyberjaya, Selangor, Malaysia.')}
                                </StyledParagraph>
                            </LinkText>
                            <StyledText>
                                <PhoneIcon /> +603 83228178
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
                            <LinkText
                                color="black-3"
                                size="var(--text-size-s)"
                                href="https://www.google.com/maps/search/?api=1&query=,"
                            >
                                <MapIcon />
                                {localize('F16, 1st Floor, Paragon Labuan, Jalan Tun')}
                                <StyledParagraph>
                                    {localize('Mustapha, 87000, Labuan')}
                                </StyledParagraph>
                            </LinkText>
                            <StyledText>
                                <PhoneIcon />
                                +6087 504126
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
                            <LinkText
                                color="black-3"
                                size="var(--text-size-s)"
                                href="https://www.google.com/maps/search/?api=1&query=25.079313,55.149074"
                            >
                                <MapIcon />
                                {localize('Unit 3004, 1 Lake Plaza, Cluster T, Jumeirah Lake ')}
                                <StyledParagraph>{localize('Towers, Dubai, UAE.')}</StyledParagraph>
                            </LinkText>
                            <StyledText>
                                <PhoneIcon />
                                +9714 399 0404
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
                            <LinkText
                                color="black-3"
                                size="var(--text-size-s)"
                                href="https://www.google.com/maps/search/?api=1&query=-25.282562,-57.563787"
                            >
                                <MapIcon />
                                {localize('886, Edificio Australia, Calle Herib, Campos Cervera')}
                                <StyledParagraph>
                                    {localize('y Tregnaghi, Distriti de Stma, Trinidad, Asuncion,')}
                                </StyledParagraph>
                                <StyledParagraph>{localize('Paraguay')}</StyledParagraph>
                            </LinkText>
                            <StyledText>
                                <PhoneIcon />
                                +595 991298762
                            </StyledText>
                        </Content>
                    </Office>
                </OfficeWrapper>
            </OfficesWrapper>
        </Wrapper>
    )
}
