import React from 'react'
import styled, { css } from 'styled-components'
import { Text, LinkText } from 'components/elements/typography'
import { Header, Image } from 'components/elements'
import { localize, Localize } from 'components/localization'
import MapSVG from 'images/svg/map.svg'
import PhoneSVG from 'images/svg/phone.svg'
import device, { size } from 'themes/device'

const Wrapper = styled.section`
    width: 100%;
    height: 100%;
    background-color: var(--color-white);
    padding: 8rem 23rem;

    @media (max-width: 1380px) {
        height: auto;
        padding: 5rem 2rem;
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
    height: 100%;
    margin-top: 6.3rem;
    width: 100%;

    :first-child {
        margin-top: 4rem;
    }

    @media ${device.laptop} {
        height: auto;
        align-items: center;
        flex-direction: column-reverse;
        margin-top: 3rem;
    }
`

const EvenOffice = styled(Office)`
    @media ${device.laptop} {
        flex-direction: column;
    }
`
const StyledHeader = styled(Header)`
    margin-bottom: 0.8rem;

    @media ${device.laptop} {
        margin-bottom: 0;
    }
`
const Content = styled.div`
    width: 50%;

    @media (min-width: ${size.laptop}px) {
        :nth-child(even) {
            margin-left: 2.4rem;
            width: 100%;
        }
    }
    @media ${device.laptop} {
        width: 100%;
        margin-left: 0;
    }
`
const AddressContainer = styled.div`
    display: flex;
    flex-direction: row;

    @media ${device.laptop} {
        ${Text} {
            font-size: var(--text-size-sm);
        }
    }
`
const MapIconWrapper = styled.div`
    margin-top: 0.4rem;
`
const MapIcon = styled(MapSVG)`
    margin-right: 0.8rem;
`
const PhoneIcon = styled(PhoneSVG)`
    margin-right: 0.8rem;
`
const ImageWrapper = styled.div`
    height: 21rem;

    @media ${device.laptop} {
        margin-top: 2rem;
        height: 17.75rem;
    }
`
const MapLink = styled.a`
    width: fit-content;
    height: fit-content;
    text-decoration: none;
    position: relative;
    cursor: pointer;
`
const StyledText = styled(Text)`
    margin-top: 1.6rem;
    color: ${props => props.color || 'var(--color-black-3)'};
    text-indent: ${props => props.textIndent || '0'};

    @media ${device.laptop} {
        font-size: var(--text-size-sm);
    }
`
const Splitter = styled.div`
    background-color: var(--color-grey-8);
    height: 0.1rem;
    width: 98rem;
    margin-top: 6.3rem;

    @media ${device.laptop} {
        width: auto;
        margin-top: 3rem;
        height: 0.2rem;
    }
`
const MapContainer = styled.div`
    width: 48.6rem;
    height: 20rem;

    @media ${device.laptop} {
        width: 41rem;
        height: 17.75rem;
    }
    @media ${device.mobileS} {
        width: 35rem;
    }
`
const AddressTextShared = css`
    font-size: var(--text-size-s);

    @media ${device.laptop} {
        font-size: var(--text-size-sm);
    }
`
const StyledLinkText = styled(LinkText)`
    ${AddressTextShared}
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
                            <MapLink
                                rel="noopener noreferrer"
                                target="_blank"
                                href="https://g.page/r/CRyKELlnWQ3iEAE"
                            >
                                <MapContainer>
                                    <Image
                                        img_name="map-malta.png"
                                        alt={localize('Malta Office')}
                                        width="100%"
                                        height="100%"
                                    />
                                </MapContainer>
                            </MapLink>
                        </ImageWrapper>
                        <Content>
                            <StyledHeader as="h4" align="left">
                                {localize('Malta')}
                            </StyledHeader>
                            <br />
                            <AddressContainer>
                                <MapIconWrapper>
                                    <MapIcon />
                                </MapIconWrapper>
                                <StyledLinkText
                                    target="_blank"
                                    color="black-3"
                                    href="https://g.page/r/CRyKELlnWQ3iEAE"
                                >
                                    <Localize
                                        translate_text="Level 3, W Business Centre,<0/>Triq Dun Karm Birkirkara BKR 9033 Malta"
                                        components={[<br key={0} />]}
                                    />
                                </StyledLinkText>
                            </AddressContainer>

                            <StyledText>
                                <PhoneIcon />
                                +356 2131 6105
                            </StyledText>
                        </Content>
                    </Office>
                    <Splitter></Splitter>
                    <EvenOffice>
                        <Content>
                            <StyledHeader as="h4" align="left">
                                {localize('Malaysia')}
                            </StyledHeader>
                            <br />
                            <AddressContainer>
                                <MapIconWrapper>
                                    <MapIcon />
                                </MapIconWrapper>
                                <StyledLinkText
                                    target="_blank"
                                    color="black-3"
                                    size="var(--text-size-s)"
                                    href="https://g.page/r/CQODFgzIJPYtEAE"
                                >
                                    <Localize
                                        translate_text="C-13, iTech Tower, Jalan Impact, Cyber 6,<0 />63000 Cyberjaya, Selangor, Malaysia."
                                        components={[<br key={0} />]}
                                    />
                                </StyledLinkText>
                            </AddressContainer>
                            <StyledText>
                                <PhoneIcon />
                                +60 3 8322 8178
                            </StyledText>
                        </Content>
                        <ImageWrapper>
                            <MapLink
                                rel="noopener noreferrer"
                                target="_blank"
                                href="https://g.page/r/CQODFgzIJPYtEAE"
                            >
                                <MapContainer>
                                    <Image
                                        img_name="map-cyberjaya.png"
                                        alt={localize('Malaysia Office')}
                                        width="100%"
                                        height="100%"
                                    />
                                </MapContainer>
                            </MapLink>
                        </ImageWrapper>
                    </EvenOffice>
                    <Splitter></Splitter>
                    <Office>
                        <ImageWrapper>
                            <MapContainer>
                                <Image
                                    img_name="map-labuan.png"
                                    alt={localize('Labuan Office')}
                                    width="100%"
                                    height="100%"
                                />
                            </MapContainer>
                        </ImageWrapper>
                        <Content>
                            <StyledHeader as="h4" align="left">
                                {localize('Labuan')}
                            </StyledHeader>
                            <br />
                            <AddressContainer>
                                <MapIconWrapper>
                                    <MapIcon />
                                </MapIconWrapper>
                                <Text target="_blank" color="black-3">
                                    <Localize
                                        translate_text="F16, 1st Floor, Paragon Labuan,<0 />Jalan Tun Mustapha, 87000, Labuan, Malaysia."
                                        components={[<br key={0} />]}
                                    />
                                </Text>
                            </AddressContainer>
                            <StyledText>
                                <PhoneIcon />
                                +60 87 50 4126
                            </StyledText>
                        </Content>
                    </Office>
                    <Splitter></Splitter>
                    <EvenOffice>
                        <Content>
                            <StyledHeader as="h4" align="left">
                                {localize('Dubai')}
                            </StyledHeader>
                            <br />
                            <AddressContainer>
                                <MapIconWrapper>
                                    <MapIcon />
                                </MapIconWrapper>
                                <Text target="_blank" color="black-3">
                                    <Localize
                                        translate_text="Unit 3004, 1 Lake Plaza, Cluster T,<0/>Jumeirah Lake Towers, Dubai, UAE"
                                        components={[<br key={0} />]}
                                    />
                                </Text>
                            </AddressContainer>
                            <StyledText>
                                <PhoneIcon />
                                +9714 399 0404
                            </StyledText>
                        </Content>
                        <ImageWrapper>
                            <MapContainer>
                                <Image
                                    img_name="map-dubai-office.png"
                                    alt={localize('Dubai Office')}
                                    width="100%"
                                    height="100%"
                                />
                            </MapContainer>
                        </ImageWrapper>
                    </EvenOffice>
                    <Splitter></Splitter>
                    <Office>
                        <ImageWrapper>
                            <MapContainer>
                                <Image
                                    img_name="map-paraguay.png"
                                    alt={localize('paraguay Office')}
                                    width="100%"
                                    height="100%"
                                />
                            </MapContainer>
                        </ImageWrapper>
                        <Content>
                            <StyledHeader as="h4" align="left">
                                {localize('Paraguay')}
                            </StyledHeader>
                            <br />
                            <AddressContainer>
                                <MapIconWrapper>
                                    <MapIcon />
                                </MapIconWrapper>
                                <Text target="_blank" color="black-3">
                                    <Localize
                                        translate_text="886, Edificio Australia, Calle Herib,<0 />Campos Cerveray Tregnaghi, Distriti de Stma, Trinidad, Asuncion, Paraguay."
                                        components={[<br key={0} />]}
                                    />
                                </Text>
                            </AddressContainer>
                            <StyledText>
                                <PhoneIcon />
                                +595 99 129 8762
                            </StyledText>
                        </Content>
                    </Office>
                </OfficeWrapper>
            </OfficesWrapper>
        </Wrapper>
    )
}
