import React from 'react'
import styled from 'styled-components'
import { Text } from '../../components/elements/typography'
import Show from 'components/containers/show'
import { Header, Image } from 'components/elements'
import { localize, Localize } from 'components/localization'
// import MapIcon from 'images/svg/call-us.svg'
// import TelIcon from 'images/svg/chat-live.svg'
import { Container } from 'components/containers'

const Wrapper = styled.section`
    border-top: 1px solid #d8d8d8;
    width: 100%;
    height: 181.3rem;
    background-color: var(--color-white);
    padding: 8rem 23rem;
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
`
const StyledHeader = styled(Header)`
    margin-bottom: 0.8rem;
`
const Content = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    width: 50%;

    :nth-child(even) {
        margin-left: 8rem;
    }
`
const ImageWrapper = styled.div`
    width: 50%;
`
const StyledText = styled(Text)`
    margin-bottom: ${props => props.marginBttom || '0.8rem'};
    color: ${props => props.color || 'var(--color-black-3)'};
`
const Splitter = styled.div`
    background-color: #d8d8d8;
    height: 0.1rem;
    width: 98rem;
`
export const Offices = () => {
    return (
        <Show.Desktop>
            <Wrapper>
                <StyledHeader as="h3" align="center" color="--color-black-3">
                    {localize('Our offices')}
                </StyledHeader>
                <OfficesWrapper>
                    <Office>
                        <ImageWrapper>
                            <Image
                                img_name="map-malta.png"
                                alt={localize('Malta Office')}
                                width="49rem"
                                height="21.2rem"
                            />
                        </ImageWrapper>

                        <Content>
                            <StyledHeader as="h4" color="--color-black-3" align="left">
                                {localize('Malta')}
                            </StyledHeader>
                            <StyledText marginBttom="2.1rem">{localize('Office')}</StyledText>
                            <StyledText width="29.9rem" marginBttom="1.6rem">
                                <Localize translate_text="Level 3, W Business Centre, <br> Triq Dun Karm Birkirkara BKR9033 Malta." />
                            </StyledText>
                            <StyledText>{localize('+35621316105')}</StyledText>
                        </Content>
                    </Office>
                    <Splitter></Splitter>
                    <Office>
                        <Content>
                            <StyledHeader as="h4" color="--color-black-3" align="left">
                                {localize('Malaysia')}
                            </StyledHeader>
                            <StyledText marginBttom="2.1rem">
                                {localize('Cyberjaya office')}
                            </StyledText>
                            <StyledText width="29.9rem" marginBttom="1.6rem">
                                <Localize translate_text="C-13, iTech Tower, Jalan Impact, Cyber 6, <br> 63000Cyberjaya, Selangor, Malaysia." />
                            </StyledText>
                            <StyledText>{localize('+603-8322 8178')}</StyledText>
                        </Content>
                        <ImageWrapper>
                            <Image
                                img_name="map-cyberjaya.png"
                                alt={localize('Malaysia Office')}
                                width="49rem"
                                height="21.2rem"
                            />
                        </ImageWrapper>
                    </Office>
                    <Splitter></Splitter>
                    <Office>
                        <ImageWrapper>
                            <Image
                                img_name="map-malta.png"
                                alt={localize('Labuan Office')}
                                width="49rem"
                                height="21.2rem"
                            />
                        </ImageWrapper>
                        <Content>
                            <StyledHeader as="h4" color="--color-black-3" align="left">
                                {localize('Malaysia')}
                            </StyledHeader>
                            <StyledText marginBttom="2.1rem">
                                {localize('Labuan office')}
                            </StyledText>
                            <StyledText width="29.9rem" marginBttom="1.6rem">
                                <Localize translate_text="F16, 1st Floor, Paragon Labuan, Jalan Tun <br> Mustapha, 87000, Labuan" />
                            </StyledText>
                            <StyledText>{localize('+6087-504126')}</StyledText>
                        </Content>
                    </Office>
                    <Splitter></Splitter>
                    <Office>
                        <Content>
                            <StyledHeader as="h4" color="--color-black-3" align="left">
                                {localize('Dubai')}
                            </StyledHeader>
                            <StyledText marginBttom="2.1rem">{localize('Office')}</StyledText>
                            <StyledText width="29.9rem" marginBttom="1.6rem">
                                <Localize translate_text="Unit 3004, 1 Lake Plaza, Cluster T, Jumeirah Lake <br> Towers, Dubai, UAE." />
                            </StyledText>
                            <StyledText>{localize('+971 4 399 0404')}</StyledText>
                        </Content>
                        <ImageWrapper>
                            <Image
                                img_name="map-dubai.png"
                                alt={localize('Dubai Office')}
                                width="49rem"
                                height="21.2rem"
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
                                height="21.2rem"
                            />
                        </ImageWrapper>
                        <Content>
                            <StyledHeader as="h4" color="--color-black-3" align="left">
                                {localize('Paraguay')}
                            </StyledHeader>
                            <StyledText marginBttom="2.1rem">{localize('Office')}</StyledText>
                            <StyledText width="29.9rem" marginBttom="1.6rem">
                                <Localize translate_text="886, Edificio Australia, Calle Herib, Campos Cervera <br>  y Tregnaghi, Distriti de Stma, Trinidad, Asuncion, <br> Paraguay" />
                            </StyledText>
                            <StyledText>{localize('+603-8322 8178')}</StyledText>
                        </Content>
                    </Office>
                </OfficesWrapper>
            </Wrapper>
        </Show.Desktop>
    )
}
