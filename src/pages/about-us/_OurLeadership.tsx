import React from 'react'
import styled from 'styled-components'
import { graphql, useStaticQuery } from 'gatsby'
import { localize, LocalizedLink } from 'components/localization'
import { SectionContainer, Flex, CssGrid } from 'components/containers'
import { Header, QueryImage, ImageWrapper } from 'components/elements'
import device from 'themes/device'
import { ImageDataLike } from 'gatsby-plugin-image'
import Linkedin from 'images/svg/about-us/linkedin.svg'

const query = graphql`
    query {
        antony: file(relativePath: { eq: "about-us/antony.jpg" }) {
            ...fadeIn
        }
        derek: file(relativePath: { eq: "about-us/derek.jpg" }) {
            ...fadeIn
        }
        gary: file(relativePath: { eq: "about-us/gary.jpg" }) {
            ...fadeIn
        }
        jennice: file(relativePath: { eq: "about-us/jennice.jpg" }) {
            ...fadeIn
        }
        jeya: file(relativePath: { eq: "about-us/jeya.jpg" }) {
            ...fadeIn
        }
        jy: file(relativePath: { eq: "about-us/jy.jpg" }) {
            ...fadeIn
        }
        joanna: file(relativePath: { eq: "about-us/joanna.jpg" }) {
            ...fadeIn
        }
        louise: file(relativePath: { eq: "about-us/louise.jpg" }) {
            ...fadeIn
        }
        rakshit: file(relativePath: { eq: "about-us/rakshit.jpg" }) {
            ...fadeIn
        }
        raunak: file(relativePath: { eq: "about-us/raunak.jpg" }) {
            ...fadeIn
        }
        seema: file(relativePath: { eq: "about-us/seema.jpg" }) {
            ...fadeIn
        }
        shyamala: file(relativePath: { eq: "about-us/shyamala.jpg" }) {
            ...fadeIn
        }
        tom: file(relativePath: { eq: "about-us/tom.jpg" }) {
            ...fadeIn
        }
        waqas: file(relativePath: { eq: "about-us/waqas.jpg" }) {
            ...fadeIn
        }
    }
`

const StyledSectionContainer = styled(SectionContainer)`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0: 
    @media ${device.tablet} {
        padding: 0 16px 40px;
    }
    
`

const StyledCssGrid = styled(CssGrid)`
    margin: 0 40px;
    max-width: 996px;
    @media (max-width: 1050px) {
        max-width: 100%;
    }
    @media ${device.laptop} {
        margin: 0;
    }
`

const StyledHeader = styled(Header)`
    @media ${device.laptop} {
        font-size: 28px;
    }
`

const StyledImageWrapper = styled(ImageWrapper)`
    display: flex;
    align-items: end;
    justify-content: center;
    @media ${device.tablet} {
        width: 104px;
        height: 104px;
    }
    @media ${device.mobileL} {
        width: 88px;
        height: 88px;
    }
`
const StyledQueryImage = styled(QueryImage)`
    @media ${device.tablet} {
        width: 104px;
        height: 104px;
    }
    @media ${device.mobileL} {
        width: 88px;
        height: 88px;
    }
`

const ModalFlex = styled(Flex)`
    position: absolute;
    margin-bottom: -95px;
    z-index: 1;
    border-radius: 5px;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 4px 15px;
    width: fit-content;
`
type ModalPropsType = {
    name: string
    position: string
    link?: string
}

const StyledLogo = styled.img`
    width: 32px;
    height: 32px;
    filter: grayscale(100%);
    margin-bottom: 5px;
    &:hover {
        filter: unset;
    }
`

const Modal = ({ name, position, link }: ModalPropsType) => {
    return (
        <ModalFlex ai="center" direction="column" width="unset" height="unset">
            <Header as="h4" padding="5px 5px 0" type="sub-paragraph" align="center">
                {name}
            </Header>
            <Header
                as="h4"
                padding="0px 10px 5px"
                type="sub-paragraph"
                weight="normal"
                align="center"
            >
                {position}
            </Header>
            {link && (
                <LocalizedLink external="true" to={link} target="_blank" rel="noopener noreferrer">
                    <StyledLogo src={Linkedin} alt="" />
                </LocalizedLink>
            )}
        </ModalFlex>
    )
}
type LeaderType = {
    name: string
    position: string
    link: string
    image: ImageDataLike
}

