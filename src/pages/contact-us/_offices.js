import React from 'react'
import styled from 'styled-components'
import { Text, LinkText } from 'components/elements/typography'
import { Header, Image } from 'components/elements'
import { localize, Localize } from 'components/localization'
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
const AddressContainer = styled.div`
    display: flex;
    flex-direction: row;
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

    @media ${device.mobileL} {
        display: none;
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
`
const Splitter = styled.div`
    background-color: var(--color-grey-8);
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
                            <MapLink
                                rel="noopener noreferrer"
                                target="_blank"
                                href="https://maps.google.com/?q=Binary+(Europe)+Ltd&35.903605,14.460732&ll=35.903605,14.460732&z=17"
                            >
                                <Image
                                    img_name="map-malta.png"
                                    alt={localize('Malta Office')}
                                    width="49rem"
                                    height="100%"
                                />
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
                                <LinkText
                                    target="_blank"
                                    color="black-3"
                                    size="var(--text-size-s)"
                                    href="https://maps.google.com/?q=Binary+(Europe)+Ltd&35.903605,14.460732&ll=35.903605,14.460732&z=17"
                                >
                                    <Localize
                                        translate_text="Level 3, W Business Centre,<0 />Triq Dun Karm Birkirkara BKR9033 Malta."
                                        components={[<br key={0} />]}
                                    />
                                </LinkText>
                            </AddressContainer>

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
                            <AddressContainer>
                                <MapIconWrapper>
                                    <MapIcon />
                                </MapIconWrapper>
                                <LinkText
                                    target="_blank"
                                    color="black-3"
                                    size="var(--text-size-s)"
                                    href="https://maps.google.com/?q=i-Tech+Tower&2.922708,101.661274&ll=2.922708,101.661274&z=18"
                                >
                                    <Localize
                                        translate_text="C-13, iTech Tower, Jalan Impact, Cyber 6,<0 />63000 Cyberjaya, Selangor, Malaysia."
                                        components={[<br key={0} />]}
                                    />
                                </LinkText>
                            </AddressContainer>
                            <StyledText>
                                <PhoneIcon />
                                +603 83228178
                            </StyledText>
                        </Content>
                        <ImageWrapper>
                            <MapLink
                                rel="noopener noreferrer"
                                target="_blank"
                                href="https://maps.google.com/?q=i-Tech+Tower&2.922708,101.661274&ll=2.922708,101.661274&z=18"
                            >
                                <Image
                                    img_name="map-cyberjaya.png"
                                    alt={localize('Malaysia Office')}
                                    width="49rem"
                                    height="100%"
                                />
                            </MapLink>
                        </ImageWrapper>
                    </Office>
                    <Splitter></Splitter>
                    <Office>
                        <ImageWrapper>
                            <MapLink
                                rel="noopener noreferrer"
                                target="_blank"
                                href="https://maps.google.com/?q=Paragon+Labuan&5.280808,115.244948&ll=5.280808,115.244948&z=17"
                            >
                                <Image
                                    img_name="map-labuan.png"
                                    alt={localize('Labuan Office')}
                                    width="49rem"
                                    height="100%"
                                />
                            </MapLink>
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
                                <LinkText
                                    target="_blank"
                                    color="black-3"
                                    size="var(--text-size-s)"
                                    href="https://maps.google.com/?q=Paragon+Labuan&5.280808,115.244948&ll=5.280808,115.244948&z=17"
                                >
                                    <Localize
                                        translate_text="F16, 1st Floor, Paragon Labuan,<0 />Jalan Tun Mustapha, 87000, Labuan."
                                        components={[<br key={0} />]}
                                    />
                                </LinkText>
                            </AddressContainer>
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
                            <AddressContainer>
                                <MapIconWrapper>
                                    <MapIcon />
                                </MapIconWrapper>
                                <LinkText
                                    target="_blank"
                                    color="black-3"
                                    size="var(--text-size-s)"
                                    href="https://maps.google.com/?q=Lake+Plaza+Dubai&25.079220,55.149569&ll=25.079220,55.149569&z=16"
                                >
                                    <Localize
                                        translate_text="Unit 3004, 1 Lake Plaza, Cluster T,<0 />Jumeirah Lake Towers, Dubai, UAE."
                                        components={[<br key={0} />]}
                                    />
                                </LinkText>
                            </AddressContainer>
                            <StyledText>
                                <PhoneIcon />
                                +9714 399 0404
                            </StyledText>
                        </Content>
                        <ImageWrapper>
                            <MapLink
                                rel="noopener noreferrer"
                                target="_blank"
                                href="https://maps.google.com/?q=Lake+Plaza+Dubai&25.079220,55.149569&ll=25.079220,55.149569&z=16"
                            >
                                <Image
                                    img_name="map-dubai.png"
                                    alt={localize('Dubai Office')}
                                    width="49rem"
                                    height="100%"
                                />
                            </MapLink>
                        </ImageWrapper>
                    </Office>
                    <Splitter></Splitter>
                    <Office>
                        <ImageWrapper>
                            <MapLink
                                rel="noopener noreferrer"
                                target="_blank"
                                href="https://maps.google.com/?q=Edificio+Australia+Asunción&-25.282569,-57.563805&ll=-25.282569,-57.563805&z=17"
                            >
                                <Image
                                    img_name="map-paraguay.png"
                                    alt={localize('paraguay Office')}
                                    width="49rem"
                                    height="100%"
                                />
                            </MapLink>
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
                                <LinkText
                                    target="_blank"
                                    color="black-3"
                                    size="var(--text-size-s)"
                                    href="https://maps.google.com/?q=Edificio+Australia+Asunción&-25.282569,-57.563805&ll=-25.282569,-57.563805&z=17"
                                >
                                    <Localize
                                        translate_text="886, Edificio Australia, Calle Herib,<0 />Campos Cerveray Tregnaghi, Distriti de Stma,<0 />Trinidad, Asuncion, Paraguay."
                                        components={[<br key={0} />]}
                                    />
                                </LinkText>
                            </AddressContainer>
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
