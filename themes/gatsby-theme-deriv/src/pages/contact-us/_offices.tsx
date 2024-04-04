import React from 'react'
import styled from 'styled-components'
import { isDesktop } from 'react-device-detect'
import { TOfficeAddress, TOurOffices } from './_types'
import { Header, Text, LocalizedLinkText } from 'components/elements'
import { SectionContainer, Container, Flex, Box, Desktop, Mobile } from 'components/containers'
import { Localize, LocalizedLink } from 'components/localization'
import device from 'themes/device'

type GridLayoutProps = {
    children?: React.ReactNode | React.ReactChild
    row_gap?: string
    mt?: string
}

const Content = styled.div`
    max-width: 996px;
    width: 100%;
`

const GridLayout = styled.div<GridLayoutProps>`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 2.4rem;
    grid-row-gap: ${(props) => props.row_gap || '2.4rem'};
    width: 100%;
    margin-top: ${(props) => props.mt || 0};

    @media ${device.tablet} {
        grid-template-columns: 1fr;
    }
`

const MapContainer = styled.div`
    width: 100%;
    max-width: 22.8rem;
    height: 12rem;

    @media ${device.mobileL} {
        img {
            inline-size: 100%;
            block-size: auto;
        }
    }
`

const BorderBox = styled.div`
    display: flex;
    padding-top: 1.6rem;
    border-top: 1px solid var(--color-grey-2);

    @media ${device.mobileL} {
        flex-direction: column-reverse;
        padding-top: 0;

        ${MapContainer} {
            height: 173px;
            max-width: 100%;
        }
        ${Text} {
            font-size: 16px;
            margin-left: 0;
            margin-top: 8px;
            margin-bottom: 16px;
        }
        ${LocalizedLinkText} {
            font-size: 16px;
            margin-left: 0;
            margin-top: 8px;
            margin-bottom: 16px;
        }
    }
`

const CountryText = styled(Text)`
    font-size: var(--text-size-xs);
    color: var(--color-grey-5);
    margin-bottom: 0.8rem;
    @media ${device.mobileL} {
        margin-bottom: 13px;
        margin-top: 13px;
    }
`

const FullBorder = styled(BorderBox)`
    padding: 1rem 0;
`

const ResHeader = styled(Header)`
    margin-bottom: 4rem;
    text-align: center;

    @media ${device.tablet} {
        font-size: 40px;
        margin-bottom: 40px;
    }
`

const ContinentHeader = styled(Header)`
    border-bottom: 1px solid var(--color-grey-2);
    height: 45px;
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    line-height: 30px;
    white-space: nowrap;
    margin-bottom: 38px;
    text-transform: uppercase;
    margin-top: 30px;
    color: #85acb0;
    flex: none;
    order: 0;
    flex-grow: 0;

    @media ${device.mobileL} {
        margin-top: 65px;
        margin-bottom: 0;
    }
`

const OfficeHeader = styled.div`
    display: flex;
    flex-direction: column;

    @media ${device.mobileL} {
        flex-direction: row;
        margin-bottom: 8px;

        ${Header} {
            margin-top: 0;
            margin-bottom: 0;
            margin-left: 16px;
            align-self: flex-end;
            font-size: 20px;
        }
    }
`

const FullBox = styled(Flex)`
    justify-content: flex-start;
    @media ${device.mobileL} {
        flex-direction: column-reverse;

        ${Box} {
            margin-top: 0;
            margin-left: 0;
            margin-bottom: 16px;
        }
        ${CountryText} {
            margin-top: 33px;
            font-size: 14px;
        }
        ${Text} {
            margin-bottom: 33px;
        }
        ${LocalizedLinkText} {
            margin-bottom: 0;
        }
    }
`

const StyledSectionContainer = styled(SectionContainer)`
    @media ${device.tabletL} {
        padding: 40px 0;
    }
`
const StyledMobileAddress = styled.div`
    @media ${device.tablet} {
        max-width: 328px;
        font-size: 14px;
    }

    @media (max-width: 324px) {
        max-width: 320px;
        font-size: 14px;
    }
`