type LeaderPopsType = {
    leader: LeaderType
}
const Leader: React.FC<LeaderPopsType> = ({ leader }) => {
    const [isPopupShown, SetIsPopupShown] = React.useState<boolean>(true)
    return (
        <StyledImageWrapper width="120px" height="120px">
            <StyledQueryImage
                width="100%"
                height="100%"
                data={leader.image}
                alt="leader"
                loading="lazy"
            />
            {isPopupShown && (
                <Modal name={leader.name} position={leader.position} link={leader.link} />
            )}
            <></>
        </StyledImageWrapper>
    )
}

const OurLeadership = () => {
    const leaders_data = useStaticQuery(query)
    const leaders: LeaderType[] = [
        {
            name: 'Jean-Yves Sireau',
            position: 'Chief Executive Officer',
            link: 'https://www.linkedin.com/in/jeanyvessireau/',
            image: leaders_data.jy,
        },
        {
            name: 'Rakshit Choudhary ',
            position: 'Chief Operating Officer',
            link: 'https://www.linkedin.com/in/rakshit-choudhary-9a67b61b0/',
            image: leaders_data.rakshit,
        },
        {
            name: 'Tom Molesworth',
            position: 'Chief Technology Officer',
            link: 'https://www.linkedin.com/company/derivdotcom/life/0171ced9-e623-47fa-970b-39f7ef77962e/',
            image: leaders_data.tom,
        },
        {
            name: 'Joanna Frendo',
            position: 'Chief Compliance Officer',
            link: 'https://www.linkedin.com/in/joanna-frendo-4449975/',
            image: leaders_data.joanna,
        },
        {
            name: 'Louise Wolf',
            position: 'Chief Financial Officer',
            link: 'https://www.linkedin.com/in/louise-wolf-7b98b460/',
            image: leaders_data.louise,
        },
        {
            name: 'Shyamala Siva',
            position: 'Chief Administrative Officer',
            link: 'https://www.linkedin.com/in/shyamala-siva-90043b208/',
            image: leaders_data.shyamala,
        },
        {
            name: 'Gary Ross Vytialingam',
            position: 'Chief Risk Officer',
            link: 'https://www.linkedin.com/in/gary-ross-vytialingam-37a729106/',
            image: leaders_data.gary,
        },
        {
            name: 'Seema Hallon',
            position: 'Head of People Managment',
            link: 'https://www.linkedin.com/in/seema-hallon-6919073/',
            image: leaders_data.seema,
        },
        {
            name: 'Derek Swift',
            position: 'Head of Marketing & Global Partnerships',
            link: 'https://www.linkedin.com/in/derek-swift-5787208/',
            image: leaders_data.derek,
        },
        {
            name: 'Waqas Awan',
            position: 'Head of Product & Content Design',
            link: 'https://www.linkedin.com/in/waqasawan/',
            image: leaders_data.waqas,
        },
        {
            name: 'Raunak Kathuria',
            position: 'Head of Back End Development',
            link: 'https://www.linkedin.com/in/raunakkathuria/',
            image: leaders_data.raunak,
        },
        {
            name: 'Jeyavarthini Vairakanan',
            position: 'Head of Customer Support',
            link: 'https://www.linkedin.com/in/jeyavarthini-vairakanan-812b7a121/',
            image: leaders_data.jeya,
        },
        {
            name: 'Antony Pradeep',
            position: 'Head of Strategy & Project Management',
            link: 'https://www.linkedin.com/in/antonypradeep/',
            image: leaders_data.antony,
        },
        {
            name: 'Jennice Lourdsamy',
            position: 'Head of Accounts',
            link: 'https://www.linkedin.com/in/jennice-lourdsamy-352b897/',
            image: leaders_data.jennice,
        },
    ]
    return (
        <StyledSectionContainer padding="0 16px 120px" background="var(--color-white)">
            <StyledHeader as="h2" size="48px" align="center" type="page-title">
                {localize('Our leadership')}
            </StyledHeader>
            <StyledCssGrid
                columns="repeat(auto-fill, 120px)"
                column_gap="99px"
                row_gap="80px"
                laptop_columns="repeat(auto-fill, 120px)"
                tablet_columns="repeat(auto-fill, 120px)"
                tablet_column_gap="70px"
                tablet_row_gap="80px"
                mobile_columns="repeat(auto-fill, 88px)"
                mobile_column_gap="24px"
                mobile_row_gap="24px"
            >
                {leaders.map((leader: LeaderType, index: number) => (
                    <Leader leader={leader} key={index} />
                ))}
            </StyledCssGrid>
        </StyledSectionContainer>
    )
}

export default OurLeadership