export const Offices = ({
    our_offices,
    office_address,
}: {
    our_offices: TOurOffices
    office_address: TOfficeAddress
}) => {
    return (
        <StyledSectionContainer>
            <Container>
                <Content>
                    <ResHeader as="h2" type="page-title">
                        <Localize translate_text={our_offices} />
                    </ResHeader>
                    {office_address.map(({ continent, country }, idx) => (
                        <React.Fragment key={idx}>
                            <ContinentHeader>
                                <Localize translate_text={continent} />
                            </ContinentHeader>
                            <GridLayout>
                                {country.map(
                                    (
                                        {
                                            country_icon,
                                            country_name,
                                            map_url,
                                            map_image,
                                            address,
                                            city_name,
                                        },
                                        idx,
                                    ) => (
                                        <Flex key={idx} mt="30px" fd="column" max_width="48.6rem">
                                            <OfficeHeader
                                                style={
                                                    (city_name === 'Labuan' ||
                                                        city_name === 'Ciudad del Este' ||
                                                        city_name === 'Reading') &&
                                                    isDesktop
                                                        ? { height: '120px' }
                                                        : {}
                                                }
                                            >
                                                <div>
                                                    {country_icon && (
                                                        <img
                                                            src={country_icon?.localFile?.publicURL}
                                                        />
                                                    )}
                                                </div>
                                                {country_name && (
                                                    <Header
                                                        as="h4"
                                                        type="sub-section-title"
                                                        mt="0.8rem"
                                                        mb="1.6rem"
                                                    >
                                                        <Localize translate_text={country_name} />
                                                    </Header>
                                                )}
                                            </OfficeHeader>
                                            {city_name ? (
                                                <FullBorder>
                                                    <FullBox>
                                                        <MapContainer>
                                                            <LocalizedLink
                                                                to={map_url}
                                                                external
                                                                target="_blank"
                                                                rel="noopener noreferrer"
                                                            >
                                                                <img
                                                                    src={
                                                                        map_image?.localFile
                                                                            ?.publicURL
                                                                    }
                                                                    height="100%"
                                                                />
                                                            </LocalizedLink>
                                                        </MapContainer>
                                                        <Box mt="0.8rem" ml="1.6rem">
                                                            <CountryText>{city_name}</CountryText>
                                                            <LocalizedLinkText
                                                                to={map_url}
                                                                external
                                                                target="_blank"
                                                                rel="noopener noreferrer"
                                                                mt="0.8rem"
                                                                ml="1.6rem"
                                                            >
                                                                <Desktop>
                                                                    <p
                                                                        style={{
                                                                            marginTop: '-20px',
                                                                        }}
                                                                    >
                                                                        {address}
                                                                    </p>
                                                                </Desktop>
                                                                <Mobile>
                                                                    <StyledMobileAddress>
                                                                        {address}
                                                                    </StyledMobileAddress>
                                                                </Mobile>
                                                            </LocalizedLinkText>
                                                        </Box>
                                                    </FullBox>
                                                </FullBorder>
                                            ) : (
                                                <BorderBox>
                                                    <MapContainer>
                                                        <LocalizedLink
                                                            to={map_url}
                                                            external
                                                            target="_blank"
                                                            rel="noopener noreferrer"
                                                        >
                                                            <img
                                                                src={
                                                                    map_image?.localFile?.publicURL
                                                                }
                                                                height="100%"
                                                            />
                                                        </LocalizedLink>
                                                    </MapContainer>
                                                    <LocalizedLinkText
                                                        to={map_url}
                                                        external
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        mt="0.8rem"
                                                        ml="1.6rem"
                                                    >
                                                        <Desktop>
                                                            <p>{address}</p>
                                                        </Desktop>
                                                        <Mobile>
                                                            <StyledMobileAddress>
                                                                {address}
                                                            </StyledMobileAddress>
                                                        </Mobile>
                                                    </LocalizedLinkText>
                                                </BorderBox>
                                            )}
                                        </Flex>
                                    ),
                                )}
                            </GridLayout>
                        </React.Fragment>
                    ))}
                </Content>
            </Container>
        </StyledSectionContainer>
    )
}

export default Offices
